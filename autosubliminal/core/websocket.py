# coding=utf-8

import logging

import cherrypy
from schema import And, Schema, SchemaError, Use
from ws4py.messaging import TextMessage
from ws4py.websocket import WebSocket

import autosubliminal
from autosubliminal.core.runner import Runner
from autosubliminal.util.encoding import b2u
from autosubliminal.util.json import from_json, to_json

log = logging.getLogger(__name__)

SERVER_EVENT_TYPES = ('RUN_PROCESS',)

SERVER_MESSAGE_SCHEMA = Schema({
    'message_type': 'event',
    'event': {
        'event_type': And(Use(str), lambda p: p in SERVER_EVENT_TYPES),
        'process': And(Use(str))
    }
})


class WebSocketHandler(WebSocket):
    """
    WebSocket handler class for receiving messages on the server through the websocket system.
    For now we only support event messages that trigger something on the server.
    """

    def received_message(self, message):
        if isinstance(message, TextMessage):
            # Data is always returned in bytes through the websocket, so convert it first to unicode
            message_dict = from_json(b2u(message.data))
            self.handle_message(message_dict)
        else:
            log.warning('Unsupported message received on websocket server: %r', message)

    def handle_message(self, message):
        handled = False
        # Check for a valid event message structure
        if self.check_message_structure(message):
            # Handle a RUN_PROCESS event
            event = message['event']
            if event['event_type'] == 'RUN_PROCESS':
                process = event['process']
                if process in autosubliminal.SCHEDULERS:
                    autosubliminal.SCHEDULERS[process].run()
                    handled = True

        if not handled:
            log.warning('Unsupported message received on websocket server: %r', message)

        return handled

    def check_message_structure(self, message):
        try:
            SERVER_MESSAGE_SCHEMA.validate(message)
            return True
        except SchemaError:
            return False


class WebSocketBroadCaster(Runner):
    """
    WebSocket broadcaster class for broadcasting data from the server through the websocket system.
    """

    def run(self):
        # Check for messages on the websocket queue and pop it
        if len(autosubliminal.WEBSOCKETMESSAGEQUEUE) > 0:
            message = autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0)
            log.debug('Broadcasting websocket message: %r', message)
            # The message on the websocket queue is a dict, so convert it to a json string
            cherrypy.engine.publish('websocket-broadcast', to_json(message))
