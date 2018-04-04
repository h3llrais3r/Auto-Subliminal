# coding=utf-8

import pytest

import autosubliminal
from autosubliminal.websocket import WebSocketMessageHandler
from ws4py.messaging import TextMessage, BinaryMessage


class MyProcess(object):
    def run(self):
        pass


autosubliminal.SCHEDULERS = {'MyProcess': MyProcess()}


def test_receive_text_message(mocker):
    mocker.patch('autosubliminal.websocket.WebSocketHandler.handle_message', return_value=True)
    handler = WebSocketMessageHandler(None)
    handler.received_message(TextMessage('{"key1": "value1"}'))
    handler.handle_message.assert_called_once_with({'key1': 'value1'})


def test_receive_invalid_message(mocker):
    mocker.patch('autosubliminal.websocket.WebSocketHandler.handle_message')
    handler = WebSocketMessageHandler(None)
    handler.received_message(BinaryMessage(b''))
    handler.handle_message.assert_not_called()


def test_handle_event_message_run_process():
    handler = WebSocketMessageHandler(None)
    message = {
        'message_type': 'event',
        'event': {
            'event_type': 'RUN_PROCESS',
            'process': 'MyProcess'
        }
    }
    assert handler.handle_message(message)


def test_handle_event_message_run_process_unsupported():
    handler = WebSocketMessageHandler(None)
    message = {
        'message_type': 'event',
        'event': {
            'event_type': 'RUN_PROCESS',
            'process': 'NotSupportedProcess'
        }
    }
    assert not handler.handle_message(message)
