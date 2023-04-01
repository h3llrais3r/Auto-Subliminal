# coding=utf-8

import os
from abc import ABC, abstractmethod
from logging import Logger
from typing import Any

from autosubliminal.core.item import DownloadItem


class BaseNotifier(ABC):
    """
    Base class for all notifiers.
    """

    def __init__(self) -> None:
        self.application = 'Auto-Subliminal'
        self.title = 'Downloaded subtitle'
        self.notification_title = self.application + ': ' + self.title
        self.test_message = 'Test notification from ' + self.application

    @property
    @abstractmethod
    def log(self) -> Logger:
        pass

    @property
    @abstractmethod
    def name(self) -> str:
        pass

    @property
    @abstractmethod
    def enabled(self) -> bool:
        pass

    @abstractmethod
    def _send_message(self, message: str, **kwargs: Any) -> bool:
        """Implementation of the notifier to send a message."""
        pass

    def _get_download_message(self, download_item: DownloadItem) -> str:
        message = ''
        if download_item.subtitle_path:
            message += 'Subtitle: %s\n' % os.path.basename(download_item.subtitle_path)
        if download_item.language:
            message += 'Language: %s\n' % download_item.language
        if download_item.provider:
            message += 'Provider: %s\n' % download_item.provider
        return message

    def _notify(self, message: str, **kwargs: Any) -> bool:
        notified = self._send_message(message, **kwargs)
        if notified:
            self.log.info('%s notification sent', self.name)
        return notified

    def notify(self, message: str, **kwargs: Any) -> bool:
        """Send a notification message."""

        # Only notify when enabled
        if self.enabled:
            self.log.debug('Sending a %s notification', self.name)
            return self._notify(message, **kwargs)
        else:
            return False

    def notify_download(self, download_item: DownloadItem, **kwargs: Any) -> bool:
        """Send a download notification message."""

        # Only notify when enabled
        if self.enabled:
            self.log.debug('Sending a download notification with %s', self.name)
            message = self._get_download_message(download_item)
            return self._notify(message, **kwargs)
        else:
            return False

    def test(self) -> bool:
        """Send a test notification message"""

        # Notifier should not be enabled in order to test it
        return self._notify(self.test_message)
