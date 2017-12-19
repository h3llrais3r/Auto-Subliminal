import logging
import socket

from lib.growl.growl import Registration, Notification, GROWL_UDP_PORT

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


class GrowlNotifier(BaseNotifier):
    """
    Growl notifier.
    """

    def __init__(self):
        super(GrowlNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return "Growl"

    @property
    def enabled(self):
        return autosubliminal.NOTIFYGROWL

    # Override of generic test method (test will also take care the growl registration)
    def test(self):
        log.debug("Testing a %s notification" % self.name)
        # Registration
        if not self._send_message(self._create_registration()):
            return False
        # Notification
        return self._send_message(self._create_notification(self.test_message))

    def _create_registration(self):
        registration = Registration(application=self.application,
                                    password=autosubliminal.GROWLPASS if autosubliminal.GROWLPASS else None)
        registration.add_notification(notification=self.application_title)
        return registration

    def _create_notification(self, message):
        notification = Notification(application=self.application,
                                    notification=self.application_title,
                                    title=self.title,
                                    description=message,
                                    password=autosubliminal.GROWLPASS if autosubliminal.GROWLPASS else None)
        return notification

    # Override of generic _get_message method
    def _get_message(self, **kwargs):
        message = super(GrowlNotifier, self)._get_message(**kwargs)
        return self._create_notification(message)

    def _send_message(self, message, **kwargs):
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            address = (autosubliminal.GROWLHOST, GROWL_UDP_PORT)
            s.sendto(message.payload(), address)
            s.close()
            log.info("%s notification sent" % self.name)
            return True
        except socket.error:
            log.error("%s notification failed" % self.name)
            return False


__CLASS_NAME__ = GrowlNotifier.__name__
