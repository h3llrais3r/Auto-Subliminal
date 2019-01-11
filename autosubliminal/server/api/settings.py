# coding=utf-8

import os

import autosubliminal
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import get_alpha2_languages


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
            'scanDisk': autosubliminal.SCANDISK.name,
            'scanLibrary': autosubliminal.SCANLIBRARY.name,
            'checkSub': autosubliminal.CHECKSUB.name,
            'checkVersion': autosubliminal.CHECKVERSION.name,
            'tvdbUrl': autosubliminal.DEREFERURL + autosubliminal.TVDBURL,
            'imdbUrl': autosubliminal.DEREFERURL + autosubliminal.IMDBURL,
            'timestampFormat': autosubliminal.TIMESTAMPFORMAT,
            'pathSeparator': os.path.sep,
            'languages': get_alpha2_languages()
        }
        return settings
