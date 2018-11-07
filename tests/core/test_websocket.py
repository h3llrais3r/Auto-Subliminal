# coding=utf-8

from ws4py.messaging import BinaryMessage, TextMessage

import autosubliminal
from autosubliminal.core.websocket import WebSocketBroadCaster, WebSocketHandler


class MyProcess(object):
    def run(self):
        pass


autosubliminal.SCHEDULERS = {'MyProcess': MyProcess()}


def test_receive_text_message(mocker):
    mocker.patch('autosubliminal.core.websocket.WebSocketHandler.handle_message', return_value=True)
    handler = WebSocketHandler(None)
    handler.received_message(TextMessage('{"key1": "value1"}'))
    handler.handle_message.assert_called_once_with({'key1': 'value1'})


def test_receive_invalid_message(mocker):
    mocker.patch('autosubliminal.core.websocket.WebSocketHandler.handle_message')
    handler = WebSocketHandler(None)
    handler.received_message(BinaryMessage(b''))
    handler.handle_message.assert_not_called()


def test_handle_event_message_run_process():
    handler = WebSocketHandler(None)
    message = {
        'message_type': 'event',
        'event': {
            'event_type': 'RUN_PROCESS',
            'process': 'MyProcess'
        }
    }
    assert handler.handle_message(message)


def test_handle_event_message_run_process_unsupported():
    handler = WebSocketHandler(None)
    message = {
        'message_type': 'event',
        'event': {
            'event_type': 'RUN_PROCESS',
            'process': 'NotSupportedProcess'
        }
    }
    assert not handler.handle_message(message)


def test_websocket_broadcaster(monkeypatch, mocker):
    mocker.patch('threading.Thread')
    mocker.patch('cherrypy.engine.publish')
    message = {
        'message_type': 'event',
        'event': {
            'event_type': 'RUN_PROCESS',
            'process': 'MyProcess'
        }
    }
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [message])
    broadcaster = WebSocketBroadCaster(name='WebSocketBroadCaster')
    broadcaster.run()
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 0
