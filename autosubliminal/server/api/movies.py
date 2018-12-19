# coding=utf-8

import logging

import autosubliminal
from autosubliminal.db.movie_db import MovieDetailsDb
from autosubliminal.server.rest import RestResource

log = logging.getLogger(__name__)


class MoviesApi(RestResource):
    """
    Rest resource for handling the /movies path.
    """

    def __init__(self):
        super(MoviesApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Get the list of movies."""
        result = []

        subtitles_wanted = []
        if autosubliminal.DEFAULTLANGUAGE:
            subtitles_wanted.append(autosubliminal.DEFAULTLANGUAGE)
        if autosubliminal.ADDITIONALLANGUAGES:
            subtitles_wanted.extend(autosubliminal.ADDITIONALLANGUAGES)

        movies = MovieDetailsDb().get_all_movies()
        for movie in movies:
            total_subtitles_needed = len(subtitles_wanted)
            total_subtitles_available = len(movie.available_languages)
            total_subtitles_missing = len(movie.missing_languages)

            movie_json = movie.to_json()
            movie_json['subtitles_wanted'] = subtitles_wanted
            movie_json['total_subtitles_needed'] = total_subtitles_needed
            movie_json['total_subtitles_available'] = total_subtitles_available
            movie_json['total_subtitles_missing'] = total_subtitles_missing

            result.append(movie_json)

        return result
