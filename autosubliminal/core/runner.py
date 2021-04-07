# coding=utf-8

import logging
import threading
import time
from abc import ABC, abstractmethod

log = logging.getLogger(__name__)


class Runner(ABC):
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
        self._thread = threading.Thread(name=self.name, target=self._run_process)
        self._thread.start()

    def _run_process(self):
        while not self._force_stop:
            self.run()
            time.sleep(1)

    @abstractmethod
    def run(self):
        pass

    def stop(self):
        log.info('Stopping thread %s', self.name)
        self._force_stop = True
        self._thread.join(10)
