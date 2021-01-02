# coding=utf-8

import os

import cherrypy

import autosubliminal
from autosubliminal.config import write_config_general_section, write_config_logging_section, \
    write_config_webserver_section, write_config_shownamemapping_section, write_config_addic7edshownamemapping_section, \
    write_config_alternativeshownamemapping_section, write_config_movienamemapping_section, \
    write_config_alternativemovienamemapping_section, write_config_postprocessing_section, write_config_skipshow_section, \
    write_config_skipmovie_section, write_config_subliminal_section
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize, decamelize, find_path_in_paths, to_dict, dict_to_list, list_to_dict
from autosubliminal.util.websocket import send_websocket_notification


class SettingsApi(RestResource):
    """
    Rest resource for handling the /api/settings path.
    """

    def __init__(self):
        super(SettingsApi, self).__init__()

        # Add all sub paths here: /api/settings/...
        self.general = _GeneralApi()
        self.logging = _LoggingApi()
        self.webserver = _WebserverApi()
        self.subliminal = _SubliminalApi()
        self.namemapping = _NameMappingApi()
        self.skipmapping = _SkipMappingApi()
        self.postprocessing = _PostProcessingApi()


@cherrypy.popargs('general_setting_name')
class _GeneralApi(RestResource):
    """
    Rest resource for handling the /api/settings/general path.
    """

    def __init__(self):
        super(_GeneralApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'PUT')

    def get(self):
        """Get general settings."""
        settings = {
            'video_paths': autosubliminal.VIDEOPATHS,
            'default_language': autosubliminal.DEFAULTLANGUAGE,
            'default_language_suffix': autosubliminal.DEFAULTLANGUAGESUFFIX,
            'additional_languages': autosubliminal.ADDITIONALLANGUAGES,
            'manual_search_with_scoring': autosubliminal.MANUALSEARCHWITHSCORING,
            'scan_disk_interval': autosubliminal.SCANDISKINTERVAL,
            'check_sub_interval': autosubliminal.CHECKSUBINTERVAL,
            'check_sub_deadline': autosubliminal.CHECKSUBDEADLINE,
            'check_sub_delta': autosubliminal.CHECKSUBDELTA,
            'check_version_interval': autosubliminal.CHECKVERSIONINTERVAL,
            'check_version_auto_update': autosubliminal.CHECKVERSIONAUTOUPDATE,
            'scan_embedded_subs': autosubliminal.SCANEMBEDDEDSUBS,
            'scan_hardcoded_subs': autosubliminal.SCANHARDCODEDSUBS,
            'skip_hidden_dirs': autosubliminal.SKIPHIDDENDIRS,
            'detect_invalid_sub_language': autosubliminal.DETECTINVALIDSUBLANGUAGE,
            'detected_language_probability': autosubliminal.DETECTEDLANGUAGEPROBABILITY,
            'min_video_file_size': autosubliminal.MINVIDEOFILESIZE,
            'max_db_results': autosubliminal.MAXDBRESULTS,
            'timestamp_format': autosubliminal.TIMESTAMPFORMAT
        }

        return to_dict(settings, camelize)

    def put(self, general_setting_name=None):
        """Update general settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        # Single setting update
        if general_setting_name:
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
            if 'check_sub_deadline' in input_dict:
                autosubliminal.CHECKSUBDEADLINE = input_dict['check_sub_deadline']
            if 'check_sub_delta' in input_dict:
                autosubliminal.CHECKSUBDELTA = input_dict['check_sub_delta']
            if 'check_version_interval' in input_dict:
                autosubliminal.CHECKVERSIONINTERVAL = input_dict['check_version_interval']
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
            if 'min_video_file_size' in input_dict:
                autosubliminal.MINVIDEOFILESIZE = input_dict['min_video_file_size']
            if 'max_db_results' in input_dict:
                autosubliminal.MAXDBRESULTS = input_dict['max_db_results']
            if 'timestamp_format' in input_dict:
                autosubliminal.TIMESTAMPFORMAT = input_dict['timestamp_format']

            write_config_general_section()
            send_websocket_notification('General settings updated.')

            return self._no_content()

        return self._bad_request('Invalid data')


class _LoggingApi(RestResource):
    """
    Rest resource for handling the /api/settings/logging path.
    """

    def __init__(self):
        super(_LoggingApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'PUT')

    def get(self):
        """Get general settings."""
        settings = {
            'log_file': autosubliminal.LOGFILE,
            'log_level': autosubliminal.LOGLEVEL,
            'log_num': autosubliminal.LOGNUM,
            'log_size': autosubliminal.LOGSIZE,
            'log_http_access': autosubliminal.LOGHTTPACCESS,
            'log_external_libs': autosubliminal.LOGEXTERNALLIBS,
            'log_detailed_format': autosubliminal.LOGDETAILEDFORMAT,
            'log_reversed': autosubliminal.LOGREVERSED,
            'log_level_console': autosubliminal.LOGLEVELCONSOLE
        }

        return to_dict(settings, camelize)

    def put(self, log_setting_name=None):
        """Update log settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

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

            write_config_logging_section()
            send_websocket_notification('Log settings updated.')

            return self._no_content()

        return self._bad_request('Invalid data')


