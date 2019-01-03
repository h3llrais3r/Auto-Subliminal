# coding=utf-8

import logging
import os

import cherrypy

from autosubliminal.core.subtitle import EMBEDDED, HARDCODED
from autosubliminal.db import MovieDetailsDb, MovieSettingsDb
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import get_wanted_languages
from autosubliminal.util.filesystem import save_hardcoded_subtitle_languages

log = logging.getLogger(__name__)


@cherrypy.popargs('imdb_id')
class MoviesApi(RestResource):
    """
    Rest resource for handling the /movies path.
    """

    def __init__(self):
        super(MoviesApi, self).__init__()

        # Add all sub paths here: /api/movies/...
        self.overview = _OverviewApi()
        self.subtitles = _SubtitlesApi()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self, imdb_id=None):
        """Get the list of movies or the details of a single movie."""
        if imdb_id:
            db_movie = MovieDetailsDb().get_movie(imdb_id, subtitles=True)
            db_movie_settings = MovieSettingsDb().get_movie_settings(imdb_id)
            return self._to_movie_json(db_movie, db_movie_settings, details=True)
        else:
            movies = []
            movie_settings_db = MovieSettingsDb()
            db_movies = MovieDetailsDb().get_all_movies()
            for db_movie in db_movies:
                db_movie_settings = movie_settings_db.get_movie_settings(db_movie.imdb_id)
                movies.append(self._to_movie_json(db_movie, db_movie_settings))
            return movies

    def _to_movie_json(self, movie, movie_settings, details=False):
        movie_json = movie.to_json(details=details)

        wanted_languages = movie_settings.wanted_languages
        total_subtitles_wanted = len(wanted_languages)
        total_subtitles_missing = len(movie.missing_languages)
        total_subtitles_available = len(wanted_languages) - len(movie.missing_languages)
        movie_json['wanted_languages'] = wanted_languages
        movie_json['total_subtitles_wanted'] = total_subtitles_wanted
        movie_json['total_subtitles_missing'] = total_subtitles_missing
        movie_json['total_subtitles_available'] = total_subtitles_available
        movie_json['settings'] = movie_settings.to_json()

        if details:
            movie_json['files'] = self._get_movie_files(movie)

        return movie_json

    def _get_movie_files(self, movie):
        # Movie files are supposed to be stored in the same dir
        files = {}

        embedded_languages = []
        hardcoded_languages = []
        # Get subtitle files
        for subtitle in movie.subtitles:
            if subtitle.type == EMBEDDED:
                embedded_languages.append(subtitle.language)
            elif subtitle.type == HARDCODED:
                hardcoded_languages.append(subtitle.language)
            else:
                _, filename = os.path.split(subtitle.path)
                files.update({filename: {'filename': filename, 'type': 'subtitle', 'language': subtitle.language}})
        # Get video file
        _, movie_filename = os.path.split(movie.path)
        files.update({movie_filename: {'filename': movie_filename, 'type': 'video',
                                       'embedded_languages': embedded_languages,
                                       'hardcoded_languages': hardcoded_languages}})

        # Return sorted list
        return sorted([v for v in files.values()], key=lambda k: k['filename'])


class _OverviewApi(RestResource):
    def __init__(self):
        super(_OverviewApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        wanted_languages = get_wanted_languages()
        movies = MovieDetailsDb().get_all_movies()
        total_movies = len(movies)

        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        for movie in movies:
            total_subtitles_wanted += len(wanted_languages)
            total_subtitles_missing += len(movie.missing_languages)
            total_subtitles_available += len(wanted_languages) - len(movie.missing_languages)

        return {
            'total_movies': total_movies,
            'total_subtitles_wanted': total_subtitles_wanted,
            'total_subtitles_missing': total_subtitles_missing,
            'total_subtitles_available': total_subtitles_available
        }


class _SubtitlesApi(RestResource):
    """
    Rest resource for handling the /api/movies/subtitles path.
    """

    def __init__(self):
        super(_SubtitlesApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ()

        # Add all sub paths here: /api/movies/subtitles/...
        self.hardcoded = _HardcodedApi()


class _HardcodedApi(RestResource):
    """
    Rest resource for handling the /api/movies/subtitles/hardcoded path.
    """

    def __init__(self):
        super(_HardcodedApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('POST',)

    def post(self):
        """Save the list of hardcoded subtitles for a movie file."""
        saved = False
        input_json = cherrypy.request.json
        if 'file_location' in input_json and 'file_name' in input_json and 'languages' in input_json:
            file_location = input_json['file_location']
            file_name = input_json['file_name']
            languages = input_json['languages']
            save_hardcoded_subtitle_languages(file_location, file_name, languages)
            saved = True

        return saved
