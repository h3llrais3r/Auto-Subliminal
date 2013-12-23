import os
import sqlite3
import logging

import autosub
from autosub import version

log = logging.getLogger(__name__)


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


class IdCache():
    def __init__(self):
        self.query_get_id = 'select tvdb_id from id_cache where show_name = ?'
        self.query_set_id = 'insert into id_cache values (?,?)'
        self.query_flush_cache = 'delete from id_cache'

    def get_id(self, show_name):
        show_name = show_name

        connection = sqlite3.connect(autosub.DBFILE)
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

        connection = sqlite3.connect(autosub.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self.query_set_id, [tvdb_id, show_name.upper()])
        connection.commit()
        connection.close()

    def flush_cache(self):
        connection = sqlite3.connect(autosub.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self.query_flush_cache)
        connection.commit()
        connection.close()


class LastDownloads():
    def __init__(self):
        self.query_get = 'select * from last_downloads'
        self.query_set = 'insert into last_downloads values (NULL,?,?,?,?,?,?,?,?,?,?)'
        self.query_flush = 'delete from last_downloads'

    def get_last_downloads(self):
        connection = sqlite3.connect(autosub.DBFILE)
        connection.row_factory = dict_factory
        cursor = connection.cursor()
        cursor.execute(self.query_get)
        result_list = cursor.fetchall()
        connection.close()

        # Return the last 10 items
        if len(result_list) > 9:
            return result_list[len(result_list) - 10:]
        else:
            return result_list

    def set_last_downloads(self, **data):
        connection = sqlite3.connect(autosub.DBFILE)
        cursor = connection.cursor()
        result_dict = data['dict']

        if not 'source' in result_dict.keys():
            result_dict['source'] = None

        cursor.execute(self.query_set, [
            result_dict['title'],
            result_dict['season'],
            result_dict['episode'],
            result_dict['quality'],
            result_dict['source'],
            result_dict['downlang'],
            result_dict['codec'],
            result_dict['timestamp'],
            result_dict['releasegrp'],
            result_dict['subtitle']])
        connection.commit()
        connection.close()

    def flush_last_downloads(self):
        connection = sqlite3.connect(autosub.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self.query_flush)
        connection.commit()
        connection.close()


def create_db():
    # Create the database
    try:
        connection = sqlite3.connect(autosub.DBFILE)
        cursor = connection.cursor()

        cursor.execute("CREATE TABLE id_cache (tvdb_id INTEGER, show_name TEXT);")
        cursor.execute(
            "CREATE TABLE last_downloads (id INTEGER PRIMARY KEY, show_name TEXT, season TEXT, episode TEXT, quality TEXT, source TEXT, language TEXT, codec TEXT, timestamp DATETIME, releasegrp TEXT, subtitle TEXT);")
        cursor.execute("CREATE TABLE info (database_version NUMERIC);")
        connection.commit()
        cursor.execute("INSERT INTO info VALUES (%d)" % version.DB_VERSION)
        connection.commit()
        connection.close()

        print "INFO: Succesfully created the sqlite database"
        autosub.DBVERSION = version.DB_VERSION
    except:
        print "ERROR: Could not create database, please check if AutoSub has write access to write the following file %s" % autosub.DBFILE

    return True


def upgrade_db(from_version, to_version):
    print "INFO: Upgrading database from version %d to version %d" % (from_version, to_version)
    upgrades = to_version - from_version
    if upgrades != 1:
        print "INFO: More than 1 upgrade required. Starting subupgrades."
        for x in range(from_version, upgrades + 1):
            upgrade_db((from_version - 1) + x, x + 1)
    else:
        if from_version == 1 and to_version == 2:
            # Add codec and timestamp
            # New table, info with dbversion
            connection = sqlite3.connect(autosub.DBFILE)
            cursor = connection.cursor()
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'codec')
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'timestamp')
            cursor.execute("CREATE TABLE info (database_version NUMERIC);")
            cursor.execute("INSERT INTO info VALUES (%d)" % 2)
            connection.commit()
            connection.close()
        if from_version == 2 and to_version == 3:
            # Add Releasegrp
            connection = sqlite3.connect(autosub.DBFILE)
            cursor = connection.cursor()
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'releasegrp')
            cursor.execute("ALTER TABLE last_downloads ADD COLUMN '%s' 'TEXT'" % 'subtitle')
            cursor.execute("UPDATE info SET database_version = %d WHERE database_version = %d" % (3, 2))
            connection.commit()
            connection.close()
        if from_version == 3 and to_version == 4:
            # Create id_cache table from scratch with tvdb_id
            connection = sqlite3.connect(autosub.DBFILE)
            cursor = connection.cursor()
            cursor.execute("DROP TABLE id_cache;")
            cursor.execute("CREATE TABLE id_cache (tvdb_id INTEGER, show_name TEXT);")
            cursor.execute("UPDATE info SET database_version = %d WHERE database_version = %d" % (4, 3))
            connection.commit()
            connection.close()


def get_db_version():
    try:
        query_get_version = 'SELECT database_version FROM info'
        connection = sqlite3.connect(autosub.DBFILE)
        cursor = connection.cursor()
        cursor.execute(query_get_version)

        db_version = None
        for row in cursor:
            db_version = row[0]
        connection.close()

        return int(db_version)
    except:
        return 1


def init_db():
    # Check if file is already there
    db_file = os.path.join(autosub.PATH, autosub.DBFILE)
    if not os.path.exists(db_file):
        create_db()

    autosub.DBVERSION = get_db_version()

    if autosub.DBVERSION < version.DB_VERSION:
        upgrade_db(autosub.DBVERSION, version.DB_VERSION)
    elif autosub.DBVERSION > version.DB_VERSION:
        print "INFO: Database version higher then this version of AutoSubliminal supports. Update."
        os._exit(1)
