import logging

from lib.twitter import Api

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

CONSUMER_KEY = 'bRHxdWzMWnvwq5HapVZtFA'
CONSUMER_SECRET = 'X4U3aTdPkBdLVLgH87xhC4oRc4JpkNc6MlG1ZAtG0a8'

REQUEST_TOKEN_URL = 'https://api.twitter.com/oauth/request_token'
ACCESS_TOKEN_URL = 'https://api.twitter.com/oauth/access_token'
AUTHORIZATION_URL = 'https://api.twitter.com/oauth/authorize'
SIGNIN_URL = 'https://api.twitter.com/oauth/authenticate'


class TwitterNotifier(BaseNotifier):
    """
    Twitter notifier.
    """

    def __init__(self):
        super(TwitterNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'Twitter'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYTWITTER

    # Override of generic _get_message method
    def _get_message(self, **kwargs):
        # Prepend application title to default message
        return self.application_title + '\n' + super(TwitterNotifier, self)._get_message(**kwargs)

    def _send_message(self, message, **kwargs):
        try:
            twitter_api = Api(consumer_key=CONSUMER_KEY,
                              consumer_secret=CONSUMER_SECRET,
                              access_token_key=autosubliminal.TWITTERKEY,
                              access_token_secret=autosubliminal.TWITTERSECRET)
            twitter_api.PostUpdate(message[:140])
            log.info('%s notification sent' % self.name)
            return True
        except:
            log.error('%s notification failed' % self.name)
            return False


__CLASS_NAME__ = TwitterNotifier.__name__
