# coding=utf-8

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.twitter import TwitterNotifier

notifier_name = 'Twitter'

download_item = DownloadItem(WantedItem())
download_item.video_path = 'path/to/video'
download_item.subtitle_path = 'path/to/subtitle'
download_item.language = 'en'
download_item.provider = 'provider'


def test_twitter_disabled():
    notifier = TwitterNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_twitter_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYTWITTER', True)
    # No twitter settings patched, so will result in exception
    notifier = TwitterNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_twitter_notify_download(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYTWITTER', True)
    mocker.patch('twitter.Api.__init__', return_value=None)
    mocker.patch('twitter.Api.PostUpdate', return_value=True)
    notifier = TwitterNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is True
    assert notifier.notify_download(download_item) is True
