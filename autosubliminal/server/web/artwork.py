# coding=utf-8

import cherrypy
from cherrypy._cperror import NotFound
from cherrypy.lib import static

from autosubliminal.core.cache import get_artwork_cache_path


class Artwork(object):
    def __init__(self):
        self.resolutions = ['fullsize', 'thumbnail']

    @cherrypy.expose(alias='tvdb')
    def tvdb(self, artwork_type, resolution, tvdb_id):
        return self._serve_artwork_image('tvdb', artwork_type, resolution, tvdb_id)

    @cherrypy.expose(alias='imdb')
    def imdb(self, artwork_type, resolution, imdb_id):
        return self._serve_artwork_image('imdb', artwork_type, resolution, imdb_id)

    def _serve_artwork_image(self, indexer_name, artwork_type, resolution, indexer_id):
        if resolution not in self.resolutions:
            raise NotFound()
        thumbnail = resolution == 'thumbnail'
        return static.serve_file(get_artwork_cache_path(indexer_name, indexer_id, artwork_type, thumbnail=thumbnail))
