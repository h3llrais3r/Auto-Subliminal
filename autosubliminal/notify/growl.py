import logging
import socket

from lib.growl import gntp

import autosubliminal

log = logging.getLogger(__name__)


def test_notify():
    log.debug("Trying to send a notification")
    password = autosubliminal.GROWLPASS
    # Register
    register = gntp.GNTPRegister()
    register.add_header('Application-Name', "Auto-Subliminal")
    register.add_notification('Test', True)
    register.add_notification('Subtitle download', True)
    if password != "":
        register.set_password(password)
    if not _send_notify(register.encode()):
        return False
    # Notify
    notice = gntp.GNTPNotice()
    notice.add_header('Application-Name', "Auto-Subliminal")
    notice.add_header('Notification-Name', "Test")
    notice.add_header('Notification-Title', "Auto-Subliminal: Test")
    notice.add_header('Notification-Text', "Test notification by Auto-Subliminal")
    if password != "":
        notice.set_password(password)
    return _send_notify(notice.encode())


def send_notify(video, subtitle, language, provider):
    log.debug("Trying to send a notification")
    password = autosubliminal.GROWLPASS
    message = "Subtitle: %s \n Language: %s \n Provider: %s " % (subtitle, language, provider)
    # Notify
    notice = gntp.GNTPNotice()
    notice.add_header('Application-Name', "Auto-Subliminal")
    notice.add_header('Notification-Name', "Subtitle download")
    notice.add_header('Notification-Title', "Auto-Subliminal: Subtitle download")
    notice.add_header('Notification-Text', message)
    if password != "":
        notice.set_password(password)
    return _send_notify(notice.encode())


def _send_notify(message):
    host = autosubliminal.GROWLHOST
    port = int(autosubliminal.GROWLPORT)
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((host, port))
        s.send(message)
        gntp.parse_gntp(s.recv(1024))
        s.close()
        log.info("Message sent")
        return True
    except socket.error:
        log.error("Failed to connect to growl")
        return False