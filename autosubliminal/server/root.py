# coding=utf-8

from autosubliminal.server.api import Api
from autosubliminal.server.web.artwork import Artwork
from autosubliminal.server.web.websocket import WebSocket


class WebServerRoot(object):
    def __init__(self):
        # Create root tree (name of attribute defines name of path: f.e. api -> /api)
        self.api = Api()
        self.artwork = Artwork()
        self.websocket = WebSocket()
