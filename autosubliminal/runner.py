import logging
import os
import sys
import webbrowser
import cherrypy

import autosubliminal
from autosubliminal.diskscanner import DiskScanner
from autosubliminal.scheduler import Scheduler
from autosubliminal.subchecker import SubChecker
from autosubliminal.webserver import WebServerInit

log = logging.getLogger(__name__)


def daemon():
    print "INFO: Starting as a daemon"
    try:
        pid = os.fork()
        if pid > 0:
            sys.exit(0)
    except OSError:
        sys.exit(1)

    os.chdir(autosubliminal.PATH)
    os.setsid()
    os.umask(0)
    try:
        pid = os.fork()
        if pid > 0:
            sys.exit(0)
    except OSError:
        sys.exit(1)

    print "INFO: Disabling console output for daemon"

    cherrypy.log.screen = False
    sys.stdin.close()
    sys.stdout.flush()
    sys.stderr.flush()


def launch_browser():
    host = autosubliminal.WEBSERVERIP
    port = autosubliminal.WEBSERVERPORT
    wr = autosubliminal.WEBROOT
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
    # Only use authentication in CherryPy if a username and password is set by the user
    if autosubliminal.USERNAME and autosubliminal.PASSWORD:
        users = {autosubliminal.USERNAME: autosubliminal.PASSWORD}
        cherrypy.config.update({'server.socket_host': autosubliminal.WEBSERVERIP,
                                'server.socket_port': autosubliminal.WEBSERVERPORT,
                                'tools.digest_auth.on': True,
                                'tools.digest_auth.realm': 'Auto-Subliminal website',
                                'tools.digest_auth.users': users
                                })
    else:
        cherrypy.config.update({'server.socket_host': autosubliminal.WEBSERVERIP,
                                'server.socket_port': autosubliminal.WEBSERVERPORT
                                })

    conf = {
        '/': {
            'tools.encode.encoding': 'utf-8',
            'tools.decode.encoding': 'utf-8',
            'tools.staticdir.root': os.path.join(autosubliminal.PATH, 'interface/media/'),
        },
        '/css': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "css",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/fonts': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "fonts",
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
        '/favicon.ico': {
            'tools.staticfile.on': True,
            'tools.staticfile.filename': os.path.join(autosubliminal.PATH, 'interface/media/images/favicon.ico')
        }
    }

    # Start cherrypy server
    log.info("Starting CherryPy webserver")
    cherrypy.tree.mount(WebServerInit(), autosubliminal.WEBROOT, config=conf)
    try:
        cherrypy.server.start()
    except Exception, e:
        log.error("Could not start webserver, exiting")
        log.exception(e)
        os._exit(1)
    cherrypy.server.wait()

    # Schedule threads
    autosubliminal.SCANDISK = Scheduler("SCANDISK", DiskScanner(), autosubliminal.SCHEDULERSCANDISK, True)
    autosubliminal.CHECKSUB = Scheduler("CHECKSUB", SubChecker(), autosubliminal.SCHEDULERCHECKSUB)

    # Mark as started
    autosubliminal.STARTED = True


def stop(exit_app=True):
    # Mark as stopped
    autosubliminal.STARTED = False

    # Stop threads
    autosubliminal.SCANDISK.stop()
    autosubliminal.CHECKSUB.stop()

    # Stop cherrypy server
    log.info("Stopping CherryPy webserver")
    cherrypy.engine.exit()

    if exit_app:
        os._exit(0)


def restart():
    log.info("Restarting")
    stop(exit_app=False)
    autosubliminal.initialize()
    start()
    log.info("Restarted")


def signal_handler(signum, frame):
    log.debug("Got signal, shutting down")
    os._exit(0)
