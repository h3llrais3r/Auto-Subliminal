import os
import time
import pkg_resources

from autosubliminal import version, config, logger, db

# Config
CONFIGFILE = None
CONFIGVERSION = None
CONFIGUPGRADED = None

# System
GITHUBURL = None
VERSIONURL = None
USERAGENT = None
SYSENCODING = None
TIMEOUT = None
MESSAGEQUEUE = None
WANTEDQUEUE = None
WANTEDQUEUELOCK = None
SCHEDULERS = None
SCANDISK = None
CHECKSUB = None
CHECKVERSION = None

# Db
DBFILE = None
DBVERSION = None

# Startup
DAEMON = None
STARTED = None
PID = None

# Mobile
MOBILE = None
MOBILEUSERAGENTS = None

# API
APIKEY = None
API = None
APICALLS = None
APICALLSLASTRESET = None
APICALLSRESETINT = None
APICALLSMAX = None

# General config section
PATH = None
VIDEOPATHS = None
DEFAULTLANGUAGE = None
DEFAULTLANGUAGESUFFIX = None
ADDITIONALLANGUAGES = None
SCANDISKINTERVAL = None
CHECKSUBINTERVAL = None
CHECKVERSIONINTERVAL = None
CHECKVERSIONAUTOUPDATE = None
SCANEMBEDDEDSUBS = None
SKIPHIDDENDIRS = None
MAXDBRESULTS = None

# Logfile config section
LOGFILE = None
LOGLEVEL = None
LOGSIZE = None
LOGNUM = None
LOGHTTPACCESS = None
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
SUBLIMINALPROVIDERSENTRYPOINT = None
SUBLIMINALPROVIDERS = None
SUBLIMINALPROVIDERLIST = None
SUBLIMINALPROVIDERCONFIGS = None
INCLUDEHEARINGIMPAIRED = None
ADDIC7EDUSERNAME = None
ADDIC7EDPASSWORD = None
OPENSUBTITLESUSERNAME = None
OPENSUBTITLESPASSWORD = None

# Shownamemapping config section
USERSHOWNAMEMAPPING = None
USERSHOWNAMEMAPPINGUPPER = None
SHOWNAMEMAPPING = None
SHOWNAMEMAPPINGUPPER = None

# Movienamemapping config section
USERMOVIENAMEMAPPING = None
USERMOVIENAMEMAPPINGUPPER = None
MOVIENAMEMAPPING = None
MOVIENAMEMAPPINGUPPER = None

# Skipshow config section
SKIPSHOW = None
SKIPSHOWUPPER = None

# Skipmovie config section
SKIPMOVIE = None
SKIPMOVIEUPPER = None

# Notifications config section
NOTIFY = None
NOTIFYMAIL = None
MAILSRV = None
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
NOTIFYNMA = None
NMAAPI = None
NOTIFYGROWL = None
GROWLHOST = None
GROWLPORT = None
GROWLPASS = None
NOTIFYPROWL = None
PROWLAPI = None
PROWLPRIORITY = None
NOTIFYPUSHBULLET = None
PUSHBULLETAPI = None

# PostProcessing config section
POSTPROCESS = None
POSTPROCESSUTF8ENCODING = None
SHOWPOSTPROCESSCMD = None
SHOWPOSTPROCESSCMDARGS = None
MOVIEPOSTPROCESSCMD = None
MOVIEPOSTPROCESSCMDARGS = None


