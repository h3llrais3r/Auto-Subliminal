# coding=utf-8

import logging
import sqlite3

import autosubliminal
from autosubliminal.core.movie import MovieDetails, MovieSettings
from autosubliminal.util.common import to_text

log = logging.getLogger(__name__)


def _movie_details_factory(cursor, row):
    movie_details = MovieDetails()
    for idx, col in enumerate(cursor.description):
        movie_details.set_attr(col[0], row[idx])
    return movie_details


def _movie_settings_factory(cursor, row):
    movie_settings = MovieSettings()
    for idx, col in enumerate(cursor.description):
        movie_settings.set_attr(col[0], row[idx])
    return movie_settings


class MovieDetailsDb(object):
    def __init__(self):
        self._query_get_all = 'SELECT * FROM movie_details'
        self._query_get = 'SELECT * FROM movie_details WHERE imdb_id = ?'
        self._query_set = 'INSERT INTO movie_details VALUES (?,?,?,?,?,?,?,?)'
        self._query_update = 'UPDATE movie_details SET title=?, year=?, path=?, overview=?, poster=?, ' \
                             'available_languages=?, missing_languages=? WHERE imdb_id=?'
        self._query_flush = 'DELETE FROM movie_details'

    def get_all_movies(self):
        """Get all movies.

        :return: the list of movie details
        :rtype: list[MovieDetails]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _movie_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_all)
        movie_details = cursor.fetchall()
        connection.close()

        return movie_details

    def get_movie(self, imdb_id):
        """Get a movie by its imdb id.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :return: the movie details or None if not found
        :rtype: MovieDetails | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _movie_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [imdb_id])
        movie_details = cursor.fetchone()
        connection.close()

        return movie_details

    def set_movie(self, movie_details):
        """Set a movie.

        :param movie_details: the movie details
        :type movie_details: MovieDetails
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [
            movie_details.imdb_id,
            movie_details.title,
            movie_details.year,
            movie_details.path,
            movie_details.overview,
            movie_details.poster,
            to_text(movie_details.available_languages),
            to_text(movie_details.missing_languages),
        ])
        connection.commit()
        connection.close()

    def update_movie(self, movie_details):
        """Update a movie.

        :param movie_details: the movie details
        :type movie_details: MovieDetails
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_update, [
            movie_details.title,
            movie_details.year,
            movie_details.path,
            movie_details.overview,
            movie_details.poster,
            to_text(movie_details.available_languages),
            to_text(movie_details.missing_languages),
            movie_details.imdb_id
        ])
        connection.commit()
        connection.close()

    def flush_movies(self):
        """Flush all movies."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()


class MovieSettingsDb(object):
    def __init__(self):
        self._query_get = 'SELECT * FROM movie_settings WHERE imdb_id = ?'
        self._query_set = 'INSERT INTO movie_settings VALUES(?,?,?,?,?)'

    def get_movie_settings(self, imdb_id):
        """Get the movie settings by its imdb id.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :return: the movie settings or None if not found
        :rtype: MovieSettings | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _movie_settings_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [imdb_id])
        movie_settings = cursor.fetchone()
        connection.close()

        return movie_settings

    def set_movie_settings(self, movie_settings):
        """Set the movie settings.

        :param movie_settings: the movie settings
        :type movie_settings: MovieSettings
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [
            movie_settings.imdb_id,
            to_text(movie_settings.languages),
            movie_settings.refine,
            movie_settings.hearing_impaired,
            movie_settings.utf8_encoding
        ])
        connection.commit()
