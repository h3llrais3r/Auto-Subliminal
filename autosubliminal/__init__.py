# coding=utf-8

import filecmp
import logging
import os
import re
import shutil
import site
import stat
import subprocess
import sys
import sysconfig
from pathlib import Path
from typing import Any, Callable, Dict, List, Optional, Union

from stevedore import ExtensionManager
from ws4py.server.cherrypyserver import WebSocketPlugin

from autosubliminal.core.indexer import MovieIndexer, ShowIndexer
from autosubliminal.core.item import WantedItem
from autosubliminal.core.scheduler import Scheduler
from autosubliminal.core.websocket import WebSocketBroadCaster
from autosubliminal.version import RELEASE_VERSION

# Variables to handle dependencies installation in virtual environment (custom or internal one)
SOURCE_PATH = Path(__file__).parent.parent.resolve()
IN_VENV = hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix)

# Startup
EXECUTABLE: str = ''
ARGS: List[str] = []
SYSENCODING: str = ''
DAEMON: bool = False
STARTED: bool = False
PID: int = 0

# System
PATH: str = ''
CACHEDIR: str = ''
DEREFERURL = 'https://dereferer.me/?'
GITHUBURL = 'https://github.com/h3llrais3r/Auto-Subliminal'
VERSIONURL = 'https://raw.github.com/h3llrais3r/Auto-Subliminal/master/autosubliminal/version.py'
USERAGENT = 'Auto-Subliminal/' + RELEASE_VERSION
TIMEOUT = 300
WANTEDQUEUE: List[WantedItem] = []
WANTEDQUEUELOCK: bool = False
WEBSOCKETPLUGIN: WebSocketPlugin = None
WEBSOCKETMESSAGEQUEUE: List[Any] = []
WEBSOCKETBROADCASTER: WebSocketBroadCaster = None
SCHEDULERS: Dict[str, Scheduler] = {}
SCANDISK: Scheduler = None
SCANLIBRARY: Scheduler = None
CHECKSUB: Scheduler = None
CHECKVERSION: Scheduler = None

# Developer
DEVELOPER: bool = False

# Indexers
TVDBAPIKEY = '76F2D5362F45C5EC'
TVDBURL = 'http://thetvdb.com/?tab=series&id='
IMDBURL = 'http://www.imdb.com/title/'
SHOWINDEXER: ShowIndexer
MOVIEINDEXER: MovieIndexer

# Db
DBFILE = 'database.db'
DBTIMESTAMPFORMAT = '%Y-%m-%d %H:%M:%S'
DBVERSION: int = 1

# Config
CONFIGFILE: str = 'config.properties'
CONFIGVERSION: int = 1
CONFIGUPGRADED: bool = False

# General config section
VIDEOPATHS: List[str] = []
DEFAULTLANGUAGE: str = 'en'
DEFAULTLANGUAGESUFFIX: bool = False
ADDITIONALLANGUAGES: List[str] = []
MANUALSEARCHWITHSCORING: bool = True
SCANDISKINTERVALDEFAULT: int = 1  # hours
SCANDISKINTERVAL: int = 1  # hours
SCANDISKATSTARTUP: bool = True
CHECKSUBINTERVALDEFAULT: int = 6  # hours
CHECKSUBINTERVAL: int = 24  # hours
CHECKSUBATSTARTUP: bool = True
CHECKSUBDEADLINEDEFAULT: int = 1  # weeks
CHECKSUBDEADLINE: int = 4  # weeks
CHECKSUBDELTADEFAULT: int = 1  # days
CHECKSUBDELTA: int = 7  # days
CHECKVERSIONINTERVALDEFAULT: int = 1  # hours
CHECKVERSIONINTERVAL: int = 12  # hours
CHECKVERSIONATSTARTUP: bool = True
CHECKVERSIONAUTOUPDATE: bool = False
SCANEMBEDDEDSUBS: bool = False
SCANHARDCODEDSUBS: bool = False
SKIPHIDDENDIRS: bool = False
DETECTINVALIDSUBLANGUAGE: bool = False
DETECTEDLANGUAGEPROBABILITY: float = 0.9
MANUALSUBSYNC: bool = False
FFMPEGPATH: str = ''
MINVIDEOFILESIZE: int = 0  # MB
MAXDBRESULTS: int = 0
TIMESTAMPFORMAT: str = '%Y-%m-%d %H:%M:%S'

