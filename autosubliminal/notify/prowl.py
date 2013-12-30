import logging
from httplib import HTTPSConnection
from urllib import urlencode

import autosubliminal


log = logging.getLogger(__name__)


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
        log.error("Authentication failed, check your API key")
        return False
    else:
        log.error("Failed to sent notification")
        return False


def test_notify():
    message = 'Testing Prowl! Seems to work!'

    data = {'apikey': autosubliminal.PROWLAPI,
            'application': 'Auto-Subliminal',
            'event': 'Test Message',
            'description': message.encode("utf-8"),
            'priority': autosubliminal.PROWLPRIORITY}
    return _send_notify(data)


def send_notify(lang, subtitlefile, videofile):
    message = 'Auto-Subliminal just download %s' % subtitlefile

    data = {'apikey': autosubliminal.PROWLAPI,
            'application': 'Auto-Subliminal',
            'event': 'Subtitle Downloaded',
            'description': message.encode("utf-8"),
            'priority': autosubliminal.PROWLPRIORITY}
    return _send_notify(data)
