import logging
import email.utils
import smtplib
from email.mime.text import MIMEText

import autosubliminal

log = logging.getLogger(__name__)


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


def test_notify():
    log.debug("Trying to send a mail")
    message = MIMEText('Testing Auto-Subliminal and mail notify \n Everything seems to be ok!')
    message['From'] = email.utils.formataddr((autosubliminal.MAILFROMADDR, autosubliminal.MAILFROMADDR))
    message['To'] = email.utils.formataddr(('Recipient', autosubliminal.MAILTOADDR))
    message['Subject'] = 'Auto-Subliminal: Testing 1-2-3'
    message = message.as_string()
    return _send_notify(message)


def send_notify(lang, subtitlefile, videofile):
    log.debug("Trying to send a mail")
    message = MIMEText("""Hi,\n 
Auto-Subliminal downloaded the following subtitle (language: %s):\n %s \n
For the videofile:\n %s
    """ % (lang, subtitlefile, videofile))
    message['From'] = email.utils.formataddr((autosubliminal.MAILFROMADDR, autosubliminal.MAILFROMADDR))
    message['To'] = email.utils.formataddr(('Recipient', autosubliminal.MAILTOADDR))
    message['Subject'] = '%s %s' % (autosubliminal.MAILSUBJECT, subtitlefile)
    message = message.as_string()
    return _send_notify(message)
    
