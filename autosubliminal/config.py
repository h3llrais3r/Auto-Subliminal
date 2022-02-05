# coding=utf-8

import codecs
import logging
import os
import shutil
import time
from configparser import ConfigParser

import autosubliminal
from autosubliminal import version
from autosubliminal.core import logger
from autosubliminal.util.websocket import send_websocket_notification

log = logging.getLogger(__name__)

# Config file encoding
ENCODING = 'utf-8'


def read_config(check_upgrade=False):
    """
    Read the config file and set all the variables.
    If specified, it also checks if it needs to upgrade itself.
    """

    # Read config file
    cfg = _create_config_parser()
    try:
        with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
            cfg.read_file(f)
    except Exception:
        print('***********************************************************************')
        print('ERROR: No valid configuration file found. Using default values instead.')
        print('***********************************************************************')
        cfg = _create_config_parser()

    if cfg.has_section('general'):
        if cfg.has_option('general', 'videopaths'):
            video_paths = cfg.get('general', 'videopaths')
            if video_paths:
                autosubliminal.VIDEOPATHS = video_paths.split(',')
            else:
                print('ERROR: Required variable VIDEOPATHS is missing. Please configure at least 1 video path.')
                autosubliminal.VIDEOPATHS = []
        else:
            print('ERROR: Required variable VIDEOPATHS is missing. Please configure at least 1 video path.')
            autosubliminal.VIDEOPATHS = []

        if cfg.has_option('general', 'defaultlanguage'):
            autosubliminal.DEFAULTLANGUAGE = cfg.get('general', 'defaultlanguage')
        else:
            autosubliminal.DEFAULTLANGUAGE = 'en'

        if cfg.has_option('general', 'defaultlanguagesuffix'):
            autosubliminal.DEFAULTLANGUAGESUFFIX = cfg.getboolean('general', 'defaultlanguagesuffix')
        else:
            autosubliminal.DEFAULTLANGUAGESUFFIX = False

        if cfg.has_option('general', 'additionallanguages'):
            additional_languages = cfg.get('general', 'additionallanguages')
            if additional_languages:
                autosubliminal.ADDITIONALLANGUAGES = additional_languages.split(',')
            else:
                autosubliminal.ADDITIONALLANGUAGES = []
        else:
            autosubliminal.ADDITIONALLANGUAGES = []

        if cfg.has_option('general', 'manualsearchwithscoring'):
            autosubliminal.MANUALSEARCHWITHSCORING = cfg.getboolean('general', 'manualsearchwithscoring')
        else:
            autosubliminal.MANUALSEARCHWITHSCORING = True

        if cfg.has_option('general', 'scandiskinterval'):
            autosubliminal.SCANDISKINTERVAL = cfg.getint('general', 'scandiskinterval')
            if autosubliminal.SCANDISKINTERVAL < 1:
                print('WARNING: scandiskinterval variable is lower then 1. Setting it to 1.')
                autosubliminal.SCANDISKINTERVAL = 1  # Run every hour
        else:
            autosubliminal.SCANDISKINTERVAL = 1  # Run every hour

        if cfg.has_option('general', 'checksubinterval'):
            autosubliminal.CHECKSUBINTERVAL = cfg.getint('general', 'checksubinterval')
            if autosubliminal.CHECKSUBINTERVAL < 6:
                print('WARNING: checksubinterval variable is lower then 6. Setting it to 6.')
                print('WARNING: This is not allowed because this will result in being banned from the providers.')
                autosubliminal.CHECKSUBINTERVAL = 6  # Run every 6 hours
        else:
            autosubliminal.CHECKSUBINTERVAL = 24  # Run every 24 hours

        if cfg.has_option('general', 'checksubdeadline'):
            autosubliminal.CHECKSUBDEADLINE = cfg.getint('general', 'checksubdeadline')
            if autosubliminal.CHECKSUBDEADLINE < 1:
                print('WARNING: checksubdeadline variable is lower then 1. Setting it to 1.')
                autosubliminal.CHECKSUBDEADLINE = 1
        else:
            autosubliminal.CHECKSUBDEADLINE = 4  # Default 4 weeks

        if cfg.has_option('general', 'checksubdelta'):
            autosubliminal.CHECKSUBDELTA = cfg.getint('general', 'checksubdelta')
            if autosubliminal.CHECKSUBDELTA < 1:
                print('WARNING: checksubdelta variable cannot be lower than 1 day. Set it to 1 day.')
                autosubliminal.CHECKSUBDELTA = 1
        else:
            autosubliminal.CHECKSUBDELTA = 7  # Default once a week (every 7 days)

        if cfg.has_option('general', 'checkversioninterval'):
            autosubliminal.CHECKVERSIONINTERVAL = cfg.getint('general', 'checkversioninterval')
            if autosubliminal.CHECKVERSIONINTERVAL < 1:
                print('WARNING: checkversioninterval variable is lower then 1. Setting it to 1.')
                autosubliminal.CHECKVERSIONINTERVAL = 1  # Run every hour
        else:
            autosubliminal.CHECKVERSIONINTERVAL = 12  # Run every 12 hours

        if cfg.has_option('general', 'checkversionautoupdate'):
            autosubliminal.CHECKVERSIONAUTOUPDATE = cfg.getboolean('general', 'checkversionautoupdate')
        else:
            autosubliminal.CHECKVERSIONAUTOUPDATE = False

        if cfg.has_option('general', 'scanembeddedsubs'):
            autosubliminal.SCANEMBEDDEDSUBS = cfg.getboolean('general', 'scanembeddedsubs')
        else:
            autosubliminal.SCANEMBEDDEDSUBS = False

        if cfg.has_option('general', 'scanhardcodedsubs'):
            autosubliminal.SCANHARDCODEDSUBS = cfg.getboolean('general', 'scanhardcodedsubs')
        else:
            autosubliminal.SCANHARDCODEDSUBS = False

        if cfg.has_option('general', 'skiphiddendirs'):
            autosubliminal.SKIPHIDDENDIRS = cfg.getboolean('general', 'skiphiddendirs')
        else:
            autosubliminal.SKIPHIDDENDIRS = False

        if cfg.has_option('general', 'detectinvalidsublanguage'):
            autosubliminal.DETECTINVALIDSUBLANGUAGE = cfg.getboolean('general', 'detectinvalidsublanguage')
        else:
            autosubliminal.DETECTINVALIDSUBLANGUAGE = False

        if cfg.has_option('general', 'detectedlanguageprobability'):
            autosubliminal.DETECTEDLANGUAGEPROBABILITY = cfg.getfloat('general', 'detectedlanguageprobability')
        else:
            autosubliminal.DETECTEDLANGUAGEPROBABILITY = 0.9

        if cfg.has_option('general', 'manualsubsync'):
            autosubliminal.MANUALSUBSYNC = cfg.getboolean('general', 'manualsubsync')
        else:
            autosubliminal.MANUALSUBSYNC = False

        if cfg.has_option('general', 'ffmpegpath'):
            autosubliminal.FFMPEGPATH = cfg.get('general', 'ffmpegpath')
        else:
            autosubliminal.FFMPEGPATH = ''

        if cfg.has_option('general', 'minvideofilesize'):
            autosubliminal.MINVIDEOFILESIZE = cfg.getint('general', 'minvideofilesize')
        else:
            autosubliminal.MINVIDEOFILESIZE = 0

        if cfg.has_option('general', 'maxdbresults'):
            autosubliminal.MAXDBRESULTS = cfg.getint('general', 'maxdbresults')
        else:
            autosubliminal.MAXDBRESULTS = 0

        if cfg.has_option('general', 'timestampformat'):
            autosubliminal.TIMESTAMPFORMAT = cfg.get('general', 'timestampformat')
        else:
            autosubliminal.TIMESTAMPFORMAT = '%Y-%m-%d %H:%M:%S'

        if cfg.has_option('general', 'configversion'):
            autosubliminal.CONFIGVERSION = cfg.getint('general', 'configversion')
        else:
            autosubliminal.CONFIGVERSION = 1

    else:
        # General section is missing
        print('ERROR: Required variable VIDEOPATHS is missing. Please configure at least 1 video path.')
        autosubliminal.VIDEOPATHS = []
        autosubliminal.DEFAULTLANGUAGE = 'en'
        autosubliminal.DEFAULTLANGUAGESUFFIX = False
        autosubliminal.ADDITIONALLANGUAGES = []
        autosubliminal.MANUALSEARCHWITHSCORING = True
        autosubliminal.SCANDISKINTERVAL = 1
        autosubliminal.CHECKSUBINTERVAL = 24
        autosubliminal.CHECKSUBDEADLINE = 4
        autosubliminal.CHECKSUBDELTA = 7
        autosubliminal.CHECKVERSIONINTERVAL = 12
        autosubliminal.CHECKVERSIONAUTOUPDATE = False
        autosubliminal.SCANEMBEDDEDSUBS = False
        autosubliminal.SCANHARDCODEDSUBS = False
        autosubliminal.SKIPHIDDENDIRS = False
        autosubliminal.DETECTINVALIDSUBLANGUAGE = False
        autosubliminal.DETECTEDLANGUAGEPROBABILITY = 0.9
        autosubliminal.MANUALSUBSYNC = False
        autosubliminal.FFMPEGPATH = ''
        autosubliminal.MINVIDEOFILESIZE = 0
        autosubliminal.MAXDBRESULTS = 0
        autosubliminal.TIMESTAMPFORMAT = '%Y-%m-%d %H:%M:%S'
        autosubliminal.CONFIGVERSION = version.CONFIG_VERSION
        # Check old config version location -> needed for upgrade from version 8 to 9
        if cfg.has_section('config'):
            if cfg.has_option('config', 'configversion'):
                autosubliminal.CONFIGVERSION = cfg.getint('config', 'configversion')

    if cfg.has_section('library'):
        if cfg.has_option('library', 'librarymode'):
            autosubliminal.LIBRARYMODE = cfg.getboolean('library', 'librarymode')
        else:
            autosubliminal.LIBRARYMODE = False

        if cfg.has_option('library', 'librarypaths'):
            library_paths = cfg.get('library', 'librarypaths')
            if library_paths:
                autosubliminal.LIBRARYPATHS = library_paths.split(',')
            else:
                autosubliminal.LIBRARYPATHS = []
        else:
            autosubliminal.LIBRARYPATHS = []

        if cfg.has_option('library', 'scanlibraryinterval'):
            autosubliminal.SCANLIBRARYINTERVAL = cfg.getint('library', 'scanlibraryinterval')
            # SCANLIBRARY may only run max once a day to prevent too heavy system usage
            if autosubliminal.SCANLIBRARYINTERVAL < 24:
                print('WARNING: scanlibraryinterval variable is lower then 24.')
                print('WARNING: This is not allowed because it will result in too high system usage.')
                autosubliminal.SCANLIBRARYINTERVAL = 24  # Run every 24 hours
        else:
            autosubliminal.SCANLIBRARYINTERVAL = 24  # Run every 24 hours

        if cfg.has_option('library', 'libraryeditmode'):
            autosubliminal.LIBRARYEDITMODE = cfg.getboolean('library', 'libraryeditmode')
        else:
            autosubliminal.LIBRARYEDITMODE = False
    else:
        # Library section is missing
        autosubliminal.LIBRARYMODE = False
        autosubliminal.LIBRARYPATHS = []
        autosubliminal.SCANLIBRARYINTERVAL = 24
        autosubliminal.LIBRARYEDITMODE = False

    if cfg.has_section('logging'):
        if cfg.has_option('logging', 'logfile'):
            autosubliminal.LOGFILE = cfg.get('logging', 'logfile')
        else:
            autosubliminal.LOGFILE = 'AutoSubliminal.log'

        if cfg.has_option('logging', 'loglevel'):
            autosubliminal.LOGLEVEL = cfg.get('logging', 'loglevel')
            if autosubliminal.LOGLEVEL.lower() == 'error':
                autosubliminal.LOGLEVEL = logging.ERROR
            elif autosubliminal.LOGLEVEL.lower() == 'warning':
                autosubliminal.LOGLEVEL = logging.WARNING
            elif autosubliminal.LOGLEVEL.lower() == 'debug':
                autosubliminal.LOGLEVEL = logging.DEBUG
            elif autosubliminal.LOGLEVEL.lower() == 'info':
                autosubliminal.LOGLEVEL = logging.INFO
            elif autosubliminal.LOGLEVEL.lower() == 'critical':
                autosubliminal.LOGLEVEL = logging.CRITICAL
        else:
            autosubliminal.LOGLEVEL = logging.INFO

        if cfg.has_option('logging', 'lognum'):
            autosubliminal.LOGNUM = cfg.getint('logging', 'lognum')
        else:
            autosubliminal.LOGNUM = 0

        if cfg.has_option('logging', 'logsize'):
            autosubliminal.LOGSIZE = cfg.getint('logging', 'logsize')
        else:
            autosubliminal.LOGSIZE = 0

        if cfg.has_option('logging', 'loghttpaccess'):
            autosubliminal.LOGHTTPACCESS = cfg.getboolean('logging', 'loghttpaccess')
        else:
            autosubliminal.LOGHTTPACCESS = False

        if cfg.has_option('logging', 'logexternallibs'):
            autosubliminal.LOGEXTERNALLIBS = cfg.getboolean('logging', 'logexternallibs')
        else:
            autosubliminal.LOGEXTERNALLIBS = False

        if cfg.has_option('logging', 'logdetailedformat'):
            autosubliminal.LOGDETAILEDFORMAT = cfg.getboolean('logging', 'logdetailedformat')
        else:
            autosubliminal.LOGDETAILEDFORMAT = False

        if cfg.has_option('logging', 'logreversed'):
            autosubliminal.LOGREVERSED = cfg.getboolean('logging', 'logreversed')
        else:
            autosubliminal.LOGREVERSED = False

        if cfg.has_option('logging', 'loglevelconsole'):
            autosubliminal.LOGLEVELCONSOLE = cfg.get('logging', 'loglevelconsole')
            if autosubliminal.LOGLEVELCONSOLE.lower() == 'error':
                autosubliminal.LOGLEVELCONSOLE = logging.ERROR
            elif autosubliminal.LOGLEVELCONSOLE.lower() == 'warning':
                autosubliminal.LOGLEVELCONSOLE = logging.WARNING
            elif autosubliminal.LOGLEVELCONSOLE.lower() == 'debug':
                autosubliminal.LOGLEVELCONSOLE = logging.DEBUG
            elif autosubliminal.LOGLEVELCONSOLE.lower() == 'info':
                autosubliminal.LOGLEVELCONSOLE = logging.INFO
            elif autosubliminal.LOGLEVELCONSOLE.lower() == 'critical':
                autosubliminal.LOGLEVELCONSOLE = logging.CRITICAL
        else:
            autosubliminal.LOGLEVELCONSOLE = logging.ERROR

    else:
        # Logfile section is missing
        autosubliminal.LOGFILE = 'AutoSubliminal.log'
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
            print('INFO: The webserver is started on %s:%d.' % (
                autosubliminal.WEBSERVERIP, autosubliminal.WEBSERVERPORT))

        else:
            print('INFO: The webserver is started on 0.0.0.0:8083.')
            autosubliminal.WEBSERVERIP = '0.0.0.0'
            autosubliminal.WEBSERVERPORT = 8083

        if cfg.has_option('webserver', 'webroot'):
            autosubliminal.WEBROOT = cfg.get('webserver', 'webroot')
        else:
            autosubliminal.WEBROOT = ''

        if not cfg.has_option('webserver', 'username'):
            autosubliminal.USERNAME = ''

        if not cfg.has_option('webserver', 'password'):
            autosubliminal.PASSWORD = ''

        if cfg.has_option('webserver', 'username') and cfg.has_option('webserver', 'password'):
            autosubliminal.USERNAME = cfg.get('webserver', 'username')
            autosubliminal.PASSWORD = cfg.get('webserver', 'password')
        elif cfg.has_option('webserver', 'username') or cfg.has_option('webserver', 'password'):
            print('ERROR: Both username and password are required. Starting without authentication.')

        if cfg.has_option('webserver', 'launchbrowser'):
            autosubliminal.LAUNCHBROWSER = cfg.getboolean('webserver', 'launchbrowser')
        else:
            autosubliminal.LAUNCHBROWSER = True
    else:
        # Webserver section is missing
        print('INFO: The webserver section is started on 0.0.0.0:8083.')
        print('INFO: The webserver is started without authentication.')
        autosubliminal.WEBSERVERIP = '0.0.0.0'
        autosubliminal.WEBSERVERPORT = 8083
        autosubliminal.WEBROOT = ''
        autosubliminal.USERNAME = ''
        autosubliminal.PASSWORD = ''
        autosubliminal.LAUNCHBROWSER = True

    if cfg.has_section('subliminal'):
        if cfg.has_option('subliminal', 'showminmatchscore'):
            autosubliminal.SHOWMINMATCHSCORE = cfg.getint('subliminal', 'showminmatchscore')
            # Force the default showminmatchscore when a wrongly configured value is entered manually in the config file
            if autosubliminal.SHOWMINMATCHSCORE < autosubliminal.SHOWMINMATCHSCOREDEFAULT:
                print('WARNING: Invalid SHOWMINMATCHSCORE found.')
                print('WARNING: Using the default score (%s) instead.' % autosubliminal.SHOWMINMATCHSCOREDEFAULT)
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
                print('WARNING: Invalid MOVIEMINMATCHSCORE found.')
                print('WARNING: Using the default score (%s) instead.' % autosubliminal.MOVIEMINMATCHSCOREDEFAULT)
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
            providers = cfg.get('subliminal', 'providers')
            # All subliminal providers should be listed in lower case (see subliminal provider registration)
            autosubliminal.SUBLIMINALPROVIDERS = providers.lower().split(',')
            # Only allow valid providers by checking if they are found in the provider manager
            for provider in autosubliminal.SUBLIMINALPROVIDERS:
                if provider not in autosubliminal.SUBLIMINALPROVIDERMANAGER.names():
                    autosubliminal.SUBLIMINALPROVIDERS.remove(provider)
        else:
            autosubliminal.SUBLIMINALPROVIDERS = autosubliminal.SUBLIMINALPROVIDERMANAGER.names()

        if cfg.has_option('subliminal', 'subtitleutf8encoding'):
            autosubliminal.SUBTITLEUTF8ENCODING = cfg.getboolean('subliminal', 'subtitleutf8encoding')
        else:
            autosubliminal.SUBTITLEUTF8ENCODING = False

        if cfg.has_option('subliminal', 'manualrefinevideo'):
            autosubliminal.MANUALREFINEVIDEO = cfg.getboolean('subliminal', 'manualrefinevideo')
        else:
            autosubliminal.MANUALREFINEVIDEO = False

        if cfg.has_option('subliminal', 'refinevideo'):
            autosubliminal.REFINEVIDEO = cfg.getboolean('subliminal', 'refinevideo')
        else:
            autosubliminal.REFINEVIDEO = False

        if cfg.has_option('subliminal', 'preferhearingimpaired'):
            autosubliminal.PREFERHEARINGIMPAIRED = cfg.getboolean('subliminal', 'preferhearingimpaired')
        else:
            autosubliminal.PREFERHEARINGIMPAIRED = False

        if cfg.has_option('subliminal', 'anticaptchaclass'):
            autosubliminal.ANTICAPTCHACLASS = cfg.get('subliminal', 'anticaptchaclass')
        else:
            autosubliminal.ANTICAPTCHACLASS = ''

        if cfg.has_option('subliminal', 'anticaptchaclientkey'):
            autosubliminal.ANTICAPTCHACLIENTKEY = cfg.get('subliminal', 'anticaptchaclientkey')
        else:
            autosubliminal.ANTICAPTCHACLIENTKEY = ''

        if cfg.has_option('subliminal', 'addic7edusername') and cfg.has_option('subliminal', 'addic7edpassword'):
            autosubliminal.ADDIC7EDUSERNAME = cfg.get('subliminal', 'addic7edusername')
            autosubliminal.ADDIC7EDPASSWORD = cfg.get('subliminal', 'addic7edpassword')
            autosubliminal.SUBLIMINALPROVIDERCONFIGS['addic7ed'] = {}
            autosubliminal.SUBLIMINALPROVIDERCONFIGS['addic7ed_custom'] = {'random_user_agent': True}
            if autosubliminal.ADDIC7EDUSERNAME and autosubliminal.ADDIC7EDPASSWORD:
                autosubliminal.SUBLIMINALPROVIDERCONFIGS['addic7ed'].update({
                    'username': autosubliminal.ADDIC7EDUSERNAME,
                    'password': autosubliminal.ADDIC7EDPASSWORD})
                autosubliminal.SUBLIMINALPROVIDERCONFIGS['addic7ed_custom'].update({
                    'username': autosubliminal.ADDIC7EDUSERNAME,
                    'password': autosubliminal.ADDIC7EDPASSWORD})
        else:
            autosubliminal.ADDIC7EDUSERNAME = ''
            autosubliminal.ADDIC7EDPASSWORD = ''
            autosubliminal.SUBLIMINALPROVIDERCONFIGS['addic7ed'] = {}
            autosubliminal.SUBLIMINALPROVIDERCONFIGS['addic7ed_custom'] = {'random_user_agent': True}

        if cfg.has_option('subliminal', 'addic7eduserid'):
            autosubliminal.ADDIC7EDUSERID = cfg.get('subliminal', 'addic7eduserid')
            if autosubliminal.ADDIC7EDUSERID:
                autosubliminal.SUBLIMINALPROVIDERCONFIGS['addic7ed_custom'].update(
                    {'userid': autosubliminal.ADDIC7EDUSERID})
        else:
            autosubliminal.ADDIC7EDUSERID = ''

        if cfg.has_option('subliminal', 'opensubtitlesusername') and cfg.has_option('subliminal',
                                                                                    'opensubtitlespassword'):
            autosubliminal.OPENSUBTITLESUSERNAME = cfg.get('subliminal', 'opensubtitlesusername')
            autosubliminal.OPENSUBTITLESPASSWORD = cfg.get('subliminal', 'opensubtitlespassword')
            if autosubliminal.OPENSUBTITLESUSERNAME and autosubliminal.OPENSUBTITLESPASSWORD:
                autosubliminal.SUBLIMINALPROVIDERCONFIGS['opensubtitles'] = {
                    'username': autosubliminal.OPENSUBTITLESUSERNAME,
                    'password': autosubliminal.OPENSUBTITLESPASSWORD}
        else:
            autosubliminal.OPENSUBTITLESUSERNAME = ''
            autosubliminal.OPENSUBTITLESPASSWORD = ''

        if cfg.has_option('subliminal', 'legendastvusername') and cfg.has_option('subliminal', 'legendastvpassword'):
            autosubliminal.LEGENDASTVUSERNAME = cfg.get('subliminal', 'legendastvusername')
            autosubliminal.LEGENDASTVPASSWORD = cfg.get('subliminal', 'legendastvpassword')
            if autosubliminal.LEGENDASTVUSERNAME and autosubliminal.LEGENDASTVPASSWORD:
                autosubliminal.SUBLIMINALPROVIDERCONFIGS['legendastv'] = {
                    'username': autosubliminal.LEGENDASTVUSERNAME,
                    'password': autosubliminal.LEGENDASTVPASSWORD}
        else:
            autosubliminal.LEGENDASTVUSERNAME = ''
            autosubliminal.LEGENDASTVPASSWORD = ''
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
        autosubliminal.SUBLIMINALPROVIDERS = autosubliminal.SUBLIMINALPROVIDERMANAGER.names()
        autosubliminal.SUBTITLEUTF8ENCODING = False
        autosubliminal.MANUALREFINEVIDEO = False
        autosubliminal.REFINEVIDEO = False
        autosubliminal.PREFERHEARINGIMPAIRED = False
        autosubliminal.ANTICAPTCHACLASS = ''
        autosubliminal.ANTICAPTCHACLIENTKEY = ''
        autosubliminal.ADDIC7EDUSERNAME = ''
        autosubliminal.ADDIC7EDPASSWORD = ''
        autosubliminal.ADDIC7EDUSERID = ''
        autosubliminal.OPENSUBTITLESUSERNAME = ''
        autosubliminal.OPENSUBTITLESPASSWORD = ''
        autosubliminal.LEGENDASTVUSERNAME = ''
        autosubliminal.LEGENDASTVPASSWORD = ''

    if cfg.has_section('shownamemapping'):
        autosubliminal.SHOWNAMEMAPPING = dict(cfg.items('shownamemapping'))
    else:
        # Shownamemapping section is missing
        autosubliminal.SHOWNAMEMAPPING = {}

    if cfg.has_section('addic7edshownamemapping'):
        autosubliminal.ADDIC7EDSHOWNAMEMAPPING = dict(cfg.items('addic7edshownamemapping'))
    else:
        # Addic7edshownamemapping section is missing
        autosubliminal.ADDIC7EDSHOWNAMEMAPPING = {}

    if cfg.has_section('alternativeshownamemapping'):
        autosubliminal.ALTERNATIVESHOWNAMEMAPPING = dict(cfg.items('alternativeshownamemapping'))
    else:
        # Alternativeshownamemapping section is missing
        autosubliminal.ALTERNATIVESHOWNAMEMAPPING = {}

    if cfg.has_section('movienamemapping'):
        autosubliminal.MOVIENAMEMAPPING = dict(cfg.items('movienamemapping'))
    else:
        # Movienamemapping section is missing
        autosubliminal.MOVIENAMEMAPPING = {}

    if cfg.has_section('alternativemovienamemapping'):
        autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = dict(cfg.items('alternativemovienamemapping'))
    else:
        # Alternativemovienamemapping section is missing
        autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = {}

    if cfg.has_section('skipshow'):
        autosubliminal.SKIPSHOW = dict(cfg.items('skipshow'))
    else:
        # Skipshow section is missing
        autosubliminal.SKIPSHOW = {}

    if cfg.has_section('skipmovie'):
        autosubliminal.SKIPMOVIE = dict(cfg.items('skipmovie'))
    else:
        # Skipmovie section is missing
        autosubliminal.SKIPMOVIE = {}

    if cfg.has_section('notification'):
        if cfg.has_option('notification', 'notify'):
            autosubliminal.NOTIFY = cfg.getboolean('notification', 'notify')
        else:
            autosubliminal.NOTIFY = False

        # Mail
        if cfg.has_option('notification', 'notifymail'):
            autosubliminal.NOTIFYMAIL = cfg.getboolean('notification', 'notifymail')
        else:
            autosubliminal.NOTIFYMAIL = False

        if cfg.has_option('notification', 'mailsrv'):
            autosubliminal.MAILSRV = cfg.get('notification', 'mailsrv')
        else:
            autosubliminal.MAILSRV = 'smtp.gmail.com:587'

        if cfg.has_option('notification', 'mailfromaddr'):
            autosubliminal.MAILFROMADDR = cfg.get('notification', 'mailfromaddr')
        else:
            autosubliminal.MAILFROMADDR = 'example@gmail.com'

        if cfg.has_option('notification', 'mailtoaddr'):
            autosubliminal.MAILTOADDR = cfg.get('notification', 'mailtoaddr')
        else:
            autosubliminal.MAILTOADDR = 'example@gmail.com'

        if cfg.has_option('notification', 'mailusername'):
            autosubliminal.MAILUSERNAME = cfg.get('notification', 'mailusername')
        else:
            autosubliminal.MAILUSERNAME = 'example@gmail.com'

        if cfg.has_option('notification', 'mailpassword'):
            autosubliminal.MAILPASSWORD = cfg.get('notification', 'mailpassword')
        else:
            autosubliminal.MAILPASSWORD = 'mysecretpassword'

        if cfg.has_option('notification', 'mailsubject'):
            autosubliminal.MAILSUBJECT = cfg.get('notification', 'mailsubject')
        else:
            autosubliminal.MAILSUBJECT = 'Auto-Subliminal downloaded'

        if cfg.has_option('notification', 'mailencryption'):
            autosubliminal.MAILENCRYPTION = cfg.get('notification', 'mailencryption')
        else:
            autosubliminal.MAILENCRYPTION = 'TLS'

        if cfg.has_option('notification', 'mailauth'):
            autosubliminal.MAILAUTH = cfg.get('notification', 'mailauth')
        else:
            autosubliminal.MAILAUTH = ''

        # Twitter
        if cfg.has_option('notification', 'notifytwitter'):
            autosubliminal.NOTIFYTWITTER = cfg.getboolean('notification', 'notifytwitter')
        else:
            autosubliminal.NOTIFYTWITTER = False

        if cfg.has_option('notification', 'twitterkey'):
            autosubliminal.TWITTERKEY = cfg.get('notification', 'twitterkey')
        else:
            autosubliminal.TWITTERKEY = 'token key'

        if cfg.has_option('notification', 'twittersecret'):
            autosubliminal.TWITTERSECRET = cfg.get('notification', 'twittersecret')
        else:
            autosubliminal.TWITTERSECRET = 'token secret'

        # Pushalot - Windows Phone and Windows 8 notifier
        if cfg.has_option('notification', 'notifypushalot'):
            autosubliminal.NOTIFYPUSHALOT = cfg.getboolean('notification', 'notifypushalot')
        else:
            autosubliminal.NOTIFYPUSHALOT = False

        if cfg.has_option('notification', 'pushalotapi'):
            autosubliminal.PUSHALOTAPI = cfg.get('notification', 'pushalotapi')
        else:
            autosubliminal.PUSHALOTAPI = 'API key'

        # Pushover - Android and IOS notifier
        if cfg.has_option('notification', 'notifypushover'):
            autosubliminal.NOTIFYPUSHOVER = cfg.getboolean('notification', 'notifypushover')
        else:
            autosubliminal.NOTIFYPUSHOVER = False

        if cfg.has_option('notification', 'pushoverkey'):
            autosubliminal.PUSHOVERKEY = cfg.get('notification', 'pushoverkey')
        else:
            autosubliminal.PUSHOVERKEY = 'user key'

        if cfg.has_option('notification', 'pushoverapi'):
            autosubliminal.PUSHOVERAPI = cfg.get('notification', 'pushoverapi')
        else:
            autosubliminal.PUSHOVERAPI = 'API key'

        if cfg.has_option('notification', 'pushoverdevices'):
            autosubliminal.PUSHOVERDEVICES = cfg.get('notification', 'pushoverdevices')
        else:
            autosubliminal.PUSHOVERDEVICES = ''

        # Growl
        if cfg.has_option('notification', 'notifygrowl'):
            autosubliminal.NOTIFYGROWL = cfg.getboolean('notification', 'notifygrowl')
        else:
            autosubliminal.NOTIFYGROWL = False

        if cfg.has_option('notification', 'growlhost'):
            autosubliminal.GROWLHOST = cfg.get('notification', 'growlhost')
        else:
            autosubliminal.GROWLHOST = '127.0.0.1'

        if cfg.has_option('notify', 'growlport'):
            autosubliminal.GROWLPORT = cfg.getint('notify', 'growlport')
        else:
            autosubliminal.GROWLPORT = 23053

        if cfg.has_option('notification', 'growlpass'):
            autosubliminal.GROWLPASS = cfg.get('notification', 'growlpass')
        else:
            autosubliminal.GROWLPASS = 'mysecretpassword'

        if cfg.has_option('notification', 'growlpriority'):
            autosubliminal.GROWLPRIORITY = cfg.getint('notification', 'growlpriority')
        else:
            autosubliminal.GROWLPRIORITY = 0

        # Prowl
        if cfg.has_option('notification', 'notifyprowl'):
            autosubliminal.NOTIFYPROWL = cfg.getboolean('notification', 'notifyprowl')
        else:
            autosubliminal.NOTIFYPROWL = False

        if cfg.has_option('notification', 'prowlapi'):
            autosubliminal.PROWLAPI = cfg.get('notification', 'prowlapi')
        else:
            autosubliminal.PROWLAPI = 'API key'

        if cfg.has_option('notification', 'prowlpriority'):
            autosubliminal.PROWLPRIORITY = cfg.getint('notification', 'prowlpriority')
        else:
            autosubliminal.PROWLPRIORITY = 0

        # Pushbullet
        if cfg.has_option('notification', 'notifypushbullet'):
            autosubliminal.NOTIFYPUSHBULLET = cfg.getboolean('notification', 'notifypushbullet')
        else:
            autosubliminal.NOTIFYPUSHBULLET = False

        if cfg.has_option('notification', 'pushbulletapi'):
            autosubliminal.PUSHBULLETAPI = cfg.get('notification', 'pushbulletapi')
        else:
            autosubliminal.PUSHBULLETAPI = 'API key'

        # Telegram
        if cfg.has_option('notification', 'notifytelegram'):
            autosubliminal.NOTIFYTELEGRAM = cfg.getboolean('notification', 'notifytelegram')
        else:
            autosubliminal.NOTIFYTELEGRAM = False

        if cfg.has_option('notification', 'telegrambotapi'):
            autosubliminal.TELEGRAMBOTAPI = cfg.get('notification', 'telegrambotapi')
        else:
            autosubliminal.TELEGRAMBOTAPI = 'API key'

        if cfg.has_option('notification', 'telegramchatid'):
            autosubliminal.TELEGRAMCHATID = cfg.get('notification', 'telegramchatid')
        else:
            autosubliminal.TELEGRAMCHATID = ''

    else:
        # Notify section is missing
        autosubliminal.NOTIFY = False
        autosubliminal.NOTIFYMAIL = False
        autosubliminal.MAILSRV = 'smtp.gmail.com:587'
        autosubliminal.MAILFROMADDR = 'example@gmail.com'
        autosubliminal.MAILTOADDR = 'example@gmail.com'
        autosubliminal.MAILUSERNAME = 'example@gmail.com'
        autosubliminal.MAILPASSWORD = 'mysecretpassword'
        autosubliminal.MAILSUBJECT = 'Subs info'
        autosubliminal.MAILENCRYPTION = 'TLS'
        autosubliminal.MAILAUTH = ''
        autosubliminal.NOTIFYTWITTER = False
        autosubliminal.TWITTERKEY = 'token key'
        autosubliminal.TWITTERSECRET = 'token secret'
        autosubliminal.NOTIFYPUSHALOT = False
        autosubliminal.PUSHALOTAPI = 'API key'
        autosubliminal.NOTIFYPUSHOVER = False
        autosubliminal.PUSHOVERKEY = 'user key'
        autosubliminal.PUSHOVERAPI = 'API key'
        autosubliminal.PUSHOVERDEVICES = ''
        autosubliminal.NOTIFYGROWL = False
        autosubliminal.GROWLHOST = '127.0.0.1'
        autosubliminal.GROWLPORT = 23053
        autosubliminal.GROWLPASS = 'mysecretpassword'
        autosubliminal.GROWLPRIORITY = 0
        autosubliminal.NOTIFYPROWL = False
        autosubliminal.PROWLAPI = 'API key'
        autosubliminal.PROWLPRIORITY = 0
        autosubliminal.NOTIFYPUSHBULLET = False
        autosubliminal.PUSHBULLETAPI = 'API key'
        autosubliminal.NOTIFYTELEGRAM = False
        autosubliminal.TELEGRAMBOTAPI = 'API key'
        autosubliminal.TELEGRAMCHATID = ''

    if cfg.has_section('postprocessing'):
        if cfg.has_option('postprocessing', 'postprocess'):
            autosubliminal.POSTPROCESS = cfg.getboolean('postprocessing', 'postprocess')
        else:
            autosubliminal.POSTPROCESS = False

        if cfg.has_option('postprocessing', 'postprocessindividual'):
            autosubliminal.POSTPROCESSINDIVIDUAL = cfg.getboolean('postprocessing', 'postprocessindividual')
        else:
            autosubliminal.POSTPROCESSINDIVIDUAL = False

        if cfg.has_option('postprocessing', 'postprocessutf8encoding'):
            autosubliminal.POSTPROCESSUTF8ENCODING = cfg.getboolean('postprocessing', 'postprocessutf8encoding')
        else:
            autosubliminal.POSTPROCESSUTF8ENCODING = False

        if cfg.has_option('postprocessing', 'showpostprocesscmd'):
            autosubliminal.SHOWPOSTPROCESSCMD = cfg.get('postprocessing', 'showpostprocesscmd')
        else:
            autosubliminal.SHOWPOSTPROCESSCMD = ''

        if cfg.has_option('postprocessing', 'showpostprocesscmdargs'):
            autosubliminal.SHOWPOSTPROCESSCMDARGS = cfg.get('postprocessing', 'showpostprocesscmdargs')
        else:
            autosubliminal.SHOWPOSTPROCESSCMDARGS = ''

        if cfg.has_option('postprocessing', 'moviepostprocesscmd'):
            autosubliminal.MOVIEPOSTPROCESSCMD = cfg.get('postprocessing', 'moviepostprocesscmd')
        else:
            autosubliminal.MOVIEPOSTPROCESSCMD = ''

        if cfg.has_option('postprocessing', 'moviepostprocesscmdargs'):
            autosubliminal.MOVIEPOSTPROCESSCMDARGS = cfg.get('postprocessing', 'moviepostprocesscmdargs')
        else:
            autosubliminal.MOVIEPOSTPROCESSCMDARGS = ''

    else:
        # Postprocessing section is missing
        autosubliminal.POSTPROCESS = False
        autosubliminal.POSTPROCESSINDIVIDUAL = False
        autosubliminal.POSTPROCESSUTF8ENCODING = False
        autosubliminal.SHOWPOSTPROCESSCMD = ''
        autosubliminal.SHOWPOSTPROCESSCMDARGS = ''
        autosubliminal.MOVIEPOSTPROCESSCMD = ''
        autosubliminal.MOVIEPOSTPROCESSCMDARGS = ''

    # Dev section: only overwrite default values if specified
    if cfg.has_section('dev'):
        if cfg.has_option('dev', 'apikey'):
            autosubliminal.TVDBAPIKEY = cfg.get('dev', 'tvdbapikey')

        if cfg.has_option('dev', 'developer'):
            autosubliminal.DEVELOPER = cfg.getboolean('dev', 'developer')

    # Check if config needs to be upgraded
    if check_upgrade:
        if autosubliminal.CONFIGVERSION < version.CONFIG_VERSION:
            _upgrade_config(autosubliminal.CONFIGVERSION, version.CONFIG_VERSION)
        elif autosubliminal.CONFIGVERSION > version.CONFIG_VERSION:
            print('ERROR: Config version higher then this version of Auto-Subliminal supports. Update Auto-Subliminal.')
            os._exit(1)


