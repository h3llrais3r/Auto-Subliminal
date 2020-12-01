# coding=utf-8

import os

import cherrypy

import autosubliminal
from autosubliminal.config import write_config_general_section
from autosubliminal.core.diskusage import DiskUsage
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize, decamelize, find_path_in_paths, get_next_scheduler_run_in_ms, to_dict
from autosubliminal.util.language import get_subtitle_languages
from autosubliminal.util.websocket import send_websocket_notification
from autosubliminal.version import RELEASE_VERSION


class SettingsApi(RestResource):
    """
    Rest resource for handling the /api/settings path.
    """

    def __init__(self):
        super(SettingsApi, self).__init__()

        # Add all sub paths here: /api/settings/...
        self.diskusage = _DiskUsageApi()
        self.frontend = _FrontendApi()
        self.general = _GeneralApi()


class _DiskUsageApi(RestResource):
    """
    Rest resource for handling the /api/settings/diskusage path.
    """

    def __init__(self):
        super(_DiskUsageApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Get the diskusage details for all configured paths."""
        diskusages = []
        diskusage = DiskUsage.calculate_disk_usage('Auto-Subliminal path', autosubliminal.PATH)
        diskusages.append(diskusage.to_dict(camelize))
        for index, video_path in enumerate(autosubliminal.VIDEOPATHS):
            diskusage = DiskUsage.calculate_disk_usage('Video path %s' % (index + 1), video_path)
            diskusages.append(diskusage.to_dict(camelize))

        return diskusages


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
            'appVersion': RELEASE_VERSION,
            'appPID': autosubliminal.PID,
            'developerMode': autosubliminal.DEVELOPER,
            'webRoot': autosubliminal.WEBROOT,
            'scanDisk': autosubliminal.SCANDISK.name,
            'scanDiskNextRunInMs': get_next_scheduler_run_in_ms(autosubliminal.SCANDISK),
            'scanLibrary': autosubliminal.SCANLIBRARY.name,
            'checkSub': autosubliminal.CHECKSUB.name,
            'checkSubNextRunInMs': get_next_scheduler_run_in_ms(autosubliminal.CHECKSUB),
            'checkVersion': autosubliminal.CHECKVERSION.name,
            'logReversed': autosubliminal.LOGREVERSED,
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
        input_dict = to_dict(cherrypy.request.json, decamelize)

        # Add a video path to the existing list of video paths (if not already in it)
        if general_setting_name == 'videoPaths' and 'videoPath' in input_dict and os.path.isdir(
                input_dict['videoPath']):
            video_path = input_dict['videoPath']
            if not find_path_in_paths(video_path, autosubliminal.VIDEOPATHS, check_common_path=True):
                autosubliminal.VIDEOPATHS.append(video_path)
                write_config_general_section()
                send_websocket_notification('Path %s added to the video paths.' % video_path)
            else:
                send_websocket_notification('Path %s already part of the video paths.' % video_path)

            return self._no_content()

        return self._bad_request('Invalid data')
