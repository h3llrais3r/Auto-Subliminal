# coding=utf-8

import getopt
import locale
import logging
import os
import signal
import sys
import time
from typing import Any, List

help_message = """
Usage:
    -h (--help)     Prints this message
    -c (--config=)  Forces Auto-Subliminal to use a configfile other than ./config.properties
    -d (--daemon)   Run Auto-Subliminal in the background
    -l (--nolaunch) Stop Auto-Subliminal from launching a webbrowser

Example:
    python AutoSubliminal.py
    python AutoSubliminal.py -d
    python AutoSubliminal.py -d -l
    python AutoSubliminal.py -c/home/user/config.properties
    python AutoSubliminal.py --config=/home/user/config.properties
    python AutoSubliminal.py --config=/home/user/config.properties --daemon

"""


class Usage(Exception):
    def __init__(self, msg: Any) -> None:
        self.msg = msg


def main(argv: List[str] = None) -> int:
    import autosubliminal

    # Set startup parameters
    autosubliminal.EXECUTABLE = os.path.normpath(os.path.realpath(__file__))
    autosubliminal.ARGS = sys.argv[1:]

    # From Sickbeard / Headphones
    try:
        locale.setlocale(locale.LC_ALL, '')
        autosubliminal.SYSENCODING = locale.getpreferredencoding()
    except (locale.Error, IOError):
        pass

    # For OSes that are poorly configured, like synology & slackware
    if not autosubliminal.SYSENCODING or autosubliminal.SYSENCODING in ('ANSI_X3.4-1968', 'US-ASCII', 'ASCII'):
        autosubliminal.SYSENCODING = 'UTF-8'

    if argv is None:
        argv = sys.argv
    try:
        try:
            opts, args = getopt.getopt(argv[1:], 'hc:dl', ['help', 'config=', 'daemon', 'nolaunch'])
        except getopt.error as msg:
            raise Usage(msg)

        # Option processing
        for option, value in opts:
            if option in ('-h', '--help'):
                raise Usage(help_message)
            if option in ('-c', '--config'):
                if os.path.exists(value):
                    autosubliminal.CONFIGFILE = value
                else:
                    print('ERROR: Config file does not exist.')
                    os._exit(0)
            if option in ('-l', '--nolaunch'):
                autosubliminal.LAUNCHBROWSER = False
            if option in ('-d', '--daemon'):
                if sys.platform == 'win32':
                    print('ERROR: No support for daemon mode in Windows.')
                else:
                    autosubliminal.DAEMON = True

    except Usage as err:
        sys.stderr.write(sys.argv[0].split('/')[-1] + ': ' + str(err.msg) + '\n')
        sys.stderr.write('For help use --help\n')
        return 2

    # Initialize configuration
    print('INFO: Initializing variables and loading config.')
    autosubliminal.initialize()

    # Setup application
    import autosubliminal.application

    # Setup signal handler
    signal.signal(signal.SIGINT, autosubliminal.application.signal_handler)

    # Setup daemon
    if autosubliminal.DAEMON:
        autosubliminal.application.daemon()

    # Set the PID
    autosubliminal.PID = os.getpid()

    print('INFO: Starting output to log.')
    print('INFO: Bye.')
    log = logging.getLogger(__name__)
    log.info('#' * 40)
    log.info('Running application with PID: %s', autosubliminal.PID)
    log.info('System encoding: %s', autosubliminal.SYSENCODING)
    log.info('Config version: %d', autosubliminal.CONFIGVERSION)
    log.info('Db version: %d', autosubliminal.DBVERSION)
    log.info('#' * 40)

    # Start server and application
    autosubliminal.application.start_server()
    autosubliminal.application.start()

    # Launch browser after threads because cherrypy webserver must be started first
    if autosubliminal.LAUNCHBROWSER:
        autosubliminal.application.launch_browser()

    log.info('Application started, going into a loop to keep the main thread going')
    while True:
        time.sleep(1)


if __name__ == '__main__':
    sys.exit(main())
