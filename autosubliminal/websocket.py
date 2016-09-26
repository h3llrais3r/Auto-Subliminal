import abc
import json
import logging
import threading
import time

import cherrypy
from ws4py.websocket import WebSocket

import autosubliminal

log = logging.getLogger(__name__)


class Runner(object):
    """
    Base Runner class. Extend this class for permanent thread runners.

    :param name: Name of the thread to schedule
    :type name: str
    """

    __metaclass__ = abc.ABCMeta

    def __init__(self, name):
        self.name = name
        self._force_stop = False

        # Start thread
        log.info("Starting thread %s" % self.name)
        self._thread = threading.Thread(target=self._run_process, name=self.name)
        self._thread.start()

    def _run_process(self):
        while not self._force_stop:
            self.run()
            time.sleep(1)

    @abc.abstractmethod
    def run(self):
        pass

    def stop(self):
        log.info("Stopping thread %s" % self.name)
        self._force_stop = True
        self._thread.join(10)


class WebSocketHandler(WebSocket):
    """
    WebSocket handler class for handling socket messages.
    For now, we only send messages from our server and do not read them.
    In case we should receive a message, we just print it.
    """

    def received_message(self, message):
        log.warning("Unsupported message received on websocket server: " + message.data)


class WebSocketBroadCaster(Runner):
    """
    WebSocket broadcaster class for broadcasting socket messages.
    """

    def run(self):
        # Check for messages from the queue and pop them
        if len(autosubliminal.MESSAGEQUEUE) > 0:
            message = autosubliminal.MESSAGEQUEUE.pop(0)
            log.debug("Broadcasting message: %s" % message)
            # Message from message queue is a dict, so convert it to string via json.dumps(...)
            cherrypy.engine.publish('websocket-broadcast', json.dumps(message))
