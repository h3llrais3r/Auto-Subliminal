import logging
import library.pynma as pynma
import autosub

log = logging.getLogger('thelogger')

def _send_notify(message):
    nma_instance = pynma.PyNMA(str(autosub.NMAAPI))
    resp = nma_instance.push('Auto-Sub', 'Downloaded a Subtitle', message)
    try:
        if not resp[str(autosub.NMAAPI)][u'code'] == u'200':
            log.error("NMA: Failed to send a notification")
            return False
        else:
            log.info("NMA: Notification sent")
            return True
    except:
        log.error("NMA: Something wrong with API-key, failed")

def test_notify():
    log.debug("NMA: Trying to send a notification")
    message = "Auto-Sub successfully sent a test message"
    return _send_notify(message)
        
def send_notify(lang, subtitlefile, videofile):
    log.debug("NMA: Trying to send a notification")
    message = "Auto-Sub just downloaded the following subtitle: \n %s" %subtitlefile
    return _send_notify(message)
    
