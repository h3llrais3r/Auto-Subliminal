# coding=utf-8

import importlib
import logging
import os

log = logging.getLogger(__name__)


# Utility function to get a notifier object instance of a notifier library
# Each notifier library must define an '__CLASS_NAME__' variable which defines the notifier class name
def _get_notifier_instance(library_name):
    module = importlib.import_module('.' + library_name.lower(), __package__)
    return getattr(module, module.__CLASS_NAME__)()


# Supported notifier libraries must be added here
# The name in the list must match the name of the library module
_notifier_libraries = ['growl', 'mail', 'nma', 'prowl', 'pushalot', 'pushbullet', 'pushover', 'telegram', 'twitter']

# Dict of notifiers (key=name, value=notifier_instance)
_notifiers = dict((name, _get_notifier_instance(name)) for name in _notifier_libraries)


def notify(message, **kwargs):
    """
     Send a notification message with all configured notifiers.

     :param message: the message
     :type message: str
    """
    log.debug('Sending notifications for message %s', message)

    notified = False
    for notifier in list(_notifiers.values()):
        notified |= notifier.notify(message, **kwargs)

    return notified


def notify_download(download_item, **kwargs):
    """
    Send a download notification message with all configured notifiers.

    :param download_item: download item
    :type download_item: autosubliminal.core.item.DownloadItem
    """
    log.debug('Sending download notifications for %r', download_item)

    notified = False
    for notifier in list(_notifiers.values()):
        notified |= notifier.notify_download(download_item, **kwargs)

    return notified


def test_notifier(library):
    """
    Send a test notification for a supported notifier library.

    :param library: the notifier library
    :type library: str
    """
    log.debug('Sending a test notification with %s notifier library', library)

    if library in _notifiers:
        return _notifiers[library].test()
    else:
        raise NotImplementedError
