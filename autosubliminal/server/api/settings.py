# coding=utf-8

import autosubliminal
from autosubliminal.server.rest import RestResource


class SettingsApi(RestResource):
    """
    Rest resource for handling the /settings path.
    """

    def __init__(self):
        super(SettingsApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Get the list of settings for the frontend."""
        settings = {
            'tvdbUrl': autosubliminal.DEREFERURL + autosubliminal.TVDBURL,
            'imdbUrl': autosubliminal.DEREFERURL + autosubliminal.IMDBURL,
            'timestampFormat': autosubliminal.TIMESTAMPFORMAT
        }
        return settings
