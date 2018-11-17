# coding=utf-8

import abc
import logging
import re
from distutils import version

from six import add_metaclass, text_type

try:
    from git import Repo
except ImportError:
    # GitPython throws import error when no git is available on the system
    pass

import autosubliminal
from autosubliminal import system
from autosubliminal.core.enums import InstallType
from autosubliminal.core.scheduler import ScheduledProcess
from autosubliminal.util.common import connect_url, wait_for_internet_connection
from autosubliminal.util.queue import get_wanted_queue_lock, release_wanted_queue_lock, \
    release_wanted_queue_lock_on_exception
from autosubliminal.util.websocket import send_websocket_notification
from autosubliminal.version import RELEASE_VERSION

log = logging.getLogger(__name__)

# Pattern to search for the RELEASE_VERSION (version must be compliant with version.StrictVersion of distutils)
VERSION_PATTERN = r'^RELEASE_VERSION\s*=\s*[\'\"]((\d+)\.(\d+)(\.(\d+))?([ab](\d+))?)[\'\"]$'


class VersionChecker(ScheduledProcess):
    """
    Version checker. Check the running version and update if needed.
    """

    def __init__(self):
        super(VersionChecker, self).__init__()
        try:
            Repo(autosubliminal.PATH)
            self.manager = GitVersionManager()
            self.install_type = InstallType.GIT
        except Exception:
            log.debug('Could not initialize git, falling back to source version check')
            self.manager = SourceVersionManager()
            self.install_type = InstallType.SOURCE

    @release_wanted_queue_lock_on_exception
    def run(self, force_run):
        # Block version check (and update) in no force run mode when another process is using the wanted queue
        # We do not want to auto update the version while the application is busy with another process
        if not force_run and not get_wanted_queue_lock():
            return False

        # Wait for internet connection
        wait_for_internet_connection()

        log.info('Checking version')

        # Check version
        self.manager.check_version(force_run)

        # Release wanted queue lock
        if not force_run:
            release_wanted_queue_lock()

        # Only update and restart when: no force run, update is allowed and auto update is enabled
        if not force_run and self.manager.update_allowed and autosubliminal.CHECKVERSIONAUTOUPDATE:
            self.update()
            # Restart the app with exit of current process to have a clean restart
            system.restart(exit=True)

        # Always return 'True' because we don't want to retry it until the next scheduled run
        return True

    @release_wanted_queue_lock_on_exception
    def update(self):
        log.info('Updating version')

        # Block update when another process is using the wanted queue
        # We do not want to update the version while the application is busy with another process
        if not get_wanted_queue_lock():
            return False

        # Update version
        self.manager.update_version()

        # Release wanted queue lock
        release_wanted_queue_lock()

        return True

    @property
    def current_branch(self):
        return self.manager.current_branch

    @property
    def current_branch_url(self):
        return self.manager.current_branch_url

    @property
    def current_version(self):
        return self.manager.current_version

    @property
    def current_version_url(self):
        return self.manager.current_version_url


@add_metaclass(abc.ABCMeta)
class BaseVersionManager(object):
    """
    Base class for all version manager classes.
    """

    def __init__(self):
        self.update_allowed = False

    @abc.abstractproperty
    def current_branch(self):
        pass

    @abc.abstractproperty
    def current_branch_url(self):
        pass

    @abc.abstractproperty
    def current_version(self):
        pass

    @abc.abstractproperty
    def current_version_url(self):
        pass

    @abc.abstractmethod
    def check_version(self, force_run=False):
        pass

    @abc.abstractmethod
    def update_version(self):
        pass


