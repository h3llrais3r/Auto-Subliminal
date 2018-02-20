# coding=utf-8

import logging

import requests
from six.moves.urllib_parse import urlencode

import autosubliminal
from autosubliminal import utils
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


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
                'description': utils.u2b(message),
                'priority': autosubliminal.PROWLPRIORITY}
        try:
            response = requests.post('https://api.prowlapp.com/publicapi/add', data=urlencode(data),
                                     headers={'Content-type': 'application/x-www-form-urlencoded'})
            if response.status_code != 200:
                log.error('%s notification failed: %s' % (self.name, response.reason))
                return False
            else:
                log.info('%s notification sent' % self.name)
                return True
        except Exception as e:
            log.error('%s notification failed' % self.name)
            log.exception(e)
            return False


__CLASS_NAME__ = ProwlNotifier.__name__