# Library config section
LIBRARYMODE: bool = False
LIBRARYPATHS: List[str] = []
SCANLIBRARYINTERVALDEFAULT: int = 24  # hours
SCANLIBRARYINTERVAL: int = 24  # hours
SCANLIBRARYATSTARTUP = True
LIBRARYEDITMODE: bool = False

# Logfile config section
LOGFILE: str = 'AutoSubliminal.log'
LOGLEVEL: int = logging.INFO
LOGNUM: int = 0
LOGSIZE: int = 0  # MB
LOGHTTPACCESS: bool = False
LOGEXTERNALLIBS: bool = False
LOGDETAILEDFORMAT: bool = False
LOGREVERSED: bool = False
LOGLEVELCONSOLE: int = logging.ERROR

# Webserver config section
WEBSERVERIP: str = '0.0.0.0'
WEBSERVERPORT: int = 8083
WEBROOT: str = ''
USERNAME: str = ''
PASSWORD: str = ''
LAUNCHBROWSER: bool = True

# Subliminal config section
SHOWMINMATCHSCOREDEFAULT: int = 0
SHOWMINMATCHSCORE: int = 0
SHOWMATCHSOURCE: bool = False
SHOWMATCHQUALITY: bool = False
SHOWMATCHCODEC: bool = False
SHOWMATCHRELEASEGROUP: bool = False
MOVIEMINMATCHSCOREDEFAULT: int = 0
MOVIEMINMATCHSCORE: int = 0
MOVIEMATCHSOURCE: bool = False
MOVIEMATCHQUALITY: bool = False
MOVIEMATCHCODEC: bool = False
MOVIEMATCHRELEASEGROUP: bool = False
SUBLIMINALPROVIDERMANAGER: ExtensionManager = None
SUBLIMINALPROVIDERS: List[str] = []
SUBLIMINALPROVIDERCONFIGS: Dict[str, dict] = {}
SUBTITLEUTF8ENCODING: bool = False
MANUALREFINEVIDEO: bool = False
REFINEVIDEO: bool = False
PREFERHEARINGIMPAIRED: bool = False
ANTICAPTCHACLASS: str = ''
ANTICAPTCHACLIENTKEY: str = ''
ADDIC7EDUSERNAME: str = ''
ADDIC7EDPASSWORD: str = ''
ADDIC7EDUSERID: str = ''
OPENSUBTITLESUSERNAME: str = ''
OPENSUBTITLESPASSWORD: str = ''
LEGENDASTVUSERNAME: str = ''
LEGENDASTVPASSWORD: str = ''

# Namemapping config section
SHOWNAMEMAPPING: Dict[str, str] = {}
ADDIC7EDSHOWNAMEMAPPING: Dict[str, str] = {}
ALTERNATIVESHOWNAMEMAPPING: Dict[str, str] = {}
MOVIENAMEMAPPING: Dict[str, str] = {}
ALTERNATIVEMOVIENAMEMAPPING: Dict[str, str] = {}

# Skip config section
SKIPSHOW: Dict[str, str] = {}
SKIPMOVIE: Dict[str, str] = {}

