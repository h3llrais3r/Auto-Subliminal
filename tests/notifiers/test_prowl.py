# coding=utf-8

import requests_mock

from autosubliminal.notifiers.prowl import ProwlNotifier, PROWLURL

notifier_name = 'Prowl'

item_dict = {
    'subtitle': 'subtitle',
    'language': 'en',
    'provider': 'provider'
}


def test_prowl_disabled():
    notifier = ProwlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_prowl_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPROWL', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', PROWLURL, status_code=500)
        notifier = ProwlNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is False


def test_prowl_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPROWL', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', PROWLURL, status_code=200)
        notifier = ProwlNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is True
