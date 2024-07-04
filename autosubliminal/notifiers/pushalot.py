# coding=utf-8

import logging
from logging import Logger
from typing import Any

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

PUSHALOTURL = 'https://pushalot.com/api/sendmessage'


class PushalotNotifier(BaseNotifier):
    """
    Pushalot notifier.
    """

    def __init__(self) -> None:
        super().__init__()

    @property
    def log(self) -> Logger:
        return log

    @property
    def name(self) -> str:
        return 'Pushalot'

    @property
    def enabled(self) -> bool:
        return autosubliminal.NOTIFYPUSHALOT

    def _send_message(self, message: str, **kwargs: Any) -> bool:
        data = {'AuthorizationToken': autosubliminal.PUSHALOTAPI, 'Title': self.notification_title, 'Body': message}
        try:
            response = requests.post(PUSHALOTURL, data=data)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = PushalotNotifier.__name__
