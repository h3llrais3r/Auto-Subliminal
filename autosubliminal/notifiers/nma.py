# coding=utf-8

import logging

import pynma

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)


class NmaNotifier(BaseNotifier):
    """
    NMA notifier.
    """

    def __init__(self):
        super(NmaNotifier, self).__init__()

    @property
    def log(self):
        return log

    @property
    def name(self):
        return 'NMA'

    @property
    def enabled(self):
        return autosubliminal.NOTIFYNMA

    def _send_message(self, message, **kwargs):
        try:
            nma_instance = pynma.PyNMA(str(autosubliminal.NMAAPI))
            resp = nma_instance.push(application=self.application, event=self.title, description=message)
            if not resp[str(autosubliminal.NMAAPI)]['code'] == '200':
                log.error('%s notification failed' % self.name)
                return False
            else:
                log.info('%s notification sent' % self.name)
                return True
        except Exception as e:
            log.error('%s notification failed' % self.name)
            log.exception(e)
            return False


__CLASS_NAME__ = NmaNotifier.__name__
