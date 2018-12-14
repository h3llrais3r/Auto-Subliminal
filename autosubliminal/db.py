# coding=utf-8

import os
import sqlite3
import logging

import autosubliminal
from autosubliminal import version
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


class TvdbIdCache(object):
    def __init__(self):
        self._query_get_id = 'select tvdb_id from tvdb_id_cache where show_name = ?'
        self._query_set_id = 'insert into tvdb_id_cache values (?,?)'
        self._query_flush_cache = 'delete from tvdb_id_cache'

    def get_id(self, show_name):
        """
        Get the tvdb id for a show from the database.

        :param show_name: the show name
        :type show_name: str
        :return: the tvdb id or None if not found
        :rtype: int | None
        """
        tvdb_id = None
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_get_id, [show_name.upper()])
        for row in cursor:
            tvdb_id = row[0]
        connection.close()

        if tvdb_id:
            return int(tvdb_id)

    def set_id(self, tvdb_id, show_name):
        """
        Set the tvdb id for a show in the database.

        :param tvdb_id: the tvdb id
        :type tvdb_id: int
        :param show_name: the show name
        :type show_name: str
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set_id, [tvdb_id, show_name.upper()])
        connection.commit()
        connection.close()

    def flush_cache(self):
        """
        Flush all the tvdb id's from the database.
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush_cache)
        connection.commit()
        connection.close()


class ImdbIdCache(object):
    def __init__(self):
        self._query_get_id = 'select imdb_id from imdb_id_cache where title = ? and year = ?'
        self._query_set_id = 'insert into imdb_id_cache values (?,?,?)'
        self._query_flush_cache = 'delete from imdb_id_cache'

    def get_id(self, title, year):
        """
        Get the imdb id for a movie title and year from the database.

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
        cursor.execute(self._query_get_id, [title.upper(), year])
        for row in cursor:
            imdb_id = row[0]
        connection.close()
        return imdb_id

    def set_id(self, imdb_id, title, year):
        """
        Set the imdb id for a movie title and year in the database.

        :param imdb_id: the imdb id
        :type imdb_id: str
        :param title: the movie title
        :type title: str
        :param year: the movie year
        :type year: str | int
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set_id, [imdb_id, title.upper(), year])
        connection.commit()
        connection.close()

    def flush_cache(self):
        """
        Flush all the imdb id's from the database.
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush_cache)
        connection.commit()
        connection.close()


class WantedItems(object):
    def __init__(self):
        self._query_get_all = 'select * from wanted_items order by timestamp desc'
        self._query_get = 'select * from wanted_items where videopath=?'
        self._query_set = 'insert into wanted_items values (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        self._query_update = 'update wanted_items set videopath=?, timestamp=?, languages=?, type=?, title=?, ' \
                             'year=?, season=?, episode=?, quality=?, source=?, codec=?, releasegrp=?, tvdbid=?, ' \
                             'imdbid=? where id=?'
        self._query_delete = 'delete from wanted_items where videopath=?'
        self._query_flush = 'delete from wanted_items'

    def get_wanted_items(self):
        """
        Get the list of wanted items from the database.

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

    def get_wanted_item(self, video_path):
        """
        Get a single wanted item from the database based on it's video path.

        :param video_path: the video path
        :type video_path: str
        :return: the wanted item
        :rtype: WantedItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _wanted_item_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [video_path])
        wanted_item = cursor.fetchone()
        connection.close()

        return wanted_item

    def set_wanted_item(self, wanted_item):
        """
        Set a wanted item in the database.

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
        """
        Delete a wanted item from the database.

        :param wanted_item: the wanted item
        :type wanted_item: WantedItem
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [wanted_item.videopath])
        connection.commit()
        connection.close()

    def update_wanted_item(self, wanted_item):
        """
        Update a wanted item in the database.

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
        """
        Flush all the wanted items from the database.
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()


class LastDownloads(object):
    def __init__(self):
        self._query_get = 'select * from last_downloads order by timestamp desc'
        self._query_set = 'insert into last_downloads values (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        self._query_flush = 'delete from last_downloads'

    def get_last_downloads(self):
        """
        Get the last downloaded items from the database.

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
        """
        Set a download item in the database.

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
        """
        Flush all the downloaded items from the database.
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        connection.commit()
        connection.close()


def create():
    # Create the database
    try:
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()

        query = 'CREATE TABLE tvdb_id_cache (tvdb_id INTEGER, show_name TEXT)'
        cursor.execute(query)
        connection.commit()

        query = 'CREATE TABLE imdb_id_cache (imdb_id TEXT, title TEXT, year TEXT)'
        cursor.execute(query)
        connection.commit()

        query = 'CREATE TABLE wanted_items (id INTEGER PRIMARY KEY, videopath TEXT, timestamp DATETIME, ' \
                'languages TEXT, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, quality TEXT, ' \
                'source TEXT, codec TEXT, releasegrp TEXT, tvdbid TEXT, imdbid TEXT)'
        cursor.execute(query)
        connection.commit()

        query = 'CREATE TABLE last_downloads (id INTEGER PRIMARY KEY, type TEXT, title TEXT, year TEXT, season TEXT, ' \
                'episode TEXT, quality TEXT, source TEXT, language TEXT, codec TEXT, timestamp DATETIME, ' \
                'releasegrp TEXT, subtitle TEXT, provider TEXT)'
        cursor.execute(query)
        connection.commit()

        query = 'CREATE TABLE info (database_version NUMERIC)'
        cursor.execute(query)
        connection.commit()

        query = 'INSERT INTO info VALUES (%d)' % version.DB_VERSION
        cursor.execute(query)
        connection.commit()

        connection.close()

        print('INFO: Succesfully created the sqlite database.')
        autosubliminal.DBVERSION = version.DB_VERSION
    except Exception:
        print('ERROR: Could not create database.')
        print('ERROR: Please check if Auto-Subliminal has write access to file %s.' % autosubliminal.DBFILE)

    return True


