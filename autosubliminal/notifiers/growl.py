import logging
import socket

from lib.growl import gntp

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

    # Override of generic _get_message method
    def _get_message(self, **kwargs):
        message = super(GrowlNotifier, self)._get_message(**kwargs)
        return self._create_notice(message).encode()

    # Override of generic test method
    def test(self):
        log.debug("Testing a %s notification" % self.name)
        # Register
        if not self._send_message(self._create_register().encode()):
            return False
        # Notice
        return self._send_message(self._create_notice(self.test_message).encode())

    def _create_register(self):
        register = gntp.GNTPRegister()
        register.add_header('Application-Name', self.application)
        register.add_notification('Test', True)
        register.add_notification(self.title, True)
        if autosubliminal.GROWLPASS:
            register.set_password(autosubliminal.GROWLPASS)
        return register

    def _create_notice(self, message):
        notice = gntp.GNTPNotice()
        notice.add_header('Application-Name', self.application)
        notice.add_header('Notification-Name', self.title)
        notice.add_header('Notification-Title', self.application_title)
        notice.add_header('Notification-Text', message)
        if autosubliminal.GROWLPASS:
            notice.set_password(autosubliminal.GROWLPASS)
        return notice

    def _send_message(self, message, **kwargs):
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect((autosubliminal.GROWLHOST, int(autosubliminal.GROWLPORT)))
            s.send(message)
            gntp.parse_gntp(s.recv(1024))
            s.close()
            log.info("%s notification sent" % self.name)
            return True
        except socket.error:
            log.error("%s notification failed" % self.name)
            return False


__CLASS_NAME__ = GrowlNotifier.__name__
