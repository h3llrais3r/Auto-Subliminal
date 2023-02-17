# coding=utf-8

import filecmp
import os
import pkg_resources
import re
import shutil
import site
import stat
import subprocess
import sys
import sysconfig
import uuid
from pathlib import Path

# Variables to handle dependencies installation in virtual environment (custom or internal one)
SOURCE_PATH = Path(__file__).parent.parent.resolve()
IN_VENV = hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix)

# Config
CONFIGFILE = None
CONFIGVERSION = None
CONFIGUPGRADED = None

# System
PATH = None
CACHEDIR = None
DEREFERURL = None
GITHUBURL = None
VERSIONURL = None
USERAGENT = None
SYSENCODING = None
TIMEOUT = None
WANTEDQUEUE = None
WANTEDQUEUELOCK = None
WEBSOCKETMESSAGEQUEUE = None
WEBSOCKETBROADCASTER = None
SCHEDULERS = None
SCANDISK = None
SCANLIBRARY = None
CHECKSUB = None
CHECKVERSION = None

# Developer
DEVELOPER = None

# Indexers
TVDBAPIKEY = None
TVDBURL = None
IMDBURL = None
SHOWINDEXER = None
MOVIEINDEXER = None

# Db
DBFILE = None
DBVERSION = None
DBTIMESTAMPFORMAT = None

# Startup
PYTHONVERSION = None
EXECUTABLE = None
ARGS = None
DAEMON = None
STARTED = None
PID = None
UUID = None

# General config section
VIDEOPATHS = None
DEFAULTLANGUAGE = None
DEFAULTLANGUAGESUFFIX = None
ADDITIONALLANGUAGES = None
MANUALSEARCHWITHSCORING = None
SCANDISKINTERVAL = None
CHECKSUBINTERVAL = None
CHECKSUBDEADLINE = None
CHECKSUBDELTA = None
CHECKVERSIONINTERVAL = None
CHECKVERSIONAUTOUPDATE = None
SCANEMBEDDEDSUBS = None
SCANHARDCODEDSUBS = None
SKIPHIDDENDIRS = None
DETECTINVALIDSUBLANGUAGE = None
DETECTEDLANGUAGEPROBABILITY = None
MANUALSUBSYNC = None
FFMPEGPATH = None
MINVIDEOFILESIZE = None  # in MB
MAXDBRESULTS = None
TIMESTAMPFORMAT = None

# Library config section
LIBRARYMODE = None
LIBRARYPATHS = None
SCANLIBRARYINTERVAL = None
LIBRARYEDITMODE = None

# Logfile config section
LOGFILE = None
LOGLEVEL = None
LOGSIZE = None  # in MB
LOGNUM = None
LOGHTTPACCESS = None
LOGEXTERNALLIBS = None
LOGDETAILEDFORMAT = None
LOGREVERSED = None
LOGLEVELCONSOLE = None

# Webserver config section
WEBSERVERIP = None
WEBSERVERPORT = None
WEBROOT = None
USERNAME = None
PASSWORD = None
LAUNCHBROWSER = None

# Subliminal config section
SHOWMINMATCHSCORE = None
SHOWMINMATCHSCOREDEFAULT = None
SHOWMATCHSOURCE = None
SHOWMATCHQUALITY = None
SHOWMATCHCODEC = None
SHOWMATCHRELEASEGROUP = None
MOVIEMINMATCHSCORE = None
MOVIEMINMATCHSCOREDEFAULT = None
MOVIEMATCHSOURCE = None
MOVIEMATCHQUALITY = None
MOVIEMATCHCODEC = None
MOVIEMATCHRELEASEGROUP = None
SUBLIMINALPROVIDERMANAGER = None
SUBLIMINALPROVIDERS = None
SUBLIMINALPROVIDERCONFIGS = None
SUBTITLEUTF8ENCODING = None
MANUALREFINEVIDEO = None
REFINEVIDEO = None
PREFERHEARINGIMPAIRED = None
ANTICAPTCHACLASS = None
ANTICAPTCHACLIENTKEY = None
ADDIC7EDUSERNAME = None
ADDIC7EDPASSWORD = None
ADDIC7EDUSERID = None
OPENSUBTITLESUSERNAME = None
OPENSUBTITLESPASSWORD = None
LEGENDASTVUSERNAME = None
LEGENDASTVPASSWORD = None

# Namemapping config section
SHOWNAMEMAPPING = None
ADDIC7EDSHOWNAMEMAPPING = None
ALTERNATIVESHOWNAMEMAPPING = None
MOVIENAMEMAPPING = None
ALTERNATIVEMOVIENAMEMAPPING = None

# Skip config section
SKIPSHOW = None
SKIPMOVIE = None

