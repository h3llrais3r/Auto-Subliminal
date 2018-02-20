# coding=utf-8

from autosubliminal.notifiers.pushbullet import PushbulletNotifier

notifier_name = 'Pushbullet'

item_dict = {
    'subtitle': 'subtitle',
    'language': 'en',
    'provider': 'provider'
}


def test_pushbullet_disabled():
    notifier = PushbulletNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_pushbullet_exception(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    monkeypatch.setattr('autosubliminal.PUSHBULLETAPI', '123456')  # Invalid api key
    notifier = PushbulletNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_pushbullet_notify_download(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYPUSHBULLET', True)
    # Mock successful push
    mocker.patch('lib.pushbullet.Pushbullet.__init__', return_value=None)
    mocker.patch('lib.pushbullet.Pushbullet.push_note', return_value={})
    notifier = PushbulletNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is True
