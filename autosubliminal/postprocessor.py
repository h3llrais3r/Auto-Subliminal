# coding=utf-8

import logging
from typing import AnyStr, List, Optional

import autosubliminal
from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.util.common import get_root_path, run_cmd, safe_trim
from autosubliminal.util.encoding import b2u, s2u

log = logging.getLogger(__name__)


class PostProcessor(object):
    """
    Post Processor.
    It launches the specified command and retrieves the arguments from the wanted_item (or download_item).
    Default arguments passed:
    - encoding
    - root video path (one of the video paths listed in autosubliminal.VIDEOPATHS, where video path is located in)
    - video path (full video path)
    - subtitle path (full subtitle path, can be empty when postprocessing is done without a subtitle)
    - library path (library path, can be empty when the video path is not located inside a library path)
    Custom arguments can be added after the default arguments

    :param wanted_item: the :class:`WantedItem` or :class:`DownloadItem` object
    :type wanted_item: WantedItem or DownloadItem
    """

    def __init__(self, wanted_item: WantedItem) -> None:
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

    def run(self) -> bool:
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

    def _construct_process_cmd(self) -> Optional[List[str]]:
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
            video_path = self._wanted_item.video_path
            root_path = get_root_path(video_path)
            log.debug('root path: %s', root_path)
            process.append(self._convert_arg(root_path))

            # Add video path argument
            log.debug('video path: %s', video_path)
            process.append(self._convert_arg(video_path))

            # Add subtitle path argument (can be empty if no subtitle was downloaded)
            subtitle_path = self._wanted_item.subtitle_path if isinstance(self._wanted_item, DownloadItem) else None
            subtitle_path = subtitle_path if subtitle_path else ''  # check because it can be empty on DownloadItem
            log.debug('subtitle path: %s', subtitle_path)
            process.append(self._convert_arg(subtitle_path))

            # Add library path argument
            # Do not use single statement below to prevent double call to get the library_path!
            # library_path = self._wanted_item.library_path if self._wanted_item.library_path else ''
            library_path = self._wanted_item.library_path
            library_path = library_path if library_path else ''
            log.debug('library path: %s', library_path)
            process.append(self._convert_arg(library_path))

            # Add custom command arguments if needed
            if self._args:
                log.debug('Custom arguments:')
                for arg in self._args:
                    log.debug('%s', arg)
                    process.append(self._convert_arg(arg))
            log.debug('#' * 40)
        except UnicodeEncodeError:
            log.debug('#' * 40)
            log.exception(
                'Cannot convert post processor parameters in %s, please enable utf-8 encoding!', self._encoding
            )
            process = None

        return process

    def _convert_arg(self, arg: AnyStr) -> str:
        # Arguments should be sent as string values (validate if the args can be sent in the specified encoding)
        return s2u(arg, encoding=self._encoding, validate=True)

    def _log_process_output(self, message: str, output: bytes, log_level: int) -> None:
        # Process output is always in bytes
        # We expect the encoding of the output to be the same as the encoding we used
        try:
            output_u = safe_trim(b2u(output, encoding=self._encoding))
            log.log(log_level, '%s%s', message, output_u)
        except Exception:
            log.exception('Unable to log process output')