# Notifications config section
NOTIFY = None
NOTIFYMAIL = None
MAILSRV = None
MAILFROMNAME = None
MAILFROMADDR = None
MAILTOADDR = None
MAILUSERNAME = None
MAILPASSWORD = None
MAILSUBJECT = None
MAILAUTH = None
MAILENCRYPTION = None
NOTIFYTWITTER = None
TWITTERKEY = None
TWITTERSECRET = None
NOTIFYPUSHALOT = None
PUSHALOTAPI = None
NOTIFYPUSHOVER = None
PUSHOVERKEY = None
PUSHOVERAPI = None
PUSHOVERDEVICES = None
NOTIFYGROWL = None
GROWLHOST = None
GROWLPORT = None
GROWLPASS = None
GROWLPRIORITY = None
NOTIFYPROWL = None
PROWLAPI = None
PROWLPRIORITY = None
NOTIFYPUSHBULLET = None
PUSHBULLETAPI = None
NOTIFYTELEGRAM = None
TELEGRAMBOTAPI = None
TELEGRAMCHATID = None

# PostProcessing config section
POSTPROCESS = None
POSTPROCESSINDIVIDUAL = None
POSTPROCESSUTF8ENCODING = None
SHOWPOSTPROCESSCMD = None
SHOWPOSTPROCESSCMDARGS = None
MOVIEPOSTPROCESSCMD = None
MOVIEPOSTPROCESSCMDARGS = None


