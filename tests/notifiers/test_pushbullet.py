# coding=utf-8

import requests_mock

from autosubliminal.notifiers.pushbullet import PushbulletNotifier

notifier_name = 'Pushbullet'

item_dict = {
    'subtitle': 'subtitle',
    'language': 'en',
    'provider': 'provider'
}


def test_pushalot_disabled():
    notifier = PushbulletNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_pushalot_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri(requests_mock.ANY, requests_mock.ANY, status_code=500)
        notifier = PushbulletNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is False


def test_pushalot_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri(requests_mock.ANY, requests_mock.ANY, status_code=200)
        notifier = PushbulletNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is True
