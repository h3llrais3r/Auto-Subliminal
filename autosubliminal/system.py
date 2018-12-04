# coding=utf-8

import threading

import autosubliminal.application


def restart(exit=False):
    """
    Thread to restart the application.
    """
    threading.Thread(name='AppRestarter', target=autosubliminal.application.restart, kwargs={'exit': exit}).start()


def shutdown():
    """
    Thread to shutdown the application.
    """
    timer = threading.Timer(2, autosubliminal.application.stop)
    timer.name = 'AppKiller'
    timer.start()