class SourceVersionManager(BaseVersionManager):
    """
    Source version manager. Used when you have installed from source by downloading it manually from Github.
    """

    def __init__(self):
        super(SourceVersionManager, self).__init__()
        self.current_strict_version = version.StrictVersion(RELEASE_VERSION)

    @property
    def current_branch(self):
        return 'master'

    @property
    def current_branch_url(self):
        return autosubliminal.GITHUBURL + '/tree/' + self.current_branch

    @property
    def current_version(self):
        return RELEASE_VERSION

    @property
    def current_version_url(self):
        return autosubliminal.GITHUBURL + '/releases/tag/' + self.current_version

    def check_version(self, force_run=False):
        # Reset update_allowed flag
        self.update_allowed = False

        # Local version
        local_version = self.current_strict_version
        log.debug('Local version: %s', local_version)

        # Remote github version
        try:
            response = connect_url(autosubliminal.VERSIONURL)
        except Exception:
            log.exception('Could not get remote version from %s', autosubliminal.VERSIONURL)
            return False
        try:
            match = re.search(VERSION_PATTERN, response.text, re.MULTILINE)
            remote_version = version.StrictVersion(match.group(1))
            log.debug('Remote version: %r', remote_version)
        except Exception:
            log.exception('Could not parse version from %s', autosubliminal.VERSIONURL)
            return False

        # Compare versions
        if local_version > remote_version:
            log.info('Unknown version found')
            send_websocket_notification(
                'Unknown version found! '
                'Check <a href=' + autosubliminal.GITHUBURL + '/releases>Github</a> and reinstall!',
                'error', True)
        elif local_version < remote_version:
            log.info('New version found')
            send_websocket_notification(
                'New version found. '
                'Check <a href=' + autosubliminal.GITHUBURL + '/releases>Github</a> and update!',
                'notice', True)
        else:
            log.info('Version up to date')
            # Show info message (only when run was forced manually)
            if force_run:
                send_websocket_notification('You are running the latest version.')

        return True

    def update_version(self):
        log.info('Update version not supported')


class GitVersionManager(BaseVersionManager):
    """
    Git version manager. Used when you have installed from source via Git scm.
    """

    def __init__(self):
        super(GitVersionManager, self).__init__()
        self.repo = Repo(autosubliminal.PATH)
        self.current_git_branch = self.repo.active_branch
        self.current_git_commit = self.repo.head.commit
        self.num_commits_ahead = 0
        self.num_commits_behind = 0

    @property
    def current_branch(self):
        # Get string representation of current git branch
        return text_type(self.current_git_branch)

    @property
    def current_branch_url(self):
        return autosubliminal.GITHUBURL + '/tree/' + self.current_branch

    @property
    def current_version(self):
        # Get string representation of current git commit
        return text_type(self.current_git_commit)

    @property
    def current_version_url(self):
        return autosubliminal.GITHUBURL + '/commit/' + self.current_version

    def clean(self):
        # call git clean to remove all untracked files (only in source and lib folders)
        self.repo.git.execute('git clean -xdf autosubliminal lib web')

    def check_version(self, force_run=False):
        # Reset update_allowed flag
        self.update_allowed = False

        # Local git version
        log.debug('Local branch: %s', self.current_git_branch)
        log.debug('Local commit: %s', self.current_git_commit)
        if self.repo.is_dirty():
            log.warning('Local branch is dirty')

        # Remote git version
        try:
            remote_url = self.repo.remote(name='origin').url
            remote_fetch_info = self.repo.remote().fetch(refspec=self.current_git_branch)[0]
            remote_commit = remote_fetch_info.commit
            log.debug('Remote url: %s', remote_url)
            log.debug('Remote commit: %s', remote_commit)
        except Exception:
            log.exception('Could not get remote git version')
            return False

        # Get number of commits ahead and behind (option --count not supported git < 1.7.2)
        try:
            ahead, behind = self.repo.git.execute('git rev-list --count --left-right HEAD...@{upstream}').split('\t')
            self.num_commits_ahead = int(ahead)
            self.num_commits_behind = int(behind)
        except Exception:
            # Count it ourselves when option --count is not supported
            try:
                output = self.repo.git.execute('git rev-list --left-right HEAD...@{upstream}')
                self.num_commits_ahead = int(output.count('<'))
                self.num_commits_behind = int(output.count('>'))
            except Exception:
                log.exception('Could not get the difference in commits between local and remote branch')
                return False
        log.debug('Number of commits ahead: %s', self.num_commits_ahead)
        log.debug('Number of commits behind: %s', self.num_commits_behind)

        if self.num_commits_ahead > 0:
            log.info('Unknown version found')
            send_websocket_notification(
                'Unknown version found! Check <a href=' + autosubliminal.GITHUBURL +
                '/releases>Github</a> and reinstall!', 'error', True)
        elif self.num_commits_behind > 0:
            log.info('New version found')
            send_websocket_notification(
                'New version found. <a href=' + autosubliminal.WEBROOT + '/system/updateVersion>Update</a>!',
                'notice', True)
            self.update_allowed = True
        else:
            log.info('Version up to date')
            # Show info message (only when run was forced manually)
            if force_run:
                send_websocket_notification('You are running the latest version.')

        return True

    def update_version(self):
        if self.update_allowed:
            try:
                # Do a git clean before and after the update to remove all untracked files
                self.clean()
                self.repo.remote(name='origin').pull()
                self.clean()
                log.info('Updated to the latest version')
                send_websocket_notification('Updated to the latest version.')
            except Exception:
                log.exception('Could not update version')
