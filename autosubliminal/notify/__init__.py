# Notify library
# Every function should have 2 calls, send_notify and test_notify
# Function send_notify should get 4 arguments: video, subtitle, language and provider
# Function test_notify doesn't require any argument
# Every module should return True if success, and False when failed

import logging
import os

import autosubliminal
from autosubliminal.notify import twitter, mail, nma, growl, prowl, pushalot, pushover

log = logging.getLogger(__name__)


class Notifier(object):
    def __init__(self, download_item):
        self.video = os.path.basename(download_item["originalFileLocationOnDisk"])  # Strip path
        self.subtitle = os.path.basename(download_item['destinationFileLocationOnDisk'])  # Strip path
        self.language = download_item['downlang']
        self.provider = download_item['provider']

    def notify(self):
        log.debug("Trying to send notifications. Video: %s, Subtitle: %s, Language: %s, Provider: %s" % (
            self.video, self.subtitle, self.language, self.provider))

        # Send notification
        if autosubliminal.NOTIFYMAIL:
            log.debug("Mail is enabled")
            mail.send_notify(self.video, self.subtitle, self.language, self.provider)

        if autosubliminal.NOTIFYTWITTER:
            log.debug("Twitter is enabled")
            twitter.send_notify(self.video, self.subtitle, self.language, self.provider)

        if autosubliminal.NOTIFYPUSHALOT:
            log.debug("Pushalot is enabled")
            pushalot.send_notify(self.video, self.subtitle, self.language, self.provider)

        if autosubliminal.NOTIFYPUSHOVER:
            log.debug("Pushover is enabled")
            pushover.send_notify(self.video, self.subtitle, self.language, self.provider)

        if autosubliminal.NOTIFYNMA:
            log.debug("NMA is enabled")
            nma.send_notify(self.video, self.subtitle, self.language, self.provider)

        if autosubliminal.NOTIFYGROWL:
            log.debug("Growl is enabled")
            growl.send_notify(self.video, self.subtitle, self.language, self.provider)

        if autosubliminal.NOTIFYPROWL:
            log.debug("Prowl is enabled")
            prowl.send_notify(self.video, self.subtitle, self.language, self.provider)


def notify_test(notify_lib):
    """
    Simple function to send a test message. 
    Notify_lib should be a string containing which library is required
    """
    if notify_lib == 'mail':
        log.info("Sending test mail")
        return mail.test_notify()

    if notify_lib == 'twitter':
        log.info("Sending test tweet")
        return twitter.test_notify()

    if notify_lib == 'pushalot':
        log.info("Sending test notification to your Windows (Phone) device via Pushalot")
        return pushalot.test_notify()

    if notify_lib == 'pushover':
        log.info("Sending test notification to your Android or IOS device via Pushover")
        return pushover.test_notify()

    if notify_lib == 'nma':
        log.info("Sending test notification to your Android device")
        return nma.test_notify()

    if notify_lib == 'growl':
        log.info("Testing and registering growl")
        return growl.test_notify()

    if notify_lib == 'prowl':
        log.info("Sending test notification to prowl")
        return prowl.test_notify()
