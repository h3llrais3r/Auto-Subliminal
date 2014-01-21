# Notify library
# Every function should have 2 calls, send_notify and test_notify
# Send notify should get 3 argument: videofile, subtitlefile (both without path) and lang (which should be the language)
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


def notify(lang, subtitlefile, videofile):
    log.debug("Trying to send notifications. Language: %s Srt: %s Video: %s" % (lang, subtitlefile, videofile))
    # Lets strip video file and subtitle file of its path!
    subtitlefile = os.path.basename(subtitlefile)
    videofile = os.path.basename(videofile)

    if lang == 'en' and autosubliminal.NOTIFYEN:
        notify_send(lang, subtitlefile, videofile)
    if lang == 'nl' and autosubliminal.NOTIFYNL:
        notify_send(lang, subtitlefile, videofile)


def notify_send(lang, subtitlefile, videofile):
    if autosubliminal.NOTIFYTWITTER:
        log.debug("Twitter is enabled")
        twitter.send_notify(lang, subtitlefile, videofile)

    if autosubliminal.NOTIFYMAIL:
        log.debug("Mail is enabled")
        mail.send_notify(lang, subtitlefile, videofile)

    if autosubliminal.NOTIFYNMA:
        log.debug("NMA is enabled")
        nma.send_notify(lang, subtitlefile, videofile)

    if autosubliminal.NOTIFYGROWL:
        log.debug("Growl is enabled")
        growl.send_notify(lang, subtitlefile, videofile)

    if autosubliminal.NOTIFYPROWL:
        log.debug("Prowl is enabled")
        prowl.send_notify(lang, subtitlefile, videofile)

    if autosubliminal.NOTIFYPUSHALOT:
        log.debug("Pushalot is enabled")
        pushalot.send_notify(lang, subtitlefile, videofile)