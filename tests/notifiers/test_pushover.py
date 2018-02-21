# coding=utf-8

import requests_mock

from autosubliminal.notifiers.pushover import PushoverNotifier, PUSHOVERURL

notifier_name = 'Pushover'

item_dict = {
    'subtitle': 'subtitle',
    'language': 'en',
    'provider': 'provider'
}


def test_pushalot_disabled():
    notifier = PushoverNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_pushalot_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHOVER', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', PUSHOVERURL, status_code=500)
        notifier = PushoverNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is False


def test_pushalot_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHOVER', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', PUSHOVERURL, status_code=200)
        notifier = PushoverNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is True
