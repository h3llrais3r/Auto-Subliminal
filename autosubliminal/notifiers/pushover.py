# coding=utf-8

import logging

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

PUSHOVERURL = 'https://api.pushover.net/1/messages.json'


class PushoverNotifier(BaseNotifier):
    """
    Pushover notifier.
    """

    def __init__(self):
        super(PushoverNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'Pushover'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYPUSHOVER

    def _send_message(self, message, **kwargs):
        data = {'token': autosubliminal.PUSHOVERAPI,
                'user': autosubliminal.PUSHOVERKEY,
                'title': self.notification_title,
                'devices': autosubliminal.PUSHOVERDEVICES,
                'message': message}
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
