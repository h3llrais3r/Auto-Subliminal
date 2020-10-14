# coding=utf-8

import os
import re

import cherrypy

import autosubliminal
from autosubliminal.core.logger import display_logfile
from autosubliminal.server.web import redirect
from autosubliminal.templates.page import PageTemplate


class Log(object):
    def __init__(self):
        self.template_file = '/log/log.mako'
        pass

    @cherrypy.expose
    def index(self):
        redirect('/log/viewLog')

    @cherrypy.expose(alias='viewLog')
    def view_log(self, loglevel='all', lognum=None):
        content = display_logfile(loglevel, lognum)
        return PageTemplate(self.template_file).render(loglevel=loglevel, lognum=lognum, content=content)

    @cherrypy.expose(alias='clearLog')
    def clear_log(self):
        # Clear log file (open it in write mode and pass)
        with open(autosubliminal.LOGFILE, mode='w'):
            pass
        # Remove possible backup log files
        for f in [f for f in os.listdir('.') if os.path.isfile(f) and re.match(autosubliminal.LOGFILE + '.', f)]:
            os.remove(f)
        # Return to default log view
        content = display_logfile()
        return PageTemplate(self.template_file).render(loglevel='all', lognum=None, content=content)

    @cherrypy.expose(alias='tailLog')
    def tail_log(self):
        # Display all current logs
        content = display_logfile()
        return PageTemplate('/log/log-tail.mako').render(content=content)

    @cherrypy.expose
    def websocket(self):
        # Websocket path (no logic needed for now)
        # You can access the websocket handler class instance through:
        # handler = cherrypy.request.ws_handler
        pass
