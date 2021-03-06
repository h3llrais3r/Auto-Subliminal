# coding=utf-8

from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.notifiers.mail import MailNotifier

notifier_name = 'Mail'

download_item = DownloadItem(WantedItem())
download_item.videopath = 'path/to/video'
download_item.subtitlepath = 'path/to/subtitle'
download_item.downlang = 'en'
download_item.provider = 'provider'


def test_mail_disabled():
    notifier = MailNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_mail_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.NOTIFYMAIL', True)
    monkeypatch.setattr('autosubliminal.MAILFROMADDR', 'from@test.com')
    monkeypatch.setattr('autosubliminal.MAILTOADDR', 'to@test.com')
    monkeypatch.setattr('autosubliminal.MAILSUBJECT', 'subject')
    # Invalid mail server settings patched, so will result in exception
    monkeypatch.setattr('autosubliminal.MAILSRV', 'invalid_server')
    notifier = MailNotifier()
    assert notifier.name == notifier_name
    assert notifier.notify('test') is False
    assert notifier.notify_download(download_item) is False


def test_mail_notify_download(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.NOTIFYMAIL', True)
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
