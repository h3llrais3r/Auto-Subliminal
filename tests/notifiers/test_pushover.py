# coding=utf-8

import requests_mock
from pytest import MonkeyPatch

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.pushover import PUSHOVERURL, PushoverNotifier

notifier_name = 'Pushover'

download_item = DownloadItem(WantedItem())
download_item.video_path = 'path/to/video'
download_item.subtitle_path = 'path/to/subtitle'
download_item.language = 'en'
download_item.provider = 'provider'


def test_pushover_disabled():
    notifier = PushoverNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_pushover_error(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHOVER', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', PUSHOVERURL, status_code=500)
        notifier = PushoverNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_pushover_exception(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHOVER', True)
    with requests_mock.mock() as m:
        # Mock exception request
        m.register_uri('POST', PUSHOVERURL, exc=Exception)
        notifier = PushoverNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_pushover_notify_download(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHOVER', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', PUSHOVERURL, status_code=200)
        notifier = PushoverNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is True
        assert notifier.notify_download(download_item) is True
