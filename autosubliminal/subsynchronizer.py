# coding=utf-8

import logging
import os

from ffsubsync.ffsubsync import make_parser, run

import autosubliminal

log = logging.getLogger(__name__)


class SubSynchronizer(object):
    """
    Subtitle synchronizer.

    :param wanted_item: the :class:`WantedItem`object
    :type wanted_item: WantedItem
    """

    def __init__(self):
        self._log_dir_path = os.path.dirname(autosubliminal.LOGFILE)
        try:
            import webrtcvad
        except ImportError:
            self._vad = 'subs_then_auditok'
        else:
            self._vad = 'subs_then_webrtc'

    def run(self, video_path, subtitle_path):
        """
        Synchronize the subtitle with the video.
        """

        log.info('Running sub synchronizer')
        if not os.path.isdir(autosubliminal.FFMPEGPATH) or not os.path.isfile(
                os.path.join(autosubliminal.FFMPEGPATH, 'ffmpeg')):
            log.error('FFMPEG not found')
            return False
        else:
            try:
                unparsed_args = [
                    video_path, '-i', subtitle_path, '-o', os.path.splitext(subtitle_path)[0] + '.synced.srt',
                    '--ffmpegpath', autosubliminal.FFMPEGPATH, '--vad', self._vad, '--log-dir-path', self._log_dir_path]
                parser = make_parser()
                args = parser.parse_args(args=unparsed_args)
                sync_result = run(args)
                log.debug('Subtitle synchronization result: %s', sync_result)
                return True
            except Exception:
                log.exception('Error while synchronizing subtitle: %s', subtitle_path)
                return True
