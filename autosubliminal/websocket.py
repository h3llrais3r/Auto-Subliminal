# coding=utf-8

import logging

import cherrypy
from ws4py.messaging import TextMessage
from ws4py.websocket import WebSocket

import autosubliminal
from autosubliminal.core.runner import Runner
from autosubliminal.util.encoding import b2u
from autosubliminal.util.json import from_json, to_json

log = logging.getLogger(__name__)

SUPPORTED_SERVER_EVENT_TYPES = ('RUN_PROCESS',)


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

    def handle_event_message(self, message):
        handled = False
        # Check for a valid event message structure
        if 'message_type' in message and message['message_type'] in message:
            message_type = message['message_type']
            if message_type == 'event':
                event = message[message_type]
                if 'event_type' in event and event['event_type'] in SUPPORTED_SERVER_EVENT_TYPES:
                    event_type = event['event_type']
                    # Handle a RUN_PROCESS event
                    if event_type == 'RUN_PROCESS' and 'process' in event:
                        process = event['process']
                        if process in autosubliminal.SCHEDULERS:
                            autosubliminal.SCHEDULERS[process].run()
                            handled = True

        if not handled:
            log.warning('Unsupported message received on websocket server: %r', message)

        return handled


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
