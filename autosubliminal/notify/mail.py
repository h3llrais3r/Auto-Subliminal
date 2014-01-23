import logging
import email.utils
import smtplib
from email.mime.text import MIMEText

import autosubliminal

log = logging.getLogger(__name__)


def test_notify():
    log.debug("Trying to send a mail")
    message = MIMEText("Test mail by Auto-Subliminal")
    message['From'] = email.utils.formataddr((autosubliminal.MAILFROMADDR, autosubliminal.MAILFROMADDR))
    message['To'] = email.utils.formataddr(('Recipient', autosubliminal.MAILTOADDR))
    message['Subject'] = "Auto-Subliminal: Test"
    message = message.as_string()
    return _send_notify(message)


def send_notify(language, subtitlefile, videofile, provider):
    log.debug("Trying to send a mail")
    message = MIMEText(
        "Auto-Subliminal: Subtitle download. \n \n Subtitle: %s \n Langugage: %s \n Video: %s \n Provider: %s \n" % (
        subtitlefile, language, videofile, provider))
    message['From'] = email.utils.formataddr((autosubliminal.MAILFROMADDR, autosubliminal.MAILFROMADDR))
    message['To'] = email.utils.formataddr(('Recipient', autosubliminal.MAILTOADDR))
    message['Subject'] = '%s %s' % (autosubliminal.MAILSUBJECT, subtitlefile)
    message = message.as_string()
    return _send_notify(message)


def _send_notify(message):
    try:
        server = smtplib.SMTP(autosubliminal.MAILSRV)
        if autosubliminal.MAILENCRYPTION == u'TLS':
            server.starttls()
        if autosubliminal.MAILUSERNAME != '' and autosubliminal.MAILPASSWORD != '':
            server.ehlo()
            if autosubliminal.MAILAUTH != u'':
                server.esmtp_features["auth"] = autosubliminal.MAILAUTH.upper()
            server.login(autosubliminal.MAILUSERNAME, autosubliminal.MAILPASSWORD)
        server.sendmail(autosubliminal.MAILFROMADDR, autosubliminal.MAILTOADDR, message)
        server.quit()
        log.info("Mail sent")
        return True
    except:
        log.error("Failed to send a mail")
        return False