# Notifications config section
NOTIFY: bool = False
NOTIFYMAIL: bool = False
MAILSRV: str = 'smtp.gmail.com:587'
MAILFROMNAME: str = ''
MAILFROMADDR: str = 'example@gmail.com'
MAILTOADDR: str = 'example@gmail.com'
MAILUSERNAME: str = 'example@gmail.com'
MAILPASSWORD: str = 'mysecretpassword'
MAILSUBJECT: str = 'Subs info'
MAILENCRYPTION: str = 'TLS'
MAILAUTH: str = ''
NOTIFYTWITTER: bool = False
TWITTERKEY: str = 'token key'
TWITTERSECRET: str = 'token secret'
NOTIFYPUSHALOT: bool = False
PUSHALOTAPI: str = 'API key'
NOTIFYPUSHOVER: bool = False
PUSHOVERKEY: str = 'user key'
PUSHOVERAPI: str = 'API key'
PUSHOVERDEVICES: str = ''
NOTIFYGROWL: bool = False
GROWLHOST: str = '127.0.0.1'
GROWLPORT: int = 23053
GROWLPASS: str = 'mysecretpassword'
GROWLPRIORITY: int = 0
NOTIFYPROWL: bool = False
PROWLAPI: str = 'API key'
PROWLPRIORITY: int = 0
NOTIFYPUSHBULLET: bool = False
PUSHBULLETAPI: str = 'API key'
NOTIFYTELEGRAM: bool = False
TELEGRAMBOTAPI: str = 'API key'
TELEGRAMCHATID: str = ''

# PostProcessing config section
POSTPROCESS: bool = False
POSTPROCESSINDIVIDUAL: bool = False
POSTPROCESSUTF8ENCODING: bool = False
SHOWPOSTPROCESSCMD: str = ''
SHOWPOSTPROCESSCMDARGS: str = ''
MOVIEPOSTPROCESSCMD: str = ''
MOVIEPOSTPROCESSCMDARGS: str = ''


def initialize() -> None:
    _check_min_python_version()
    _check_python_version_change()
    _setup_venv()
    _init_globals()
    _init_cache()
    _init_guessit()
    _init_scores()
    _init_subliminal()
    _init_langdetect()
    _init_config()
    _init_db()
    _init_logger()
    _init_wanted_queue()


def _check_min_python_version() -> None:
    min_python_version = (3, 8)
    if sys.version_info < min_python_version:
        print('ERROR: Python 3.8 or higher is required.')
        os._exit(1)


def _check_python_version_change() -> None:
    from autosubliminal.util.system import get_python_version, is_python_version_changed, store_python_version

    if is_python_version_changed():
        store_python_version(get_python_version())


def _setup_venv() -> None:
    print('INFO: Setting up the virtual environment.')

    # Make sure we are running inside a virtual environment
    if not IN_VENV:
        print('WARNING: A virtual environment is required when running from source.')
        _create_venv_and_restart()

    # At this point, we are always running inside a virtual environment
    print('INFO: Checking if the current virtual environment is writable.')
    if not _check_env_writable():
        print('WARNING: The current virtual environment is not writable.')
        _create_venv_and_restart()  # create an internal virtual environment if the current one is not writable

    # Print python interpreter
    print('INFO: Running virtual environment python interpreter %s.' % sys.executable)

    # Install dependencies
    _install_dependencies()

    print('INFO: Virtual environment setup finished.')


def _check_env_writable() -> bool:
    """Check if we can install packages to the current environment."""

    locations = []

    # Get python site packages
    try:
        locations.append(sysconfig.get_path('purelib'))
    except Exception:
        pass

    # Get user site packages
    try:
        if site.ENABLE_USER_SITE or site.check_enableusersite():
            if site.USER_SITE:
                locations.append(site.USER_SITE)
            else:
                locations.append(site.getusersitepackages())
    except Exception:
        pass

    # Check if any location is writable
    return any([os.access(location, os.W_OK) for location in set(locations)])


