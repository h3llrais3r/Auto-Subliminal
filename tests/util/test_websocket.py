# coding=utf-8

import time

import autosubliminal
from autosubliminal.util.websocket import (PAGE_RELOAD, PROCESS_FINISHED, PROCESS_STARTED, send_websocket_event,
                                           send_websocket_notification)


def test_send_websocket_event_page_reload(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'PAGE_RELOAD',
            'data': {
                'name': 'home'
            }
        }
    }
    send_websocket_event(PAGE_RELOAD, data={'name': 'home'})
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_event_process_started(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'PROCESS_STARTED',
            'data': {
                'name': 'MyProcess'
            }
        }
    }
    send_websocket_event(PROCESS_STARTED, data={'name': 'MyProcess'})
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_event_process_finished(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    next_run = time.time()
    message = {
        'type': 'EVENT',
        'event': {
            'type': 'PROCESS_FINISHED',
            'data': {
                'name': 'MyProcess',
                'nextRun': next_run
            }
        }
    }
    send_websocket_event(PROCESS_FINISHED, data={'name': 'MyProcess', 'nextRun': next_run})
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message


def test_send_websocket_notification(monkeypatch):
    monkeypatch.setattr('autosubliminal.WEBSOCKETMESSAGEQUEUE', [])
    message = {
        'type': 'NOTIFICATION',
        'notification': {
            'message': 'test',
            'type': 'info',
            'sticky': False
        }
    }
    send_websocket_notification('test')
    assert len(autosubliminal.WEBSOCKETMESSAGEQUEUE) == 1
    assert autosubliminal.WEBSOCKETMESSAGEQUEUE.pop(0) == message
