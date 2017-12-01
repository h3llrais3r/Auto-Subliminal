from __future__ import with_statement

import os
import logging
import codecs

from ConfigParser import SafeConfigParser

import autosubliminal
from autosubliminal import utils, version

log = logging.getLogger(__name__)


def read_config():
    """
    Read the config file and set all the variables.
    """

    # Read config file
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        print "********************************************************************"
        print "ERROR: Not a valid configuration file! Using default values instead!"
        print "********************************************************************"
        cfg = SafeConfigParser()

    if cfg.has_section('config'):
        if cfg.has_option("config", "workdir"):
            autosubliminal.PATH = cfg.get("config", "workdir")
            print "WARNING: Workdir is an old variable. Replace it with 'path'."

        if cfg.has_option('config', 'path'):
            autosubliminal.PATH = cfg.get('config', 'path')
        else:
            print "ERROR: Required ariable PATH is missing. Using current working directory instead."
            autosubliminal.PATH = unicode(os.getcwd(), autosubliminal.SYSENCODING)

        if cfg.has_option("config", "videopaths"):
            video_paths = unicode(str(cfg.get("config", "videopaths")))
            if video_paths:
                autosubliminal.VIDEOPATHS = video_paths.split(',')
            else:
                print "ERROR: Required variable VIDEOPATHS is missing. Using current working directory instead."
                autosubliminal.VIDEOPATHS = []
                autosubliminal.VIDEOPATHS.append(unicode(os.getcwd(), autosubliminal.SYSENCODING))
        else:
            print "ERROR: Required variable VIDEOPATHS is missing. Using current working directory instead."
            autosubliminal.VIDEOPATHS = []
            autosubliminal.VIDEOPATHS.append(unicode(os.getcwd(), autosubliminal.SYSENCODING))

        if cfg.has_option("config", "defaultlanguage"):
            autosubliminal.DEFAULTLANGUAGE = cfg.get("config", "defaultlanguage")
        else:
            autosubliminal.DEFAULTLANGUAGE = u"en"

        if cfg.has_option("config", "defaultlanguagesuffix"):
            autosubliminal.DEFAULTLANGUAGESUFFIX = cfg.getboolean("config", "defaultlanguagesuffix")
        else:
            autosubliminal.DEFAULTLANGUAGESUFFIX = False

        if cfg.has_option("config", "additionallanguages"):
            additional_languages = cfg.get("config", "additionallanguages")
            if additional_languages:
                autosubliminal.ADDITIONALLANGUAGES = additional_languages.split(",")
            else:
                autosubliminal.ADDITIONALLANGUAGES = []
        else:
            autosubliminal.ADDITIONALLANGUAGES = []

        if cfg.has_option('config', 'scandisk'):
            autosubliminal.SCANDISKINTERVAL = cfg.getint('config', 'scandisk')
        else:
            autosubliminal.SCANDISKINTERVAL = 3600  # Run every hour

        if cfg.has_option('config', 'checksub'):
            autosubliminal.CHECKSUBINTERVAL = cfg.getint('config', 'checksub')
            # CHECKSUB may only be runed 6 times a day, to prevent the API key from being banned
            # If you want new subtitles faster, you should decrease the CHECKSUB time
            if autosubliminal.CHECKSUBINTERVAL < 21600:
                print "WARNING: checksub variable is lower then 21600."
                print "WARNING: This is not allowed, this is to prevent our API-key from being banned."
                autosubliminal.CHECKSUBINTERVAL = 21600  # Run every 6 hours
        else:
            autosubliminal.CHECKSUBINTERVAL = 86400  # Run every 24 hours

        if cfg.has_option('config', 'checkversion'):
            autosubliminal.CHECKVERSIONINTERVAL = cfg.getint('config', 'checkversion')
        else:
            autosubliminal.CHECKVERSIONINTERVAL = 43200  # Run every 12 hours

        if cfg.has_option("config", "checkversionautoupdate"):
            autosubliminal.CHECKVERSIONAUTOUPDATE = cfg.getboolean("config", "checkversionautoupdate")
        else:
            autosubliminal.CHECKVERSIONAUTOUPDATE = False

        if cfg.has_option("config", "scanembeddedsubs"):
            autosubliminal.SCANEMBEDDEDSUBS = cfg.getboolean("config", "scanembeddedsubs")
        else:
            autosubliminal.SCANEMBEDDEDSUBS = False

        if cfg.has_option("config", "skiphiddendirs"):
            autosubliminal.SKIPHIDDENDIRS = cfg.getboolean("config", "skiphiddendirs")
        else:
            autosubliminal.SKIPHIDDENDIRS = False

        if cfg.has_option("config", "detectinvalidsublanguage"):
            autosubliminal.DETECTINVALIDSUBLANGUAGE = cfg.getboolean("config", "detectinvalidsublanguage")
        else:
            autosubliminal.DETECTINVALIDSUBLANGUAGE = False

        if cfg.has_option("config", "detectedlanguageprobability"):
            autosubliminal.DETECTEDLANGUAGEPROBABILITY = cfg.getfloat("config", "detectedlanguageprobability")
        else:
            autosubliminal.DETECTEDLANGUAGEPROBABILITY = 0.9

        if cfg.has_option("config", "minvideofilesize"):
            autosubliminal.MINVIDEOFILESIZE = cfg.getint("config", "minvideofilesize")
        else:
            autosubliminal.MINVIDEOFILESIZE = 0

        if cfg.has_option("config", "maxdbresults"):
            autosubliminal.MAXDBRESULTS = cfg.getint("config", "maxdbresults")
        else:
            autosubliminal.MAXDBRESULTS = 0

        if cfg.has_option("config", "configversion"):
            autosubliminal.CONFIGVERSION = cfg.getint("config", "configversion")
        else:
            autosubliminal.CONFIGVERSION = 1

    else:
        # Config section is missing
        print "ERROR: Required config section is missing. Using default values instead."
        print "ERROR: Required variable PATH is missing. Using current working directory instead."
        autosubliminal.PATH = unicode(os.getcwd(), autosubliminal.SYSENCODING)
        print "ERROR: Required variable VIDEOPATHS is missing. Using current working directory instead."
        autosubliminal.VIDEOPATHS = []
        autosubliminal.VIDEOPATHS.append(unicode(os.getcwd(), autosubliminal.SYSENCODING))
        autosubliminal.DEFAULTLANGUAGE = u"en"
        autosubliminal.DEFAULTLANGUAGESUFFIX = False
        autosubliminal.ADDITIONALLANGUAGES = []
        autosubliminal.SCANDISKINTERVAL = 3600
        autosubliminal.CHECKSUBINTERVAL = 86400
        autosubliminal.CHECKVERSIONINTERVAL = 43200
        autosubliminal.CHECKVERSIONAUTOUPDATE = False
        autosubliminal.SCANEMBEDDEDSUBS = False
        autosubliminal.SKIPHIDDENDIRS = False
        autosubliminal.DETECTINVALIDSUBLANGUAGE = False
        autosubliminal.DETECTEDLANGUAGEPROBABILITY = 0.9
        autosubliminal.MINVIDEOFILESIZE = 0
        autosubliminal.MAXDBRESULTS = 0
        autosubliminal.CONFIGVERSION = version.CONFIG_VERSION

    if cfg.has_section('logfile'):
        if cfg.has_option("logfile", "logfile"):
            autosubliminal.LOGFILE = cfg.get("logfile", "logfile")
        else:
            print "ERROR: Required variable LOGFILE is missing. Using 'AutoSubliminal.log' instead."
            autosubliminal.LOGFILE = u"AutoSubliminal.log"

        if cfg.has_option("logfile", "loglevel"):
            autosubliminal.LOGLEVEL = cfg.get("logfile", "loglevel")
            if autosubliminal.LOGLEVEL.lower() == u"error":
                autosubliminal.LOGLEVEL = logging.ERROR
            elif autosubliminal.LOGLEVEL.lower() == u"warning":
                autosubliminal.LOGLEVEL = logging.WARNING
            elif autosubliminal.LOGLEVEL.lower() == u"debug":
                autosubliminal.LOGLEVEL = logging.DEBUG
            elif autosubliminal.LOGLEVEL.lower() == u"info":
                autosubliminal.LOGLEVEL = logging.INFO
            elif autosubliminal.LOGLEVEL.lower() == u"critical":
                autosubliminal.LOGLEVEL = logging.CRITICAL
        else:
            autosubliminal.LOGLEVEL = logging.INFO

        if cfg.has_option("logfile", "lognum"):
            autosubliminal.LOGNUM = cfg.getint("logfile", "lognum")
        else:
            autosubliminal.LOGNUM = 0

        if cfg.has_option("logfile", "logsize"):
            autosubliminal.LOGSIZE = cfg.getint("logfile", "logsize")
        else:
            autosubliminal.LOGSIZE = 0

        if cfg.has_option("logfile", "loghttpaccess"):
            autosubliminal.LOGHTTPACCESS = cfg.getboolean("logfile", "loghttpaccess")
        else:
            autosubliminal.LOGHTTPACCESS = False

        if cfg.has_option("logfile", "logexternallibs"):
            autosubliminal.LOGEXTERNALLIBS = cfg.getboolean("logfile", "logexternallibs")
        else:
            autosubliminal.LOGEXTERNALLIBS = False

        if cfg.has_option("logfile", "logdetailedformat"):
            autosubliminal.LOGDETAILEDFORMAT = cfg.getboolean("logfile", "logdetailedformat")
        else:
            autosubliminal.LOGDETAILEDFORMAT = False

        if cfg.has_option("logfile", "logreversed"):
            autosubliminal.LOGREVERSED = cfg.getboolean("logfile", "logreversed")
        else:
            autosubliminal.LOGREVERSED = False

        if cfg.has_option("logfile", "loglevelconsole"):
            autosubliminal.LOGLEVELCONSOLE = cfg.get("logfile", "loglevelconsole")
            if autosubliminal.LOGLEVELCONSOLE.lower() == u"error":
                autosubliminal.LOGLEVELCONSOLE = logging.ERROR
            elif autosubliminal.LOGLEVELCONSOLE.lower() == u"warning":
                autosubliminal.LOGLEVELCONSOLE = logging.WARNING
            elif autosubliminal.LOGLEVELCONSOLE.lower() == u"debug":
                autosubliminal.LOGLEVELCONSOLE = logging.DEBUG
            elif autosubliminal.LOGLEVELCONSOLE.lower() == u"info":
                autosubliminal.LOGLEVELCONSOLE = logging.INFO
            elif autosubliminal.LOGLEVELCONSOLE.lower() == u"critical":
                autosubliminal.LOGLEVELCONSOLE = logging.CRITICAL
        else:
            autosubliminal.LOGLEVELCONSOLE = logging.ERROR

    else:
        # Logfile section is missing
        print "ERROR: Required variable LOGFILE is missing. Using 'AutoSuliminal.log' instead."
        autosubliminal.LOGFILE = u"AutoSubliminal.log"
        autosubliminal.LOGLEVEL = logging.INFO
        autosubliminal.LOGNUM = 0
        autosubliminal.LOGSIZE = 0
        autosubliminal.LOGHTTPACCESS = False
        autosubliminal.LOGEXTERNALLIBS = False
        autosubliminal.LOGDETAILEDFORMAT = False
        autosubliminal.LOGREVERSED = False
        autosubliminal.LOGLEVELCONSOLE = logging.ERROR

    if cfg.has_section('webserver'):
        if cfg.has_option('webserver', 'webserverip') and cfg.has_option('webserver', 'webserverport'):
            autosubliminal.WEBSERVERIP = cfg.get('webserver', 'webserverip')
            autosubliminal.WEBSERVERPORT = cfg.getint('webserver', 'webserverport')

        else:
            print "ERROR: Webserver IP and port are required. Now setting the default values (0.0.0.0:8083)."
            autosubliminal.WEBSERVERIP = u"0.0.0.0"
            autosubliminal.WEBSERVERPORT = 8083

        if cfg.has_option('webserver', 'webroot'):
            autosubliminal.WEBROOT = cfg.get('webserver', 'webroot')
        else:
            autosubliminal.WEBROOT = u""

        if not cfg.has_option('webserver', 'username'):
            autosubliminal.USERNAME = u""

        if not cfg.has_option('webserver', 'password'):
            autosubliminal.PASSWORD = u""

        if cfg.has_option('webserver', 'username') and cfg.has_option('webserver', 'password'):
            autosubliminal.USERNAME = cfg.get('webserver', 'username')
            autosubliminal.PASSWORD = cfg.get('webserver', 'password')
        elif cfg.has_option('webserver', 'username') or cfg.has_option('webserver', 'password'):
            print "ERROR: Both username and password are required. Now starting without authentication."

        if cfg.has_option("webserver", "launchbrowser"):
            autosubliminal.LAUNCHBROWSER = cfg.getboolean("webserver", "launchbrowser")
        else:
            autosubliminal.LAUNCHBROWSER = True
    else:
        # Webserver section is missing
        print "ERROR: The webserver section is required. Now setting the default values (0.0.0.0:8083)."
        print "WARNING: The webserver is started without authentication."
        autosubliminal.WEBSERVERIP = u"0.0.0.0"
        autosubliminal.WEBSERVERPORT = 8083
        autosubliminal.WEBROOT = u""
        autosubliminal.USERNAME = u""
        autosubliminal.PASSWORD = u""
        autosubliminal.LAUNCHBROWSER = True

    if cfg.has_section('subliminal'):
        if cfg.has_option('subliminal', 'showminmatchscore'):
            autosubliminal.SHOWMINMATCHSCORE = cfg.getint('subliminal', 'showminmatchscore')
            # Force the default showminmatchscore when a wrongly configured value is entered manually in the config file
            if autosubliminal.SHOWMINMATCHSCORE < autosubliminal.SHOWMINMATCHSCOREDEFAULT:
                print "WARNING: Invalid SHOWMINMATCHSCORE found."
                print "WARNING: Using the default score (%s) instead." % autosubliminal.SHOWMINMATCHSCOREDEFAULT
                autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
        else:
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT

        if cfg.has_option('subliminal', 'showmatchsource'):
            autosubliminal.SHOWMATCHSOURCE = cfg.getboolean('subliminal', 'showmatchsource')
        else:
            autosubliminal.SHOWMATCHSOURCE = False

        if cfg.has_option('subliminal', 'showmatchquality'):
            autosubliminal.SHOWMATCHQUALITY = cfg.getboolean('subliminal', 'showmatchquality')
        else:
            autosubliminal.SHOWMATCHQUALITY = False

        if cfg.has_option('subliminal', 'showmatchcodec'):
            autosubliminal.SHOWMATCHCODEC = cfg.getboolean('subliminal', 'showmatchcodec')
        else:
            autosubliminal.SHOWMATCHCODEC = False

        if cfg.has_option('subliminal', 'showmatchreleasegroup'):
            autosubliminal.SHOWMATCHRELEASEGROUP = cfg.getboolean('subliminal', 'showmatchreleasegroup')
        else:
            autosubliminal.SHOWMATCHRELEASEGROUP = False

        if cfg.has_option('subliminal', 'movieminmatchscore'):
            autosubliminal.MOVIEMINMATCHSCORE = cfg.getint('subliminal', 'movieminmatchscore')
            # Force the default movieminmatchscore when an invalid value is entered manually in the config file
            if autosubliminal.MOVIEMINMATCHSCORE < autosubliminal.MOVIEMINMATCHSCOREDEFAULT:
                print "WARNING: Invalid MOVIEMINMATCHSCORE found."
                print "WARNING: Using the default score (%s) instead." % autosubliminal.MOVIEMINMATCHSCOREDEFAULT
                autosubliminal.MOVIEMINMATCHSCORE = autosubliminal.MOVIEMINMATCHSCOREDEFAULT
        else:
            autosubliminal.MOVIEMINMATCHSCORE = autosubliminal.MOVIEMINMATCHSCOREDEFAULT

        if cfg.has_option('subliminal', 'moviematchsource'):
            autosubliminal.MOVIEMATCHSOURCE = cfg.getboolean('subliminal', 'moviematchsource')
        else:
            autosubliminal.MOVIEMATCHSOURCE = False

        if cfg.has_option('subliminal', 'moviematchquality'):
            autosubliminal.MOVIEMATCHQUALITY = cfg.getboolean('subliminal', 'moviematchquality')
        else:
            autosubliminal.MOVIEMATCHQUALITY = False

        if cfg.has_option('subliminal', 'moviematchcodec'):
            autosubliminal.MOVIEMATCHCODEC = cfg.getboolean('subliminal', 'moviematchcodec')
        else:
            autosubliminal.MOVIEMATCHCODEC = False

        if cfg.has_option('subliminal', 'moviematchreleasegroup'):
            autosubliminal.MOVIEMATCHRELEASEGROUP = cfg.getboolean('subliminal', 'moviematchreleasegroup')
        else:
            autosubliminal.MOVIEMATCHRELEASEGROUP = False

        if cfg.has_option('subliminal', 'providers'):
            autosubliminal.SUBLIMINALPROVIDERS = cfg.get('subliminal', 'providers')
            autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERS.split(',')
            # Only allow valid providers by checking if they are found in the provider manager
            for provider in autosubliminal.SUBLIMINALPROVIDERLIST:
                if provider.lower() not in autosubliminal.SUBLIMINALPROVIDERMANAGER.names():
                    autosubliminal.SUBLIMINALPROVIDERLIST.remove(provider)
        else:
            autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERMANAGER.names()

        if cfg.has_option("subliminal", "manualrefinevideo"):
            autosubliminal.MANUALREFINEVIDEO = cfg.getboolean("subliminal", "manualrefinevideo")
        else:
            autosubliminal.MANUALREFINEVIDEO = False

        if cfg.has_option("subliminal", "refinevideo"):
            autosubliminal.REFINEVIDEO = cfg.getboolean("subliminal", "refinevideo")
        else:
            autosubliminal.REFINEVIDEO = False

        if cfg.has_option("subliminal", "preferhearingimpaired"):
            autosubliminal.PREFERHEARINGIMPAIRED = cfg.getboolean("subliminal", "preferhearingimpaired")
        else:
            autosubliminal.PREFERHEARINGIMPAIRED = False

        if cfg.has_option('subliminal', 'addic7edusername') and cfg.has_option('subliminal', 'addic7edpassword'):
            autosubliminal.ADDIC7EDUSERNAME = cfg.get('subliminal', 'addic7edusername')
            autosubliminal.ADDIC7EDPASSWORD = cfg.get('subliminal', 'addic7edpassword')
            if autosubliminal.ADDIC7EDUSERNAME and autosubliminal.ADDIC7EDPASSWORD:
                autosubliminal.SUBLIMINALPROVIDERCONFIGS = {
                    'addic7ed': {'username': autosubliminal.ADDIC7EDUSERNAME,
                                 'password': autosubliminal.ADDIC7EDPASSWORD}}
        else:
            autosubliminal.ADDIC7EDUSERNAME = u""
            autosubliminal.ADDIC7EDPASSWORD = u""

        if cfg.has_option('subliminal', 'opensubtitlesusername') and cfg.has_option('subliminal',
                                                                                    'opensubtitlespassword'):
            autosubliminal.OPENSUBTITLESUSERNAME = cfg.get('subliminal', 'opensubtitlesusername')
            autosubliminal.OPENSUBTITLESPASSWORD = cfg.get('subliminal', 'opensubtitlespassword')
            if autosubliminal.OPENSUBTITLESUSERNAME and autosubliminal.OPENSUBTITLESPASSWORD:
                autosubliminal.SUBLIMINALPROVIDERCONFIGS = {
                    'opensubtitles': {'username': autosubliminal.OPENSUBTITLESUSERNAME,
                                      'password': autosubliminal.OPENSUBTITLESPASSWORD}}
        else:
            autosubliminal.OPENSUBTITLESUSERNAME = u""
            autosubliminal.OPENSUBTITLESPASSWORD = u""
    else:
        # Subliminal section is missing
        autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
        autosubliminal.SHOWMATCHSOURCE = False
        autosubliminal.SHOWMATCHQUALITY = False
        autosubliminal.SHOWMATCHCODEC = False
        autosubliminal.SHOWMATCHRELEASEGROUP = False
        autosubliminal.MOVIEMINMATCHSCORE = autosubliminal.MOVIEMINMATCHSCOREDEFAULT
        autosubliminal.MOVIEMATCHSOURCE = False
        autosubliminal.MOVIEMATCHQUALITY = False
        autosubliminal.MOVIEMATCHCODEC = False
        autosubliminal.MOVIEMATCHRELEASEGROUP = False
        autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERMANAGER.names()
        autosubliminal.MANUALREFINEVIDEO = False
        autosubliminal.REFINEVIDEO = False
        autosubliminal.PREFERHEARINGIMPAIRED = False
        autosubliminal.ADDIC7EDUSERNAME = u""
        autosubliminal.ADDIC7EDPASSWORD = u""
        autosubliminal.OPENSUBTITLESUSERNAME = u""
        autosubliminal.OPENSUBTITLESPASSWORD = u""

    if cfg.has_section('shownamemapping'):
        autosubliminal.USERSHOWNAMEMAPPING = dict(cfg.items('shownamemapping'))
        autosubliminal.USERSHOWNAMEMAPPINGUPPER = {}
        for x in autosubliminal.USERSHOWNAMEMAPPING.keys():
            autosubliminal.USERSHOWNAMEMAPPINGUPPER[x.upper()] = autosubliminal.USERSHOWNAMEMAPPING[x]
    else:
        # Shownamemapping section is missing
        autosubliminal.USERSHOWNAMEMAPPING = {}
        autosubliminal.USERSHOWNAMEMAPPINGUPPER = {}

    if cfg.has_section('movienamemapping'):
        autosubliminal.USERMOVIENAMEMAPPING = dict(cfg.items('movienamemapping'))
        autosubliminal.USERMOVIENAMEMAPPINGUPPER = {}
        for x in autosubliminal.USERMOVIENAMEMAPPING.keys():
            autosubliminal.USERMOVIENAMEMAPPINGUPPER[x.upper()] = autosubliminal.USERMOVIENAMEMAPPING[x]
    else:
        # Movienamemapping section is missing
        autosubliminal.USERMOVIENAMEMAPPING = {}
        autosubliminal.USERMOVIENAMEMAPPINGUPPER = {}

    if cfg.has_section('skipshow'):
        autosubliminal.SKIPSHOW = dict(cfg.items('skipshow'))
        autosubliminal.SKIPSHOWUPPER = {}
        for x in autosubliminal.SKIPSHOW:
            autosubliminal.SKIPSHOWUPPER[x.upper()] = autosubliminal.SKIPSHOW[x]
    else:
        # Skipshow section is missing
        autosubliminal.SKIPSHOW = {}
        autosubliminal.SKIPSHOWUPPER = {}

    if cfg.has_section('skipmovie'):
        autosubliminal.SKIPMOVIE = dict(cfg.items('skipmovie'))
        autosubliminal.SKIPMOVIEUPPER = {}
        for x in autosubliminal.SKIPMOVIE:
            autosubliminal.SKIPMOVIEUPPER[x.upper()] = autosubliminal.SKIPMOVIE[x]
    else:
        # Skipmovie section is missing
        autosubliminal.SKIPMOVIE = {}
        autosubliminal.SKIPMOVIEUPPER = {}

    if cfg.has_section('notify'):
        if cfg.has_option("notify", "notify"):
            autosubliminal.NOTIFY = cfg.getboolean('notify', 'notify')
        else:
            autosubliminal.NOTIFY = False

        # Mail
        if cfg.has_option('notify', 'notifymail'):
            autosubliminal.NOTIFYMAIL = cfg.getboolean('notify', 'notifymail')
        else:
            autosubliminal.NOTIFYMAIL = False

        if cfg.has_option('notify', 'mailsrv'):
            autosubliminal.MAILSRV = cfg.get('notify', 'mailsrv')
        else:
            autosubliminal.MAILSRV = u"smtp.gmail.com:587"

        if cfg.has_option('notify', 'mailfromaddr'):
            autosubliminal.MAILFROMADDR = cfg.get('notify', 'mailfromaddr')
        else:
            autosubliminal.MAILFROMADDR = u"example@gmail.com"

        if cfg.has_option('notify', 'mailtoaddr'):
            autosubliminal.MAILTOADDR = cfg.get('notify', 'mailtoaddr')
        else:
            autosubliminal.MAILTOADDR = u"example@gmail.com"

        if cfg.has_option('notify', 'mailusername'):
            autosubliminal.MAILUSERNAME = cfg.get('notify', 'mailusername')
        else:
            autosubliminal.MAILUSERNAME = u"example@gmail.com"

        if cfg.has_option('notify', 'mailpassword'):
            autosubliminal.MAILPASSWORD = cfg.get('notify', 'mailpassword')
        else:
            autosubliminal.MAILPASSWORD = u"mysecretpassword"

        if cfg.has_option('notify', 'mailsubject'):
            autosubliminal.MAILSUBJECT = cfg.get('notify', 'mailsubject')
        else:
            autosubliminal.MAILSUBJECT = u"Auto-Subliminal downloaded"

        if cfg.has_option('notify', 'mailencryption'):
            autosubliminal.MAILENCRYPTION = cfg.get('notify', 'mailencryption')
        else:
            autosubliminal.MAILENCRYPTION = u"TLS"

        if cfg.has_option('notify', 'mailauth'):
            autosubliminal.MAILAUTH = cfg.get('notify', 'mailauth')
        else:
            autosubliminal.MAILAUTH = u""

        # Twitter
        if cfg.has_option('notify', 'notifytwitter'):
            autosubliminal.NOTIFYTWITTER = cfg.getboolean('notify', 'notifytwitter')
        else:
            autosubliminal.NOTIFYTWITTER = False

        if cfg.has_option('notify', 'twitterkey'):
            autosubliminal.TWITTERKEY = cfg.get('notify', 'twitterkey')
        else:
            autosubliminal.TWITTERKEY = u"token key"

        if cfg.has_option('notify', 'twittersecret'):
            autosubliminal.TWITTERSECRET = cfg.get('notify', 'twittersecret')
        else:
            autosubliminal.TWITTERSECRET = u"token secret"

        # Pushalot - Windows Phone and Windows 8 notifier
        if cfg.has_option('notify', 'notifypushalot'):
            autosubliminal.NOTIFYPUSHALOT = cfg.getboolean('notify', 'notifypushalot')
        else:
            autosubliminal.NOTIFYPUSHALOT = False

        if cfg.has_option('notify', 'pushalotapi'):
            autosubliminal.PUSHALOTAPI = cfg.get('notify', 'pushalotapi')
        else:
            autosubliminal.PUSHALOTAPI = u"API key"

        # Pushover - Android and IOS notifier
        if cfg.has_option('notify', 'notifypushover'):
            autosubliminal.NOTIFYPUSHOVER = cfg.getboolean('notify', 'notifypushover')
        else:
            autosubliminal.NOTIFYPUSHOVER = False

        if cfg.has_option('notify', 'pushoverkey'):
            autosubliminal.PUSHOVERKEY = cfg.get('notify', 'pushoverkey')
        else:
            autosubliminal.PUSHOVERKEY = u"user key"

        if cfg.has_option('notify', 'pushoverapi'):
            autosubliminal.PUSHOVERAPI = cfg.get('notify', 'pushoverapi')
        else:
            autosubliminal.PUSHOVERAPI = u"API key"

        if cfg.has_option('notify', 'pushoverdevices'):
            autosubliminal.PUSHOVERDEVICES = cfg.get('notify', 'pushoverdevices')
        else:
            autosubliminal.PUSHOVERDEVICES = u""

        # Notify My Android
        if cfg.has_option('notify', 'notifynma'):
            autosubliminal.NOTIFYNMA = cfg.getboolean('notify', 'notifynma')
        else:
            autosubliminal.NOTIFYNMA = False

        if cfg.has_option('notify', 'nmaapi'):
            autosubliminal.NMAAPI = cfg.get('notify', 'nmaapi')
        else:
            autosubliminal.NMAAPI = u"API key"

        # Growl
        if cfg.has_option('notify', 'notifygrowl'):
            autosubliminal.NOTIFYGROWL = cfg.getboolean('notify', 'notifygrowl')
        else:
            autosubliminal.NOTIFYGROWL = False

        if cfg.has_option('notify', 'growlhost'):
            autosubliminal.GROWLHOST = cfg.get('notify', 'growlhost')
        else:
            autosubliminal.GROWLHOST = u"127.0.0.1"

        if cfg.has_option('notify', 'growlport'):
            autosubliminal.GROWLPORT = cfg.get('notify', 'growlport')
        else:
            autosubliminal.GROWLPORT = u"23053"

        if cfg.has_option('notify', 'growlpass'):
            autosubliminal.GROWLPASS = cfg.get('notify', 'growlpass')
        else:
            autosubliminal.GROWLPASS = u"mysecretpassword"

        # Prowl
        if cfg.has_option('notify', 'notifyprowl'):
            autosubliminal.NOTIFYPROWL = cfg.getboolean('notify', 'notifyprowl')
        else:
            autosubliminal.NOTIFYPROWL = False

        if cfg.has_option('notify', 'prowlapi'):
            autosubliminal.PROWLAPI = cfg.get('notify', 'prowlapi')
        else:
            autosubliminal.PROWLAPI = u"API key"

        if cfg.has_option('notify', 'prowlpriority'):
            autosubliminal.PROWLPRIORITY = cfg.getint('notify', 'prowlpriority')
        else:
            autosubliminal.PROWLPRIORITY = 0

        # Pushbullet
        if cfg.has_option('notify', 'notifypushbullet'):
            autosubliminal.NOTIFYPUSHBULLET = cfg.getboolean('notify', 'notifypushbullet')
        else:
            autosubliminal.NOTIFYPUSHBULLET = False

        if cfg.has_option('notify', 'pushbulletapi'):
            autosubliminal.PUSHBULLETAPI = cfg.get('notify', 'pushbulletapi')
        else:
            autosubliminal.PUSHBULLETAPI = u"API key"

    else:
        # Notify section is missing
        autosubliminal.NOTIFY = False
        autosubliminal.NOTIFYMAIL = False
        autosubliminal.MAILSRV = u"smtp.gmail.com:587"
        autosubliminal.MAILFROMADDR = u"example@gmail.com"
        autosubliminal.MAILTOADDR = u"example@gmail.com"
        autosubliminal.MAILUSERNAME = u"example@gmail.com"
        autosubliminal.MAILPASSWORD = u"mysecretpassword"
        autosubliminal.MAILSUBJECT = u"Subs info"
        autosubliminal.MAILENCRYPTION = u"TLS"
        autosubliminal.MAILAUTH = u""
        autosubliminal.NOTIFYTWITTER = False
        autosubliminal.TWITTERKEY = u"token key"
        autosubliminal.TWITTERSECRET = u"token secret"
        autosubliminal.NOTIFYPUSHALOT = False
        autosubliminal.PUSHALOTAPI = u"API key"
        autosubliminal.NOTIFYPUSHOVER = False
        autosubliminal.PUSHOVERKEY = u"user key"
        autosubliminal.PUSHOVERAPI = u"API key"
        autosubliminal.PUSHOVERDEVICES = u""
        autosubliminal.NOTIFYNMA = False
        autosubliminal.NMAAPI = u"API key"
        autosubliminal.NOTIFYGROWL = False
        autosubliminal.GROWLHOST = u"127.0.0.1"
        autosubliminal.GROWLPORT = u"23053"
        autosubliminal.GROWLPASS = u"mysecretpassword"
        autosubliminal.NOTIFYPROWL = False
        autosubliminal.PROWLAPI = u"API key"
        autosubliminal.PROWLPRIORITY = 0
        autosubliminal.NOTIFYPUSHBULLET = False
        autosubliminal.PUSHBULLETAPI = u"API key"

    if cfg.has_section('postprocessing'):
        if cfg.has_option("postprocessing", "postprocess"):
            autosubliminal.POSTPROCESS = cfg.getboolean("postprocessing", "postprocess")
        else:
            autosubliminal.POSTPROCESS = False

        if cfg.has_option("postprocessing", "postprocessindividual"):
            autosubliminal.POSTPROCESSINDIVIDUAL = cfg.getboolean("postprocessing", "postprocessindividual")
        else:
            autosubliminal.POSTPROCESSINDIVIDUAL = False

        if cfg.has_option("postprocessing", "postprocessutf8encoding"):
            autosubliminal.POSTPROCESSUTF8ENCODING = cfg.getboolean("postprocessing", "postprocessutf8encoding")
        else:
            autosubliminal.POSTPROCESSUTF8ENCODING = False

        if cfg.has_option("postprocessing", "showpostprocesscmd"):
            autosubliminal.SHOWPOSTPROCESSCMD = cfg.get("postprocessing", "showpostprocesscmd")
        else:
            autosubliminal.SHOWPOSTPROCESSCMD = u""

        if cfg.has_option("postprocessing", "showpostprocesscmdargs"):
            autosubliminal.SHOWPOSTPROCESSCMDARGS = cfg.get("postprocessing", "showpostprocesscmdargs")
        else:
            autosubliminal.SHOWPOSTPROCESSCMDARGS = u""

        if cfg.has_option("postprocessing", "moviepostprocesscmd"):
            autosubliminal.MOVIEPOSTPROCESSCMD = cfg.get("postprocessing", "moviepostprocesscmd")
        else:
            autosubliminal.MOVIEPOSTPROCESSCMD = u""

        if cfg.has_option("postprocessing", "moviepostprocesscmdargs"):
            autosubliminal.MOVIEPOSTPROCESSCMDARGS = cfg.get("postprocessing", "moviepostprocesscmdargs")
        else:
            autosubliminal.MOVIEPOSTPROCESSCMDARGS = u""

    else:
        # Postprocessing section is missing
        autosubliminal.POSTPROCESS = False
        autosubliminal.POSTPROCESSINDIVIDUAL = False
        autosubliminal.POSTPROCESSUTF8ENCODING = False
        autosubliminal.SHOWPOSTPROCESSCMD = u""
        autosubliminal.SHOWPOSTPROCESSCMDARGS = u""
        autosubliminal.MOVIEPOSTPROCESSCMD = u""
        autosubliminal.MOVIEPOSTPROCESSCMDARGS = u""

    if cfg.has_section('dev'):
        if cfg.has_option('dev', 'apikey'):
            autosubliminal.TVDBAPIKEY = cfg.get('dev', 'tvdbapikey')

    # Check if config needs to be upgraded
    if autosubliminal.CONFIGVERSION < version.CONFIG_VERSION:
        upgrade_config(autosubliminal.CONFIGVERSION, version.CONFIG_VERSION)
    elif autosubliminal.CONFIGVERSION > version.CONFIG_VERSION:
        print "ERROR: Config version higher then this version of Auto-Subliminal supports. Update Auto-Subliminal."
        os._exit(1)

    # If needed add default shownamemappings here
    # This dictionary maps local series names to TVDB ID's
    # Example: shownamemapping = {"Arrow" : "257655", "Grimm" : "248736"}
    autosubliminal.SHOWNAMEMAPPING = {}
    autosubliminal.SHOWNAMEMAPPINGUPPER = {}
    for x in autosubliminal.SHOWNAMEMAPPING.keys():
        autosubliminal.SHOWNAMEMAPPINGUPPER[x.upper()] = autosubliminal.SHOWNAMEMAPPING[x]

    # If needed add default movienamemappings here
    # This dictionary maps local series names to IMDB ID's
    # Example: movienamemapping = {"The Dark Knight (2008)" : "0468569", "Batman Begins (2005)" : "0372784"}
    autosubliminal.MOVIENAMEMAPPING = {}
    autosubliminal.MOVIENAMEMAPPINGUPPER = {}
    for x in autosubliminal.MOVIENAMEMAPPING.keys():
        autosubliminal.MOVIENAMEMAPPINGUPPER[x.upper()] = autosubliminal.MOVIENAMEMAPPING[x]


