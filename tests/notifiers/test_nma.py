# coding=utf-8

import requests_mock

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.nma import NmaNotifier, NMAURL

notifier_name = 'NMA'

download_item = DownloadItem(WantedItem())
download_item.videopath = 'path/to/video'
download_item.subtitlepath = 'path/to/subtitle'
download_item.downlang = 'en'
download_item.provider = 'provider'


def test_nma_disabled():
    notifier = NmaNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_nma_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYNMA', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', NMAURL, status_code=500)
        notifier = NmaNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_nma_notify_download_error_response(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYNMA', True)
    with requests_mock.mock() as m:
        # Mock successful request (content must be binary data)
        m.register_uri('POST', NMAURL,
                       status_code=200,
                       content=b'<?xml version="1.0" encoding="UTF-8"?>'
                               b'<nma>'
                               b'<error code="402" resettimer="15">Your IP exceeded...</error>'
                               b'</nma>')
        notifier = NmaNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is False
        assert notifier.notify_download(download_item) is False


def test_nma_notify_download(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYNMA', True)
    with requests_mock.mock() as m:
        # Mock successful request (content must be binary data)
        m.register_uri('POST', NMAURL,
                       status_code=200,
                       content=b'<?xml version="1.0" encoding="UTF-8"?>'
                               b'<nma>'
                               b'<success code="200" remaining="997" resettimer="52"/>'
                               b'</nma>')
        notifier = NmaNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify('test') is True
        assert notifier.notify_download(download_item) is True
