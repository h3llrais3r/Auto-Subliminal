import logging
from httplib import HTTPSConnection
from urllib import urlencode

import autosubliminal

log = logging.getLogger(__name__)


def test_notify():
    log.debug("Trying to send a notification")
    message = "Test notification by Auto-Subliminal"
    data = {'apikey': autosubliminal.PROWLAPI,
            'application': 'Auto-Subliminal',
            'event': 'Test',
            'description': message.encode("utf-8"),
            'priority': autosubliminal.PROWLPRIORITY}
    return _send_notify(data)


def send_notify(video, subtitle, language, provider):
    message = "Subtitle: %s \n Language: %s \n Provider: %s " % (subtitle, language, provider)
    data = {'apikey': autosubliminal.PROWLAPI,
            'application': 'Auto-Subliminal',
            'event': 'Subtitle download',
            'description': message.encode("utf-8"),
            'priority': autosubliminal.PROWLPRIORITY}
    return _send_notify(data)


def _send_notify(message):
    try:
        http_handler = HTTPSConnection("api.prowlapp.com")
        http_handler.request("POST", "/publicapi/add", headers={'Content-type': "application/x-www-form-urlencoded"},
                             body=urlencode(message))
        response = http_handler.getresponse()
        request_status = response.status
    except:
        log.error(" Failed to connect to Prowl")
        return False
    if request_status == 200:
        log.info('Notification sent')
        return True
    elif request_status == 401:
        log.error("Failed to authenticate, check your API key")
        return False
    else:
        log.error("Failed to send a message")
        return False