def _create_venv_and_restart() -> None:
    """
    Create and restart in a virtual environment.

    Create a virtual environment in the .venv dir in the project root if it doesn't exist yet.
    Restart the application in the virtual environment.
    """
    # Imports
    from autosubliminal.util.system import get_python_version, is_python_version_changed

    # Helper function
    def remove_readonly(func: Callable, path: Any, _: Any) -> None:
        os.chmod(path, stat.S_IWRITE)
        func(path)

    python_version_changed = is_python_version_changed()
    venv_path = SOURCE_PATH.joinpath('.venv')
    current_interpreter = Path(sys.executable).resolve()

    # Check if virtual environment is not the same as the current environment
    if str(venv_path) == str(sys.prefix):
        if IN_VENV:
            print('ERROR: Unable to install to the existing virtual environment located at %s.' % sys.prefix)
            print('ERROR: Please check the permissions, and that it does not include global site packages.')
        os._exit(1)

    # Create virtual environment if it doesn't exist yet or when the python version is changed
    if not venv_path.is_dir() or python_version_changed:
        if python_version_changed:
            print('WARNING: New python version %s detected.' % get_python_version())
            print('INFO: Recreating the virtual environment in %s.' % venv_path)
            # Clear the venv ourselves as the the clear option in the venv.create can fail on windows
            shutil.rmtree(venv_path, onerror=remove_readonly)
        else:
            print('INFO: Creating a new virtual environment in %s.' % venv_path)
        try:
            import venv
            venv.create(venv_path, system_site_packages=False, clear=True, symlinks=os.name != 'nt', with_pip=True)
            print('INFO: Created new virtual environment in %s.' % venv_path)
        except (ImportError, Exception) as error:
            print('ERROR: Cannot create virtual environment: %s' % error)
            os._exit(1)

    # Launch application in virtual environment
    if venv_path.is_dir():
        locations_to_check = []
        locations_to_check.append(venv_path.joinpath('bin', current_interpreter.parts[-1]))
        locations_to_check.append(venv_path.joinpath('Scripts', current_interpreter.parts[-1]))

        for location in locations_to_check:
            if location.is_file() and location.stat().st_mode & os.X_OK:
                # Add original arguments to the launch command
                new_path = str(location)
                new_argv = [new_path] + sys.argv

                print('INFO: Restarting Auto-Subliminal in virtual environment with %s.' % new_argv)
                os.execvp(new_path, new_argv)

        print('ERROR: Could not find the virtual environment executable in %s. Exiting.' % venv_path)
        os._exit(1)


def _install_dependencies() -> None:
    """
    Install dependencies.

    Install the runtime dependencies if they are not yet installed before, or when they have changed.
    """
    # Imports
    from autosubliminal.util.system import (get_venv_creation_time, is_venv_creation_time_changed,
                                            store_venv_creation_time)

    print('INFO: Installing dependencies.')
    reqs = SOURCE_PATH.joinpath('requirements.txt')
    reqs_installed = SOURCE_PATH.joinpath('.requirements')

    # Force new install when a new virtual environment is detected
    if is_venv_creation_time_changed():
        print('WARNING: New virtual environment detected.')
        store_venv_creation_time(get_venv_creation_time())  # store the new venv creation time
        if reqs_installed.is_file():
            SOURCE_PATH.joinpath('.requirements').unlink()  # trigger new install of dependencies

    # Check if requirements are already installed and up to date
    if reqs.is_file() and reqs_installed.is_file() and filecmp.cmp(reqs, reqs_installed, False):
        print('INFO: Dependencies already installed and up to date.')
        return

    # Upgrade pip
    _upgrade_pip()

    # Install/upgrade install tools
    print('INFO: Installing installation tools.')
    _pip_install(['setuptools', 'wheel'])

    # Install/upgrade requirements
    print('INFO: Installing requirements.')
    _pip_install(reqs.read_text())
    shutil.copy(reqs, reqs_installed)  # Keep copy of installed requirements


def _upgrade_pip() -> None:
    """Upgrade pip."""

    print('INFO: Upgrading pip.')
    cmd = [
        sys.executable,
        '-m',
        'pip',
        'install',
        'pip',
        '--upgrade',
        '--quiet',
        '--no-input',
        '--no-color',
        '--disable-pip-version-check'
    ]
    result = _subprocess_call(cmd)
    if result != 0:
        print('ERROR: Cannot upgrade pip. Exiting.')
        os._exit(1)


