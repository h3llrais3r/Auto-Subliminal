try:
    from Cheetah.Template import Template
except:
    print "ERROR!!! Cheetah is not installed yet. Download it from: http://pypi.python.org/pypi/Cheetah/2.4.4"

import json
import threading
import time
import cherrypy

import autosubliminal
from autosubliminal import config, utils, subchecker, notify
from autosubliminal.db import IdCache, LastDownloads


def redirect(abspath, *args, **kwargs):
    assert abspath[0] == '/'
    raise cherrypy.HTTPRedirect(autosubliminal.WEBROOT + abspath, *args, **kwargs)


# TODO: Create webdesign
class PageTemplate(Template):
    #Placeholder for future, this object can be used to add stuff to the template
    pass


class Config():
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        tmpl = PageTemplate(file="interface/templates/config.tmpl")
        return str(tmpl)

    @cherrypy.expose
    def info(self):
        tmpl = PageTemplate(file="interface/templates/information.tmpl")
        return str(tmpl)

    @cherrypy.expose(alias='skipShow')
    def skip_show(self, title, season=None):
        if not season:
            tmpl = PageTemplate(file="interface/templates/config-skipshow.tmpl")
            tmpl.title = title
            return str(tmpl)
        else:
            tmpl = PageTemplate(file="interface/templates/message.tmpl")
            if not title:
                raise cherrypy.HTTPError(400, "No show supplied")
            if title.upper() in autosubliminal.SKIPSHOWUPPER:
                for x in autosubliminal.SKIPSHOWUPPER[title.upper()]:
                    if x == season or x == '0':
                        tmpl.message = "Already skipped <br> <a href='" + autosubliminal.WEBROOT + "/home'>Return home</a>"
                        return str(tmpl)
                if season == '00':
                    season = season + ',' + ','.join(autosubliminal.SKIPSHOWUPPER[title.upper()])
                else:
                    season = str(int(season)) + ',' + ','.join(autosubliminal.SKIPSHOWUPPER[title.upper()])
            else:
                if not season == '00':
                    season = str(int(season))
            config.save_config('skipshow', title, season)
            config.apply_skipshow()

            tmpl.message = "Done<br> Remember, WantedQueue will be refreshed at the next run of scanDisk <br> <a href='" + autosubliminal.WEBROOT + "/home'>Return home</a>"
            return str(tmpl)

    @cherrypy.expose(alias='skipMovie')
    def skip_movie(self, title, year):
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        if not title:
            raise cherrypy.HTTPError(400, "No title supplied")
        movie = title
        if year:
            movie += " (" + year + ")"
        if movie.upper() in autosubliminal.SKIPMOVIEUPPER:
            tmpl.message = "Already skipped <br> <a href='" + autosubliminal.WEBROOT + "/home'>Return home</a>"
            return str(tmpl)
        else:
            config.save_config('skipmovie', movie, '0')
            config.apply_skipmovie()

        tmpl.message = "Done<br> Remember, WantedQueue will be refreshed at the next run of scanDisk <br> <a href='" + autosubliminal.WEBROOT + "/home'>Return home</a>"
        return str(tmpl)

    @cherrypy.expose(alias='saveConfig')
    def save_config(self, path, videopaths, defaultlanguage, defaultlanguagesuffix, additionallanguages, scandisk,
                    checksub, skiphiddendirs,
                    logfile, loglevel, lognum, logsize, loghttpaccess, logreversed, loglevelconsole,
                    webserverip, webserverport, webroot, username, password, launchbrowser,
                    includehearingimpaired, addic7edusername, addic7edpassword,
                    usernamemapping,
                    skipshow,
                    skipmovie,
                    notify,
                    notifymail, mailsrv, mailfromaddr, mailtoaddr, mailusername, mailpassword, mailsubject,
                    mailencryption, mailauth,
                    notifytwitter, twitterkey, twittersecret,
                    notifypushalot, pushalotapi,
                    notifynma, nmaapi,
                    notifygrowl, growlhost, growlport, growlpass,
                    notifyprowl, prowlapi, prowlpriority,
                    postprocess, postprocessutf8encoding, postprocesscmd,
                    mmsdefault=None, mmssource=None, mmsquality=None, mmscodec=None, mmsreleasegroup=None,
                    subliminalproviders=None):
        # Set general variables
        autosubliminal.PATH = path
        autosubliminal.VIDEOPATHS = videopaths.split('\r\n')
        autosubliminal.DEFAULTLANGUAGE = defaultlanguage
        autosubliminal.DEFAULTLANGUAGESUFFIX = defaultlanguagesuffix
        autosubliminal.ADDITIONALLANGUAGES = additionallanguages.split(',')
        autosubliminal.SCHEDULERSCANDISK = int(scandisk)
        autosubliminal.SCHEDULERCHECKSUB = int(checksub)
        autosubliminal.SKIPHIDDENDIRS = skiphiddendirs

        # Set match options and minmatchscore
        autosubliminal.MATCHSOURCE = False
        autosubliminal.MATCHQUALITY = False
        autosubliminal.MATCHCODEC = False
        autosubliminal.MATCHRELEASEGROUP = False
        autosubliminal.MINMATCHSCORE = 0
        # If not checked, the value will be default None, if checked, it will contain a value
        if mmsdefault:
            # mmsdefault is the minimal default score (which cannot be edited, so no flag is needed)
            autosubliminal.MINMATCHSCORE += autosubliminal.MINMATCHSCOREDEFAULT
        if mmssource:
            autosubliminal.MINMATCHSCORE += 3
            autosubliminal.MATCHSOURCE = True
        if mmsquality:
            autosubliminal.MINMATCHSCORE += 2
            autosubliminal.MATCHQUALITY = True
        if mmscodec:
            autosubliminal.MINMATCHSCORE += 2
            autosubliminal.MATCHCODEC = True
        if mmsreleasegroup:
            autosubliminal.MINMATCHSCORE += 6
            autosubliminal.MATCHRELEASEGROUP = True

        # Set logfile variables
        autosubliminal.LOGFILE = logfile
        autosubliminal.LOGLEVEL = int(loglevel)
        autosubliminal.LOGNUM = int(lognum)
        autosubliminal.LOGSIZE = int(logsize)
        autosubliminal.LOGHTTPACCESS = loghttpaccess
        autosubliminal.LOGREVERSED = logreversed
        autosubliminal.LOGLEVELCONSOLE = int(loglevelconsole)

        # Set webserver variables
        autosubliminal.WEBSERVERIP = webserverip
        autosubliminal.WEBSERVERPORT = int(webserverport)
        autosubliminal.WEBROOT = webroot
        autosubliminal.USERNAME = username
        autosubliminal.PASSWORD = password
        autosubliminal.LAUNCHBROWSER = launchbrowser

        # Set subliminal variables
        # Subliminal providers(convert list to comma separated string if multiple are selected)
        if subliminalproviders and not isinstance(subliminalproviders, basestring):
            autosubliminal.SUBLIMINALPROVIDERS = ','.join([str(provider) for provider in subliminalproviders])
        else:
            # Just one selected or None (in this case, None will be saved and no providers will be used)
            autosubliminal.SUBLIMINALPROVIDERS = subliminalproviders
        autosubliminal.INCLUDEHEARINGIMPAIRED = includehearingimpaired
        autosubliminal.ADDIC7EDUSERNAME = addic7edusername
        autosubliminal.ADDIC7EDPASSWORD = addic7edpassword

        # Set usernamemapping variables
        autosubliminal.USERNAMEMAPPING = config.string_to_dict(usernamemapping)

        # Set skipshow variables
        autosubliminal.SKIPSHOW = config.string_to_dict(skipshow)

        # Set skipmovie variables
        autosubliminal.SKIPMOVIE = config.string_to_dict(skipmovie)

        # Set notify variables
        autosubliminal.NOTIFY = notify
        autosubliminal.NOTIFYMAIL = notifymail
        autosubliminal.MAILSRV = mailsrv
        autosubliminal.MAILFROMADDR = mailfromaddr
        autosubliminal.MAILTOADDR = mailtoaddr
        autosubliminal.MAILUSERNAME = mailusername
        autosubliminal.MAILPASSWORD = mailpassword
        autosubliminal.MAILSUBJECT = mailsubject
        autosubliminal.MAILENCRYPTION = mailencryption
        autosubliminal.MAILAUTH = mailauth
        autosubliminal.NOTIFYTWITTER = notifytwitter
        autosubliminal.TWITTERKEY = twitterkey
        autosubliminal.TWITTERSECRET = twittersecret
        autosubliminal.NOTIFYPUSHALOT = notifypushalot
        autosubliminal.PUSHALOTAPI = pushalotapi
        autosubliminal.NOTIFYNMA = notifynma
        autosubliminal.NMAAPI = nmaapi
        autosubliminal.NOTIFYGROWL = notifygrowl
        autosubliminal.GROWLHOST = growlhost
        autosubliminal.GROWLPORT = growlport
        autosubliminal.GROWLPASS = growlpass
        autosubliminal.NOTIFYPROWL = notifyprowl
        autosubliminal.PROWLAPI = prowlapi
        autosubliminal.PROWLPRIORITY = int(prowlpriority)

        # Set postprocessing variables
        autosubliminal.POSTPROCESS = postprocess
        autosubliminal.POSTPROCESSUTF8ENCODING = postprocessutf8encoding
        autosubliminal.POSTPROCESSCMD = postprocesscmd

        # Now save to the configfile
        restart = config.write_config()

        # Check if restart is needed
        if restart:
            # Restart the runner in the background (do not import runner due to circular imports with webserver)
            threading.Thread(target=autosubliminal.runner.restart).start()
            tmpl = PageTemplate(file="interface/templates/autorestart.tmpl")

        else:
            # For some reason the needs to be read again, otherwise all pages get an error
            config.read_config()
            tmpl = PageTemplate(file="interface/templates/message.tmpl")
            tmpl.message = "Config saved.<br><a href='" + autosubliminal.WEBROOT + "'>Return</a>"

        return str(tmpl)

    @cherrypy.expose(alias='flushCache')
    def flush_cache(self):
        IdCache().flush_cache()
        message = 'Id Cache flushed'
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        tmpl.message = message
        return str(tmpl)

    @cherrypy.expose(alias='flushLastDownloads')
    def flush_last_downloads(self):
        LastDownloads().flush_last_downloads()
        message = 'Last downloaded subtitle database flushed'
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        tmpl.message = message
        return str(tmpl)

    @cherrypy.expose(alias='checkVersion')
    def check_version(self):
        checkversion = utils.check_version()

        if checkversion == 0:
            message = 'You are running the latest version!'
        elif checkversion == 1:
            message = 'A new version is available! Visit: <a href=https://github.com/h3llrais3r/Auto-Subliminal/releases>Github</a>'
        else:
            message = 'Something went wrong there, is github reachable? Or are you running a really old release?'
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        tmpl.message = message
        return str(tmpl)

    @cherrypy.expose(alias='testNotify')
    def test_notify(self, notifylib):
        if notify.notify_test(notifylib):
            message = 'Sent a test message!'
        else:
            message = 'Failed to send a test message'
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        tmpl.message = message
        return str(tmpl)

    @cherrypy.expose(alias='regTwitter')
    def reg_twitter(self, token_key=None, token_secret=None, token_pin=None):
        import oauth2
        import autosubliminal.notify.twitter as notifytwitter

        try:
            from urlparse import parse_qsl
        except:
            from cgi import parse_qsl

        if not token_key and not token_secret:
            consumer = oauth2.Consumer(key=notifytwitter.CONSUMER_KEY, secret=notifytwitter.CONSUMER_SECRET)
            oauth_client = oauth2.Client(consumer)
            response, content = oauth_client.request(notifytwitter.REQUEST_TOKEN_URL, 'GET')
            if response['status'] != '200':
                message = "Something went wrong..."
                tmpl = PageTemplate(file="interface/templates/message.tmpl")
                tmpl.message = message
                return str(tmpl)
            else:
                request_token = dict(parse_qsl(content))
                tmpl = PageTemplate(file="interface/templates/config-twitter.tmpl")
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
                message = "Something went wrong..."
                tmpl = PageTemplate(file="interface/templates/message.tmpl")
                tmpl.message = message
                return str(tmpl)
            else:
                autosubliminal.TWITTERKEY = access_token['oauth_token']
                autosubliminal.TWITTERSECRET = access_token['oauth_token_secret']

                message = "Twitter is now set up, remember to save your config and remember to test twitter! <br> <a href='" + autosubliminal.WEBROOT + "/config'>Return</a>"
                tmpl = PageTemplate(file="interface/templates/message.tmpl")
                tmpl.message = message
                return str(tmpl)


