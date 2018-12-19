# coding=utf-8

import logging
import os
import signal
import subprocess
import sys
import webbrowser

import cherrypy
from cherrypy.lib import auth_digest
from six.moves import getcwd
from ws4py.manager import WebSocketManager
from ws4py.server.cherrypyserver import WebSocketPlugin, WebSocketTool

import autosubliminal
from autosubliminal.core.scheduler import Scheduler
from autosubliminal.core.websocket import WebSocketBroadCaster, WebSocketHandler
from autosubliminal.diskscanner import DiskScanner
from autosubliminal.libraryscanner import LibraryScanner
from autosubliminal.subchecker import SubChecker
from autosubliminal.versionchecker import VersionChecker
from autosubliminal.server.root import WebServerRoot
from autosubliminal.util.encoding import s2n
from autosubliminal.util.json import json_out_handler
from autosubliminal.util.packaging import get_library_version

log = logging.getLogger(__name__)


def daemon():
    print('INFO: Starting as a daemon.')
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

    print('INFO: Disabling console output for daemon.')

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
        webbrowser.open_new_tab(url)
    except Exception:
        try:
            webbrowser.open_new(url)
        except Exception:
            log.exception('Browser launch failed')


def start_server(restarting=False):
    # stop server when restarting
    if restarting:
        # Stop server
        log.info('Stopping CherryPy webserver')
        cherrypy.engine.stop()

    # Configure server
    _configure_server(restarting)

    # (Re-)Mount application
    if restarting:
        # Remove previous mount (in case webroot should change)
        del cherrypy.tree.apps[list(cherrypy.tree.apps)[0]]
    cherrypy.tree.mount(WebServerRoot(), s2n(autosubliminal.WEBROOT), config=_get_application_configuration())

    # Start cherrypy server
    log.info('Starting CherryPy webserver')
    try:
        cherrypy.engine.start()
    except Exception:
        log.exception('Could not start webserver, exiting')
        _shutdown()
        _exit(1)


def _configure_server(restarting=False):
    global websocket_plugin

    # Configure server error log
    cherrypy.config.update({'log.error_file': 'cherrypy.error.log'})

    # Configure server url
    cherrypy.config.update({'server.socket_host': s2n(autosubliminal.WEBSERVERIP),
                            'server.socket_port': int(autosubliminal.WEBSERVERPORT)
                            })

    # Disable engine plugins (no need for autoreload plugin)
    cherrypy.config.update({'engine.autoreload.on': False})

    # Read and store cherrypy server version (if not set, it returns CherryPy/Unknown because it's not installed)
    server_header = 'CherryPy/%s' % get_library_version('cherrypy')
    cherrypy.config.update({'response.headers.server': server_header})

    # Configure authentication in if a username and password is set by the user
    if autosubliminal.USERNAME and autosubliminal.PASSWORD:
        users = {s2n(autosubliminal.USERNAME): s2n(autosubliminal.PASSWORD)}
        cherrypy.config.update({'tools.auth_digest.on': True,
                                'tools.auth_digest.realm': 'Auto-Subliminal website',
                                'tools.auth_digest.get_ha1': auth_digest.get_ha1_dict_plain(users),
                                'tools.auth_digest.key': 'yek.tsegid_htua.lanimilbuS-otuA'  # Can be any random string
                                })

    # Configure our custom json_out_handler (Uncomment if it should be used for any @cherrypy.tools.json_out())
    # cherrypy.config.update({'tools.json_out.handler': json_out_handler})

    if not restarting:
        # Enable websocket plugin
        websocket_plugin = WebSocketPlugin(cherrypy.engine)
        websocket_plugin.subscribe()
        cherrypy.tools.websocket = WebSocketTool()
    else:
        # When restarting we need to create a new websocket manager thread (you cannot start the same thread twice!)
        websocket_plugin.manager = WebSocketManager()
        # When restarting we need to clear the httpserver to force the creation of a new one (needed for ip/port change)
        cherrypy.server.httpserver = None