class _WebserverApi(RestResource):
    """
    Rest resource for handling the /api/settings/webserver path.
    """

    def __init__(self):
        super(_WebserverApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'PUT')

    def get(self):
        """Get general settings."""
        settings = {
            'web_server_ip': autosubliminal.WEBSERVERIP,
            'web_server_port': autosubliminal.WEBSERVERPORT,
            'web_root': autosubliminal.WEBROOT,
            'user_name': autosubliminal.USERNAME,
            'password': autosubliminal.PASSWORD,
            'launch_browser': autosubliminal.LAUNCHBROWSER
        }

        return to_dict(settings, camelize)

    def put(self, webserver_setting_name=None):
        """Update webserver settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

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

            write_config_webserver_section()
            send_websocket_notification('Webserver settings updated.')

            return self._no_content()

        return self._bad_request('Invalid data')


class _SubliminalApi(RestResource):
    """
    Rest resource for handling the /api/settings/subliminal path.
    """

    def __init__(self):
        super(_SubliminalApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'PUT')

    def get(self):
        """Get general settings."""
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
            'manual_refine_video': autosubliminal.MANUALREFINEVIDEO,
            'prefer_hearing_impaired': autosubliminal.PREFERHEARINGIMPAIRED,
            'anti_captcha_class': autosubliminal.ANTICAPTCHACLASS,
            'anti_captcha_client_key': autosubliminal.ANTICAPTCHACLIENTKEY,
            'addic7ed_user_name': autosubliminal.ADDIC7EDUSERNAME,
            'addic7ed_password': autosubliminal.ADDIC7EDPASSWORD,
            'opensubtitles_user_name': autosubliminal.OPENSUBTITLESUSERNAME,
            'opensubtitles_password': autosubliminal.OPENSUBTITLESPASSWORD,
            'legendastv_user_name': autosubliminal.LEGENDASTVUSERNAME,
            'legendastv_password': autosubliminal.LEGENDASTVPASSWORD
        }

        return to_dict(settings, camelize)

    def put(self, webserver_setting_name=None):
        """Update webserver settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        # Single setting update
        if webserver_setting_name:
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
            if 'opensubtitles_user_name' in input_dict:
                autosubliminal.OPENSUBTITLESUSERNAME = input_dict['opensubtitles_user_name']
            if 'opensubtitles_password' in input_dict:
                autosubliminal.OPENSUBTITLESPASSWORD = input_dict['opensubtitles_password']
            if 'legendastv_user_name' in input_dict:
                autosubliminal.LEGENDASTVUSERNAME = input_dict['legendastv_user_name']
            if 'legendastv_password' in input_dict:
                autosubliminal.LEGENDASTVPASSWORD = input_dict['legendastv_password']

            write_config_subliminal_section()
            send_websocket_notification('Subliminal settings updated.')

            return self._no_content()

        return self._bad_request('Invalid data')


