import logging
from httplib import HTTPSConnection
from urllib import urlencode

import autosubliminal

log = logging.getLogger(__name__)


def test_notify():
    log.debug("Trying to send a notification")
    message = "Test notification by Auto-Subliminal"
    return _send_notify(message)


def send_notify(video, subtitle, language, provider):
    log.debug("Trying to send a notification")
    message = "Subtitle: %s \n Language: %s \n Provider: %s " % (subtitle, language, provider)
    return _send_notify(message)


def _send_notify(message):
    http_handler = HTTPSConnection("api.pushover.net")
    data = {'token': autosubliminal.PUSHOVERAPI,
            'user': autosubliminal.PUSHOVERKEY,
            'title': 'Auto-Subliminal',
            'devices': autosubliminal.PUSHOVERDEVICES,
            'message': message.encode('utf-8')}
    try:
        http_handler.request("POST",
                             "/1/messages.json",
                             headers={'Content-type': "application/x-www-form-urlencoded"},
                             body=urlencode(data))
    except:
        log.error("Failed to send a notification.")
        return False
    # Check response
    response = http_handler.getresponse()
    request_status = response.status
    if request_status == 200:
        log.info("Notification sent.")
        return True
    elif request_status == 410:
        log.error("Failed to send a notification: %s" % response.reason)
        return False
    else:
        log.error("Failed to send a notification.")
        return False
