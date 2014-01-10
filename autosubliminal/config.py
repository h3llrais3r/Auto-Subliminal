# TODO: Webserver config, basic are done. CherryPy logging still needs a file only
# TODO: Auto restart if needed after saving config
# TODO: Make the config page pretty again
# TODO: Make user re-enter password and compare 'em to rule out typing errors
# TODO: Code cleanup?
from __future__ import with_statement

import os
import logging
import codecs

from ConfigParser import SafeConfigParser
import threading

import autosubliminal
from autosubliminal import version, utils

log = logging.getLogger(__name__)


def read_config(configfile):
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
        if cfg.has_option('config', 'path'):
            autosubliminal.PATH = cfg.get('config', 'path')
        else:
            print "ERROR: Required variable PATH is missing. Using current working directory instead."
            autosubliminal.PATH = unicode(os.getcwd(), autosubliminal.SYSENCODING)

        if cfg.has_option('config', 'videopaths'):
            autosubliminal.VIDEOPATHS = unicode(str(cfg.get("config", "videopaths"))).split(',')
        else:
            print "ERROR: Required variable VIDEOPATHS is missing. Reading old property ROOTPATH. Using current working directory if that one is missing as well."
            autosubliminal.VIDEOPATHS = list()
            if cfg.has_option('config', 'rootpath'):
                autosubliminal.VIDEOPATHS.append(unicode(str(cfg.get('config', 'rootpath'))))
            else:
                autosubliminal.VIDEOPATHS.append(unicode(os.getcwd(), autosubliminal.SYSENCODING))

        if cfg.has_option('config', 'downloadeng'):
            autosubliminal.DOWNLOADENG = cfg.getboolean('config', 'downloadeng')
        else:
            autosubliminal.DOWNLOADENG = False

        if cfg.has_option('config', 'minmatchscore'):
            autosubliminal.MINMATCHSCORE = cfg.getint('config', 'minmatchscore')
            # Force the default minmatchscore when a wrongly configured value is entered manually in the config file
            if autosubliminal.MINMATCHSCORE < autosubliminal.MINMATCHSCOREDEFAULT:
                print "WARNING: Invalid MINMATCHSCORE found. Using the default score (%s) instead." % autosubliminal.MINMATCHSCOREDEFAULT
                autosubliminal.MINMATCHSCORE = autosubliminal.MINMATCHSCOREDEFAULT
        else:
            autosubliminal.MINMATCHSCORE = autosubliminal.MINMATCHSCOREDEFAULT

        if cfg.has_option('config', 'matchquality'):
            autosubliminal.MATCHQUALITY = cfg.getboolean('config', 'matchquality')
        else:
            autosubliminal.MATCHQUALITY = False

        if cfg.has_option('config', 'matchcodec'):
            autosubliminal.MATCHCODEC = cfg.getboolean('config', 'matchcodec')
        else:
            autosubliminal.MATCHCODEC = False

        if cfg.has_option('config', 'matchreleasegroup'):
            autosubliminal.MATCHRELEASEGROUP = cfg.getboolean('config', 'matchreleasegroup')
        else:
            autosubliminal.MATCHRELEASEGROUP = False

        if cfg.has_option('config', 'scandisk'):
            autosubliminal.SCHEDULERSCANDISK = cfg.getint('config', 'scandisk')
        else:
            autosubliminal.SCHEDULERSCANDISK = 3600

        if cfg.has_option('config', 'checksub'):
            autosubliminal.SCHEDULERCHECKSUB = cfg.getint('config', 'checksub')
            # CHECKSUB may only be runed 6 times a day, to prevent the API key from being banned
            # If you want new subtitles faster, you should decrease the CHECKSUB time
            if autosubliminal.SCHEDULERCHECKSUB < 21600:
                print "WARNING: checksub variable is lower then 21600. This is not allowed, this is to prevent our API-key from being banned."
                autosubliminal.SCHEDULERCHECKSUB = 21600  # Run every 6 hours
        else:
            autosubliminal.SCHEDULERCHECKSUB = 86400  # Run every 8 hours

        if cfg.has_option("config", "fallbacktoeng"):
            autosubliminal.FALLBACKTOENG = cfg.getboolean("config", "fallbacktoeng")
        else:
            autosubliminal.FALLBACKTOENG = True

        if cfg.has_option("config", "subeng"):
            autosubliminal.SUBENG = cfg.get("config", "subeng")
        else:
            autosubliminal.SUBENG = 'en'

        if cfg.has_option("config", "subnl"):
            autosubliminal.SUBNL = cfg.get("config", "subnl")
        else:
            autosubliminal.SUBNL = u""

        if cfg.has_option("config", "notifyen"):
            autosubliminal.NOTIFYEN = cfg.getboolean("config", "notifyen")
        else:
            autosubliminal.NOTIFYEN = True

        if cfg.has_option("config", "notifynl"):
            autosubliminal.NOTIFYNL = cfg.getboolean("config", "notifynl")
        else:
            autosubliminal.NOTIFYNL = True

        if cfg.has_option("config", "workdir"):
            autosubliminal.PATH = cfg.get("config", "workdir")
            print "WARNING: Workdir is an old variable. Replace it with 'path'."

        if cfg.has_option("config", "logfile"):
            autosubliminal.LOGFILE = cfg.get("config", "logfile")
        else:
            print "ERROR: Required variable LOGFILE is missing. Using 'AutoSubliminal.log' instead."
            autosubliminal.LOGFILE = u"AutoSubliminal.log"

        if cfg.has_option("config", "postprocesscmd"):
            autosubliminal.POSTPROCESSCMD = cfg.get("config", "postprocesscmd")

        if cfg.has_option("config", "configversion"):
            autosubliminal.CONFIGVERSION = cfg.getint("config", "configversion")
        else:
            autosubliminal.CONFIGVERSION = 1

        if cfg.has_option("config", "launchbrowser"):
            autosubliminal.LAUNCHBROWSER = cfg.getboolean("config", "launchbrowser")

        if cfg.has_option("config", "skiphiddendirs"):
            autosubliminal.SKIPHIDDENDIRS = cfg.getboolean("config", "skiphiddendirs")
        else:
            autosubliminal.SKIPHIDDENDIRS = False

    else:
        # config section is missing
        print "ERROR: Required config section is missing. Using default values instead."
        autosubliminal.PATH = unicode(os.getcwd(), autosubliminal.SYSENCODING)
        print "ERROR: Required variable VIDEOPATHS is missing. Using current working directory instead."
        autosubliminal.VIDEOPATHS = list()
        autosubliminal.VIDEOPATHS.append(unicode(os.getcwd(), autosubliminal.SYSENCODING))
        autosubliminal.DOWNLOADENG = False
        autosubliminal.MINMATCHSCORE = autosubliminal.MINMATCHSCOREDEFAULT
        autosubliminal.MATCHQUALITY = False
        autosubliminal.MATCHCODEC = False
        autosubliminal.MATCHRELEASEGROUP = False
        autosubliminal.SCHEDULERSCANDISK = 3600
        autosubliminal.SCHEDULERCHECKSUB = 28800
        autosubliminal.FALLBACKTOENG = True
        autosubliminal.SUBENG = u'en'
        autosubliminal.SUBNL = u""
        autosubliminal.NOTIFYEN = True
        autosubliminal.NOTIFYNL = True
        autosubliminal.SKIPHIDDENDIRS = False
        print "ERROR: Required variable LOGFILE is missing. Using 'AutoSuliminal.log' instead."
        autosubliminal.LOGFILE = u"AutoSubliminal.log"
        autosubliminal.CONFIGVERSION = version.CONFIG_VERSION

    if cfg.has_section('logfile'):
        if cfg.has_option("logfile", "loglevel"):
            autosubliminal.LOGLEVEL = cfg.get("logfile", "loglevel")
            if autosubliminal.LOGLEVEL.lower() == u'error':
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

        if cfg.has_option("logfile", "loglevelconsole"):
            autosubliminal.LOGLEVELCONSOLE = cfg.get("logfile", "loglevelconsole")
            if autosubliminal.LOGLEVELCONSOLE.lower() == u'error':
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

        if cfg.has_option("logfile", "logsize"):
            autosubliminal.LOGSIZE = cfg.getint("logfile", "logsize")
        else:
            autosubliminal.LOGSIZE = 1000000

        if cfg.has_option("logfile", "lognum"):
            autosubliminal.LOGNUM = cfg.getint("logfile", "lognum")
        else:
            autosubliminal.LOGNUM = 3

        if cfg.has_option("logfile", "loghttpaccess"):
            autosubliminal.LOGHTTPACCESS = cfg.getboolean("logfile", "loghttpaccess")
        else:
            autosubliminal.LOGHTTPACCESS = False

        if cfg.has_option("logfile", "logreversed"):
            autosubliminal.LOGREVERSED = cfg.getboolean("logfile", "logreversed")
        else:
            autosubliminal.LOGREVERSED = False

    else:
        # Logfile section is missing, so set defaults for all options
        autosubliminal.LOGLEVEL = logging.INFO
        autosubliminal.LOGLEVELCONSOLE = logging.ERROR
        autosubliminal.LOGSIZE = 1000000
        autosubliminal.LOGNUM = 1

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
            autosubliminal.WEBROOT = u''

        if cfg.has_option('webserver', 'username') and cfg.has_option('webserver', 'password'):
            autosubliminal.USERNAME = cfg.get('webserver', 'username')
            autosubliminal.PASSWORD = cfg.get('webserver', 'password')
        elif cfg.has_option('webserver', 'username') or cfg.has_option('webserver', 'password'):
            print "ERROR: Both username and password are required. Now starting without authentication."
    else:
        print "ERROR: The webserver section is required. Now setting the default values (0.0.0.0:8083)."
        print "WARNING: The webserver is started without authentication."
        autosubliminal.WEBSERVERIP = u'0.0.0.0'
        autosubliminal.WEBSERVERPORT = 8083
        autosubliminal.WEBROOT = u''

    if cfg.has_section('skipshow'):
        # Try to read skipshow section in the config
        autosubliminal.SKIPSHOW = dict(cfg.items('skipshow'))
        # The following 4 lines convert the skipshow to uppercase. And also convert the variables to a list
        autosubliminal.SKIPSHOWUPPER = {}
        for x in autosubliminal.SKIPSHOW:
            autosubliminal.SKIPSHOWUPPER[x.upper()] = autosubliminal.SKIPSHOW[x].split(',')
    else:
        autosubliminal.SKIPSHOW = {}
        autosubliminal.SKIPSHOWUPPER = {}

    if cfg.has_section('namemapping'):
        autosubliminal.USERNAMEMAPPING = dict(cfg.items('namemapping'))
        autosubliminal.USERNAMEMAPPINGUPPER = {}
        for x in autosubliminal.USERNAMEMAPPING.keys():
            autosubliminal.USERNAMEMAPPINGUPPER[x.upper()] = autosubliminal.USERNAMEMAPPING[x]
    else:
        autosubliminal.USERNAMEMAPPING = {}
        autosubliminal.USERNAMEMAPPINGUPPER = {}

    if cfg.has_section('notify'):
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

        # Notify My Android
        if cfg.has_option('notify', 'notifynma'):
            autosubliminal.NOTIFYNMA = cfg.getboolean('notify', 'notifynma')
        else:
            autosubliminal.NOTIFYNMA = False

        if cfg.has_option('notify', 'nmaapi'):
            autosubliminal.NMAAPI = cfg.get('notify', 'nmaapi')
        else:
            autosubliminal.NMAAPI = u"API key"

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

        # Pushalot - Windows Phone and Windows 8 notifier
        if cfg.has_option('notify', 'notifypushalot'):
            autosubliminal.NOTIFYPUSHALOT = cfg.getboolean('notify', 'notifypushalot')
        else:
            autosubliminal.NOTIFYPUSHALOT = False

        if cfg.has_option('notify', 'pushalotapi'):
            autosubliminal.PUSHALOTAPI = cfg.get('notify', 'pushalotapi')
        else:
            autosubliminal.PUSHALOTAPI = u"API key"

    else:
        # Notify section is missing
        autosubliminal.NOTIFYMAIL = False
        autosubliminal.MAILSRV = u"smtp.gmail.com:587"
        autosubliminal.MAILFROMADDR = u"example@gmail.com"
        autosubliminal.MAILTOADDR = u"example@gmail.com"
        autosubliminal.MAILUSERNAME = u"example@gmail.com"
        autosubliminal.MAILPASSWORD = u"mysecretpassword"
        autosubliminal.MAILSUBJECT = u"Subs info"
        autosubliminal.MAILENCRYPTION = u"TLS"
        autosubliminal.NOTIFYGROWL = False
        autosubliminal.GROWLHOST = u"127.0.0.1"
        autosubliminal.GROWLPORT = u"23053"
        autosubliminal.GROWLPASS = u"mysecretpassword"
        autosubliminal.NOTIFYTWITTER = False
        autosubliminal.TWITTERKEY = u"token key"
        autosubliminal.TWITTERSECRET = u"token secret"
        autosubliminal.NOTIFYNMA = False
        autosubliminal.NMAAPI = u"API key"
        autosubliminal.PROWLAPI = u"API key"
        autosubliminal.NOTIFYPROWL = False
        autosubliminal.NOTIFYPUSHALOT = False
        autosubliminal.PUSHALOTAPI = u"API key"

    if cfg.has_section('subliminal'):
        if cfg.has_option('subliminal', 'providers'):
            autosubliminal.SUBLIMINALPROVIDERS = cfg.get('subliminal', 'providers')
            autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERS.split(',')
            # Only allow valid providers by checking if they are found in the entry point
            for provider in autosubliminal.SUBLIMINALPROVIDERLIST:
                if provider.lower() not in autosubliminal.SUBLIMINALPROVIDERSENTRYPOINT.keys():
                    autosubliminal.SUBLIMINALPROVIDERLIST.remove(provider)
        else:
            autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERSENTRYPOINT.keys()
    else:
        # Subliminal section is missing
        autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERSENTRYPOINT.keys()

    if cfg.has_section('dev'):
        if cfg.has_option('dev', 'apikey'):
            autosubliminal.APIKEY = cfg.get('dev', 'apikey')

    # Check if config needs to be upgraded
    if autosubliminal.CONFIGVERSION < version.CONFIG_VERSION:
        upgrade_config(autosubliminal.CONFIGVERSION, version.CONFIG_VERSION)
    elif autosubliminal.CONFIGVERSION > version.CONFIG_VERSION:
        print "ERROR: Config version higher then this version of Auto-Subliminal supports. Update Auto-Subliminal."
        os._exit(1)

    # Settings
    autosubliminal.SHOWID_CACHE = {}

    # If needed add default namemappings here
    # This dictionary maps local series names to TVDB ID's
    # Example: namemapping = {"Arrow" : "257655", "Grimm" : "248736"}
    autosubliminal.NAMEMAPPING = {}
    autosubliminal.NAMEMAPPINGUPPER = {}
    for x in autosubliminal.NAMEMAPPING.keys():
        autosubliminal.NAMEMAPPINGUPPER[x.upper()] = autosubliminal.NAMEMAPPING[x]

    autosubliminal.LASTESTDOWNLOAD = []


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
        #no config yet
        pass

    if cfg.has_section('subliminal'):
        autosubliminal.SUBLIMINALPROVIDERS = cfg.get('subliminal', 'providers')
        autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERS.split(',')
    else:
        autosubliminal.SUBLIMINALPROVIDERLIST = autosubliminal.SUBLIMINALPROVIDERSENTRYPOINT.keys()


