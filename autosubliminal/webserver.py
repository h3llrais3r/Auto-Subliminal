import json
import os
import re

import cherrypy
from Cheetah.Template import Template

import autosubliminal
from autosubliminal import config, notifiers, runner, subchecker, utils
from autosubliminal.db import ImdbIdCache, LastDownloads, TvdbIdCache, WantedItems


def redirect(abspath, *args, **kwargs):
    assert abspath[0] == '/'
    raise cherrypy.HTTPRedirect(str(autosubliminal.WEBROOT) + abspath, *args, **kwargs)


def redirect_referer(abspath, *args, **kwargs):
    referer = cherrypy.request.headers.get('Referer')
    if referer:
        raise cherrypy.HTTPRedirect(referer, *args, **kwargs)
    else:
        redirect(abspath)


class Home(object):
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        useragent = cherrypy.request.headers.get("User-Agent", '')
        tmpl = Template(file="web/templates/home/home.tmpl")
        if autosubliminal.MOBILE and utils.check_mobile_device(useragent):
            tmpl = Template(file="web/templates/mobile/home.tmpl")
        return str(tmpl)

    @cherrypy.expose(alias='updateWantedItem')
    @cherrypy.tools.json_out()
    def update_wanted_item(self, wanted_item_index, **kwargs):
        # Get wanted item
        wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
        # Update all keys that are passed
        for key in kwargs.keys() if wanted_item else None:
            if key in wanted_item.keys():
                wanted_item[key] = kwargs[key]
        # Only return updatable fields
        return {'displaytitle': utils.display_title(wanted_item),
                'title': utils.display_item(wanted_item, 'title', default_value=''),
                'year': utils.display_item(wanted_item, 'year', default_value=''),
                'season': utils.display_item(wanted_item, 'season', default_value=''),
                'episode': utils.display_item(wanted_item, 'episode', default_value=''),
                'source': utils.display_item(wanted_item, 'source', uppercase=True),
                'quality': utils.display_item(wanted_item, 'quality', uppercase=True),
                'codec': utils.display_item(wanted_item, 'codec', uppercase=True),
                'releasegrp': utils.display_item(wanted_item, 'releasegrp', uppercase=True)}

    @cherrypy.expose(alias='resetWantedItem')
    @cherrypy.tools.json_out()
    def reset_wanted_item(self, wanted_item_index, **kwargs):
        # Get wanted item
        wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
        wanted_item_db = WantedItems().get_wanted_item(wanted_item['videopath'])
        for key in wanted_item.keys():
            wanted_item[key] = wanted_item_db[key]
        # Only return updatable fields
        return {'displaytitle': utils.display_title(wanted_item),
                'title': utils.display_item(wanted_item, 'title', default_value=''),
                'year': utils.display_item(wanted_item, 'year', default_value=''),
                'season': utils.display_item(wanted_item, 'season', default_value=''),
                'episode': utils.display_item(wanted_item, 'episode', default_value=''),
                'source': utils.display_item(wanted_item, 'source'),
                'quality': utils.display_item(wanted_item, 'quality'),
                'codec': utils.display_item(wanted_item, 'codec'),
                'releasegrp': utils.display_item(wanted_item, 'releasegrp')}

    @cherrypy.expose(alias='searchId')
    def force_id_search(self, wanted_item_index):
        subchecker.force_id_search(wanted_item_index)
        redirect("/home")

    @cherrypy.expose(alias='skipShow')
    def skip_show(self, wanted_item_index, title, season=None):
        if not season:
            tmpl = Template(file="web/templates/home/home-skipshow.tmpl")
            tmpl.wanted_item_index = wanted_item_index
            tmpl.title = title
            return str(tmpl)
        else:
            if not wanted_item_index:
                raise cherrypy.HTTPError(400, "No wanted_item index supplied")
            if not title:
                raise cherrypy.HTTPError(400, "No show supplied")
            config_season = season
            if title.upper() in autosubliminal.SKIPSHOWUPPER:
                for x in autosubliminal.SKIPSHOWUPPER[title.upper()].split(','):
                    if x == season or x == '00':
                        utils.add_notification_message("Already skipped show %s season %s" % (title, season))
                        redirect("/home")
                if season == '00':
                    config_season = '00'
                else:
                    seasons = autosubliminal.SKIPSHOWUPPER[title.upper()].split(',')
                    seasons.append(str(int(season)))
                    config_season = ','.join(sorted(seasons))
            else:
                if not season == '00':
                    season = str(int(season))
            if subchecker.skip_show(wanted_item_index, season):
                config.save_config('skipshow', title, config_season)
                config.apply_skipshow()
                if season == '00':
                    utils.add_notification_message("Skipped show %s all seasons" % title)
                else:
                    utils.add_notification_message("Skipped show %s season %s" % (title, season))
            else:
                utils.add_notification_message("Could not skip show! Please check the log file.", "error")

            redirect("/home")

    @cherrypy.expose(alias='skipMovie')
    def skip_movie(self, wanted_item_index, title, year):
        if not wanted_item_index:
            raise cherrypy.HTTPError(400, "No wanted_item index supplied")
        if not title:
            raise cherrypy.HTTPError(400, "No title supplied")
        movie = title
        if year:
            movie += " (" + year + ")"
        if movie.upper() in autosubliminal.SKIPMOVIEUPPER:
            utils.add_notification_message("Already skipped movie %s" % movie)
            redirect("/home")
        else:
            if subchecker.skip_movie(wanted_item_index):
                config.save_config('skipmovie', movie, '00')
                config.apply_skipmovie()
                utils.add_notification_message("Skipped movie %s" % movie)
            else:
                utils.add_notification_message("Could not skip movie! Please check the log file.", "error")

        redirect("/home")

    @cherrypy.expose(alias='deleteVideo')
    def delete_video(self, wanted_item_index, confirmed=False, cleanup=False):
        if not confirmed:
            # Get wanted item
            wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
            tmpl = Template(file="web/templates/home/home-deleteVideo.tmpl")
            tmpl.wanted_item_index = wanted_item_index
            tmpl.video = wanted_item['videopath']
            return str(tmpl)
        else:
            # Delete video
            deleted = subchecker.delete_video(wanted_item_index, cleanup)
            if deleted:
                utils.add_notification_message("Video deleted from filesystem")
            else:
                utils.add_notification_message("Video could not be deleted! Please check the log file.", "error")
            redirect("/home")

    @cherrypy.expose(alias='searchSubtitle')
    def search_subtitle(self, wanted_item_index, lang):
        # Search subtitle
        subs, errormessage = subchecker.search_subtitle(wanted_item_index, lang)
        # Send response in html (store subs under subs key)
        tmpl = Template(file="web/templates/home/home-manualsearch.tmpl")
        tmpl.subs = subs
        tmpl.infomessage = ""
        tmpl.errormessage = errormessage
        return str(tmpl)

    @cherrypy.expose(alias='saveSubtitle')
    @cherrypy.tools.json_out()
    def save_subtitle(self, wanted_item_index, subtitle_index):
        # Save subtitle
        saved = subchecker.save_subtitle(wanted_item_index, subtitle_index)
        if saved:
            return {'result': saved, 'infomessage': 'Subtitle saved.', 'errormessage': ''}
        else:
            return {'result': saved, 'infomessage': '',
                    'errormessage': 'Unable to save the subtitle! Please check the log file!'}

    @cherrypy.expose(alias='deleteSubtitle')
    @cherrypy.tools.json_out()
    def delete_subtitle(self, wanted_item_index):
        # Delete subtitle
        removed = subchecker.delete_subtitle(wanted_item_index)
        if removed:
            return {'result': removed, 'infomessage': 'Subtitle deleted.', 'errormessage': ''}
        else:
            return {'result': removed, 'infomessage': '',
                    'errormessage': 'Unable to delete the subtitle! Please check the log file!'}

    @cherrypy.expose(alias='playVideo')
    @cherrypy.tools.json_out()
    def play_video(self, wanted_item_index):
        # Get wanted item
        wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
        # Play video with default player
        video = wanted_item['videopath']
        try:
            utils.run_cmd(video, False)
            return {'result': True, 'infomessage': 'Playing video.', 'errormessage': ''}
        except:
            return {'result': False, 'infomessage': '',
                    'errormessage': 'Cannot play the video! Please check the log file!'}

    @cherrypy.expose(alias='postProcess')
    @cherrypy.tools.json_out()
    def post_process(self, wanted_item_index, subtitle_index=None):
        # Post process
        if subtitle_index:
            processed = subchecker.post_process(wanted_item_index, subtitle_index)
            if processed:
                return {'result': processed, 'infomessage:': '', 'errormessage': '', 'redirect': '/home'}
            else:
                return {'result': processed, 'infomessage': '',
                        'errormessage': 'Unable to handle post processing! Please check the log file!'}
        else:
            subchecker.post_process_no_subtitle(wanted_item_index)
            redirect("/home")


