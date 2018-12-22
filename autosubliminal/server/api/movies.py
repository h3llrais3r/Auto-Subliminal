# coding=utf-8

import logging

import cherrypy

import autosubliminal
from autosubliminal.db import MovieDetailsDb
from autosubliminal.server.rest import RestResource
from autosubliminal.util.filesystem import get_movie_files

log = logging.getLogger(__name__)


@cherrypy.popargs('imdb_id')
class MoviesApi(RestResource):
    """
    Rest resource for handling the /movies path.
    """

    def __init__(self):
        super(MoviesApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self, imdb_id=None):
        """Get the list of movies or the details of a single movie."""
        # Get wanted subtitles
        wanted_languages = []
        if autosubliminal.DEFAULTLANGUAGE:
            wanted_languages.append(autosubliminal.DEFAULTLANGUAGE)
        if autosubliminal.ADDITIONALLANGUAGES:
            wanted_languages.extend(autosubliminal.ADDITIONALLANGUAGES)

        # Fetch movie(s)
        if imdb_id:
            db_movie = MovieDetailsDb().get_movie(imdb_id)
            return self._to_movie_json(db_movie, wanted_languages, details=True)
        else:
            movies = []
            db_movies = MovieDetailsDb().get_all_movies()
            for db_movie in db_movies:
                movies.append(self._to_movie_json(db_movie, wanted_languages))
            return movies

    def _to_movie_json(self, movie, wanted_languages, details=False):
        movie_json = movie.to_json()

        total_subtitles_wanted = len(wanted_languages)
        total_subtitles_available = len(movie.available_languages)
        total_subtitles_missing = len(movie.missing_languages)
        movie_json['wanted_languages'] = wanted_languages
        movie_json['total_subtitles_wanted'] = total_subtitles_wanted
        movie_json['total_subtitles_available'] = total_subtitles_available
        movie_json['total_subtitles_missing'] = total_subtitles_missing

        if details:
            movie_json['files'] = get_movie_files(movie.path)

        return movie_json