def write_config(section=None):
    """
    Write all settings to the config file.
    If a section is specified, only that section is written, otherwise all config settings are written.
    Return True if restart is needed, False otherwise.
    """

    # Read config file
    cfg = _create_config_parser()
    try:
        # A config file is set so we use this to add the settings
        with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
            cfg.read_file(f)
    except Exception:
        # No config file found, create one instead
        open(autosubliminal.CONFIGFILE, 'w').close()
        with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
            cfg.read_file(f)

    # Before we save everything to the config file we need to test if the app needs to be restarted
    restart = _check_for_restart()

    if section == 'general' or section is None:
        write_config_general_section()
    if section == 'library' or section is None:
        write_config_library_section()
    if section == 'logging' or section is None:
        write_config_logging_section()
    if section == 'webserver' or section is None:
        write_config_webserver_section()
    if section == 'subliminal' or section is None:
        write_config_subliminal_section()
    if section == 'namemapping' or section is None:
        write_config_shownamemapping_section()
        write_config_addic7edshownamemapping_section()
        write_config_alternativeshownamemapping_section()
        write_config_movienamemapping_section()
        write_config_alternativemovienamemapping_section()
    if section == 'skipmapping' or section is None:
        write_config_skipshow_section()
        write_config_skipmovie_section()
    if section == 'notification' or section is None:
        write_config_notification_section()
    if section == 'postprocessing' or section is None:
        write_config_postprocessing_section()

    return restart


