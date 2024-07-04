# coding=utf-8

import logging
from logging import Logger
from typing import Any

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

PUSHOVERURL = 'https://api.pushover.net/1/messages.json'


class PushoverNotifier(BaseNotifier):
    """
    Pushover notifier.
    """

    def __init__(self) -> None:
        super().__init__()

    @property
    def log(self) -> Logger:
        return log

    @property
    def name(self) -> str:
        return 'Pushover'

    @property
    def enabled(self) -> bool:
        return autosubliminal.NOTIFYPUSHOVER

    def _send_message(self, message: str, **kwargs: Any) -> bool:
        data = {
            'token': autosubliminal.PUSHOVERAPI,
            'user': autosubliminal.PUSHOVERKEY,
            'title': self.notification_title,
            'devices': autosubliminal.PUSHOVERDEVICES,
            'message': message,
        }
        try:
            response = requests.post(PUSHOVERURL, data=data)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = PushoverNotifier.__name__
