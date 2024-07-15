# coding=utf-8

import logging
import os
from typing import Any, Dict

import cherrypy
from requests_oauthlib.oauth1_session import OAuth1Session
from subliminal.score import episode_scores, movie_scores

import autosubliminal
from autosubliminal import config, notifiers
from autosubliminal.config import write_config_general_section
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import (
    camelize,
    decamelize,
    dict_to_list,
    find_path_in_paths,
    get_boolean,
    list_to_dict,
    to_dict,
)

log = logging.getLogger(__name__)


class SettingsApi(RestResource):
    """
    Rest resource for handling the /api/settings path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/settings/...
        self.general = _GeneralApi()
        self.library = _LibraryApi()
        self.logging = _LoggingApi()
        self.webserver = _WebserverApi()
        self.subliminal = _SubliminalApi()
        self.namemapping = _NameMappingApi()
        self.skipmapping = _SkipMappingApi()
        self.notification = _NotificationApi()
        self.postprocessing = _PostProcessingApi()

    @staticmethod
    def save_and_restart_if_needed(section: str) -> None:
        # Save to the config and restart if needed
        restart = config.write_config(section)
        if restart:
            from autosubliminal import system  # Import here to prevent api test from failing (circular import)

            system.restart()


@cherrypy.popargs('general_setting_name')
class _GeneralApi(RestResource):
    """
    Rest resource for handling the /api/settings/general path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'general'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT', 'PATCH']

    def get(self) -> Dict[str, Any]:
        """Get general settings."""
        settings = {
            'video_paths': autosubliminal.VIDEOPATHS,
            'default_language': autosubliminal.DEFAULTLANGUAGE,
            'default_language_suffix': autosubliminal.DEFAULTLANGUAGESUFFIX,
            'additional_languages': autosubliminal.ADDITIONALLANGUAGES,
            'manual_search_with_scoring': autosubliminal.MANUALSEARCHWITHSCORING,
            'scan_disk_interval': autosubliminal.SCANDISKINTERVAL,
            'scan_disk_at_startup': autosubliminal.SCANDISKATSTARTUP,
            'check_sub_interval': autosubliminal.CHECKSUBINTERVAL,
            'check_sub_at_startup': autosubliminal.CHECKSUBATSTARTUP,
            'check_sub_deadline': autosubliminal.CHECKSUBDEADLINE,
            'check_sub_delta': autosubliminal.CHECKSUBDELTA,
            'check_version_interval': autosubliminal.CHECKVERSIONINTERVAL,
            'check_version_at_startup': autosubliminal.CHECKVERSIONATSTARTUP,
            'check_version_auto_update': autosubliminal.CHECKVERSIONAUTOUPDATE,
            'scan_embedded_subs': autosubliminal.SCANEMBEDDEDSUBS,
            'scan_hardcoded_subs': autosubliminal.SCANHARDCODEDSUBS,
            'skip_hidden_dirs': autosubliminal.SKIPHIDDENDIRS,
            'detect_invalid_sub_language': autosubliminal.DETECTINVALIDSUBLANGUAGE,
            'detected_language_probability': autosubliminal.DETECTEDLANGUAGEPROBABILITY,
            'manual_sub_sync': autosubliminal.MANUALSUBSYNC,
            'ffmpeg_path': autosubliminal.FFMPEGPATH,
            'min_video_file_size': autosubliminal.MINVIDEOFILESIZE,
            'max_db_results': autosubliminal.MAXDBRESULTS,
            'timestamp_format': autosubliminal.TIMESTAMPFORMAT,
        }

        return to_dict(settings, camelize)

    def put(self, general_setting_name: str = None) -> None:
        """Update general settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        general_setting_name = decamelize(general_setting_name)

        # Single setting update
        if general_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'video_paths' in input_dict:
                autosubliminal.VIDEOPATHS = input_dict['video_paths']
            if 'default_language' in input_dict:
                autosubliminal.DEFAULTLANGUAGE = input_dict['default_language']
            if 'default_language_suffix' in input_dict:
                autosubliminal.DEFAULTLANGUAGESUFFIX = input_dict['default_language_suffix']
            if 'additional_languages' in input_dict:
                autosubliminal.ADDITIONALLANGUAGES = input_dict['additional_languages']
            if 'manual_search_with_scoring' in input_dict:
                autosubliminal.MANUALSEARCHWITHSCORING = input_dict['manual_search_with_scoring']
            if 'scan_disk_interval' in input_dict:
                autosubliminal.SCANDISKINTERVAL = input_dict['scan_disk_interval']
            if 'scan_disk_at_startup' in input_dict:
                autosubliminal.SCANDISKATSTARTUP = input_dict['scan_disk_at_startup']
            if 'check_sub_interval' in input_dict:
                autosubliminal.CHECKSUBINTERVAL = input_dict['check_sub_interval']
            if 'check_sub_at_startup' in input_dict:
                autosubliminal.CHECKSUBATSTARTUP = input_dict['check_sub_at_startup']
            if 'check_sub_deadline' in input_dict:
                autosubliminal.CHECKSUBDEADLINE = input_dict['check_sub_deadline']
            if 'check_sub_delta' in input_dict:
                autosubliminal.CHECKSUBDELTA = input_dict['check_sub_delta']
            if 'check_version_interval' in input_dict:
                autosubliminal.CHECKVERSIONINTERVAL = input_dict['check_version_interval']
            if 'check_version_at_startup' in input_dict:
                autosubliminal.CHECKVERSIONATSTARTUP = input_dict['check_version_at_startup']
            if 'check_version_auto_update' in input_dict:
                autosubliminal.CHECKVERSIONAUTOUPDATE = input_dict['check_version_auto_update']
            if 'scan_embedded_subs' in input_dict:
                autosubliminal.SCANEMBEDDEDSUBS = input_dict['scan_embedded_subs']
            if 'scan_hardcoded_subs' in input_dict:
                autosubliminal.SCANHARDCODEDSUBS = input_dict['scan_hardcoded_subs']
            if 'skip_hidden_dirs' in input_dict:
                autosubliminal.SKIPHIDDENDIRS = input_dict['skip_hidden_dirs']
            if 'detect_invalid_sub_language' in input_dict:
                autosubliminal.DETECTINVALIDSUBLANGUAGE = input_dict['detect_invalid_sub_language']
            if 'detected_language_probability' in input_dict:
                autosubliminal.DETECTEDLANGUAGEPROBABILITY = input_dict['detected_language_probability']
            if 'manual_sub_sync' in input_dict:
                autosubliminal.MANUALSUBSYNC = input_dict['manual_sub_sync']
            if 'ffmpeg_path' in input_dict:
                autosubliminal.FFMPEGPATH = input_dict['ffmpeg_path']
            if 'min_video_file_size' in input_dict:
                autosubliminal.MINVIDEOFILESIZE = input_dict['min_video_file_size']
            if 'max_db_results' in input_dict:
                autosubliminal.MAXDBRESULTS = input_dict['max_db_results']
            if 'timestamp_format' in input_dict:
                autosubliminal.TIMESTAMPFORMAT = input_dict['timestamp_format']

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')

    def patch(self, general_setting_name: str = None) -> None:
        """Patch a general setting."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        general_setting_name = decamelize(general_setting_name)

        # Single setting partial update
        if general_setting_name:
            # Add a video path to the existing list of video paths (if not already in it)
            if (
                general_setting_name == 'video_paths'
                and 'video_path' in input_dict
                and os.path.isdir(input_dict['video_path'])
            ):
                video_path = input_dict['video_path']
                if not find_path_in_paths(video_path, autosubliminal.VIDEOPATHS, check_common_path=True):
                    autosubliminal.VIDEOPATHS.append(video_path)
                    write_config_general_section()
                    self._set_no_content_status()
                    return None
                else:
                    self._raise_conflict('Path already added to the video paths')

        self._raise_bad_request('Invalid data')