def apply_namemapping():
    """
    Read namemapping in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        pass

    autosubliminal.SHOWID_CACHE = {}
    if cfg.has_section("namemapping"):
        autosubliminal.USERNAMEMAPPING = dict(cfg.items('namemapping'))
    else:
        autosubliminal.USERNAMEMAPPING = {}
    autosubliminal.USERNAMEMAPPINGUPPER = {}
    for x in autosubliminal.USERNAMEMAPPING.keys():
        autosubliminal.USERNAMEMAPPINGUPPER[x.upper()] = autosubliminal.USERNAMEMAPPING[x]


def apply_skipshow():
    """
    Read skipshow in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        #no config yet
        pass

    if cfg.has_section('skipshow'):
        autosubliminal.SKIPSHOW = dict(cfg.items('skipshow'))
    else:
        autosubliminal.SKIPSHOW = {}
    autosubliminal.SKIPSHOWUPPER = {}
    for x in autosubliminal.SKIPSHOW:
        autosubliminal.SKIPSHOWUPPER[x.upper()] = autosubliminal.SKIPSHOW[x].split(',')


def apply_allsettings():
    """
    Read subliminal, namemapping and skipshow from the config file.
    """
    apply_subliminal()
    apply_namemapping()
    apply_skipshow()


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


def display_namemapping():
    """
    Return a string containing all info from user namemapping.
    After each shows namemapping an '\n' is added to create multiple rows
    in a textarea.
    """
    s = ""
    for x in autosubliminal.USERNAMEMAPPING:
        s += x + " = " + str(autosubliminal.USERNAMEMAPPING[x]) + "\n"
    return s

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

    cfg.set(section, "path", autosubliminal.PATH)
    cfg.set(section, "videopaths", unicode(str(autosubliminal.VIDEOPATHS)))
    cfg.set(section, "logfile", autosubliminal.LOGFILE)
    cfg.set(section, "launchbrowser", str(autosubliminal.LAUNCHBROWSER))
    cfg.set(section, "fallbacktoeng", str(autosubliminal.FALLBACKTOENG))
    cfg.set(section, "downloadeng", str(autosubliminal.DOWNLOADENG))
    cfg.set(section, "subeng", autosubliminal.SUBENG)
    cfg.set(section, "subnl", autosubliminal.SUBNL)
    cfg.set(section, "notifyen", str(autosubliminal.NOTIFYEN))
    cfg.set(section, "notifynl", str(autosubliminal.NOTIFYNL))
    cfg.set(section, "postprocesscmd", autosubliminal.POSTPROCESSCMD)
    cfg.set(section, "minmatchscore", str(autosubliminal.MINMATCHSCORE))
    cfg.set(section, "matchcodec", str(autosubliminal.MATCHCODEC))
    cfg.set(section, "matchquality", str(autosubliminal.MATCHQUALITY))
    cfg.set(section, "matchreleasegroup", str(autosubliminal.MATCHRELEASEGROUP))
    cfg.set(section, "skiphiddendirs", str(autosubliminal.SKIPHIDDENDIRS))
    cfg.set(section, "scandisk", str(autosubliminal.SCHEDULERSCANDISK))
    cfg.set(section, "checksub", str(autosubliminal.SCHEDULERCHECKSUB))
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

    cfg.set(section, "loglevel", logging.getLevelName(int(autosubliminal.LOGLEVEL)).lower())
    cfg.set(section, "lognum", str(autosubliminal.LOGNUM))
    cfg.set(section, "logsize", str(autosubliminal.LOGSIZE))
    cfg.set(section, "loglevelconsole", logging.getLevelName(int(autosubliminal.LOGLEVELCONSOLE)).lower())
    cfg.set(section, "loghttpaccess", str(autosubliminal.LOGHTTPACCESS))
    cfg.set(section, "logreversed", str(autosubliminal.LOGREVERSED))

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
    cfg.set(section, 'webserverport', str(autosubliminal.WEBSERVERPORT))
    cfg.set(section, "username", autosubliminal.USERNAME)
    cfg.set(section, "password", autosubliminal.PASSWORD)
    cfg.set(section, "webroot", autosubliminal.WEBROOT)

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

    cfg.set(section, "providers", str(autosubliminal.SUBLIMINALPROVIDERS))

    with open(autosubliminal.CONFIGFILE, 'wb') as file:
        cfg.write(file)

    # Set all subliminal stuff correct
    apply_subliminal()


