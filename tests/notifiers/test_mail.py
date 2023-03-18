# coding=utf-8

from pytest import MonkeyPatch
from pytest_mock import MockerFixture

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.mail import MailNotifier

notifier_name = 'Mail'

download_item = DownloadItem(WantedItem())
download_item.video_path = 'path/to/video'
download_item.subtitle_path = 'path/to/subtitle'
download_item.language = 'en'
download_item.provider = 'provider'


def test_mail_disabled():
    notifier = MailNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_mail_exception(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.NOTIFYMAIL', True)
    monkeypatch.setattr('autosubliminal.MAILFROMNAME', 'FromMe')
    monkeypatch.setattr('autosubliminal.MAILFROMADDR', 'from@test.com')
    monkeypatch.setattr('autosubliminal.MAILTOADDR', 'to@test.com')
    monkeypatch.setattr('autosubliminal.MAILSUBJECT', 'subject')
    # Invalid mail server settings patched, so will result in exception
    monkeypatch.setattr('autosubliminal.MAILSRV', 'invalid_server')
    notifier = MailNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_mail_notify_download(monkeypatch: MonkeyPatch, mocker: MockerFixture):
    monkeypatch.setattr('autosubliminal.NOTIFYMAIL', True)
    monkeypatch.setattr('autosubliminal.MAILFROMNAME', 'FromMe')
    monkeypatch.setattr('autosubliminal.MAILFROMADDR', 'from@test.com')
    monkeypatch.setattr('autosubliminal.MAILTOADDR', 'to@test.com')
    monkeypatch.setattr('autosubliminal.MAILSUBJECT', 'subject')
    monkeypatch.setattr('autosubliminal.MAILSRV', 'server')
    monkeypatch.setattr('autosubliminal.MAILENCRYPTION', 'TLS')
    monkeypatch.setattr('autosubliminal.MAILUSERNAME', 'username')
    monkeypatch.setattr('autosubliminal.MAILPASSWORD', 'password')
    monkeypatch.setattr('autosubliminal.MAILAUTH', 'LOGIN')  # Keep it None because I can't mock it
    mocker.patch('smtplib.SMTP')
    mocker.patch('smtplib.SMTP.starttls')
    mocker.patch('smtplib.SMTP.ehlo')
    mocker.patch('smtplib.SMTP.login')
    mocker.patch('smtplib.SMTP.sendmail')
    mocker.patch('smtplib.SMTP.quit')
    notifier = MailNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is True
    assert notifier.notify_download(download_item) is True
