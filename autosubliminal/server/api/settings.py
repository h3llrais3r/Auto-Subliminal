# coding=utf-8

import os
from autosubliminal.util.common import find_path_in_paths

import cherrypy

import autosubliminal
from autosubliminal.config import write_config_general_section
from autosubliminal.server.rest import RestResource
from autosubliminal.util.language import get_subtitle_languages
from autosubliminal.util.websocket import send_websocket_notification


class SettingsApi(RestResource):
    """
    Rest resource for handling the /api/settings path.
    """

    def __init__(self):
        super(SettingsApi, self).__init__()

        # Add all sub paths here: /api/settings/...
        self.frontend = _FrontendApi()
        self.general = _GeneralApi()


class _FrontendApi(RestResource):
    """
    Rest resource for handling the /api/settings/frontend path.
    """

    def __init__(self):
        super(_FrontendApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Get the list of settings for the frontend."""
        settings = {
            'developerMode': autosubliminal.DEVELOPER,
            'webRoot': autosubliminal.WEBROOT,
            'scanDisk': autosubliminal.SCANDISK.name,
            'scanLibrary': autosubliminal.SCANLIBRARY.name,
            'checkSub': autosubliminal.CHECKSUB.name,
            'checkVersion': autosubliminal.CHECKVERSION.name,
            'tvdbUrl': autosubliminal.DEREFERURL + autosubliminal.TVDBURL,
            'imdbUrl': autosubliminal.DEREFERURL + autosubliminal.IMDBURL,
            'timestampFormat': autosubliminal.TIMESTAMPFORMAT,
            'pathSeparator': os.path.sep,
            'languages': get_subtitle_languages()
        }
        return settings


@cherrypy.popargs('general_setting_name')
class _GeneralApi(RestResource):
    """
    Rest resource for handling the /api/settings/general path.
    """

    def __init__(self):
        super(_GeneralApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('PUT',)

    def put(self, general_setting_name):
        """Update a general setting."""
        input_json = cherrypy.request.json

        # Add a video path to the existing list of video paths (if not already in it)
        if general_setting_name == 'videoPaths' and 'videoPath' in input_json and os.path.isdir(
                input_json['videoPath']):
            video_path = input_json['videoPath']
            if not find_path_in_paths(video_path, autosubliminal.VIDEOPATHS, check_common_path=True):
                autosubliminal.VIDEOPATHS.append(video_path)
                write_config_general_section()
                send_websocket_notification('Path %s added to the video paths.' % video_path)
            else:
                send_websocket_notification('Path %s already part of the video paths.' % video_path)

            return self._no_content()

        return self._bad_request('Invalid data')
