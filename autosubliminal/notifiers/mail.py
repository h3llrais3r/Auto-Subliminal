import logging
import email.utils
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
        return "Mail"

    @property
    def enabled(self):
        return autosubliminal.NOTIFYMAIL

    def _send_message(self, message):
        mail_message = MIMEText(message)
        mail_message['From'] = email.utils.formataddr((autosubliminal.MAILFROMADDR, autosubliminal.MAILFROMADDR))
        mail_message['To'] = email.utils.formataddr(('Recipient', autosubliminal.MAILTOADDR))
        mail_message['Subject'] = autosubliminal.MAILSUBJECT if autosubliminal.MAILSUBJECT else self.application_title
        mail_message = mail_message.as_string()
        try:
            server = smtplib.SMTP(autosubliminal.MAILSRV)
            if autosubliminal.MAILENCRYPTION == u'TLS':
                server.starttls()
            if autosubliminal.MAILUSERNAME != '' and autosubliminal.MAILPASSWORD != '':
                server.ehlo()
                if autosubliminal.MAILAUTH != u'':
                    server.esmtp_features["auth"] = autosubliminal.MAILAUTH.upper()
                server.login(autosubliminal.MAILUSERNAME, autosubliminal.MAILPASSWORD)
            server.sendmail(autosubliminal.MAILFROMADDR, autosubliminal.MAILTOADDR, mail_message)
            server.quit()
            log.info("%s notification sent" % self.name)
            return True
        except:
            log.error("%s notification failed" % self.name)
            return False


__CLASS_NAME__ = MailNotifier.__name__