class _NameMappingApi(RestResource):
    """
    Rest resource for handling the /api/settings/namemapping path.
    """

    def __init__(self):
        super(_NameMappingApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'PUT')

    def get(self):
        """Get general settings."""
        settings = {
            'show_name_mapping': dict_to_list(autosubliminal.SHOWNAMEMAPPING),
            'addic7ed_show_name_mapping': dict_to_list(autosubliminal.ADDIC7EDSHOWNAMEMAPPING),
            'alternative_show_name_mapping': dict_to_list(autosubliminal.ALTERNATIVESHOWNAMEMAPPING),
            'movie_name_mapping': dict_to_list(autosubliminal.MOVIENAMEMAPPING),
            'alternative_movie_name_mapping': dict_to_list(autosubliminal.ALTERNATIVEMOVIENAMEMAPPING)
        }

        return to_dict(settings, camelize)

    def put(self, namemapping_setting_name=None):
        """Update namemapping settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

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

            write_config_shownamemapping_section()
            write_config_addic7edshownamemapping_section()
            write_config_alternativeshownamemapping_section()
            write_config_movienamemapping_section()
            write_config_alternativemovienamemapping_section()
            send_websocket_notification('Namemapping settings updated.')

            return self._no_content()

        return self._bad_request('Invalid data')


class _SkipMappingApi(RestResource):
    """
    Rest resource for handling the /api/settings/skipmapping path.
    """

    def __init__(self):
        super(_SkipMappingApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'PUT')

    def get(self):
        """Get general settings."""
        settings = {
            'skip_show_mapping': dict_to_list(autosubliminal.SKIPSHOW),
            'skip_movie_mapping': dict_to_list(autosubliminal.SKIPMOVIE),
        }

        return to_dict(settings, camelize)

    def put(self, skipmapping_setting_name=None):
        """Update skipmapping settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        # Single setting update
        if skipmapping_setting_name:
            pass  # not yet implemented
        else:
            # Update all settings
            if 'skip_show_mapping' in input_dict:
                autosubliminal.SKIPSHOW = list_to_dict(input_dict['skip_show_mapping'])
            if 'skip_movie_mapping' in input_dict:
                autosubliminal.SKIPMOVIE = list_to_dict(input_dict['skip_movie_mapping'])

            write_config_skipshow_section()
            write_config_skipmovie_section()
            send_websocket_notification('Skipmapping settings updated.')

            return self._no_content()

        return self._bad_request('Invalid data')


class _PostProcessingApi(RestResource):
    """
    Rest resource for handling the /api/settings/postprocessing path.
    """

    def __init__(self):
        super(_PostProcessingApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'PUT')

    def get(self):
        """Get general settings."""
        settings = {
            'post_process': autosubliminal.POSTPROCESS,
            'post_process_individual': autosubliminal.POSTPROCESSINDIVIDUAL,
            'post_process_utf8_encoding': autosubliminal.POSTPROCESSUTF8ENCODING,
            'show_post_process_cmd': autosubliminal.SHOWPOSTPROCESSCMD,
            'show_post_process_args': autosubliminal.SHOWPOSTPROCESSCMDARGS,
            'movie_post_process_cmd': autosubliminal.MOVIEPOSTPROCESSCMD,
            'movie_post_process_args': autosubliminal.MOVIEPOSTPROCESSCMDARGS
        }

        return to_dict(settings, camelize)

    def put(self, postprocess_setting_name=None):
        """Update postprocessing settings."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

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

            write_config_postprocessing_section()
            send_websocket_notification('Postprocessing settings updated.')

            return self._no_content()

        return self._bad_request('Invalid data')
