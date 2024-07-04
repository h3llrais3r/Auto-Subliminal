# coding=utf-8

import os
import shutil
import sqlite3
import time

import autosubliminal
from autosubliminal import version

# Import from submodules here so we don't need to import it from the submodule itself!
from .cache_db import ImdbIdCacheDb, TvdbIdCacheDb
from .failed_db import FailedMoviesDb, FailedShowsDb
from .main_db import LastDownloadsDb, WantedItemsDb
from .movie_db import MovieDetailsDb, MovieSettingsDb, MovieSubtitlesDb
from .show_db import ShowDetailsDb, ShowEpisodeDetailsDb, ShowEpisodeSubtitlesDb, ShowSettingsDb

# Reference all imports from the submodules here (to prevent unused imports errors)!
__all__ = [
    'ImdbIdCacheDb',
    'TvdbIdCacheDb',
    'LastDownloadsDb',
    'WantedItemsDb',
    'MovieDetailsDb',
    'MovieSettingsDb',
    'MovieSubtitlesDb',
    'ShowDetailsDb',
    'ShowEpisodeDetailsDb',
    'ShowEpisodeSubtitlesDb',
    'ShowSettingsDb',
    'FailedMoviesDb',
    'FailedShowsDb',
]


def create() -> None:
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

        query = (
            'CREATE TABLE wanted_items (id INTEGER PRIMARY KEY, video_path TEXT, video_size INTEGER, '
            'languages TEXT, timestamp DATETIME, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, '
            'quality TEXT, source TEXT, codec TEXT, release_group TEXT, tvdb_id TEXT, imdb_id TEXT)'
        )
        cursor.execute(query)
        connection.commit()

        query = (
            'CREATE TABLE last_downloads (id INTEGER PRIMARY KEY, video_path TEXT, language TEXT, provider TEXT, '
            'subtitle TEXT, timestamp DATETIME, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, '
            'quality TEXT, source TEXT, codec TEXT, release_group TEXT, tvdb_id INTEGER, imdb_id TEXT)'
        )
        cursor.execute(query)
        connection.commit()

        query = (
            'CREATE TABLE show_details (tvdb_id INTEGER PRIMARY KEY, title TEXT, year TEXT, path TEXT, '
            'overview TEXT, poster TEXT, banner TEXT)'
        )
        cursor.execute(query)
        connection.commit()

        query = (
            'CREATE TABLE show_episode_details (tvdb_id INTEGER PRIMARY KEY, show_tvdb_id INTEGER, title TEXT, '
            'season TEXT, episode TEXT, path TEXT, missing_languages TEXT)'
        )
        cursor.execute(query)
        connection.commit()

        query = 'CREATE TABLE show_episode_subtitles (tvdb_id INTEGER, type TEXT, language TEXT, path TEXT)'
        cursor.execute(query)
        connection.commit()

        query = (
            'CREATE TABLE show_settings (tvdb_id INTEGER PRIMARY KEY, wanted_languages TEXT, refine INTEGER, '
            'hearing_impaired INTEGER, utf8_encoding INTEGER)'
        )
        cursor.execute(query)
        connection.commit()

        query = (
            'CREATE TABLE movie_details (imdb_id TEXT PRIMARY KEY, title TEXT, year TEXT, path TEXT, '
            'overview TEXT, poster TEXT, missing_languages TEXT)'
        )
        cursor.execute(query)
        connection.commit()

        query = 'CREATE TABLE movie_subtitles (imdb_id TEXT, type TEXT, language TEXT, path TEXT)'
        cursor.execute(query)
        connection.commit()

        query = (
            'CREATE TABLE movie_settings (imdb_id TEXT PRIMARY KEY, wanted_languages TEXT, refine INTEGER, '
            'hearing_impaired INTEGER, utf8_encoding INTEGER)'
        )
        cursor.execute(query)
        connection.commit()

        query = 'CREATE TABLE failed_shows (path TEXT PRIMARY KEY)'
        cursor.execute(query)
        connection.commit()

        query = 'CREATE TABLE failed_movies (path TEXT PRIMARY KEY)'
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


