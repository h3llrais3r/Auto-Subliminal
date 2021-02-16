# coding=utf-8

import requests_mock

import autosubliminal
from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.telegram import TELEGRAMURL, TelegramNotifier

autosubliminal.TELEGRAMBOTAPI = 'myapikey'
autosubliminal.TELEGRAMCHATID = 'mychatid'

notifier_name = 'Telegram'

download_item = DownloadItem(WantedItem())
download_item.video_path = 'path/to/video'
download_item.subtitle_path = 'path/to/subtitle'
download_item.language = 'en'
download_item.provider = 'provider'


def test_telegram_disabled():
    notifier = TelegramNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_telegram_error(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYTELEGRAM', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', TELEGRAMURL % autosubliminal.TELEGRAMBOTAPI, status_code=500)
        notifier = TelegramNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_telegram_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYTELEGRAM', True)
    with requests_mock.mock() as m:
        # Mock exception request
        m.register_uri('POST', TELEGRAMURL % autosubliminal.TELEGRAMBOTAPI, exc=Exception)
        notifier = TelegramNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_telegram_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYTELEGRAM', True)
    with requests_mock.mock() as m:
        # Mock successful request
        m.register_uri('POST', TELEGRAMURL % autosubliminal.TELEGRAMBOTAPI, status_code=200)
        notifier = TelegramNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is True
        assert notifier.notify_download(download_item) is True
