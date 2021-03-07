# coding=utf-8

import requests_mock

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.prowl import PROWLURL, ProwlNotifier

notifier_name = 'Prowl'

download_item = DownloadItem(WantedItem())
download_item.video_path = 'path/to/video'
download_item.subtitle_path = 'path/to/subtitle'
download_item.language = 'en'
download_item.provider = 'provider'


def test_prowl_disabled():
    notifier = ProwlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_prowl_error(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPROWL', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', PROWLURL, status_code=500)
        notifier = ProwlNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_prowl_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPROWL', True)
    with requests_mock.mock() as m:
        # Mock exception request
        m.register_uri('POST', PROWLURL, exc=Exception)
        notifier = ProwlNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_prowl_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPROWL', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', PROWLURL, status_code=200)
        notifier = ProwlNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is True
        assert notifier.notify_download(download_item) is True
