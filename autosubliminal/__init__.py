import os
import time
import pkg_resources

import subliminal

import autosubliminal
from autosubliminal import version, config, logger, db

FALLBACKTOENG = None
DOWNLOADENG = None
SUBENG = None
LOGFILE = None
SUBNL = None
SKIPHIDDENDIRS = None
NOTIFYNL = None
NOTIFYEN = None
LOGLEVEL = None
LOGLEVELCONSOLE = None
LOGSIZE = None
LOGNUM = None
LOGREVERSED = None
LOGHTTPACCESS = None
SKIPSHOW = None
SKIPSHOWUPPER = None
USERNAMEMAPPING = None
USERNAMEMAPPINGUPPER = None
NAMEMAPPING = None
NAMEMAPPINGUPPER = None
SHOWID_CACHE = None
POSTPROCESSCMD = None
CONFIGFILE = None
WORKDIR = None
PATH = None
VIDEOPATHS = None
MINMATCHSCORE = None
MINMATCHSCOREDEFAULT = None
MATCHQUALITY = None
MATCHCODEC = None
MATCHRELEASEGROUP = None
CONFIGVERSION = None
CONFIGUPGRADED = None

WANTEDQUEUE = None
WANTEDQUEUELOCK = False
LASTESTDOWNLOAD = None

APIKEY = None
API = None
APICALLS = None
APICALLSLASTRESET = None
APICALLSRESETINT = None
APICALLSMAX = None
TIMEOUT = None

SCHEDULERSCANDISK = None
SCHEDULERCHECKSUB = None
SCHEDULERDOWNLOADSUBS = None

SCANDISK = None
CHECKSUB = None
DOWNLOADSUBS = None

WEBSERVERIP = None
WEBSERVERPORT = None
LAUNCHBROWSER = True
USERNAME = None
PASSWORD = None
WEBROOT = None

NOTIFYMAIL = None
MAILSRV = None
MAILFROMADDR = None
MAILTOADDR = None
MAILUSERNAME = None
MAILPASSWORD = None
MAILSUBJECT = None
MAILAUTH = None
MAILENCRYPTION = None
NOTIFYGROWL = None
GROWLHOST = None
GROWLPORT = None
GROWLPASS = None
NOTIFYTWITTER = None
TWITTERKEY = None
TWITTERSECRET = None
NOTIFYNMA = None
NMAAPI = None
NOTIFYPROWL = None
PROWLAPI = None
PROWLPRIORITY = None
PUSHALOTAPI = None
NOTIFYPUSHALOT = None

DAEMON = None

SUBLIMINALPROVIDERS = None
SUBLIMINALPROVIDERLIST = None
SUBLIMINALCACHEFILE = None
DOGPILECACHEFILE = None

DBFILE = None
DBVERSION = None

VERSIONURL = None
USERAGENT = None

SYSENCODING = None
MOBILEUSERAGENTS = None
MOBILEAUTOSUB = None

STARTED = False
PID = None