def write_config_general_section():
    """
    Write the config general section.
    """
    section = 'general'

    cfg = _load_config_parser()

    if not cfg.has_section(section):
        cfg.add_section(section)

    # convert lists to comma separated values
    videopaths = '' if not autosubliminal.VIDEOPATHS else ','.join(autosubliminal.VIDEOPATHS)
    additionallanguages = '' if not autosubliminal.ADDITIONALLANGUAGES else ','.join(
        autosubliminal.ADDITIONALLANGUAGES)

    cfg.set(section, 'videopaths', videopaths)
    cfg.set(section, 'defaultlanguage', autosubliminal.DEFAULTLANGUAGE)
    cfg.set(section, 'defaultlanguagesuffix', str(autosubliminal.DEFAULTLANGUAGESUFFIX))
    cfg.set(section, 'additionallanguages', additionallanguages)
    cfg.set(section, 'manualsearchwithscoring', str(autosubliminal.MANUALSEARCHWITHSCORING))
    cfg.set(section, 'scandiskinterval', str(autosubliminal.SCANDISKINTERVAL))
    cfg.set(section, 'checksubinterval', str(autosubliminal.CHECKSUBINTERVAL))
    cfg.set(section, 'checksubdeadline', str(autosubliminal.CHECKSUBDEADLINE))
    cfg.set(section, 'checksubdelta', str(autosubliminal.CHECKSUBDELTA))
    cfg.set(section, 'checkversioninterval', str(autosubliminal.CHECKVERSIONINTERVAL))
    cfg.set(section, 'checkversionautoupdate', str(autosubliminal.CHECKVERSIONAUTOUPDATE))
    cfg.set(section, 'scanembeddedsubs', str(autosubliminal.SCANEMBEDDEDSUBS))
    cfg.set(section, 'scanhardcodedsubs', str(autosubliminal.SCANHARDCODEDSUBS))
    cfg.set(section, 'skiphiddendirs', str(autosubliminal.SKIPHIDDENDIRS))
    cfg.set(section, 'detectinvalidsublanguage', str(autosubliminal.DETECTINVALIDSUBLANGUAGE))
    cfg.set(section, 'detectedlanguageprobability', str(autosubliminal.DETECTEDLANGUAGEPROBABILITY))
    cfg.set(section, 'manualsubsync', str(autosubliminal.MANUALSUBSYNC))
    cfg.set(section, 'ffmpegpath', str(autosubliminal.FFMPEGPATH))
    cfg.set(section, 'minvideofilesize', str(autosubliminal.MINVIDEOFILESIZE))
    cfg.set(section, 'maxdbresults', str(autosubliminal.MAXDBRESULTS))
    cfg.set(section, 'timestampformat', autosubliminal.TIMESTAMPFORMAT)
    cfg.set(section, 'configversion', str(autosubliminal.CONFIGVERSION))

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)


