import cherrypy

try:
    from Cheetah.Template import Template
except:
    print "ERROR!!! Cheetah is not installed yet. Download it from: http://pypi.python.org/pypi/Cheetah/2.4.4"

import threading
import time

import autosub
from autosub import config, utils, notify
from autosub.db import IdCache, LastDownloads


def redirect(abspath, *args, **kwargs):
    assert abspath[0] == '/'
    raise cherrypy.HTTPRedirect(autosub.WEBROOT + abspath, *args, **kwargs)

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
            if title.upper() in autosub.SKIPSHOWUPPER:
                for x in autosub.SKIPSHOWUPPER[title.upper()]:
                    if x == season or x == '0':
                        tmpl.message = "Already skipped <br> <a href='" + autosub.WEBROOT + "/home'>Return home</a>"
                        return str(tmpl)
                if season == '00':
                    season = season + ',' + ','.join(autosub.SKIPSHOWUPPER[title.upper()])
                else:
                    season = str(int(season)) + ',' + ','.join(autosub.SKIPSHOWUPPER[title.upper()])
            else:
                if not season == '00':
                    season = str(int(season))
            config.save_config('skipshow', title, season)
            config.apply_skipshow()

            tmpl.message = "Done<br> Remember, WantedQueue will be refresh at the next run of scanDisk <br> <a href='" + autosub.WEBROOT + "/home'>Return home</a>"
            return str(tmpl)

    @cherrypy.expose(alias='applyConfig')
    def apply_config(self):
        autosub.config.apply_allsettings()
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        tmpl.message = "Settings read & applied<br><a href='" + autosub.WEBROOT + "/config'>Return</a>"
        return str(tmpl)

    @cherrypy.expose(alias='saveConfig')
    def save_config(self, subeng, checksub, scandisk, skiphiddendirs, subnl, postprocesscmd, path, logfile, rootpath,
                    launchbrowser, fallbacktoeng, downloadeng, username, password, webroot, skipshow, lognum,
                    loglevelconsole, logsize, loglevel, webserverip, webserverport, usernamemapping, notifymail,
                    notifygrowl, notifynma, notifytwitter, mailsrv, mailfromaddr, mailtoaddr, mailusername,
                    mailpassword, mailsubject, mailencryption, mailauth, growlhost, growlport, growlpass, nmaapi,
                    twitterkey, twittersecret, notifyen, notifynl,
                    notifyprowl, prowlapi, prowlpriority, notifypushalot, pushalotapi,
                    mssdefault=None, mmsquality=None, mmscodec=None, mmsreleasegroup=None,
                    allproviders=True, addic7ed=True, opensubtitles=True, podnapisi=True, thesubdb=True, tvsubtitles=True):
        # Set all internal variables
        autosub.PATH = path
        autosub.ROOTPATH = rootpath
        autosub.LOGFILE = logfile
        autosub.FALLBACKTOENG = fallbacktoeng
        autosub.DOWNLOADENG = downloadeng
        autosub.SUBENG = subeng
        autosub.SUBNL = subnl
        autosub.NOTIFYEN = notifyen
        autosub.NOTIFYNL = notifynl
        autosub.POSTPROCESSCMD = postprocesscmd
        autosub.LAUNCHBROWSER = launchbrowser
        autosub.SKIPHIDDENDIRS = skiphiddendirs

        autosub.MINMATCHSCORE = 0
        autosub.MATCHQUALITY = False
        autosub.MATCHCODEC = False
        autosub.MATCHRELEASEGROUP = False
        # mssdefault is the minimal default score (which cannot be edited)
        # save match options to file to correctly show onscreen flags
        if mssdefault:
            autosub.MINMATCHSCORE += autosub.MINMATCHSCOREDEFAULT
        if mmsquality:
            autosub.MINMATCHSCORE += 2
            autosub.MATCHQUALITY = True
        if mmscodec:
            autosub.MINMATCHSCORE += 2
            autosub.MATCHCODEC = True
        if mmsreleasegroup:
            autosub.MINMATCHSCORE += 6
            autosub.MATCHRELEASEGROUP = True

        autosub.USEALLPROVIDERS = allproviders
        autosub.ADDIC7ED = addic7ed
        autosub.OPENSUBTITLES = opensubtitles
        autosub.PODNAPISI = podnapisi
        autosub.THESUBDB = thesubdb
        autosub.TVSUBTITLES = tvsubtitles

        autosub.SCHEDULERSCANDISK = int(scandisk)
        autosub.SCHEDULERCHECKSUB = int(checksub)
        autosub.LOGLEVEL = int(loglevel)
        autosub.LOGNUM = int(lognum)
        autosub.LOGSIZE = int(logsize)
        autosub.LOGLEVELCONSOLE = int(loglevelconsole)
        autosub.WEBSERVERIP = webserverip
        autosub.WEBSERVERPORT = int(webserverport)
        autosub.USERNAME = username
        autosub.PASSWORD = password
        autosub.WEBROOT = webroot
        autosub.SKIPSHOW = config.string_to_dict(skipshow)
        autosub.USERNAMEMAPPING = config.string_to_dict(usernamemapping)

        # Set all internal notify variables
        autosub.NOTIFYMAIL = notifymail
        autosub.MAILSRV = mailsrv
        autosub.MAILFROMADDR = mailfromaddr
        autosub.MAILTOADDR = mailtoaddr
        autosub.MAILUSERNAME = mailusername
        autosub.MAILPASSWORD = mailpassword
        autosub.MAILSUBJECT = mailsubject
        autosub.MAILENCRYPTION = mailencryption
        autosub.MAILAUTH = mailauth
        autosub.NOTIFYGROWL = notifygrowl
        autosub.GROWLHOST = growlhost
        autosub.GROWLPORT = growlport
        autosub.GROWLPASS = growlpass
        autosub.NOTIFYNMA = notifynma
        autosub.NMAAPI = nmaapi
        autosub.NOTIFYTWITTER = notifytwitter
        autosub.TWITTERKEY = twitterkey
        autosub.TWITTERSECRET = twittersecret
        autosub.NOTIFYPROWL = notifyprowl
        autosub.PROWLAPI = prowlapi
        autosub.PROWLPRIORITY = int(prowlpriority)
        autosub.NOTIFYPUSHALOT = notifypushalot
        autosub.PUSHALOTAPI = pushalotapi

        # Now save to the configfile
        message = config.write_config()

        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        tmpl.message = message
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
            message = 'Something went wrong there, is google-project reachable? Or are you running a really old release?'
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
        import autosub.notify.twitter as notifytwitter

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
                autosub.TWITTERKEY = access_token['oauth_token']
                autosub.TWITTERSECRET = access_token['oauth_token_secret']

                message = "Twitter is now set up, remember to save your config and remember to test twitter! <br> <a href='" + autosub.WEBROOT + "/config'>Return</a>"
                tmpl = PageTemplate(file="interface/templates/message.tmpl")
                tmpl.message = message
                return str(tmpl)


