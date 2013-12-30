import logging
from httplib import HTTPSConnection
from urllib import urlencode

import autosubliminal


log = logging.getLogger(__name__)
pushalotapi = autosubliminal.PUSHALOTAPI


def test_notify():
    return _send_notify(message="Testing Pushalot settings from Auto-Subliminal")


def send_notify(lang, subtitlefile, videofile):
    log.debug("Trying to send a notification")
    message = "Auto-Subliminal just downloaded the following subtitle: \n %s" % subtitlefile
    return _send_notify(message)


def _send_notify(message):
    http_handler = HTTPSConnection("pushalot.com")

    data = {'AuthorizationToken': autosubliminal.PUSHALOTAPI,
            'Title': "Auto-Subliminal",
            'Body': message.encode('utf-8')}

    try:
        http_handler.request("POST",
                             "/api/sendmessage",
                             headers={'Content-type': "application/x-www-form-urlencoded"},
                             body=urlencode(data))
    except:
        log.error("Pushalot notification failed.")
        return False

    response = http_handler.getresponse()
    request_status = response.status

    if request_status == 200:
        log.info("notification sent.")
        return True
    elif request_status == 410:
        log.error("Pushalot auth failed: %s" % response.reason)
        return False
    else:
        log.error("Pushalot notification failed.")
        return False