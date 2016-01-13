import logging
import time
import threading
import os
import traceback

import autosubliminal

log = logging.getLogger(__name__)


class Scheduler(object):
    def __init__(self, name, process, interval, initial_run=False):
        self.delay = 0
        self.last_run = 0
        self.force_stop = False
        self.force_run = False
        self.name = name
        self.process = process
        self.interval = interval
        self.thread = threading.Thread(target=self._start_scheduler, name=self.name)
        # Run before starting thread will block caller thread until process is executed the first time
        log.info("Starting thread %s" % self.name)
        if initial_run:
            self._run_process(time.time())
        # Start thread
        self._start_thread()

    def _start_scheduler(self):
        while True:
            # Check for stop
            if self.force_stop:
                break
            # Check if we need to run the process
            run_needed = False
            current_time = time.time()
            if self.force_run:
                run_needed = True
                if self.delay:
                    log.info("Delaying thread %s with %s seconds" % (self.name, self.delay))
                    time.sleep(self.delay)
            if current_time - self.last_run > self.interval:
                run_needed = True
            if run_needed:
                self._run_process(current_time)
            time.sleep(1)

    def _run_process(self, current_time):
        try:
            self.process.running = True
            log.debug("Running thread process")
            if self.process.run():
                # Update process properties if process has run
                self.last_run = current_time
                if self.force_run:
                    self.force_run = False
                    self.delay = 0
            self.process.running = False
        except:
            print traceback.format_exc()
            os._exit(1)

    def _start_thread(self):
        self.thread.start()
        # Add thread to list of threads
        thread_name = self.name
        while thread_name in autosubliminal.THREADS.keys():
            # Add suffix in case of multiple threads with same name (but this shouldn't occur)
            suffix = 1
            suffix_index = thread_name.rfind('-')
            if suffix_index > 0:
                thread_name_suffix = thread_name[suffix_index + 1:]
                try:
                    suffix = int(thread_name_suffix)
                    suffix += 1
                    thread_name = thread_name[:suffix_index] + "-" + str(suffix)
                except:
                    thread_name = thread_name + "-" + str(suffix)
            else:
                thread_name = thread_name + "-" + str(suffix)
        self.name = thread_name
        autosubliminal.THREADS[thread_name] = self

    def stop(self):
        log.info("Stopping thread %s" % self.name)
        self.force_stop = True
        self.thread.join(10)

    def run(self, delay=0):
        log.info("Running thread %s" % self.name)
        self.force_run = True
        self.delay = delay


class Process(object):
    def __init__(self):
        self.running = False