def write_config_library_section():
    """
    Write the config library section.
    """
    section = 'library'

    cfg = _load_config_parser()

    if not cfg.has_section(section):
        cfg.add_section(section)

    # convert lists to comma separated values
    librarypaths = '' if not autosubliminal.LIBRARYPATHS else ','.join(autosubliminal.LIBRARYPATHS)

    cfg.set(section, 'librarymode', str(autosubliminal.LIBRARYMODE))
    cfg.set(section, 'librarypaths', librarypaths)
    cfg.set(section, 'scanlibraryinterval', str(autosubliminal.SCANLIBRARYINTERVAL))
    cfg.set(section, 'libraryeditmode', str(autosubliminal.LIBRARYEDITMODE))

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)


def write_config_logging_section():
    """
    Write the config logging section.
    """
    section = 'logging'

    cfg = _load_config_parser()

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, 'logfile', autosubliminal.LOGFILE)
    cfg.set(section, 'loglevel', logging.getLevelName(int(autosubliminal.LOGLEVEL)).lower())
    cfg.set(section, 'lognum', str(autosubliminal.LOGNUM))
    cfg.set(section, 'logsize', str(autosubliminal.LOGSIZE))
    cfg.set(section, 'loghttpaccess', str(autosubliminal.LOGHTTPACCESS))
    cfg.set(section, 'logexternallibs', str(autosubliminal.LOGEXTERNALLIBS))
    cfg.set(section, 'logdetailedformat', str(autosubliminal.LOGDETAILEDFORMAT))
    cfg.set(section, 'logreversed', str(autosubliminal.LOGREVERSED))
    cfg.set(section, 'loglevelconsole', logging.getLevelName(int(autosubliminal.LOGLEVELCONSOLE)).lower())

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply logging settings
    apply_logging()


