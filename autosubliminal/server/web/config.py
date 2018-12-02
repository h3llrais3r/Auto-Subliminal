# coding=utf-8

import cherrypy
from requests_oauthlib.oauth1_session import OAuth1Session

import autosubliminal
from autosubliminal import config, notifiers
from autosubliminal.server.web import redirect
from autosubliminal.templates.page import PageTemplate
from autosubliminal.util.common import get_boolean
from autosubliminal.util.mapping import mapping_string_to_dict
from autosubliminal.util.websocket import send_websocket_notification


class Config(object):
    def __init__(self):
        # Create config sub tree (name of attribute defines name of path: f.e. general -> /config/general)
        self.general = self._ConfigGeneral()
        self.logging = self._ConfigLogging()
        self.webserver = self._ConfigWebServer()
        self.subliminal = self._ConfigSubliminal()
        self.namemapping = self._ConfigNameMapping()
        self.skipmapping = self._ConfigSkipMapping()
        self.notification = self._ConfigNotification()
        self.postprocessing = self._ConfigPostProcessing()

    @staticmethod
    def save_and_restart_if_needed(section=None):
        # Save to the configfile
        restart = config.write_config(section)

        # Check if restart is needed
        if restart:
            return {'restart': True}

        else:
            # For some reason the config needs to be read again, otherwise all pages get an error
            config.read_config()
            send_websocket_notification('Config saved.')
            return {}

    @cherrypy.expose
    def index(self):
        # Redirect to general settings by default
        redirect('/config/general')

    class _ConfigGeneral(object):
        def __init__(self):
            self.template_file = '/config/config-general.mako'
            self.section = 'general'

        @cherrypy.expose
        def index(self):
            return PageTemplate(filename=self.template_file).render()

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, videopaths, defaultlanguage, defaultlanguagesuffix, additionallanguages, manualsearchwithscoring,
                 scandisk, checksub, checkversion, checkversionautoupdate, scanembeddedsubs, skiphiddendirs,
                 detectinvalidsublanguage, detectedlanguageprobability, minvideofilesize, maxdbresults,
                 timestampformat):
            # Set general variables
            autosubliminal.VIDEOPATHS = videopaths.split('\r\n')
            autosubliminal.DEFAULTLANGUAGE = defaultlanguage
            autosubliminal.DEFAULTLANGUAGESUFFIX = get_boolean(defaultlanguagesuffix)
            autosubliminal.ADDITIONALLANGUAGES = additionallanguages.split(',')
            autosubliminal.MANUALSEARCHWITHSCORING = get_boolean(manualsearchwithscoring)
            autosubliminal.SCANDISKINTERVAL = int(scandisk)
            autosubliminal.CHECKSUBINTERVAL = int(checksub)
            autosubliminal.CHECKVERSIONINTERVAL = int(checkversion)
            autosubliminal.CHECKVERSIONAUTOUPDATE = get_boolean(checkversionautoupdate)
            autosubliminal.SCANEMBEDDEDSUBS = get_boolean(scanembeddedsubs)
            autosubliminal.SKIPHIDDENDIRS = get_boolean(skiphiddendirs)
            autosubliminal.DETECTINVALIDSUBLANGUAGE = get_boolean(detectinvalidsublanguage)
            autosubliminal.DETECTEDLANGUAGEPROBABILITY = float(detectedlanguageprobability)
            autosubliminal.MINVIDEOFILESIZE = int(minvideofilesize)
            autosubliminal.MAXDBRESULTS = int(maxdbresults)
            autosubliminal.TIMESTAMPFORMAT = timestampformat

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed(self.section)

    class _ConfigLogging(object):
        def __init__(self):
            self.template_file = '/config/config-logging.mako'
            self.section = 'logging'

        @cherrypy.expose
        def index(self):
            return PageTemplate(filename=self.template_file).render()

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, logfile, loglevel, lognum, logsize, loghttpaccess, logexternallibs, logdetailedformat,
                 logreversed, loglevelconsole):
            # Set logfile variables
            autosubliminal.LOGFILE = logfile
            autosubliminal.LOGLEVEL = int(loglevel)
            autosubliminal.LOGNUM = int(lognum)
            autosubliminal.LOGSIZE = int(logsize)
            autosubliminal.LOGHTTPACCESS = get_boolean(loghttpaccess)
            autosubliminal.LOGEXTERNALLIBS = get_boolean(logexternallibs)
            autosubliminal.LOGDETAILEDFORMAT = get_boolean(logdetailedformat)
            autosubliminal.LOGREVERSED = get_boolean(logreversed)
            autosubliminal.LOGLEVELCONSOLE = int(loglevelconsole)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed(self.section)

    class _ConfigWebServer(object):
        def __init__(self):
            self.template_file = '/config/config-webserver.mako'
            self.section = 'webserver'

        @cherrypy.expose
        def index(self):
            return PageTemplate(filename=self.template_file).render()

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, webserverip, webserverport, webroot, username, password, launchbrowser):
            # Set webserver variables
            autosubliminal.WEBSERVERIP = webserverip
            autosubliminal.WEBSERVERPORT = int(webserverport)
            autosubliminal.WEBROOT = webroot
            autosubliminal.USERNAME = username
            autosubliminal.PASSWORD = password
            autosubliminal.LAUNCHBROWSER = get_boolean(launchbrowser)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed(self.section)

    class _ConfigSubliminal(object):
        def __init__(self):
            self.template_file = '/config/config-subliminal.mako'
            self.section = 'subliminal'

        @cherrypy.expose
        def index(self):
            return PageTemplate(filename=self.template_file).render()

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, subtitleutf8encoding, manualrefinevideo, refinevideo, preferhearingimpaired,
                 addic7edusername, addic7edpassword, opensubtitlesusername, opensubtitlespassword,
                 showmmsdefault=None, showmmssource=None, showmmsquality=None, showmmscodec=None,
                 showmmsreleasegroup=None,
                 moviemmsdefault=None, moviemmssource=None, moviemmsquality=None, moviemmscodec=None,
                 moviemmsreleasegroup=None,
                 subliminalproviders=None):
            # Set subliminal variables
            # Match options and showminmatchscore
            autosubliminal.SHOWMATCHSOURCE = False
            autosubliminal.SHOWMATCHQUALITY = False
            autosubliminal.SHOWMATCHCODEC = False
            autosubliminal.SHOWMATCHRELEASEGROUP = False
            autosubliminal.SHOWMINMATCHSCORE = 0
            # If not checked, the value will be default None, if checked, it will contain a value
            if showmmsdefault:
                # showmmsdefault is the minimal default score for a show (not editable, so no flag is needed)
                autosubliminal.SHOWMINMATCHSCORE += autosubliminal.SHOWMINMATCHSCOREDEFAULT
            if showmmssource:
                autosubliminal.SHOWMINMATCHSCORE += 7
                autosubliminal.SHOWMATCHSOURCE = True
            if showmmsquality:
                autosubliminal.SHOWMINMATCHSCORE += 2
                autosubliminal.SHOWMATCHQUALITY = True
            if showmmscodec:
                autosubliminal.SHOWMINMATCHSCORE += 2
                autosubliminal.SHOWMATCHCODEC = True
            if showmmsreleasegroup:
                autosubliminal.SHOWMINMATCHSCORE += 15
                autosubliminal.SHOWMATCHRELEASEGROUP = True
            # Match options and movieminmatchscore
            autosubliminal.MOVIEMATCHSOURCE = False
            autosubliminal.MOVIEMATCHQUALITY = False
            autosubliminal.MOVIEMATCHCODEC = False
            autosubliminal.MOVIEMATCHRELEASEGROUP = False
            autosubliminal.MOVIEMINMATCHSCORE = 0
            # If not checked, the value will be default None, if checked, it will contain a value
            if moviemmsdefault:
                # moviemmsdefault is the minimal default score for a movie (not editable, so no flag is needed)
                autosubliminal.MOVIEMINMATCHSCORE += autosubliminal.MOVIEMINMATCHSCOREDEFAULT
            if moviemmssource:
                autosubliminal.MOVIEMINMATCHSCORE += 7
                autosubliminal.MOVIEMATCHSOURCE = True
            if moviemmsquality:
                autosubliminal.MOVIEMINMATCHSCORE += 2
                autosubliminal.MOVIEMATCHQUALITY = True
            if moviemmscodec:
                autosubliminal.MOVIEMINMATCHSCORE += 2
                autosubliminal.MOVIEMATCHCODEC = True
            if moviemmsreleasegroup:
                autosubliminal.MOVIEMINMATCHSCORE += 15
                autosubliminal.MOVIEMATCHRELEASEGROUP = True
            # Subliminal providers
            if isinstance(subliminalproviders, list):
                autosubliminal.SUBLIMINALPROVIDERS = subliminalproviders
            else:
                autosubliminal.SUBLIMINALPROVIDERS = [subliminalproviders] if subliminalproviders else []
            # Subtitle utf8 encoding
            autosubliminal.SUBTITLEUTF8ENCODING = get_boolean(subtitleutf8encoding)
            # Refine video
            autosubliminal.MANUALREFINEVIDEO = get_boolean(manualrefinevideo)
            autosubliminal.REFINEVIDEO = get_boolean(refinevideo)
            # Hearing impaired
            autosubliminal.PREFERHEARINGIMPAIRED = get_boolean(preferhearingimpaired)
            # Addic7ed provider
            autosubliminal.ADDIC7EDUSERNAME = addic7edusername
            autosubliminal.ADDIC7EDPASSWORD = addic7edpassword
            # OpenSubtitles provider
            autosubliminal.OPENSUBTITLESUSERNAME = opensubtitlesusername
            autosubliminal.OPENSUBTITLESPASSWORD = opensubtitlespassword

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed(self.section)

    class _ConfigNameMapping(object):
        def __init__(self):
            self.template_file = '/config/config-namemapping.mako'
            self.section = 'namemapping'

        @cherrypy.expose
        def index(self):
            return PageTemplate(filename=self.template_file).render()

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, shownamemapping, addic7edshownamemapping, alternativeshownamemapping, movienamemapping,
                 alternativemovienamemapping):
            # Set name mapping dicts
            autosubliminal.SHOWNAMEMAPPING = mapping_string_to_dict(shownamemapping)
            autosubliminal.ADDIC7EDSHOWNAMEMAPPING = mapping_string_to_dict(addic7edshownamemapping)
            autosubliminal.ALTERNATIVESHOWNAMEMAPPING = mapping_string_to_dict(alternativeshownamemapping)
            autosubliminal.MOVIENAMEMAPPING = mapping_string_to_dict(movienamemapping)
            autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = mapping_string_to_dict(alternativemovienamemapping)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed(self.section)

    class _ConfigSkipMapping(object):
        def __init__(self):
            self.template_file = '/config/config-skipmapping.mako'
            self.section = 'skipmapping'

        @cherrypy.expose
        def index(self):
            return PageTemplate(filename=self.template_file).render()

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, skipshow, skipmovie):
            # Set skip variables
            autosubliminal.SKIPSHOW = mapping_string_to_dict(skipshow)
            autosubliminal.SKIPMOVIE = mapping_string_to_dict(skipmovie)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed(self.section)

    class _ConfigNotification(object):
        def __init__(self):
            self.template_file = '/config/config-notification.mako'
            self.section = 'notification'

        @cherrypy.expose
        def index(self):
            return PageTemplate(filename=self.template_file).render()

        @cherrypy.expose(alias='test')
        @cherrypy.tools.json_out()
        def test(self, notify_lib):
            if notifiers.test_notifier(notify_lib):
                send_websocket_notification('Test notification (%s) sent.' % notify_lib)
            else:
                send_websocket_notification('Test notification (%s) failed! Please check the log file!' % notify_lib,
                                            'error')
            return {}

        @cherrypy.expose(alias='regTwitter')
        def reg_twitter(self, token_key=None, token_secret=None, token_pin=None):
            import autosubliminal.notifiers.twitter as twitter_notifier

            if not token_key and not token_secret:
                # Getting request token
                oauth_client = OAuth1Session(client_key=twitter_notifier.CONSUMER_KEY,
                                             client_secret=twitter_notifier.CONSUMER_SECRET)
                try:
                    response = oauth_client.fetch_request_token(twitter_notifier.REQUEST_TOKEN_URL)
                except Exception as e:
                    message = 'Something went wrong.../n' + e.message
                    return PageTemplate(filename='/general/message.mako').render(message=message)
                # Authorize
                url = oauth_client.authorization_url(twitter_notifier.AUTHORIZATION_URL)
                token_key = response.get('oauth_token')
                token_secret = response.get('oauth_token_secret')
                return PageTemplate(filename='/config/config-regtwitter.mako').render(url=url, token_key=token_key,
                                                                                      token_secret=token_secret)

            if token_key and token_secret and token_pin:
                # Getting access token
                oauth_client = OAuth1Session(client_key=twitter_notifier.CONSUMER_KEY,
                                             client_secret=twitter_notifier.CONSUMER_SECRET,
                                             resource_owner_key=token_key,
                                             resource_owner_secret=token_secret,
                                             verifier=token_pin)
                try:
                    response = oauth_client.fetch_access_token(twitter_notifier.ACCESS_TOKEN_URL)
                except Exception as e:
                    message = 'Something went wrong.../n' + e.message
                    return PageTemplate(filename='/general/message.mako').render(message=message)
                # Store access token
                autosubliminal.TWITTERKEY = response.get('oauth_token')
                autosubliminal.TWITTERSECRET = response.get('oauth_token_secret')
                # Render template
                message = 'Twitter is now set up, remember to save your config and remember to test twitter!' \
                          '<br><a href="' + autosubliminal.WEBROOT + '/config/notification">Return</a>'
                return PageTemplate(filename='/general/message.mako').render(message=message)

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, notify,
                 notifymail, mailsrv, mailfromaddr, mailtoaddr, mailusername, mailpassword, mailsubject,
                 mailencryption, mailauth,
                 notifytwitter, twitterkey, twittersecret,
                 notifypushalot, pushalotapi,
                 notifypushover, pushoverkey, pushoverapi, pushoverdevices,
                 notifygrowl, growlhost, growlport, growlpass, growlpriority,
                 notifyprowl, prowlapi, prowlpriority,
                 notifypushbullet, pushbulletapi,
                 notifytelegram, telegrambotapi, telegramchatid):
            # Set notify variables
            autosubliminal.NOTIFY = get_boolean(notify)
            autosubliminal.NOTIFYMAIL = get_boolean(notifymail)
            autosubliminal.MAILSRV = mailsrv
            autosubliminal.MAILFROMADDR = mailfromaddr
            autosubliminal.MAILTOADDR = mailtoaddr
            autosubliminal.MAILUSERNAME = mailusername
            autosubliminal.MAILPASSWORD = mailpassword
            autosubliminal.MAILSUBJECT = mailsubject
            autosubliminal.MAILENCRYPTION = mailencryption
            autosubliminal.MAILAUTH = mailauth
            autosubliminal.NOTIFYTWITTER = get_boolean(notifytwitter)
            autosubliminal.TWITTERKEY = twitterkey
            autosubliminal.TWITTERSECRET = twittersecret
            autosubliminal.NOTIFYPUSHALOT = get_boolean(notifypushalot)
            autosubliminal.PUSHALOTAPI = pushalotapi
            autosubliminal.NOTIFYPUSHOVER = get_boolean(notifypushover)
            autosubliminal.PUSHOVERKEY = pushoverkey
            autosubliminal.PUSHOVERAPI = pushoverapi
            autosubliminal.PUSHOVERDEVICES = pushoverdevices
            autosubliminal.NOTIFYGROWL = get_boolean(notifygrowl)
            autosubliminal.GROWLHOST = growlhost
            autosubliminal.GROWLPORT = int(growlport)
            autosubliminal.GROWLPASS = growlpass
            autosubliminal.GROWLPRIORITY = int(growlpriority)
            autosubliminal.NOTIFYPROWL = get_boolean(notifyprowl)
            autosubliminal.PROWLAPI = prowlapi
            autosubliminal.PROWLPRIORITY = int(prowlpriority)
            autosubliminal.NOTIFYPUSHBULLET = get_boolean(notifypushbullet)
            autosubliminal.PUSHBULLETAPI = pushbulletapi
            autosubliminal.NOTIFYTELEGRAM = get_boolean(notifytelegram)
            autosubliminal.TELEGRAMBOTAPI = telegrambotapi
            autosubliminal.TELEGRAMCHATID = telegramchatid

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed(self.section)

    class _ConfigPostProcessing(object):
        def __init__(self):
            self.template_file = '/config/config-postprocessing.mako'
            self.section = 'postprocessing'

        @cherrypy.expose
        def index(self):
            return PageTemplate(filename=self.template_file).render()

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, postprocess, postprocessindividual, postprocessutf8encoding, showpostprocesscmd,
                 showpostprocesscmdargs, moviepostprocesscmd, moviepostprocesscmdargs):
            # Set postprocessing variables
            autosubliminal.POSTPROCESS = get_boolean(postprocess)
            autosubliminal.POSTPROCESSINDIVIDUAL = get_boolean(postprocessindividual)
            autosubliminal.POSTPROCESSUTF8ENCODING = get_boolean(postprocessutf8encoding)
            autosubliminal.SHOWPOSTPROCESSCMD = showpostprocesscmd
            autosubliminal.SHOWPOSTPROCESSCMDARGS = showpostprocesscmdargs
            autosubliminal.MOVIEPOSTPROCESSCMD = moviepostprocesscmd
            autosubliminal.MOVIEPOSTPROCESSCMDARGS = moviepostprocesscmdargs

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed(self.section)