@cherrypy.popargs('library_setting_name')
class _LibraryApi(RestResource):
    """
    Rest resource for handling the /api/settings/library path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'library'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self) -> Dict[str, Any]:
        """Get general settings."""
        settings = {
            'library_mode': autosubliminal.LIBRARYMODE,
            'library_paths': autosubliminal.LIBRARYPATHS,
            'scan_library_interval': autosubliminal.SCANLIBRARYINTERVAL,
            'scan_library_at_startup': autosubliminal.SCANLIBRARYATSTARTUP,
            'library_edit_mode': autosubliminal.LIBRARYEDITMODE,
        }

        return to_dict(settings, camelize)

    def put(self, library_setting_name: str = None) -> None:
        """Update general settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        library_setting_name = decamelize(library_setting_name)

        # Single setting update
        if library_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'library_mode' in input_dict:
                autosubliminal.LIBRARYMODE = input_dict['library_mode']
            if 'library_paths' in input_dict:
                autosubliminal.LIBRARYPATHS = input_dict['library_paths']
            if 'scan_library_interval' in input_dict:
                autosubliminal.SCANLIBRARYINTERVAL = input_dict['scan_library_interval']
            if 'scan_library_at_startup' in input_dict:
                autosubliminal.SCANLIBRARYATSTARTUP = input_dict['scan_library_at_startup']
            if 'library_edit_mode' in input_dict:
                autosubliminal.LIBRARYEDITMODE = input_dict['library_edit_mode']

            # Activate/deactivate scheduler
            if autosubliminal.LIBRARYMODE:
                autosubliminal.SCANLIBRARY.activate()
            else:
                autosubliminal.SCANLIBRARY.deactivate()

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')


