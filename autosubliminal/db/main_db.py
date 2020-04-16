# coding=utf-8

import logging
import sqlite3

import autosubliminal
from autosubliminal.core.item import DownloadedItem, WantedItem
from autosubliminal.util.common import to_text

log = logging.getLogger(__name__)


def _item_factory(cursor, row, item_type):
    item = item_type()
    for idx, col in enumerate(cursor.description):
        item.set_attr(col[0], row[idx])
    return item


def _wanted_item_factory(cursor, row):
    return _item_factory(cursor, row, WantedItem)


def _downloaded_item_factory(cursor, row):
    return _item_factory(cursor, row, DownloadedItem)


class WantedItemsDb(object):
    """Wanted items db."""

    def __init__(self):
        self._query_get_all = 'SELECT * FROM wanted_items ORDER BY timestamp DESC'
        self._query_get = 'SELECT * FROM wanted_items WHERE videopath=?'
        self._query_get_ignore_case = 'SELECT * FROM wanted_items WHERE videopath=? COLLATE nocase'
        self._query_set = 'INSERT INTO wanted_items VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        self._query_update = 'UPDATE wanted_items SET videopath=?, timestamp=?, languages=?, type=?, title=?, ' \
                             'year=?, season=?, episode=?, quality=?, source=?, codec=?, releasegrp=?, tvdbid=?, ' \
                             'imdbid=? WHERE id=?'
        self._query_delete = 'DELETE FROM wanted_items WHERE videopath=?'
        self._query_delete_by_tvdb_id = 'DELETE FROM wanted_items WHERE tvdbid=?'
        self._query_delete_by_imdb_id = 'DELETE FROM wanted_items WHERE imdbid=?'
        self._query_flush = 'DELETE FROM wanted_items'

    def get_wanted_items(self):
        """Get all of wanted items.

        :return: list of wanted items
        :rtype: list[WantedItem]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _wanted_item_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_all)
        result_list = cursor.fetchall()
        connection.close()

        return result_list

    def get_wanted_item(self, video_path, ignore_case=False):
        """Get a wanted item by its video path.

        :param video_path: the video path
        :type video_path: str
        :return: the wanted item
        :rtype: WantedItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _wanted_item_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_ignore_case if ignore_case else self._query_get, [video_path])
        wanted_item = cursor.fetchone()
        connection.close()

        return wanted_item

    def set_wanted_item(self, wanted_item):
        """Set a wanted item.

        :param wanted_item: the wanted item
        :type wanted_item: WantedItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [
            wanted_item.videopath,
            wanted_item.timestamp,
            to_text(wanted_item.languages),  # Store languages as comma separated string
            wanted_item.type,
            wanted_item.title,
            wanted_item.year,
            wanted_item.season,
            to_text(wanted_item.episode),  # Can be a list for multi episode files
            wanted_item.quality,
            to_text(wanted_item.source),  # Can be a list for multi source files
            to_text(wanted_item.codec),  # Can be a list for multi codec files
            wanted_item.releasegrp,
            wanted_item.tvdbid,
            wanted_item.imdbid])
        connection.commit()
        connection.close()

    def delete_wanted_item(self, wanted_item):
        """Delete a wanted item.

        :param wanted_item: the wanted item
        :type wanted_item: WantedItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [wanted_item.videopath])
        connection.commit()
        connection.close()

    def delete_wanted_items_for_show(self, tvdb_id):
        """Delete all of wanted items related to a show.

        :param tvdb_id: the tvdb id of the show
        :type tvdb_id: int
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete_by_tvdb_id, [tvdb_id])
        connection.commit()
        connection.close()

    def delete_wanted_items_for_movie(self, imdb_id):
        """Delete all of wanted items related to a movie.

        :param imdb_id: the imdb id of the movie
        :type imdb_id: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete_by_imdb_id, [imdb_id])
        connection.commit()
        connection.close()

    def update_wanted_item(self, wanted_item):
        """Update a wanted item.

        :param wanted_item: the wanted item
        :type wanted_item: WantedItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_update, [
            wanted_item.videopath,
            wanted_item.timestamp,
            to_text(wanted_item.languages),  # Store languages as comma separated string
            wanted_item.type,
            wanted_item.title,
            wanted_item.year,
            wanted_item.season,
            to_text(wanted_item.episode),  # Can be a list for multi episode files
            wanted_item.quality,
            to_text(wanted_item.source),  # Can be a list for multi source files
            to_text(wanted_item.codec),  # Can be a list for multi codec files
            wanted_item.releasegrp,
            wanted_item.tvdbid,
            wanted_item.imdbid,
            wanted_item.id])
        connection.commit()
        connection.close()

    def flush_wanted_items(self):
        """Flush all wanted items."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()


class LastDownloadsDb(object):
    """Last downloads db."""

    def __init__(self):
        self._query_get = 'SELECT * FROM last_downloads ORDER BY timestamp DESC'
        self._query_set = 'INSERT INTO last_downloads VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        self._query_flush = 'DELETE FROM last_downloads'

    def get_last_downloads(self):
        """Get all last downloaded items.

        :return: list of downloaded items
        :rtype: list[DownloadedItem]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _downloaded_item_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get)
        result_list = cursor.fetchall()
        connection.close()

        # Return the max number of results or all (autosubliminal.MAXDBRESULTS = 0)
        if 0 < autosubliminal.MAXDBRESULTS < len(result_list):
            return result_list[0:autosubliminal.MAXDBRESULTS]
        else:
            return result_list

    def set_last_downloads(self, download_item):
        """Set a download item.

        :param download_item: the download item
        :type download_item: DownloadItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [
            download_item.type,
            download_item.title,
            download_item.year,
            download_item.season,
            to_text(download_item.episode),  # Can be a list for multi episode files
            download_item.quality,
            to_text(download_item.source),  # Can be a list for multi source files
            download_item.downlang,
            to_text(download_item.codec),  # Can be a list for multi codec files
            download_item.timestamp,
            download_item.releasegrp,
            download_item.subtitle,
            download_item.provider])
        connection.commit()
        connection.close()

    def flush_last_downloads(self):
        """Flush all downloaded items."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()
