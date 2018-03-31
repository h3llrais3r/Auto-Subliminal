# coding=utf-8

import cherrypy

import autosubliminal
from autosubliminal.db import LastDownloads
from autosubliminal.server.rest import RestResource


class ItemsApi(RestResource):
    """
    Rest resource for handling the /api/items path.
    """

    def __init__(self):
        super(ItemsApi, self).__init__()

        # Add all sub paths here: /api/items/...
        self.wanted = _WantedApi()
        self.downloaded = _DownloadedApi()


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


@cherrypy.popargs('number_of_items')
class _DownloadedApi(RestResource):
    """
    Rest resource for handling the /api/items/downloaded path.
    """

    def __init__(self):
        super(_DownloadedApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self, number_of_items=None):
        """Get the list of downloaded items or the specified last number of downloaded items."""
        last_downloads = LastDownloads().get_last_downloads()
        if number_of_items is None:
            return last_downloads
        elif 0 <= int(number_of_items) <= len(last_downloads):
            return last_downloads[0:int(number_of_items)]  # Return the requested number of items
        else:
            return self._bad_request('Invalid number_of_items')
