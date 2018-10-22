# coding=utf-8

import requests_mock

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.pushover import PushoverNotifier, PUSHOVERURL

notifier_name = 'Pushover'

download_item = DownloadItem(WantedItem())
download_item.videopath = 'path/to/video'
download_item.subtitlepath = 'path/to/subtitle'
download_item.downlang = 'en'
download_item.provider = 'provider'


def test_pushalot_disabled():
    notifier = PushoverNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_pushalot_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHOVER', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', PUSHOVERURL, status_code=500)
        notifier = PushoverNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_pushalot_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHOVER', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', PUSHOVERURL, status_code=200)
        notifier = PushoverNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is True
        assert notifier.notify_download(download_item) is True
