# coding=utf-8

import requests_mock
from pytest import MonkeyPatch

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.pushbullet import PUSHBULLETURL, PushbulletNotifier

notifier_name = 'Pushbullet'

download_item = DownloadItem(WantedItem())
download_item.video_path = 'path/to/video'
download_item.subtitle_path = 'path/to/subtitle'
download_item.language = 'en'
download_item.provider = 'provider'


def test_pushbullet_disabled():
    notifier = PushbulletNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_pushbullet_error(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', PUSHBULLETURL, status_code=500)
        notifier = PushbulletNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_pushbullet_exception(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    with requests_mock.mock() as m:
        # Mock exception request
        m.register_uri('POST', PUSHBULLETURL, exc=Exception)
        notifier = PushbulletNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_pushbullet_notify_download(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', PUSHBULLETURL, status_code=200)
        notifier = PushbulletNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is True
        assert notifier.notify_download(download_item) is True
