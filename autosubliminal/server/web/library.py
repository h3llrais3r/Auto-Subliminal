# coding=utf-8
from autosubliminal.server.web import redirect

import cherrypy

from autosubliminal.templates.page import PageTemplate


class Library(object):
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        # Redirect to overview by default
        return redirect('/library/shows')

    @cherrypy.expose(alias='overview')
    def overview(self):
        return PageTemplate('/library/library-overview.mako').render()

    @cherrypy.expose(alias='shows')
    def shows(self):
        return PageTemplate('/library/library-shows.mako').render()

    @cherrypy.expose(alias='movies')
    def movies(self):
        return PageTemplate('/library/library-movies.mako').render()
