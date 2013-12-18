import logging

import email.utils
import smtplib
from email.mime.text import MIMEText

import autosub

log = logging.getLogger('thelogger')

def _send_notify(message):
    try:
        server = smtplib.SMTP(autosub.MAILSRV)
        if autosub.MAILENCRYPTION == u'TLS':
            server.starttls()
        if autosub.MAILUSERNAME != '' and autosub.MAILPASSWORD != '':
            server.ehlo()
            if autosub.MAILAUTH != u'':
                server.esmtp_features["auth"] = autosub.MAILAUTH.upper()
            server.login(autosub.MAILUSERNAME, autosub.MAILPASSWORD)
        server.sendmail(autosub.MAILFROMADDR, autosub.MAILTOADDR, message)
        server.quit()
        log.info("Mail: Mail sent")
        return True
    except:
        log.error("Mail: Failed to send a mail")
        return False

def test_notify():
    log.debug("Mail: Trying to send a mail")
    message = MIMEText('Testing AutoSub and mail notify \n Everything seems to be ok!')
    message['From'] = email.utils.formataddr((autosub.MAILFROMADDR, autosub.MAILFROMADDR))
    message['To'] = email.utils.formataddr(('Recipient', autosub.MAILTOADDR))
    message['Subject'] = 'AutoSub: Testing 1-2-3'
    message = message.as_string()
    return _send_notify(message)

def send_notify(lang, subtitlefile, videofile):
    log.debug("Mail: Trying to send a mail")
    message = MIMEText("""Hi,\n 
AutoSub downloaded the following subtitle (language: %s):\n %s \n
For the videofile:\n %s
    """ %(lang, subtitlefile, videofile))
    message['From'] = email.utils.formataddr((autosub.MAILFROMADDR, autosub.MAILFROMADDR))
    message['To'] = email.utils.formataddr(('Recipient', autosub.MAILTOADDR))
    message['Subject'] = '%s %s' %(autosub.MAILSUBJECT, subtitlefile) 
    message = message.as_string()
    return _send_notify(message)
    