def save_usernamemapping_section():
    """
    Save stuff
    """
    section = 'namemapping'

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

    for x in autosubliminal.USERNAMEMAPPING:
        save_config('namemapping', x, autosubliminal.USERNAMEMAPPING[x])

    # Set all namemapping stuff correct
    apply_namemapping()


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
        save_config('skipshow', x, autosubliminal.SKIPSHOW[x])

    # Set all skipshow stuff correct
    apply_skipshow()


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

    cfg.set(section, "notifymail", str(autosubliminal.NOTIFYMAIL))
    cfg.set(section, "mailsrv", autosubliminal.MAILSRV)
    cfg.set(section, 'mailfromaddr', autosubliminal.MAILFROMADDR)
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
    cfg.set(section, "notifynma", str(autosubliminal.NOTIFYNMA))
    cfg.set(section, "nmaapi", autosubliminal.NMAAPI)
    cfg.set(section, "notifygrowl", str(autosubliminal.NOTIFYGROWL))
    cfg.set(section, "growlhost", autosubliminal.GROWLHOST)
    cfg.set(section, "growlport", autosubliminal.GROWLPORT)
    cfg.set(section, "growlpass", autosubliminal.GROWLPASS)
    cfg.set(section, "notifyprowl", str(autosubliminal.NOTIFYPROWL))
    cfg.set(section, "prowlapi", autosubliminal.PROWLAPI)
    cfg.set(section, "prowlpriority", str(autosubliminal.PROWLPRIORITY))

    with open(autosubliminal.CONFIGFILE, 'wb') as file:
        cfg.write(file)