class Config(object):
    def __init__(self):
        # Create config sub tree (name of attribute defines name of path: f.e. general -> /config/general)
        self.general = self._ConfigGeneral()
        self.logging = self._ConfigLogging()
        self.webserver = self._ConfigWebServer()
        self.subliminal = self._ConfigSubliminal()
        self.namemapping = self._ConfigNameMapping()
        self.skip = self._ConfigSkip()
        self.notification = self._ConfigNotification()
        self.postprocessing = self._ConfigPostProcessing()

    @staticmethod
    def save_and_restart_if_needed():
        # Save to the configfile
        restart = config.write_config()

        # Check if restart is needed
        if restart:
            return {'restart': True}

        else:
            # For some reason the config needs to be read again, otherwise all pages get an error
            config.read_config()
            utils.add_notification_message("Config saved")
            return {}

    @cherrypy.expose
    def index(self):
        # Redirect to general settings by default
        redirect("/config/general")

    class _ConfigGeneral(object):
        def __init__(self):
            self.tmpl_file = "web/templates/config/config-general.tmpl"

        @cherrypy.expose
        def index(self):
            return str(Template(file=self.tmpl_file))

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, path, videopaths, defaultlanguage, defaultlanguagesuffix, additionallanguages, scandisk,
                 checksub, checkversion, checkversionautoupdate, scanembeddedsubs, skiphiddendirs,
                 detectinvalidsublanguage, detectedlanguageprobability, minvideofilesize, maxdbresults):
            # Set general variables
            autosubliminal.PATH = path
            autosubliminal.VIDEOPATHS = videopaths.split('\r\n')
            autosubliminal.DEFAULTLANGUAGE = defaultlanguage
            autosubliminal.DEFAULTLANGUAGESUFFIX = utils.getboolean(defaultlanguagesuffix)
            autosubliminal.ADDITIONALLANGUAGES = additionallanguages.split(',')
            autosubliminal.SCANDISKINTERVAL = int(scandisk)
            autosubliminal.CHECKSUBINTERVAL = int(checksub)
            autosubliminal.CHECKVERSIONINTERVAL = int(checkversion)
            autosubliminal.CHECKVERSIONAUTOUPDATE = utils.getboolean(checkversionautoupdate)
            autosubliminal.SCANEMBEDDEDSUBS = utils.getboolean(scanembeddedsubs)
            autosubliminal.SKIPHIDDENDIRS = utils.getboolean(skiphiddendirs)
            autosubliminal.DETECTINVALIDSUBLANGUAGE = utils.getboolean(detectinvalidsublanguage)
            autosubliminal.DETECTEDLANGUAGEPROBABILITY = float(detectedlanguageprobability)
            autosubliminal.MINVIDEOFILESIZE = int(minvideofilesize)
            autosubliminal.MAXDBRESULTS = int(maxdbresults)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed()

    class _ConfigLogging(object):
        def __init__(self):
            self.tmpl_file = "web/templates/config/config-logging.tmpl"

        @cherrypy.expose
        def index(self):
            return str(Template(file=self.tmpl_file))

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, logfile, loglevel, lognum, logsize, loghttpaccess, logexternallibs, logdetailedformat,
                 logreversed, loglevelconsole):
            # Set logfile variables
            autosubliminal.LOGFILE = logfile
            autosubliminal.LOGLEVEL = int(loglevel)
            autosubliminal.LOGNUM = int(lognum)
            autosubliminal.LOGSIZE = int(logsize)
            autosubliminal.LOGHTTPACCESS = utils.getboolean(loghttpaccess)
            autosubliminal.LOGEXTERNALLIBS = utils.getboolean(logexternallibs)
            autosubliminal.LOGDETAILEDFORMAT = utils.getboolean(logdetailedformat)
            autosubliminal.LOGREVERSED = utils.getboolean(logreversed)
            autosubliminal.LOGLEVELCONSOLE = int(loglevelconsole)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed()

    class _ConfigWebServer(object):
        def __init__(self):
            self.tmpl_file = "web/templates/config/config-webserver.tmpl"

        @cherrypy.expose
        def index(self):
            return str(Template(file=self.tmpl_file))

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, webserverip, webserverport, webroot, username, password, launchbrowser):
            # Set webserver variables
            autosubliminal.WEBSERVERIP = webserverip
            autosubliminal.WEBSERVERPORT = int(webserverport)
            autosubliminal.WEBROOT = webroot
            autosubliminal.USERNAME = username
            autosubliminal.PASSWORD = password
            autosubliminal.LAUNCHBROWSER = utils.getboolean(launchbrowser)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed()

    class _ConfigSubliminal(object):
        def __init__(self):
            self.tmpl_file = "web/templates/config/config-subliminal.tmpl"

        @cherrypy.expose
        def index(self):
            return str(Template(file=self.tmpl_file))

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
            # Subliminal providers (convert list to comma separated string if multiple are selected)
            if subliminalproviders and not isinstance(subliminalproviders, basestring):
                autosubliminal.SUBLIMINALPROVIDERS = ','.join([str(provider) for provider in subliminalproviders])
            else:
                # Just one selected or None (in this case, None will be saved and no providers will be used)
                autosubliminal.SUBLIMINALPROVIDERS = subliminalproviders
            # Subtitle utf8 encoding
            autosubliminal.SUBTITLEUTF8ENCODING = utils.getboolean(subtitleutf8encoding)
            # Refine video
            autosubliminal.MANUALREFINEVIDEO = utils.getboolean(manualrefinevideo)
            autosubliminal.REFINEVIDEO = utils.getboolean(refinevideo)
            # Hearing impaired
            autosubliminal.PREFERHEARINGIMPAIRED = utils.getboolean(preferhearingimpaired)
            # Addic7ed provider
            autosubliminal.ADDIC7EDUSERNAME = addic7edusername
            autosubliminal.ADDIC7EDPASSWORD = addic7edpassword
            # OpenSubtitles provider
            autosubliminal.OPENSUBTITLESUSERNAME = opensubtitlesusername
            autosubliminal.OPENSUBTITLESPASSWORD = opensubtitlespassword

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed()

    class _ConfigNameMapping(object):
        def __init__(self):
            self.tmpl_file = "web/templates/config/config-namemapping.tmpl"

        @cherrypy.expose
        def index(self):
            return str(Template(file=self.tmpl_file))

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, usershownamemapping, addic7edshownamemapping, usermovienamemapping):
            # Set name mapping dicts
            autosubliminal.USERSHOWNAMEMAPPING = utils.string_to_dict(usershownamemapping)
            autosubliminal.ADDIC7EDSHOWNAMEMAPPING = utils.string_to_dict(addic7edshownamemapping, True)
            autosubliminal.USERMOVIENAMEMAPPING = utils.string_to_dict(usermovienamemapping)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed()

    class _ConfigSkip(object):
        def __init__(self):
            self.tmpl_file = "web/templates/config/config-skip.tmpl"

        @cherrypy.expose
        def index(self):
            return str(Template(file=self.tmpl_file))

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, skipshow, skipmovie):
            # Set skip variables
            autosubliminal.SKIPSHOW = utils.string_to_dict(skipshow)
            autosubliminal.SKIPMOVIE = utils.string_to_dict(skipmovie)

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed()

    class _ConfigNotification(object):
        def __init__(self):
            self.tmpl_file = "web/templates/config/config-notification.tmpl"

        @cherrypy.expose
        def index(self):
            return str(Template(file=self.tmpl_file))

        @cherrypy.expose(alias='test')
        @cherrypy.tools.json_out()
        def test(self, notify_lib):
            if notifiers.test_notifier(notify_lib):
                utils.add_notification_message("Test notification (%s) sent" % notify_lib)
            else:
                utils.add_notification_message("Test notification (%s) failed" % notify_lib, "error")
            return {}

        @cherrypy.expose(alias='regTwitter')
        def reg_twitter(self, token_key=None, token_secret=None, token_pin=None):
            import oauth2
            import autosubliminal.notifiers.twitter as notifytwitter

            try:
                from urlparse import parse_qsl
            except:
                from cgi import parse_qsl

            if not token_key and not token_secret:
                consumer = oauth2.Consumer(key=notifytwitter.CONSUMER_KEY, secret=notifytwitter.CONSUMER_SECRET)
                oauth_client = oauth2.Client(consumer)
                response, content = oauth_client.request(notifytwitter.REQUEST_TOKEN_URL, 'GET')
                if response['status'] != '200':
                    tmpl = Template(file="web/templates/general/message.tmpl")
                    tmpl.message = "Something went wrong..."
                    return str(tmpl)
                else:
                    request_token = dict(parse_qsl(content))
                    tmpl = Template(file="web/templates/config/config-regtwitter.tmpl")
                    tmpl.url = notifytwitter.AUTHORIZATION_URL + "?oauth_token=" + request_token['oauth_token']
                    token_key = request_token['oauth_token']
                    token_secret = request_token['oauth_token_secret']
                    tmpl.token_key = token_key
                    tmpl.token_secret = token_secret
                    return str(tmpl)

            if token_key and token_secret and token_pin:
                token = oauth2.Token(token_key, token_secret)
                token.set_verifier(token_pin)
                consumer = oauth2.Consumer(key=notifytwitter.CONSUMER_KEY, secret=notifytwitter.CONSUMER_SECRET)
                oauth_client2 = oauth2.Client(consumer, token)
                response, content = oauth_client2.request(notifytwitter.ACCESS_TOKEN_URL, method='POST',
                                                          body='oauth_verifier=%s' % token_pin)
                access_token = dict(parse_qsl(content))
                if response['status'] != '200':
                    tmpl = Template(file="web/templates/general/message.tmpl")
                    tmpl.message = "Something went wrong..."
                    return str(tmpl)
                else:
                    autosubliminal.TWITTERKEY = access_token['oauth_token']
                    autosubliminal.TWITTERSECRET = access_token['oauth_token_secret']
                    tmpl = Template(file="web/templates/general/message.tmpl")
                    tmpl.message = "Twitter is now set up, remember to save your config and remember to test twitter!" \
                                   "<br><a href='" + autosubliminal.WEBROOT + "/config'>Return</a>"
                    return str(tmpl)

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, notify,
                 notifymail, mailsrv, mailfromaddr, mailtoaddr, mailusername, mailpassword, mailsubject,
                 mailencryption, mailauth,
                 notifytwitter, twitterkey, twittersecret,
                 notifypushalot, pushalotapi,
                 notifypushover, pushoverkey, pushoverapi, pushoverdevices,
                 notifynma, nmaapi,
                 notifygrowl, growlhost, growlpass,
                 notifyprowl, prowlapi, prowlpriority,
                 notifypushbullet, pushbulletapi):
            # Set notify variables
            autosubliminal.NOTIFY = utils.getboolean(notify)
            autosubliminal.NOTIFYMAIL = utils.getboolean(notifymail)
            autosubliminal.MAILSRV = mailsrv
            autosubliminal.MAILFROMADDR = mailfromaddr
            autosubliminal.MAILTOADDR = mailtoaddr
            autosubliminal.MAILUSERNAME = mailusername
            autosubliminal.MAILPASSWORD = mailpassword
            autosubliminal.MAILSUBJECT = mailsubject
            autosubliminal.MAILENCRYPTION = mailencryption
            autosubliminal.MAILAUTH = mailauth
            autosubliminal.NOTIFYTWITTER = utils.getboolean(notifytwitter)
            autosubliminal.TWITTERKEY = twitterkey
            autosubliminal.TWITTERSECRET = twittersecret
            autosubliminal.NOTIFYPUSHALOT = utils.getboolean(notifypushalot)
            autosubliminal.PUSHALOTAPI = pushalotapi
            autosubliminal.NOTIFYPUSHOVER = utils.getboolean(notifypushover)
            autosubliminal.PUSHOVERKEY = pushoverkey
            autosubliminal.PUSHOVERAPI = pushoverapi
            autosubliminal.PUSHOVERDEVICES = pushoverdevices
            autosubliminal.NOTIFYNMA = utils.getboolean(notifynma)
            autosubliminal.NMAAPI = nmaapi
            autosubliminal.NOTIFYGROWL = utils.getboolean(notifygrowl)
            autosubliminal.GROWLHOST = growlhost
            autosubliminal.GROWLPASS = growlpass
            autosubliminal.NOTIFYPROWL = utils.getboolean(notifyprowl)
            autosubliminal.PROWLAPI = prowlapi
            autosubliminal.PROWLPRIORITY = int(prowlpriority)
            autosubliminal.NOTIFYPUSHBULLET = utils.getboolean(notifypushbullet)
            autosubliminal.PUSHBULLETAPI = pushbulletapi

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed()

    class _ConfigPostProcessing(object):
        def __init__(self):
            self.tmpl_file = "web/templates/config/config-postprocessing.tmpl"

        @cherrypy.expose
        def index(self):
            return str(Template(file=self.tmpl_file))

        @cherrypy.expose(alias='save')
        @cherrypy.tools.json_out()
        def save(self, postprocess, postprocessindividual, postprocessutf8encoding, showpostprocesscmd,
                 showpostprocesscmdargs, moviepostprocesscmd, moviepostprocesscmdargs):
            # Set postprocessing variables
            autosubliminal.POSTPROCESS = utils.getboolean(postprocess)
            autosubliminal.POSTPROCESSINDIVIDUAL = utils.getboolean(postprocessindividual)
            autosubliminal.POSTPROCESSUTF8ENCODING = utils.getboolean(postprocessutf8encoding)
            autosubliminal.SHOWPOSTPROCESSCMD = showpostprocesscmd
            autosubliminal.SHOWPOSTPROCESSCMDARGS = showpostprocesscmdargs
            autosubliminal.MOVIEPOSTPROCESSCMD = moviepostprocesscmd
            autosubliminal.MOVIEPOSTPROCESSCMDARGS = moviepostprocesscmdargs

            # Now save to the configfile and restart if needed
            return Config.save_and_restart_if_needed()


