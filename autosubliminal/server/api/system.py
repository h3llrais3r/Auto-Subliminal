# coding=utf-8

import os

import autosubliminal
from autosubliminal.core.pathinfo import PathInfo
from autosubliminal.providers.pitcher import ANTI_CAPTCHA_PROVIDERS
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize, get_next_scheduler_run_in_ms, to_dict
from autosubliminal.util.language import get_subtitle_languages
from autosubliminal.version import RELEASE_VERSION


class SystemApi(RestResource):
    """
    Rest resource for handling the /api/system path.
    """

    def __init__(self):
        super(SystemApi, self).__init__()

        # Add all sub paths here: /api/system/...
        self.alive = _AliveApi()
        self.restart = _RestartApi()
        self.shutdown = _ShutdownApi()
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


class _RestartApi(RestResource):
    """
    Rest resource for handling the /api/system/restart path.
    """

    def __init__(self):
        super(_RestartApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('POST',)

    def post(self):
        """Restart the system."""
        from autosubliminal import system  # Import here to prevent api test from failing (circular import)
        system.restart()

        return self._no_content()


class _ShutdownApi(RestResource):
    """
    Rest resource for handling the /api/system/shutdown path.
    """

    def __init__(self):
        super(_ShutdownApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('POST',)

    def post(self):
        """Shutdown the system."""
        from autosubliminal import system  # Import here to prevent api test from failing (circular import)
        system.shutdown()

        return self._no_content()


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
            'log_reversed': autosubliminal.LOGREVERSED,
            'tvdb_url': autosubliminal.DEREFERURL + autosubliminal.TVDBURL,
            'imdb_url': autosubliminal.DEREFERURL + autosubliminal.IMDBURL,
            'timestamp_format': autosubliminal.TIMESTAMPFORMAT,
            'path_separator': os.path.sep,
            'languages': get_subtitle_languages(),
            'subliminal_providers': autosubliminal.SUBLIMINALPROVIDERMANAGER.names(),
            'anti_captcha_providers': ANTI_CAPTCHA_PROVIDERS
        }

        return to_dict(settings, camelize)


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
