# coding=utf-8

import sqlite3

import autosubliminal


class TvdbIdCacheDb(object):
    """Tvdb id cache db."""

    def __init__(self):
        self._query_get = 'select tvdb_id from tvdb_id_cache where show_name = ?'
        self._query_set = 'insert into tvdb_id_cache values (?,?)'
        self._query_flush = 'delete from tvdb_id_cache'

    def get_tvdb_id(self, show_name):
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

        if tvdb_id:
            return int(tvdb_id)

    def set_tvdb_id(self, tvdb_id, show_name):
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

    def flush_tvdb_ids(self):
        """Flush all tvdb id's."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()


class ImdbIdCacheDb(object):
    """Imdb id cache db."""

    def __init__(self):
        self._query_get = 'select imdb_id from imdb_id_cache where title = ? and year = ?'
        self._query_set = 'insert into imdb_id_cache values (?,?,?)'
        self._query_flush = 'delete from imdb_id_cache'

    def get_imdb_id(self, title, year):
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
        return imdb_id

    def set_imdb_id(self, imdb_id, title, year):
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

    def flush_imdb_ids(self):
        """Flush all imdb id's."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()
