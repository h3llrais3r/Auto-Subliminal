# coding=utf-8

from autosubliminal.notifiers.nma import NmaNotifier

notifier_name = 'NMA'

item_dict = {
    'subtitle': 'subtitle',
    'language': 'en',
    'provider': 'provider'
}


def test_nma_disabled():
    notifier = NmaNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_nma_exception(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYNMA', True)
    monkeypatch.setattr('autosubliminal.NMAAPI', '123456')
    mocker.patch('pynma.PyNMA.push', return_value={'123456': {'code': '500'}})
    notifier = NmaNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is False


def test_nma_notify_download(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYNMA', True)
    monkeypatch.setattr('autosubliminal.NMAAPI', '123456')
    mocker.patch('pynma.PyNMA.push', return_value={'123456': {'code': '200'}})
    notifier = NmaNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify_download(**item_dict) is True
