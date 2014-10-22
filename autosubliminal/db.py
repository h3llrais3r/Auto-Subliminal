import os
import sqlite3
import logging

import autosubliminal
from autosubliminal import version

log = logging.getLogger(__name__)


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


class IdCache():
    def __init__(self):
        self.query_get_id = "select tvdb_id from id_cache where show_name = ?"
        self.query_set_id = "insert into id_cache values (?,?)"
        self.query_flush_cache = "delete from id_cache"

    def get_id(self, show_name):
        show_name = show_name

        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self.query_get_id, [show_name.upper()])
        tvdb_id = None

        for row in cursor:
            tvdb_id = row[0]

        connection.close()
        if tvdb_id:
            return int(tvdb_id)

    def set_id(self, tvdb_id, show_name):
        show_name = show_name

        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self.query_set_id, [tvdb_id, show_name.upper()])
        connection.commit()
        connection.close()

    def flush_cache(self):
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self.query_flush_cache)
        connection.commit()
        connection.close()


class LastDownloads():
    def __init__(self):
        self.query_get = "select * from last_downloads order by timestamp desc;"
        self.query_set = "insert into last_downloads values (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?);"
        self.query_flush = "delete from last_downloads;"

    def get_last_downloads(self):
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = dict_factory
        cursor = connection.cursor()
        cursor.execute(self.query_get)
        result_list = cursor.fetchall()
        connection.close()

        # Return the last 20 items
        if len(result_list) > 19:
            return result_list[0:20]
        else:
            return result_list

    def set_last_downloads(self, download_item):
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()

        if not 'source' in download_item.keys():
            download_item['source'] = None

        cursor.execute(self.query_set, [
            download_item['type'],
            download_item['title'],
            download_item['year'],
            download_item['season'],
            download_item['episode'],
            download_item['quality'],
            download_item['source'],
            download_item['downlang'],
            download_item['codec'],
            download_item['timestamp'],
            download_item['releasegrp'],
            download_item['subtitle'],
            download_item['provider']])
        connection.commit()
        connection.close()

    def flush_last_downloads(self):
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self.query_flush)
        connection.commit()
        connection.close()


def create():
    # Create the database
    try:
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()

        query = "CREATE TABLE id_cache (tvdb_id INTEGER, show_name TEXT);"
        cursor.execute(query)
        connection.commit()

        query = "CREATE TABLE last_downloads (id INTEGER PRIMARY KEY, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, quality TEXT, source TEXT, language TEXT, codec TEXT, timestamp DATETIME, releasegrp TEXT, subtitle TEXT, provider TEXT);"
        cursor.execute(query)
        connection.commit()

        query = "CREATE TABLE info (database_version NUMERIC);"
        cursor.execute(query)
        connection.commit()

        query = "INSERT INTO info VALUES (%d)" % version.DB_VERSION
        cursor.execute(query)
        connection.commit()

        connection.close()

        print "INFO: Succesfully created the sqlite database."
        autosubliminal.DBVERSION = version.DB_VERSION
    except:
        print "ERROR: Could not create database. Please check if Auto-Subliminal has write access to write the following file %s." % autosubliminal.DBFILE

    return True


def upgrade(from_version, to_version):
    print "INFO: Upgrading database from version %d to version %d." % (from_version, to_version)
    upgrades = to_version - from_version
    if upgrades != 1:
        print "INFO: More than 1 upgrade required. Starting subupgrades."
        for x in range(from_version, upgrades + 1):
            upgrade((from_version - 1) + x, x + 1)
    else:
        if from_version == 1 and to_version == 2:
            # Add codec and timestamp
            # New table, info with dbversion
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'codec')
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'timestamp')
            cursor.execute("CREATE TABLE info (database_version NUMERIC);")
            cursor.execute("INSERT INTO info VALUES (%d)" % 2)
            connection.commit()
            connection.close()
        if from_version == 2 and to_version == 3:
            # Add Releasegrp
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'releasegrp')
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'subtitle')
            cursor.execute("UPDATE info SET database_version = %d WHERE database_version = %d" % (3, 2))
            connection.commit()
            connection.close()
        if from_version == 3 and to_version == 4:
            # Create id_cache table from scratch with tvdb_id
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute("DROP TABLE id_cache;")
            cursor.execute("CREATE TABLE id_cache (tvdb_id INTEGER, show_name TEXT);")
            cursor.execute("UPDATE info SET database_version = %d WHERE database_version = %d" % (4, 3))
            connection.commit()
            connection.close()
        if from_version == 4 and to_version == 5:
            # Add provider column to last_downloads table
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'provider')
            cursor.execute("UPDATE info SET database_version = %d WHERE database_version = %d" % (5, 4))
            connection.commit()
            connection.close()
        if from_version == 5 and to_version == 6:
            # Recreate last_downloads
            connection = sqlite3.connect(autosubliminal.DBFILE)
            cursor = connection.cursor()
            cursor.execute("CREATE TABLE tmp_last_downloads (id INTEGER PRIMARY KEY, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, quality TEXT, source TEXT, language TEXT, codec TEXT, timestamp DATETIME, releasegrp TEXT, subtitle TEXT, provider TEXT)")
            cursor.execute("INSERT INTO tmp_last_downloads SELECT id, 'episode', show_name, '', season, episode, quality, source, language, codec, timestamp, releasegrp, subtitle, provider FROM last_downloads")
            cursor.execute("DROP TABLE last_downloads")
            cursor.execute("CREATE TABLE last_downloads (id INTEGER PRIMARY KEY, type TEXT, title TEXT, year TEXT, season TEXT, episode TEXT, quality TEXT, source TEXT, language TEXT, codec TEXT, timestamp DATETIME, releasegrp TEXT, subtitle TEXT, provider TEXT)")
            cursor.execute("INSERT INTO last_downloads SELECT * from tmp_last_downloads")
            cursor.execute("DROP TABLE tmp_last_downloads")
            cursor.execute("UPDATE info SET database_version = %d WHERE database_version = %d" % (6, 5))
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
    except:
        return 1


def initialize():
    # Check if file is already there
    db_file = os.path.join(autosubliminal.PATH, autosubliminal.DBFILE)
    if not os.path.exists(db_file):
        create()

    autosubliminal.DBVERSION = get_version()

    if autosubliminal.DBVERSION < version.DB_VERSION:
        upgrade(autosubliminal.DBVERSION, version.DB_VERSION)
    elif autosubliminal.DBVERSION > version.DB_VERSION:
        print "INFO: Database version higher then this version of Auto-Subliminal supports. Update."
        os._exit(1)
