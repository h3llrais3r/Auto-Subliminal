# coding=utf-8

import logging
import sqlite3

import autosubliminal
from autosubliminal.core.movie import MovieDetails, MovieSettings
from autosubliminal.core.subtitle import Subtitle
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


def _subtitle_factory(cursor, row):
    subtitle = Subtitle()
    for idx, col in enumerate(cursor.description):
        subtitle.set_attr(col[0], row[idx])
    return subtitle


class MovieDetailsDb(object):
    def __init__(self):
        self._query_get_all = 'SELECT * FROM movie_details'
        self._query_get = 'SELECT * FROM movie_details WHERE imdb_id=?'
        self._query_set = 'INSERT INTO movie_details VALUES (?,?,?,?,?,?,?)'
        self._query_update = 'UPDATE movie_details SET title=?, year=?, path=?, overview=?, poster=?, ' \
                             'missing_languages=? WHERE imdb_id=?'
        self._query_flush = 'DELETE FROM movie_details'

    def get_all_movies(self, subtitles=False):
        """Get all movies.

        :param subtitles: indication if subtitles must be fetched or not
        :type subtitles: bool
        :return: the list of movies
        :rtype: list[MovieDetails]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _movie_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_all)
        movies = cursor.fetchall()
        if subtitles:
            subtitles_db = MovieSubtitlesDb(connection)
            for movie in movies:
                movie.subtitles = subtitles_db.get_movie_subtitles(movie.imdb_id)
        connection.close()

        return movies

    def get_movie(self, imdb_id, subtitles=False):
        """Get a movie by its imdb id.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :param subtitles: indication if subtitles must be fetched or not
        :type subtitles: bool
        :return: the movie or None if not found
        :rtype: MovieDetails | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _movie_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [imdb_id])
        movie = cursor.fetchone()
        if subtitles:
            movie.subtitles = MovieSubtitlesDb(connection).get_movie_subtitles(movie.imdb_id)
        connection.close()

        return movie

    def set_movie(self, movie, subtitles=False):
        """Set a movie.

        :param movie: the movie
        :type movie: MovieDetails
        :param subtitles: indication if subtitles must be set or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [
            movie.imdb_id,
            movie.title,
            movie.year,
            movie.path,
            movie.overview,
            movie.poster,
            to_text(movie.missing_languages),
        ])
        if subtitles:
            MovieSubtitlesDb(connection).set_movie_subtitles(movie.imdb_id, movie.subtitles)
        connection.commit()
        connection.close()

    def update_movie(self, movie, subtitles=False):
        """Update a movie.

        :param movie: the movie
        :type movie: MovieDetails
        :param subtitles: indication if subtitles must be updated or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_update, [
            movie.title,
            movie.year,
            movie.path,
            movie.overview,
            movie.poster,
            to_text(movie.missing_languages),
            movie.imdb_id
        ])
        if subtitles:
            subtitles_db = MovieSubtitlesDb(connection)
            subtitles_db.delete_movie_subtitles(movie.imdb_id)
            subtitles_db.set_movie_subtitles(movie.imdb_id, movie.subtitles)
        connection.commit()
        connection.close()

    def flush_movies(self, subtitles=False):
        """Flush all movies.

        :param subtitles: indication if subtitles must be flushed or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        if subtitles:
            MovieSubtitlesDb(connection).flush_movie_subtitles()
        connection.commit()
        connection.close()


class MovieSubtitlesDb(object):
    def __init__(self, connection=None):
        self.connection = connection

        self._query_get = 'SELECT * FROM movie_subtitles WHERE imdb_id=?'
        self._query_set = 'INSERT INTO movie_subtitles VALUES (?,?,?,?)'
        self._query_delete = 'DELETE FROM movie_subtitles WHERE imdb_id=?'
        self._query_flush = 'DELETE FROM movie_subtitles'

    def get_movie_subtitles(self, imdb_id):
        """Get the subtitles of a movie by its imdb id.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :return: the movie subtitles
        :rtype: list[Subtitle]
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _subtitle_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [imdb_id])
        subtitles = cursor.fetchall()
        if not self.connection:
            connection.close()

        return subtitles

    def set_movie_subtitles(self, imdb_id, movie_subtitles):
        """Set the subtitles of a movie.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :param movie_subtitles: the movie subtitles
        :type movie_subtitles: list[Subtitle]
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        for movie_subtitle in movie_subtitles:
            cursor.execute(self._query_set, [
                imdb_id,
                movie_subtitle.type,
                movie_subtitle.language,
                movie_subtitle.path
            ])
        if not self.connection:
            connection.commit()
            connection.close()

    def delete_movie_subtitles(self, imdb_id):
        """Delete the subtitles of a movie.

        :param imdb_id: the imdb id of the movie
        :type imdb_id: str
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [imdb_id])
        if not self.connection:
            connection.commit()
            connection.close()

    def flush_movie_subtitles(self):
        """Flush all movie subtitles."""
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        if not self.connection:
            connection.commit()
            connection.close()


class MovieSettingsDb(object):
    def __init__(self):
        self._query_get = 'SELECT * FROM movie_settings WHERE imdb_id=?'
        self._query_set = 'INSERT INTO movie_settings VALUES(?,?,?,?,?)'
        self._query_update = 'UPDATE movie_settings SET languages=?, refine=?, hearing_impaired=?, utf8_encoding=? ' \
                             'WHERE imdb_id=?'

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
            to_text(movie_settings.wanted_languages),
            movie_settings.refine,
            movie_settings.hearing_impaired,
            movie_settings.utf8_encoding
        ])
        connection.commit()

    def update_movie_settings(self, movie_settings):
        """Update movie settings.

        :param movie_settings: the movie settings
        :type movie_settings: MovieSettings
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_update, [
            to_text(movie_settings.wanted_languages),
            movie_settings.refine,
            movie_settings.hearing_impaired,
            movie_settings.utf8_encoding,
            movie_settings.imdb_id
        ])
        connection.commit()