def _pip_install(packages: Union[List[str], str]) -> None:
    if not isinstance(packages, list):
        # Clean out Warning line in list (dirty clean)
        packages = re.sub(r'Warning.*', '', packages)
        packages = packages.strip().splitlines()

    print('INFO: Installing package(s): %s' % ' '.join(packages))

    # Default cmd
    cmd = [
        sys.executable,
        '-m',
        'pip',
        'install',
        '--upgrade',
        '--quiet',
        '--no-input',
        '--no-color',
        '--disable-pip-version-check',
        '--no-python-version-warning'
    ]

    # OS specific helpers for pip install
    os_id = _get_os_id()
    if os_id in ('alpine', 'ubuntu'):
        cmd.append('--find-links=https://wheel-index.linuxserver.io/%s/' % os_id)
    if os_id == 'alpine':
        cmd.append('--extra-index-url=https://alpine-wheels.github.io/index')
    elif os_id in ('raspian', 'osmc'):
        cmd.append('--extra-index-url=https://www.piwheels.org/simple')
    syno_wheelhouse = SOURCE_PATH.with_name('wheelhouse')
    if syno_wheelhouse.is_dir():
        print('DEBUG: Found wheelhouse dir at %s.' % syno_wheelhouse)
        cmd.append('--find-links=%s' % syno_wheelhouse)
    print('DEBUG: Install cmd: %s %s' % (' '.join(cmd), '<packages>'))

    # Final cmd
    cmd += packages

    # Execute cmd (fallback to user site-packages)
    result = _subprocess_call(cmd)
    if result != 0:  # Not Ok
        print('INFO: Trying user site-packages.')
        result = _subprocess_call(cmd + ['--user'])
        if result != 0:  # Not Ok
            print('ERROR: Cannot install packages. Exiting.')
            os._exit(1)


def _get_os_id() -> Optional[str]:
    os_id = None
    os_release = Path('/etc/os-release').resolve()
    if os_release.is_file():
        from configparser import ConfigParser

        parser = ConfigParser()
        parser.read_string('[DEFAULT]\n' + os_release.read_text())
        try:
            os_id = parser['DEFAULT']['ID']
        except (KeyError, IndexError):
            pass
    return os_id


def _subprocess_call(cmd_list: List[str]) -> int:
    try:
        process = subprocess.Popen(cmd_list, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                   stderr=subprocess.PIPE, universal_newlines=True, cwd=os.getcwd())
        stdout, stderr = process.communicate()
        process.wait()
        if stdout:
            print('INFO: Sub process result: %s' % stdout)
        if stderr:
            print('WARNING: Sub process error: %s' % stderr)
    except Exception as error:
        print('ERROR: Unable to run sub process: %s' % error)
        return 126

    return process.returncode


def _init_globals() -> None:
    """Initialize globals."""
    from autosubliminal.core.indexer import MovieIndexer, ShowIndexer

    global PATH
    PATH = os.path.abspath(os.getcwd())
    if os.path.exists(PATH):
        os.chdir(PATH)
    else:
        print('ERROR: PATH does not exist. Please check your config.')
        os._exit(1)

    global SHOWINDEXER
    SHOWINDEXER = ShowIndexer()

    global MOVIEINDEXER
    MOVIEINDEXER = MovieIndexer()


def _init_cache() -> None:
    """Initialize internal cache."""

    # Imports
    from autosubliminal.core.cache import MutexFileLock, clear_cache, region
    from autosubliminal.util.system import is_python_version_changed

    # Make sure the cache dir exists
    global CACHEDIR
    CACHEDIR = os.path.abspath(os.path.join(PATH, 'cache'))
    if not os.path.exists(CACHEDIR):
        os.makedirs(CACHEDIR)

    # Clean cache if needed
    replace_cache = is_python_version_changed()
    if replace_cache:
        clear_cache()

    # Configure autosubliminal/dogpile cache
    # Use MutexFileLock otherwise it will not work due to fcntl module import error in windows
    # Do not reconfigure after a soft restart (without exiting main app) -> otherwise RegionAlreadyConfigured exception
    if not region.is_configured:
        cache_file = os.path.abspath(os.path.join(CACHEDIR, 'autosubliminal.cache.dbm'))
        region.configure(backend='dogpile.cache.dbm', arguments={'filename': cache_file, 'lock_factory': MutexFileLock},
                         replace_existing_backend=replace_cache)


def _init_guessit() -> None:
    """Initialize guessit.

    Make sure that guessit.guessit(...) always uses our custom version.
    """

    # Imports
    import guessit

    from autosubliminal.parsers import guessit as custom_guessit

    # Use our custom guessit parser by default
    guessit.guessit = custom_guessit


