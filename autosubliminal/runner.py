import logging
import threading

import autosubliminal.application

log = logging.getLogger(__name__)


def restart_app(exit=False):
    """
    Runner function to restart the application.
    """
    threading.Thread(target=autosubliminal.application.restart, kwargs={'exit': exit}, name="AppRestarter").start()


def shutdown_app():
    """
    Runner function to shutdown the application.
    """
    timer = threading.Timer(2, autosubliminal.application.stop)
    timer.name = "AppKiller"
    timer.start()
