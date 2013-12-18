import logging
import autosub

from httplib import HTTPSConnection
from urllib import urlencode

log = logging.getLogger('thelogger')

def _send_notify(message):
    try:
        http_handler = HTTPSConnection("api.prowlapp.com")
        http_handler.request("POST", "/publicapi/add", headers = {'Content-type': "application/x-www-form-urlencoded"}, body = urlencode(message))
        response = http_handler.getresponse()
        request_status = response.status
    except:
        log.error("Prowl: Failed to connect to Prowl")
        return False
       
    if request_status == 200:
        log.info('Prowl: Notification sent')
        return True
    elif request_status == 401:
        log.error("Prowl: Authentication failed, check your API key")
        return False
    else:
        log.error("Prowl: Failed to sent notification")
        return False

def test_notify():
    message = 'Testing Prowl! Seems to work!'
    
    data = {'apikey': autosub.PROWLAPI,
            'application': 'Auto-Sub',
            'event': 'Test Message',
            'description': message.encode("utf-8"),
            'priority': autosub.PROWLPRIORITY}
    return _send_notify(data)
    
def send_notify(lang, subtitlefile, videofile):
    message = 'Auto-Sub just download %s' % subtitlefile
    
    data = {'apikey': autosub.PROWLAPI,
            'application': 'Auto-Sub',
            'event': 'Subtitle Downloaded',
            'description': message.encode("utf-8"),
            'priority': autosub.PROWLPRIORITY}
    return _send_notify(data)
