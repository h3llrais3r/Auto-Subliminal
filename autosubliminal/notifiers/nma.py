# coding=utf-8

import logging
import xml.etree.ElementTree as ET

import requests

import autosubliminal
from autosubliminal.notifiers.generic import BaseNotifier

log = logging.getLogger(__name__)

NMAURL = 'https://www.notifymyandroid.com/publicapi/notify'


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
        data = {
            'apikey': autosubliminal.NMAAPI,
            'application': self.application,
            'event': self.title,
            'description': message,
            'priority': autosubliminal.NMAPRIORITY
        }
        try:
            response = requests.post(NMAURL, data=data)
            if response.status_code != 200:
                log.error('%s notification failed: %s', self.name, response.reason)
                return False
            else:
                return self._parse_response(response)
        except Exception:
            log.exception('%s notification failed', self.name)
            return False

    def _parse_response(self, response):
        # See http://www.notifymyandroid.com/api.jsp#returnmsg
        # Example success response:
        # <?xml version="1.0" encoding="UTF-8"?><nma><success code="200" remaining="997" resettimer="52"/></nma>
        # Example error response (but request was still ok)
        # <?xml version="1.0" encoding="UTF-8"?><nma><error code="402" resettimer="15">Your IP exceeded...</error></nma>
        response_xml = ET.fromstring(response.content)
        success = response_xml.find('./success')
        if success is not None:
            log.info('%s notification sent', self.name)
            log.debug('Response: %r', success.attrib)
            return True
        else:
            error = response_xml.find('./error')
            log.error('%s notification failed: %r', self.name, error.attrib)
            return False


__CLASS_NAME__ = NmaNotifier.__name__
