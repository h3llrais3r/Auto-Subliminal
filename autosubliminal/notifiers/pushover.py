import logging
from httplib import HTTPSConnection
from urllib import urlencode

import autosubliminal
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
        return "Pushover"

    @property
    def enabled(self):
        return autosubliminal.NOTIFYPUSHOVER

    def _send_message(self, message, **kwargs):
        data = {'token': autosubliminal.PUSHOVERAPI,
                'user': autosubliminal.PUSHOVERKEY,
                'title': self.application_title,
                'devices': autosubliminal.PUSHOVERDEVICES,
                'message': message.encode('utf-8')}
        try:
            http_handler = HTTPSConnection("api.pushover.net")
            http_handler.request(method="POST",
                                 url="/1/messages.json",
                                 headers={'Content-type': "application/x-www-form-urlencoded"},
                                 body=urlencode(data))
            response = http_handler.getresponse()
            request_status = response.status
            if request_status != 200:
                log.error("%s notification failed: %s" % (self.name, response.reason))
                return False
            else:
                log.info("%s notification sent" % self.name)
                return True
        except:
            log.error("%s notification failed" % self.name)
            return False


__CLASS_NAME__ = PushoverNotifier.__name__
