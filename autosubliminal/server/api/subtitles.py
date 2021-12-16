# coding=utf-8

import logging
import os
import shutil

import cherrypy

from autosubliminal.server.rest import RestResource
from autosubliminal.subsynchronizer import SubSynchronizer
from autosubliminal.util.common import camelize, decamelize, to_dict

log = logging.getLogger(__name__)


class SubtitlesApi(RestResource):
    """
    Rest resource for handling the /api/subtitles path.
    """

    def __init__(self):
        super().__init__()

        # Add all sub paths here: /api/shows/...
        self.synchronization = _SynchronizationApi()

        # Set the allowed methods
        self.allowed_methods = ('PATCH',)


class _SynchronizationApi(RestResource):
    """
    Rest resource for handling the /api/subtitles/synchronization path.
    """

    def __init__(self):
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ('PATCH',)

    def patch(self):
        """Sync a video subtitle."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if 'action' in input_dict:
            action = input_dict['action']

            # Synchronize video subtitle
            if action == 'sync' and all(k in input_dict for k in ('video_path', 'subtitle_path')):
                video_path = input_dict['video_path']
                subtitle_path = input_dict['subtitle_path']
                sync_result = SubSynchronizer().run(video_path, subtitle_path)
                if sync_result:
                    return to_dict(sync_result, camelize)
                else:
                    return self._conflict('Unable to sync the subtitle')

            # Save a synced subtitle (replace the original one by the synced one)
            elif action == 'save' and all(k in input_dict for k in ('subtitle_path', 'synced_subtitle_path', 'backup')):
                subtitle_path = input_dict['subtitle_path']
                synced_subtitle_path = input_dict['synced_subtitle_path']
                # Make backup of original if needed
                try:
                    if input_dict['backup'] is True:
                        backup_subtitle_path = os.path.splitext(subtitle_path)[0] + '.original.srt'
                        shutil.copy(subtitle_path, backup_subtitle_path)
                except Exception:
                    log.error('Unable to make backup of subtitle: %s' % subtitle_path)
                # Save synced
                try:
                    shutil.move(synced_subtitle_path, subtitle_path)
                    return self._no_content()
                except Exception:
                    log.error('Unable to save the synced subtitle as %s' % subtitle_path)
                    return self._conflict('Unable to save the synced subtitle')

            # Delete a subtitle
            elif action == 'delete' and 'subtitle_path' in input_dict:
                try:
                    os.remove(input_dict['subtitle_path'])
                    return self._no_content()
                except Exception:
                    return self._conflict('Unable to delete the subtitle')

            return self._bad_request('Invalid action \'%s\'' % action)

        return self._bad_request('Missing data')