def check_for_restart():
    """
    Check if internal variables are different from the config file.
    Only check the variables the require a restart to take effect
    """
    # TODO: This function is very ugly and should be rewritten comletely. This is not a way to check it!
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, 'r', autosubliminal.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    # Set the default values
    schedulerscandisk = 3600
    schedulerchecksub = 86400
    loglevel = logging.INFO
    loglevelconsole = logging.ERROR
    logsize = 1000000
    lognum = 1
    webserverip = u'0.0.0.0'
    webserverport = 8083
    webroot = u''
    username = u''
    password = u''

    # Check if an option excists in the config file, if so replace the default value
    if cfg.has_section('config'):
        if cfg.has_option('config', 'scandisk'):
            schedulerscandisk = cfg.getint('config', 'scandisk')

        if cfg.has_option('config', 'checksub'):
            schedulerchecksub = cfg.getint('config', 'checksub')

    if cfg.has_option("config", "logfile"):
        logfile = cfg.get("config", "logfile")

    if cfg.has_section('logfile'):
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

        if cfg.has_option("logfile", "logsize"):
            logsize = cfg.getint("logfile", "logsize")

        if cfg.has_option("logfile", "lognum"):
            lognum = cfg.getint("logfile", "lognum")

        if cfg.has_option("logfile", "loghttpaccess"):
            loghttpaccess = cfg.getboolean("logfile", "loghttpaccess")

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
    if schedulerscandisk != autosubliminal.SCHEDULERSCANDISK \
        or schedulerchecksub != autosubliminal.SCHEDULERCHECKSUB \
        or loglevel != autosubliminal.LOGLEVEL \
        or loglevelconsole != autosubliminal.LOGLEVELCONSOLE \
        or logsize != autosubliminal.LOGSIZE \
        or lognum != autosubliminal.LOGNUM \
        or loghttpaccess != autosubliminal.LOGHTTPACCESS \
        or webserverip != autosubliminal.WEBSERVERIP \
        or webserverport != autosubliminal.WEBSERVERPORT \
        or username != autosubliminal.USERNAME \
        or password != autosubliminal.PASSWORD \
        or webroot != autosubliminal.WEBROOT:
        return True
    else:
        return False


