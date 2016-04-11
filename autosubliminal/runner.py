import cherrypy
import logging
import os
import signal
import subprocess
import sys

import webbrowser

import autosubliminal
from autosubliminal.diskscanner import DiskScanner
from autosubliminal.scheduler import Scheduler
from autosubliminal.subchecker import SubChecker
from autosubliminal.versionchecker import VersionChecker
from autosubliminal.webserver import WebServerRoot

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
    cherrypy.tree.mount(WebServerRoot(), autosubliminal.WEBROOT, config=conf)
    try:
        cherrypy.server.start()
    except Exception, e:
        log.error("Could not start webserver, exiting")
        log.exception(e)
        _exit(1)
    cherrypy.server.wait()

    # Schedule threads
    autosubliminal.SCANDISK = Scheduler("DiskScanner", DiskScanner(), autosubliminal.SCANDISKINTERVAL, True)
    autosubliminal.CHECKSUB = Scheduler("SubChecker", SubChecker(), autosubliminal.CHECKSUBINTERVAL)
    autosubliminal.CHECKVERSION = Scheduler("VersionChecker", VersionChecker(), autosubliminal.CHECKVERSIONINTERVAL)

    # Mark as started
    autosubliminal.STARTED = True


def stop(exit=True):
    log.info("Stopping")

    # Mark as stopped
    autosubliminal.STARTED = False

    # Stop threads
    log.info("Stopping scheduler threads")
    autosubliminal.SCANDISK.stop()
    autosubliminal.CHECKSUB.stop()
    autosubliminal.CHECKVERSION.stop()

    # Stop cherrypy server
    log.info("Stopping CherryPy webserver")
    cherrypy.engine.exit()

    if exit:
        _exit()


def restart(exit=False):
    log.info("Restarting")
    if exit:
        # Exit current process and restart a new one with the same args
        # Get executable and args
        popen_list = [sys.executable, autosubliminal.EXECUTABLE]
        popen_list += autosubliminal.ARGS
        # Stop without exit
        stop(exit=False)
        log.info("Exiting application with PID: %s" % autosubliminal.PID)
        log.info("Restarting application with command and arguments: %s" % popen_list)
        log.info("#" * 50)
        # Shutdown the logger to make sure the logfile is released before starting a new process
        logging.shutdown()
        # Start new process
        subprocess.Popen(popen_list, cwd=os.getcwd())
        # Exit current process
        _exit(shutdown_logger=False)
    else:
        # Stop without killing current process and restart
        stop(exit=False)
        autosubliminal.initialize()
        start()
        log.info("Restarted")


def signal_handler(signum, frame):
    log.debug("Received signal: %s" % signum)
    if signum == signal.SIGINT:
        log.info("Received interrupt signal, exiting")
        _exit()


def _exit(shutdown_logger=True, code=0):
    if shutdown_logger:
        log.info("Exiting PID: %s" % autosubliminal.PID)
        # Shutdown the logger to make sure the logfile is released before exiting
        logging.shutdown()
    # Exit process
    os._exit(code)
