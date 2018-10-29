# coding=utf-8

import pytest

import autosubliminal.notifiers
from autosubliminal.core.item import DownloadItem, WantedItem


def test_notifiers_notify(mocker):
    mocker.patch('autosubliminal.notifiers.generic.BaseNotifier.notify', return_value=True)
    assert autosubliminal.notifiers.notify('test') is True


def test_notifiers_notify_download(mocker):
    mocker.patch('autosubliminal.notifiers.generic.BaseNotifier.notify_download', return_value=True)
    assert autosubliminal.notifiers.notify_download(DownloadItem(WantedItem())) is True


def test_notifiers_test_notifier(mocker):
    mocker.patch('autosubliminal.notifiers.generic.BaseNotifier.test', return_value=True)
    assert autosubliminal.notifiers.test_notifier('mail') is True


def test_notifiers_test_notifier_exception(mocker):
    mocker.patch('autosubliminal.notifiers.generic.BaseNotifier.test', return_value=True)
    with pytest.raises(NotImplementedError):
        autosubliminal.notifiers.test_notifier('unknown')
