# coding=utf-8

import os
import re

import cherrypy

import autosubliminal
from autosubliminal.server.web import redirect
from autosubliminal.templates.page import PageTemplate
from autosubliminal.util.utils import display_logfile


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
        return PageTemplate(filename=self.template_file).render(loglevel=loglevel, lognum=lognum, content=content)

    @cherrypy.expose(alias='clearLog')
    def clear_log(self):
        # Clear log file (open it in write mode and pass)
        with open(autosubliminal.LOGFILE, 'w'):
            pass
        # Remove possible backup log files
        for f in [f for f in os.listdir('.') if os.path.isfile(f) and re.match(autosubliminal.LOGFILE + '.', f)]:
            os.remove(f)
        # Return to default log view
        content = display_logfile()
        return PageTemplate(filename=self.template_file).render(loglevel='all', lognum=None, content=content)
