# coding=utf-8

from typing import cast
from unittest.mock import Mock

from pytest import MonkeyPatch
from pytest_mock import MockerFixture
from ws4py.messaging import BinaryMessage, TextMessage

import autosubliminal
from autosubliminal.core.scheduler import Scheduler
from autosubliminal.core.websocket import WebSocketBroadCaster, WebSocketHandler


class MyScheduler(object):
    def run(self) -> None:
        pass


autosubliminal.SCHEDULERS = {'MyScheduler': cast(Scheduler, MyScheduler())}


def test_receive_message_text(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.core.websocket.WebSocketHandler.handle_message', return_value=True)
    handler = WebSocketHandler(None)
    handler.received_message(TextMessage('{"key1": "value1"}'))
    cast(Mock, handler.handle_message).assert_called_once_with({'key1': 'value1'})


def test_receive_message_invalid(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.core.websocket.WebSocketHandler.handle_message')
    handler = WebSocketHandler(None)
    handler.received_message(BinaryMessage(b''))
    cast(Mock, handler.handle_message).assert_not_called()


def test_handle_message_event_run_process() -> None:
    handler = WebSocketHandler(None)
    message = {'type': 'EVENT', 'event': {'type': 'RUN_SCHEDULER', 'data': {'name': 'MyScheduler'}}}
    assert handler.handle_message(message)


def test_handle_message_event_run_process_unsupported() -> None:
    handler = WebSocketHandler(None)
    message = {'type': 'event', 'event': {'type': 'RUN_SCHEDULER', 'data': {'name': 'NotSupportedProcess'}}}
    assert not handler.handle_message(message)


def test_handle_message_event_invalid() -> None:
    handler = WebSocketHandler(None)
    message = {
        'type': 'EVENT',
        'event': {'type': 'RUN_SCHEDULER', 'data': {'name': 'MyScheduler'}},
        'invalid': 'invalid',
    }
    assert not handler.handle_message(message)


def test_websocket_broadcaster(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    mocker.patch('threading.Thread')
    mocker.patch('cherrypy.engine.publish')
    message = {'type': 'EVENT', 'event': {'type': 'SCHEDULER_START', 'data': {'name': 'MyScheduler'}}}
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [message])
    broadcaster = WebSocketBroadCaster(name='WebSocketBroadCaster')
    broadcaster.run()
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 0
