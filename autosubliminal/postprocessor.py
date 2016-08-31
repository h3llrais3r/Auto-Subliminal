import logging
import sys

import autosubliminal
from autosubliminal import utils

log = logging.getLogger(__name__)


class PostProcessor(object):
    """
    Post Processor.
    It launches the specified command and retrieves the arguments from the wanted_item (or download_item).
    Additionally, arguments and the encoding (for command and arguments) can be specified.
    """

    def __init__(self, wanted_item):
        # Set utf-8 encoding if needed, otherwise use default encoding (normally ascii)
        self._wanted_item = wanted_item
        self._encoding = 'utf-8' if autosubliminal.POSTPROCESSUTF8ENCODING else sys.getdefaultencoding()
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
            log.debug("No post processor command specified, skipping")
            return True

        log.info("Running post processor")
        process_cmd = self._construct_process_cmd()
        stdout, stderr = utils.run_cmd(process_cmd)
        if stderr:
            log.error("Post processor failed: %s" % stderr)
            return False
        log.debug("Post processor output:% s" % stdout)
        return True

    def _construct_process_cmd(self):
        log.debug("#" * 30)
        log.debug("Command:")
        log.debug("%s" % self._cmd)
        process = [self._encode(self._cmd)]
        log.debug("Arguments:")

        # Add optional command arguments if needed
        if self._args:
            for arg in self._args:
                log.debug("%s" % arg)
                process.append(self._encode(arg))

        # Add encoding argument
        log.debug("%s" % self._encoding)
        process.append(self._encoding)

        # Add video argument from the wanted_item
        video = self._wanted_item['videopath']
        log.debug("%s" % video)
        process.append(self._encode(video))
        # Add subtitle argument from the wanted_item (can be empty if no subtitle was downloaded)
        subtitle = None
        if 'destinationFileLocationOnDisk' in self._wanted_item.keys():
            subtitle = self._wanted_item['destinationFileLocationOnDisk']
        if subtitle:
            log.debug("%s" % subtitle)
            process.append(self._encode(subtitle))
        log.debug("#" * 30)

        return process

    def _encode(self, value):
        if self._encoding:
            return value.encode(self._encoding)
        return value