@cherrypy.popargs('log_setting_name')
class _LoggingApi(RestResource):
    """
    Rest resource for handling the /api/settings/logging path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'logging'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self) -> Dict[str, Any]:
        """Get log settings."""
        settings = {
            'log_file': autosubliminal.LOGFILE,
            'log_level': autosubliminal.LOGLEVEL,
            'log_num': autosubliminal.LOGNUM,
            'log_size': autosubliminal.LOGSIZE,
            'log_http_access': autosubliminal.LOGHTTPACCESS,
            'log_external_libs': autosubliminal.LOGEXTERNALLIBS,
            'log_detailed_format': autosubliminal.LOGDETAILEDFORMAT,
            'log_reversed': autosubliminal.LOGREVERSED,
            'log_level_console': autosubliminal.LOGLEVELCONSOLE,
        }

        return to_dict(settings, camelize)

    def put(self, log_setting_name: str = None) -> None:
        """Update log settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        log_setting_name = decamelize(log_setting_name)

        # Single setting update
        if log_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'log_file' in input_dict:
                autosubliminal.LOGFILE = input_dict['log_file']
            if 'log_level' in input_dict:
                autosubliminal.LOGLEVEL = input_dict['log_level']
            if 'log_num' in input_dict:
                autosubliminal.LOGNUM = input_dict['log_num']
            if 'log_size' in input_dict:
                autosubliminal.LOGSIZE = input_dict['log_size']
            if 'log_http_access' in input_dict:
                autosubliminal.LOGHTTPACCESS = input_dict['log_http_access']
            if 'log_external_libs' in input_dict:
                autosubliminal.LOGEXTERNALLIBS = input_dict['log_external_libs']
            if 'log_detailed_format' in input_dict:
                autosubliminal.LOGDETAILEDFORMAT = input_dict['log_detailed_format']
            if 'log_reversed' in input_dict:
                autosubliminal.LOGREVERSED = input_dict['log_reversed']
            if 'log_level_console' in input_dict:
                autosubliminal.LOGLEVELCONSOLE = input_dict['log_level_console']

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')


@cherrypy.popargs('webserver_setting_name')
class _WebserverApi(RestResource):
    """
    Rest resource for handling the /api/settings/webserver path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'webserver'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self) -> Dict[str, Any]:
        """Get webserver settings."""
        settings = {
            'web_server_ip': autosubliminal.WEBSERVERIP,
            'web_server_port': autosubliminal.WEBSERVERPORT,
            'web_root': autosubliminal.WEBROOT,
            'user_name': autosubliminal.USERNAME,
            'password': autosubliminal.PASSWORD,
            'launch_browser': autosubliminal.LAUNCHBROWSER,
        }

        return to_dict(settings, camelize)

    def put(self, webserver_setting_name: str = None) -> None:
        """Update webserver settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        webserver_setting_name = decamelize(webserver_setting_name)

        # Single setting update
        if webserver_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'web_server_ip' in input_dict:
                autosubliminal.WEBSERVERIP = input_dict['web_server_ip']
            if 'web_server_port' in input_dict:
                autosubliminal.WEBSERVERPORT = input_dict['web_server_port']
            if 'web_root' in input_dict:
                autosubliminal.WEBROOT = input_dict['web_root']
            if 'user_name' in input_dict:
                autosubliminal.USERNAME = input_dict['user_name']
            if 'password' in input_dict:
                autosubliminal.PASSWORD = input_dict['password']
            if 'launch_browser' in input_dict:
                autosubliminal.LAUNCHBROWSER = input_dict['launch_browser']

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')


