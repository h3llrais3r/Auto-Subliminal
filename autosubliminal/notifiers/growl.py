# coding=utf-8

import logging

import gntp.notifier

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
        return 'Growl'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYGROWL

    def _create_notifier(self):
        return gntp.notifier.GrowlNotifier(applicationName=self.application,
                                           notifications=[self.notification_title],
                                           hostname=autosubliminal.GROWLHOST,
                                           port=autosubliminal.GROWLPORT,
                                           password=autosubliminal.GROWLPASS if autosubliminal.GROWLPASS else None)

    def _register(self):
        try:
            # Can return error in case of invalid response
            response = self._create_notifier().register()
            if response is not True:
                log.error('%s registration failed: %r', self.name, response)
                return False
            return True
        except Exception as e:
            log.error('%s registration failed', self.name)
            log.exception(e)
            return False

    def _send_message(self, message, **kwargs):
        try:
            response = self._create_notifier().notify(noteType=self.notification_title,
                                                      title=self.title,
                                                      description=message,
                                                      priority=autosubliminal.GROWLPRIORITY)
            if response is not True:
                log.error('%s notification failed: %r', self.name, response)
                return False
            log.info('%s notification sent', self.name)
            return True
        except Exception as e:
            log.error('%s notification failed', self.name)
            log.exception(e)
            return False

    # Override of generic test method (test will also take care the growl registration)
    def test(self):
        log.debug('Testing a %s notification', self.name)
        # Registration
        if not self._register():
            return False
        # Notification
        return self._send_message(self.test_message)


__CLASS_NAME__ = GrowlNotifier.__name__
