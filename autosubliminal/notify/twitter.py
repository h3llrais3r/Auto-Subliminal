import logging

import lib.pythontwitter as twitter
import autosubliminal


log = logging.getLogger(__name__)

try:
    from urlparse import parse_qsl
except:
    from cgi import parse_qsl

CONSUMER_KEY = 'CRMvUogoJ5kMErtU9fiw'
CONSUMER_SECRET = 'JqS5jJIWdokl5iijZmoBHNwRsknw7xmCxPggEsmo8'

REQUEST_TOKEN_URL = 'https://api.twitter.com/oauth/request_token'
ACCESS_TOKEN_URL = 'https://api.twitter.com/oauth/access_token'
AUTHORIZATION_URL = 'https://api.twitter.com/oauth/authorize'
SIGNIN_URL = 'https://api.twitter.com/oauth/authenticate'


def _send_notify(message):
    try:
        api = twitter.Api(CONSUMER_KEY, CONSUMER_SECRET, autosubliminal.TWITTERKEY, autosubliminal.TWITTERSECRET)
        api.PostUpdate(message[:140])
        log.info("Tweet sent")
        return True
    except:
        log.error("Failed to send a tweet")
        return False


def test_notify():
    log.debug("Trying to send a tweet")
    message = 'Auto-Subliminal: Testing 1-2-3'
    return _send_notify(message)


def send_notify(lang, subtitlefile, videofile):
    log.debug("Trying to send a tweet")
    message = 'Auto-Subliminal Downloaded: %s' % subtitlefile
    return _send_notify(message)
   