def upgrade(from_version: int, to_version: int) -> None:
    print('INFO: Upgrading database from version %d to version %d.' % (from_version, to_version))
    print('INFO: Creating backup of database.')
    try:
        backup_file = '%s.v%d.%s' % (autosubliminal.DBFILE, from_version, time.strftime('%Y%m%d%H%M%S'))
        shutil.copy(autosubliminal.DBFILE, backup_file)
    except Exception:
        print('ERROR: Unable to backup database. Continuing without backup.')

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
                'language, codec, timestamp, releasegrp, subtitle, provider FROM last_downloads'
            )
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

        if from_version == 7 and to_version == 8:
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            # Create show_details
            cursor.execute(
                'CREATE TABLE show_details (tvdb_id INTEGER PRIMARY KEY, title TEXT, year TEXT, path TEXT, '
                'overview TEXT, poster TEXT, banner TEXT)'
            )
            # Create show_episode_details
            cursor.execute(
                'CREATE TABLE show_episode_details (tvdb_id INTEGER PRIMARY KEY, show_tvdb_id INTEGER, title TEXT, '
                'season TEXT, episode TEXT, path TEXT, missing_languages TEXT)'
            )
            # Create show_subtitles
            cursor.execute('CREATE TABLE show_episode_subtitles (tvdb_id INTEGER, type TEXT, language TEXT, path TEXT)')
            # Create show_settings
            cursor.execute(
                'CREATE TABLE show_settings (tvdb_id INTEGER PRIMARY KEY, wanted_languages TEXT, refine INTEGER, '
                'hearing_impaired INTEGER, utf8_encoding INTEGER)'
            )
            # Create movie_details
            cursor.execute(
                'CREATE TABLE movie_details (imdb_id TEXT PRIMARY KEY, title TEXT, year TEXT, path TEXT, '
                'overview TEXT, poster TEXT, missing_languages TEXT)'
            )
            # Create movie_subtitles
            cursor.execute('CREATE TABLE movie_subtitles (imdb_id TEXT, type TEXT, language TEXT, path TEXT)')
            # Create movie_settings
            cursor.execute(
                'CREATE TABLE movie_settings (imdb_id TEXT PRIMARY KEY, wanted_languages TEXT, refine INTEGER, '
                'hearing_impaired INTEGER, utf8_encoding INTEGER)'
            )
            # Update empty year values to NULL
            cursor.execute("UPDATE last_downloads SET year = NULL WHERE year = ''")
            cursor.execute("UPDATE wanted_items SET year = NULL WHERE year = ''")
            # Update database version
            cursor.execute('UPDATE info SET database_version = %d WHERE database_version = %d' % (8, 7))
            connection.commit()
            connection.close()

        if from_version == 8 and to_version == 9:
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            # Create failed_shows
            cursor.execute('CREATE TABLE failed_shows (path TEXT PRIMARY KEY)')
            # Create failed_movies
            cursor.execute('CREATE TABLE failed_movies (path TEXT PRIMARY KEY)')
            # Cleanup in tvdb_id_cache
            cursor.execute('DELETE FROM tvdb_id_cache WHERE tvdb_id = -1')
            # Cleanup imdb_id_cache
            cursor.execute("DELETE FROM imdb_id_cache WHERE imdb_id = 'tt0000000'")
            # Update database version
            cursor.execute('UPDATE info SET database_version = %d WHERE database_version = %d' % (9, 8))
            connection.commit()
            connection.close()

        if from_version == 9 and to_version == 10:
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            # Recreate last_downloads
            cursor.execute(
                'CREATE TABLE tmp_last_downloads (id INTEGER PRIMARY KEY, type TEXT, title TEXT, year TEXT, '
                'season TEXT, episode TEXT, quality TEXT, source TEXT, language TEXT, codec TEXT, timestamp DATETIME, '
                'releasegrp TEXT, subtitle TEXT, provider TEXT)'
            )
            cursor.execute(
                'INSERT INTO tmp_last_downloads SELECT id, type, title, year, season, episode, quality, source, '
                "language, codec, timestamp, releasegrp, subtitle || '.srt', provider FROM last_downloads"
            )
            cursor.execute('DROP TABLE last_downloads')
            cursor.execute(
                'CREATE TABLE last_downloads (id INTEGER PRIMARY KEY, video_path TEXT, language TEXT, provider TEXT, '
                'subtitle TEXT, timestamp DATETIME, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, '
                'quality TEXT, source TEXT, codec TEXT, release_group TEXT, tvdb_id INTEGER, imdb_id TEXT)'
            )
            cursor.execute(
                'INSERT INTO last_downloads SELECT id, NULL, language, provider, subtitle, timestamp, type, '
                'title, year, season, episode, quality, source, codec, releasegrp, NULL, NULL '
                'FROM tmp_last_downloads'
            )
            cursor.execute('DROP TABLE tmp_last_downloads')
            # Recreate wanted_items
            cursor.execute('DROP TABLE wanted_items')
            cursor.execute(
                'CREATE TABLE wanted_items (id INTEGER PRIMARY KEY, video_path TEXT, video_size INTEGER, '
                'languages TEXT, timestamp DATETIME, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, '
                'quality TEXT, source TEXT, codec TEXT, release_group TEXT, tvdb_id TEXT, imdb_id TEXT)'
            )
            # Update database version
            cursor.execute('UPDATE info SET database_version = %d WHERE database_version = %d' % (10, 9))
            connection.commit()
            connection.close()


def get_version() -> int:
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


def initialize() -> None:
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
