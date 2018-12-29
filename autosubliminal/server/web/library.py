# coding=utf-8

import cherrypy

from autosubliminal.server.web import redirect
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
    def shows(self, tvdb_id=None):
        if tvdb_id:
            return PageTemplate('/library/library-show-details.mako').render()
        else:
            return PageTemplate('/library/library-shows.mako').render()

    @cherrypy.expose(alias='movies')
    def movies(self, imdb_id=None):
        if imdb_id:
            return PageTemplate('/library/library-movie-details.mako').render()
        else:
            return PageTemplate('/library/library-movies.mako').render()
