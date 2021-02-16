# coding=utf-8

import requests_mock

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.pushalot import PUSHALOTURL, PushalotNotifier

notifier_name = 'Pushalot'

download_item = DownloadItem(WantedItem())
download_item.video_path = 'path/to/video'
download_item.subtitle_path = 'path/to/subtitle'
download_item.language = 'en'
download_item.provider = 'provider'


def test_pushalot_disabled():
    notifier = PushalotNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_pushalot_error(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHALOT', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', PUSHALOTURL, status_code=500)
        notifier = PushalotNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_pushalot_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHALOT', True)
    with requests_mock.mock() as m:
        # Mock exception request
        m.register_uri('POST', PUSHALOTURL, exc=Exception)
        notifier = PushalotNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_pushalot_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHALOT', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', PUSHALOTURL, status_code=200)
        notifier = PushalotNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is True
        assert notifier.notify_download(download_item) is True
