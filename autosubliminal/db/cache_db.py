# coding=utf-8

import sqlite3
from typing import Optional, Union

import autosubliminal


class TvdbIdCacheDb(object):
    """Tvdb id cache db."""

    def __init__(self) -> None:
        self._query_get = 'SELECT tvdb_id FROM tvdb_id_cache WHERE show_name=?'
        self._query_set = 'INSERT INTO tvdb_id_cache VALUES (?,?)'
        self._query_delete = 'DELETE FROM tvdb_id_cache WHERE show_name=?'
        self._query_flush = 'DELETE FROM tvdb_id_cache'

    def get_tvdb_id(self, show_name) -> Optional[int]:
        """Get the tvdb id for a show.

        :param show_name: the show name
        :type show_name: str
        :return: the tvdb id or None if not found
        :rtype: int | None
        """
        tvdb_id = None
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_get, [show_name.upper()])
        for row in cursor:
            tvdb_id = row[0]
        connection.close()

        return int(tvdb_id) if tvdb_id else None

    def set_tvdb_id(self, tvdb_id: int, show_name: str) -> None:
        """Set the tvdb id for a show.

        :param tvdb_id: the tvdb id
        :type tvdb_id: int
        :param show_name: the show name
        :type show_name: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [tvdb_id, show_name.upper()])
        connection.commit()
        connection.close()

    def delete_tvdb_id(self, show_name: str) -> None:
        """Delete the tvdb id for a show.

        :param show_name: the show name
        :type show_name: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [show_name.upper()])
        connection.commit()
        connection.close()

    def flush_tvdb_ids(self) -> None:
        """Flush all tvdb id's."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()


class ImdbIdCacheDb(object):
    """Imdb id cache db."""

    def __init__(self) -> None:
        self._query_get = 'SELECT imdb_id FROM imdb_id_cache WHERE title=? AND year=?'
        self._query_set = 'INSERT INTO imdb_id_cache VALUES (?,?,?)'
        self._query_delete = 'DELETE FROM imdb_id_cache WHERE title=? AND year=?'
        self._query_flush = 'DELETE FROM imdb_id_cache'

    def get_imdb_id(self, title: str, year: Union[str, int]) -> Optional[str]:
        """Get the imdb id for a movie title and year.

        :param title: the movie title
        :type title: str
        :param year: the movie year
        :type year: str | int
        :return: the imdb id or None
        :rtype: str | None
        """
        imdb_id = None
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_get, [title.upper(), year])
        for row in cursor:
            imdb_id = row[0]
        connection.close()

        return str(imdb_id) if imdb_id else None

    def set_imdb_id(self, imdb_id: str, title: str, year: Union[str, int]) -> None:
        """Set the imdb id for a movie title and year.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :param title: the movie title
        :type title: str
        :param year: the movie year
        :type year: str | int
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [imdb_id, title.upper(), year])
        connection.commit()
        connection.close()

    def delete_imdb_id(self, title: str, year: Union[str, int]) -> None:
        """Delete the imdb id for a movie title and year.

        :param title: the movie title
        :type title: str
        :param year: the movie year
        :type year: str | int
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [title.upper(), year])
        connection.commit()
        connection.close()

    def flush_imdb_ids(self) -> None:
        """Flush all imdb id's."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()
