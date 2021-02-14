# coding=utf-8

import os
import platform

import cherrypy

import autosubliminal
from autosubliminal.core.pathinfo import PathInfo
from autosubliminal.providers.pitcher import ANTI_CAPTCHA_PROVIDERS
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize, get_next_scheduler_run_in_ms, to_dict
from autosubliminal.util.language import get_subtitle_languages
from autosubliminal.util.system import get_python_version_full, get_python_location
from autosubliminal.version import RELEASE_VERSION


class SystemApi(RestResource):
    """
    Rest resource for handling the /api/system path.
    """

    def __init__(self):
        super(SystemApi, self).__init__()

        # Add all sub paths here: /api/system/...
        self.alive = _AliveApi()
        self.info = _InfoApi()
        self.settings = _SettingsApi()
        self.schedulers = _SchedulersApi()
        self.paths = _PathsApi()


class _AliveApi(RestResource):
    """
    Rest resource for handling the /api/system/alive path.
    """

    def __init__(self):
        super(_AliveApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Return true if system is alive."""
        if autosubliminal.STARTED:
            return {'alive': True}
        else:
            return {'alive': False}


class _InfoApi(RestResource):
    """
    Rest resource for handling the /api/system/info path.
    """

    def __init__(self):
        super(_InfoApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Return the system info."""
        info = {
            'os': platform.platform(),
            'release_version': RELEASE_VERSION,
            'install_type': autosubliminal.CHECKVERSION.process.install_type.name,
            'current_version': autosubliminal.CHECKVERSION.process.current_version,
            'current_version_url': autosubliminal.CHECKVERSION.process.current_version_url,
            'current_branch': autosubliminal.CHECKVERSION.process.current_branch,
            'current_branch_url': autosubliminal.CHECKVERSION.process.current_branch_url,
            'system_encoding': autosubliminal.SYSENCODING,
            'python_version': get_python_version_full(),
            'python_location': get_python_location(),
            'config_file': autosubliminal.CONFIGFILE if os.path.split(autosubliminal.CONFIGFILE)[0] else os.path.join(
                autosubliminal.PATH, autosubliminal.CONFIGFILE),
            'database_file': autosubliminal.DBFILE if os.path.split(autosubliminal.DBFILE)[0] else os.path.join(
                autosubliminal.PATH, autosubliminal.DBFILE),
            'log_file': autosubliminal.LOGFILE if os.path.split(autosubliminal.LOGFILE)[0] else os.path.join(
                autosubliminal.PATH, autosubliminal.LOGFILE),
        }

        return to_dict(info, camelize)


class _SettingsApi(RestResource):
    """
    Rest resource for handling the /api/system/settings path.
    """

    def __init__(self):
        super(_SettingsApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Get the list of settings for the frontend."""
        settings = {
            'app_version': RELEASE_VERSION,
            'app_process_id': autosubliminal.PID,
            'developer_mode': autosubliminal.DEVELOPER,
            'web_root': autosubliminal.WEBROOT,
            'scan_disk': autosubliminal.SCANDISK.name,
            'scan_disk_next_run_in_ms': get_next_scheduler_run_in_ms(autosubliminal.SCANDISK),
            'scan_library': autosubliminal.SCANLIBRARY.name,
            'check_sub': autosubliminal.CHECKSUB.name,
            'check_sub_next_run_in_ms': get_next_scheduler_run_in_ms(autosubliminal.CHECKSUB),
            'check_version': autosubliminal.CHECKVERSION.name,
            'library_mode': autosubliminal.LIBRARYMODE,
            'log_reversed': autosubliminal.LOGREVERSED,
            'manual_refine_video': autosubliminal.MANUALREFINEVIDEO,
            'derefer_url': autosubliminal.DEREFERURL,
            'tvdb_url': autosubliminal.TVDBURL,
            'imdb_url': autosubliminal.IMDBURL,
            'timestamp_format': autosubliminal.TIMESTAMPFORMAT,
            'path_separator': os.path.sep,
            'languages': get_subtitle_languages(),
            'subliminal_providers': autosubliminal.SUBLIMINALPROVIDERMANAGER.names(),
            'anti_captcha_providers': ANTI_CAPTCHA_PROVIDERS
        }

        return to_dict(settings, camelize)


@cherrypy.popargs('scheduler_name')
class _SchedulersApi(RestResource):
    """
    Rest resource for handling the /api/system/schedulers path.
    """

    def __init__(self):
        super(_SchedulersApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self, scheduler_name=None):
        """Get the list of schedulers or a single scheduler by it's name."""
        if scheduler_name is None:
            return [autosubliminal.SCHEDULERS[scheduler].to_dict(camelize) for scheduler in autosubliminal.SCHEDULERS]
        elif scheduler_name in autosubliminal.SCHEDULERS:
            return autosubliminal.SCHEDULERS[scheduler_name].to_dict(camelize)
        else:
            return self._bad_request('Invalid scheduler_name')


class _PathsApi(RestResource):
    """
    Rest resource for handling the /api/system/paths path.
    """

    def __init__(self):
        super(_PathsApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Get the path info for all configured paths."""
        pathinfos = []
        pathinfo = PathInfo.get_path_info('Auto-Subliminal path', autosubliminal.PATH)
        pathinfos.append(pathinfo.to_dict(camelize))
        for index, video_path in enumerate(autosubliminal.VIDEOPATHS):
            pathinfo = PathInfo.get_path_info('Video path %s' % (index + 1), video_path)
            pathinfos.append(pathinfo.to_dict(camelize))

        return pathinfos
