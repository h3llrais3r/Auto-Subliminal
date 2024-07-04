# coding=utf-8

import email.utils
import logging
import os
import smtplib
from email.mime.text import MIMEText
from logging import Logger
from typing import Any

import autosubliminal
from autosubliminal.core.item import DownloadItem
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


class MailNotifier(BaseNotifier):
    """
    Mail notifier.
    """

    def __init__(self) -> None:
        super().__init__()

    @property
    def log(self) -> Logger:
        return log

    @property
    def name(self) -> str:
        return 'Mail'

    @property
    def enabled(self) -> bool:
        return autosubliminal.NOTIFYMAIL

    # Override of generic _get_download_message method
    def _get_download_message(self, download_item: DownloadItem) -> str:
        # Prepend extra info to default download message
        message = self.notification_title + '\n\n'
        if download_item.video_path:
            message += 'Video: %s\n' % os.path.basename(download_item.video_path)
        message += super()._get_download_message(download_item)
        return message

    def _send_message(self, message: str, **kwargs: Any) -> bool:
        mail_message = MIMEText(message, _charset='utf-8')
        mail_message['From'] = email.utils.formataddr(
            (autosubliminal.MAILFROMNAME or autosubliminal.MAILFROMADDR, autosubliminal.MAILFROMADDR)
        )
        mail_message['To'] = email.utils.formataddr(('Recipient', autosubliminal.MAILTOADDR))
        subject = kwargs['subject'] if 'subject' in kwargs else self.notification_title
        mail_message['Subject'] = subject
        try:
            server = smtplib.SMTP(autosubliminal.MAILSRV)
            if autosubliminal.MAILENCRYPTION == 'TLS':
                server.starttls()
            if autosubliminal.MAILUSERNAME and autosubliminal.MAILPASSWORD:
                server.ehlo()
                if autosubliminal.MAILAUTH:
                    server.esmtp_features['auth'] = autosubliminal.MAILAUTH.upper()
                server.login(autosubliminal.MAILUSERNAME, autosubliminal.MAILPASSWORD)
            server.sendmail(autosubliminal.MAILFROMADDR, autosubliminal.MAILTOADDR, mail_message.as_string())
            server.quit()
            return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False

    # Override of generic notify_download method
    def notify_download(self, download_item: DownloadItem, **kwargs: Any) -> bool:
        # Set subject
        subject = autosubliminal.MAILSUBJECT if autosubliminal.MAILSUBJECT else self.notification_title
        # Add subtitle from kwargs to subject if available
        if download_item.subtitle_path:
            subject += ' ' + os.path.basename(download_item.subtitle_path)
        # Call notify_download method of super class with the subject
        return super().notify_download(download_item, subject=subject)


__CLASS_NAME__ = MailNotifier.__name__
