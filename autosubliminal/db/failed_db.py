# coding=utf-8

import sqlite3

import autosubliminal


class FailedShowsDb(object):
    """Failed shows db."""

    def __init__(self):
        self._query_get_all = 'SELECT path FROM failed_shows'
        self._query_get = 'SELECT path FROM failed_shows WHERE path=?'
        self._query_set = 'INSERT INTO failed_shows VALUES (?)'
        self._query_delete = 'DELETE FROM failed_shows WHERE path=?'
        self._query_flush = 'DELETE FROM failed_shows'

    def get_failed_shows(self):
        """Get the list of failed shows (=shows for which no tvdb id could be determined).

        :return: the list of failed show paths
        :rtype: list[str]
        """
        shows = []
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_get_all)

        for row in cursor:
            shows.append(row[0])
        connection.close()

        return shows

    def get_failed_show(self, show_path):
        """Get a failed show by its path.

        :param show_path: the show path
        :type show_path: str
        :return: the failed show path or None
        :rtype: str | None
        """
        show = None
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_get, [show_path])
        for row in cursor:
            show = row[0]
        connection.close()

        return show

    def set_failed_show(self, show_path):
        """Set a failed show.

        :param show_path: the show path
        :type show_path: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [show_path])
        connection.commit()
        connection.close()

    def delete_failed_show(self, show_path):
        """Delete a failed show.

        :param show_path: the show path
        :type show_path: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [show_path])
        connection.commit()
        connection.close()

    def flush_failed_shows(self):
        """Flush all failed shows."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()


class FailedMoviesDb(object):
    """Failed movies db."""

    def __init__(self):
        self._query_get_all = 'SELECT path FROM failed_movies'
        self._query_get = 'SELECT path FROM failed_movies WHERE path=?'
        self._query_set = 'INSERT INTO failed_movies VALUES (?)'
        self._query_delete = 'DELETE FROM failed_movies WHERE path=?'
        self._query_flush = 'DELETE FROM failed_movies'

    def get_failed_movies(self):
        """Get the list of failed movies (=movies for which no imdb id could be determined).

        :return: the list of failed movie paths
        :rtype: list[str]
        """
        movies = []
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_get_all)

        for row in cursor:
            movies.append(row[0])
        connection.close()

        return movies

    def get_failed_movie(self, movie_path):
        """Get a failed movie by its path.

        :param movie_path: the movie path
        :type movie_path: str
        :return: the failed movie path or None
        :rtype: str | None
        """
        movie = None
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_get, [movie_path])
        for row in cursor:
            movie = row[0]
        connection.close()

        return movie

    def set_failed_movie(self, movie_path):
        """Set a failed movie.

        :param movie_path: the movie path
        :type movie_path: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [movie_path])
        connection.commit()
        connection.close()

    def delete_failed_movie(self, movie_path):
        """Delete a failed movie.

        :param movie_path: the movie path
        :type movie_path: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [movie_path])
        connection.commit()
        connection.close()

    def flush_failed_movies(self):
        """Flush all failed movies."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()
