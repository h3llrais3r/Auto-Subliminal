# coding=utf-8

import cherrypy

import autosubliminal
from autosubliminal.server.rest import RestResource


@cherrypy.popargs('wanted_item_index')
class Wanted(RestResource):
    """
    Rest resource for handling the wanted items.
    """

    def __init__(self):
        self.allowed_methods = ('GET', 'DELETE')

    def get(self):
        """Get the list of wanted items."""
        if len(autosubliminal.WANTEDQUEUE) > 0:
            return autosubliminal.WANTEDQUEUE
        else:
            return {}

    def delete(self, wanted_item_index):
        """Delete a wanted item."""
        if not wanted_item_index or int(wanted_item_index) >= len(autosubliminal.WANTEDQUEUE):
            return self._bad_request('Invalid wanted_item_index')

        # Remove wanted item
        autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))
