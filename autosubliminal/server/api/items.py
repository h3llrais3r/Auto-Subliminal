# coding=utf-8

import cherrypy

import autosubliminal
from autosubliminal.server.rest import RestResource


class ItemsApi(RestResource):
    """
    Rest resource for handling the /api/items path.
    """

    def __init__(self):
        super(ItemsApi, self).__init__()

        # Add all sub paths here: /api/items/...
        self.wanted = _WantedApi()


@cherrypy.popargs('wanted_item_index')
class _WantedApi(RestResource):
    """
    Rest resource for handling the /api/items/wanted path.
    """

    def __init__(self):
        super(_WantedApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'DELETE')

    def get(self, wanted_item_index=None):
        """Get the list of wanted items or a single wanted item."""
        if wanted_item_index is None:
            return autosubliminal.WANTEDQUEUE
        elif 0 <= int(wanted_item_index) < len(autosubliminal.WANTEDQUEUE):
            return autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
        else:
            return self._bad_request('Invalid wanted_item_index')

    def delete(self, wanted_item_index):
        """Delete a wanted item for the wanted queue."""
        if wanted_item_index is None or not (0 <= int(wanted_item_index) < len(autosubliminal.WANTEDQUEUE)):
            return self._bad_request('Invalid wanted_item_index')

        # Remove wanted item
        wanted_item = autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))

        return wanted_item
