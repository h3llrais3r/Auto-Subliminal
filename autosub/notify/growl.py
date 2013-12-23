import logging
import socket

import autosub
from library.growl import gntp


log = logging.getLogger(__name__)


def _send_notify(message):
    host = autosub.GROWLHOST
    port = int(autosub.GROWLPORT)

    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((host, port))
        s.send(message)
        gntp.parse_gntp(s.recv(1024))
        s.close()

        log.info("Message sent")

        return True
    except socket.error:
        log.error(
            "Failed to sent message, could not bind to socket. Sure growl is running and I can connect to it?")
        return False


def test_notify():
    password = autosub.GROWLPASS

    register = gntp.GNTPRegister()
    register.add_header('Application-Name', "Auto-Subliminal")
    register.add_notification('Test', True)
    register.add_notification('Subtitle Download', True)
    if password != "":
        register.set_password(password)
    if not _send_notify(register.encode()):
        return False

    notice = gntp.GNTPNotice()
    notice.add_header('Application-Name', "Auto-Subliminal")
    notice.add_header('Notification-Name', "Test")
    notice.add_header('Notification-Title', "Testing notification")
    notice.add_header('Notification-Text', "This is a test notification send by Auto-Subliminal, check!")
    if password != "":
        notice.set_password(password)
    return _send_notify(notice.encode())


def send_notify(lang, subtitlefile, videofile):
    password = autosub.GROWLPASS
    message = "Just downloaded %s " % subtitlefile

    notice = gntp.GNTPNotice()
    notice.add_header('Application-Name', "Auto-Subliminal")
    notice.add_header('Notification-Name', "Subtitle Download")
    notice.add_header('Notification-Title', "Auto-Subliminal: Subtitle Download")
    notice.add_header('Notification-Text', message)
    if password != "":
        notice.set_password(password)
    return _send_notify(notice.encode())
    