def write_config_webserver_section():
    """
    Write the config webserver section.
    """
    section = 'webserver'

    cfg = _load_config_parser()

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, 'webserverip', str(autosubliminal.WEBSERVERIP))
    cfg.set(section, 'webserverport', str(autosubliminal.WEBSERVERPORT))
    cfg.set(section, 'webroot', autosubliminal.WEBROOT)
    cfg.set(section, 'username', autosubliminal.USERNAME)
    cfg.set(section, 'password', autosubliminal.PASSWORD)
    cfg.set(section, 'launchbrowser', str(autosubliminal.LAUNCHBROWSER))

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)


def write_config_subliminal_section():
    """
    Write the config subliminal section.
    """
    section = 'subliminal'

    cfg = _load_config_parser()

    if not cfg.has_section(section):
        cfg.add_section(section)

    providers = '' if not autosubliminal.SUBLIMINALPROVIDERS else ','.join(autosubliminal.SUBLIMINALPROVIDERS)

    cfg.set(section, 'showminmatchscore', str(autosubliminal.SHOWMINMATCHSCORE))
    cfg.set(section, 'showmatchsource', str(autosubliminal.SHOWMATCHSOURCE))
    cfg.set(section, 'showmatchquality', str(autosubliminal.SHOWMATCHQUALITY))
    cfg.set(section, 'showmatchcodec', str(autosubliminal.SHOWMATCHCODEC))
    cfg.set(section, 'showmatchreleasegroup', str(autosubliminal.SHOWMATCHRELEASEGROUP))
    cfg.set(section, 'movieminmatchscore', str(autosubliminal.MOVIEMINMATCHSCORE))
    cfg.set(section, 'moviematchsource', str(autosubliminal.MOVIEMATCHSOURCE))
    cfg.set(section, 'moviematchquality', str(autosubliminal.MOVIEMATCHQUALITY))
    cfg.set(section, 'moviematchcodec', str(autosubliminal.MOVIEMATCHCODEC))
    cfg.set(section, 'moviematchreleasegroup', str(autosubliminal.MOVIEMATCHRELEASEGROUP))
    cfg.set(section, 'providers', providers)
    cfg.set(section, 'subtitleutf8encoding', str(autosubliminal.SUBTITLEUTF8ENCODING))
    cfg.set(section, 'manualrefinevideo', str(autosubliminal.MANUALREFINEVIDEO))
    cfg.set(section, 'refinevideo', str(autosubliminal.REFINEVIDEO))
    cfg.set(section, 'preferhearingimpaired', str(autosubliminal.PREFERHEARINGIMPAIRED))
    cfg.set(section, 'anticaptchaclass', autosubliminal.ANTICAPTCHACLASS)
    cfg.set(section, 'anticaptchaclientkey', autosubliminal.ANTICAPTCHACLIENTKEY)
    cfg.set(section, 'addic7edusername', autosubliminal.ADDIC7EDUSERNAME)
    cfg.set(section, 'addic7edpassword', autosubliminal.ADDIC7EDPASSWORD)
    cfg.set(section, 'addic7eduserid', autosubliminal.ADDIC7EDUSERID)
    cfg.set(section, 'opensubtitlesusername', autosubliminal.OPENSUBTITLESUSERNAME)
    cfg.set(section, 'opensubtitlespassword', autosubliminal.OPENSUBTITLESPASSWORD)
    cfg.set(section, 'legendastvusername', autosubliminal.LEGENDASTVUSERNAME)
    cfg.set(section, 'legendastvpassword', autosubliminal.LEGENDASTVPASSWORD)

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply subliminal settings
    apply_subliminal()


