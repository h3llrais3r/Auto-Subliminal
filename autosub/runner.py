import logging
import os
import sys
import webbrowser

import cherrypy
import subliminal

import autosub
from autosub import scheduler, diskscanner, subchecker, webserver

log = logging.getLogger(__name__)


def daemon():
    print "Auto-Subliminal: Starting as a daemon"
    try:
        pid = os.fork()
        if pid > 0:
            sys.exit(0)
    except OSError:
        sys.exit(1)

    os.chdir(autosub.PATH)
    os.setsid()
    os.umask(0)
    try:
        pid = os.fork()
        if pid > 0:
            sys.exit(0)
    except OSError:
        sys.exit(1)

    print "Auto-Subliminal: Disabling console output for daemon."

    cherrypy.log.screen = False
    sys.stdin.close()
    sys.stdout.flush()
    sys.stderr.flush()


def launch_browser():
    host = autosub.WEBSERVERIP
    port = autosub.WEBSERVERPORT
    wr = autosub.WEBROOT
    if host == '0.0.0.0':
        host = 'localhost'

    url = 'http://%s:%d' % (host, int(port))
    url = url + wr
    try:
        webbrowser.open(url, 2, 1)
    except:
        try:
            webbrowser.open(url, 1, 1)
        except:
            log.error('Browser launh failed')


def start():
    # Only use authentication in CherryPy is a username and password is set by the user
    if autosub.USERNAME and autosub.PASSWORD:
        users = {autosub.USERNAME: autosub.PASSWORD}
        cherrypy.config.update({'server.socket_host': autosub.WEBSERVERIP,
                                'server.socket_port': autosub.WEBSERVERPORT,
                                'tools.digest_auth.on': True,
                                'tools.digest_auth.realm': 'Auto-Subliminal website',
                                'tools.digest_auth.users': users
        })
    else:
        cherrypy.config.update({'server.socket_host': autosub.WEBSERVERIP,
                                'server.socket_port': autosub.WEBSERVERPORT
        })

    conf = {
        '/': {
            'tools.encode.encoding': 'utf-8',
            'tools.decode.encoding': 'utf-8',
            'tools.staticdir.root': os.path.join(autosub.PATH, 'interface/media/'),
        },
        '/css': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "css",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/images': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "images",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/scripts': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "scripts",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/mobile': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "mobile",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/favicon.ico': {
            'tools.staticfile.on': True,
            'tools.staticfile.filename': os.path.join(autosub.PATH, 'interface/media/images/favicon.ico')
        }
    }

    cherrypy.tree.mount(autosub.webserver.WebServerInit(), autosub.WEBROOT, config=conf)
    log.info("Starting CherryPy webserver")

    # TODO: Let CherryPy log do another log file and not to screen
    # TODO: CherryPy settings, etc...
    try:
        cherrypy.server.start()
    except Exception, e:
        log.error("Could not start webserver. Exiting")
        log.exception(e)
        os._exit(1)

    cherrypy.server.wait()

    if autosub.LAUNCHBROWSER:
        launch_browser()

    # Configure subliminal/dogpile cache
    # Use MutexLock otherwise some providers will not work due to fcntl module import error in windows
    cache_file = os.path.abspath(os.path.expanduser(autosub.SUBLIMINALCACHEFILE))
    subliminal.cache_region.configure(autosub.DOGPILECACHEFILE,
                                      arguments={'filename': cache_file, 'lock_factory': subliminal.MutexLock})

    log.info("Starting SCANDISK thread")
    autosub.SCANDISK = autosub.scheduler.Scheduler(autosub.diskscanner.DiskScanner(), autosub.SCHEDULERSCANDISK, True,
                                                   "SCANDISK")
    autosub.SCANDISK.thread.start()
    log.info("SCANDISK thread started")

    log.info("Starting CHECKSUB thread")
    autosub.CHECKSUB = autosub.scheduler.Scheduler(autosub.subchecker.SubChecker(), autosub.SCHEDULERCHECKSUB, True,
                                                   "CHECKSUB")
    autosub.CHECKSUB.thread.start()
    log.info("CHECKSUB thread started")


def stop():
    log.info("Stopping SCANDISK thread")
    autosub.SCANDISK.stop = True
    autosub.SCANDISK.thread.join(10)

    log.info("Stopping CHECKSUB thread")
    autosub.CHECKSUB.stop = True
    autosub.CHECKSUB.thread.join(10)

    cherrypy.engine.exit()

    os._exit(0)


def signal_handler(signum, frame):
    log.debug("Got signal. Shutting down")
    os._exit(0)