def _get_application_configuration():
    # Configure application
    conf = {
        '/': {
            'tools.encode.encoding': 'utf-8',
            'tools.decode.encoding': 'utf-8',
            'tools.staticdir.root': os.path.abspath(os.path.join(autosubliminal.PATH, 'web/static')),
        },
        '/api': {
            'tools.json_out.handler': json_out_handler,  # Use our custom json_out_handler for /api
            'tools.response_headers.on': True,  # Always force content-type
            'tools.response_headers.headers': [('Content-Type', 'application/json; charset=utf-8')]
        },
        '/css': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': 'css',
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/fonts': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': 'fonts',
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/images': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': 'images',
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/js': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': 'js',
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
        },
        '/favicon.ico': {
            'tools.staticfile.on': True,
            'tools.staticfile.filename': os.path.abspath(
                os.path.join(autosubliminal.PATH, 'web/static/images/favicon.ico'))
        },
        '/system/websocket': {
            'tools.websocket.on': True,
            'tools.websocket.handler_cls': WebSocketHandler
        }
    }

    # Return config
    return conf


def start():
    log.info('Starting')

    # Start permanent threads
    autosubliminal.WEBSOCKETBROADCASTER = WebSocketBroadCaster(name='WebSocketBroadCaster')

    # Schedule threads
    autosubliminal.SCANDISK = Scheduler('DiskScanner', DiskScanner(), autosubliminal.SCANDISKINTERVAL, initial_run=True)
    autosubliminal.CHECKSUB = Scheduler('SubChecker', SubChecker(), autosubliminal.CHECKSUBINTERVAL)
    autosubliminal.CHECKVERSION = Scheduler('VersionChecker', VersionChecker(), autosubliminal.CHECKVERSIONINTERVAL)
    autosubliminal.SCANLIBRARY = Scheduler('LibraryScanner', LibraryScanner(), autosubliminal.SCANLIBRARYINTERVAL,
                                           active=autosubliminal.LIBRARYMODE)

    # Mark as started
    autosubliminal.STARTED = True


def stop(exit=True):
    log.info('Stopping')

    # Mark as stopped
    autosubliminal.STARTED = False

    # Stop scheduled threads
    log.info('Stopping threads')
    autosubliminal.SCANDISK.stop()
    autosubliminal.CHECKSUB.stop()
    autosubliminal.CHECKVERSION.stop()

    # Stop permanent threads
    autosubliminal.WEBSOCKETBROADCASTER.stop()

    if exit:
        _shutdown()
        _exit()


def restart(exit=False):
    log.info('Restarting')
    if exit:
        # Exit current process and restart a new one with the same args
        # Get executable and args
        popen_list = [sys.executable, autosubliminal.EXECUTABLE]
        popen_list += autosubliminal.ARGS
        # Stop without exit
        stop(exit=False)
        log.info('Restarting application with command and arguments: %s', popen_list)
        log.info('Exiting application with PID: %s', autosubliminal.PID)
        # Shutdown
        _shutdown()
        # Start new process
        subprocess.Popen(popen_list, cwd=getcwd())
        # Exit current process
        _exit()
    else:
        # Stop without killing current process and restart
        stop(exit=False)
        autosubliminal.initialize()
        start_server(True)
        start()
        log.info('Restarted')


def signal_handler(signum, frame):
    log.debug('Received signal: %s', signum)
    if signum == signal.SIGINT:
        log.info('Received interrupt signal, exiting')
        _shutdown()
        _exit()


def _shutdown():
    log.info('Exiting CherryPy webserver')
    cherrypy.engine.exit()
    log.info('Exiting PID: %s', autosubliminal.PID)
    # Shutdown the logger to make sure the logfile is released before starting a new process
    logging.shutdown()


def _exit(code=0):
    # Exit process
    os._exit(code)