def save_config(section=None, variable=None, value=None):
    """
    Add a variable and value to section in the config file.

    Keyword arguments:
    section -- Section to with the variable - value pair will be added
    variable -- Option that will be added to the config file
    value -- Value of the variable that will be added
    """

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        pass

    if cfg.has_section(section):
        cfg.set(section, variable.encode('utf8'), value.encode('utf8'))
        edited = True
    else:
        cfg.add_section(section)
        cfg.set(section, variable.encode('utf8'), value.encode('utf8'))
        edited = True

    if edited:
        with open(autosubliminal.CONFIGFILE, 'wb') as file:
            cfg.write(file)


def apply_subliminal():
    """
    Read subliminal in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # no config yet
        pass

    if cfg.has_section('subliminal'):
        autosubliminal.SUBLIMINALPROVIDERS = cfg.get('subliminal', 'providers')
        autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERS.split(',')
    else:
        autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERMANAGER.names()


def apply_shownamemapping():
    """
    Read shownamemapping in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        pass

    if cfg.has_section("shownamemapping"):
        autosubliminal.USERSHOWNAMEMAPPING = dict(cfg.items('shownamemapping'))
    else:
        autosubliminal.USERSHOWNAMEMAPPING = {}
    autosubliminal.USERSHOWNAMEMAPPINGUPPER = {}
    for x in autosubliminal.USERSHOWNAMEMAPPING.keys():
        autosubliminal.USERSHOWNAMEMAPPINGUPPER[x.upper()] = autosubliminal.USERSHOWNAMEMAPPING[x]