def initialize():
    global CONFIGFILE, CONFIGVERSION, CONFIGUPGRADED, \
        GITHUBURL, VERSIONURL, USERAGENT, SYSENCODING, TIMEOUT, MESSAGEQUEUE, WANTEDQUEUE, WANTEDQUEUELOCK, \
        SCHEDULERS, SCANDISK, CHECKSUB, CHECKVERSION, \
        DBFILE, DBVERSION, \
        DAEMON, STARTED, PID, \
        MOBILE, MOBILEUSERAGENTS, \
        APIKEY, API, APICALLS, APICALLSLASTRESET, APICALLSRESETINT, APICALLSMAX, \
        PATH, VIDEOPATHS, DEFAULTLANGUAGE, DEFAULTLANGUAGESUFFIX, ADDITIONALLANGUAGES, \
        SCANDISKINTERVAL, CHECKSUBINTERVAL, CHECKVERSIONINTERVAL, CHECKVERSIONAUTOUPDATE, SCANEMBEDDEDSUBS, \
        SKIPHIDDENDIRS, MAXDBRESULTS, \
        LOGFILE, LOGLEVEL, LOGSIZE, LOGNUM, LOGHTTPACCESS, LOGDETAILEDFORMAT, LOGREVERSED, LOGLEVELCONSOLE, \
        WEBSERVERIP, WEBSERVERPORT, WEBROOT, USERNAME, PASSWORD, LAUNCHBROWSER, \
        SHOWMINMATCHSCORE, SHOWMINMATCHSCOREDEFAULT, SHOWMATCHSOURCE, SHOWMATCHQUALITY, SHOWMATCHCODEC, \
        SHOWMATCHRELEASEGROUP, \
        MOVIEMINMATCHSCORE, MOVIEMINMATCHSCOREDEFAULT, MOVIEMATCHSOURCE, MOVIEMATCHQUALITY, MOVIEMATCHCODEC, \
        MOVIEMATCHRELEASEGROUP, \
        SUBLIMINALPROVIDERSENTRYPOINT, SUBLIMINALPROVIDERS, SUBLIMINALPROVIDERLIST, SUBLIMINALPROVIDERCONFIGS, \
        INCLUDEHEARINGIMPAIRED, ADDIC7EDUSERNAME, ADDIC7EDPASSWORD, OPENSUBTITLESUSERNAME, OPENSUBTITLESPASSWORD, \
        USERSHOWNAMEMAPPING, USERSHOWNAMEMAPPINGUPPER, SHOWNAMEMAPPING, SHOWNAMEMAPPINGUPPER, \
        USERMOVIENAMEMAPPING, USERMOVIENAMEMAPPINGUPPER, MOVIENAMEMAPPING, MOVIENAMEMAPPINGUPPER, \
        SKIPSHOW, SKIPSHOWUPPER, \
        SKIPMOVIE, SKIPMOVIEUPPER, \
        NOTIFY, NOTIFYMAIL, MAILSRV, MAILFROMADDR, MAILTOADDR, MAILUSERNAME, MAILPASSWORD, MAILSUBJECT, MAILAUTH, \
        MAILENCRYPTION, NOTIFYTWITTER, TWITTERKEY, TWITTERSECRET, NOTIFYPUSHALOT, PUSHALOTAPI, \
        NOTIFYPUSHOVER, PUSHOVERKEY, PUSHOVERAPI, PUSHOVERDEVICES, NOTIFYNMA, NMAAPI, \
        NOTIFYGROWL, GROWLHOST, GROWLPORT, GROWLPASS, NOTIFYPROWL, PROWLAPI, PROWLPRIORITY, \
        NOTIFYPUSHBULLET, PUSHBULLETAPI, \
        POSTPROCESS, POSTPROCESSUTF8ENCODING, SHOWPOSTPROCESSCMD, SHOWPOSTPROCESSCMDARGS, MOVIEPOSTPROCESSCMD, \
        MOVIEPOSTPROCESSCMDARGS

    # Fake some entry points to get libraries working without installation
    _fake_entry_points()

    # Get fake subliminal providers entry point
    SUBLIMINALPROVIDERSENTRYPOINT = pkg_resources.get_entry_info(dist='fake_entry_points', group=None,
                                                                 name='subliminal.providers')

    # Version settings
    GITHUBURL = "https://github.com/h3llrais3r/Auto-Subliminal"
    VERSIONURL = "https://raw.github.com/h3llrais3r/Auto-Subliminal/master/autosubliminal/version.py"
    USERAGENT = "Auto-Subliminal/" + version.RELEASE_VERSION

    # Default http timeout
    TIMEOUT = 300

    # Message queue (list of message dicts with 'message' and 'severity' key)
    # Possible values for 'severity' are: 'info', 'warning', 'error'
    MESSAGEQUEUE = []

    # Wanted queue settings
    WANTEDQUEUE = []
    WANTEDQUEUELOCK = False

    # Scheduler settings
    SCHEDULERS = {}

    # Startup settings
    STARTED = False

    # Mobile settings
    MOBILE = True
    MOBILEUSERAGENTS = ["midp", "240x320", "blackberry", "netfront", "nokia", "panasonic",
                        "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce",
                        "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem",
                        "samsung", "sda", "sgh-", "vodafone", "xda", "palm", "iphone", "ipod",
                        "ipad", "android", "windows phone"]

    # API settings
    # Currently not used anymore (perhaps reuse it for tvdb api calls when a custom tvdb api key is needed?)
    APIKEY = ""
    API = "http://.../%s/" % APIKEY
    APICALLSLASTRESET = time.time()
    APICALLSRESETINT = 86400
    APICALLSMAX = 300
    APICALLS = APICALLSMAX

    # Score settings
    SHOWMINMATCHSCOREDEFAULT = 110
    MOVIEMINMATCHSCOREDEFAULT = 35

    # Webserver settings
    LAUNCHBROWSER = True

    # Config file settings
    CONFIGUPGRADED = False
    if CONFIGFILE is None:
        CONFIGFILE = "config.properties"
    config.read_config()
    if CONFIGUPGRADED:
        print "INFO: Config seems to be upgraded. Writing config."
        config.write_config()
        print "INFO: Writing config done."

    # Change to the new work directory
    if os.path.exists(PATH):
        os.chdir(PATH)
    else:
        print "ERROR: PATH does not exist, check config"
        os._exit(1)

    # Database
    DBFILE = 'database.db'
    db.initialize()

    # Logging
    logger.initialize()

    # Subliminal settings
    _initialize_subliminal()


