# coding=utf-8

import cherrypy

import autosubliminal
from autosubliminal.server.rest import RestResource


@cherrypy.popargs('wanted_item_index')
class WantedApi(RestResource):
    """
    Rest resource for handling the wanted api.
    """

    def __init__(self):
        self.allowed_methods = ('GET', 'DELETE')

    def get(self):
        """Get the list of wanted items."""
        return autosubliminal.WANTEDQUEUE

    def delete(self, wanted_item_index):
        """Delete a wanted item for the wanted queue."""
        if wanted_item_index is None or int(wanted_item_index) >= len(autosubliminal.WANTEDQUEUE):
            return self._bad_request('Invalid wanted_item_index')

        # Remove wanted item
        wanted_item = autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))

        return wanted_item
