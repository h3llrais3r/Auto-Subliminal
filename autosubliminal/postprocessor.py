import logging
import sys

from autosubliminal import utils

log = logging.getLogger(__name__)


class PostProcessor():
    """
    Post Processor. It launches the specified command and retrieves the arguments from the download_dict.
    Additionally, some optional arguments and the encoding (for command and arguments) can be passed.
    """

    def __init__(self, utf8encoding, cmd, download_dict, args=None):
        # Set utf-8 encoding if needed, otherwise use default encoding (normally ascii)
        self.encoding = 'utf-8' if utf8encoding else sys.getdefaultencoding()
        self.cmd = cmd
        self.args = args
        self.download_dict = download_dict

    def run(self):
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
        log.debug("Encoding value in %s" % self.encoding)
        if self.encoding:
            return value.encode(self.encoding)
        return value