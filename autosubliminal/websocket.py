import json
import logging

import cherrypy
from ws4py.websocket import WebSocket

import autosubliminal
from autosubliminal.runner import Runner

log = logging.getLogger(__name__)


class WebSocketHandler(WebSocket):
    """
    WebSocket handler class for handling socket messages.
    For now, we only send messages from our server and do not read them.
    In case we should receive a message, we just print it.
    """

    def received_message(self, message):
        log.warning('Unsupported message received on websocket server: ' + message.data)


class WebSocketBroadCaster(Runner):
    """
    WebSocket broadcaster class for broadcasting socket messages.
    """

    def run(self):
        # Check for messages from the queue and pop them
        if len(autosubliminal.MESSAGEQUEUE) > 0:
            message = autosubliminal.MESSAGEQUEUE.pop(0)
            log.debug('Broadcasting message: %s' % message)
            # Message from message queue is a dict, so convert it to string via json.dumps(...)
            cherrypy.engine.publish('websocket-broadcast', json.dumps(message))
