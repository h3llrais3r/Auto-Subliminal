# coding=utf-8

import logging

import autosubliminal
from autosubliminal.core.item import DownloadItem
from autosubliminal.util.common import get_root_path, run_cmd, safe_trim
from autosubliminal.util.encoding import b2u, s2n

log = logging.getLogger(__name__)


class PostProcessor(object):
    """
    Post Processor.
    It launches the specified command and retrieves the arguments from the wanted_item (or download_item).
    Default arguments passed:
    - encoding
    - video path
    - subtitle path (can be empty, postprocessing is possible without a subtitle)
    - root video path (one of the video paths listed in autosubliminal.VIDEOPATHS, where video path is located in)
    Custom arguments can be added after the default arguments

    :param wanted_item: the :class:`WantedItem` or :class:`DownloadItem` object
    :type wanted_item: WantedItem or DownloadItem
    """

    def __init__(self, wanted_item):
        # Set utf-8 encoding if needed, otherwise use default encoding (normally ascii)
        self._wanted_item = wanted_item
        self._encoding = 'utf-8' if autosubliminal.POSTPROCESSUTF8ENCODING else autosubliminal.SYSENCODING
        if wanted_item.is_episode:
            self._cmd = autosubliminal.SHOWPOSTPROCESSCMD
            self._args = None
            if autosubliminal.SHOWPOSTPROCESSCMDARGS:
                self._args = autosubliminal.SHOWPOSTPROCESSCMDARGS.split('|')
        elif wanted_item.is_movie:
            self._cmd = autosubliminal.MOVIEPOSTPROCESSCMD
            self._args = None
            if autosubliminal.MOVIEPOSTPROCESSCMDARGS:
                self._args = autosubliminal.MOVIEPOSTPROCESSCMDARGS.split('|')

    def run(self):
        if not self._cmd:
            log.debug('No post processor command specified, skipping')
            return True

        log.info('Running post processor')
        process_cmd = self._construct_process_cmd()
        # Check if the post process command could be created
        if not process_cmd:
            return False
        # Execute post process command
        stdout, stderr = run_cmd(process_cmd)
        if stderr:
            self._log_process_output('Post processor failed:\n', stderr, logging.ERROR)
            return False
        self._log_process_output('Post processor output:\n', stdout, logging.DEBUG)

        return True

    def _construct_process_cmd(self):
        try:
            log.debug('#' * 40)
            log.debug('Command:')
            log.debug('%s', self._cmd)
            process = [self._convert_arg(self._cmd)]
            log.debug('Arguments:')

            # Add encoding argument
            log.debug('encoding: %s', self._encoding)
            process.append(self._convert_arg(self._encoding))

            # Add root video path argument
            video_path = self._wanted_item.videopath
            root_path = get_root_path(video_path)
            log.debug('root path: %s', root_path)
            process.append(self._convert_arg(root_path))

            # Add video path argument
            log.debug('video path: %s', video_path)
            process.append(self._convert_arg(video_path))

            # Add subtitle path argument (can be empty if no subtitle was downloaded)
            subtitle_path = self._wanted_item.subtitlepath if isinstance(self._wanted_item, DownloadItem) else None
            log.debug('subtitle path: %s', subtitle_path if subtitle_path else '')
            process.append(self._convert_arg(subtitle_path if subtitle_path else ''))

            # Add optional command arguments if needed
            if self._args:
                for arg in self._args:
                    log.debug('%s', arg)
                    process.append(self._convert_arg(arg))
            log.debug('#' * 40)
        except UnicodeEncodeError:
            log.debug('#' * 40)
            log.exception('Cannot convert post processor parameters in %s, please enable utf-8 encoding!',
                          self._encoding)
            process = None

        return process

    def _convert_arg(self, arg):
        # Arguments should be sent in native strings (validate if the args can be sent in the specified encoding)
        return s2n(arg, encoding=self._encoding, validate=True)

    def _log_process_output(self, message, output, log_level):
        # Process output is always in bytes
        # We expect the encoding of the output to be the same as the encoding we used
        try:
            output_u = safe_trim(b2u(output, encoding=self._encoding))
            log.log(log_level, '%s%s', message, output_u)
        except Exception:
            log.exception('Unable to log process output')
