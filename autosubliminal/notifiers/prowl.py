# coding=utf-8

import logging
from logging import Logger
from typing import Any

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

PROWLURL = 'https://api.prowlapp.com/publicapi/add'


class ProwlNotifier(BaseNotifier):
    """
    Prowl notifier.
    """

    def __init__(self) -> None:
        super().__init__()

    @property
    def log(self) -> Logger:
        return log

    @property
    def name(self) -> str:
        return 'Prowl'

    @property
    def enabled(self) -> bool:
        return autosubliminal.NOTIFYPROWL

    def _send_message(self, message: str, **kwargs: Any) -> bool:
        data = {
            'apikey': autosubliminal.PROWLAPI,
            'application': self.application,
            'event': self.title,
            'description': message,
            'priority': autosubliminal.PROWLPRIORITY,
        }
        try:
            response = requests.post(PROWLURL, data=data)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = ProwlNotifier.__name__
