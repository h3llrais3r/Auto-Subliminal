# coding=utf-8

import requests_mock

import autosubliminal
from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.telegram import TelegramNotifier, TELEGRAMURL

autosubliminal.TELEGRAMBOTAPI = 'myapikey'
autosubliminal.TELEGRAMCHATID = 'mychatid'

notifier_name = 'Telegram'

download_item = DownloadItem(WantedItem())
download_item.videopath = 'path/to/video'
download_item.subtitlepath = 'path/to/subtitle'
download_item.downlang = 'en'
download_item.provider = 'provider'


def test_telegram_disabled():
    notifier = TelegramNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_telegram_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYTELEGRAM', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', TELEGRAMURL % autosubliminal.TELEGRAMBOTAPI, status_code=500)
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
