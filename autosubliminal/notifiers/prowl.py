import logging

from httplib import HTTPSConnection
from urllib import urlencode

import autosubliminal
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
        return "Prowl"

    @property
    def enabled(self):
        return autosubliminal.NOTIFYPROWL

    def _send_message(self, message):
        data = {'apikey': autosubliminal.PROWLAPI,
                'application': self.application,
                'event': self.title,
                'description': message.encode("utf-8"),
                'priority': autosubliminal.PROWLPRIORITY}
        try:
            http_handler = HTTPSConnection("api.prowlapp.com")
            http_handler.request(method="POST",
                                 url="/publicapi/add",
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


__CLASS_NAME__ = ProwlNotifier.__name__
