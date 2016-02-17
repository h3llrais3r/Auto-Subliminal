import logging
import re
import urllib2

from distutils import version

import autosubliminal
from autosubliminal import utils
from autosubliminal.scheduler import Process
from autosubliminal.version import RELEASE_VERSION

log = logging.getLogger(__name__)


class VersionChecker(Process):
    """
    Version checker.
    """

    def __init__(self):
        super(VersionChecker, self).__init__()
        self.latest = False

    def run(self):
        return self.check_version()

    def check_version(self):
        """
        Check version

        Return values:
        0 Same version
        1 New version
        """
        log.info('Checking version')
        try:
            req = urllib2.Request(autosubliminal.VERSIONURL)
            req.add_header("User-agent", autosubliminal.USERAGENT)
            resp = urllib2.urlopen(req, None, autosubliminal.TIMEOUT)
            response = resp.read()
            resp.close()
        except:
            log.error("The server returned an error for request %s" % autosubliminal.VERSIONURL)
            return False
        try:
            match = re.search('(\d+)\.(\d+)\.(\d+)', response)
            git_version = match.group(0)
        except:
            log.error("Unable to parse version from response")
            return False

        running_version = version.StrictVersion(RELEASE_VERSION)
        online_version = version.StrictVersion(git_version)

        log.info('Running version: %s' % running_version)
        log.info('Git version: %s' % online_version)

        if running_version < online_version:
            self.latest = False
            utils.add_notification_message(
                "A new version is available! Visit <a href=" + autosubliminal.GITHUBURL + "/releases>Github</a>.",
                "notice", True)
        else:
            self.latest = True
            utils.add_notification_message("You are running the latest version")

        return True
