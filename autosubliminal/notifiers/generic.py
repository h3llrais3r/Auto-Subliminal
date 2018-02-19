# coding=utf-8

import abc

from six import add_metaclass


@add_metaclass(abc.ABCMeta)
class BaseNotifier(object):
    """
    Base class for all notifiers.
    """

    def __init__(self):
        self.application = 'Auto-Subliminal'
        self.title = 'Subtitle download'
        self.notification_title = self.application + ': ' + self.title
        self.test_message = 'Test notification from ' + self.application

    @abc.abstractproperty
    def log(self):
        pass

    @abc.abstractproperty
    def name(self):
        pass

    @abc.abstractproperty
    def enabled(self):
        pass

    def _get_message(self, **kwargs):
        """
        Default message.
        """
        message = ''
        if 'subtitle' in kwargs:
            message += 'Subtitle: %s\n' % kwargs['subtitle']
        if 'language' in kwargs:
            message += 'Language: %s\n' % kwargs['language']
        if 'provider' in kwargs:
            message += 'Provider: %s\n' % kwargs['provider']
        return message

    @abc.abstractmethod
    def _send_message(self, message, **kwargs):
        pass

    def notify_download(self, **kwargs):
        # Only notify when enabled
        if self.enabled:
            self.log.debug('Sending a %s notification' % self.name)
            message = self._get_message(**kwargs)
            return self._send_message(message, **kwargs)
        else:
            return False

    def test(self):
        self.log.debug('Testing a %s notification' % self.name)
        return self._send_message(self.test_message)
