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
_notifier_libraries = ['growl', 'mail', 'nma', 'prowl', 'pushalot', 'pushbullet', 'pushover', 'twitter']

# Dict of notifiers (key=name, value=notifier_instance)
_notifiers = dict((name, _get_notifier_instance(name)) for name in _notifier_libraries)


class Notifier(object):
    """
    Root notifier. Only this class should be used. The different libraries should only be used here.
    """

    def __init__(self, download_item):
        self._notifier_dict = {'video': os.path.basename(download_item['videopath']),
                               'subtitle': os.path.basename(download_item['destinationFileLocationOnDisk']),
                               'language': download_item['downlang'],
                               'provider': download_item['provider']}

    def notify_download(self):
        log.debug('Sending download notifications. Video: %s, Subtitle: %s, Language: %s, Provider: %s',
                  self._notifier_dict['video'], self._notifier_dict['subtitle'], self._notifier_dict['language'],
                  self._notifier_dict['provider'])

        notified = False
        for notifier in list(_notifiers.values()):
            notified |= notifier.notify_download(**self._notifier_dict)

        return notified


def test_notifier(library):
    """
    Simple method to send a test notification for a supported notifier library.
    """
    if library in _notifiers:
        return _notifiers[library].test()
    else:
        raise NotImplementedError
