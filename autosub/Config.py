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

import autosub
from autosub import version

log = logging.getLogger(__name__)


def read_config(configfile):
    """
    Read the config file and set all the variables.
    """

    # Read config file
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        print "********************************************************************"
        print "ERROR: Not a valid configuration file! Using default values instead!"
        print "********************************************************************"
        cfg = SafeConfigParser()

    if cfg.has_section('config'):
        if cfg.has_option('config', 'path'):
            autosub.PATH = cfg.get('config', 'path')
        else:
            print "ERROR: Required ariable PATH is missing. Using current working directory instead."
            autosub.PATH = unicode(os.getcwd(), autosub.SYSENCODING)

        if cfg.has_option('config', 'downloadeng'):
            autosub.DOWNLOADENG = cfg.getboolean('config', 'downloadeng')
        else:
            autosub.DOWNLOADENG = False

        # use subliminal scores (see examples below on how it is calculated)
        # score calculation for version > 0.7.3
        # video.scores['episode']+video.scores['series']+video.scores['season']+video.scores['resolution']+video.scores['year']+video.scores['release_group'] = 68
        # video.scores['episode']+video.scores['series']+video.scores['season']+video.scores['video_codec']+video.scores['resolution']+video.scores['year']+video.scores['release_group'] = 70
        # video.scores['hash'] = 71
        # score calculation for version = 0.7.3
        # video.scores['episode']+video.scores['series']+video.scores['season']+video.scores['resolution']+video.scores['release_group'] = 43
        # video.scores['episode']+video.scores['series']+video.scores['season']+video.scores['video_codec']+video.scores['resolution']+video.scores['release_group'] = 45
        # video.scores['hash'] = 46
        if cfg.has_option('config', 'minmatchscore'):
            autosub.MINMATCHSCORE = int(cfg.get('config', 'minmatchscore'))
        else:
            autosub.MINMATCHSCORE = 43

        if cfg.has_option('config', 'scandisk'):
            autosub.SCHEDULERSCANDISK = int(cfg.get('config', 'scandisk'))
        else:
            autosub.SCHEDULERSCANDISK = 3600

        if cfg.has_option('config', 'checksub'):
            autosub.SCHEDULERCHECKSUB = int(cfg.get('config', 'checksub'))
            # CHECKSUB may only be runed 6 times a day, to prevent the API key from being banned
            # If you want new subtitles faster, you should decrease the CHECKSUB time
            if autosub.SCHEDULERCHECKSUB < 21600:
                print "WARNING: checksub variable is lower then 21600. This is not allowed, this is to prevent our API-key from being banned."
                autosub.SCHEDULERCHECKSUB = 21600  # Run every 6 hours
        else:
            autosub.SCHEDULERCHECKSUB = 86400  # Run every 8 hours

        if cfg.has_option("config", "rootpath"):
            autosub.ROOTPATH = cfg.get("config", "rootpath")
        else:
            print "ERROR: Required variable ROOTPATH is missing. Using current working directory instead."
            autosub.ROOTPATH = unicode(os.getcwd(), autosub.SYSENCODING)

        if cfg.has_option("config", "fallbacktoeng"):
            autosub.FALLBACKTOENG = cfg.getboolean("config", "fallbacktoeng")
        else:
            autosub.FALLBACKTOENG = True

        if cfg.has_option("config", "subeng"):
            autosub.SUBENG = cfg.get("config", "subeng")
        else:
            autosub.SUBENG = 'en'

        if cfg.has_option("config", "subnl"):
            autosub.SUBNL = cfg.get("config", "subnl")
        else:
            autosub.SUBNL = u""

        if cfg.has_option("config", "notifyen"):
            autosub.NOTIFYEN = cfg.getboolean("config", "notifyen")
        else:
            autosub.NOTIFYEN = True

        if cfg.has_option("config", "notifynl"):
            autosub.NOTIFYNL = cfg.getboolean("config", "notifynl")
        else:
            autosub.NOTIFYNL = True

        if cfg.has_option("config", "workdir"):
            autosub.PATH = cfg.get("config", "workdir")
            print "WARNING: Workdir is an old variable. Replace it with 'path'."

        if cfg.has_option("config", "logfile"):
            autosub.LOGFILE = cfg.get("config", "logfile")
        else:
            print "ERROR: Required variable LOGFILE is missing. Using 'AutoSubService.log' instead."
            autosub.LOGFILE = u"AutoSubService.log"

        if cfg.has_option("config", "postprocesscmd"):
            autosub.POSTPROCESSCMD = cfg.get("config", "postprocesscmd")

        if cfg.has_option("config", "configversion"):
            autosub.CONFIGVERSION = int(cfg.get("config", "configversion"))
        else:
            autosub.CONFIGVERSION = 1

        if cfg.has_option("config", "launchbrowser"):
            autosub.LAUNCHBROWSER = cfg.getboolean("config", "launchbrowser")

        if cfg.has_option("config", "skiphiddendirs"):
            autosub.SKIPHIDDENDIRS = cfg.getboolean("config", "skiphiddendirs")
        else:
            autosub.SKIPHIDDENDIRS = False

    else:
        # config section is missing
        print "ERROR: Required config section is missing. Using default values instead."
        print "ERROR: Required variable ROOTPATH is missing. Using current working directory instead."
        autosub.PATH = unicode(os.getcwd(), autosub.SYSENCODING)
        autosub.DOWNLOADENG = False
        autosub.MINMATCHSCORE = 43
        autosub.SCHEDULERSCANDISK = 3600
        autosub.SCHEDULERCHECKSUB = 28800
        print "ERROR: Required variable ROOTPATH is missing. Using current working directory instead."
        autosub.ROOTPATH = unicode(os.getcwd(), autosub.SYSENCODING)
        autosub.FALLBACKTOENG = True
        autosub.SUBENG = u'en'
        autosub.SUBNL = u""
        autosub.NOTIFYEN = True
        autosub.NOTIFYNL = True
        autosub.SKIPHIDDENDIRS = False
        print "ERROR: Required variable LOGFILE is missing. Using 'AutoSubService.log' instead."
        autosub.LOGFILE = u"AutoSubService.log"
        autosub.CONFIGVERSION = version.CONFIG_VERSION

    if autosub.CONFIGVERSION < version.CONFIG_VERSION:
        upgrade_config(autosub.CONFIGVERSION, version.CONFIG_VERSION)
    elif autosub.CONFIGVERSION > version.CONFIG_VERSION:
        print "ERROR: Config version higher then this version of AutoSubliminal supports. Update AutoSubliminal."
        os._exit(1)

    if cfg.has_section('logfile'):
        if cfg.has_option("logfile", "loglevel"):
            autosub.LOGLEVEL = cfg.get("logfile", "loglevel")
            if autosub.LOGLEVEL.lower() == u'error':
                autosub.LOGLEVEL = logging.ERROR
            elif autosub.LOGLEVEL.lower() == u"warning":
                autosub.LOGLEVEL = logging.WARNING
            elif autosub.LOGLEVEL.lower() == u"debug":
                autosub.LOGLEVEL = logging.DEBUG
            elif autosub.LOGLEVEL.lower() == u"info":
                autosub.LOGLEVEL = logging.INFO
            elif autosub.LOGLEVEL.lower() == u"critical":
                autosub.LOGLEVEL = logging.CRITICAL
        else:
            autosub.LOGLEVEL = logging.INFO

        if cfg.has_option("logfile", "loglevelconsole"):
            autosub.LOGLEVELCONSOLE = cfg.get("logfile", "loglevelconsole")
            if autosub.LOGLEVELCONSOLE.lower() == u'error':
                autosub.LOGLEVELCONSOLE = logging.ERROR
            elif autosub.LOGLEVELCONSOLE.lower() == u"warning":
                autosub.LOGLEVELCONSOLE = logging.WARNING
            elif autosub.LOGLEVELCONSOLE.lower() == u"debug":
                autosub.LOGLEVELCONSOLE = logging.DEBUG
            elif autosub.LOGLEVELCONSOLE.lower() == u"info":
                autosub.LOGLEVELCONSOLE = logging.INFO
            elif autosub.LOGLEVELCONSOLE.lower() == u"critical":
                autosub.LOGLEVELCONSOLE = logging.CRITICAL
        else:
            autosub.LOGLEVELCONSOLE = logging.ERROR

        if cfg.has_option("logfile", "logsize"):
            autosub.LOGSIZE = int(cfg.get("logfile", "logsize"))
        else:
            autosub.LOGSIZE = 1000000

        if cfg.has_option("logfile", "lognum"):
            autosub.LOGNUM = int(cfg.get("logfile", "lognum"))
        else:
            autosub.LOGNUM = 3

    else:
        # Logfile section is missing, so set defaults for all options
        autosub.LOGLEVEL = logging.INFO
        autosub.LOGLEVELCONSOLE = logging.ERROR
        autosub.LOGSIZE = 1000000
        autosub.LOGNUM = 1

    if cfg.has_section('webserver'):
        if cfg.has_option('webserver', 'webserverip') and cfg.has_option('webserver', 'webserverport'):
            autosub.WEBSERVERIP = cfg.get('webserver', 'webserverip')
            autosub.WEBSERVERPORT = int(cfg.get('webserver', 'webserverport'))

        else:
            print "ERROR: Webserver IP and port are required! Now setting the default values (0.0.0.0:8083)."
            autosub.WEBSERVERIP = u"0.0.0.0"
            autosub.WEBSERVERPORT = 8083

        if cfg.has_option('webserver', 'webroot'):
            autosub.WEBROOT = cfg.get('webserver', 'webroot')
        else:
            autosub.WEBROOT = u''

        if cfg.has_option('webserver', 'username') and cfg.has_option('webserver', 'password'):
            autosub.USERNAME = cfg.get('webserver', 'username')
            autosub.PASSWORD = cfg.get('webserver', 'password')
        elif cfg.has_option('webserver', 'username') or cfg.has_option('webserver', 'password'):
            print "ERROR: Both username and password are required Now starting without authentication"
    else:
        print "ERROR: The webserver section is required! Now setting the default values (0.0.0.0:8083)."
        print "WARNING: The webserver is started without authentication"
        autosub.WEBSERVERIP = u'0.0.0.0'
        autosub.WEBSERVERPORT = 8083
        autosub.WEBROOT = u''

    if cfg.has_section('skipshow'):
        # Try to read skipshow section in the config
        autosub.SKIPSHOW = dict(cfg.items('skipshow'))
        # The following 4 lines convert the skipshow to uppercase. And also convert the variables to a list
        autosub.SKIPSHOWUPPER = {}
        for x in autosub.SKIPSHOW:
            autosub.SKIPSHOWUPPER[x.upper()] = autosub.SKIPSHOW[x].split(',')
    else:
        autosub.SKIPSHOW = {}
        autosub.SKIPSHOWUPPER = {}

    if cfg.has_section('namemapping'):
        autosub.USERNAMEMAPPING = dict(cfg.items('namemapping'))
        autosub.USERNAMEMAPPINGUPPER = {}
        for x in autosub.USERNAMEMAPPING.keys():
            autosub.USERNAMEMAPPINGUPPER[x.upper()] = autosub.USERNAMEMAPPING[x]
    else:
        autosub.USERNAMEMAPPING = {}
        autosub.USERNAMEMAPPINGUPPER = {}

    if cfg.has_section('notify'):
        # Mail
        if cfg.has_option('notify', 'notifymail'):
            autosub.NOTIFYMAIL = cfg.getboolean('notify', 'notifymail')
        else:
            autosub.NOTIFYMAIL = False

        if cfg.has_option('notify', 'mailsrv'):
            autosub.MAILSRV = cfg.get('notify', 'mailsrv')
        else:
            autosub.MAILSRV = u"smtp.gmail.com:587"

        if cfg.has_option('notify', 'mailfromaddr'):
            autosub.MAILFROMADDR = cfg.get('notify', 'mailfromaddr')
        else:
            autosub.MAILFROMADDR = u"example@gmail.com"

        if cfg.has_option('notify', 'mailtoaddr'):
            autosub.MAILTOADDR = cfg.get('notify', 'mailtoaddr')
        else:
            autosub.MAILTOADDR = u"example@gmail.com"

        if cfg.has_option('notify', 'mailusername'):
            autosub.MAILUSERNAME = cfg.get('notify', 'mailusername')
        else:
            autosub.MAILUSERNAME = u"example@gmail.com"

        if cfg.has_option('notify', 'mailpassword'):
            autosub.MAILPASSWORD = cfg.get('notify', 'mailpassword')
        else:
            autosub.MAILPASSWORD = u"mysecretpassword"

        if cfg.has_option('notify', 'mailsubject'):
            autosub.MAILSUBJECT = cfg.get('notify', 'mailsubject')
        else:
            autosub.MAILSUBJECT = u"Auto-Sub downloaded"

        if cfg.has_option('notify', 'mailencryption'):
            autosub.MAILENCRYPTION = cfg.get('notify', 'mailencryption')
        else:
            autosub.MAILENCRYPTION = u"TLS"

        if cfg.has_option('notify', 'mailauth'):
            autosub.MAILAUTH = cfg.get('notify', 'mailauth')
        else:
            autosub.MAILAUTH = u""

        # Growl
        if cfg.has_option('notify', 'notifygrowl'):
            autosub.NOTIFYGROWL = cfg.getboolean('notify', 'notifygrowl')
        else:
            autosub.NOTIFYGROWL = False

        if cfg.has_option('notify', 'growlhost'):
            autosub.GROWLHOST = cfg.get('notify', 'growlhost')
        else:
            autosub.GROWLHOST = u"127.0.0.1"

        if cfg.has_option('notify', 'growlport'):
            autosub.GROWLPORT = cfg.get('notify', 'growlport')
        else:
            autosub.GROWLPORT = u"23053"

        if cfg.has_option('notify', 'growlpass'):
            autosub.GROWLPASS = cfg.get('notify', 'growlpass')
        else:
            autosub.GROWLPASS = u"mysecretpassword"

        # Twitter
        if cfg.has_option('notify', 'notifytwitter'):
            autosub.NOTIFYTWITTER = cfg.getboolean('notify', 'notifytwitter')
        else:
            autosub.NOTIFYTWITTER = False

        if cfg.has_option('notify', 'twitterkey'):
            autosub.TWITTERKEY = cfg.get('notify', 'twitterkey')
        else:
            autosub.TWITTERKEY = u"token key"

        if cfg.has_option('notify', 'twittersecret'):
            autosub.TWITTERSECRET = cfg.get('notify', 'twittersecret')
        else:
            autosub.TWITTERSECRET = u"token secret"

        # Notify My Android
        if cfg.has_option('notify', 'notifynma'):
            autosub.NOTIFYNMA = cfg.getboolean('notify', 'notifynma')
        else:
            autosub.NOTIFYNMA = False

        if cfg.has_option('notify', 'nmaapi'):
            autosub.NMAAPI = cfg.get('notify', 'nmaapi')
        else:
            autosub.NMAAPI = u"API key"

        # Prowl
        if cfg.has_option('notify', 'notifyprowl'):
            autosub.NOTIFYPROWL = cfg.getboolean('notify', 'notifyprowl')
        else:
            autosub.NOTIFYPROWL = False

        if cfg.has_option('notify', 'prowlapi'):
            autosub.PROWLAPI = cfg.get('notify', 'prowlapi')
        else:
            autosub.PROWLAPI = u"API key"

        if cfg.has_option('notify', 'prowlpriority'):
            autosub.PROWLPRIORITY = int(cfg.get('notify', 'prowlpriority'))
        else:
            autosub.PROWLPRIORITY = 0

        # Pushalot - Windows Phone and Windows 8 notifier
        if cfg.has_option('notify', 'notifypushalot'):
            autosub.NOTIFYPUSHALOT = cfg.getboolean('notify', 'notifypushalot')
        else:
            autosub.NOTIFYPUSHALOT = False

        if cfg.has_option('notify', 'pushalotapi'):
            autosub.PUSHALOTAPI = cfg.get('notify', 'pushalotapi')
        else:
            autosub.PUSHALOTAPI = u"API key"

    else:
        # Notify section is missing
        autosub.NOTIFYMAIL = False
        autosub.MAILSRV = u"smtp.gmail.com:587"
        autosub.MAILFROMADDR = u"example@gmail.com"
        autosub.MAILTOADDR = u"example@gmail.com"
        autosub.MAILUSERNAME = u"example@gmail.com"
        autosub.MAILPASSWORD = u"mysecretpassword"
        autosub.MAILSUBJECT = u"Subs info"
        autosub.MAILENCRYPTION = u"TLS"
        autosub.NOTIFYGROWL = False
        autosub.GROWLHOST = u"127.0.0.1"
        autosub.GROWLPORT = u"23053"
        autosub.GROWLPASS = u"mysecretpassword"
        autosub.NOTIFYTWITTER = False
        autosub.TWITTERKEY = u"token key"
        autosub.TWITTERSECRET = u"token secret"
        autosub.NOTIFYNMA = False
        autosub.NMAAPI = u"API key"
        autosub.PROWLAPI = u"API key"
        autosub.NOTIFYPROWL = False
        autosub.NOTIFYPUSHALOT = False
        autosub.PUSHALOTAPI = u"API key"

    if cfg.has_section('dev'):
        if cfg.has_option('dev', 'apikey'):
            autosub.APIKEY = cfg.get('dev', 'apikey')

    if cfg.has_section('subliminal'):
        autosub.SUBLIMINALPROVIDERS = cfg.get('subliminal', 'providers')
        if autosub.SUBLIMINALPROVIDERS:
            autosub.SUBLIMINALPROVIDERLIST = autosub.SUBLIMINALPROVIDERS.split(',')

    # Settings
    autosub.SHOWID_CACHE = {}

    # This dictionary maps local series names to TVDB ID's
    # If needed add default mappings here, but currently not used because TVDB ID is retrieved when checking for subs
    # Example: namemapping = {"Arrow" : "257655", "Grimm" : "248736"}
    autosub.NAMEMAPPING = {}
    autosub.NAMEMAPPINGUPPER = {}
    for x in autosub.NAMEMAPPING.keys():
        autosub.NAMEMAPPINGUPPER[x.upper()] = autosub.NAMEMAPPING[x]

    autosub.LASTESTDOWNLOAD = []


