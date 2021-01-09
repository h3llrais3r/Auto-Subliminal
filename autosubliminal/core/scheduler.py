# coding=utf-8

import abc
import datetime
import logging
import os
import threading
import time
import traceback

from six import add_metaclass, text_type

import autosubliminal
from autosubliminal.util.common import camelize, to_dict
from autosubliminal.util.queue import get_wanted_queue_lock, release_wanted_queue_lock
from autosubliminal.util.websocket import send_websocket_event, SCHEDULER_START, SCHEDULER_FINISH

log = logging.getLogger(__name__)


class Scheduler(object):
    """
    Scheduler class.

    :param name: name of the thread to schedule
    :type name: str
    :param process: process to schedule
    :type process: ScheduledProcess
    :param interval: interval in hours between scheduled runs
    :type interval: int
    :param active: indication if the scheduler is active or not
    :type active: bool
    :param initial_delay: indication in seconds for the delay of the initial run of the thread process
    :type initial_delay: int
    :param initial_run: indication if the process should run initially before starting the thread
    :type initial_run: bool
    """

    def __init__(self, name, process, interval, active=True, initial_delay=0, initial_run=False):
        self.name = name
        self.process = process
        self.interval = datetime.timedelta(hours=interval).total_seconds()  # Convert to seconds
        self.active = active
        self.last_run = 0
        self._delay = initial_delay
        self._force_run = False
        self._force_stop = False

        # Register scheduler
        self._register_scheduler()

        # Start thread
        log.info('Starting %s thread', self.name)
        self._thread = threading.Thread(name=self.name, target=self._schedule_process)
        self._thread.start()

        # Initial run will block caller thread until process is executed the first time
        if self.active and initial_run:
            log.debug('Waiting for initial run of %s thread', self.name)
            while not self.last_run:
                time.sleep(1)

    def _register_scheduler(self):
        # Add scheduler to dict of schedulers
        scheduler_name = self.name
        while scheduler_name in autosubliminal.SCHEDULERS:
            # Add suffix in case of multiple schedulers with same name (but this shouldn't occur)
            suffix = 1
            suffix_index = scheduler_name.rfind('-')
            if suffix_index > 0:
                scheduler_name_suffix = scheduler_name[suffix_index + 1:]
                try:
                    suffix = int(scheduler_name_suffix)
                    suffix += 1
                    scheduler_name = scheduler_name[:suffix_index] + '-' + text_type(suffix)
                except Exception:
                    scheduler_name = scheduler_name + '-' + text_type(suffix)
            else:
                scheduler_name = scheduler_name + '-' + text_type(suffix)
        self.name = scheduler_name
        autosubliminal.SCHEDULERS[scheduler_name] = self

    def _schedule_process(self):
        while True:
            # Check for stop
            if self._force_stop:
                break

            # Check if we need to run the process (only check if the scheduler is marked as active)
            run_needed = False
            current_time = time.time()
            if self.active:
                if self._force_run:
                    run_needed = True
                elif current_time - self.last_run > self.interval:
                    run_needed = True
            elif self.last_run:
                # Clear last_run if not active
                self.last_run = 0

            # Run if needed
            if run_needed:
                if self._delay:
                    log.debug('Delaying %s thread process with %s seconds', self.name, self._delay)
                    time.sleep(self._delay)
                self._run_process(current_time)

            time.sleep(1)

    def _run_process(self, current_time):
        # Check if the run needs a lock
        run_lock = self.process.force_run_lock if self._force_run else self.process.run_lock

        # Delay process if lock cannot be acquired
        if run_lock and not get_wanted_queue_lock():
            # Increase delay with 1 second each time the process cannot yet run
            self._delay += 1
            return

        try:
            # Mark as running
            self.process.running = True
            send_websocket_event(SCHEDULER_START, data=self.to_dict(camelize))

            log.debug('Running %s thread process', self.name)
            self.process.run(self._force_run)

            # Update process properties after process run
            self.last_run = current_time
            self._delay = 0
            if self._force_run:
                self._force_run = False

            # Mark as finished
            self.process.running = False
            send_websocket_event(SCHEDULER_FINISH, data=self.to_dict(camelize))

        except:
            print(traceback.format_exc())
            self.process.running = False
            os._exit(1)

        finally:
            # Release lock if needed
            if run_lock:
                release_wanted_queue_lock()

    def stop(self):
        """Stop the scheduler."""
        log.info('Stopping %s thread', self.name)

        self._force_stop = True
        self._thread.join(10)

    def activate(self):
        """Activate the scheduler."""
        log.info('Activating %s scheduler', self.name)
        self.active = True

    def deactivate(self):
        """Deactivate the scheduler."""
        log.info('Deactivating %s scheduler', self.name)
        self.active = False

    def run(self, delay=0):
        """Force run the scheduler."""
        log.info('Running %s thread', self.name)

        self._force_run = True
        self._delay = delay

    def to_dict(self, key_fn, *args, **kwargs):
        """Convert the object to its dict representation.

        :param key_fn: the function that is executed on the keys when creating the dict
        :type key_fn: function
        :param args: optional list of attributes not to include in the conversion
        :type args: tuple
        :param kwargs: optional dict with custom attributes to include in the conversion
        :type args: dict
        :return: the json dict
        :rtype: dict
        """
        exclude_args = ['process', 'last_run', 'next_run']
        if args:
            exclude_args.extend(list(args))

        # Define kwargs to include
        last_run_in_ms = self.last_run * 1000  # convert to ms for javascript date compatibility
        next_run_in_ms = self.next_run * 1000  # convert to ms for javascript date compatibility
        include_kwargs = {'last_run': last_run_in_ms, 'next_run': next_run_in_ms}
        if kwargs:
            include_kwargs.update(kwargs)

        return to_dict(self, key_fn, *exclude_args, **include_kwargs)

    @property
    def alive(self):
        return self._thread.isAlive()

    @property
    def next_run(self):
        if self.last_run:
            return self.last_run + self.interval
        else:
            return 0

    @property
    def running(self):
        return self.process.running


@add_metaclass(abc.ABCMeta)
class ScheduledProcess(object):
    """
    Base class for all scheduled processes.
    """

    def __init__(self, run_lock=True, force_run_lock=True):
        self.running = False
        self.run_lock = run_lock
        self.force_run_lock = force_run_lock

    @abc.abstractmethod
    def run(self, force_run):
        pass
