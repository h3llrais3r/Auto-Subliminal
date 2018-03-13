# coding=utf-8

import logging

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

TELEGRAMURL = 'https://api.telegram.org/bot%s/sendMessage'


class TelegramNotifier(BaseNotifier):
    """
    Telegram notifier.
    """

    def __init__(self):
        super(TelegramNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'Telegram'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYTELEGRAM

    def _send_message(self, message, **kwargs):
        data = {'chat_id': autosubliminal.TELEGRAMCHATID,
                'text': message}
        try:
            response = requests.post(TELEGRAMURL % autosubliminal.TELEGRAMBOTAPI, data=data)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                log.info('%s notification sent', self.name)
                return True
        except Exception:
            log.exception('%s notification failed', self.name)
            return False


__CLASS_NAME__ = TelegramNotifier.__name__