class Log(object):
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        redirect("/log/viewLog")

    @cherrypy.expose(alias='viewLog')
    def view_log(self, loglevel='all', lognum=None):
        tmpl = Template(file="web/templates/log/log.tmpl")
        tmpl.loglevel = loglevel
        tmpl.lognum = lognum
        result = utils.display_logfile(loglevel, lognum)
        tmpl.message = result

        return str(tmpl)

    @cherrypy.expose(alias='clearLog')
    def clear_log(self):
        # Clear log file (open it in write mode and pass)
        with open(autosubliminal.LOGFILE, 'w'):
            pass
        # Remove possible backup log files
        for f in [f for f in os.listdir('.') if os.path.isfile(f) and re.match(autosubliminal.LOGFILE + '.', f)]:
            os.remove(f)
        # Return to default log view
        tmpl = Template(file="web/templates/log/log.tmpl")
        tmpl.loglevel = 'all'
        tmpl.lognum = None
        result = utils.display_logfile()
        tmpl.message = result
        return str(tmpl)


class System(object):
    def __init__(self):
        pass

    @cherrypy.expose(alias='runNow')
    def run_now(self):
        # Run threads now (use delay to be sure that checksub is run after scandisk)
        autosubliminal.SCANDISK.run()
        autosubliminal.CHECKSUB.run(delay=0.5)
        useragent = cherrypy.request.headers.get("User-Agent", '')
        if autosubliminal.MOBILE and utils.check_mobile_device(useragent):
            tmpl = Template(file="web/templates/mobile/message.tmpl")
            tmpl.message = "Running everything <br> <a href='" + autosubliminal.WEBROOT + "/home'>Return</a>"
            return str(tmpl)
        else:
            utils.add_notification_message("Running everything...")
            redirect("/home")

    @cherrypy.expose
    def restart(self):
        runner.restart_app()
        tmpl = Template(file="web/templates/system/system-restart.tmpl")
        tmpl.message = "Auto-Subliminal is restarting..."
        return str(tmpl)

    @cherrypy.expose
    def shutdown(self):
        runner.shutdown_app()
        tmpl = Template(file="web/templates/general/message.tmpl")
        tmpl.message = "Auto-Subliminal is shutting down..."
        return str(tmpl)

    @cherrypy.expose(alias='info')
    def info(self):
        tmpl = Template(file="web/templates/system/system-info.tmpl")
        return str(tmpl)

    @cherrypy.expose
    def status(self):
        tmpl = Template(file="web/templates/system/system-status.tmpl")
        return str(tmpl)

    @cherrypy.expose(alias='scanDisk')
    def scan_disk(self):
        autosubliminal.SCANDISK.run()
        redirect_referer("/home")

    @cherrypy.expose(alias='checkSub')
    def check_sub(self):
        autosubliminal.CHECKSUB.run()
        redirect_referer("/home")

    @cherrypy.expose(alias='checkVersion')
    def check_version(self):
        autosubliminal.CHECKVERSION.run()
        redirect_referer("/home")

    @cherrypy.expose(alias='updateVersion')
    def update_version(self):
        autosubliminal.CHECKVERSION.process.update()
        runner.restart_app(exit=True)
        tmpl = Template(file="web/templates/system/system-restart.tmpl")
        tmpl.message = "Auto-Subliminal is restarting..."
        return str(tmpl)

    @cherrypy.expose(alias='flushCache')
    def flush_cache(self):
        TvdbIdCache().flush_cache()
        ImdbIdCache().flush_cache()
        utils.add_notification_message("Flushed id cache database")
        redirect("/home")

    @cherrypy.expose(alias='flushWantedItems')
    def flush_wanted_items(self):
        if utils.get_wanted_queue_lock():
            # Flush db and wanted queue
            WantedItems().flush_wanted_items()
            autosubliminal.WANTEDQUEUE = []
            utils.release_wanted_queue_lock()
            utils.add_notification_message("Flushed wanted items database. Please launch system 'run now'.")
        else:
            utils.add_notification_message("Cannot flush wanted items database when wanted queue is in use", "notice")
        redirect("/home")

    @cherrypy.expose(alias='flushLastDownloads')
    def flush_last_downloads(self):
        LastDownloads().flush_last_downloads()
        utils.add_notification_message("Flushed last downloads database")
        redirect("/home")

    @cherrypy.expose(alias='exitMobile')
    def exit_mobile(self):
        if autosubliminal.MOBILE:
            autosubliminal.MOBILE = False
            redirect("/home")
        else:
            autosubliminal.MOBILE = True
            redirect("/home")

    @cherrypy.expose(alias='isAlive')
    def is_alive(self, *args, **kwargs):
        if 'callback' in kwargs:
            callback = kwargs['callback']
        else:
            return "Error: Unsupported Request. Send jsonp request with 'callback' variable in the query string."
        cherrypy.response.headers['Cache-Control'] = "max-age=0,no-cache,no-store"
        cherrypy.response.headers['Content-Type'] = "text/javascript"
        cherrypy.response.headers['Access-Control-Allow-Origin'] = "*"
        cherrypy.response.headers['Access-Control-Allow-Headers'] = "x-requested-with"

        if autosubliminal.STARTED:
            return callback + '(' + json.dumps({"msg": "True"}) + ');'
        else:
            return callback + '(' + json.dumps({"msg": "False"}) + ');'

    @cherrypy.expose
    def message(self):
        # Handle message via websocket (no logic needed for now)
        # You can access the websocket handler class instance through:
        # handler = cherrypy.request.ws_handler
        pass


class Mobile(object):
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        tmpl = Template(file="web/templates/mobile/home.tmpl")
        return str(tmpl)


class WebServerRoot(object):
    def __init__(self):
        # Create root tree (name of attribute defines name of path: f.e. home -> /home)
        self.home = Home()
        self.config = Config()
        self.log = Log()
        self.system = System()
        self.mobile = Mobile()

    @cherrypy.expose
    def index(self):
        redirect("/home")

    # Do not add self as first parameter or the method will not longer work
    def error_page_401(status, message, traceback, version):
        return "Error %s - Well, I'm very sorry but you don't have access to this resource!" % status

    # Do not add self as first parameter or the method will not longer work
    def error_page_404(status, message, traceback, version):
        return "Error %s - Well, I'm very sorry but this page could not be found!" % status

    # Do not add self as first parameter or the method will not longer work
    def error_page_500(status, message, traceback, version):
        return "Error %s - Please refresh! If this error doesn't go away (after a few minutes), seek help!" % status

    _cp_config = {'error_page.401': error_page_401,
                  'error_page.404': error_page_404,
                  'error_page.500': error_page_500}
