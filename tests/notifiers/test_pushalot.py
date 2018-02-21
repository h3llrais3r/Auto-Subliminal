# coding=utf-8

import requests_mock

from autosubliminal.notifiers.pushalot import PushalotNotifier, PUSHALOTURL

notifier_name = 'Pushalot'

item_dict = {
    'subtitle': 'subtitle',
    'language': 'en',
    'provider': 'provider'
}


def test_pushalot_disabled():
    notifier = PushalotNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_pushalot_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHALOT', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', PUSHALOTURL, status_code=500)
        notifier = PushalotNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is False


def test_pushalot_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHALOT', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', PUSHALOTURL, status_code=200)
        notifier = PushalotNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is True
