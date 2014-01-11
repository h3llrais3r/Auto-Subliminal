try:
    from Cheetah.Template import Template
except:
    print "ERROR!!! Cheetah is not installed yet. Download it from: http://pypi.python.org/pypi/Cheetah/2.4.4"

import json
import threading
import time
import cherrypy

import autosubliminal
from autosubliminal import config, utils, notify
from autosubliminal.db import IdCache, LastDownloads


def redirect(abspath, *args, **kwargs):
    assert abspath[0] == '/'
    raise cherrypy.HTTPRedirect(autosubliminal.WEBROOT + abspath, *args, **kwargs)

# TODO: Create webdesign
class PageTemplate(Template):
    #Placeholder for future, this object can be used to add stuff to the template
    pass


class Config:
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

            tmpl.message = "Done<br> Remember, WantedQueue will be refresh at the next run of scanDisk <br> <a href='" + autosubliminal.WEBROOT + "/home'>Return home</a>"
            return str(tmpl)

    @cherrypy.expose(alias='applyConfig')
    def apply_config(self):
        autosubliminal.config.apply_allsettings()
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        tmpl.message = "Settings read & applied<br><a href='" + autosubliminal.WEBROOT + "/config'>Return</a>"
        return str(tmpl)

    @cherrypy.expose(alias='saveConfig')
    def save_config(self, subeng, checksub, scandisk, skiphiddendirs, subnl, postprocesscmd, path, logfile, rootpath,
                    launchbrowser, fallbacktoeng, downloadeng, username, password, webroot, skipshow, lognum,
                    loglevelconsole, logsize, loglevel, loghttpaccess, logreversed, webserverip, webserverport, usernamemapping,
                    notifymail, notifygrowl, notifynma, notifytwitter, mailsrv, mailfromaddr, mailtoaddr, mailusername,
                    mailpassword, mailsubject, mailencryption, mailauth, growlhost, growlport, growlpass, nmaapi,
                    twitterkey, twittersecret, notifyen, notifynl,
                    notifyprowl, prowlapi, prowlpriority, notifypushalot, pushalotapi,
                    mmsdefault=None, mmsquality=None, mmscodec=None, mmsreleasegroup=None,
                    subliminalproviders=None):
        # Set all internal variables
        autosubliminal.PATH = path
        autosubliminal.ROOTPATH = rootpath
        autosubliminal.LOGFILE = logfile
        autosubliminal.LOGHTTPACCESS = loghttpaccess
        autosubliminal.LOGREVERSED = logreversed
        autosubliminal.FALLBACKTOENG = fallbacktoeng
        autosubliminal.DOWNLOADENG = downloadeng
        autosubliminal.SUBENG = subeng
        autosubliminal.SUBNL = subnl
        autosubliminal.NOTIFYEN = notifyen
        autosubliminal.NOTIFYNL = notifynl
        autosubliminal.POSTPROCESSCMD = postprocesscmd
        autosubliminal.LAUNCHBROWSER = launchbrowser
        autosubliminal.SKIPHIDDENDIRS = skiphiddendirs

        # Set match options and minmatchscore
        autosubliminal.MATCHQUALITY = False
        autosubliminal.MATCHCODEC = False
        autosubliminal.MATCHRELEASEGROUP = False
        autosubliminal.MINMATCHSCORE = 0
        # If not checked, the value will be default None, if checked, it will contain a value
        if mmsdefault:
            # mmsdefault is the minimal default score (which cannot be edited, so no flag is needed)
            autosubliminal.MINMATCHSCORE += autosubliminal.MINMATCHSCOREDEFAULT
        if mmsquality:
            autosubliminal.MINMATCHSCORE += 2
            autosubliminal.MATCHQUALITY = True
        if mmscodec:
            autosubliminal.MINMATCHSCORE += 2
            autosubliminal.MATCHCODEC = True
        if mmsreleasegroup:
            autosubliminal.MINMATCHSCORE += 6
            autosubliminal.MATCHRELEASEGROUP = True

        # Subliminal providers(convert list to comma separated string if multiple are selected)
        if subliminalproviders and not isinstance(subliminalproviders, basestring):
            autosubliminal.SUBLIMINALPROVIDERS = ','.join([str(provider) for provider in subliminalproviders])
        else:
            # Just one selected or None (in this case, None will be saved and no providers will be used)
            autosubliminal.SUBLIMINALPROVIDERS = subliminalproviders

        autosubliminal.SCHEDULERSCANDISK = int(scandisk)
        autosubliminal.SCHEDULERCHECKSUB = int(checksub)
        autosubliminal.LOGLEVEL = int(loglevel)
        autosubliminal.LOGNUM = int(lognum)
        autosubliminal.LOGSIZE = int(logsize)
        autosubliminal.LOGLEVELCONSOLE = int(loglevelconsole)
        autosubliminal.WEBSERVERIP = webserverip
        autosubliminal.WEBSERVERPORT = int(webserverport)
        autosubliminal.USERNAME = username
        autosubliminal.PASSWORD = password
        autosubliminal.WEBROOT = webroot
        autosubliminal.SKIPSHOW = config.string_to_dict(skipshow)
        autosubliminal.USERNAMEMAPPING = config.string_to_dict(usernamemapping)

        # Set all internal notify variables
        autosubliminal.NOTIFYMAIL = notifymail
        autosubliminal.MAILSRV = mailsrv
        autosubliminal.MAILFROMADDR = mailfromaddr
        autosubliminal.MAILTOADDR = mailtoaddr
        autosubliminal.MAILUSERNAME = mailusername
        autosubliminal.MAILPASSWORD = mailpassword
        autosubliminal.MAILSUBJECT = mailsubject
        autosubliminal.MAILENCRYPTION = mailencryption
        autosubliminal.MAILAUTH = mailauth
        autosubliminal.NOTIFYGROWL = notifygrowl
        autosubliminal.GROWLHOST = growlhost
        autosubliminal.GROWLPORT = growlport
        autosubliminal.GROWLPASS = growlpass
        autosubliminal.NOTIFYNMA = notifynma
        autosubliminal.NMAAPI = nmaapi
        autosubliminal.NOTIFYTWITTER = notifytwitter
        autosubliminal.TWITTERKEY = twitterkey
        autosubliminal.TWITTERSECRET = twittersecret
        autosubliminal.NOTIFYPROWL = notifyprowl
        autosubliminal.PROWLAPI = prowlapi
        autosubliminal.PROWLPRIORITY = int(prowlpriority)
        autosubliminal.NOTIFYPUSHALOT = notifypushalot
        autosubliminal.PUSHALOTAPI = pushalotapi

        # Now save to the configfile
        restart = config.write_config()

        # Check if restart is needed
        if restart:
            # Restart the runner in the background
            threading.Thread(target=autosubliminal.runner.restart).start()
            tmpl = PageTemplate(file="interface/templates/restart.tmpl")
        else:
            # For some reason the needs to be read again, otherwise all pages get an error
            config.read_config(autosubliminal.CONFIGFILE)
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

    @cherrypy.expose(alias='flushLastdown')
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
            message = 'There is a new version available! Visit: <a href=https://github.com/h3llrais3r/Auto-Subliminal/releases>Github</a>'
        elif checkversion == 2:
            message = 'There is a new major release available for your version. For example, you are running a alpha version and there is beta version available consider upgrading! Visit: <a href=https://github.com/h3llrais3r/Auto-Subliminal/releases>Github</a>'
        elif checkversion == 3:
            message = 'There is a newer testing version available. Only the risk-takers should upgrade! But keep an eye out on <a href=https://github.com/h3llrais3r/Auto-Subliminal/releases>Github</a>, because there is an upcoming new release!'
        elif checkversion == 4:
            message = 'What are you doing here??? It is time to upgrade! Visit: <a href=https://github.com/h3llrais3r/Auto-Subliminal/releases>Github</a>'
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
        import library.oauth2 as oauth
        import autosubliminal.notify.twitter as notifytwitter

        try:
            from urlparse import parse_qsl
        except:
            from cgi import parse_qsl

        if not token_key and not token_secret:
            consumer = oauth.Consumer(key=notifytwitter.CONSUMER_KEY, secret=notifytwitter.CONSUMER_SECRET)
            oauth_client = oauth.Client(consumer)
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

            token = oauth.Token(token_key, token_secret)
            token.set_verifier(token_pin)
            consumer = oauth.Consumer(key=notifytwitter.CONSUMER_KEY, secret=notifytwitter.CONSUMER_SECRET)
            oauth_client2 = oauth.Client(consumer, token)
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