def _fake_entry_points():
    # Do not normalize the path or the entry point will be loaded under the wrong entry_key
    # current_path = os.path.dirname(os.path.normpath(__file__))
    current_path = os.path.dirname(__file__)
    distribution = pkg_resources.Distribution(location=os.path.dirname(current_path),
                                              project_name='fake_entry_points', version='1.1.1')
    # Add entry points here if needed
    # Add subliminal entry points (since subliminal 1.0)
    entry_points = {
        'subliminal.providers': [
            'addic7ed = subliminal.providers.addic7ed:Addic7edProvider',
            'opensubtitles = subliminal.providers.opensubtitles:OpenSubtitlesProvider',
            'podnapisi = subliminal.providers.podnapisi:PodnapisiProvider',
            'subscenter = subliminal.providers.subscenter:SubsCenterProvider',
            'thesubdb = subliminal.providers.thesubdb:TheSubDBProvider',
            'tvsubtitles = subliminal.providers.tvsubtitles:TVsubtitlesProvider'
        ],
        'babelfish.language_converters': [
            'addic7ed = subliminal.converters.addic7ed:Addic7edConverter',
            'thesubdb = subliminal.converters.thesubdb:TheSubDBConverter',
            'tvsubtitles = subliminal.converters.tvsubtitles:TVsubtitlesConverter'
        ]
    }
    distribution._ep_map = pkg_resources.EntryPoint.parse_map(entry_points, distribution)
    pkg_resources.working_set.add(distribution)


def _initialize_subliminal():
    """
    Initialize subliminal.
    This must always be done AFTER the registration of our fake_entry_points.
    Therefore the imports must be done here, otherwise the 'subliminal.providers' entry point is already initialized
    before we could register it ourselves.
    -> see subliminal.api.provider_manager
    """

    # Imports
    from subliminal.cache import region
    from subliminal.cli import MutexLock

    # Configure subliminal/dogpile cache
    # Use MutexLock otherwise some providers will not work due to fcntl module import error in windows
    # Do not reconfigure after a soft restart (without exiting main app) -> otherwise RegionAlreadyConfigured exception
    if not region.is_configured:
        cache_file = os.path.abspath(os.path.expanduser('subliminal.cache.dbm'))
        region.configure(backend='dogpile.cache.dbm', arguments={'filename': cache_file, 'lock_factory': MutexLock})