def upgrade(from_version, to_version):
    print('INFO: Upgrading database from version %d to version %d.' % (from_version, to_version))

    upgrades = to_version - from_version
    if upgrades != 1:
        print('INFO: More than 1 upgrade required. Starting subupgrades.')
        for x in list(range(from_version, upgrades + 1)):
            upgrade((from_version - 1) + x, x + 1)
    else:
        if from_version == 1 and to_version == 2:
            # Add codec and timestamp
            # New table, info with dbversion
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute('ALTER TABLE last_downloads ADD COLUMN %s TEXT' % 'codec')
            cursor.execute('ALTER TABLE last_downloads ADD COLUMN %s TEXT' % 'timestamp')
            cursor.execute('CREATE TABLE info (database_version NUMERIC);')
            cursor.execute('INSERT INTO info VALUES (%d)' % 2)
            connection.commit()
            connection.close()

        if from_version == 2 and to_version == 3:
            # Add Releasegrp
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute('ALTER TABLE last_downloads ADD COLUMN %s TEXT' % 'releasegrp')
            cursor.execute('ALTER TABLE last_downloads ADD COLUMN %s TEXT' % 'subtitle')
            cursor.execute('UPDATE info SET database_version = %d WHERE database_version = %d' % (3, 2))
            connection.commit()
            connection.close()

        if from_version == 3 and to_version == 4:
            # Create id_cache table from scratch with tvdb_id
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute('DROP TABLE id_cache;')
            cursor.execute('CREATE TABLE id_cache (tvdb_id INTEGER, show_name TEXT);')
            cursor.execute('UPDATE info SET database_version = %d WHERE database_version = %d' % (4, 3))
            connection.commit()
            connection.close()

        if from_version == 4 and to_version == 5:
            # Add provider column to last_downloads table
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute('ALTER TABLE last_downloads ADD COLUMN %s TEXT' % 'provider')
            cursor.execute('UPDATE info SET database_version = %d WHERE database_version = %d' % (5, 4))
            connection.commit()
            connection.close()

        if from_version == 5 and to_version == 6:
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            # Recreate last_downloads
            cursor.execute(
                'CREATE TABLE tmp_last_downloads (id INTEGER PRIMARY KEY, type TEXT, title TEXT, year TEXT, '
                'season TEXT, episode TEXT, quality TEXT, source TEXT, language TEXT, codec TEXT, timestamp DATETIME, '
                'releasegrp TEXT, subtitle TEXT, provider TEXT)'
            )
            cursor.execute(
                'INSERT INTO tmp_last_downloads SELECT id, episode, show_name, NULL, season, episode, quality, source, '
                'language, codec, timestamp, releasegrp, subtitle, provider FROM last_downloads')
            cursor.execute('DROP TABLE last_downloads')
            cursor.execute(
                'CREATE TABLE last_downloads (id INTEGER PRIMARY KEY, type TEXT, title TEXT, year TEXT, season TEXT, '
                'episode TEXT, quality TEXT, source TEXT, language TEXT, codec TEXT, timestamp DATETIME, '
                'releasegrp TEXT, subtitle TEXT, provider TEXT)'
            )
            cursor.execute('INSERT INTO last_downloads SELECT * FROM tmp_last_downloads')
            cursor.execute('DROP TABLE tmp_last_downloads')
            # Create imdb_id_cache
            cursor.execute('CREATE TABLE imdb_id_cache (imdb_id TEXT, title TEXT, year TEXT)')
            # Create tvdb_id_cache
            cursor.execute('CREATE TABLE tvdb_id_cache (tvdb_id TEXT, show_name TEXT)')
            # Drop id_cache
            cursor.execute('DROP TABLE id_cache')
            # Update database version
            cursor.execute('UPDATE info SET database_version = %d WHERE database_version = %d' % (6, 5))
            connection.commit()
            connection.close()

        if from_version == 6 and to_version == 7:
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            # Create wanted_items
            cursor.execute(
                'CREATE TABLE wanted_items (id INTEGER PRIMARY KEY, videopath TEXT, timestamp DATETIME, '
                'languages TEXT, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, quality TEXT, '
                'source TEXT, codec TEXT, releasegrp TEXT, tvdbid TEXT, imdbid TEXT)'
            )
            # Update database version
            cursor.execute('UPDATE info SET database_version = %d WHERE database_version = %d' % (7, 6))
            connection.commit()
            connection.close()


def get_version():
    try:
        query_get_version = 'SELECT database_version FROM info'
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(query_get_version)

        db_version = None
        for row in cursor:
            db_version = row[0]
        connection.close()

        return int(db_version)
    except Exception:
        return 1


def initialize():
    # Check if the db file already exists and create it if not
    db_file = os.path.join(autosubliminal.PATH, autosubliminal.DBFILE)
    if not os.path.exists(db_file):
        create()

    # Get the current database version
    autosubliminal.DBVERSION = get_version()

    # Check if upgrade is needed
    if autosubliminal.DBVERSION < version.DB_VERSION:
        upgrade(autosubliminal.DBVERSION, version.DB_VERSION)
    elif autosubliminal.DBVERSION > version.DB_VERSION:
        print('ERROR: Database version higher then this version of Auto-Subliminal supports. Update.')
        os._exit(1)
