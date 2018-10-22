# coding=utf-8

import logging

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

PROWLURL = 'https://api.prowlapp.com/publicapi/add'


class ProwlNotifier(BaseNotifier):
    """
    Prowl notifier.
    """

    def __init__(self):
        super(ProwlNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'Prowl'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYPROWL

    def _send_message(self, message, **kwargs):
        data = {'apikey': autosubliminal.PROWLAPI,
                'application': self.application,
                'event': self.title,
                'description': message,
                'priority': autosubliminal.PROWLPRIORITY}
        try:
            response = requests.post(PROWLURL, data=data)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = ProwlNotifier.__name__
