# coding=utf-8

import logging
import sys

import autosubliminal
from autosubliminal import utils

log = logging.getLogger(__name__)


class PostProcessor(object):
    """
    Post Processor.
    It launches the specified command and retrieves the arguments from the wanted_item (or download_item).
    Default arguments passed:
    - encoding
    - video_path
    - subtitle_path (can be empty, postprocessing is possible without a subtitle)
    Custom arguments can be added after the default arguments
    """

    def __init__(self, wanted_item):
        # Set utf-8 encoding if needed, otherwise use default encoding (normally ascii)
        self._wanted_item = wanted_item
        self._encoding = 'utf-8' if autosubliminal.POSTPROCESSUTF8ENCODING else autosubliminal.SYSENCODING
        if wanted_item['type'] == 'episode':
            self._cmd = autosubliminal.SHOWPOSTPROCESSCMD
            self._args = None
            if autosubliminal.SHOWPOSTPROCESSCMDARGS:
                self._args = autosubliminal.SHOWPOSTPROCESSCMDARGS.split('|')
        elif wanted_item['type'] == 'movie':
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
        stdout, stderr = utils.run_cmd(process_cmd)
        if stderr:
            self._log_process_output('Post processor failed:\n%s' % utils.safe_trim(stderr), logging.ERROR)
            return False
        self._log_process_output('Post processor output:\n%s' % utils.safe_trim(stdout), logging.DEBUG)

        return True

    def _construct_process_cmd(self):
        try:
            log.debug('#' * 30)
            log.debug('Command:')
            log.debug('%s' % self._cmd)
            process = [self._encode(self._cmd)]
            log.debug('Arguments:')

            # Add encoding argument
            log.debug('encoding: %s' % self._encoding)
            process.append(self._encoding)

            # Add video argument from the wanted_item
            video = self._wanted_item['videopath']
            log.debug('video path: %s' % video)
            process.append(self._encode(video))
            # Add subtitle argument from the wanted_item (can be empty if no subtitle was downloaded)
            subtitle = None
            if 'destinationFileLocationOnDisk' in self._wanted_item.keys():
                subtitle = self._wanted_item['destinationFileLocationOnDisk']
            log.debug('subtitle path: %s' % subtitle if subtitle else '')
            process.append(self._encode(subtitle if subtitle else ''))

            # Add optional command arguments if needed
            if self._args:
                for arg in self._args:
                    log.debug('%s' % arg)
                    process.append(self._encode(arg))
            log.debug('#' * 30)
        except UnicodeEncodeError:
            log.debug('#' * 30)
            log.error('Cannot encode command parameters in %s, please enable utf-8 encoding!' % self._encoding)
            process = None

        return process

    def _encode(self, value):
        if self._encoding:
            return value.encode(self._encoding)
        return value

    def _log_process_output(self, output, log_level):
        # We expect the encoding of the output to be the same as the encoding we used (but we log in utf-8)
        if self._encoding.lower() == 'utf-8':
            log.log(log_level, output)
        else:
            # Decode first from used encoding and encode back to utf-8
            log.log(log_level, output.decode(self._encoding).encode('utf-8'))