def save_to_config(section=None, variable=None, value=None):
    """
    Add a variable and value to section in the config file.
    
    Keyword arguments:
    section -- Section to with the variable - value pair will be added
    variable -- Option that will be added to the config file
    value -- Value of the variable that will be added
    """

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
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
        with open(autosub.CONFIGFILE, 'wb') as file:
            cfg.write(file)


def apply_name_mapping():
    """
    Read namemapping in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        pass

    autosub.SHOWID_CACHE = {}
    if cfg.has_section("namemapping"):
        autosub.USERNAMEMAPPING = dict(cfg.items('namemapping'))
    else:
        autosub.USERNAMEMAPPING = {}
    autosub.USERNAMEMAPPINGUPPER = {}
    for x in autosub.USERNAMEMAPPING.keys():
        autosub.USERNAMEMAPPINGUPPER[x.upper()] = autosub.USERNAMEMAPPING[x]


def apply_skip_show():
    """
    Read skipshow in the config file.
    """
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        #no config yet
        pass

    if cfg.has_section('skipshow'):
        autosub.SKIPSHOW = dict(cfg.items('skipshow'))
    else:
        autosub.SKIPSHOW = {}
    autosub.SKIPSHOWUPPER = {}
    for x in autosub.SKIPSHOW:
        autosub.SKIPSHOWUPPER[x.upper()] = autosub.SKIPSHOW[x].split(',')


def apply_all_settings():
    """
    Read namemapping and skipshow from the config file.
    """
    apply_name_mapping()
    apply_skip_show()


def display_skip_show():
    """
    Return a string containing all info from skipshow.
    After each shows skip info an '\n' is added to create multiple rows
    in a textarea.
    """
    s = ""
    for x in autosub.SKIPSHOW:
        s += x + " = " + str(autosub.SKIPSHOW[x]) + "\n"
    return s


def display_name_mapping():
    """
    Return a string containing all info from user namemapping.
    After each shows namemapping an '\n' is added to create multiple rows
    in a textarea.
    """
    s = ""
    for x in autosub.USERNAMEMAPPING:
        s += x + " = " + str(autosub.USERNAMEMAPPING[x]) + "\n"
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
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "path", autosub.PATH)
    cfg.set(section, "downloadeng", str(autosub.DOWNLOADENG))
    cfg.set(section, "minmatchscore", str(autosub.MINMATCHSCORE))
    cfg.set(section, "scandisk", str(autosub.SCHEDULERSCANDISK))
    cfg.set(section, "checksub", str(autosub.SCHEDULERCHECKSUB))
    cfg.set(section, "rootpath", autosub.ROOTPATH)
    cfg.set(section, "fallbacktoeng", str(autosub.FALLBACKTOENG))
    cfg.set(section, "subeng", autosub.SUBENG)
    cfg.set(section, "subnl", autosub.SUBNL)
    cfg.set(section, "notifyen", str(autosub.NOTIFYEN))
    cfg.set(section, "notifynl", str(autosub.NOTIFYNL))
    cfg.set(section, "logfile", autosub.LOGFILE)
    cfg.set(section, "postprocesscmd", autosub.POSTPROCESSCMD)
    cfg.set(section, "configversion", str(autosub.CONFIGVERSION))
    cfg.set(section, "launchbrowser", str(autosub.LAUNCHBROWSER))
    cfg.set(section, "skiphiddendirs", str(autosub.SKIPHIDDENDIRS))

    with codecs.open(autosub.CONFIGFILE, 'wb', encoding=autosub.SYSENCODING) as file:
        cfg.write(file)


def save_logfile_section():
    """
    Save stuff
    """
    section = 'logfile'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "loglevel", logging.getLevelName(int(autosub.LOGLEVEL)).lower())
    cfg.set(section, "loglevelconsole", logging.getLevelName(int(autosub.LOGLEVELCONSOLE)).lower())
    cfg.set(section, "logsize", str(autosub.LOGSIZE))
    cfg.set(section, "lognum", str(autosub.LOGNUM))

    with open(autosub.CONFIGFILE, 'wb') as file:
        cfg.write(file)


def save_webserver_section():
    """
    Save stuff
    """
    section = 'webserver'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "webserverip", str(autosub.WEBSERVERIP))
    cfg.set(section, 'webserverport', str(autosub.WEBSERVERPORT))
    cfg.set(section, "username", autosub.USERNAME)
    cfg.set(section, "password", autosub.PASSWORD)
    cfg.set(section, "webroot", autosub.WEBROOT)

    with open(autosub.CONFIGFILE, 'wb') as file:
        cfg.write(file)


def save_skipshow_section():
    """
    Save stuff
    """
    section = 'skipshow'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if cfg.has_section(section):
        cfg.remove_section(section)
        cfg.add_section(section)
        with open(autosub.CONFIGFILE, 'wb') as file:
            cfg.write(file)

    for x in autosub.SKIPSHOW:
        save_to_config('skipshow', x, autosub.SKIPSHOW[x])

    # Set all skipshow stuff correct
    apply_skip_show()


def save_usernamemapping_section():
    """
    Save stuff
    """
    section = 'namemapping'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if cfg.has_section(section):
        cfg.remove_section(section)
        cfg.add_section(section)
        with open(autosub.CONFIGFILE, 'wb') as file:
            cfg.write(file)

    for x in autosub.USERNAMEMAPPING:
        save_to_config('namemapping', x, autosub.USERNAMEMAPPING[x])

    # Set all namemapping stuff correct
    apply_name_mapping()


def save_notify_section():
    """
    Save stuff
    """
    section = 'notify'

    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config yet
        cfg = SafeConfigParser()
        pass

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, "notifymail", str(autosub.NOTIFYMAIL))
    cfg.set(section, "mailsrv", autosub.MAILSRV)
    cfg.set(section, 'mailfromaddr', autosub.MAILFROMADDR)
    cfg.set(section, "mailtoaddr", autosub.MAILTOADDR)
    cfg.set(section, "mailusername", autosub.MAILUSERNAME)
    cfg.set(section, "mailpassword", autosub.MAILPASSWORD)
    cfg.set(section, "mailsubject", autosub.MAILSUBJECT)
    cfg.set(section, "mailencryption", autosub.MAILENCRYPTION)
    cfg.set(section, "mailauth", autosub.MAILAUTH)
    cfg.set(section, "notifygrowl", str(autosub.NOTIFYGROWL))
    cfg.set(section, "growlhost", autosub.GROWLHOST)
    cfg.set(section, "growlport", autosub.GROWLPORT)
    cfg.set(section, "growlpass", autosub.GROWLPASS)
    cfg.set(section, "notifynma", str(autosub.NOTIFYNMA))
    cfg.set(section, "nmaapi", autosub.NMAAPI)
    cfg.set(section, "notifytwitter", str(autosub.NOTIFYTWITTER))
    cfg.set(section, "twitterkey", autosub.TWITTERKEY)
    cfg.set(section, "twittersecret", autosub.TWITTERSECRET)
    cfg.set(section, "notifyprowl", str(autosub.NOTIFYPROWL))
    cfg.set(section, "prowlapi", autosub.PROWLAPI)
    cfg.set(section, "prowlpriority", str(autosub.PROWLPRIORITY))
    cfg.set(section, "notifypushalot", str(autosub.NOTIFYPUSHALOT))
    cfg.set(section, "pushalotapi", autosub.PUSHALOTAPI)

    with open(autosub.CONFIGFILE, 'wb') as file:
        cfg.write(file)


def check_for_restart():
    """
    Check if internal variables are different from the config file.
    Only check the variables the require a restart to take effect
    """
    # TODO: This function is very ugly and should be rewritten comletely. This is not a way to check it!
    cfg = SafeConfigParser()
    try:
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
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
            schedulerscandisk = int(cfg.get('config', 'scandisk'))

        if cfg.has_option('config', 'checksub'):
            schedulerchecksub = int(cfg.get('config', 'checksub'))

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
            logsize = int(cfg.get("logfile", "logsize"))

        if cfg.has_option("logfile", "lognum"):
            lognum = int(cfg.get("logfile", "lognum"))

    if cfg.has_section('webserver'):
        if cfg.has_option('webserver', 'webserverip') and cfg.has_option('webserver', 'webserverport'):
            webserverip = cfg.get('webserver', 'webserverip')
            webserverport = int(cfg.get('webserver', 'webserverport'))
        if cfg.has_option('webserver', 'webroot'):
            webroot = cfg.get('webserver', 'webroot')
        if cfg.has_option('webserver', 'username') and cfg.has_option('webserver', 'password'):
            username = cfg.get('webserver', 'username')
            password = cfg.get('webserver', 'password')

    # Now compare the values, if one differs a restart is required.
    if schedulerscandisk != autosub.SCHEDULERSCANDISK or schedulerchecksub != autosub.SCHEDULERCHECKSUB or loglevel != autosub.LOGLEVEL or loglevelconsole != autosub.LOGLEVELCONSOLE or logsize != autosub.LOGSIZE or lognum != autosub.LOGNUM or webserverip != autosub.WEBSERVERIP or webserverport != autosub.WEBSERVERPORT or username != autosub.USERNAME or password != autosub.PASSWORD or webroot != autosub.WEBROOT:
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
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)
    except:
        # No config file so we create one in autosub.PATH
        if not autosub.CONFIGFILE:
            autosub.CONFIGFILE = "config.properties"
        open(autosub.CONFIGFILE, 'w').close()
        with codecs.open(autosub.CONFIGFILE, 'r', autosub.SYSENCODING) as f:
            cfg.readfp(f)

    # Before we save everything to the config file we need to test if
    # the app needs to be restarted for all changes to take effect,
    # like logfile and webserver sections
    restart = check_for_restart()

    save_config_section()
    save_logfile_section()
    save_webserver_section()
    save_skipshow_section()
    save_usernamemapping_section()
    save_notify_section()

    if restart:
        # This needs to be replaced by a restart thingy, until then, just re-read the config and tell the users to do a manual restart
        read_config(autosub.CONFIGFILE)
        return "Config saved. A manual restart is needed for all changes to take effect. Auto restart will be implemented soon!<br><a href='" + autosub.WEBROOT + "/config'>Return</a>"
    else:
        # For some reason the needs to be read again, otherwise all pages get an error
        read_config(autosub.CONFIGFILE)
        return "Config saved.<br><a href='" + autosub.WEBROOT + "/config'>Return</a>"


def upgrade_config(from_version, to_version):
    print "INFO: Upgrading config version from %d to %d" % (from_version, to_version)
    upgrades = to_version - from_version
    if upgrades != 1:
        print "INFO: More than 1 upgrade required. Starting subupgrades"
        for x in range(from_version, upgrades + 1):
            upgrade_config((from_version - 1) + x, x + 1)
    else:
        if from_version == 1 and to_version == 2:
            print "INFO: Upgrading minmatchscores"
            print "INFO: Old value's Minmatchscore: %d" % autosub.MINMATCHSCORE

            if (autosub.MINMATCHSCORE % 2) == 0:
                autosub.MINMATCHSCORE = (autosub.MINMATCHSCORE * 2) + 2
            else:
                autosub.MINMATCHSCORE = (autosub.MINMATCHSCORE * 2) + 1

            print "INFO: New value's Minmatchscore: %d" % autosub.MINMATCHSCORE
            print "INFO: Config upgraded to version 2"
            autosub.CONFIGVERSION = 2
            autosub.CONFIGUPGRADED = True
