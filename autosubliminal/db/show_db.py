# coding=utf-8

import logging
import sqlite3

import autosubliminal
from autosubliminal.core.show import ShowDetails, ShowEpisodeDetails, ShowSettings
from autosubliminal.core.subtitle import Subtitle
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


def _subtitle_factory(cursor, row):
    subtitle = Subtitle()
    for idx, col in enumerate(cursor.description):
        subtitle.set_attr(col[0], row[idx])
    return subtitle


class ShowDetailsDb(object):
    def __init__(self):
        self._query_get_all = 'SELECT * FROM show_details'
        self._query_get = 'SELECT * FROM show_details WHERE tvdb_id=?'
        self._query_set = 'INSERT INTO show_details VALUES (?,?,?,?,?,?,?)'
        self._query_flush = 'DELETE FROM show_details'

    def get_all_shows(self):
        """Get all shows.

        :return: the list of shows
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
        :return: the show or None if not found
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

        :param show_details: the show
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

    def flush_shows(self, episodes=False, subtitles=False):
        """Flush all shows."""
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        if episodes:
            ShowEpisodeDetailsDb(connection).flush_show_episodes(subtitles=subtitles)
        connection.commit()
        connection.close()


class ShowEpisodeDetailsDb(object):
    def __init__(self, connection=None):
        self.connection = connection

        self._query_get_all_for_show = 'SELECT * FROM show_episode_details WHERE show_tvdb_id=?'
        self._query_get_all_for_show_available = 'SELECT * FROM show_episode_details ' \
                                                 'WHERE show_tvdb_id=? AND path IS NOT NULL AND path!=""'
        self._query_get = 'SELECT * FROM show_episode_details WHERE show_tvdb_id=? AND season=? AND episode=?'
        self._query_set = 'INSERT INTO show_episode_details VALUES (?,?,?,?,?,?,?)'
        self._query_update = 'UPDATE show_episode_details SET show_tvdb_id=?, title=?, season=?, episode=?, path=?, ' \
                             'missing_languages=? WHERE tvdb_id=?'
        self._query_flush = 'DELETE FROM show_episode_details'

    def get_show_episodes(self, show_tvdb_id, available_only=False, subtitles=False):
        """Get the episodes of a show by its tvdb id.

        :param show_tvdb_id: the tvdb id of the show
        :type show_tvdb_id: int
        :param available_only: indication if only the available episodes must be fetched or not
        :type available_only: bool
        :param subtitles: indication if subtitles must be fetched or not
        :type subtitles: bool
        :return: the list of show episodes
        :rtype: list[ShowEpisodeDetails]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_episode_details_factory
        cursor = connection.cursor()
        query = self._query_get_all_for_show
        if available_only:
            query = self._query_get_all_for_show_available
        cursor.execute(query, [show_tvdb_id])
        show_episodes = cursor.fetchall()
        if subtitles:
            subtitles_db = ShowEpisodeSubtitlesDb(connection)
            for show_episode in show_episodes:
                show_episode.subtitles = subtitles_db.get_show_episode_subtitles(show_episode.tvdb_id)
        connection.close()

        return show_episodes

    def get_show_episode(self, show_tvdb_id, season, show_episode, subtitles=False):
        """Get a show episode by its show tvdb id, season and episode number.

        :param show_tvdb_id: the tvdb id of the show
        :type show_tvdb_id: int
        :param season: the season
        :type season: int
        :param show_episode: the episode number
        :type show_episode: int
        :param subtitles: indication if subtitles must be fetched or not
        :type subtitles: bool
        :return: the show episode
        :rtype: ShowEpisodeDetails
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_episode_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [show_tvdb_id, season, show_episode])
        show_episode = cursor.fetchone()
        if subtitles:
            show_episode.subtitles = ShowEpisodeSubtitlesDb(connection).get_show_episode_subtitles(show_episode.tvdb_id)
        connection.close()

        return show_episode

    def set_show_episode(self, show_episode, subtitles=False):
        """Set a show episode.

        :param show_episode: the show episode
        :type show_episode: ShowEpisodeDetails
        :param subtitles: indication if subtitles must be set or not
        :type subtitles: bool
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
            to_text(show_episode.missing_languages)
        ])
        if subtitles:
            ShowEpisodeSubtitlesDb(connection).set_show_episode_subtitles(show_episode.tvdb_id, show_episode.subtitles)
        connection.commit()
        connection.close()

    def update_show_episode(self, show_episode, subtitles=False):
        """Update a show episode.

        :param show_episode: the show episode
        :type show_episode: ShowEpisodeDetails
        :param subtitles: indication if subtitles must be updated or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_update, [
            show_episode.show_tvdb_id,
            show_episode.title,
            show_episode.season,
            show_episode.episode,
            show_episode.path,
            to_text(show_episode.missing_languages),
            show_episode.tvdb_id
        ])
        if subtitles:
            subtitles_db = ShowEpisodeSubtitlesDb(connection)
            subtitles_db.delete_show_episode_subtitles(show_episode.tvdb_id)
            subtitles_db.set_show_episode_subtitles(show_episode.tvdb_id, show_episode.subtitles)
        connection.commit()
        connection.close()

    def flush_show_episodes(self, subtitles=False):
        """Flush all show episodes.

        :param subtitles: indication if subtitles must be flushed or not
        :type subtitles: bool
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        if subtitles:
            ShowEpisodeSubtitlesDb(connection).flush_show_episode_subtitles()
        if not self.connection:
            connection.commit()
            connection.close()


