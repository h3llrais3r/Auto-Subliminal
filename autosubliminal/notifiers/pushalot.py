# coding=utf-8

import logging

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

PUSHALOTURL = 'https://pushalot.com/api/sendmessage'


class PushalotNotifier(BaseNotifier):
    """
    Pushalot notifier.
    """

    def __init__(self):
        super(PushalotNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'Pushalot'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYPUSHALOT

    def _send_message(self, message, **kwargs):
        data = {'AuthorizationToken': autosubliminal.PUSHALOTAPI,
                'Title': self.notification_title,
                'Body': message}
        try:
            response = requests.post(PUSHALOTURL, data=data)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                log.info('%s notification sent', self.name)
                return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = PushalotNotifier.__name__
