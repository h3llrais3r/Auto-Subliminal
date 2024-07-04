# coding=utf-8

import logging
from logging import Logger
from typing import Any

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

PUSHBULLETURL = 'https://api.pushbullet.com/v2/pushes'


class PushbulletNotifier(BaseNotifier):
    """
    Pushbullet notifier.
    """

    def __init__(self) -> None:
        super().__init__()

    @property
    def log(self) -> Logger:
        return log

    @property
    def name(self) -> str:
        return 'Pushbullet'

    @property
    def enabled(self) -> bool:
        return autosubliminal.NOTIFYPUSHBULLET

    def _send_message(self, message: str, **kwargs: Any) -> bool:
        data = {'title': self.notification_title, 'body': message, 'type': 'note'}
        headers = {'Access-Token': autosubliminal.PUSHBULLETAPI, 'Content-Type': 'application/json'}
        try:
            # Api requires json, so use json instead of data to automatically convert it to json
            response = requests.post(PUSHBULLETURL, json=data, headers=headers)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = PushbulletNotifier.__name__