def write_config_shownamemapping_section():
    """
    Write the config shownamemapping section.
    """
    section = 'shownamemapping'

    cfg = _load_config_parser()

    if cfg.has_section(section):
        cfg.remove_section(section)
    cfg.add_section(section)

    for x in autosubliminal.SHOWNAMEMAPPING:
        cfg.set('shownamemapping', x, autosubliminal.SHOWNAMEMAPPING[x])

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply the shownamemapping settings
    apply_shownamemapping()


def write_config_addic7edshownamemapping_section():
    """
    Write the config addic7edshownamemapping section.
    """
    section = 'addic7edshownamemapping'

    cfg = _load_config_parser()

    if cfg.has_section(section):
        cfg.remove_section(section)
    cfg.add_section(section)

    for x in autosubliminal.ADDIC7EDSHOWNAMEMAPPING:
        cfg.set('addic7edshownamemapping', x, autosubliminal.ADDIC7EDSHOWNAMEMAPPING[x])

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply the addic7edshownamemapping settings
    apply_addic7edshownamemapping()


def write_config_alternativeshownamemapping_section():
    """
    Write the config alternativeshownamemapping section.
    """
    section = 'alternativeshownamemapping'

    cfg = _load_config_parser()

    if cfg.has_section(section):
        cfg.remove_section(section)
    cfg.add_section(section)

    for x in autosubliminal.ALTERNATIVESHOWNAMEMAPPING:
        cfg.set('alternativeshownamemapping', x, autosubliminal.ALTERNATIVESHOWNAMEMAPPING[x])

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply the alternativeshownamemapping settings
    apply_alternativeshownamemapping()


def write_config_movienamemapping_section():
    """
    Write the config movienamemapping section.
    """
    section = 'movienamemapping'

    cfg = _load_config_parser()

    if cfg.has_section(section):
        cfg.remove_section(section)
    cfg.add_section(section)

    for x in autosubliminal.MOVIENAMEMAPPING:
        cfg.set('movienamemapping', x, autosubliminal.MOVIENAMEMAPPING[x])

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply the movienamemapping settings
    apply_movienamemapping()


def write_config_alternativemovienamemapping_section():
    """
    Write the config alternativemovienamemapping section.
    """
    section = 'alternativemovienamemapping'

    cfg = _load_config_parser()

    if cfg.has_section(section):
        cfg.remove_section(section)
    cfg.add_section(section)

    for x in autosubliminal.ALTERNATIVEMOVIENAMEMAPPING:
        cfg.set('alternativemovienamemapping', x, autosubliminal.ALTERNATIVEMOVIENAMEMAPPING[x])

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply the alternativemovienamemapping settings
    apply_alternativemovienamemapping()


def write_config_skipshow_section():
    """
    Write the config skipshow section.
    """
    section = 'skipshow'

    cfg = _load_config_parser()

    if cfg.has_section(section):
        cfg.remove_section(section)
    cfg.add_section(section)

    for x in autosubliminal.SKIPSHOW:
        cfg.set('skipshow', x, autosubliminal.SKIPSHOW[x])

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply the skipshow settings
    apply_skipshow()


def write_config_skipmovie_section():
    """
    Write the config skipmovie section.
    """
    section = 'skipmovie'

    cfg = _load_config_parser()

    if cfg.has_section(section):
        cfg.remove_section(section)
    cfg.add_section(section)

    for x in autosubliminal.SKIPMOVIE:
        cfg.set('skipmovie', x, autosubliminal.SKIPMOVIE[x])

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)

    # Apply the skipmovie settings
    apply_skipmovie()


def write_config_notification_section():
    """
    Write the config notification section.
    """
    section = 'notification'

    cfg = _load_config_parser()

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, 'notify', str(autosubliminal.NOTIFY))
    cfg.set(section, 'notifymail', str(autosubliminal.NOTIFYMAIL))
    cfg.set(section, 'mailsrv', autosubliminal.MAILSRV)
    cfg.set(section, 'mailfromaddr', autosubliminal.MAILFROMADDR)
    cfg.set(section, 'mailtoaddr', autosubliminal.MAILTOADDR)
    cfg.set(section, 'mailusername', autosubliminal.MAILUSERNAME)
    cfg.set(section, 'mailpassword', autosubliminal.MAILPASSWORD)
    cfg.set(section, 'mailsubject', autosubliminal.MAILSUBJECT)
    cfg.set(section, 'mailencryption', autosubliminal.MAILENCRYPTION)
    cfg.set(section, 'mailauth', autosubliminal.MAILAUTH)
    cfg.set(section, 'notifytwitter', str(autosubliminal.NOTIFYTWITTER))
    cfg.set(section, 'twitterkey', autosubliminal.TWITTERKEY)
    cfg.set(section, 'twittersecret', autosubliminal.TWITTERSECRET)
    cfg.set(section, 'notifypushalot', str(autosubliminal.NOTIFYPUSHALOT))
    cfg.set(section, 'pushalotapi', autosubliminal.PUSHALOTAPI)
    cfg.set(section, 'notifypushover', str(autosubliminal.NOTIFYPUSHOVER))
    cfg.set(section, 'pushoverkey', autosubliminal.PUSHOVERKEY)
    cfg.set(section, 'pushoverapi', autosubliminal.PUSHOVERAPI)
    cfg.set(section, 'pushoverdevices', autosubliminal.PUSHOVERDEVICES)
    cfg.set(section, 'notifygrowl', str(autosubliminal.NOTIFYGROWL))
    cfg.set(section, 'growlhost', autosubliminal.GROWLHOST)
    cfg.set(section, "growlport", str(autosubliminal.GROWLPORT))
    cfg.set(section, 'growlpass', autosubliminal.GROWLPASS)
    cfg.set(section, 'growlpriority', str(autosubliminal.GROWLPRIORITY))
    cfg.set(section, 'notifyprowl', str(autosubliminal.NOTIFYPROWL))
    cfg.set(section, 'prowlapi', autosubliminal.PROWLAPI)
    cfg.set(section, 'prowlpriority', str(autosubliminal.PROWLPRIORITY))
    cfg.set(section, 'notifypushbullet', str(autosubliminal.NOTIFYPUSHBULLET))
    cfg.set(section, 'pushbulletapi', autosubliminal.PUSHBULLETAPI)
    cfg.set(section, 'notifytelegram', str(autosubliminal.NOTIFYTELEGRAM))
    cfg.set(section, 'telegrambotapi', autosubliminal.TELEGRAMBOTAPI)
    cfg.set(section, 'telegramchatid', autosubliminal.TELEGRAMCHATID)

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)


def write_config_postprocessing_section():
    """
    Write the config postprocessing section.
    """
    section = 'postprocessing'

    cfg = _load_config_parser()

    if not cfg.has_section(section):
        cfg.add_section(section)

    cfg.set(section, 'postprocess', str(autosubliminal.POSTPROCESS))
    cfg.set(section, 'postprocessindividual', str(autosubliminal.POSTPROCESSINDIVIDUAL))
    cfg.set(section, 'postprocessutf8encoding', str(autosubliminal.POSTPROCESSUTF8ENCODING))
    cfg.set(section, 'showpostprocesscmd', autosubliminal.SHOWPOSTPROCESSCMD)
    cfg.set(section, 'showpostprocesscmdargs', autosubliminal.SHOWPOSTPROCESSCMDARGS)
    cfg.set(section, 'moviepostprocesscmd', autosubliminal.MOVIEPOSTPROCESSCMD)
    cfg.set(section, 'moviepostprocesscmdargs', autosubliminal.MOVIEPOSTPROCESSCMDARGS)

    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
        cfg.write(f)


def write_config_property(section=None, property_key=None, property_value=None):
    """
    Write a config property to a section.
    """
    cfg = _load_config_parser()

    if cfg.has_section(section):
        cfg.set(section, property_key, property_value)
        edited = True
    else:
        cfg.add_section(section)
        cfg.set(section, property_key, property_value)
        edited = True

    if edited:
        with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
            cfg.write(f)


def apply_logging():
    """
    Apply the logging settings.
    """
    logger.update_settings()


def apply_subliminal():
    """
    Apply the subliminal settings.
    """
    cfg = _load_config_parser()

    if cfg.has_section('subliminal'):
        providers = cfg.get('subliminal', 'providers')
        autosubliminal.SUBLIMINALPROVIDERS = providers.lower().split(',')
        # Only allow valid providers by checking if they are found in the provider manager
        for provider in autosubliminal.SUBLIMINALPROVIDERS:
            if provider not in autosubliminal.SUBLIMINALPROVIDERMANAGER.names():
                autosubliminal.SUBLIMINALPROVIDERS.remove(provider)
    else:
        autosubliminal.SUBLIMINALPROVIDERS = autosubliminal.SUBLIMINALPROVIDERMANAGER.names()


def apply_shownamemapping():
    """
    Apply the shownamemapping settings.
    """
    cfg = _load_config_parser()

    if cfg.has_section('shownamemapping'):
        autosubliminal.SHOWNAMEMAPPING = dict(cfg.items('shownamemapping'))
    else:
        autosubliminal.SHOWNAMEMAPPING = {}


def apply_addic7edshownamemapping():
    """
    Apply the addic7edshownamemapping settings.
    """
    cfg = _load_config_parser()

    if cfg.has_section('addic7edshownamemapping'):
        autosubliminal.ADDIC7EDSHOWNAMEMAPPING = dict(cfg.items('addic7edshownamemapping'))
    else:
        autosubliminal.ADDIC7EDSHOWNAMEMAPPING = {}