def _init_scores() -> None:
    """Initialize scores.

    Init scores based on scores from subliminal.
    """

    # Imports
    from subliminal.score import episode_scores, movie_scores

    # Calculate default scores (minimal score needed for a match)
    global SHOWMINMATCHSCOREDEFAULT
    SHOWMINMATCHSCOREDEFAULT = (
        episode_scores['series'] + episode_scores['year'] + episode_scores['season'] + episode_scores['episode'])
    global SHOWMINMATCHSCORE
    MOVIEMINMATCHSCOREDEFAULT = movie_scores['title'] + movie_scores['year']

    # Init scores
    global SHOWMINMATCHSCORE
    SHOWMINMATCHSCORE = SHOWMINMATCHSCOREDEFAULT
    global MOVIEMINMATCHSCORE
    MOVIEMINMATCHSCORE = MOVIEMINMATCHSCOREDEFAULT


def _init_subliminal() -> None:
    """Initialize subliminal.

    This must always be done AFTER the registration of our fake_entry_points.
    Therefore the imports must be done here, otherwise the 'subliminal.providers' entry point is already initialized
    before we could register it ourselves.
    -> see subliminal.api.provider_manager
    """

    # Imports
    from subliminal.cache import region
    from subliminal.cli import MutexLock
    from subliminal.extensions import provider_manager, refiner_manager

    from autosubliminal.util.system import is_python_version_changed

    # Configure subliminal/dogpile cache
    # Use MutexLock otherwise some providers will not work due to fcntl module import error in windows
    # Do not reconfigure after a soft restart (without exiting main app) -> otherwise RegionAlreadyConfigured exception
    if not region.is_configured:
        cache_file = os.path.abspath(os.path.join(CACHEDIR, 'subliminal.cache.dbm'))
        region.configure(backend='dogpile.cache.dbm', arguments={'filename': cache_file, 'lock_factory': MutexLock},
                         replace_existing_backend=is_python_version_changed())

    # Add our custom refiners to list of subliminal refiners
    manual_refiner = 'manual = autosubliminal.refiners.manual:refine'
    if manual_refiner not in refiner_manager.registered_extensions:
        refiner_manager.register(manual_refiner)
    namemapping_refiner = 'namemapping = autosubliminal.refiners.namemapping:refine'
    if namemapping_refiner not in refiner_manager.registered_extensions:
        refiner_manager.register(namemapping_refiner)

    # Add our custom addic7ed provider to list of subliminal providers
    provider = 'addic7ed_custom = autosubliminal.providers.addic7ed_custom:Addic7edProvider'
    if provider not in provider_manager.registered_extensions:
        provider_manager.register(provider)

    # Set the provider manager with all providers and init the list of all provider names
    global SUBLIMINALPROVIDERMANAGER, SUBLIMINALPROVIDERS
    SUBLIMINALPROVIDERMANAGER = provider_manager
    SUBLIMINALPROVIDERS = SUBLIMINALPROVIDERMANAGER.names()


def _init_langdetect() -> None:
    """Initialize language detection."""
    # Imports
    import langdetect.detector_factory
    from langdetect.detector_factory import DetectorFactory

    # Init factory (to load the profiles at startup)
    langdetect.detector_factory.init_factory()

    # Language detection algorithm is non-deterministic, we might get different results every time you run it.
    # To enforce consistent results, call following code before the first language detection
    DetectorFactory.seed = 0


def _init_config() -> None:
    """Initialize the config."""
    # Imports
    from autosubliminal import config

    config.read_config(True)
    if CONFIGUPGRADED:
        print('INFO: Config seems to be upgraded. Writing config.')
        config.write_config()
        print('INFO: Writing config done.')


def _init_db() -> None:
    """Initiliaze the db."""
    # Imports
    from autosubliminal import db

    db.initialize()


def _init_logger() -> None:
    """Initizalize the logger."""
    # Imports
    from autosubliminal.core import logger

    logger.initialize()


def _init_wanted_queue() -> None:
    """Initialize the wanted queue."""
    from autosubliminal.db import WantedItemsDb

    global WANTEDQUEUE
    WANTEDQUEUE = WantedItemsDb().get_wanted_items()
