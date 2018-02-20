# coding=utf-8

from autosubliminal.notifiers.growl import GrowlNotifier

notifier_name = 'Growl'

item_dict = {
    'subtitle': 'subtitle',
    'language': 'en',
    'provider': 'provider'
}


def test_growl_disabled():
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_growl_exception(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYGROWL', True)
    monkeypatch.setattr('autosubliminal.GROWLHOST', 'localhost')
    monkeypatch.setattr('autosubliminal.GROWLPORT', 23053)
    mocker.patch('gntp.notifier.GrowlNotifier.notify', return_value=False)
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_growl_notify_download(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYGROWL', True)
    monkeypatch.setattr('autosubliminal.GROWLHOST', 'localhost')
    monkeypatch.setattr('autosubliminal.GROWLPORT', 23053)
    mocker.patch('gntp.notifier.GrowlNotifier.notify', return_value=True)
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is True