def initialize():
    global CONFIGFILE, CONFIGVERSION, CONFIGUPGRADED, \
        CACHEDIR, DEREFERURL, GITHUBURL, VERSIONURL, USERAGENT, SYSENCODING, TIMEOUT, WANTEDQUEUE, WANTEDQUEUELOCK, \
        WEBSOCKETMESSAGEQUEUE, WEBSOCKETBROADCASTER, SCHEDULERS, SCANDISK, SCANLIBRARY, CHECKSUB, CHECKVERSION, \
        DEVELOPER, \
        TVDBAPIKEY, TVDBURL, IMDBURL, SHOWINDEXER, MOVIEINDEXER, \
        DBFILE, DBVERSION, DBTIMESTAMPFORMAT, \
        PYTHONVERSION, DAEMON, STARTED, PID, UUID, \
        PATH, VIDEOPATHS, DEFAULTLANGUAGE, DEFAULTLANGUAGESUFFIX, ADDITIONALLANGUAGES, MANUALSEARCHWITHSCORING, \
        SCANDISKINTERVAL, CHECKSUBINTERVAL, CHECKSUBDEADLINE, CHECKSUBDELTA, CHECKVERSIONINTERVAL, \
        CHECKVERSIONAUTOUPDATE, SCANEMBEDDEDSUBS, SCANHARDCODEDSUBS, SKIPHIDDENDIRS, DETECTINVALIDSUBLANGUAGE, \
        DETECTEDLANGUAGEPROBABILITY, MANUALSUBSYNC, FFMPEGPATH, MINVIDEOFILESIZE, MAXDBRESULTS, TIMESTAMPFORMAT, \
        LIBRARYMODE, LIBRARYPATHS, SCANLIBRARYINTERVAL, LIBRARYEDITMODE, \
        LOGFILE, LOGLEVEL, LOGSIZE, LOGNUM, LOGHTTPACCESS, LOGEXTERNALLIBS, LOGDETAILEDFORMAT, LOGREVERSED, \
        LOGLEVELCONSOLE, \
        WEBSERVERIP, WEBSERVERPORT, WEBROOT, USERNAME, PASSWORD, LAUNCHBROWSER, \
        SHOWMINMATCHSCORE, SHOWMINMATCHSCOREDEFAULT, SHOWMATCHSOURCE, SHOWMATCHQUALITY, SHOWMATCHCODEC, \
        SHOWMATCHRELEASEGROUP, \
        MOVIEMINMATCHSCORE, MOVIEMINMATCHSCOREDEFAULT, MOVIEMATCHSOURCE, MOVIEMATCHQUALITY, MOVIEMATCHCODEC, \
        MOVIEMATCHRELEASEGROUP, \
        SUBLIMINALPROVIDERMANAGER, SUBLIMINALPROVIDERS, SUBLIMINALPROVIDERCONFIGS, \
        SUBTITLEUTF8ENCODING, MANUALREFINEVIDEO, REFINEVIDEO, PREFERHEARINGIMPAIRED, \
        ANTICAPTCHACLASS, ANTICAPTCHACLIENTKEY, ADDIC7EDUSERNAME, ADDIC7EDPASSWORD, ADDIC7EDUSERID, \
        OPENSUBTITLESUSERNAME, OPENSUBTITLESPASSWORD, LEGENDASTVUSERNAME, LEGENDASTVPASSWORD, \
        SHOWNAMEMAPPING, ADDIC7EDSHOWNAMEMAPPING, ALTERNATIVESHOWNAMEMAPPING, \
        MOVIENAMEMAPPING, ALTERNATIVEMOVIENAMEMAPPING, \
        SKIPSHOW, SKIPMOVIE, \
        NOTIFY, NOTIFYMAIL, MAILSRV, MAILFROMNAME, MAILFROMADDR, MAILTOADDR, MAILUSERNAME, MAILPASSWORD, MAILSUBJECT, \
        MAILAUTH, MAILENCRYPTION, NOTIFYTWITTER, TWITTERKEY, TWITTERSECRET, NOTIFYPUSHALOT, PUSHALOTAPI, \
        NOTIFYPUSHOVER, PUSHOVERKEY, PUSHOVERAPI, PUSHOVERDEVICES, \
        NOTIFYGROWL, GROWLHOST, GROWLPORT, GROWLPASS, GROWLPRIORITY, NOTIFYPROWL, PROWLAPI, PROWLPRIORITY, \
        NOTIFYPUSHBULLET, PUSHBULLETAPI, NOTIFYTELEGRAM, TELEGRAMBOTAPI, TELEGRAMCHATID, \
        POSTPROCESS, POSTPROCESSINDIVIDUAL, POSTPROCESSUTF8ENCODING, SHOWPOSTPROCESSCMD, SHOWPOSTPROCESSCMDARGS, \
        MOVIEPOSTPROCESSCMD, MOVIEPOSTPROCESSCMDARGS

    # Setup virtual environment
    _setup_venv()

    # Imports
    from autosubliminal import config, db, version
    from autosubliminal.core import logger
    from autosubliminal.indexer import MovieIndexer, ShowIndexer
    from autosubliminal.util.system import get_python_version, is_python_version_changed, store_python_version

    # Check if python version is changed
    python_version_changed = is_python_version_changed()
    if python_version_changed:
        store_python_version(get_python_version())

    # Fake some entry points to get libraries working without installation
    _fake_entry_points()

    # System settings
    PYTHONVERSION = get_python_version()
    PATH = os.path.abspath(os.getcwd())
    CACHEDIR = os.path.abspath(os.path.join(PATH, 'cache'))
    DEREFERURL = 'https://dereferer.me/?'
    GITHUBURL = 'https://github.com/h3llrais3r/Auto-Subliminal'
    VERSIONURL = 'https://raw.github.com/h3llrais3r/Auto-Subliminal/master/autosubliminal/version.py'
    USERAGENT = 'Auto-Subliminal/' + version.RELEASE_VERSION
    TIMEOUT = 300

    # Wanted queue settings
    WANTEDQUEUE = []
    WANTEDQUEUELOCK = False

    # Websocket settings
    WEBSOCKETMESSAGEQUEUE = []

    # Scheduler settings
    SCHEDULERS = {}

    # Developer settings
    DEVELOPER = False

    # Indexer settings
    TVDBAPIKEY = '76F2D5362F45C5EC'
    TVDBURL = 'http://thetvdb.com/?tab=series&id='
    IMDBURL = 'http://www.imdb.com/title/'
    SHOWINDEXER = ShowIndexer()
    MOVIEINDEXER = MovieIndexer()

    # Startup settings
    STARTED = False
    UUID = uuid.uuid4()  # Generate random uuid each time we initialize the application

    # Webserver settings
    LAUNCHBROWSER = True

    # Cache settings
    _init_cache(python_version_changed)

    # Guessit settings
    _init_guessit()

    # Score settings
    SHOWMINMATCHSCOREDEFAULT, MOVIEMINMATCHSCOREDEFAULT = _init_scores()

    # Subliminal settings
    SUBLIMINALPROVIDERMANAGER = _init_subliminal(python_version_changed)
    SUBLIMINALPROVIDERCONFIGS = {}

    # Langdetect settings
    _init_langdetect()

    # Config settings
    CONFIGUPGRADED = False
    if CONFIGFILE is None:
        CONFIGFILE = 'config.properties'
    config.read_config(True)
    if CONFIGUPGRADED:
        print('INFO: Config seems to be upgraded. Writing config.')
        config.write_config()
        print('INFO: Writing config done.')

    # Change to the new work directory
    if os.path.exists(PATH):
        os.chdir(PATH)
    else:
        print('ERROR: PATH does not exist. Please check your config.')
        os._exit(1)

    # Database settings
    DBFILE = 'database.db'
    DBTIMESTAMPFORMAT = '%Y-%m-%d %H:%M:%S'
    db.initialize()

    # Logging settings
    logger.initialize()


