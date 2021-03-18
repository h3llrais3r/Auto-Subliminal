# coding=utf-8

import time

import autosubliminal
from autosubliminal.util.websocket import (SCHEDULER_FINISH, SCHEDULER_START, SYSTEM_RESTART, SYSTEM_SHUTDOWN,
                                           SYSTEM_START, SYSTEM_UPDATE, send_websocket_event,
                                           send_websocket_notification)


def test_send_websocket_event_system_start(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'SYSTEM_START',
            'data': None
        }
    }
    send_websocket_event(SYSTEM_START)
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_event_system_restart(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'SYSTEM_RESTART',
            'data': None
        }
    }
    send_websocket_event(SYSTEM_RESTART)
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_event_system_shutdown(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'SYSTEM_SHUTDOWN',
            'data': None
        }
    }
    send_websocket_event(SYSTEM_SHUTDOWN)
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_event_system_update(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'SYSTEM_UPDATE',
            'data': {
                'available': True
            }
        }
    }
    send_websocket_event(SYSTEM_UPDATE, data={'available': True})
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_event_scheduler_start(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'SCHEDULER_START',
            'data': {
                'name': 'MyScheduler'
            }
        }
    }
    send_websocket_event(SCHEDULER_START, data={'name': 'MyScheduler'})
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_event_scheduler_finish(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    next_run = time.time()
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'SCHEDULER_FINISH',
            'data': {
                'name': 'MyScheduler',
                'nextRun': next_run
            }
        }
    }
    send_websocket_event(SCHEDULER_FINISH, data={'name': 'MyScheduler', 'nextRun': next_run})
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_notification(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'NOTIFICATION',
        'notification': {
            'message': 'test',
            'severity': 'info',
            'sticky': False
        }
    }
    send_websocket_notification('test')
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message
