import logging
import sys
import getopt
import os
import signal
import time
import locale

import autosub
import autosub.db
import autosub.runner

#signal.signal(signal.SIGTERM, autosub.AutoSub.signal_handler)

help_message = '''
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
    
'''


class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg


def main(argv=None):
    # From Sickbeard / Headphones
    try:
        locale.setlocale(locale.LC_ALL, "")
        autosub.SYSENCODING = locale.getpreferredencoding()
    except (locale.Error, IOError):
        pass

    # For OSes that are poorly configured, like synology & slackware
    if not autosub.SYSENCODING or autosub.SYSENCODING in ('ANSI_X3.4-1968', 'US-ASCII', 'ASCII'):
        autosub.SYSENCODING = 'UTF-8'

    if argv is None:
        argv = sys.argv
    try:
        try:
            opts, args = getopt.getopt(argv[1:], "hc:dl", ["help", "config=", "daemon", "nolaunch"])
        except getopt.error, msg:
            raise Usage(msg)

        # Option processing
        for option, value in opts:
            if option in ("-h", "--help"):
                raise Usage(help_message)
            if option in ("-c", "--config"):
                if os.path.exists(value):
                    autosub.CONFIGFILE = value
                else:
                    print "ERROR: Configfile does not exists."
                    os._exit(0)
            if option in ("-l", "--nolaunch"):
                autosub.LAUNCHBROWSER = False
            if option in ("-d", "--daemon"):
                if sys.platform == "win32":
                    print "ERROR: No support for daemon mode in Windows"
                    # TODO: Service support for Windows
                else:
                    autosub.DAEMON = True

    except Usage, err:
        print >> sys.stderr, sys.argv[0].split("/")[-1] + ": " + str(err.msg)
        print >> sys.stderr, "\t for help use --help"
        return 2

    # Load configuration
    if os.path.isfile('config.properties.dev'):
        autosub.CONFIGFILE = 'config.properties.dev'
    print "Initializing variables and loading config"
    autosub.initialize()

    signal.signal(signal.SIGINT, autosub.runner.signal_handler)

    if autosub.DAEMON:
        autosub.runner.daemon()

    # Make sure that sqlite database is loaded after you demonize
    autosub.db.init_db()

    # Change to the new work directory
    if os.path.exists(autosub.PATH):
        os.chdir(autosub.PATH)
    else:
        print "ERROR: PATH does not exist, check config."
        os._exit(1)

    print "Starting output to log. Bye!"
    log = logging.getLogger(__name__)
    log.debug("Systemencoding is: %s" % autosub.SYSENCODING)
    log.debug("Configversion is: %d" % autosub.CONFIGVERSION)
    log.debug("Dbversion is: %d" % autosub.DBVERSION)

    log.info("Starting threads")
    autosub.runner.start()

    log.info("Threads started, going into a loop to keep the main thread going")

    while True:
        time.sleep(1)


if __name__ == "__main__":
    sys.exit(main())
