# coding=utf-8

import logging
import sqlite3
from sqlite3 import Cursor, Row
from typing import List, Optional, Type, TypeVar

import autosubliminal
from autosubliminal.core.item import DownloadedItem, DownloadItem, WantedItem
from autosubliminal.util.db import to_text

log = logging.getLogger(__name__)

T = TypeVar('T', WantedItem, DownloadedItem)


def _item_factory(cursor: Cursor, row: Row, item_type: Type[T]) -> T:
    item = item_type()
    for idx, col in enumerate(cursor.description):
        item.set_attr(col[0], row[idx])
    return item


def _wanted_item_factory(cursor: Cursor, row: Row) -> WantedItem:
    return _item_factory(cursor, row, WantedItem)


def _downloaded_item_factory(cursor: Cursor, row: Row) -> DownloadedItem:
    return _item_factory(cursor, row, DownloadedItem)


class WantedItemsDb(object):
    """Wanted items db."""

    def __init__(self) -> None:
        self._query_get_all = 'SELECT * FROM wanted_items ORDER BY timestamp DESC'
        self._query_get = 'SELECT * FROM wanted_items WHERE id=?'
        self._query_get_by_video_path = 'SELECT * FROM wanted_items WHERE video_path=?'
        self._query_get_by_video_path_ignore_case = 'SELECT * FROM wanted_items WHERE video_path=? COLLATE nocase'
        self._query_set = 'INSERT INTO wanted_items VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        self._query_update = (
            'UPDATE wanted_items SET video_path=?, video_size=?, languages=?, timestamp=?, type=?, '
            'title=?, year=?, season=?, episode=?, quality=?, source=?, codec=?, release_group=?, '
            'tvdb_id=?, imdb_id=? WHERE id=?'
        )
        self._query_delete = 'DELETE FROM wanted_items WHERE id=?'
        self._query_delete_by_tvdb_id = 'DELETE FROM wanted_items WHERE tvdb_id=?'
        self._query_delete_by_imdb_id = 'DELETE FROM wanted_items WHERE imdb_id=?'
        self._query_flush = 'DELETE FROM wanted_items'

    def get_wanted_items(self) -> List[WantedItem]:
        """Get all of wanted items.

        :return: list of wanted items
        :rtype: list[WantedItem]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _wanted_item_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_all)
        result_list: List[WantedItem] = cursor.fetchall()
        connection.close()

        return result_list

    def get_wanted_item(self, id: int) -> Optional[WantedItem]:
        """Get a wanted item by its video path.

        :param id: the id
        :type id: int
        :return: the wanted item
        :rtype: WantedItem | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _wanted_item_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [id])
        wanted_item: Optional[WantedItem] = cursor.fetchone()
        connection.close()

        return wanted_item

    def get_wanted_item_by_video_path(self, video_path: str, ignore_case: bool = False) -> Optional[WantedItem]:
        """Get a wanted item by its video path.

        :param video_path: the video path
        :type video_path: str
        :return: the wanted item
        :rtype: WantedItem | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _wanted_item_factory
        cursor = connection.cursor()
        cursor.execute(
            self._query_get_by_video_path_ignore_case if ignore_case else self._query_get_by_video_path, [video_path]
        )
        wanted_item: Optional[WantedItem] = cursor.fetchone()
        connection.close()

        return wanted_item

    def set_wanted_item(self, wanted_item: WantedItem) -> None:
        """Set a wanted item.

        :param wanted_item: the wanted item
        :type wanted_item: WantedItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_set,
            [
                wanted_item.video_path,
                wanted_item.video_size,
                to_text(wanted_item.languages),  # Store languages as comma separated string
                wanted_item.timestamp,
                wanted_item.type,
                wanted_item.title,
                wanted_item.year,
                wanted_item.season,
                to_text(wanted_item.episode),  # Can be a list for multi episode files
                wanted_item.quality,
                to_text(wanted_item.source),  # Can be a list for multi source files
                to_text(wanted_item.codec),  # Can be a list for multi codec files
                wanted_item.release_group,
                wanted_item.tvdb_id,
                wanted_item.imdb_id,
            ],
        )
        connection.commit()
        connection.close()

    def delete_wanted_item(self, wanted_item_id: int) -> None:
        """Delete a wanted item.

        :param wanted_item_id: the wanted item id
        :type wanted_item_id: int
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [wanted_item_id])
        connection.commit()
        connection.close()

    def delete_wanted_items_for_show(self, tvdb_id: int) -> None:
        """Delete all of wanted items related to a show.

        :param tvdb_id: the tvdb id of the show
        :type tvdb_id: int
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete_by_tvdb_id, [tvdb_id])
        connection.commit()
        connection.close()

    def delete_wanted_items_for_movie(self, imdb_id: str) -> None:
        """Delete all of wanted items related to a movie.

        :param imdb_id: the imdb id of the movie
        :type imdb_id: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete_by_imdb_id, [imdb_id])
        connection.commit()
        connection.close()

    def update_wanted_item(self, wanted_item: WantedItem) -> None:
        """Update a wanted item.

        :param wanted_item: the wanted item
        :type wanted_item: WantedItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_update,
            [
                wanted_item.video_path,
                wanted_item.video_size,
                to_text(wanted_item.languages),  # Store languages as comma separated string
                wanted_item.timestamp,
                wanted_item.type,
                wanted_item.title,
                wanted_item.year,
                wanted_item.season,
                to_text(wanted_item.episode),  # Can be a list for multi episode files
                wanted_item.quality,
                to_text(wanted_item.source),  # Can be a list for multi source files
                to_text(wanted_item.codec),  # Can be a list for multi codec files
                wanted_item.release_group,
                wanted_item.tvdb_id,
                wanted_item.imdb_id,
                wanted_item.id,
            ],
        )
        connection.commit()
        connection.close()

    def flush_wanted_items(self) -> None:
        """Flush all wanted items."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()


class LastDownloadsDb(object):
    """Last downloads db."""

    def __init__(self) -> None:
        self._query_get = 'SELECT * FROM last_downloads ORDER BY timestamp DESC'
        self._query_set = 'INSERT INTO last_downloads VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        self._query_flush = 'DELETE FROM last_downloads'

    def get_last_downloads(self) -> List[DownloadedItem]:
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
            return result_list[0 : autosubliminal.MAXDBRESULTS]
        else:
            return result_list

    def set_last_downloads(self, download_item: DownloadItem) -> None:
        """Set a download item.

        :param download_item: the download item
        :type download_item: DownloadItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_set,
            [
                download_item.video_path,
                download_item.language,
                download_item.provider,
                download_item.subtitle,
                download_item.timestamp,
                download_item.type,
                download_item.title,
                download_item.year,
                download_item.season,
                to_text(download_item.episode),  # Can be a list for multi episode files
                download_item.quality,
                to_text(download_item.source),  # Can be a list for multi source files
                to_text(download_item.codec),  # Can be a list for multi codec files
                download_item.release_group,
                download_item.tvdb_id,
                download_item.imdb_id,
            ],
        )
        connection.commit()
        connection.close()

    def flush_last_downloads(self) -> None:
        """Flush all downloaded items."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()