def apply_movienamemapping():
    """
    Read movienamemapping in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        pass

    if cfg.has_section("movienamemapping"):
        autosubliminal.USERMOVIENAMEMAPPING = dict(cfg.items('movienamemapping'))
    else:
        autosubliminal.USERMOVIENAMEMAPPING = {}
    autosubliminal.USERMOVIENAMEMAPPINGUPPER = {}
    for x in autosubliminal.USERMOVIENAMEMAPPING.keys():
        autosubliminal.USERMOVIENAMEMAPPINGUPPER[x.upper()] = autosubliminal.USERMOVIENAMEMAPPING[x]


def apply_skipshow():
    """
    Read skipshow in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # no config yet
        pass

    if cfg.has_section('skipshow'):
        autosubliminal.SKIPSHOW = dict(cfg.items('skipshow'))
    else:
        autosubliminal.SKIPSHOW = {}
    autosubliminal.SKIPSHOWUPPER = {}
    for x in autosubliminal.SKIPSHOW:
        autosubliminal.SKIPSHOWUPPER[x.upper()] = autosubliminal.SKIPSHOW[x]


def apply_skipmovie():
    """
    Read skipmovie in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # no config yet
        pass

    if cfg.has_section('skipmovie'):
        autosubliminal.SKIPMOVIE = dict(cfg.items('skipmovie'))
    else:
        autosubliminal.SKIPMOVIE = {}
    autosubliminal.SKIPMOVIEUPPER = {}
    for x in autosubliminal.SKIPMOVIE:
        autosubliminal.SKIPMOVIEUPPER[x.upper()] = autosubliminal.SKIPMOVIE[x]


def display_videopaths():
    """
    Return a string containing all locations for user videos.
    After each location an '\n' is added to create multiple rows
    in a textarea.
    """
    s = ""
    for x in autosubliminal.VIDEOPATHS:
        s += x + "\n"
    return s


def display_additional_languages():
    """
    Return a string containing all the additional languages in a comma separated list.
    """
    s = ""
    for x in autosubliminal.ADDITIONALLANGUAGES:
        if s == "":
            s += x
        else:
            s += "," + x
    return s


def display_shownamemapping():
    """
    Return a string containing all info from user shownamemapping.
    After each shownamemapping an '\n' is added to create multiple rows
    in a textarea.
    """
    s = ""
    for x in autosubliminal.USERSHOWNAMEMAPPING:
        s += x + " = " + str(autosubliminal.USERSHOWNAMEMAPPING[x]) + "\n"
    return s


def display_movienamemapping():
    """
    Return a string containing all info from user movienamemapping.
    After each movienamemapping an '\n' is added to create multiple rows
    in a textarea.
    """
    s = ""
    for x in autosubliminal.USERMOVIENAMEMAPPING:
        s += x + " = " + str(autosubliminal.USERMOVIENAMEMAPPING[x]) + "\n"
    return s


def display_skipshow():
    """
    Return a string containing all info from skipshow.
    After each shows skip info an '\n' is added to create multiple rows
    in a textarea.
    """
    s = ""
    for x in autosubliminal.SKIPSHOW:
        s += x + " = " + str(autosubliminal.SKIPSHOW[x]) + "\n"
    return s


def display_skipmovie():
    """
    Return a string containing all info from skipmovie.
    After each movie skip info an '\n' is added to create multiple rows
    in a textarea.
    """
    s = ""
    for x in autosubliminal.SKIPMOVIE:
        s += x + " = " + str(autosubliminal.SKIPMOVIE[x]) + "\n"
    return s


def string_to_dict(items=None):
    """
    Return a correct dict from a string
    """
    items = items.split('\r\n')
    returnitems = []

    for item in items:
        if item:
            showinfo = []
            for x in item.split('='):
                if x[-1:] == ' ':
                    x = x[:-1]
                elif x[:1] == ' ':
                    x = x[1:]
                showinfo.append(x)
            showinfo = tuple(showinfo)
            returnitems.append(showinfo)
    returnitems = dict(returnitems)
    return returnitems


def save_config_section():
    """
    Save stuff
    """
    section = 'config'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    videopaths = u""
    for x in autosubliminal.VIDEOPATHS:
        if x:
            if videopaths:
                videopaths += "," + x
            else:
                videopaths = x

    additionallanguages = u""
    for x in autosubliminal.ADDITIONALLANGUAGES:
        if x:
            if additionallanguages:
                additionallanguages += "," + x
            else:
                additionallanguages = x

    cfg.set(section, "path", autosubliminal.PATH)
    cfg.set(section, "videopaths", str(videopaths))
    cfg.set(section, "defaultlanguage", autosubliminal.DEFAULTLANGUAGE)
    cfg.set(section, "defaultlanguagesuffix", str(autosubliminal.DEFAULTLANGUAGESUFFIX))
    cfg.set(section, "additionallanguages", str(additionallanguages))
    cfg.set(section, "scandisk", str(autosubliminal.SCANDISKINTERVAL))
    cfg.set(section, "checksub", str(autosubliminal.CHECKSUBINTERVAL))
    cfg.set(section, "checkversion", str(autosubliminal.CHECKVERSIONINTERVAL))
    cfg.set(section, "checkversionautoupdate", str(autosubliminal.CHECKVERSIONAUTOUPDATE))
    cfg.set(section, "scanembeddedsubs", str(autosubliminal.SCANEMBEDDEDSUBS))
    cfg.set(section, "skiphiddendirs", str(autosubliminal.SKIPHIDDENDIRS))
    cfg.set(section, "detectinvalidsublanguage", str(autosubliminal.DETECTINVALIDSUBLANGUAGE))
    cfg.set(section, "detectedlanguageprobability", str(autosubliminal.DETECTEDLANGUAGEPROBABILITY))
    cfg.set(section, "minvideofilesize", str(autosubliminal.MINVIDEOFILESIZE))
    cfg.set(section, "maxdbresults", str(autosubliminal.MAXDBRESULTS))
    cfg.set(section, "configversion", str(autosubliminal.CONFIGVERSION))

    with codecs.open(autosubliminal.CONFIGFILE, 'wb', encoding=autosubliminal.SYSENCODING) as file:
        cfg.write(file)


def save_logfile_section():
    """
    Save stuff
    """
    section = 'logfile'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "logfile", autosubliminal.LOGFILE)
    cfg.set(section, "loglevel", logging.getLevelName(int(autosubliminal.LOGLEVEL)).lower())
    cfg.set(section, "lognum", str(autosubliminal.LOGNUM))
    cfg.set(section, "logsize", str(autosubliminal.LOGSIZE))
    cfg.set(section, "loghttpaccess", str(autosubliminal.LOGHTTPACCESS))
    cfg.set(section, "logexternallibs", str(autosubliminal.LOGEXTERNALLIBS))
    cfg.set(section, "logdetailedformat", str(autosubliminal.LOGDETAILEDFORMAT))
    cfg.set(section, "logreversed", str(autosubliminal.LOGREVERSED))
    cfg.set(section, "loglevelconsole", logging.getLevelName(int(autosubliminal.LOGLEVELCONSOLE)).lower())

    with open(autosubliminal.CONFIGFILE, 'wb') as file:
        cfg.write(file)


def save_webserver_section():
    """
    Save stuff
    """
    section = 'webserver'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "webserverip", str(autosubliminal.WEBSERVERIP))
    cfg.set(section, "webserverport", str(autosubliminal.WEBSERVERPORT))
    cfg.set(section, "webroot", autosubliminal.WEBROOT)
    cfg.set(section, "username", autosubliminal.USERNAME)
    cfg.set(section, "password", autosubliminal.PASSWORD)
    cfg.set(section, "launchbrowser", str(autosubliminal.LAUNCHBROWSER))

    with open(autosubliminal.CONFIGFILE, 'wb') as file:
        cfg.write(file)


def save_subliminal_section():
    """
    Save stuff
    """
    section = 'subliminal'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "showminmatchscore", str(autosubliminal.SHOWMINMATCHSCORE))
    cfg.set(section, "showmatchsource", str(autosubliminal.SHOWMATCHSOURCE))
    cfg.set(section, "showmatchquality", str(autosubliminal.SHOWMATCHQUALITY))
    cfg.set(section, "showmatchcodec", str(autosubliminal.SHOWMATCHCODEC))
    cfg.set(section, "showmatchreleasegroup", str(autosubliminal.SHOWMATCHRELEASEGROUP))
    cfg.set(section, "movieminmatchscore", str(autosubliminal.MOVIEMINMATCHSCORE))
    cfg.set(section, "moviematchsource", str(autosubliminal.MOVIEMATCHSOURCE))
    cfg.set(section, "moviematchquality", str(autosubliminal.MOVIEMATCHQUALITY))
    cfg.set(section, "moviematchcodec", str(autosubliminal.MOVIEMATCHCODEC))
    cfg.set(section, "moviematchreleasegroup", str(autosubliminal.MOVIEMATCHRELEASEGROUP))
    cfg.set(section, "providers", str(autosubliminal.SUBLIMINALPROVIDERS))
    cfg.set(section, "manualrefinevideo", str(autosubliminal.MANUALREFINEVIDEO))
    cfg.set(section, "refinevideo", str(autosubliminal.REFINEVIDEO))
    cfg.set(section, "preferhearingimpaired", str(autosubliminal.PREFERHEARINGIMPAIRED))
    cfg.set(section, "addic7edusername", str(autosubliminal.ADDIC7EDUSERNAME))
    cfg.set(section, "addic7edpassword", str(autosubliminal.ADDIC7EDPASSWORD))
    cfg.set(section, "opensubtitlesusername", str(autosubliminal.OPENSUBTITLESUSERNAME))
    cfg.set(section, "opensubtitlespassword", str(autosubliminal.OPENSUBTITLESPASSWORD))

    with open(autosubliminal.CONFIGFILE, 'wb') as file:
        cfg.write(file)

    # Set all subliminal stuff correct
    apply_subliminal()


def save_usershownamemapping_section():
    """
    Save stuff
    """
    section = 'shownamemapping'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if cfg.has_section(section):
        cfg.remove_section(section)
        cfg.add_section(section)
        with open(autosubliminal.CONFIGFILE, 'wb') as file:
            cfg.write(file)

    for x in autosubliminal.USERSHOWNAMEMAPPING:
        save_config("shownamemapping", x, autosubliminal.USERSHOWNAMEMAPPING[x])

    # Set all shownamemapping stuff correct
    apply_shownamemapping()


def save_usermovienamemapping_section():
    """
    Save stuff
    """
    section = 'movienamemapping'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if cfg.has_section(section):
        cfg.remove_section(section)
        cfg.add_section(section)
        with open(autosubliminal.CONFIGFILE, 'wb') as file:
            cfg.write(file)

    for x in autosubliminal.USERMOVIENAMEMAPPING:
        save_config("movienamemapping", x, autosubliminal.USERMOVIENAMEMAPPING[x])

    # Set all movienamemapping stuff correct
    apply_movienamemapping()


def save_skipshow_section():
    """
    Save stuff
    """
    section = 'skipshow'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if cfg.has_section(section):
        cfg.remove_section(section)
        cfg.add_section(section)
        with open(autosubliminal.CONFIGFILE, 'wb') as file:
            cfg.write(file)

    for x in autosubliminal.SKIPSHOW:
        save_config("skipshow", x, autosubliminal.SKIPSHOW[x])

    # Set all skipshow stuff correct
    apply_skipshow()


def save_skipmovie_section():
    """
    Save stuff
    """
    section = 'skipmovie'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if cfg.has_section(section):
        cfg.remove_section(section)
        cfg.add_section(section)
        with open(autosubliminal.CONFIGFILE, 'wb') as file:
            cfg.write(file)

    for x in autosubliminal.SKIPMOVIE:
        save_config("skipmovie", x, autosubliminal.SKIPMOVIE[x])

    # Set all skipmovie stuff correct
    apply_skipmovie()


def save_notify_section():
    """
    Save stuff
    """
    section = 'notify'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "notify", str(autosubliminal.NOTIFY))
    cfg.set(section, "notifymail", str(autosubliminal.NOTIFYMAIL))
    cfg.set(section, "mailsrv", autosubliminal.MAILSRV)
    cfg.set(section, "mailfromaddr", autosubliminal.MAILFROMADDR)
    cfg.set(section, "mailtoaddr", autosubliminal.MAILTOADDR)
    cfg.set(section, "mailusername", autosubliminal.MAILUSERNAME)
    cfg.set(section, "mailpassword", autosubliminal.MAILPASSWORD)
    cfg.set(section, "mailsubject", autosubliminal.MAILSUBJECT)
    cfg.set(section, "mailencryption", autosubliminal.MAILENCRYPTION)
    cfg.set(section, "mailauth", autosubliminal.MAILAUTH)
    cfg.set(section, "notifytwitter", str(autosubliminal.NOTIFYTWITTER))
    cfg.set(section, "twitterkey", autosubliminal.TWITTERKEY)
    cfg.set(section, "twittersecret", autosubliminal.TWITTERSECRET)
    cfg.set(section, "notifypushalot", str(autosubliminal.NOTIFYPUSHALOT))
    cfg.set(section, "pushalotapi", autosubliminal.PUSHALOTAPI)
    cfg.set(section, "notifypushover", str(autosubliminal.NOTIFYPUSHOVER))
    cfg.set(section, "pushoverkey", autosubliminal.PUSHOVERKEY)
    cfg.set(section, "pushoverapi", autosubliminal.PUSHOVERAPI)
    cfg.set(section, "pushoverdevices", autosubliminal.PUSHOVERDEVICES)
    cfg.set(section, "notifynma", str(autosubliminal.NOTIFYNMA))
    cfg.set(section, "nmaapi", autosubliminal.NMAAPI)
    cfg.set(section, "notifygrowl", str(autosubliminal.NOTIFYGROWL))
    cfg.set(section, "growlhost", autosubliminal.GROWLHOST)
    cfg.set(section, "growlport", autosubliminal.GROWLPORT)
    cfg.set(section, "growlpass", autosubliminal.GROWLPASS)
    cfg.set(section, "notifyprowl", str(autosubliminal.NOTIFYPROWL))
    cfg.set(section, "prowlapi", autosubliminal.PROWLAPI)
    cfg.set(section, "prowlpriority", str(autosubliminal.PROWLPRIORITY))
    cfg.set(section, "notifypushbullet", str(autosubliminal.NOTIFYPUSHBULLET))
    cfg.set(section, "pushbulletapi", autosubliminal.PUSHBULLETAPI)

    with open(autosubliminal.CONFIGFILE, 'wb') as file:
        cfg.write(file)


def save_postprocessing_section():
    """
    Save stuff
    """
    section = 'postprocessing'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "postprocess", str(autosubliminal.POSTPROCESS))
    cfg.set(section, "postprocessindividual", str(autosubliminal.POSTPROCESSINDIVIDUAL))
    cfg.set(section, "postprocessutf8encoding", str(autosubliminal.POSTPROCESSUTF8ENCODING))
    cfg.set(section, "showpostprocesscmd", autosubliminal.SHOWPOSTPROCESSCMD)
    cfg.set(section, "showpostprocesscmdargs", autosubliminal.SHOWPOSTPROCESSCMDARGS)
    cfg.set(section, "moviepostprocesscmd", autosubliminal.MOVIEPOSTPROCESSCMD)
    cfg.set(section, "moviepostprocesscmdargs", autosubliminal.MOVIEPOSTPROCESSCMDARGS)

    with open(autosubliminal.CONFIGFILE, 'wb') as file:
        cfg.write(file)


def check_for_restart():
    """
    Check if internal variables are different from the config file.
    Only check the variables the require a restart to take effect
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    # Set the default values
    scandiskinterval = 3600
    checksubinterval = 86400
    checkversioninterval = 43200
    logfile = u'AutoSubliminal.log'
    loglevel = logging.INFO
    loglevelconsole = logging.ERROR
    logsize = 0
    lognum = 0
    loghttpaccess = False
    logexternallibs = False
    logdetailedformat = False
    webserverip = u'0.0.0.0'
    webserverport = 8083
    webroot = u''
    username = u''
    password = u''

    # Check if an option excists in the config file, if so replace the default value
    if cfg.has_section('config'):
        if cfg.has_option('config', 'scandisk'):
            scandiskinterval = cfg.getint('config', 'scandisk')

        if cfg.has_option('config', 'checksub'):
            checksubinterval = cfg.getint('config', 'checksub')

        if cfg.has_option('config', 'checkversion'):
            checkversioninterval = cfg.getint('config', 'checkversion')

    if cfg.has_section('logfile'):
        if cfg.has_option("logfile", "logfile"):
            logfile = cfg.get("logfile", "logfile")

        if cfg.has_option("logfile", "loglevel"):
            loglevel = cfg.get("logfile", "loglevel")
            if loglevel.lower() == 'error':
                loglevel = logging.ERROR
            elif loglevel.lower() == "warning":
                loglevel = logging.WARNING
            elif loglevel.lower() == "debug":
                loglevel = logging.DEBUG
            elif loglevel.lower() == "info":
                loglevel = logging.INFO
            elif loglevel.lower() == "critical":
                loglevel = logging.CRITICAL

        if cfg.has_option("logfile", "lognum"):
            lognum = cfg.getint("logfile", "lognum")

        if cfg.has_option("logfile", "logsize"):
            logsize = cfg.getint("logfile", "logsize")

        if cfg.has_option("logfile", "loghttpaccess"):
            loghttpaccess = cfg.getboolean("logfile", "loghttpaccess")

        if cfg.has_option("logfile", "logdetailedformat"):
            logdetailedformat = cfg.getboolean("logfile", "logdetailedformat")

        if cfg.has_option("logfile", "loglevelconsole"):
            loglevelconsole = cfg.get("logfile", "loglevelconsole")
            if loglevelconsole.lower() == 'error':
                loglevelconsole = logging.ERROR
            elif loglevelconsole.lower() == "warning":
                loglevelconsole = logging.WARNING
            elif loglevelconsole.lower() == "debug":
                loglevelconsole = logging.DEBUG
            elif loglevelconsole.lower() == "info":
                loglevelconsole = logging.INFO
            elif loglevelconsole.lower() == "critical":
                loglevelconsole = logging.CRITICAL

    if cfg.has_section('webserver'):
        if cfg.has_option('webserver', 'webserverip') and cfg.has_option('webserver', 'webserverport'):
            webserverip = cfg.get('webserver', 'webserverip')
            webserverport = cfg.getint('webserver', 'webserverport')
        if cfg.has_option('webserver', 'webroot'):
            webroot = cfg.get('webserver', 'webroot')
        if cfg.has_option('webserver', 'username') and cfg.has_option('webserver', 'password'):
            username = cfg.get('webserver', 'username')
            password = cfg.get('webserver', 'password')

    # Now compare the values, if one differs a restart is required.
    if scandiskinterval != autosubliminal.SCANDISKINTERVAL \
            or checksubinterval != autosubliminal.CHECKSUBINTERVAL \
            or checkversioninterval != autosubliminal.CHECKVERSIONINTERVAL \
            or logfile != autosubliminal.LOGFILE \
            or loglevel != autosubliminal.LOGLEVEL \
            or logsize != autosubliminal.LOGSIZE \
            or lognum != autosubliminal.LOGNUM \
            or loghttpaccess != autosubliminal.LOGHTTPACCESS \
            or logexternallibs != autosubliminal.LOGEXTERNALLIBS \
            or logdetailedformat != autosubliminal.LOGDETAILEDFORMAT \
            or loglevelconsole != autosubliminal.LOGLEVELCONSOLE \
            or webserverip != autosubliminal.WEBSERVERIP \
            or webserverport != autosubliminal.WEBSERVERPORT \
            or webroot != autosubliminal.WEBROOT \
            or username != autosubliminal.USERNAME \
            or password != autosubliminal.PASSWORD:
        return True
    else:
        return False


