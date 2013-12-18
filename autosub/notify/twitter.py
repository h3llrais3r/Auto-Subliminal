import library.pythontwitter as twitter
import autosub
import logging

log = logging.getLogger('thelogger')

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
        api = twitter.Api(CONSUMER_KEY, CONSUMER_SECRET, autosub.TWITTERKEY, autosub.TWITTERSECRET)
        api.PostUpdate(message[:140])
        log.info("Twitter: Tweet sent")
        return True
    except:
        log.error("Twitter: Failed to send a tweet")
        return False

def test_notify():
    log.debug("Twitter: Trying to send a tweet")
    message = 'AutoSub: Testing 1-2-3'
    return _send_notify(message)

def send_notify(lang, subtitlefile, videofile):
    log.debug("Twitter: Trying to send a tweet")
    message = 'AutoSub Downloaded: %s' %subtitlefile
    return _send_notify(message)
   
