# coding=utf-8

from autosubliminal.notifiers.twitter import TwitterNotifier

notifier_name = 'Twitter'

item_dict = {
    'subtitle': 'subtitle',
    'language': 'en',
    'provider': 'provider'
}


def test_twitter_disabled():
    notifier = TwitterNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_twitter_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYTWITTER', True)
    # No twitter settings patched, so will result in exception
    notifier = TwitterNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_twitter_notify_download(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYTWITTER', True)
    mocker.patch('twitter.Api.__init__', return_value=None)
    mocker.patch('twitter.Api.PostUpdate', return_value=True)
    notifier = TwitterNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is True
