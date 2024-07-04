# coding=utf-8

import logging
import os
import shutil
from typing import Any, Dict, Optional

import cherrypy

from autosubliminal.server.rest import RestResource
from autosubliminal.subsynchronizer import SubSynchronizer
from autosubliminal.util.common import camelize, decamelize, to_dict

log = logging.getLogger(__name__)


class SubtitlesApi(RestResource):
    """
    Rest resource for handling the /api/subtitles path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/subtitles/...
        self.synchronization = _SynchronizationApi()

        # Set the allowed methods
        self.allowed_methods = ['PATCH']


class _SynchronizationApi(RestResource):
    """
    Rest resource for handling the /api/subtitles/synchronization path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['PATCH']

    def patch(self) -> Optional[Dict[str, Any]]:
        """Patch actions related to subtitle synchronization."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if 'action' in input_dict:
            action = input_dict['action']

            # Synchronize subtitle with a reference file
            if action == 'sync' and all(k in input_dict for k in ('subtitle_path', 'reference_file_path')):
                subtitle_path = input_dict['subtitle_path']
                reference_file_path = input_dict['reference_file_path']
                sync_result = SubSynchronizer().run(subtitle_path, reference_file_path)
                if sync_result:
                    return to_dict(sync_result, camelize)
                else:
                    self._raise_conflict('Unable to sync the subtitle')

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
                    self._set_no_content_status()
                    return None
                except Exception:
                    log.error('Unable to save the synced subtitle as %s' % subtitle_path)
                    self._raise_conflict('Unable to save the synced subtitle')

            # Delete a synced subtitle
            elif action == 'delete' and 'synced_subtitle_path' in input_dict:
                try:
                    os.remove(input_dict['synced_subtitle_path'])
                    self._set_no_content_status()
                    return None
                except Exception:
                    self._raise_conflict('Unable to delete the synced subtitle')

            self._raise_bad_request("Invalid action '%s'" % action)

        self._raise_bad_request('Missing data')
