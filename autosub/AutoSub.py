import autosub.Scheduler
import autosub.scanDisk
import autosub.checkRss
import autosub.checkSub
import autosub.WebServer

import logging
import os
import cherrypy
import sys
import webbrowser

import HTMLParser #Don't remove this one, needed for the windows bins

# Settings
log = logging.getLogger('thelogger')


def daemon():
    print "AutoSub: Starting as a daemon"
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

    print "AutoSub: Disabling console output for daemon."

    cherrypy.log.screen = False
    sys.stdin.close()
    sys.stdout.flush()
    sys.stderr.flush()

def launchBrowser():
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
            log.error('launchBrowser: Failed')

def start():
    # Only use authentication in CherryPy is a username and password is set by the user
    if autosub.USERNAME and autosub.PASSWORD:
        users = {autosub.USERNAME: autosub.PASSWORD}
        cherrypy.config.update({'server.socket_host': autosub.WEBSERVERIP,
                            'server.socket_port': autosub.WEBSERVERPORT,
                            'tools.digest_auth.on': True,
                            'tools.digest_auth.realm': 'AutoSub website',
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
            '/css':{
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "css",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
            },
            '/images':{
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "images",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
            },
            '/scripts':{
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "scripts",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
            },
            '/mobile':{
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "mobile",
            'tools.expires.on': True,
            'tools.expires.secs': 3600 * 24 * 7
            },
            '/favicon.ico':{
            'tools.staticfile.on' : True,
            'tools.staticfile.filename' : os.path.join(autosub.PATH, 'interface/media/images/favicon.ico')
            }    
        }
    
    cherrypy.tree.mount(autosub.WebServer.WebServerInit(),autosub.WEBROOT, config = conf)
    log.info("AutoSub: Starting CherryPy webserver")

    # TODO: Let CherryPy log do another log file and not to screen
    # TODO: CherryPy settings, etc...
    try:
        cherrypy.server.start()
    except:
        log.error("AutoSub: Could not start webserver. Exiting")
        os._exit(1)

    cherrypy.server.wait()
    
    if autosub.LAUNCHBROWSER:
        launchBrowser()

    log.info("AutoSub: Starting scanDisk thread")
    autosub.SCANDISK = autosub.Scheduler.Scheduler(autosub.scanDisk.scanDisk(), autosub.SCHEDULERSCANDISK, True, "LOCALDISK")
    autosub.SCANDISK.thread.start()
    log.info("AutoSub: scanDisk thread started")

    log.info("AutoSub: Starting checkRss thread")
    autosub.CHECKRSS = autosub.Scheduler.Scheduler(autosub.checkRss.checkRss(), autosub.SCHEDULERCHECKRSS, True, "CHECKRSS")
    autosub.CHECKRSS.thread.start()
    log.info("AutoSub: checkRss thread started")

    log.info("AutoSub: Starting checkSub thread")
    autosub.CHECKSUB = autosub.Scheduler.Scheduler(autosub.checkSub.checkSub(), autosub.SCHEDULERCHECKSUB, True, "CHECKSUB")
    autosub.CHECKSUB.thread.start()
    log.info("AutoSub: checkSub thread started")

def stop():
    log.info("AutoSub: Stopping scanDisk thread")
    autosub.SCANDISK.stop = True
    autosub.SCANDISK.thread.join(10)

    log.info("AutoSub: Stopping checkRss thread")
    autosub.CHECKRSS.stop = True
    autosub.CHECKRSS.thread.join(10)

    log.info("AutoSub: Stopping checkSub thread")
    autosub.CHECKSUB.stop = True
    autosub.CHECKSUB.thread.join(10)

    cherrypy.engine.exit()

    os._exit(0)

def signal_handler(signum, frame):
    log.debug("AutoSub: got signal. Shutting down")
    os._exit(0)