def write_config():
    """
    Save all settings to the config file.
    Return message about the write.
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

    # Before we save everything to the config file we need to test if
    # the app needs to be restarted for all changes to take effect,
    # like logfile and webserver sections
    restart = check_for_restart()

    save_config_section()
    save_logfile_section()
    save_webserver_section()
    save_subliminal_section()
    save_usernamemapping_section()
    save_skipshow_section()
    save_notify_section()

    if restart:
        # Restart the runner in the background
        restart_thread = threading.Thread(target=autosubliminal.runner.restart)
        restart_thread.start()
        return "Config saved. Auto restart in progress!<br>" \
               "If your page doesn't reload within 5 seconds," \
               " click <a href='" + autosubliminal.WEBROOT + "/config'>here</a>" \
               "<script type='text/javascript'>setTimeout(refresh, 5000);</script>"
    else:
        # For some reason the needs to be read again, otherwise all pages get an error
        read_config(autosubliminal.CONFIGFILE)
        return "Config saved.<br><a href='" + autosubliminal.WEBROOT + "'>Return</a>"


def upgrade_config(from_version, to_version):
    print "INFO: Upgrading config version from %d to %d." % (from_version, to_version)
    upgrades = to_version - from_version
    if upgrades != 1:
        print "INFO: More than 1 upgrade required. Starting subupgrades."
        for x in range(from_version, upgrades + 1):
            upgrade_config((from_version - 1) + x, x + 1)
    else:
        if from_version == 1 and to_version == 2:
            print "INFO: Upgrading minmatchscore."
            print "INFO: Old value minmatchscore: %d" % autosubliminal.MINMATCHSCORE
            if (autosubliminal.MINMATCHSCORE % 2) == 0:
                autosubliminal.MINMATCHSCORE = (autosubliminal.MINMATCHSCORE * 2) + 2
            else:
                autosubliminal.MINMATCHSCORE = (autosubliminal.MINMATCHSCORE * 2) + 1
            print "INFO: New value minmatchscore: %d" % autosubliminal.MINMATCHSCORE
            print "INFO: Config upgraded to version 2."
            autosubliminal.CONFIGVERSION = 2
            autosubliminal.CONFIGUPGRADED = True

        # use subliminal scores (see examples below on how it is calculated)
        ###########################
        # Suliminal version > 0.7.3
        ###########################
        # video.scores['episode'] = 6
        # video.scores['series'] = 24
        # video.scores['season'] = 6
        # video.scores['year'] = 24 -> TODO: TO BE CHECKED IF OK TO BE DEFAULT
        # --> these 4 should always be matched by default -> not visible in GUI -> minmatchscore = 60
        # video.scores['resolution'] = 2
        # video.scores['release_group'] = 6
        # video.scores['video_codec'] = 2
        # --> these 3 are configurable -> max minmatchscore = 60 + 2 + 6 + 2 = 70
        # video.scores['hash'] = 46
        # --> perfect match -> not configurable
        #########################
        # Suliminal version 0.7.3
        #########################
        # video.scores['episode'] = 6
        # video.scores['series'] = 23
        # video.scores['season'] = 6
        # --> these 3 should always be matched by default -> not visible in GUI -> minmatchscore = 35
        # video.scores['resolution'] = 2
        # video.scores['release_group'] = 6
        # video.scores['video_codec'] = 2
        # --> these 3 are configurable -> max minmatchscore = 35 + 2 + 6 + 2 = 45
        # video.scores['hash'] = 46
        # --> perfect match -> not configurable
        if from_version == 2 and to_version == 3:
            print "INFO: New default minmatchscore."
            print "INFO: Old value minmatchscore: %d" % autosubliminal.MINMATCHSCORE
            autosubliminal.MINMATCHSCORE = autosubliminal.MINMATCHSCOREDEFAULT
            autosubliminal.MATCHQUALITY = False
            autosubliminal.MATCHCODEC = False
            autosubliminal.MATCHRELEASEGROUP = False
            print "INFO: New value minmatchscore: %d" % autosubliminal.MINMATCHSCORE
            print "INFO: Replacing old user namemappings with tvdb id's."
            for x in autosubliminal.USERNAMEMAPPING.keys():
                # Search for tvdb id
                tvdb_id = utils.get_showid(x, force_search=True)
                # Replace by tvdb id or remove namemapping
                if tvdb_id:
                    autosubliminal.USERNAMEMAPPING[x] = str(tvdb_id)
                    autosubliminal.USERNAMEMAPPINGUPPER[x.upper()] = str(tvdb_id)
                else:
                    del autosubliminal.USERNAMEMAPPING[x]
                    del autosubliminal.USERNAMEMAPPINGUPPER[x.upper()]
            print "INFO: Config upgraded to version 3."
            autosubliminal.CONFIGVERSION = 3
            autosubliminal.CONFIGUPGRADED = True