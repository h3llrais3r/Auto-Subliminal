# coding=utf-8

###################################################
# Must be executed before importing dependencies! #
###################################################
from .installer import install

install()
###################################################

import logging
import os
from typing import Any, Dict, List

from stevedore import ExtensionManager
from ws4py.server.cherrypyserver import WebSocketPlugin

from autosubliminal.core.indexer import MovieIndexer, ShowIndexer
from autosubliminal.core.item import WantedItem
from autosubliminal.core.scheduler import Scheduler
from autosubliminal.core.websocket import WebSocketBroadCaster
from autosubliminal.version import RELEASE_VERSION

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
OMDBAPIKEY: str = ''
PREFERHEARINGIMPAIRED: bool = False
ANTICAPTCHACLASS: str = ''
ANTICAPTCHACLIENTKEY: str = ''
ADDIC7EDUSERNAME: str = ''
ADDIC7EDPASSWORD: str = ''
ADDIC7EDUSERID: str = ''
OPENSUBTITLESUSERNAME: str = ''
OPENSUBTITLESPASSWORD: str = ''
OPENSUBTITLESAPIKEY: str = ''
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
        region.configure(
            backend='dogpile.cache.dbm',
            arguments={'filename': cache_file, 'lock_factory': MutexFileLock},
            replace_existing_backend=replace_cache,
        )


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
        episode_scores['series'] + episode_scores['year'] + episode_scores['season'] + episode_scores['episode']
    )
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
        region.configure(
            backend='dogpile.cache.dbm',
            arguments={'filename': cache_file, 'lock_factory': MutexLock},
            replace_existing_backend=is_python_version_changed(),
        )

    # Add our custom refiners to list of subliminal refiners
    manual_refiner = 'manual = autosubliminal.refiners.manual:refine'
    if manual_refiner not in refiner_manager.registered_extensions:
        refiner_manager.register(manual_refiner)
    namemapping_refiner = 'namemapping = autosubliminal.refiners.namemapping:refine'
    if namemapping_refiner not in refiner_manager.registered_extensions:
        refiner_manager.register(namemapping_refiner)
    omdb_refiner = 'omdb_custom = autosubliminal.refiners.omdb_custom:refine'
    if omdb_refiner not in refiner_manager.registered_extensions:
        refiner_manager.register(omdb_refiner)

    # Add our custom providers to list of subliminal providers
    providers = [
        'addic7ed_custom = autosubliminal.providers.addic7ed_custom:Addic7edProvider',
        'opensubtitles_com = autosubliminal.providers.opensubtitles_com:OpenSubtitlesComProvider',
    ]
    for provider in providers:
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
