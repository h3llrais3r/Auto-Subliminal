import Config
import logging
import logging.handlers
import time
from autosub.version import autosubversion

ROOTPATH=None
FALLBACKTOENG=None
DOWNLOADENG=None
SUBENG=None
LOGFILE=None
SUBNL=None
SKIPHIDDENDIRS=None
NOTIFYNL=None
NOTIFYEN=None
LOGLEVEL=None
LOGLEVELCONSOLE=None
LOGSIZE=None
LOGNUM=None
SKIPSHOW=None
SKIPSHOWUPPER=None
USERNAMEMAPPING=None
USERNAMEMAPPINGUPPER=None
NAMEMAPPING=None
NAMEMAPPINGUPPER=None
SHOWID_CACHE=None
POSTPROCESSCMD=None
CONFIGFILE=None
PATH=None
MINMATCHSCORE=None
CONFIGVERSION=None
CONFIGUPGRADED=None

WANTEDQUEUE=None
WANTEDQUEUELOCK=False
LASTESTDOWNLOAD=None

APIKEY=None
API=None
APICALLS=None
APICALLSLASTRESET=None
APICALLSRESETINT=None
APICALLSMAX=None
TIMEOUT=None

SCHEDULERSCANDISK=None
SCHEDULERCHECKSUB=None

SCANDISK=None
CHECKSUB=None
DOWNLOADSUBS=None

WEBSERVERIP=None
WEBSERVERPORT=None
LAUNCHBROWSER=True
USERNAME=None
PASSWORD=None
WEBROOT=None

NOTIFYMAIL=None
MAILSRV=None
MAILFROMADDR=None
MAILTOADDR=None
MAILUSERNAME=None
MAILPASSWORD=None
MAILSUBJECT=None
MAILAUTH=None
MAILENCRYPTION=None
NOTIFYGROWL=None
GROWLHOST=None
GROWLPORT=None
GROWLPASS=None
NOTIFYTWITTER=None
TWITTERKEY=None
TWITTERSECRET=None
NOTIFYNMA=None
NMAAPI=None
NOTIFYPROWL=None
PROWLAPI=None
PROWLPRIORITY=None
PUSHALOTAPI=None
NOTIFYPUSHALOT=None

DAEMON=None

SUBLIMINALPROVIDERS=None
SUBLIMINALPROVIDERLIST=None
SUBLIMINALCACHEFILE=None
DOGPILECACHEFILE=None

DBFILE=None
DBVERSION=None

VERSIONURL=None
USERAGENT=None

SYSENCODING=None
MOBILEUSERAGENTS=None
MOBILEAUTOSUB=None

def Initialize():
    global ROOTPATH, FALLBACKTOENG, SUBENG, LOGFILE, SUBNL, LOGLEVEL, SKIPHIDDENDIRS, \
    SUBNL, LOGLEVEL, LOGLEVELCONSOLE, LOGSIZE, LOGNUM, SKIPSHOW, SKIPSHOWUPPER, \
    USERNAMEMAPPING, USERNAMEMAPPINGUPPER, NAMEMAPPING, NAMEMAPPINGUPPER, \
    SHOWID_CACHE, POSTPROCESSCMD, CONFIGFILE, WORKDIR, NOTIFYEN, NOTIFYNL, \
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
    USERAGENT, VERSIONURL

    DBFILE = 'database.db'

    SUBLIMINALCACHEFILE = 'subliminal.cache.dbm'
    DOGPILECACHEFILE = 'dogpile.cache.dbm'
    
    release = autosubversion.split(' ')[0]
    versionnumber = autosubversion.split(' ')[1]
    
    VERSIONURL = 'http://auto-sub.googlecode.com/hg/autosub/version.py'
    USERAGENT = 'AutoSub/' + versionnumber + release.lower()[0]
    
    WANTEDQUEUE = []

    APIKEY = "BB442E7744E9B541"
    TIMEOUT = 300 #default http timeout
    
    if CONFIGFILE==None:
        CONFIGFILE = "config.properties"
    
    Config.ReadConfig(CONFIGFILE)
    
    if CONFIGUPGRADED:
        print "AutoSub: Config seems to be upgraded. Writing config"
        Config.WriteConfig()
        print "AutoSub: Writing config done"
    
    API = "http://api.bierdopje.com/%s/" %APIKEY
    
    MOBILEUSERAGENTS = ["midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", 
                        "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", 
                        "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem",
                        "samsung", "sda", "sgh-", "vodafone", "xda", "palm", "iphone", "ipod", 
                        "ipad", "android", "windows phone"]
    MOBILEAUTOSUB = True
    
    APICALLSLASTRESET = time.time()
    APICALLSRESETINT = 86400
    APICALLSMAX = 300
    APICALLS = APICALLSMAX

    initLogging()
    
def initLogging():
    global LOGFILE, LOGLEVEL, LOGSIZE, LOGNUM, LOGLEVELCONSOLE, \
    DAEMON
    
    # initialize logging (customize the root logger so every logger outputs to this)
    log = logging.root
    log.setLevel(LOGLEVEL)

    log_script = logging.handlers.RotatingFileHandler(LOGFILE, 'a', LOGSIZE, LOGNUM)
    log_script_formatter=logging.Formatter('%(asctime)s %(levelname)s  %(message)s')
    log_script.setFormatter(log_script_formatter)
    log_script.setLevel(LOGLEVEL)
    log.addHandler(log_script)
    
    #CONSOLE log handler
    if DAEMON!=True:
        console = logging.StreamHandler()
        console.setLevel(LOGLEVELCONSOLE)
        # set a format which is simpler for console use
        formatter = logging.Formatter('%(asctime)s %(levelname)s  %(message)s')
        console.setFormatter(formatter)
        log.addHandler(console)