@cherrypy.popargs('subliminal_setting_name')
class _SubliminalApi(RestResource):
    """
    Rest resource for handling the /api/settings/subliminal path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'subliminal'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self) -> Dict[str, Any]:
        """Get subliminal settings."""
        settings = {
            'show_match_source': autosubliminal.SHOWMATCHSOURCE,
            'show_match_quality': autosubliminal.SHOWMATCHQUALITY,
            'show_match_codec': autosubliminal.SHOWMATCHCODEC,
            'show_match_release_group': autosubliminal.SHOWMATCHRELEASEGROUP,
            'movie_match_source': autosubliminal.MOVIEMATCHSOURCE,
            'movie_match_quality': autosubliminal.MOVIEMATCHQUALITY,
            'movie_match_codec': autosubliminal.MOVIEMATCHCODEC,
            'movie_match_release_group': autosubliminal.MOVIEMATCHRELEASEGROUP,
            'subliminal_providers': autosubliminal.SUBLIMINALPROVIDERS,
            'subtitle_utf8_encoding': autosubliminal.SUBTITLEUTF8ENCODING,
            'refine_video': autosubliminal.REFINEVIDEO,
            'omdb_api_key': autosubliminal.OMDBAPIKEY,
            'manual_refine_video': autosubliminal.MANUALREFINEVIDEO,
            'prefer_hearing_impaired': autosubliminal.PREFERHEARINGIMPAIRED,
            'anti_captcha_class': autosubliminal.ANTICAPTCHACLASS,
            'anti_captcha_client_key': autosubliminal.ANTICAPTCHACLIENTKEY,
            'addic7ed_user_name': autosubliminal.ADDIC7EDUSERNAME,
            'addic7ed_password': autosubliminal.ADDIC7EDPASSWORD,
            'addic7ed_user_id': autosubliminal.ADDIC7EDUSERID,
            'opensubtitles_user_name': autosubliminal.OPENSUBTITLESUSERNAME,
            'opensubtitles_password': autosubliminal.OPENSUBTITLESPASSWORD,
            'opensubtitles_api_key': autosubliminal.OPENSUBTITLESAPIKEY,
        }

        return to_dict(settings, camelize)

    def put(self, subliminal_setting_name: str = None) -> None:
        """Update subliminal settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        subliminal_setting_name = decamelize(subliminal_setting_name)

        # Single setting update
        if subliminal_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'show_match_source' in input_dict:
                autosubliminal.SHOWMATCHSOURCE = input_dict['show_match_source']
            if 'show_match_quality' in input_dict:
                autosubliminal.SHOWMATCHQUALITY = input_dict['show_match_quality']
            if 'show_match_codec' in input_dict:
                autosubliminal.SHOWMATCHCODEC = input_dict['show_match_codec']
            if 'show_match_release_group' in input_dict:
                autosubliminal.SHOWMATCHRELEASEGROUP = input_dict['show_match_release_group']
            if 'movie_match_source' in input_dict:
                autosubliminal.MOVIEMATCHSOURCE = input_dict['movie_match_source']
            if 'movie_match_quality' in input_dict:
                autosubliminal.MOVIEMATCHQUALITY = input_dict['movie_match_quality']
            if 'movie_match_codec' in input_dict:
                autosubliminal.MOVIEMATCHCODEC = input_dict['movie_match_codec']
            if 'movie_match_release_group' in input_dict:
                autosubliminal.MOVIEMATCHRELEASEGROUP = input_dict['movie_match_release_group']
            if 'subliminal_providers' in input_dict:
                autosubliminal.SUBLIMINALPROVIDERS = input_dict['subliminal_providers']
            if 'subtitle_utf8_encoding' in input_dict:
                autosubliminal.SUBTITLEUTF8ENCODING = input_dict['subtitle_utf8_encoding']
            if 'refine_video' in input_dict:
                autosubliminal.REFINEVIDEO = input_dict['refine_video']
            if 'omdb_api_key' in input_dict:
                autosubliminal.OMDBAPIKEY = input_dict['omdb_api_key']
            if 'manual_refine_video' in input_dict:
                autosubliminal.MANUALREFINEVIDEO = input_dict['manual_refine_video']
            if 'prefer_hearing_impaired' in input_dict:
                autosubliminal.PREFERHEARINGIMPAIRED = input_dict['prefer_hearing_impaired']
            if 'anti_captcha_class' in input_dict:
                autosubliminal.ANTICAPTCHACLASS = input_dict['anti_captcha_class']
            if 'anti_captcha_client_key' in input_dict:
                autosubliminal.ANTICAPTCHACLIENTKEY = input_dict['anti_captcha_client_key']
            if 'addic7ed_user_name' in input_dict:
                autosubliminal.ADDIC7EDUSERNAME = input_dict['addic7ed_user_name']
            if 'addic7ed_password' in input_dict:
                autosubliminal.ADDIC7EDPASSWORD = input_dict['addic7ed_password']
            if 'addic7ed_user_id' in input_dict:
                autosubliminal.ADDIC7EDUSERID = input_dict['addic7ed_user_id']
            if 'opensubtitles_user_name' in input_dict:
                autosubliminal.OPENSUBTITLESUSERNAME = input_dict['opensubtitles_user_name']
            if 'opensubtitles_password' in input_dict:
                autosubliminal.OPENSUBTITLESPASSWORD = input_dict['opensubtitles_password']
            if 'opensubtitles_api_key' in input_dict:
                autosubliminal.OPENSUBTITLESAPIKEY = input_dict['opensubtitles_api_key']

            # Calculate show min match score
            show_min_match_score = autosubliminal.SHOWMINMATCHSCOREDEFAULT  # default score, not editable
            if get_boolean(input_dict['show_match_source']):
                show_min_match_score += episode_scores['source']
            if get_boolean(input_dict['show_match_quality']):
                show_min_match_score += episode_scores['resolution']
            if get_boolean(input_dict['show_match_codec']):
                show_min_match_score += episode_scores['video_codec']
            if get_boolean(input_dict['show_match_release_group']):
                show_min_match_score += episode_scores['release_group']
            autosubliminal.SHOWMINMATCHSCORE = show_min_match_score

            # Calculate movie min match score
            movie_min_match_score = autosubliminal.MOVIEMINMATCHSCOREDEFAULT  # default score, not editable
            if get_boolean(input_dict['movie_match_source']):
                movie_min_match_score += movie_scores['source']
            if get_boolean(input_dict['movie_match_quality']):
                movie_min_match_score += movie_scores['resolution']
            if get_boolean(input_dict['movie_match_codec']):
                movie_min_match_score += movie_scores['video_codec']
            if get_boolean(input_dict['movie_match_release_group']):
                movie_min_match_score += movie_scores['release_group']
            autosubliminal.MOVIEMINMATCHSCORE = movie_min_match_score

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')


