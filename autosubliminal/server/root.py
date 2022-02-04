# coding=utf-8

import cherrypy

import autosubliminal
from autosubliminal.server.api import Api
from autosubliminal.server.web.artwork import Artwork
from autosubliminal.server.web.websocket import WebSocket


class Root(object):
    @cherrypy.expose
    def index(self):
        # Redirect by default to webroot path when root path is visited
        # HttpRedirect needs webroot, InternalRedirect doesn't but then you don't see the redirect in the browser
        raise cherrypy.HTTPRedirect(autosubliminal.WEBROOT + '/')


class AppRoot(object):
    def __init__(self):
        # Create root tree (name of attribute defines name of path: f.e. api -> /api)
        self.api = Api()
        self.artwork = Artwork()
        self.websocket = WebSocket()
