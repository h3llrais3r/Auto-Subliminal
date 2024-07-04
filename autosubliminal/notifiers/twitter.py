# coding=utf-8

import logging
from logging import Logger
from typing import Any

from twitter import Api

import autosubliminal
from autosubliminal.core.item import DownloadItem
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

    def __init__(self) -> None:
        super().__init__()

    @property
    def log(self) -> Logger:
        return log

    @property
    def name(self) -> str:
        return 'Twitter'

    @property
    def enabled(self) -> bool:
        return autosubliminal.NOTIFYTWITTER

    # Override of generic _get_download_message method
    def _get_download_message(self, download_item: DownloadItem) -> str:
        # Prepend application title to default download message
        return self.notification_title + '\n' + super()._get_download_message(download_item)

    def _send_message(self, message: str, **kwargs: Any) -> bool:
        try:
            api = Api(
                consumer_key=CONSUMER_KEY,
                consumer_secret=CONSUMER_SECRET,
                access_token_key=autosubliminal.TWITTERKEY,
                access_token_secret=autosubliminal.TWITTERSECRET,
            )
            api.PostUpdate(str(message[:280]))
            return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = TwitterNotifier.__name__