def _setup_venv():
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


def _check_env_writable():
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


def _create_venv_and_restart():
    """
    Create and restart in a virtual environment.

    Create a virtual environment in the .venv dir in the project root if it doesn't exist yet.
    Restart the application in the virtual environment.
    """
    # Imports
    from autosubliminal.util.system import get_python_version, is_python_version_changed

    # Helper function
    def remove_readonly(func, path, _):
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
            print('ERROR: Cannot create virtual environment: ' % error)
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
                return os.execvp(new_path, new_argv)

        print('ERROR: Could not find the virtual environment executable in %s. Exiting.' % venv_path)
        os._exit(1)


def _install_dependencies():
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


def _upgrade_pip():
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


def _pip_install(packages):
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


def _get_os_id():
    os_release = Path('/etc/os-release').resolve()
    if os_release.is_file():
        from configparser import ConfigParser

        parser = ConfigParser()
        parser.read_string('[DEFAULT]\n' + os_release.read_text())
        try:
            return parser['DEFAULT']['ID']
        except (KeyError, IndexError):
            pass


def _subprocess_call(cmd_list):
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


def _fake_entry_points():
    """
    Fake some entry points to get libraries working without installation.
    After setup, entry points can be retrieved by:
    pkg_resources.get_entry_info(dist='fake_entry_points', group=None, name='entry_point_namespace')
    """

    # Imports
    from autosubliminal import version

    # Do not normalize the path or the entry point will be loaded under the wrong entry_key
    # current_path = os.path.dirname(os.path.normpath(__file__))
    current_path = os.path.dirname(__file__)
    distribution = pkg_resources.Distribution(location=os.path.dirname(current_path), project_name='fake_entry_points',
                                              version=version.RELEASE_VERSION)
    # Add entry points here if needed (currently none)
    entry_points = {}
    distribution._ep_map = pkg_resources.EntryPoint.parse_map(entry_points, distribution)
    pkg_resources.working_set.add(distribution)


def _init_cache(replace):
    """Initialize internal cache."""

    # Imports
    from autosubliminal.core.cache import MutexFileLock, clear_cache, region

    # Make sure the cache dir exists
    if not os.path.exists(CACHEDIR):
        os.makedirs(CACHEDIR)

    # Clean cache
    if replace:
        clear_cache()

    # Configure autosubliminal/dogpile cache
    # Use MutexFileLock otherwise it will not work due to fcntl module import error in windows
    # Do not reconfigure after a soft restart (without exiting main app) -> otherwise RegionAlreadyConfigured exception
    if not region.is_configured:
        cache_file = os.path.abspath(os.path.join(CACHEDIR, 'autosubliminal.cache.dbm'))
        region.configure(backend='dogpile.cache.dbm', arguments={'filename': cache_file, 'lock_factory': MutexFileLock},
                         replace_existing_backend=replace)


def _init_guessit():
    """Initialize guessit.

    Make sure that guessit.guessit(...) always uses our custom version.
    """

    # Imports
    import guessit

    from autosubliminal.parsers import guessit as custom_guessit

    # Use our custom guessit parser by default
    guessit.guessit = custom_guessit


def _init_scores():
    """Initialize scores.

    Init scores based on scores from subliminal.
    """

    # Imports
    from subliminal.score import episode_scores, movie_scores

    # Calculate default scores (minimal score needed for a match)
    show_min_score_default = (
        episode_scores['series'] + episode_scores['year'] + episode_scores['season'] + episode_scores['episode'])
    movie_min_score_default = movie_scores['title'] + movie_scores['year']

    return show_min_score_default, movie_min_score_default


def _init_subliminal(replace):
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

    # Configure subliminal/dogpile cache
    # Use MutexLock otherwise some providers will not work due to fcntl module import error in windows
    # Do not reconfigure after a soft restart (without exiting main app) -> otherwise RegionAlreadyConfigured exception
    if not region.is_configured:
        cache_file = os.path.abspath(os.path.join(CACHEDIR, 'subliminal.cache.dbm'))
        region.configure(backend='dogpile.cache.dbm', arguments={'filename': cache_file, 'lock_factory': MutexLock},
                         replace_existing_backend=replace)

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

    # Return the provider manager with all providers
    return provider_manager


def _init_langdetect():
    """
    Initialize language detection.
    """
    # Imports
    import langdetect.detector_factory
    from langdetect.detector_factory import DetectorFactory

    # Init factory (to load the profiles at startup)
    langdetect.detector_factory.init_factory()

    # Language detection algorithm is non-deterministic, we might get different results every time you run it.
    # To enforce consistent results, call following code before the first language detection
    DetectorFactory.seed = 0