class Home:
    @cherrypy.expose
    def index(self):
        useragent = cherrypy.request.headers.get("User-Agent", '')
        tmpl = PageTemplate(file="interface/templates/home.tmpl")
        if utils.check_mobile_device(useragent) and autosubliminal.MOBILEAUTOSUB:
            tmpl = PageTemplate(file="interface/templates/mobile/home.tmpl")
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
            return callback+'('+json.dumps({"msg": "True"})+');'
        else:
            return callback+'('+json.dumps({"msg": "False"})+');'

    @cherrypy.expose(alias='runNow')
    def run_now(self):
        #time.sleep is here to prevent a timing issue, where checksub is runned before scandisk
        autosubliminal.SCANDISK.runnow = True
        time.sleep(5)
        autosubliminal.CHECKSUB.runnow = True
        useragent = cherrypy.request.headers.get("User-Agent", '')
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        if utils.check_mobile_device(useragent) and autosubliminal.MOBILEAUTOSUB:
            tmpl = PageTemplate(file="interface/templates/mobile/message.tmpl")
        tmpl.message = "Running everything! <br> <a href='" + autosubliminal.WEBROOT + "/home'>Return</a>"
        return str(tmpl)

    @cherrypy.expose(alias='exitMini')
    def exit_mini(self):
        if autosubliminal.MOBILEAUTOSUB:
            autosubliminal.MOBILEAUTOSUB = False
            redirect("/home")
        else:
            autosubliminal.MOBILEAUTOSUB = True
            redirect("/home")

    @cherrypy.expose
    def shutdown(self):
        tmpl = PageTemplate(file="interface/templates/stopped.tmpl")
        threading.Timer(2, autosubliminal.runner.stop).start()
        return str(tmpl)


class Log:
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
    def clear_log(self,  loglevel=''):
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


class Mobile:
    @cherrypy.expose
    def index(self):
        tmpl = PageTemplate(file="interface/templates/mobile/home.tmpl")
        return str(tmpl)


class WebServerInit():
    @cherrypy.expose
    def index(self):
        redirect("/home")

    home = Home()
    config = Config()
    log = Log()
    mobile = Mobile()

    def error_page_401(self, status, message, traceback, version):
        return "Error %s - Well, I'm very sorry but you don't have access to this resource!" % status

    def error_page_404(self, status, message, traceback, version):
        return "Error %s - Well, I'm very sorry but this page could not be found!" % status

    def error_page_500(self, status, message, traceback, version):
        return "Error %s - Please refresh! If this error doesn't go away (after a few minutes), seek help!" % status

    _cp_config = {'error_page.401': error_page_401,
                  'error_page.404': error_page_404,
                  'error_page.500': error_page_500}
