# coding=utf-8

import codecs
import logging
from typing import cast

import cherrypy
import tailer
from schema import And, Schema, Use
from ws4py.messaging import Message, TextMessage
from ws4py.websocket import WebSocket

import autosubliminal
from autosubliminal import system
from autosubliminal.core.runner import Runner
from autosubliminal.util.encoding import b2u
from autosubliminal.util.json import from_json, to_json

log = logging.getLogger(__name__)

RUN_SCHEDULER = 'RUN_SCHEDULER'
RUN_SYSTEM_PROCESS = 'RUN_SYSTEM_PROCESS'

SUPPORTED_EVENT_TYPES = [RUN_SCHEDULER, RUN_SYSTEM_PROCESS]

MESSAGE_SCHEMA = Schema(
    {
        'type': 'EVENT',
        'event': {'type': And(Use(str), lambda t: t in SUPPORTED_EVENT_TYPES), 'data': {'name': And(Use(str))}},
    }
)


class WebSocketHandler(WebSocket):
    """
    WebSocket handler class for receiving messages on the server through the websocket system.
    For now we only support event messages that trigger something on the server.
    """

    def received_message(self, message: Message) -> None:
        if isinstance(message, TextMessage):
            # Data is always returned in bytes through the websocket, so convert it first to unicode
            message_dict = from_json(b2u(message.data))
            self.handle_message(message_dict)
        else:
            log.warning('Unsupported message received on websocket server: %r', message)

    def handle_message(self, message: Message) -> bool:
        handled = False
        # Check for a valid event message structure
        if self.check_message_structure(message):
            event = message['event']

            # Handle a RUN_SCHEDULER event
            if event['type'] == RUN_SCHEDULER:
                name = event['data']['name']
                if name in autosubliminal.SCHEDULERS:
                    autosubliminal.SCHEDULERS[name].run()
                    handled = True

            # Handle a RUN_SYSTEM_PROCESS event
            elif event['type'] == RUN_SYSTEM_PROCESS:
                name = event['data']['name']
                if name == 'restart':
                    system.restart()
                    handled = True
                elif name == 'shutdown':
                    system.shutdown()
                    handled = True
                elif name == 'update':
                    system.update()
                    handled = True
                elif name == 'flushCache':
                    system.flush_cache()
                    handled = True
                elif name == 'flushWantedItems':
                    system.flush_wanted_items()
                    handled = True
                elif name == 'flushLastDownloads':
                    system.flush_last_downloads()
                    handled = True
                elif name == 'flushLibrary':
                    system.flush_library()
                    handled = True

        if not handled:
            log.warning('Unsupported message received on websocket server: %r', message)

        return handled

    def check_message_structure(self, message: Message) -> bool:
        return cast(bool, MESSAGE_SCHEMA.is_valid(message))


class WebSocketBroadCaster(Runner):
    """
    WebSocket broadcaster class for broadcasting data from the server through the websocket system.
    """

    def run(self) -> None:
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

    def opened(self) -> None:
        cherrypy.log('WebSocketLogHandler opened, starting log file tailing...')
        logfile = autosubliminal.LOGFILE
        for line in tailer.follow(codecs.open(logfile, 'r', 'utf-8')):
            self.send(TextMessage(line), False)
