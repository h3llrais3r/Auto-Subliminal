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
        self.wanted_item = wanted_item
        self.encoding = 'utf-8' if autosubliminal.POSTPROCESSUTF8ENCODING else sys.getdefaultencoding()
        if wanted_item['type'] == 'episode':
            self.cmd = autosubliminal.SHOWPOSTPROCESSCMD
            self.args = autosubliminal.SHOWPOSTPROCESSCMDARGS.split('|')
        elif wanted_item['type'] == 'movie':
            self.cmd = autosubliminal.MOVIEPOSTPROCESSCMD
            self.args = autosubliminal.MOVIEPOSTPROCESSCMDARGS.split('|')

    def run(self):
        if not self.cmd:
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
        log.debug("%s" % self.cmd)
        process = [self._encode(self.cmd)]
        log.debug("Arguments:")

        # Add optional command arguments if needed
        if self.args:
            for arg in self.args:
                log.debug("%s" % arg)
                process.append(self._encode(arg))
        log.debug("#" * 30)

        # Add encoding argument
        log.debug("%s" % self.encoding)
        process.append(self.encoding)

        # Add video argument from the wanted_item
        video = self.wanted_item['originalFileLocationOnDisk']
        log.debug("%s" % video)
        process.append(self._encode(video))
        # Add subtitle argument from the wanted_item (can be empty if no subtitle was downloaded)
        subtitle = None
        if 'destinationFileLocationOnDisk' in self.wanted_item.keys():
            subtitle = self.wanted_item['destinationFileLocationOnDisk']
        if subtitle:
            log.debug("%s" % subtitle)
            process.append(self._encode(subtitle))

        return process

    def _encode(self, value):
        if self.encoding:
            return value.encode(self.encoding)
        return value
