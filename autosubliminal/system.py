# coding=utf-8

import threading

import autosubliminal.application
from autosubliminal.util.websocket import send_websocket_event, SYSTEM_RESTARTED


def restart(exit=False):
    """
    Thread to restart the application.
    """
    threading.Thread(name='AppRestarter', target=autosubliminal.application.restart, kwargs={'exit': exit}).start()
    send_websocket_event(SYSTEM_RESTARTED)


def shutdown():
    """
    Thread to shutdown the application.
    """
    timer = threading.Timer(2, autosubliminal.application.stop)
    timer.name = 'AppKiller'
    timer.start()
