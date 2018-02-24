# coding=utf-8

import requests_mock

from autosubliminal.notifiers.nma import NmaNotifier, NMAURL

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


def test_nma_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYNMA', True)
    with requests_mock.mock() as m:
        # Mock erroneous request
        m.register_uri('POST', NMAURL, status_code=500)
        notifier = NmaNotifier()
        assert notifier.name == notifier_name
        assert notifier.notify_download(**item_dict) is False


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
        assert notifier.notify_download(**item_dict) is False


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
        assert notifier.notify_download(**item_dict) is True
