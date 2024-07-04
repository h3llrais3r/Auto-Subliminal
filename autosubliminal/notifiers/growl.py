# coding=utf-8

import logging
from logging import Logger
from typing import Any

import gntp.notifier

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


class GrowlNotifier(BaseNotifier):
    """
    Growl notifier.
    """

    def __init__(self) -> None:
        super().__init__()

    @property
    def log(self) -> Logger:
        return log

    @property
    def name(self) -> str:
        return 'Growl'

    @property
    def enabled(self) -> bool:
        return autosubliminal.NOTIFYGROWL

    def _create_notifier(self) -> gntp.notifier.GrowlNotifier:
        return gntp.notifier.GrowlNotifier(
            applicationName=self.application,
            notifications=[self.notification_title],
            hostname=autosubliminal.GROWLHOST,
            port=autosubliminal.GROWLPORT,
            password=autosubliminal.GROWLPASS if autosubliminal.GROWLPASS else None,
        )

    def _register(self) -> bool:
        try:
            # Can return error in case of invalid response
            response = self._create_notifier().register()
            if response is not True:
                log.error('%s registration failed: %r', self.name, response)
                return False
            return True
        except Exception:
            log.exception('%s registration failed', self.name)
            return False

    def _send_message(self, message: str, **kwargs: Any) -> bool:
        try:
            response = self._create_notifier().notify(
                noteType=self.notification_title,
                title=self.title,
                description=message,
                priority=autosubliminal.GROWLPRIORITY,
            )
            if response is not True:
                log.error('%s notification failed: %r', self.name, response)
                return False
            return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False

    # Override of generic test method (test will also take care the growl registration)
    def test(self) -> bool:
        # Registration
        if not self._register():
            return False
        # Notification
        return super().test()


__CLASS_NAME__ = GrowlNotifier.__name__
