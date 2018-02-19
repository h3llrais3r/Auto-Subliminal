# coding=utf-8

import email.utils
import logging
import smtplib
from email.mime.text import MIMEText

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


class MailNotifier(BaseNotifier):
    """
    Mail notifier.
    """

    def __init__(self):
        super(MailNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'Mail'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYMAIL

    # Override of generic _get_message method
    def _get_message(self, **kwargs):
        # Prepend extra info to default message
        message = self.notification_title + '\n\n'
        if 'video' in kwargs:
            message += 'Video: %s\n' % kwargs['video']
        message += super(MailNotifier, self)._get_message(**kwargs)
        return message

    def _send_message(self, message, **kwargs):
        mail_message = MIMEText(message, _charset='utf-8')
        mail_message['From'] = email.utils.formataddr((autosubliminal.MAILFROMADDR, autosubliminal.MAILFROMADDR))
        mail_message['To'] = email.utils.formataddr(('Recipient', autosubliminal.MAILTOADDR))
        subject = autosubliminal.MAILSUBJECT if autosubliminal.MAILSUBJECT else self.notification_title
        # Add subtitle from kwargs to subject if available
        if 'subtitle' in kwargs:
            subject += ' - ' + kwargs['subtitle']
        mail_message['Subject'] = subject
        # Convert message to string
        mail_message = mail_message.as_string()
        try:
            server = smtplib.SMTP(autosubliminal.MAILSRV)
            if autosubliminal.MAILENCRYPTION == 'TLS':
                server.starttls()
            if autosubliminal.MAILUSERNAME and autosubliminal.MAILPASSWORD:
                server.ehlo()
                if autosubliminal.MAILAUTH:
                    server.esmtp_features['auth'] = autosubliminal.MAILAUTH.upper()
                server.login(autosubliminal.MAILUSERNAME, autosubliminal.MAILPASSWORD)
            server.sendmail(autosubliminal.MAILFROMADDR, autosubliminal.MAILTOADDR, mail_message)
            server.quit()
            log.info('%s notification sent' % self.name)
            return True
        except:
            log.error('%s notification failed' % self.name)
            return False


__CLASS_NAME__ = MailNotifier.__name__
