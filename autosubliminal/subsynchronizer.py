# coding=utf-8

import logging
import os
import platform
from typing import Any, Dict, Optional

from ffsubsync import ffsubsync

import autosubliminal

log = logging.getLogger(__name__)


class SubSynchronizer(object):
    """
    Subtitle synchronizer.

    :param wanted_item: the :class:`WantedItem`object
    :type wanted_item: WantedItem
    """

    def __init__(self) -> None:
        self._log_dir_path = autosubliminal.PATH
        try:
            import webrtcvad
        except ImportError:
            self._vad = 'subs_then_auditok'
        else:
            self._vad = 'subs_then_webrtc'

    def run(self, subtitle_path: str, reference_file_path: str) -> Optional[Dict[str, Any]]:
        """
        Synchronize the subtitle with a reference file (video file or other subtitle file).
        """

        log.info('Running sub synchronizer')
        ffmpeg_executable = os.path.join(autosubliminal.FFMPEGPATH, 'ffmpeg')
        if platform.system() == 'Windows':
            ffmpeg_executable = os.path.join(autosubliminal.FFMPEGPATH, 'ffmpeg.exe')
        if not autosubliminal.FFMPEGPATH or not os.path.isfile(ffmpeg_executable):
            log.error('FFMPEG executable not found')
            return None
        else:
            result = None
            synced_subtitle_path: str = None
            try:
                synced_subtitle_path = os.path.splitext(subtitle_path)[0] + '.synced.srt'
                unparsed_args = [
                    reference_file_path,
                    '--srtin',
                    subtitle_path,
                    '--srtout',
                    synced_subtitle_path,
                    '--output-encoding',
                    'same',
                    '--ffmpegpath',
                    autosubliminal.FFMPEGPATH,
                    '--vad',
                    self._vad,
                    '--log-dir-path',
                    self._log_dir_path,  # TODO: check if we can omit this and log in our logs instead
                ]
                parser = ffsubsync.make_parser()
                args = parser.parse_args(args=unparsed_args)
                sync_result = ffsubsync.run(args)
                log.info('Subtitle synchronization result: %s', sync_result)
                if 'sync_was_successful' in sync_result and sync_result['sync_was_successful'] is True:
                    # Convert to float as it's a numpy float which gives issues when converting to json
                    offset_in_seconds = sync_result['offset_seconds'] or 0
                    framerate_scale_factor = sync_result['framerate_scale_factor'] or 0
                    result = {
                        'synced_subtitle_path': synced_subtitle_path,
                        'offset_in_seconds': float(offset_in_seconds),
                        'framerate_scale_factor': float(framerate_scale_factor),
                    }
                    return result
                else:
                    log.error('Error while synchronizing subtitle: %s', subtitle_path)
                    return None
            except Exception:
                log.exception('Error while synchronizing subtitle: %s', subtitle_path)
                return None
            finally:
                # Make sure to delete the synced subtitle path if the synchronization was not sucessful
                if not result and synced_subtitle_path and os.path.isfile(synced_subtitle_path):
                    os.remove(synced_subtitle_path)
