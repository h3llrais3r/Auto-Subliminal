# Notify library
# Every function should have 2 calls, send_notify and test_notify
# Send notify should get 4 arguments: videofile (without path), subtitlefile (without path), language and provider
# test_notify doesn't require any argument
# every module should return True if success, and False when failed

import logging
import os

import autosubliminal
from autosubliminal.notify import twitter, mail, nma, growl, prowl, pushalot

log = logging.getLogger(__name__)


def notify_test(notifylib):
    """
    Simple function to send a test message. 
    Notifylib should be a string containing which library is required
    """
    if notifylib == 'twitter':
        log.info("Sending test tweet")
        return twitter.test_notify()

    if notifylib == 'mail':
        log.info("Sending test mail")
        return mail.test_notify()

    if notifylib == 'nma':
        log.info("Sending test notification to your Android device")
        return nma.test_notify()

    if notifylib == 'growl':
        log.info("Testing and registering growl")
        return growl.test_notify()

    if notifylib == 'prowl':
        log.info("Sending test notification to prowl")
        return prowl.test_notify()

    if notifylib == 'pushalot':
        log.info("Sending test notification to your Windows (Phone) device via Pushalot")
        return pushalot.test_notify()


def notify(language, subtitlefile, videofile, provider):
    log.debug("Trying to send notifications. Language: %s, Srt: %s, Video: %s, Provider: %s" % (
        language, subtitlefile, videofile, provider))
    # Lets strip video file and subtitle file of its path!
    subtitlefile = os.path.basename(subtitlefile)
    videofile = os.path.basename(videofile)
    # Send notification
    notify_send(language, subtitlefile, videofile, provider)


def notify_send(language, subtitlefile, videofile, provider):
    if autosubliminal.NOTIFYTWITTER:
        log.debug("Twitter is enabled")
        twitter.send_notify(language, subtitlefile, videofile, provider)

    if autosubliminal.NOTIFYMAIL:
        log.debug("Mail is enabled")
        mail.send_notify(language, subtitlefile, videofile, provider)

    if autosubliminal.NOTIFYNMA:
        log.debug("NMA is enabled")
        nma.send_notify(language, subtitlefile, videofile, provider)

    if autosubliminal.NOTIFYGROWL:
        log.debug("Growl is enabled")
        growl.send_notify(language, subtitlefile, videofile, provider)

    if autosubliminal.NOTIFYPROWL:
        log.debug("Prowl is enabled")
        prowl.send_notify(language, subtitlefile, videofile, provider)

    if autosubliminal.NOTIFYPUSHALOT:
        log.debug("Pushalot is enabled")
        pushalot.send_notify(language, subtitlefile, videofile, provider)