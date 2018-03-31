# coding=utf-8

from autosubliminal.server.rest import RestResource
from autosubliminal.server.api.items import ItemsApi


class Api(RestResource):
    """
    The Auto-Subliminal REST api.
    Rest resource for handling the /api path.
    """

    def __init__(self):
        super(Api, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

        # Add all sub paths here: /api/...
        self.items = ItemsApi()

    def get(self, *args, **kwargs):
        return {'api': 'Welcome to the Auto-Subliminal REST api'}
