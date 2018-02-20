# coding=utf-8

import logging

import requests
from six.moves.urllib_parse import urlencode

import autosubliminal
from autosubliminal import utils
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


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
                'Body': utils.u2b(message)}
        try:
            response = requests.post('https://pushalot.com/api/sendmessage', data=urlencode(data),
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


__CLASS_NAME__ = PushalotNotifier.__name__