def write_config():
    """
    Save all settings to the config file.
    Return True if restart is needed, False otherwise.
    """
    # Read config file
    cfg = SafeConfigParser()

    try:
        # A config file is set so we use this to add the settings
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config file so we create one in autosubliminal.PATH
        if not autosubliminal.CONFIGFILE:
            autosubliminal.CONFIGFILE = "config.properties"
        open(autosubliminal.CONFIGFILE, 'w').close()
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)

    # Before we save everything to the config file we need to test if the app needs to be restarted
    restart = check_for_restart()

    save_config_section()
    save_logfile_section()
    save_webserver_section()
    save_subliminal_section()
    save_usershownamemapping_section()
    save_usermovienamemapping_section()
    save_skipshow_section()
    save_skipmovie_section()
    save_notify_section()
    save_postprocessing_section()

    return restart


def upgrade_config(from_version, to_version):
    print "INFO: Upgrading config version from %d to %d." % (from_version, to_version)
    upgrades = to_version - from_version
    if upgrades != 1:
        print "INFO: More than 1 upgrade required. Starting subupgrades."
        for x in range(from_version, upgrades + 1):
            upgrade_config((from_version - 1) + x, x + 1)
    else:
        if from_version == 1 and to_version == 2:
            print "INFO: Upgrading showminmatchscore."
            print "INFO: Old value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            if (autosubliminal.SHOWMINMATCHSCORE % 2) == 0:
                autosubliminal.SHOWMINMATCHSCORE = (autosubliminal.SHOWMINMATCHSCORE * 2) + 2
            else:
                autosubliminal.SHOWMINMATCHSCORE = (autosubliminal.SHOWMINMATCHSCORE * 2) + 1
            print "INFO: New value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            print "INFO: Config upgraded to version 2."
            autosubliminal.CONFIGVERSION = 2
            autosubliminal.CONFIGUPGRADED = True

        # use subliminal scores (see examples below on how it is calculated)
        #########################
        # Suliminal version 0.7.3
        #########################
        # video.scores['episode'] = 6
        # video.scores['series'] = 23
        # video.scores['season'] = 6
        # --> these 3 should always be matched by default -> not visible in GUI -> showminmatchscore = 35
        # video.scores['resolution'] = 2
        # video.scores['release_group'] = 6
        # video.scores['video_codec'] = 2
        # --> these 3 are configurable -> max showminmatchscore = 35 + 2 + 6 + 2 = 45
        # video.scores['hash'] = 46
        # --> perfect match -> not configurable
        if from_version == 2 and to_version == 3:
            print "INFO: Please configure your video paths again!"
            print "INFO: New default showminmatchscore."
            print "INFO: Old value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
            autosubliminal.SHOWMATCHQUALITY = False
            autosubliminal.SHOWMATCHCODEC = False
            autosubliminal.SHOWMATCHRELEASEGROUP = False
            print "INFO: New value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            print "INFO: Replacing old user namemappings with tvdb id's."
            for x in autosubliminal.USERSHOWNAMEMAPPING.keys():
                # Search for tvdb id
                tvdb_id = autosubliminal.SHOWINDEXER.get_tvdb_id(x, force_search=True)
                # Replace by tvdb id or remove namemapping
                if tvdb_id:
                    autosubliminal.USERSHOWNAMEMAPPING[x] = str(tvdb_id)
                    autosubliminal.USERSHOWNAMEMAPPINGUPPER[x.upper()] = str(tvdb_id)
                else:
                    del autosubliminal.USERSHOWNAMEMAPPING[x]
                    del autosubliminal.USERSHOWNAMEMAPPINGUPPER[x.upper()]
            print "INFO: Config upgraded to version 3."
            autosubliminal.CONFIGVERSION = 3
            autosubliminal.CONFIGUPGRADED = True

        # use subliminal scores (see examples below on how it is calculated)
        #########################
        # Suliminal version 0.8.0
        #########################
        # video.scores['episode'] = 6
        # video.scores['series'] = 24
        # video.scores['season'] = 6
        # video.scores['year'] = 24
        # --> these 4 should always be matched by default -> not visible in GUI -> showminmatchscore = 60
        # video.scores['format'] = 3
        # video.scores['resolution'] = 2
        # video.scores['release_group'] = 6
        # video.scores['video_codec'] = 2
        # --> these 4 are configurable -> max showminmatchscore = 60 + 3 + 2 + 6 + 2 = 73
        # video.scores['hash'] = 74
        # --> perfect match -> not configurable
        if from_version == 3 and to_version == 4:
            print "INFO: Multi subtitle language support. Please configure your default and additional languages!"
            print "INFO: New default showminmatchscore."
            print "INFO: Old value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
            autosubliminal.SHOWMATCHSOURCE = False
            autosubliminal.SHOWMATCHQUALITY = False
            autosubliminal.SHOWMATCHCODEC = False
            autosubliminal.SHOWMATCHRELEASEGROUP = False
            print "INFO: New value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            print "INFO: Config upgraded to version 4."
            autosubliminal.CONFIGVERSION = 4
            autosubliminal.CONFIGUPGRADED = True

        ############################
        # Suliminal version >= 1.0.0
        ############################
        # use subliminal episode scores (see examples below on how it is calculated)
        ############################################################################
        # video.scores['series'] = 44
        # video.scores['year'] = 44
        # video.scores['season'] = 11
        # video.scores['episode'] = 11
        # --> these 4 should always be matched by default -> not visible in GUI -> showminmatchscore = 110
        # video.scores['release_group'] = 11
        # video.scores['format'] = 6
        # video.scores['resolution'] = 4
        # video.scores['video_codec'] = 4
        # --> these 4 are configurable -> max showminmatchscore = 110 + 11 + 6 + 4 + 4 = 135
        # video.scores['hash'] = 137
        # --> perfect match -> not configurable
        #
        # use subliminal movie scores (see examples below on how it is calculated)
        ##########################################################################
        # video.scores['title'] = 23
        # video.scores['year'] = 12
        # --> these 2 should always be matched by default -> not visible in GUI -> showminmatchscore = 35
        # video.scores['release_group'] = 11
        # video.scores['format'] = 6
        # video.scores['resolution'] = 4
        # video.scores['video_codec'] = 4
        # --> these 4 are configurable -> max showminmatchscore = 35 + 11 + 6 + 4 + 4 = 60
        # video.scores['hash'] = 62
        # --> perfect match -> not configurable
        if from_version == 4 and to_version == 5:
            print "INFO: Movie support. Please reconfigure your min match scores!"
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
            autosubliminal.SHOWMATCHSOURCE = False
            autosubliminal.SHOWMATCHQUALITY = False
            autosubliminal.SHOWMATCHCODEC = False
            autosubliminal.SHOWMATCHRELEASEGROUP = False
            print "INFO: Default value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            autosubliminal.MOVIEMINMATCHSCORE = autosubliminal.MOVIEMINMATCHSCOREDEFAULT
            autosubliminal.MOVIEMATCHSOURCE = False
            autosubliminal.MOVIEMATCHQUALITY = False
            autosubliminal.MOVIEMATCHCODEC = False
            autosubliminal.MOVIEMATCHRELEASEGROUP = False
            print "INFO: Default value movieminmatchscore: %d" % autosubliminal.MOVIEMINMATCHSCORE
            print "INFO: Config upgraded to version 5."
            autosubliminal.CONFIGVERSION = 5
            autosubliminal.CONFIGUPGRADED = True

        ############################
        # Suliminal version >= 2.0.0
        ############################
        # use subliminal episode scores (see examples below on how it is calculated)
        ############################################################################
        # 'hash': 359
        # --> perfect match -> not configurable
        # 'series': 180
        # 'year': 90
        # 'season': 30
        # 'episode': 30
        # --> these 4 should always be matched by default -> not visible in GUI -> showminmatchscore = 330
        # 'release_group': 15
        # 'format': 7
        # 'resolution': 2
        # 'video_codec': 2
        # --> these 4 are configurable -> max showminmatchscore = 330 + 15 + 7 + 2 + 2 = 356
        # 'audio_codec': 3
        # --> not used
        # 'hearing_impaired': 1
        # --> used for score increasing if wanted
        #
        # use subliminal movie scores (see examples below on how it is calculated)
        ##########################################################################
        # 'hash': 119
        # --> perfect match -> not configurable
        # 'title': 60
        # 'year': 30
        # --> these 2 should always be matched by default -> not visible in GUI -> showminmatchscore = 90
        # 'release_group': 15
        # 'format': 7
        # 'resolution': 2
        # 'video_codec': 2
        # --> these 4 are configurable -> max showminmatchscore = 90 + 15 + 7 + 2 + 2 = 116
        # 'audio_codec': 3
        # --> not used
        # 'hearing_impaired': 1
        # --> used for score increasing if wanted
        if from_version == 5 and to_version == 6:
            print "INFO: Upgrading scoring calculation. Please check/reconfigure your min match scores!"
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
            print "INFO: Default value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            if autosubliminal.SHOWMATCHSOURCE:
                autosubliminal.SHOWMINMATCHSCORE += 7
            if autosubliminal.SHOWMATCHQUALITY:
                autosubliminal.SHOWMINMATCHSCORE += 2
            if autosubliminal.SHOWMATCHCODEC:
                autosubliminal.SHOWMINMATCHSCORE += 2
            if autosubliminal.SHOWMATCHRELEASEGROUP:
                autosubliminal.SHOWMINMATCHSCORE += 15
            print "INFO: New calculated value showminmatchscore: %d" % autosubliminal.SHOWMINMATCHSCORE
            autosubliminal.MOVIEMINMATCHSCORE = autosubliminal.MOVIEMINMATCHSCOREDEFAULT
            print "INFO: Default value movieminmatchscore: %d" % autosubliminal.MOVIEMINMATCHSCORE
            if autosubliminal.MOVIEMATCHSOURCE:
                autosubliminal.MOVIEMINMATCHSCORE += 7
            if autosubliminal.MOVIEMATCHQUALITY:
                autosubliminal.MOVIEMINMATCHSCORE += 2
            if autosubliminal.MOVIEMATCHCODEC:
                autosubliminal.MOVIEMINMATCHSCORE += 2
            if autosubliminal.MOVIEMATCHRELEASEGROUP:
                autosubliminal.MOVIEMINMATCHSCORE += 15
            print "INFO: New calculated value movieminmatchscore: %d" % autosubliminal.MOVIEMINMATCHSCORE
            print "INFO: Hearing impaired logic changed. Please check your config!"
            autosubliminal.PREFERHEARINGIMPAIRED = False
            print "INFO: Config upgraded to version 6."
            autosubliminal.CONFIGVERSION = 6
            autosubliminal.CONFIGUPGRADED = True
            utils.add_notification_message("Config upgraded. Please check or reconfigure you subliminal configuration.",
                                           "notice", True)
        if from_version == 6 and to_version == 7:
            print "INFO: Upgrading log config. Please check/reconfigure your config!"
            autosubliminal.LOGNUM = 0
            autosubliminal.LOGSIZE = 0
            print "INFO: Config upgraded to version 7."
            autosubliminal.CONFIGVERSION = 7
            autosubliminal.CONFIGUPGRADED = True
            utils.add_notification_message("Config upgraded. Please check or reconfigure your logging configuration.",
                                           "notice", True)
        if from_version == 7 and to_version == 8:
            print "INFO: Upgrading skip config. Please check/reconfigure your config!"
            # '00' means now skip all, '0' means skip season 0
            for x in autosubliminal.SKIPSHOW.keys():
                seasons = autosubliminal.SKIPSHOW[x].split(',')
                replace = {'0': '00', '00': '0'}
                autosubliminal.SKIPSHOW[x] = ','.join([replace[r] if r in replace.keys() else r for r in seasons])
            for x in autosubliminal.SKIPMOVIE.keys():
                autosubliminal.SKIPMOVIE[x] = '00'
            print "INFO: Config upgraded to version 8."
            autosubliminal.CONFIGVERSION = 8
            autosubliminal.CONFIGUPGRADED = True
            utils.add_notification_message("Config upgraded. Please check or reconfigure your skip configuration.",
                                           "notice", True)
