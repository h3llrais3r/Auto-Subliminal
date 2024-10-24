# coding=utf-8

from pytest import MonkeyPatch
from pytest_mock import MockerFixture

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.growl import GrowlNotifier

notifier_name = 'Growl'

download_item = DownloadItem(WantedItem())
download_item.video_path = 'path/to/video'
download_item.subtitle_path = 'path/to/subtitle'
download_item.language = 'en'
download_item.provider = 'provider'


def test_growl_disabled() -> None:
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_growl_error(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.NOTIFYGROWL', True)
    monkeypatch.setattr('autosubliminal.GROWLHOST', 'localhost')
    monkeypatch.setattr('autosubliminal.GROWLPORT', 23053)
    mocker.patch('gntp.notifier.GrowlNotifier.notify', return_value=False)
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_growl_exception(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.NOTIFYGROWL', True)
    monkeypatch.setattr('autosubliminal.GROWLHOST', 'localhost')
    monkeypatch.setattr('autosubliminal.GROWLPORT', 23053)
    # monkeypatch.setattr('gntp.notifier.GrowlNotifier.notify', Exception) # seems to work also
    mocker.patch('gntp.notifier.GrowlNotifier.notify', side_effect=Exception)
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_growl_registration_error(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.NOTIFYGROWL', True)
    monkeypatch.setattr('autosubliminal.GROWLHOST', 'localhost')
    monkeypatch.setattr('autosubliminal.GROWLPORT', 23053)
    mocker.patch('gntp.notifier.GrowlNotifier.register', return_value=False)
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.test() is False


def test_growl_registration_exception(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.NOTIFYGROWL', True)
    monkeypatch.setattr('autosubliminal.GROWLHOST', 'localhost')
    monkeypatch.setattr('autosubliminal.GROWLPORT', 23053)
    mocker.patch('gntp.notifier.GrowlNotifier.register', side_effect=Exception)
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.test() is False


def test_growl_notify_download(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.NOTIFYGROWL', True)
    monkeypatch.setattr('autosubliminal.GROWLHOST', 'localhost')
    monkeypatch.setattr('autosubliminal.GROWLPORT', 23053)
    mocker.patch('gntp.notifier.GrowlNotifier.notify', return_value=True)
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is True
    assert notifier.notify_download(download_item) is True


def test_growl_test(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.NOTIFYGROWL', True)
    monkeypatch.setattr('autosubliminal.GROWLHOST', 'localhost')
    monkeypatch.setattr('autosubliminal.GROWLPORT', 23053)
    mocker.patch('gntp.notifier.GrowlNotifier.register', return_value=True)
    mocker.patch('gntp.notifier.GrowlNotifier.notify', return_value=True)
    notifier = GrowlNotifier()
    assert notifier.name == notifier_name
    assert notifier.test() is True
