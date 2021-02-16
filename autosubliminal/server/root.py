# coding=utf-8

from autosubliminal.server.api import Api
from autosubliminal.server.static.artwork import Artwork


class WebServerRoot(object):
    def __init__(self):
        # Create root tree (name of attribute defines name of path: f.e. api -> /api)
        self.api = Api()
        self.artwork = Artwork()
