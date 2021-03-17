# coding=utf-8

import logging

from pushbullet import Pushbullet

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


class PushbulletNotifier(BaseNotifier):
    """
    Pushbullet notifier.
    """

    def __init__(self):
        super(PushbulletNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'Pushbullet'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYPUSHBULLET

    def _send_message(self, message, **kwargs):
        try:
            pb = Pushbullet(autosubliminal.PUSHBULLETAPI)
            pb.push_note(title=self.notification_title, body=message)
            return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = PushbulletNotifier.__name__
