import logging
import lib.pynma as pynma
import autosubliminal

log = logging.getLogger(__name__)


def _send_notify(message):
    nma_instance = pynma.PyNMA(str(autosubliminal.NMAAPI))
    resp = nma_instance.push('Auto-Subliminal', 'Downloaded a Subtitle', message)
    try:
        if not resp[str(autosubliminal.NMAAPI)][u'code'] == u'200':
            log.error("Failed to send a notification")
            return False
        else:
            log.info("Notification sent")
            return True
    except:
        log.error("Something wrong with API-key, failed")


def test_notify():
    log.debug("Trying to send a notification")
    message = "Auto-Subliminal successfully sent a test message"
    return _send_notify(message)


def send_notify(lang, subtitlefile, videofile):
    log.debug("Trying to send a notification")
    message = "Auto-Subliminal just downloaded the following subtitle: \n %s" % subtitlefile
    return _send_notify(message)
    
