# coding=utf-8

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.pushbullet import PushbulletNotifier

notifier_name = 'Pushbullet'

download_item = DownloadItem(WantedItem())
download_item.videopath = 'path/to/video'
download_item.subtitlepath = 'path/to/subtitle'
download_item.downlang = 'en'
download_item.provider = 'provider'


def test_pushbullet_disabled():
    notifier = PushbulletNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_pushbullet_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    monkeypatch.setattr('autosubliminal.PUSHBULLETAPI', '123456')  # Invalid api key
    notifier = PushbulletNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_pushbullet_notify_download(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    # Mock successful push
    mocker.patch('pushbullet.Pushbullet.__init__', return_value=None)
    mocker.patch('pushbullet.Pushbullet.push_note', return_value={})
    notifier = PushbulletNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is True
    assert notifier.notify_download(download_item) is True