@cherrypy.popargs('namemapping_setting_name')
class _NameMappingApi(RestResource):
    """
    Rest resource for handling the /api/settings/namemapping path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'namemapping'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self) -> Dict[str, Any]:
        """Get namemapping settings."""
        settings = {
            'show_name_mapping': dict_to_list(autosubliminal.SHOWNAMEMAPPING),
            'addic7ed_show_name_mapping': dict_to_list(autosubliminal.ADDIC7EDSHOWNAMEMAPPING),
            'alternative_show_name_mapping': dict_to_list(autosubliminal.ALTERNATIVESHOWNAMEMAPPING),
            'movie_name_mapping': dict_to_list(autosubliminal.MOVIENAMEMAPPING),
            'alternative_movie_name_mapping': dict_to_list(autosubliminal.ALTERNATIVEMOVIENAMEMAPPING),
        }

        return to_dict(settings, camelize)

    def put(self, namemapping_setting_name: str = None) -> None:
        """Update namemapping settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        namemapping_setting_name = decamelize(namemapping_setting_name)

        # Single setting update
        if namemapping_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'show_name_mapping' in input_dict:
                autosubliminal.SHOWNAMEMAPPING = list_to_dict(input_dict['show_name_mapping'])
            if 'addic7ed_show_name_mapping' in input_dict:
                autosubliminal.ADDIC7EDSHOWNAMEMAPPING = list_to_dict(input_dict['addic7ed_show_name_mapping'])
            if 'alternative_show_name_mapping' in input_dict:
                autosubliminal.ALTERNATIVESHOWNAMEMAPPING = list_to_dict(input_dict['alternative_show_name_mapping'])
            if 'movie_name_mapping' in input_dict:
                autosubliminal.MOVIENAMEMAPPING = list_to_dict(input_dict['movie_name_mapping'])
            if 'alternative_movie_name_mapping' in input_dict:
                autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = list_to_dict(input_dict['alternative_movie_name_mapping'])

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')


