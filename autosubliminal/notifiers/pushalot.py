# coding=utf-8

import logging
from httplib import HTTPSConnection
from urllib import urlencode

import autosubliminal
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
                'Title': self.application_title,
                'Body': message.encode('utf-8')}
        try:
            http_handler = HTTPSConnection('pushalot.com')
            http_handler.request(method='POST',
                                 url='/api/sendmessage',
                                 headers={'Content-type': 'application/x-www-form-urlencoded'},
                                 body=urlencode(data))
            response = http_handler.getresponse()
            request_status = response.status
            if request_status != 200:
                log.error('%s notification failed: %s' % (self.name, response.reason))
                return False
            else:
                log.info('%s notification sent' % self.name)
                return True
        except:
            log.error('%s notification failed' % self.name)
            return False


__CLASS_NAME__ = PushalotNotifier.__name__