class Home():
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        useragent = cherrypy.request.headers.get("User-Agent", '')
        tmpl = PageTemplate(file="interface/templates/home.tmpl")
        if autosubliminal.MOBILE and utils.check_mobile_device(useragent):
            tmpl = PageTemplate(file="interface/templates/mobile/home.tmpl")
        return str(tmpl)

    @cherrypy.expose
    def restart(self):
        tmpl = PageTemplate(file="interface/templates/restart.tmpl")
        threading.Thread(target=autosubliminal.runner.restart).start()
        return str(tmpl)

    @cherrypy.expose
    def shutdown(self):
        tmpl = PageTemplate(file="interface/templates/stopped.tmpl")
        threading.Timer(2, autosubliminal.runner.stop).start()
        return str(tmpl)

    @cherrypy.expose(alias='isAlive')
    def is_alive(self, *args, **kwargs):
        if 'callback' in kwargs and '_' in kwargs:
            callback, _ = kwargs['callback'], kwargs['_']
        else:
            return "Error: Unsupported Request. Send jsonp request with 'callback' variable in the query string."
        cherrypy.response.headers['Cache-Control'] = "max-age=0,no-cache,no-store"
        cherrypy.response.headers['Content-Type'] = 'text/javascript'
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
        cherrypy.response.headers['Access-Control-Allow-Headers'] = 'x-requested-with'

        if autosubliminal.STARTED:
            return callback + '(' + json.dumps({"msg": "True"}) + ');'
        else:
            return callback + '(' + json.dumps({"msg": "False"}) + ');'

    @cherrypy.expose(alias='exitMini')
    def exit_mini(self):
        if autosubliminal.MOBILE:
            autosubliminal.MOBILE = False
            redirect("/home")
        else:
            autosubliminal.MOBILE = True
            redirect("/home")

    @cherrypy.expose(alias='runNow')
    def run_now(self):
        #time.sleep is here to prevent a timing issue, where checksub is runned before scandisk
        autosubliminal.SCANDISK.runnow = True
        time.sleep(5)
        autosubliminal.CHECKSUB.runnow = True
        useragent = cherrypy.request.headers.get("User-Agent", '')
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        if autosubliminal.MOBILE and utils.check_mobile_device(useragent):
            tmpl = PageTemplate(file="interface/templates/mobile/message.tmpl")
        tmpl.message = "Running everything! <br> <a href='" + autosubliminal.WEBROOT + "/home'>Return</a>"
        return str(tmpl)

    @cherrypy.expose(alias='searchSubtitle')
    def search_subtitle(self, wanted_item_index, lang):
        # Search subtitle
        subs, errormessage = subchecker.search_subtitle(wanted_item_index, lang)
        # Send response in html (store subs under subs key)
        tmpl = PageTemplate(file="interface/templates/home-manualsearch.tmpl",
                            searchList=[{'subs': subs, 'infomessage': '', 'errormessage': errormessage}])
        return str(tmpl)

    @cherrypy.expose(alias='saveSubtitle')
    def save_subtitle(self, wanted_item_index, subtitle_index):
        # Set json response type
        cherrypy.response.headers['Content-Type'] = 'application/json'
        # Save subtitle
        saved = subchecker.save_subtitle(wanted_item_index, subtitle_index)
        if saved:
            return json.dumps({'result': saved, 'infomessage': 'Subtitle saved.', 'errormessage': ''})
        else:
            return json.dumps(
                {'result': saved, 'infomessage': '',
                 'errormessage': 'Unable to save the subtitle! Please check the log file!'})

    @cherrypy.expose(alias='deleteSubtitle')
    def delete_subtitle(self, wanted_item_index):
        # Set json response type
        cherrypy.response.headers['Content-Type'] = 'application/json'
        # Delete subtitle
        removed = subchecker.delete_subtitle(wanted_item_index)
        if removed:
            return json.dumps({'result': removed, 'infomessage': 'Subtitle deleted.', 'errormessage': ''})
        else:
            return json.dumps(
                {'result': removed, 'infomessage': '',
                 'errormessage': 'Unable to delete the subtitle! Please check the log file!'})

    @cherrypy.expose(alias='playVideo')
    def play_video(self, wanted_item_index):
        # Set json response type
        cherrypy.response.headers['Content-Type'] = 'application/json'
        # Get wanted item
        wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
        # Play video with default player
        video = wanted_item['originalFileLocationOnDisk']
        try:
            utils.run_cmd(video, False)
            return json.dumps({'result': True, 'infomessage': 'Playing video.', 'errormessage': ''})
        except Exception, e:
            return json.dumps(
                {'result': False, 'infomessage': '',
                 'errormessage': 'Cannot play the video! Please check the log file!'})

    @cherrypy.expose(alias='postProcess')
    def post_process(self, wanted_item_index, subtitle_index):
        # Set json response type
        cherrypy.response.headers['Content-Type'] = 'application/json'
        # Post process
        processed = subchecker.post_process(wanted_item_index, subtitle_index)
        if processed:
            return json.dumps({'result': processed, 'infomessage:': '', 'errormessage': '', 'redirect': '/home'})
        else:
            return json.dumps(
                {'result': processed, 'infomessage': '',
                 'errormessage': 'Unable to handle post processing! Please check the log file!'})


class Log():
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self, loglevel=''):
        redirect("/log/viewLog")

    @cherrypy.expose(alias='viewLog')
    def view_log(self, loglevel=''):
        tmpl = PageTemplate(file="interface/templates/viewlog.tmpl")
        if loglevel == '':
            tmpl.loglevel = 'All'
        else:
            tmpl.loglevel = loglevel
        result = utils.display_logfile(loglevel)
        tmpl.message = result

        return str(tmpl)

    @cherrypy.expose(alias='clearLog')
    def clear_log(self, loglevel=''):
        # Clear log file (open it in write mode and pass)
        with open(autosubliminal.LOGFILE, 'w'):
            pass
            # Return to default log view
        tmpl = PageTemplate(file="interface/templates/viewlog.tmpl")
        if loglevel == '':
            tmpl.loglevel = 'All'
        else:
            tmpl.loglevel = loglevel
        result = utils.display_logfile(loglevel)
        tmpl.message = result

        return str(tmpl)


class Mobile():
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        tmpl = PageTemplate(file="interface/templates/mobile/home.tmpl")
        return str(tmpl)


class WebServerInit():
    def __init__(self):
        pass

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

    home = Home()
    config = Config()
    log = Log()
    mobile = Mobile()
