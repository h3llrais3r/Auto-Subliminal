# coding=utf-8

import codecs
import logging

import cherrypy
import tailer
from schema import And, Schema, SchemaError, Use
from ws4py.messaging import TextMessage
from ws4py.websocket import WebSocket

import autosubliminal
from autosubliminal.core.runner import Runner
from autosubliminal.util.encoding import b2u
from autosubliminal.util.json import from_json, to_json

log = logging.getLogger(__name__)

RUN_PROCESS = 'RUN_PROCESS'

SUPPORTED_EVENT_TYPES = [RUN_PROCESS]

MESSAGE_SCHEMA = Schema({
    'type': 'EVENT',
    'event': {
        'type': And(Use(str), lambda t: t in SUPPORTED_EVENT_TYPES),
        'data': And(Use(dict))
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
            if event['type'] == RUN_PROCESS:
                name = event['data']['name']
                if name in autosubliminal.SCHEDULERS:
                    autosubliminal.SCHEDULERS[name].run()
                    handled = True

        if not handled:
            log.warning('Unsupported message received on websocket server: %r', message)

        return handled

    def check_message_structure(self, message):
        try:
            MESSAGE_SCHEMA.validate(message)
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


class WebSocketLogHandler(WebSocket):
    """
    Websocket handler for log file tailing.
    """

    def opened(self):
        cherrypy.log("WebSocketLogHandler opened, starting log file tailing...")
        logfile = autosubliminal.LOGFILE
        for line in tailer.follow(codecs.open(logfile, 'r', 'utf-8')):
            self.send(TextMessage(line), False)
