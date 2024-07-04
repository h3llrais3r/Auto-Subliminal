# coding=utf-8

import logging
import sqlite3
from sqlite3 import Connection, Cursor, Row
from typing import List, Optional

import autosubliminal
from autosubliminal.core.movie import MovieDetails, MovieSettings
from autosubliminal.core.subtitle import Subtitle, SubtitleType
from autosubliminal.util.db import to_text

log = logging.getLogger(__name__)


def _movie_details_factory(cursor: Cursor, row: Row) -> MovieDetails:
    movie_details = MovieDetails()
    for idx, col in enumerate(cursor.description):
        movie_details.set_attr(col[0], row[idx])
    return movie_details


def _movie_settings_factory(cursor: Cursor, row: Row) -> MovieSettings:
    movie_settings = MovieSettings()
    for idx, col in enumerate(cursor.description):
        movie_settings.set_attr(col[0], row[idx])
    return movie_settings


def _subtitle_factory(cursor: Cursor, row: Row) -> Subtitle:
    subtitle = Subtitle()
    for idx, col in enumerate(cursor.description):
        subtitle.set_attr(col[0], row[idx])
    return subtitle


class MovieDetailsDb(object):
    def __init__(self) -> None:
        self._query_get_all = 'SELECT * FROM movie_details'
        self._query_get = 'SELECT * FROM movie_details WHERE imdb_id=?'
        self._query_set = 'INSERT INTO movie_details VALUES (?,?,?,?,?,?,?)'
        self._query_update = (
            'UPDATE movie_details SET title=?, year=?, path=?, overview=?, poster=?, '
            'missing_languages=? WHERE imdb_id=?'
        )
        self._query_delete = 'DELETE FROM movie_details WHERE imdb_id=?'
        self._query_flush = 'DELETE FROM movie_details'

    def get_all_movies(self, subtitles: bool = False) -> List[MovieDetails]:
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
        all_movies: List[MovieDetails] = cursor.fetchall()
        if subtitles:
            subtitles_db = MovieSubtitlesDb(connection)
            for movie in all_movies:
                movie.subtitles = subtitles_db.get_movie_subtitles(movie.imdb_id)
        connection.close()

        return all_movies

    def get_movie(self, imdb_id: str, subtitles: bool = False) -> Optional[MovieDetails]:
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
        movie: Optional[MovieDetails] = cursor.fetchone()
        if movie and subtitles:
            movie.subtitles = MovieSubtitlesDb(connection).get_movie_subtitles(movie.imdb_id)
        connection.close()

        return movie

    def set_movie(self, movie: MovieDetails, subtitles: bool = False) -> None:
        """Set a movie.

        :param movie: the movie
        :type movie: MovieDetails
        :param subtitles: indication if subtitles must be set or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_set,
            [
                movie.imdb_id,
                movie.title,
                movie.year,
                movie.path,
                movie.overview,
                movie.poster,
                to_text(movie.missing_languages),
            ],
        )
        if subtitles:
            MovieSubtitlesDb(connection).set_movie_subtitles(movie.imdb_id, movie.subtitles)
        connection.commit()
        connection.close()

    def update_movie(self, movie: MovieDetails, subtitles: bool = False) -> None:
        """Update a movie.

        :param movie: the movie
        :type movie: MovieDetails
        :param subtitles: indication if subtitles must be updated or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_update,
            [
                movie.title,
                movie.year,
                movie.path,
                movie.overview,
                movie.poster,
                to_text(movie.missing_languages),
                movie.imdb_id,
            ],
        )
        if subtitles:
            subtitles_db = MovieSubtitlesDb(connection)
            subtitles_db.delete_movie_subtitles(movie.imdb_id)
            subtitles_db.set_movie_subtitles(movie.imdb_id, movie.subtitles)
        connection.commit()
        connection.close()

    def delete_movie(self, imdb_id: str, subtitles: bool = False) -> None:
        """Delete a movie by its imdb id.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :param subtitles: indication if subtitles must be deleted or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [imdb_id])
        if subtitles:
            MovieSubtitlesDb(connection).delete_movie_subtitles(imdb_id)
        connection.commit()
        connection.close()

    def flush_movies(self, subtitles: bool = False) -> None:
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
    def __init__(self, connection: Connection = None) -> None:
        self.connection = connection

        self._query_get = 'SELECT * FROM movie_subtitles WHERE imdb_id=?'
        self._query_set = 'INSERT INTO movie_subtitles VALUES (?,?,?,?)'
        self._query_delete = 'DELETE FROM movie_subtitles WHERE imdb_id=?'
        self._query_delete_by_type = 'DELETE FROM movie_subtitles WHERE imdb_id=? AND type=?'
        self._query_delete_by_path = 'DELETE FROM movie_subtitles WHERE imdb_id=? AND path=?'
        self._query_flush = 'DELETE FROM movie_subtitles'

    def get_movie_subtitles(self, imdb_id: str) -> List[Subtitle]:
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
        subtitles: List[Subtitle] = cursor.fetchall()
        if not self.connection:
            connection.close()

        return subtitles

    def set_movie_subtitles(self, imdb_id: str, movie_subtitles: List[Subtitle]) -> None:
        """Set the subtitles of a movie.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :param movie_subtitles: the movie subtitles
        :type movie_subtitles: list[Subtitle]
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        for movie_subtitle in movie_subtitles:
            cursor.execute(
                self._query_set, [imdb_id, movie_subtitle.type, movie_subtitle.language, movie_subtitle.path]
            )
        if not self.connection:
            connection.commit()
            connection.close()

    def delete_movie_subtitles(self, imdb_id: str, type: Optional[SubtitleType] = None) -> None:
        """Delete the subtitles of a movie.
        If a type is specified, only the specified type is deleted.

        :param imdb_id: the imdb id of the movie
        :type imdb_id: str
        :param type: the type of subtitle
        :type type: str
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        if type:
            cursor.execute(self._query_delete_by_type, [imdb_id, type])
        else:
            cursor.execute(self._query_delete, [imdb_id])
        if not self.connection:
            connection.commit()
            connection.close()

    def delete_movie_subtitle(self, imdb_id: str, path: str) -> None:
        """Delete the subtitle of a movie.

        :param imdb_id: the imdb id of the movie
        :type imdb_id: str
        :param path: the path of the subtitle
        :type imdb_id: str
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete_by_path, [imdb_id, path])
        if not self.connection:
            connection.commit()
            connection.close()

    def flush_movie_subtitles(self) -> None:
        """Flush all movie subtitles."""
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        if not self.connection:
            connection.commit()
            connection.close()


