# coding=utf-8

import logging

import cherrypy

import autosubliminal
from autosubliminal.db import MovieDetailsDb
from autosubliminal.server.rest import RestResource
from autosubliminal.util.filesystem import get_movie_files, save_hardcoded_subtitle_languages

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
        movie_json = movie.to_json(details=details)

        total_subtitles_wanted = len(wanted_languages)
        total_subtitles_available = len(
            _get_available_wanted_languages(wanted_languages, movie.available_languages))
        total_subtitles_missing = len(movie.missing_languages)
        movie_json['wanted_languages'] = wanted_languages
        movie_json['total_subtitles_wanted'] = total_subtitles_wanted
        movie_json['total_subtitles_available'] = total_subtitles_available
        movie_json['total_subtitles_missing'] = total_subtitles_missing

        if details:
            movie_json['files'] = get_movie_files(movie.path, movie.embedded_languages)

        return movie_json


class _OverviewApi(RestResource):
    def __init__(self):
        super(_OverviewApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        wanted_languages = _get_wanted_languages()
        movies = MovieDetailsDb().get_all_movies()
        total_movies = len(movies)

        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        for movie in movies:
            total_subtitles_wanted += len(wanted_languages)
            total_subtitles_available += len(
                _get_available_wanted_languages(wanted_languages, movie.available_languages))
            total_subtitles_missing += len(movie.missing_languages) if movie.missing_languages else 0

        return {
            'total_movies': total_movies,
            'total_subtitles_wanted': total_subtitles_wanted,
            'total_subtitles_available': total_subtitles_available,
            'total_subtitles_missing': total_subtitles_missing
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


def _get_wanted_languages():
    wanted_languages = []
    if autosubliminal.DEFAULTLANGUAGE:
        wanted_languages.append(autosubliminal.DEFAULTLANGUAGE)
    if autosubliminal.ADDITIONALLANGUAGES:
        wanted_languages.extend(autosubliminal.ADDITIONALLANGUAGES)

    return wanted_languages


def _get_available_wanted_languages(wanted_languages, available_languages):
    if available_languages:
        return [l for l in available_languages if l in wanted_languages]
    else:
        return []