@cherrypy.popargs('skipmapping_setting_name')
class _SkipMappingApi(RestResource):
    """
    Rest resource for handling the /api/settings/skipmapping path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'skipmapping'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self) -> Dict[str, Any]:
        """Get skipmapping settings."""
        settings = {
            'skip_show_mapping': dict_to_list(autosubliminal.SKIPSHOW),
            'skip_movie_mapping': dict_to_list(autosubliminal.SKIPMOVIE),
        }

        return to_dict(settings, camelize)

    def put(self, skipmapping_setting_name: str = None) -> None:
        """Update skipmapping settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        skipmapping_setting_name = decamelize(skipmapping_setting_name)

        # Single setting update
        if skipmapping_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'skip_show_mapping' in input_dict:
                autosubliminal.SKIPSHOW = list_to_dict(input_dict['skip_show_mapping'])
            if 'skip_movie_mapping' in input_dict:
                autosubliminal.SKIPMOVIE = list_to_dict(input_dict['skip_movie_mapping'])

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')


@cherrypy.popargs('notification_setting_name')
class _NotificationApi(RestResource):
    """
    Rest resource for handling the /api/settings/notification path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'notification'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT', 'POST', 'PATCH']

    def get(self) -> Dict[str, Any]:
        """Get notification settings."""
        settings = {
            'notify': autosubliminal.NOTIFY,
            'notify_mail': autosubliminal.NOTIFYMAIL,
            'mail_server': autosubliminal.MAILSRV,
            'mail_from_name': autosubliminal.MAILFROMNAME,
            'mail_from': autosubliminal.MAILFROMADDR,
            'mail_to': autosubliminal.MAILTOADDR,
            'mail_user_name': autosubliminal.MAILUSERNAME,
            'mail_password': autosubliminal.MAILPASSWORD,
            'mail_subject': autosubliminal.MAILSUBJECT,
            'mail_encryption': autosubliminal.MAILENCRYPTION,
            'mail_authentication': autosubliminal.MAILAUTH,
            'notify_twitter': autosubliminal.NOTIFYTWITTER,
            'twitter_key': autosubliminal.TWITTERKEY,
            'twitter_secret': autosubliminal.TWITTERSECRET,
            'notify_pushalot': autosubliminal.NOTIFYPUSHALOT,
            'pushalot_api': autosubliminal.PUSHALOTAPI,
            'notify_pushover': autosubliminal.NOTIFYPUSHOVER,
            'pushover_key': autosubliminal.PUSHOVERKEY,
            'pushover_api': autosubliminal.PUSHOVERAPI,
            'pushover_devices': autosubliminal.PUSHOVERDEVICES,
            'notify_growl': autosubliminal.NOTIFYGROWL,
            'growl_host': autosubliminal.GROWLHOST,
            'growl_port': autosubliminal.GROWLPORT,
            'growl_password': autosubliminal.GROWLPASS,
            'growl_priority': autosubliminal.GROWLPRIORITY,
            'notify_prowl': autosubliminal.NOTIFYPROWL,
            'prowl_api': autosubliminal.PROWLAPI,
            'prowl_priority': autosubliminal.PROWLPRIORITY,
            'notify_pushbullet': autosubliminal.NOTIFYPUSHBULLET,
            'pushbullet_api': autosubliminal.PUSHBULLETAPI,
            'notify_telegram': autosubliminal.NOTIFYTELEGRAM,
            'telegram_bot_api': autosubliminal.TELEGRAMBOTAPI,
            'telegram_chat_id': autosubliminal.TELEGRAMCHATID,
        }

        return to_dict(settings, camelize)

    def put(self, notification_setting_name: str = None) -> None:
        """Update notification settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        notification_setting_name = decamelize(notification_setting_name)

        # Single setting update
        if notification_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'notify' in input_dict:
                autosubliminal.NOTIFY = input_dict['notify']
            if 'notify_mail' in input_dict:
                autosubliminal.NOTIFYMAIL = input_dict['notify_mail']
            if 'mail_server' in input_dict:
                autosubliminal.MAILSRV = input_dict['mail_server']
            if 'mail_from_name' in input_dict:
                autosubliminal.MAILFROMNAME = input_dict['mail_from_name']
            if 'mail_from' in input_dict:
                autosubliminal.MAILFROMADDR = input_dict['mail_from']
            if 'mail_to' in input_dict:
                autosubliminal.MAILTOADDR = input_dict['mail_to']
            if 'mail_user_name' in input_dict:
                autosubliminal.MAILUSERNAME = input_dict['mail_user_name']
            if 'mail_password' in input_dict:
                autosubliminal.MAILPASSWORD = input_dict['mail_password']
            if 'mail_subject' in input_dict:
                autosubliminal.MAILSUBJECT = input_dict['mail_subject']
            if 'mail_encryption' in input_dict:
                autosubliminal.MAILENCRYPTION = input_dict['mail_encryption']
            if 'mail_authentication' in input_dict:
                autosubliminal.MAILAUTH = input_dict['mail_authentication']
            if 'notify_twitter' in input_dict:
                autosubliminal.NOTIFYTWITTER = input_dict['notify_twitter']
            if 'twitter_key' in input_dict:
                autosubliminal.TWITTERKEY = input_dict['twitter_key']
            if 'twitter_secret' in input_dict:
                autosubliminal.TWITTERSECRET = input_dict['twitter_secret']
            if 'notify_pushalot' in input_dict:
                autosubliminal.NOTIFYPUSHALOT = input_dict['notify_pushalot']
            if 'pushalot_api' in input_dict:
                autosubliminal.PUSHALOTAPI = input_dict['pushalot_api']
            if 'notify_pushover' in input_dict:
                autosubliminal.NOTIFYPUSHOVER = input_dict['notify_pushover']
            if 'pushover_key' in input_dict:
                autosubliminal.PUSHOVERKEY = input_dict['pushover_key']
            if 'pushover_api' in input_dict:
                autosubliminal.PUSHOVERAPI = input_dict['pushover_api']
            if 'pushover_devices' in input_dict:
                autosubliminal.PUSHOVERDEVICES = input_dict['pushover_devices']
            if 'notify_growl' in input_dict:
                autosubliminal.NOTIFYGROWL = input_dict['notify_growl']
            if 'growl_host' in input_dict:
                autosubliminal.GROWLHOST = input_dict['growl_host']
            if 'growl_port' in input_dict:
                autosubliminal.GROWLPORT = input_dict['growl_port']
            if 'growl_password' in input_dict:
                autosubliminal.GROWLPASS = input_dict['growl_password']
            if 'growl_priority' in input_dict:
                autosubliminal.GROWLPRIORITY = input_dict['growl_priority']
            if 'notify_prowl' in input_dict:
                autosubliminal.NOTIFYPROWL = input_dict['notify_prowl']
            if 'prowl_api' in input_dict:
                autosubliminal.PROWLAPI = input_dict['prowl_api']
            if 'prowl_priority' in input_dict:
                autosubliminal.PROWLPRIORITY = input_dict['prowl_priority']
            if 'notify_pushbullet' in input_dict:
                autosubliminal.NOTIFYPUSHBULLET = input_dict['notify_pushbullet']
            if 'pushbullet_api' in input_dict:
                autosubliminal.PUSHBULLETAPI = input_dict['pushbullet_api']
            if 'notify_telegram' in input_dict:
                autosubliminal.NOTIFYTELEGRAM = input_dict['notify_telegram']
            if 'telegram_bot_api' in input_dict:
                autosubliminal.TELEGRAMBOTAPI = input_dict['telegram_bot_api']
            if 'telegram_chat_id' in input_dict:
                autosubliminal.TELEGRAMCHATID = input_dict['telegram_chat_id']

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')

    def post(self, notification_setting_name: str = None) -> Dict[str, Any]:
        """Register a notifier."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        # Register a notifier (notification_setting_name is used as notifier name)
        if notification_setting_name:
            notifier_name = notification_setting_name

            # Twitter registration
            if notifier_name == 'twitter':
                import autosubliminal.notifiers.twitter as twitter_notifier

                # Getting request token
                if 'token_key' not in input_dict and 'token_secret' not in input_dict:
                    oauth_client = OAuth1Session(
                        client_key=twitter_notifier.CONSUMER_KEY, client_secret=twitter_notifier.CONSUMER_SECRET
                    )
                    try:
                        response = oauth_client.fetch_request_token(twitter_notifier.REQUEST_TOKEN_URL)
                    except Exception:
                        log.exception('Error while fetching twitter request token')
                        self._raise_internal_server_error('Twitter registration failed')

                    # Create result
                    result = {
                        'url': oauth_client.authorization_url(twitter_notifier.AUTHORIZATION_URL),
                        'token_key': response.get('oauth_token'),
                        'token_secret': response.get('oauth_token_secret'),
                    }

                    return to_dict(result, camelize)

                # Getting access token
                if 'token_key' in input_dict and 'token_secret' in input_dict and 'token_pin' in input_dict:
                    oauth_client = OAuth1Session(
                        client_key=twitter_notifier.CONSUMER_KEY,
                        client_secret=twitter_notifier.CONSUMER_SECRET,
                        resource_owner_key=input_dict['token_key'],
                        resource_owner_secret=input_dict['token_secret'],
                        verifier=input_dict['token_pin'],
                    )
                    try:
                        response = oauth_client.fetch_access_token(twitter_notifier.ACCESS_TOKEN_URL)
                    except Exception:
                        log.exception('Error while fetching twitter access token')
                        self._raise_internal_server_error('Twitter registration failed')

                    # Create result
                    result = {
                        'twitter_key': response.get('oauth_token'),
                        'twitter_secret': response.get('oauth_token_secret'),
                    }

                    return to_dict(result, camelize)

        self._raise_bad_request('Invalid data')

    def patch(self, notification_setting_name: str = None) -> None:
        """Test a notifier."""

        # Test a notifier (notification_setting_name is used as notifier name)
        if notification_setting_name:
            notifier_name = notification_setting_name
            if notifiers.test_notifier(notifier_name):
                self._set_no_content_status()
                return None
            else:
                self._raise_internal_server_error('Test %s notification failed' % notifier_name)
        else:
            self._raise_bad_request('Invalid data')


class _PostProcessingApi(RestResource):
    """
    Rest resource for handling the /api/settings/postprocessing path.
    """

    def __init__(self) -> None:
        super().__init__()
        self._section = 'postprocessing'

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self) -> Dict[str, Any]:
        """Get postprocessing settings."""
        settings = {
            'post_process': autosubliminal.POSTPROCESS,
            'post_process_individual': autosubliminal.POSTPROCESSINDIVIDUAL,
            'post_process_utf8_encoding': autosubliminal.POSTPROCESSUTF8ENCODING,
            'show_post_process_cmd': autosubliminal.SHOWPOSTPROCESSCMD,
            'show_post_process_args': autosubliminal.SHOWPOSTPROCESSCMDARGS,
            'movie_post_process_cmd': autosubliminal.MOVIEPOSTPROCESSCMD,
            'movie_post_process_args': autosubliminal.MOVIEPOSTPROCESSCMDARGS,
        }

        return to_dict(settings, camelize)

    def put(self, postprocess_setting_name: str = None) -> None:
        """Update postprocessing settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)
        postprocess_setting_name = decamelize(postprocess_setting_name)

        # Single setting update
        if postprocess_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'post_process' in input_dict:
                autosubliminal.POSTPROCESS = input_dict['post_process']
            if 'post_process_individual' in input_dict:
                autosubliminal.POSTPROCESSINDIVIDUAL = input_dict['post_process_individual']
            if 'post_process_utf8_encoding' in input_dict:
                autosubliminal.POSTPROCESSUTF8ENCODING = input_dict['post_process_utf8_encoding']
            if 'show_post_process_cmd' in input_dict:
                autosubliminal.SHOWPOSTPROCESSCMD = input_dict['show_post_process_cmd']
            if 'show_post_process_args' in input_dict:
                autosubliminal.SHOWPOSTPROCESSCMDARGS = input_dict['show_post_process_args']
            if 'movie_post_process_cmd' in input_dict:
                autosubliminal.MOVIEPOSTPROCESSCMD = input_dict['movie_post_process_cmd']
            if 'movie_post_process_args' in input_dict:
                autosubliminal.MOVIEPOSTPROCESSCMDARGS = input_dict['movie_post_process_args']

            SettingsApi.save_and_restart_if_needed(self._section)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Invalid data')