def apply_alternativeshownamemapping():
    """
    Apply the alternativeshownamemapping settings.
    """
    cfg = _load_config_parser()

    if cfg.has_section('alternativeshownamemapping'):
        autosubliminal.ALTERNATIVESHOWNAMEMAPPING = dict(cfg.items('alternativeshownamemapping'))
    else:
        autosubliminal.ALTERNATIVESHOWNAMEMAPPING = {}


def apply_movienamemapping():
    """
    Apply the movienamemapping settings.
    """
    cfg = _load_config_parser()

    if cfg.has_section('movienamemapping'):
        autosubliminal.MOVIENAMEMAPPING = dict(cfg.items('movienamemapping'))
    else:
        autosubliminal.MOVIENAMEMAPPING = {}


def apply_alternativemovienamemapping():
    """
    Apply the alternativemovienamemapping settings.
    """
    cfg = _load_config_parser()

    if cfg.has_section('alternativemovienamemapping'):
        autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = dict(cfg.items('alternativemovienamemapping'))
    else:
        autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = {}


def apply_skipshow():
    """
    Apply the skipshow settings.
    """
    cfg = _load_config_parser()

    if cfg.has_section('skipshow'):
        autosubliminal.SKIPSHOW = dict(cfg.items('skipshow'))
    else:
        autosubliminal.SKIPSHOW = {}


def apply_skipmovie():
    """
    Apply the skipmovie settings.
    """
    cfg = _load_config_parser()

    if cfg.has_section('skipmovie'):
        autosubliminal.SKIPMOVIE = dict(cfg.items('skipmovie'))
    else:
        autosubliminal.SKIPMOVIE = {}


def _create_config_parser():
    """Create a config parser.

    Don't use interpolation (for now) because we want to support values with % in it (timestamp format).
    """
    return ConfigParser(interpolation=None)


def _load_config_parser():
    """
    Read the config file and return the config parser.
    If no config file is present, a new config parser object is returned.
    """
    cfg = _create_config_parser()

    try:
        with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
            cfg.read_file(f)
    except Exception:
        # No config yet
        cfg = _create_config_parser()
        pass

    return cfg


def _check_for_restart():
    """
    Check if internal variables are different from the config file.
    Only check the variables the require a restart to take effect
    """
    cfg = _load_config_parser()

    # Set the default values
    scandiskinterval = 1
    checksubinterval = 24
    checksubdeadline = 4
    checksubdelta = 7
    checkversioninterval = 12
    scanlibraryinterval = 24
    logfile = 'AutoSubliminal.log'
    logsize = 0
    lognum = 0
    logdetailedformat = False
    webserverip = '0.0.0.0'
    webserverport = 8083
    webroot = ''
    username = ''
    password = ''

    # Check if an option excists in the config file, if so replace the default value
    if cfg.has_section('general'):
        if cfg.has_option('general', 'scandiskinterval'):
            scandiskinterval = cfg.getint('general', 'scandiskinterval')

        if cfg.has_option('general', 'checksubinterval'):
            checksubinterval = cfg.getint('general', 'checksubinterval')

        if cfg.has_option('general', 'checksubdeadline'):
            checksubdeadline = cfg.getint('general', 'checksubdeadline')

        if cfg.has_option('general', 'checksubdelta'):
            checksubdelta = cfg.getint('general', 'checksubdelta')

        if cfg.has_option('general', 'checkversioninterval'):
            checkversioninterval = cfg.getint('general', 'checkversioninterval')

    if cfg.has_section('library'):
        if cfg.has_option('library', 'scanlibraryinterval'):
            scanlibraryinterval = cfg.getint('library', 'scanlibraryinterval')

    if cfg.has_section('logging'):
        if cfg.has_option('logging', 'logfile'):
            logfile = cfg.get('logging', 'logfile')

        if cfg.has_option('logging', 'lognum'):
            lognum = cfg.getint('logging', 'lognum')

        if cfg.has_option('logging', 'logsize'):
            logsize = cfg.getint('logging', 'logsize')

        if cfg.has_option('logging', 'logdetailedformat'):
            logdetailedformat = cfg.getboolean('logging', 'logdetailedformat')

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
            or checksubdeadline != autosubliminal.CHECKSUBDEADLINE \
            or checksubdelta != autosubliminal.CHECKSUBDELTA \
            or checkversioninterval != autosubliminal.CHECKVERSIONINTERVAL \
            or scanlibraryinterval != autosubliminal.SCANLIBRARYINTERVAL \
            or logfile != autosubliminal.LOGFILE \
            or logsize != autosubliminal.LOGSIZE \
            or lognum != autosubliminal.LOGNUM \
            or logdetailedformat != autosubliminal.LOGDETAILEDFORMAT \
            or webserverip != autosubliminal.WEBSERVERIP \
            or webserverport != autosubliminal.WEBSERVERPORT \
            or webroot != autosubliminal.WEBROOT \
            or username != autosubliminal.USERNAME \
            or password != autosubliminal.PASSWORD:
        return True
    else:
        return False


