# coding=utf-8

import logging

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

PUSHBULLETURL = 'https://api.pushbullet.com/v2/pushes'


class PushbulletNotifier(BaseNotifier):
    """
    Pushbullet notifier.
    """

    def __init__(self):
        super().__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'Pushbullet'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYPUSHBULLET

    def _send_message(self, message, **kwargs):
        data = {
            'title': self.notification_title,
            'body': message,
            'type': 'note'
        }
        headers = {
            'Access-Token': autosubliminal.PUSHBULLETAPI,
            'Content-Type': 'application/json'
        }
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
