# coding=utf-8

import abc
import logging
import threading
import time

from six import add_metaclass

log = logging.getLogger(__name__)


@add_metaclass(abc.ABCMeta)
class Runner(object):
    """
    Base Runner class. Extend this class for permanent thread runners.

    :param name: name of the thread to schedule
    :type name: str
    """

    def __init__(self, name):
        self.name = name
        self._force_stop = False

        # Start thread
        log.info('Starting thread %s', self.name)
        self._thread = threading.Thread(target=self._run_process, name=self.name)
        self._thread.start()

    def _run_process(self):
        while not self._force_stop:
            self.run()
            time.sleep(1)

    @abc.abstractmethod
    def run(self):
        pass  # pragma: no cover

    def stop(self):
        log.info('Stopping thread %s', self.name)
        self._force_stop = True
        self._thread.join(10)