class MovieSettingsDb(object):
    def __init__(self) -> None:
        self._query_get = 'SELECT * FROM movie_settings WHERE imdb_id=?'
        self._query_set = 'INSERT INTO movie_settings VALUES(?,?,?,?,?)'
        self._query_update = (
            'UPDATE movie_settings SET wanted_languages=?, refine=?, hearing_impaired=?, '
            'utf8_encoding=? WHERE imdb_id=?'
        )
        self._query_delete = 'DELETE FROM movie_settings WHERE imdb_id=?'

    def get_movie_settings(self, imdb_id: str) -> Optional[MovieSettings]:
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
        movie_settings: Optional[MovieSettings] = cursor.fetchone()
        connection.close()

        return movie_settings

    def set_movie_settings(self, movie_settings: MovieSettings) -> None:
        """Set the movie settings.

        :param movie_settings: the movie settings
        :type movie_settings: MovieSettings
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_set,
            [
                movie_settings.imdb_id,
                to_text(movie_settings.wanted_languages),
                movie_settings.refine,
                movie_settings.hearing_impaired,
                movie_settings.utf8_encoding,
            ],
        )
        connection.commit()

    def update_movie_settings(self, movie_settings: MovieSettings) -> None:
        """Update movie settings.

        :param movie_settings: the movie settings
        :type movie_settings: MovieSettings
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_update,
            [
                to_text(movie_settings.wanted_languages),
                movie_settings.refine,
                movie_settings.hearing_impaired,
                movie_settings.utf8_encoding,
                movie_settings.imdb_id,
            ],
        )
        connection.commit()

    def delete_movie_settings(self, imdb_id: str) -> None:
        """Delete the movie settings by its imdb id.

        :param imdb_id: the imdb id
        :type imdb_id: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [imdb_id])
        connection.commit()
        connection.close()
