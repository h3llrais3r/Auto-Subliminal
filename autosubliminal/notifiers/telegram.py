# coding=utf-8

import logging
from logging import Logger
from typing import Any

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

TELEGRAMURL = 'https://api.telegram.org/bot%s/sendMessage'


class TelegramNotifier(BaseNotifier):
    """
    Telegram notifier.
    """

    def __init__(self) -> None:
        super().__init__()

    @property
    def log(self) -> Logger:
        return log

    @property
    def name(self) -> str:
        return 'Telegram'

    @property
    def enabled(self) -> bool:
        return autosubliminal.NOTIFYTELEGRAM

    def _send_message(self, message: str, **kwargs: Any) -> bool:
        data = {'chat_id': autosubliminal.TELEGRAMCHATID, 'text': message}
        try:
            response = requests.post(TELEGRAMURL % autosubliminal.TELEGRAMBOTAPI, data=data)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = TelegramNotifier.__name__
