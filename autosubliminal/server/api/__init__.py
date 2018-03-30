# coding=utf-8

from autosubliminal.server.rest import RestResource
from autosubliminal.server.api.wanted import WantedApi


class Api(RestResource):
    """
    The Auto-Subliminal REST api.
    Rest resource for handling the /api path.
    """

    def __init__(self):
        self.allowed_methods = ('GET',)

        # Add all sub paths here: /api/...
        self.wanted = WantedApi()

    def get(self, *args, **kwargs):
        return {'api': 'Welcome to the Auto-Subliminal REST api'}
