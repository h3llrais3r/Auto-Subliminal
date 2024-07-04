# coding=utf-8

import os
import platform
from typing import Any, Dict, List, Union, cast

import cherrypy
from subliminal.score import episode_scores, movie_scores

import autosubliminal
from autosubliminal.core.pathinfo import PathInfo
from autosubliminal.providers.pitcher import ANTI_CAPTCHA_PROVIDERS
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize, to_dict
from autosubliminal.util.language import get_subtitle_languages
from autosubliminal.util.system import get_python_location, get_python_version_full
from autosubliminal.version import RELEASE_VERSION
from autosubliminal.versionchecker import VersionChecker


class SystemApi(RestResource):
    """
    Rest resource for handling the /api/system path.
    """

    def __init__(self) -> None:
        super().__init__()

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

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['HEAD']

    def head(self) -> None:
        return None  # no need to return, as long as returns 200, it's fine


class _InfoApi(RestResource):
    """
    Rest resource for handling the /api/system/info path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self) -> Dict[str, Any]:
        """Return the system info."""
        versionChecker = cast(VersionChecker, autosubliminal.CHECKVERSION.process)
        info = {
            'os': platform.platform(),
            'pid': autosubliminal.PID,
            'release_version': RELEASE_VERSION,
            'install_type': versionChecker.install_type.name,
            'current_version': versionChecker.current_version,
            'current_version_url': versionChecker.current_version_url,
            'current_branch': versionChecker.current_branch,
            'current_branch_url': versionChecker.current_branch_url,
            'system_encoding': autosubliminal.SYSENCODING,
            'python_version': get_python_version_full(),
            'python_location': get_python_location(),
            'config_file': autosubliminal.CONFIGFILE
            if os.path.split(autosubliminal.CONFIGFILE)[0]
            else os.path.join(autosubliminal.PATH, autosubliminal.CONFIGFILE),
            'database_file': autosubliminal.DBFILE
            if os.path.split(autosubliminal.DBFILE)[0]
            else os.path.join(autosubliminal.PATH, autosubliminal.DBFILE),
            'log_file': autosubliminal.LOGFILE
            if os.path.split(autosubliminal.LOGFILE)[0]
            else os.path.join(autosubliminal.PATH, autosubliminal.LOGFILE),
        }

        return to_dict(info, camelize)


class _SettingsApi(RestResource):
    """
    Rest resource for handling the /api/system/settings path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self) -> Dict[str, Any]:
        """Get the list of settings for the frontend."""
        settings = {
            'app_version': RELEASE_VERSION,
            'app_process_id': autosubliminal.PID,
            'developer_mode': autosubliminal.DEVELOPER,
            'web_root': autosubliminal.WEBROOT,
            'scan_disk': autosubliminal.SCANDISK.name,
            'scan_disk_interval_default': autosubliminal.SCANDISKINTERVALDEFAULT,
            'scan_library': autosubliminal.SCANLIBRARY.name,
            'scan_library_interval_default': autosubliminal.SCANLIBRARYINTERVALDEFAULT,
            'check_sub': autosubliminal.CHECKSUB.name,
            'check_sub_interval_default': autosubliminal.CHECKSUBINTERVALDEFAULT,
            'check_sub_deadline_default': autosubliminal.CHECKSUBDEADLINEDEFAULT,
            'check_sub_delta_default': autosubliminal.CHECKSUBDELTADEFAULT,
            'check_version': autosubliminal.CHECKVERSION.name,
            'check_version_interval_default': autosubliminal.CHECKVERSIONINTERVALDEFAULT,
            'library_mode': autosubliminal.LIBRARYMODE,
            'library_edit_mode': autosubliminal.LIBRARYEDITMODE,
            'log_reversed': autosubliminal.LOGREVERSED,
            'manual_refine_video': autosubliminal.MANUALREFINEVIDEO,
            'prefer_hearing_impaired': autosubliminal.PREFERHEARINGIMPAIRED,
            'manual_sub_sync': autosubliminal.MANUALSUBSYNC,
            'derefer_url': autosubliminal.DEREFERURL,
            'tvdb_url': autosubliminal.TVDBURL,
            'imdb_url': autosubliminal.IMDBURL,
            'timestamp_format': autosubliminal.TIMESTAMPFORMAT,
            'path_separator': os.path.sep,
            'languages': get_subtitle_languages(),
            'subliminal_providers': autosubliminal.SUBLIMINALPROVIDERMANAGER.names(),
            'anti_captcha_providers': ANTI_CAPTCHA_PROVIDERS,
            'episode_scores': self._get_episode_scores(),
            'movie_scores': self._get_movie_scores(),
        }

        return to_dict(settings, camelize)

    def _get_episode_scores(self) -> Dict[str, Any]:
        return {
            'hash': episode_scores['hash'],
            'title': episode_scores['series'],
            'year': episode_scores['year'],
            'season': episode_scores['season'],
            'episode': episode_scores['episode'],
            'source': episode_scores['source'],
            'quality': episode_scores['resolution'],
            'codec': episode_scores['video_codec'],
            'release_group': episode_scores['release_group'],
            'hearing_impaired': episode_scores['hearing_impaired'],
            'default': autosubliminal.SHOWMINMATCHSCOREDEFAULT,
            'min': autosubliminal.SHOWMINMATCHSCORE,
            'max': episode_scores['hash'] + episode_scores['hearing_impaired'],
        }

    def _get_movie_scores(self) -> Dict[str, Any]:
        return {
            'hash': movie_scores['hash'],
            'title': movie_scores['title'],
            'year': movie_scores['year'],
            'source': movie_scores['source'],
            'quality': movie_scores['resolution'],
            'codec': movie_scores['video_codec'],
            'release_group': movie_scores['release_group'],
            'hearing_impaired': movie_scores['hearing_impaired'],
            'default': autosubliminal.MOVIEMINMATCHSCOREDEFAULT,
            'min': autosubliminal.MOVIEMINMATCHSCORE,
            'max': movie_scores['hash'] + movie_scores['hearing_impaired'],
        }


@cherrypy.popargs('scheduler_name')
class _SchedulersApi(RestResource):
    """
    Rest resource for handling the /api/system/schedulers path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self, scheduler_name: str = None) -> Union[List[Dict[str, Any]], Dict[str, Any]]:
        """Get the list of schedulers or a single scheduler by it's name."""
        if scheduler_name is None:
            return [autosubliminal.SCHEDULERS[scheduler].to_dict(camelize) for scheduler in autosubliminal.SCHEDULERS]
        elif scheduler_name in autosubliminal.SCHEDULERS:
            return autosubliminal.SCHEDULERS[scheduler_name].to_dict(camelize)
        else:
            self._raise_bad_request('Invalid scheduler_name')


class _PathsApi(RestResource):
    """
    Rest resource for handling the /api/system/paths path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self) -> List[Dict[str, Any]]:
        """Get the path info for all configured paths."""
        pathinfos = []
        pathinfo = PathInfo.get_path_info('Auto-Subliminal path', autosubliminal.PATH)
        pathinfos.append(pathinfo.to_dict(camelize))
        for index, video_path in enumerate(autosubliminal.VIDEOPATHS):
            pathinfo = PathInfo.get_path_info('Video path %s' % (index + 1), video_path)
            pathinfos.append(pathinfo.to_dict(camelize))

        return pathinfos
