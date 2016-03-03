import abc
import logging
import re
import threading
import traceback
import urllib2

from distutils import version
from git import Repo

import autosubliminal
from autosubliminal import utils
from autosubliminal.scheduler import Process
from autosubliminal.version import RELEASE_VERSION

log = logging.getLogger(__name__)


class VersionChecker(Process):
    """
    Version checker. Check if you are running the latest version.
    """

    def __init__(self):
        super(VersionChecker, self).__init__()
        self._set_updater()

    def _set_updater(self):
        try:
            Repo(autosubliminal.PATH)
            self.updater = GitUpdater()
        except:
            log.debug("Could not initialize git, falling back to source version check")
            self.updater = SourceUpdater()

    def run(self, force_run):
        log.info("Checking version")
        self.updater.check_version(force_run)
        # Only update and restart when: no force run, update is allowed and auto update is enabled
        if not force_run and self.updater.update_allowed and autosubliminal.CHECKVERSIONAUTOUPDATE:
            self.updater.update()
            threading.Thread(target=autosubliminal.runner.restart).start()
        # Always return 'True' because we don't want to retry it until the next scheduled run
        return True

    def update(self):
        log.info("Updating version")
        self.updater.update()


class BaseUpdater(object):
    """
    Base class for all updater classes.
    """

    def __init__(self):
        self.update_allowed = False

    @abc.abstractmethod
    def check_version(self, force_run=False):
        pass

    @abc.abstractmethod
    def update(self):
        pass


class SourceUpdater(BaseUpdater):
    """
    Source updater. Used when you have installed the application from source by downloading it manually from Github.
    """

    def __init__(self):
        super(SourceUpdater, self).__init__()

    def check_version(self, force_run=False):
        # Reset update_allowed flag
        self.update_allowed = False

        # Local version
        local_version = version.StrictVersion(RELEASE_VERSION)
        log.debug("Local version: %s" % local_version)

        # Remote github version
        try:
            req = urllib2.Request(autosubliminal.VERSIONURL)
            req.add_header("User-agent", autosubliminal.USERAGENT)
            resp = urllib2.urlopen(req, None, autosubliminal.TIMEOUT)
            response = resp.read()
            resp.close()
        except:
            log.error("Could not get remote version from %s" % autosubliminal.VERSIONURL)
            return False
        try:
            match = re.search('(\d+)\.(\d+)\.(\d+)', response)
            remote_version = version.StrictVersion(match.group(0))
            log.debug("Remote version: %s" % remote_version)
        except:
            log.error("Could not parse version from %s" % autosubliminal.VERSIONURL)
            return False

        # Compare versions
        if local_version > remote_version:
            log.info("Unknown version found")
            utils.add_notification_message(
                "Unknown version found! Check <a href="
                + autosubliminal.GITHUBURL + "/releases>Github</a> and reinstall!",
                "error", True)
        elif local_version < remote_version:
            log.info("New version found")
            utils.add_notification_message(
                "New version found! Check <a href=" + autosubliminal.GITHUBURL + "/releases>Github</a> and update!",
                "notice", True)
        else:
            log.info("Version up to date")
            # Show info message (only when run was forced manually)
            if force_run:
                utils.add_notification_message("You are running the latest version")

        return True

    def update(self):
        log.info("Update version not supported")


class GitUpdater(BaseUpdater):
    """
    Git updater. Used when you have installed the application from source via Git scm.
    """

    def __init__(self):
        super(GitUpdater, self).__init__()
        self.repo = Repo(autosubliminal.PATH)
        self.branch = self.repo.active_branch
        self.num_commits_ahead = 0
        self.num_commits_behind = 0

    def check_version(self, force_run=False):
        # Reset update_allowed flag
        self.update_allowed = False

        # Local git version
        try:
            local_commit = self.repo.head.commit
            log.debug("Local branch: %s" % self.branch)
            log.debug("Local commit: %s" % local_commit)
            if self.repo.is_dirty():
                log.warning("Local branch is dirty")
        except:
            log.error("Could not get local git version")
            return False

        # Remote git version
        try:
            remote_url = self.repo.remote(name='origin').url
            remote_fetch_info = self.repo.remote().fetch(refspec=self.branch)[0]  # Only fetch current branch
            remote_commit = remote_fetch_info.commit
            log.debug("Remote url: %s" % remote_url)
            log.debug("Remote commit: %s" % remote_commit)
        except:
            log.error("Could not get remote git version")
            return False

        # Get number of commits ahead and behind (option --count not supported git < 1.7.2)
        try:
            ahead, behind = self.repo.git.execute('git rev-list --count --left-right HEAD...@{upstream}').split('\t')
            self.num_commits_ahead = int(ahead)
            self.num_commits_behind = int(behind)
        except:
            # Count it ourselves when option --count is not supported
            try:
                output = self.repo.git.execute('git rev-list --left-right HEAD...@{upstream}')
                self.num_commits_ahead = int(output.count('<'))
                self.num_commits_behind = int(output.count('>'))
            except:
                log.error("Could not get the difference in commits between local and remote branch")
                return False
        log.debug("Number of commits ahead: %s" % self.num_commits_ahead)
        log.debug("Number of commits behind: %s" % self.num_commits_behind)

        if self.num_commits_ahead > 0:
            log.info("Unknown version found")
            utils.add_notification_message(
                "Unknown version found! Check <a href=" + autosubliminal.GITHUBURL +
                "/releases>Github</a> and reinstall!", "error", True)
        elif self.num_commits_behind > 0:
            log.info("New version found")
            utils.add_notification_message(
                "New version found! <a href=" + autosubliminal.WEBROOT + "/config/updateVersion>Update</a>",
                "notice", True)
            self.update_allowed = True
        else:
            log.info("version up to date")
            # Show info message (only when run was forced manually)
            if force_run:
                utils.add_notification_message("You are running the latest version")

        return True

    def update(self):
        if self.update_allowed:
            try:
                self.repo.remote(name='origin').pull()
                log.info("Updated to the latest version")
                utils.add_notification_message("Updated to the latest version")
            except:
                log.error("Could not update version: %s" % traceback.format_exc())