class Home:
    @cherrypy.expose
    def index(self):
        useragent = cherrypy.request.headers.get("User-Agent", '')
        tmpl = PageTemplate(file="interface/templates/home.tmpl")
        if utils.check_mobile_device(useragent) and autosub.MOBILEAUTOSUB:
            tmpl = PageTemplate(file="interface/templates/mobile/home.tmpl")
        return str(tmpl)

    @cherrypy.expose(alias='runNow')
    def run_now(self):
        #time.sleep is here to prevent a timing issue, where checksub is runned before scandisk
        autosub.SCANDISK.runnow = True
        time.sleep(5)
        autosub.CHECKSUB.runnow = True
        useragent = cherrypy.request.headers.get("User-Agent", '')
        tmpl = PageTemplate(file="interface/templates/message.tmpl")
        if utils.check_mobile_device(useragent) and autosub.MOBILEAUTOSUB:
            tmpl = PageTemplate(file="interface/templates/mobile/message.tmpl")
        tmpl.message = "Running everything! <br> <a href='" + autosub.WEBROOT + "/home'>Return</a>"
        return str(tmpl)

    @cherrypy.expose(alias='exitMini')
    def exit_mini(self):
        if autosub.MOBILEAUTOSUB:
            autosub.MOBILEAUTOSUB = False
            redirect("/home")
        else:
            autosub.MOBILEAUTOSUB = True
            redirect("/home")

    @cherrypy.expose
    def shutdown(self):
        tmpl = PageTemplate(file="interface/templates/stopped.tmpl")
        threading.Timer(2, autosub.autosubliminal.stop).start()
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
