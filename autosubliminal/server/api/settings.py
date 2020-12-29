# coding=utf-8

import os

import cherrypy

import autosubliminal
from autosubliminal.config import write_config_general_section
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize, decamelize, find_path_in_paths, to_dict
from autosubliminal.util.websocket import send_websocket_notification


class SettingsApi(RestResource):
    """
    Rest resource for handling the /api/settings path.
    """

    def __init__(self):
        super(SettingsApi, self).__init__()

        # Add all sub paths here: /api/settings/...
        self.general = _GeneralApi()


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