def initialize():
    global VIDEOPATHS, FALLBACKTOENG, SUBENG, LOGFILE, SUBNL, LOGLEVEL, SKIPHIDDENDIRS, \
        SUBNL, LOGLEVEL, LOGLEVELCONSOLE, LOGSIZE, LOGNUM, LOGHTTPACCESS, LOGREVERSED, SKIPSHOW, SKIPSHOWUPPER, \
        USERNAMEMAPPING, USERNAMEMAPPINGUPPER, NAMEMAPPING, NAMEMAPPINGUPPER, \
        SHOWID_CACHE, POSTPROCESSCMD, CONFIGFILE, WORKDIR, NOTIFYEN, NOTIFYNL, \
        MINMATCHSCORE, MINMATCHSCOREDEFAULT, MATCHQUALITY, MATCHCODEC, MATCHRELEASEGROUP, \
        MAILSRV, MAILFROMADDR, MAILTOADDR, MAILUSERNAME, CONFIGVERSION, CONFIGUPGRADED, \
        MAILPASSWORD, MAILSUBJECT, MAILENCRYPTION, \
        GROWLHOST, GROWLPORT, GROWLPASS, \
        TWITTERKEY, TWITTERSECRET, NMAAPI, NOTIFYMAIL, NOTIFYGROWL, NOTIFYTWITTER, NOTIFYNMA, \
        WANTEDQUEUE, \
        APIKEY, API, TIMEOUT, APICALLS, \
        APICALLSLASTRESET, APICALLSRESETINT, APICALLSMAX, \
        SCHEDULERSCANDISK, SCHEDULERCHECKSUB, SCHEDULERDOWNLOADSUBS, \
        DAEMON, NOTIFYPROWL, PROWLAPI, PROWLPRIORITY, PUSHALOTAPI, NOTIFYPUSHALOT, \
        SUBLIMINALPROVIDERS, SUBLIMINALPROVIDERLIST, SUBLIMINALCACHEFILE, DOGPILECACHEFILE, \
        DBFILE, MOBILEUSERAGENTS, MOBILEAUTOSUB, \
        USERAGENT, VERSIONURL, \
        STARTED, PID

    # Fake some entry points to get libraries working without installation
    _fake_entry_points()

    DBFILE = 'database.db'

    SUBLIMINALCACHEFILE = 'subliminal.cache.dbm'
    DOGPILECACHEFILE = 'dogpile.cache.dbm'

    release = version.RELEASE_VERSION.split(' ')[0]
    versionnumber = version.RELEASE_VERSION.split(' ')[1]

    VERSIONURL = 'https://raw.github.com/h3llrais3r/Auto-Subliminal/master/autosubliminal/version.py'
    USERAGENT = 'Auto-Subliminal/' + versionnumber + release.lower()[0]

    WANTEDQUEUE = []

    MINMATCHSCOREDEFAULT = 35

    # Currently not used anymore (perhaps reuse it for tvdb api calls when a custom tvdb api key is needed?)
    APIKEY = ""
    API = "http://.../%s/" % APIKEY

    # Default http timeout
    TIMEOUT = 300

    MOBILEUSERAGENTS = ["midp", "240x320", "blackberry", "netfront", "nokia", "panasonic",
                        "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce",
                        "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem",
                        "samsung", "sda", "sgh-", "vodafone", "xda", "palm", "iphone", "ipod",
                        "ipad", "android", "windows phone"]
    MOBILEAUTOSUB = True

    # API settings
    APICALLSLASTRESET = time.time()
    APICALLSRESETINT = 86400
    APICALLSMAX = 300
    APICALLS = APICALLSMAX

    # Config file settings
    if CONFIGFILE is None:
        CONFIGFILE = "config.properties"
    config.read_config(CONFIGFILE)
    if CONFIGUPGRADED:
        print "INFO: Config seems to be upgraded. Writing config."
        config.write_config()
        print "INFO: Writing config done."

    # Change to the new work directory
    if os.path.exists(autosubliminal.PATH):
        os.chdir(autosubliminal.PATH)
    else:
        print "ERROR: PATH does not exist, check config"
        os._exit(1)

    # Database
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
                                              project_name='fake_entry_points', version='1.0.0')
    # Add entry points here if needed
    entry_points = {}
    distribution._ep_map = pkg_resources.EntryPoint.parse_map(entry_points, distribution)
    pkg_resources.working_set.add(distribution)


def _initialize_subliminal():
    # Configure subliminal/dogpile cache
    # Use MutexLock otherwise some providers will not work due to fcntl module import error in windows
    # Do not reconfigure after a soft restart (without exiting main app) -> otherwise RegionAlreadyConfigured exception
    if not subliminal.cache_region.is_configured:
        cache_file = os.path.abspath(os.path.expanduser(autosubliminal.SUBLIMINALCACHEFILE))
        subliminal.cache_region.configure(autosubliminal.DOGPILECACHEFILE,
                                          arguments={'filename': cache_file, 'lock_factory': subliminal.MutexLock})