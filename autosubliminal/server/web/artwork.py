# coding=utf-8

import cherrypy
from cherrypy._cperror import NotFound
from cherrypy.lib import static

from autosubliminal.core.cache import cache_artwork, get_artwork_cache_path, is_artwork_cached
from autosubliminal.core.indexer import MovieIndexer, ShowIndexer


class Artwork(object):
    def __init__(self):
        self.artwork_types = ['banner', 'poster']
        self.artwork_resolutions = ['fullsize', 'thumbnail']
        self.show_indexer = ShowIndexer()
        self.movie_indexer = MovieIndexer()

    @cherrypy.expose(alias='tvdb')
    def tvdb(self, artwork_type, artwork_resolution, tvdb_id):
        return self._serve_artwork_image('tvdb', artwork_type, artwork_resolution, tvdb_id)

    @cherrypy.expose(alias='imdb')
    def imdb(self, artwork_type, artwork_resolution, imdb_id):
        return self._serve_artwork_image('imdb', artwork_type, artwork_resolution, imdb_id)

    def _serve_artwork_image(self, indexer_name, artwork_type, artwork_resolution, indexer_id):
        # Return not found when invalid data is passed
        if artwork_type not in self.artwork_types or artwork_resolution not in self.artwork_resolutions:
            raise NotFound()

        thumbnail = artwork_resolution == 'thumbnail'

        # If it's not cached, we don't have the artwork yet, so let's fetch it and cache it
        if not is_artwork_cached(indexer_name, indexer_id, artwork_type, thumbnail=thumbnail):
            artwork_url = None
            if indexer_name == 'tvdb':
                show_details = self.show_indexer.get_show_details(indexer_id)
                artwork_url = show_details.get_artwork_url(artwork_type, thumbnail=thumbnail)
            elif indexer_name == 'imdb':
                movie_details = self.movie_indexer.get_movie_details(indexer_id)
                artwork_url = movie_details.get_artwork_url(artwork_type, thumbnail=thumbnail)
            if artwork_url:
                cache_artwork(indexer_name, indexer_id, artwork_type, artwork_url, thumbnail=thumbnail)

        # Serve cached file or raise not found
        if is_artwork_cached(indexer_name, indexer_id, artwork_type, thumbnail=thumbnail):
            cache_path = get_artwork_cache_path(indexer_name, indexer_id, artwork_type, thumbnail=thumbnail)
            return static.serve_file(cache_path)
        else:
            raise NotFound
