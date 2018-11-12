# coding=utf-8

import abc
import os

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
        pass  # pragma: no cover

    @abc.abstractproperty
    def name(self):
        pass  # pragma: no cover

    @abc.abstractproperty
    def enabled(self):
        pass  # pragma: no cover

    @abc.abstractmethod
    def _send_message(self, message, **kwargs):
        """Implementation of the notifier to send a message."""
        pass  # pragma: no cover

    def _get_download_message(self, download_item):
        message = ''
        if download_item.subtitlepath:
            message += 'Subtitle: %s\n' % os.path.basename(download_item.subtitlepath)
        if download_item.downlang:
            message += 'Language: %s\n' % download_item.downlang
        if download_item.provider:
            message += 'Provider: %s\n' % download_item.provider
        return message

    def _notify(self, message, **kwargs):
        notified = self._send_message(message, **kwargs)
        if notified:
            self.log.info('%s notification sent', self.name)
        return notified

    def notify(self, message, **kwargs):
        """Send a notification message."""

        # Only notify when enabled
        if self.enabled:
            self.log.debug('Sending a %s notification', self.name)
            return self._notify(message, **kwargs)
        else:
            return False

    def notify_download(self, download_item, **kwargs):
        """Send a download notification message."""

        # Only notify when enabled
        if self.enabled:
            self.log.debug('Sending a download notification with %s', self.name)
            message = self._get_download_message(download_item)
            return self._notify(message, **kwargs)
        else:
            return False

    def test(self):
        """Send a test notification message"""

        # Notifier should not be enabled in order to test it
        return self._notify(self.test_message)
