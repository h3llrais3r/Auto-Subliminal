# coding=utf-8

import logging
import sqlite3

import autosubliminal
from autosubliminal.core.show import ShowDetails, ShowEpisodeDetails, ShowSettings
from autosubliminal.util.common import to_text

log = logging.getLogger(__name__)


def _show_details_factory(cursor, row):
    show_details = ShowDetails()
    for idx, col in enumerate(cursor.description):
        show_details.set_attr(col[0], row[idx])
    return show_details


def _show_episode_details_factory(cursor, row):
    show_episode_details = ShowEpisodeDetails()
    for idx, col in enumerate(cursor.description):
        show_episode_details.set_attr(col[0], row[idx])
    return show_episode_details


def _show_settings_factory(cursor, row):
    show_settings = ShowSettings()
    for idx, col in enumerate(cursor.description):
        show_settings.set_attr(col[0], row[idx])
    return show_settings


class ShowDetailsDb(object):
    def __init__(self):
        self._query_get_all = 'SELECT * FROM show_details'
        self._query_get = 'SELECT * FROM show_details WHERE tvdb_id = ?'
        self._query_set = 'INSERT INTO show_details VALUES (?,?,?,?,?,?,?)'

    def get_all_shows(self):
        """Get all shows.

        :return: the list with all show details
        :rtype: list[ShowDetails]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_all)
        all_show_details = cursor.fetchall()
        connection.close()

        return all_show_details

    def get_show(self, tvdb_id):
        """Get a show by its tvdb id.

        :param tvdb_id: the tvdb id
        :type tvdb_id: int
        :return: the show details or None if not found
        :rtype: ShowDetails | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [tvdb_id])
        show_details = cursor.fetchone()
        connection.close()

        return show_details

    def set_show(self, show_details):
        """Set a show.

        :param show_details: the show details
        :type show_details: ShowDetails
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [
            show_details.tvdb_id,
            show_details.title,
            show_details.year,
            show_details.path,
            show_details.overview,
            show_details.poster,
            show_details.banner
        ])
        connection.commit()
        connection.close()


class ShowEpisodeDetailsDb(object):
    def __init__(self):
        self._query_get_all_for_show = 'SELECT * FROM show_episode_details WHERE show_tvdb_id = ?'
        self._query_get = 'SELECT * FROM show_episode_details WHERE show_tvdb_id = ? AND season = ? AND episode = ?'
        self._query_set = 'INSERT INTO show_episode_details VALUES (?,?,?,?,?,?,?,?)'
        self._query_update = 'UPDATE show_episode_details SET show_tvdb_id=?, title=?, season=?, episode=?, path=?, ' \
                             'available_languages=?, missing_languages=? WHERE tvdb_id=?'

    def get_show_episodes(self, show_tvdb_id):
        """Get the episodes of a show by its tvdb id.

        :param show_tvdb_id: the tvdb id of the show
        :type show_tvdb_id: int
        :return: the list of show episode details
        :rtype: list[ShowEpisodeDetails]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_episode_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_all_for_show, [show_tvdb_id])
        show_details = cursor.fetchall()
        connection.close()

        return show_details

    def get_show_episode(self, show_tvdb_id, season, episode):
        """Get a show episode by its show tvdb id, season and episode number.

        :param show_tvdb_id: the tvdb id of the show
        :type show_tvdb_id: int
        :param season: the season
        :type season: int
        :param episode: the episode number
        :type episode: int
        :return: the show episode details
        :rtype: ShowEpisodeDetails
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_episode_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [show_tvdb_id, season, episode])
        episode_details = cursor.fetchone()
        connection.close()

        return episode_details

    def set_show_episode(self, show_episode):
        """Set a show episode.

        :param show_episode: the show episode details
        :type show_episode: ShowEpisodeDetails
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [
            show_episode.tvdb_id,
            show_episode.show_tvdb_id,
            show_episode.title,
            show_episode.season,
            show_episode.episode,
            show_episode.path,
            to_text(show_episode.available_languages),
            to_text(show_episode.missing_languages)
        ])
        connection.commit()
        connection.close()

    def update_show_episode(self, show_episode):
        """Update a show episode.

        :param show_episode: the show episode details
        :type show_episode: ShowEpisodeDetails
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_update, [
            show_episode.show_tvdb_id,
            show_episode.title,
            show_episode.season,
            show_episode.episode,
            show_episode.path,
            to_text(show_episode.available_languages),
            to_text(show_episode.missing_languages),
            show_episode.tvdb_id
        ])
        connection.commit()
        connection.close()


class ShowSettingsDb(object):
    def __init__(self):
        self._query_get = 'SELECT * FROM show_settings WHERE tvdb_id = ?'
        self._query_set = 'INSERT INTO show_settings VALUES(?,?,?,?,?)'

    def get_show_settings(self, tvdb_id):
        """Get the show settings by its tvdb id.

        :param tvdb_id: the tvdb id
        :type tvdb_id: int
        :return: the show settings or None if not found
        :rtype: ShowSettings | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_settings_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [tvdb_id])
        show_settings = cursor.fetchone()
        connection.close()

        return show_settings

    def set_show_settings(self, show_settings):
        """Set the show settings.

        :param show_settings: the show settings
        :type show_settings: ShowSettings
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_set, [
            show_settings.tvdb_id,
            show_settings.languages,
            show_settings.refine,
            show_settings.hearing_impaired,
            show_settings.utf8_encoding
        ])
        connection.commit()
        connection.close()