def _upgrade_config(from_version, to_version):
    print('INFO: Upgrading config version from %d to %d.' % (from_version, to_version))
    print('INFO: Creating backup of old config file.')
    try:
        shutil.copy(autosubliminal.CONFIGFILE, autosubliminal.CONFIGFILE + '.' + time.strftime('%Y%m%d%H%M%S'))
    except Exception:
        print('ERROR: Unable to backup config file. Continuing without backup.')
    upgrades = to_version - from_version
    if upgrades != 1:
        print('INFO: More than 1 upgrade required. Starting subupgrades.')
        for x in list(range(from_version, upgrades + 1)):
            _upgrade_config((from_version - 1) + x, x + 1)
    else:
        if from_version == 1 and to_version == 2:
            print('INFO: Upgrading showminmatchscore.')
            print('INFO: Old value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            if (autosubliminal.SHOWMINMATCHSCORE % 2) == 0:
                autosubliminal.SHOWMINMATCHSCORE = (autosubliminal.SHOWMINMATCHSCORE * 2) + 2
            else:
                autosubliminal.SHOWMINMATCHSCORE = (autosubliminal.SHOWMINMATCHSCORE * 2) + 1
            print('INFO: New value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            print('INFO: Config upgraded to version 2.')
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
            print('INFO: Please configure your video paths again!')
            print('INFO: New default showminmatchscore.')
            print('INFO: Old value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
            autosubliminal.SHOWMATCHQUALITY = False
            autosubliminal.SHOWMATCHCODEC = False
            autosubliminal.SHOWMATCHRELEASEGROUP = False
            print('INFO: New value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            print('INFO: Replacing old user namemappings with tvdb ids.')
            for x in autosubliminal.SHOWNAMEMAPPING:
                # Search for tvdb id
                tvdb_id = autosubliminal.SHOWINDEXER.get_tvdb_id(x, force_search=True)
                # Replace by tvdb id or remove namemapping
                if tvdb_id:
                    autosubliminal.SHOWNAMEMAPPING[x] = str(tvdb_id)
                else:
                    del autosubliminal.SHOWNAMEMAPPING[x]
            print('INFO: Config upgraded to version 3.')
            autosubliminal.CONFIGVERSION = 3
            autosubliminal.CONFIGUPGRADED = True

        # use subliminal scores (see examples below on how it is calculated)
        #########################
        # Subliminal version 0.8.0
        #########################
        # video.scores['episode'] = 6
        # video.scores['series'] = 24
        # video.scores['season'] = 6
        # video.scores['year'] = 24
        # --> these 4 should always be matched by default -> not visible in GUI -> showminmatchscore = 60
        # video.scores['source'] = 3
        # video.scores['resolution'] = 2
        # video.scores['release_group'] = 6
        # video.scores['video_codec'] = 2
        # --> these 4 are configurable -> max showminmatchscore = 60 + 3 + 2 + 6 + 2 = 73
        # video.scores['hash'] = 74
        # --> perfect match -> not configurable
        if from_version == 3 and to_version == 4:
            print('INFO: Multi subtitle language support. Please configure your default and additional languages!')
            print('INFO: New default showminmatchscore.')
            print('INFO: Old value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
            autosubliminal.SHOWMATCHSOURCE = False
            autosubliminal.SHOWMATCHQUALITY = False
            autosubliminal.SHOWMATCHCODEC = False
            autosubliminal.SHOWMATCHRELEASEGROUP = False
            print('INFO: New value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            print('INFO: Config upgraded to version 4.')
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
        # video.scores['source'] = 6
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
        # video.scores['source'] = 6
        # video.scores['resolution'] = 4
        # video.scores['video_codec'] = 4
        # --> these 4 are configurable -> max showminmatchscore = 35 + 11 + 6 + 4 + 4 = 60
        # video.scores['hash'] = 62
        # --> perfect match -> not configurable
        if from_version == 4 and to_version == 5:
            print('INFO: Movie support. Please reconfigure your min match scores!')
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
            autosubliminal.SHOWMATCHSOURCE = False
            autosubliminal.SHOWMATCHQUALITY = False
            autosubliminal.SHOWMATCHCODEC = False
            autosubliminal.SHOWMATCHRELEASEGROUP = False
            print('INFO: Default value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            autosubliminal.MOVIEMINMATCHSCORE = autosubliminal.MOVIEMINMATCHSCOREDEFAULT
            autosubliminal.MOVIEMATCHSOURCE = False
            autosubliminal.MOVIEMATCHQUALITY = False
            autosubliminal.MOVIEMATCHCODEC = False
            autosubliminal.MOVIEMATCHRELEASEGROUP = False
            print('INFO: Default value movieminmatchscore: %d' % autosubliminal.MOVIEMINMATCHSCORE)
            print('INFO: Config upgraded to version 5.')
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
        # 'source': 7
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
        # 'source': 7
        # 'resolution': 2
        # 'video_codec': 2
        # --> these 4 are configurable -> max showminmatchscore = 90 + 15 + 7 + 2 + 2 = 116
        # 'audio_codec': 3
        # --> not used
        # 'hearing_impaired': 1
        # --> used for score increasing if wanted
        if from_version == 5 and to_version == 6:
            print('INFO: Upgrading scoring calculation. Please check/reconfigure your min match scores!')
            autosubliminal.SHOWMINMATCHSCORE = autosubliminal.SHOWMINMATCHSCOREDEFAULT
            print('INFO: Default value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            if autosubliminal.SHOWMATCHSOURCE:
                autosubliminal.SHOWMINMATCHSCORE += 7
            if autosubliminal.SHOWMATCHQUALITY:
                autosubliminal.SHOWMINMATCHSCORE += 2
            if autosubliminal.SHOWMATCHCODEC:
                autosubliminal.SHOWMINMATCHSCORE += 2
            if autosubliminal.SHOWMATCHRELEASEGROUP:
                autosubliminal.SHOWMINMATCHSCORE += 15
            print('INFO: New calculated value showminmatchscore: %d' % autosubliminal.SHOWMINMATCHSCORE)
            autosubliminal.MOVIEMINMATCHSCORE = autosubliminal.MOVIEMINMATCHSCOREDEFAULT
            print('INFO: Default value movieminmatchscore: %d' % autosubliminal.MOVIEMINMATCHSCORE)
            if autosubliminal.MOVIEMATCHSOURCE:
                autosubliminal.MOVIEMINMATCHSCORE += 7
            if autosubliminal.MOVIEMATCHQUALITY:
                autosubliminal.MOVIEMINMATCHSCORE += 2
            if autosubliminal.MOVIEMATCHCODEC:
                autosubliminal.MOVIEMINMATCHSCORE += 2
            if autosubliminal.MOVIEMATCHRELEASEGROUP:
                autosubliminal.MOVIEMINMATCHSCORE += 15
            print('INFO: New calculated value movieminmatchscore: %d' % autosubliminal.MOVIEMINMATCHSCORE)
            print('INFO: Hearing impaired logic changed. Please check your config!')
            autosubliminal.PREFERHEARINGIMPAIRED = False
            print('INFO: Config upgraded to version 6.')
            autosubliminal.CONFIGVERSION = 6
            autosubliminal.CONFIGUPGRADED = True
            send_websocket_notification('Config upgraded. Please check or reconfigure you subliminal configuration!',
                                        severity='warn', sticky=True)

        if from_version == 6 and to_version == 7:
            print('INFO: Upgrading log config. Please check/reconfigure your config!')
            autosubliminal.LOGNUM = 0
            autosubliminal.LOGSIZE = 0
            print('INFO: Config upgraded to version 7.')
            autosubliminal.CONFIGVERSION = 7
            autosubliminal.CONFIGUPGRADED = True
            send_websocket_notification('Config upgraded. Please check or reconfigure your logging configuration!',
                                        severity='warn', sticky=True)

        if from_version == 7 and to_version == 8:
            print('INFO: Upgrading skip config. Please check/reconfigure your config!')
            # '00' means now skip all, '0' means skip season 0
            for x in autosubliminal.SKIPSHOW:
                seasons = autosubliminal.SKIPSHOW[x].split(',')
                replace = {'0': '00', '00': '0'}
                autosubliminal.SKIPSHOW[x] = ','.join([replace[r] if r in replace else r for r in seasons])
            for x in autosubliminal.SKIPMOVIE:
                autosubliminal.SKIPMOVIE[x] = '00'
            print('INFO: Config upgraded to version 8.')
            autosubliminal.CONFIGVERSION = 8
            autosubliminal.CONFIGUPGRADED = True
            send_websocket_notification('Config upgraded. Please check or reconfigure your skip configuration!',
                                        severity='warn', sticky=True)

        if from_version == 8 and to_version == 9:
            print('INFO: Renaming config, logfile and skip section. Please check/reconfigure your config!')
            # Read config file
            cfg = _create_config_parser()
            try:
                with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
                    cfg.read_file(f)
            except Exception:
                # No config yet, just mark as upgraded
                cfg = _create_config_parser()
            # Reame sections
            if cfg.has_section('config'):
                cfg.add_section('general')
                for item in cfg.items('config'):
                    cfg.set('general', item[0], item[1])
                cfg.remove_section('config')
            if cfg.has_section('logfile'):
                cfg.add_section('logging')
                for item in cfg.items('logfile'):
                    cfg.set('logging', item[0], item[1])
                cfg.remove_section('logfile')
            if cfg.has_section('notify'):
                cfg.add_section('notification')
                for item in cfg.items('notify'):
                    cfg.set('notification', item[0], item[1])
                cfg.remove_section('notify')
            # Write to file
            with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
                cfg.write(f)
            # Read config again to load the copied values from their new section
            read_config()
            # Clear config file to trigger a clean write after the upgrade
            open(autosubliminal.CONFIGFILE, 'w').close()
            print('INFO: Config upgraded to version 9.')
            autosubliminal.CONFIGVERSION = 9
            autosubliminal.CONFIGUPGRADED = True
            send_websocket_notification(
                'Config upgraded. Please check or reconfigure your general, logging and notification configuration!',
                severity='warn', sticky=True)

        if from_version == 9 and to_version == 10:
            print('INFO: Removing old PATH config.')
            # Read config file
            cfg = _create_config_parser()
            try:
                with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
                    cfg.read_file(f)
            except Exception:
                # No config yet, just mark as upgraded
                cfg = _create_config_parser()
            if cfg.has_section('general'):
                if cfg.has_option('general', 'path'):
                    cfg.remove_option('general', 'path')
            # Write to file
            with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
                cfg.write(f)
            print('INFO: Config upgraded to version 10.')
            autosubliminal.CONFIGVERSION = 10
            autosubliminal.CONFIGUPGRADED = True
            send_websocket_notification('Config upgraded!', severity='warn', sticky=True)

        if from_version == 10 and to_version == 11:
            print('INFO: Renaming interval config parameters.')
            # Read config file
            cfg = _create_config_parser()
            try:
                with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
                    cfg.read_file(f)
            except Exception:
                # No config yet, just mark as upgraded
                cfg = _create_config_parser()
            # Rename intervals
            if cfg.has_section('general'):
                if cfg.has_option('general', 'scandisk'):
                    cfg.set('general', 'scandiskinterval', cfg.get('general', 'scandisk'))
                    cfg.remove_option('general', 'scandisk')
                if cfg.has_option('general', 'checksub'):
                    cfg.set('general', 'checksubinterval', cfg.get('general', 'checksub'))
                    cfg.remove_option('general', 'checksub')
                if cfg.has_option('general', 'checkversion'):
                    cfg.set('general', 'checkversioninterval', cfg.get('general', 'checkversion'))
                    cfg.remove_option('general', 'checkversion')
            if cfg.has_section('library'):
                if cfg.has_option('library', 'scanlibrary'):
                    cfg.set('library', 'scanlibraryinterval', cfg.get('library', 'scanlibrary'))
                    cfg.remove_option('library', 'scanlibrary')
            # Write to file
            with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
                cfg.write(f)
            print('INFO: Config upgraded to version 11.')
            autosubliminal.CONFIGVERSION = 11
            autosubliminal.CONFIGUPGRADED = True
            send_websocket_notification('Config upgraded!', severity='warn', sticky=True)

        if from_version == 11 and to_version == 12:
            print('INFO: Converting interval config parameters to hours.')
            # Read config file
            cfg = _create_config_parser()
            try:
                with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
                    cfg.read_file(f)
            except Exception:
                # No config yet, just mark as upgraded
                cfg = _create_config_parser()
            # Updating intervals
            autosubliminal.SCANDISKINTERVAL /= 3600
            autosubliminal.CHECKSUBINTERVAL /= 3600
            autosubliminal.CHECKVERSIONINTERVAL /= 3600
            autosubliminal.SCANLIBRARYINTERVAL /= 3600
            print('INFO: Config upgraded to version 12.')
            autosubliminal.CONFIGVERSION = 12
            autosubliminal.CONFIGUPGRADED = True
            send_websocket_notification('Config upgraded!', severity='warn', sticky=True)

        if from_version == 12 and to_version == 13:
            print('INFO: Renaming provider addic7ed_random_user_agent to addic7ed_custom.')
            # Read config file
            cfg = _create_config_parser()
            try:
                with codecs.open(autosubliminal.CONFIGFILE, mode='r', encoding=ENCODING) as f:
                    cfg.read_file(f)
            except Exception:
                # No config yet, just mark as upgraded
                cfg = _create_config_parser()
            # Rename provider
            if cfg.has_section('subliminal'):
                if cfg.has_option('subliminal', 'providers'):
                    providers = cfg.get('subliminal', 'providers').replace('addic7ed_random_user_agent',
                                                                           'addic7ed_custom')
                    cfg.set('subliminal', 'providers', providers)
                    autosubliminal.SUBLIMINALPROVIDERS = providers.lower().split(',')
                    # Write to file
                    with codecs.open(autosubliminal.CONFIGFILE, mode='wb', encoding=ENCODING) as f:
                        cfg.write(f)
            print('INFO: Config upgraded to version 13.')
            autosubliminal.CONFIGVERSION = 13
            autosubliminal.CONFIGUPGRADED = True
            send_websocket_notification('Config upgraded. Please check or reconfigure you subliminal configuration!',
                                        severity='warn', sticky=True)
