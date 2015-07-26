import logging
import sys

import autosubliminal
from autosubliminal import utils

log = logging.getLogger(__name__)


class PostProcessor(object):
    """
    Post Processor. It launches the specified command and retrieves the arguments from the download_dict.
    Additionally, arguments and the encoding (for command and arguments) can be specified.
    """

    def __init__(self, download_dict):
        # Set utf-8 encoding if needed, otherwise use default encoding (normally ascii)
        self.download_dict = download_dict
        self.encoding = 'utf-8' if autosubliminal.POSTPROCESSUTF8ENCODING else sys.getdefaultencoding()
        if download_dict['type'] == 'episode':
            self.cmd = autosubliminal.SHOWPOSTPROCESSCMD
            self.args = autosubliminal.SHOWPOSTPROCESSCMDARGS
        elif download_dict['type'] == 'movie':
            self.cmd = autosubliminal.MOVIEPOSTPROCESSCMD
            self.args = autosubliminal.MOVIEPOSTPROCESSCMDARGS

    def run(self):
        if not self.cmd:
            log.debug("No post processor command specified, skipping")
            return True

        log.info("Running post processor")
        process_cmd = self._constuct_process_cmd()
        stdout, stderr = utils.run_cmd(process_cmd)
        if stderr:
            log.error("Post processor failed: %s" % stderr)
            return False
        log.debug("Post processor output:% s" % stdout)
        return True

    def _constuct_process_cmd(self):
        log.debug("#" * 30)
        log.debug("Command:")
        log.debug("%s" % self.cmd)
        process = [self._encode(self.cmd)]
        log.debug("Arguments:")

        # Add the encoding
        log.debug("%s" % self.encoding)
        process.append(self.encoding)

        # Add the default arguments (episode and subtitle) from the download_dict
        episode = self.download_dict['originalFileLocationOnDisk']
        subtitle = self.download_dict['destinationFileLocationOnDisk']
        log.debug("%s" % episode)
        process.append(self._encode(episode))
        log.debug("%s" % subtitle)
        process.append(self._encode(subtitle))

        # Add additional arguments if needed
        if self.args:
            for arg in self.args:
                log.debug("%s" % arg)
                process.append(self._encode(arg))
        log.debug("#" * 30)
        return process

    def _encode(self, value):
        if self.encoding:
            return value.encode(self.encoding)
        return value