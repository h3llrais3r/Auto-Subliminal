import logging

from autosubliminal import utils


log = logging.getLogger(__name__)


class PostProcessor():
    """
    Post Processor. It launches the specified command and retrieves the arguments from the download_dict.
    Additionally, some optional arguments can be passed.
    """

    def __init__(self, cmd, download_dict, args=None):
        self.cmd = cmd
        self.download_dict = download_dict
        self.args = args

    def run(self):
        process_cmd = self._constuct_process_cmd()
        stdout, stderr = utils.run_cmd(process_cmd)
        if stderr:
            log.error("PostProcessor failed: %s" % stderr)
        log.debug("PostProcessor output:% s" % stdout)

    def _constuct_process_cmd(self):
        log.info("Running postprocessor:")
        log.info("Command: %s" % self.cmd)
        process = [self.cmd]
        log.info("Arguments:")

        # Add the default arguments from the download_dict
        process.append(self.download_dict['destinationFileLocationOnDisk'])
        log.info("%s" % self.download_dict['destinationFileLocationOnDisk'])
        process.append(self.download_dict['originalFileLocationOnDisk'])
        log.info("%s" % self.download_dict['originalFileLocationOnDisk'])

        # Check for additional arguments
        if self.args:
            for arg in self.args:
                log.info("%s" % arg)
                process.append(arg)
        return process