# coding=utf-8

import logging

from pip import utils

import requests
from six.moves.urllib_parse import urlencode

import autosubliminal
from autosubliminal import utils
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


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
                'message': utils.u2b(message)}
        try:
            response = requests.post('https://api.pushover.net/1/messages.json', data=urlencode(data),
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


__CLASS_NAME__ = PushoverNotifier.__name__
