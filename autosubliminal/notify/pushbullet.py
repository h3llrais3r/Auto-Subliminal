import logging

from lib.pushbullet import Pushbullet

import autosubliminal

log = logging.getLogger(__name__)


def test_notify():
    log.debug("Trying to send a notification")
    message = "Test notification by Auto-Subliminal"
    return _send_notify(message)


def send_notify(video, subtitle, language, provider):
    log.debug("Trying to send a notification")
    message = "Subtitle: %s \n Language: %s \n Provider: %s " % (subtitle, language, provider)
    return _send_notify(message)


def _send_notify(message):
    try:
        pb = Pushbullet(autosubliminal.PUSHBULLETAPI)
        pb.push_note(title="Auto-Subliminal", body=message.encode('utf-8'))
        return True
    except:
        log.error("Failed to send a notification")
        return False