class ShowEpisodeSubtitlesDb(object):
    def __init__(self, connection=None):
        self.connection = connection

        self._query_get = 'SELECT * FROM show_episode_subtitles WHERE tvdb_id=?'
        self._query_set = 'INSERT INTO show_episode_subtitles VALUES (?,?,?,?)'
        self._query_delete = 'DELETE FROM show_episode_subtitles WHERE tvdb_id=?'
        self._query_flush = 'DELETE FROM show_episode_subtitles'

    def get_show_episode_subtitles(self, tvdb_id):
        """Get the subtitles of a show episode by its tvdb id.

        :param tvdb_id: the tvdb id of the show episode
        :type tvdb_id: int
        :return: the show episode subtitles
        :rtype: list[Subtitle]
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _subtitle_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [tvdb_id])
        subtitles = cursor.fetchall()
        if not self.connection:
            connection.close()

        return subtitles

    def set_show_episode_subtitles(self, tvdb_id, show_episode_subtitles):
        """Set the subtitles of a show episode.

        :param tvdb_id: the tvdb id of the show episode
        :type tvdb_id: int
        :param show_episode_subtitles: the show episode subtitles
        :type show_episode_subtitles: list[Subtitle]
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        for show_subtitle in show_episode_subtitles:
            cursor.execute(self._query_set, [
                tvdb_id,
                show_subtitle.type,
                show_subtitle.language,
                show_subtitle.path
            ])
        if not self.connection:
            connection.commit()
            connection.close()

    def delete_show_episode_subtitles(self, tvdb_id):
        """Delete the subtitles of a show episode.

        :param tvdb_id: the tvdb id of the show episode
        :type tvdb_id: int
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [tvdb_id])
        if not self.connection:
            connection.commit()
            connection.close()

    def flush_show_episode_subtitles(self):
        """Flush all show episode subtitles."""
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        if not self.connection:
            connection.commit()
            connection.close()


class ShowSettingsDb(object):
    def __init__(self):
        self._query_get = 'SELECT * FROM show_settings WHERE tvdb_id=?'
        self._query_set = 'INSERT INTO show_settings VALUES(?,?,?,?,?)'
        self._query_update = 'UPDATE show_settings SET languages=?, refine=?, hearing_impaired=?, utf8_encoding=? ' \
                             'WHERE tvdb_id=?'

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
            to_text(show_settings.languages),
            show_settings.refine,
            show_settings.hearing_impaired,
            show_settings.utf8_encoding
        ])
        connection.commit()
        connection.close()

    def update_show_settings(self, show_settings):
        """Update show settings.

        :param show_settings: the show settings
        :type show_settings: ShowSettings
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_update, [
            to_text(show_settings.languages),
            show_settings.refine,
            show_settings.hearing_impaired,
            show_settings.utf8_encoding,
            show_settings.tvdb_id
        ])
        connection.commit()
