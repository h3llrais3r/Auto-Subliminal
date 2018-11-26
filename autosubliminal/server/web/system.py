# coding=utf-8

import json

import cherrypy

import autosubliminal
from autosubliminal import system
from autosubliminal.db import ImdbIdCache, LastDownloads, TvdbIdCache, WantedItems
from autosubliminal.server.web import redirect
from autosubliminal.templates.page import PageTemplate
from autosubliminal.util.queue import get_wanted_queue_lock, release_wanted_queue_lock, \
    release_wanted_queue_lock_on_exception
from autosubliminal.util.websocket import send_websocket_notification


class System(object):
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        return redirect('/system/info')

    @cherrypy.expose
    def restart(self):
        system.restart()
        message = 'Auto-Subliminal is restarting...'
        return PageTemplate(filename='/system/system-restart.mako').render(message=message)

    @cherrypy.expose
    def shutdown(self):
        system.shutdown()
        message = 'Auto-Subliminal is shutting down...'
        return PageTemplate(filename='/general/message.mako').render(message=message)

    @cherrypy.expose(alias='info')
    def info(self):
        return PageTemplate(filename='/system/system-info.mako').render()

    @cherrypy.expose
    def status(self):
        return PageTemplate(filename='/system/system-status.mako').render()

    @cherrypy.expose(alias='updateVersion')
    def update_version(self):
        autosubliminal.CHECKVERSION.process.update(force_update=True)
        system.restart(exit=True)
        message = 'Auto-Subliminal is restarting...'
        return PageTemplate(filename='/system/system-restart.mako').render(message=message)

    @cherrypy.expose(alias='flushCache')
    def flush_cache(self):
        TvdbIdCache().flush_cache()
        ImdbIdCache().flush_cache()
        send_websocket_notification('Flushed id cache database.')
        redirect('/home')

    @release_wanted_queue_lock_on_exception
    @cherrypy.expose(alias='flushWantedItems')
    def flush_wanted_items(self):
        if get_wanted_queue_lock():
            # Flush db and wanted queue
            WantedItems().flush_wanted_items()
            autosubliminal.WANTEDQUEUE = []
            release_wanted_queue_lock()
            send_websocket_notification(
                'Flushed wanted items database. Please launch \'Scan Disk\' from the \'System\' menu.')
        else:
            send_websocket_notification('Cannot flush wanted items database when wanted queue is in use!', 'notice')
        redirect('/home')

    @cherrypy.expose(alias='flushLastDownloads')
    def flush_last_downloads(self):
        LastDownloads().flush_last_downloads()
        send_websocket_notification('Flushed last downloads database.')
        redirect('/home')

    @cherrypy.expose(alias='isAlive')
    def is_alive(self, *args, **kwargs):
        if 'callback' in kwargs:
            callback = kwargs['callback']
        else:
            return 'Error: Unsupported Request. Send jsonp request with "callback" variable in the query string.'
        cherrypy.response.headers['Cache-Control'] = 'max-age=0,no-cache,no-store'
        cherrypy.response.headers['Content-Type'] = 'text/javascript'
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
        cherrypy.response.headers['Access-Control-Allow-Headers'] = 'x-requested-with'

        if autosubliminal.STARTED:
            return callback + '(' + json.dumps({'msg': 'True'}) + ');'
        else:
            return callback + '(' + json.dumps({'msg': 'False'}) + ');'

    @cherrypy.expose
    def websocket(self):
        # Websocket path (no logic needed for now)
        # You can access the websocket handler class instance through:
        # handler = cherrypy.request.ws_handler
        pass
