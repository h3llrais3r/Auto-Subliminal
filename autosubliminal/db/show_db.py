# coding=utf-8

import logging
import sqlite3
from sqlite3 import Connection, Cursor, Row
from typing import List, Optional

import autosubliminal
from autosubliminal.core.show import ShowDetails, ShowEpisodeDetails, ShowSettings
from autosubliminal.core.subtitle import Subtitle, SubtitleType
from autosubliminal.util.db import to_text

log = logging.getLogger(__name__)


def _show_details_factory(cursor: Cursor, row: Row) -> ShowDetails:
    show_details = ShowDetails()
    for idx, col in enumerate(cursor.description):
        show_details.set_attr(col[0], row[idx])
    return show_details


def _show_episode_details_factory(cursor: Cursor, row: Row) -> ShowEpisodeDetails:
    show_episode_details = ShowEpisodeDetails()
    for idx, col in enumerate(cursor.description):
        show_episode_details.set_attr(col[0], row[idx])
    return show_episode_details


def _show_settings_factory(cursor: Cursor, row: Row) -> ShowSettings:
    show_settings = ShowSettings()
    for idx, col in enumerate(cursor.description):
        show_settings.set_attr(col[0], row[idx])
    return show_settings


def _subtitle_factory(cursor: Cursor, row: Row) -> Subtitle:
    subtitle = Subtitle()
    for idx, col in enumerate(cursor.description):
        subtitle.set_attr(col[0], row[idx])
    return subtitle


class ShowDetailsDb(object):
    def __init__(self) -> None:
        self._query_get_all = 'SELECT * FROM show_details'
        self._query_get = 'SELECT * FROM show_details WHERE tvdb_id=?'
        self._query_set = 'INSERT INTO show_details VALUES (?,?,?,?,?,?,?)'
        self._query_delete = 'DELETE FROM show_details WHERE tvdb_id=?'
        self._query_flush = 'DELETE FROM show_details'

    def get_all_shows(self) -> List[ShowDetails]:
        """Get all shows.

        :return: the list of shows
        :rtype: list[ShowDetails]
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_all)
        all_show_details: List[ShowDetails] = cursor.fetchall()
        connection.close()

        return all_show_details

    def get_show(self, tvdb_id: int) -> Optional[ShowDetails]:
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
        show_details: Optional[ShowDetails] = cursor.fetchone()
        connection.close()

        return show_details

    def set_show(self, show_details: ShowDetails) -> None:
        """Set a show.

        :param show_details: the show
        :type show_details: ShowDetails
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_set,
            [
                show_details.tvdb_id,
                show_details.title,
                show_details.year,
                show_details.path,
                show_details.overview,
                show_details.poster,
                show_details.banner,
            ],
        )
        connection.commit()
        connection.close()

    def delete_show(self, tvdb_id: int, episodes: bool = False, subtitles: bool = False) -> None:
        """Delete a show by its tvdb id.

        :param tvdb_id: the tvdb id
        :type tvdb_id: int
        :param episodes: indication if episodes must be deleted or not
        :type episodes: bool
        :param subtitles: indication if subtitles must be deleted or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [tvdb_id])
        if episodes:
            ShowEpisodeDetailsDb(connection).delete_show_episodes(tvdb_id, subtitles=subtitles)
        connection.commit()
        connection.close()

    def flush_shows(self, episodes: bool = False, subtitles: bool = False) -> None:
        """Flush all shows.

        :param episodes: indication if episodes must be flushed or not
        :type episodes: bool
        :param subtitles: indication if subtitles must be flushed or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        if episodes:
            ShowEpisodeDetailsDb(connection).flush_show_episodes(subtitles=subtitles)
        connection.commit()
        connection.close()


class ShowEpisodeDetailsDb(object):
    def __init__(self, connection: Connection = None) -> None:
        self.connection = connection

        self._query_get_all_for_show = 'SELECT * FROM show_episode_details WHERE show_tvdb_id=?'
        self._query_get_all_for_show_available = (
            'SELECT * FROM show_episode_details ' 'WHERE show_tvdb_id=? AND path IS NOT NULL AND path!=""'
        )
        self._query_get = 'SELECT * FROM show_episode_details WHERE tvdb_id=?'
        self._query_get_by_show = 'SELECT * FROM show_episode_details WHERE show_tvdb_id=? AND season=? AND episode=?'
        self._query_set = 'INSERT INTO show_episode_details VALUES (?,?,?,?,?,?,?)'
        self._query_update = (
            'UPDATE show_episode_details SET show_tvdb_id=?, title=?, season=?, episode=?, path=?, '
            'missing_languages=? WHERE tvdb_id=?'
        )
        self._query_delete = 'DELETE FROM show_episode_details WHERE show_tvdb_id=?'
        self._query_flush = 'DELETE FROM show_episode_details'

    def get_show_episodes(
        self, show_tvdb_id: int, available_only: bool = False, subtitles: bool = False
    ) -> List[ShowEpisodeDetails]:
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
        show_episodes: List[ShowEpisodeDetails] = cursor.fetchall()
        if subtitles:
            subtitles_db = ShowEpisodeSubtitlesDb(connection)
            for show_episode in show_episodes:
                show_episode.subtitles = subtitles_db.get_show_episode_subtitles(show_episode.tvdb_id)
        connection.close()

        return show_episodes

    def get_show_episode(self, tvdb_id: int, subtitles: bool = False) -> Optional[ShowEpisodeDetails]:
        """Get a show episode by its tvdb id.

        :param tvdb_id: the tvdb id of the episode
        :type tvdb_id: int
        :param subtitles: indication if subtitles must be fetched or not
        :type subtitles: bool
        :return: the show episode
        :rtype: ShowEpisodeDetails | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_episode_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get, [tvdb_id])
        show_episode: Optional[ShowEpisodeDetails] = cursor.fetchone()
        if show_episode and subtitles:
            show_episode.subtitles = ShowEpisodeSubtitlesDb(connection).get_show_episode_subtitles(show_episode.tvdb_id)
        connection.close()

        return show_episode

    def get_show_episode_by_show(
        self, show_tvdb_id: int, season: int, episode: int, subtitles: bool = False
    ) -> Optional[ShowEpisodeDetails]:
        """Get a show episode by its show tvdb id, season and episode number.

        :param show_tvdb_id: the tvdb id of the show
        :type show_tvdb_id: int
        :param season: the season
        :type season: int
        :param episode: the episode number
        :type episode: int
        :param subtitles: indication if subtitles must be fetched or not
        :type subtitles: bool
        :return: the show episode
        :rtype: ShowEpisodeDetails | None
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        connection.row_factory = _show_episode_details_factory
        cursor = connection.cursor()
        cursor.execute(self._query_get_by_show, [show_tvdb_id, season, episode])
        show_episode: Optional[ShowEpisodeDetails] = cursor.fetchone()
        if show_episode and subtitles:
            show_episode.subtitles = ShowEpisodeSubtitlesDb(connection).get_show_episode_subtitles(show_episode.tvdb_id)
        connection.close()

        return show_episode

    def set_show_episode(self, show_episode: ShowEpisodeDetails, subtitles: bool = False) -> None:
        """Set a show episode.

        :param show_episode: the show episode
        :type show_episode: ShowEpisodeDetails
        :param subtitles: indication if subtitles must be set or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_set,
            [
                show_episode.tvdb_id,
                show_episode.show_tvdb_id,
                show_episode.title,
                show_episode.season,
                show_episode.episode,
                show_episode.path,
                to_text(show_episode.missing_languages),
            ],
        )
        if subtitles:
            ShowEpisodeSubtitlesDb(connection).set_show_episode_subtitles(show_episode.tvdb_id, show_episode.subtitles)
        connection.commit()
        connection.close()

    def update_show_episode(self, show_episode: ShowEpisodeDetails, subtitles: bool = False) -> None:
        """Update a show episode.

        :param show_episode: the show episode
        :type show_episode: ShowEpisodeDetails
        :param subtitles: indication if subtitles must be updated or not
        :type subtitles: bool
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_update,
            [
                show_episode.show_tvdb_id,
                show_episode.title,
                show_episode.season,
                show_episode.episode,
                show_episode.path,
                to_text(show_episode.missing_languages),
                show_episode.tvdb_id,
            ],
        )
        if subtitles:
            subtitles_db = ShowEpisodeSubtitlesDb(connection)
            subtitles_db.delete_show_episode_subtitles(show_episode.tvdb_id)
            subtitles_db.set_show_episode_subtitles(show_episode.tvdb_id, show_episode.subtitles)
        connection.commit()
        connection.close()

    def delete_show_episodes(self, show_tvdb_id: int, subtitles: bool = False) -> None:
        """Delete all show episodes by the show tvdb id.

        :param show_tvdb_id: the tvdb id of the show
        :type show_tvdb_id: int
        :param subtitles: indication if subtitles must be deleted or not
        :type subtitles: bool
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [show_tvdb_id])
        if subtitles:
            episodes = self.get_show_episodes(show_tvdb_id)
            for episode in episodes:
                ShowEpisodeSubtitlesDb(connection).delete_show_episode_subtitles(episode.tvdb_id)
        if not self.connection:
            connection.commit()
            connection.close()

    def flush_show_episodes(self, subtitles: bool = False) -> None:
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
    def __init__(self, connection: Connection = None) -> None:
        self.connection = connection

        self._query_get = 'SELECT * FROM show_episode_subtitles WHERE tvdb_id=?'
        self._query_set = 'INSERT INTO show_episode_subtitles VALUES (?,?,?,?)'
        self._query_delete = 'DELETE FROM show_episode_subtitles WHERE tvdb_id=?'
        self._query_delete_by_type = 'DELETE FROM show_episode_subtitles WHERE tvdb_id=? AND type=?'
        self._query_delete_by_path = 'DELETE FROM show_episode_subtitles WHERE tvdb_id=? AND path=?'
        self._query_flush = 'DELETE FROM show_episode_subtitles'

    def get_show_episode_subtitles(self, tvdb_id: int) -> List[Subtitle]:
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
        subtitles: List[Subtitle] = cursor.fetchall()
        if not self.connection:
            connection.close()

        return subtitles

    def set_show_episode_subtitles(self, tvdb_id: int, show_episode_subtitles: List[Subtitle]) -> None:
        """Set the subtitles of a show episode.

        :param tvdb_id: the tvdb id of the show episode
        :type tvdb_id: int
        :param show_episode_subtitles: the show episode subtitles
        :type show_episode_subtitles: list[Subtitle]
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        for show_subtitle in show_episode_subtitles:
            cursor.execute(self._query_set, [tvdb_id, show_subtitle.type, show_subtitle.language, show_subtitle.path])
        if not self.connection:
            connection.commit()
            connection.close()

    def delete_show_episode_subtitles(self, tvdb_id: int, type: Optional[SubtitleType] = None) -> None:
        """Delete the subtitles of a show episode.
        If a type is specified, only the specified type is deleted.

        :param tvdb_id: the tvdb id of the show episode
        :type tvdb_id: int
        :param type: the type of subtitle
        :type type: str
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        if type:
            cursor.execute(self._query_delete_by_type, [tvdb_id, type])
        else:
            cursor.execute(self._query_delete, [tvdb_id])
        if not self.connection:
            connection.commit()
            connection.close()

    def delete_show_episode_subtitle(self, tvdb_id: int, path: str) -> None:
        """Delete the subtitle of a show episode.

        :param tvdb_id: the tvdb id of the show episode
        :type tvdb_id: int
        :param path: the path of the subtitle
        :type imdb_id: str
        """
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete_by_path, [tvdb_id, path])
        if not self.connection:
            connection.commit()
            connection.close()

    def flush_show_episode_subtitles(self) -> None:
        """Flush all show episode subtitles."""
        connection = self.connection or sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_flush)
        if not self.connection:
            connection.commit()
            connection.close()


class ShowSettingsDb(object):
    def __init__(self) -> None:
        self._query_get = 'SELECT * FROM show_settings WHERE tvdb_id=?'
        self._query_set = 'INSERT INTO show_settings VALUES(?,?,?,?,?)'
        self._query_update = (
            'UPDATE show_settings SET wanted_languages=?, refine=?, hearing_impaired=?, '
            'utf8_encoding=? WHERE tvdb_id=?'
        )
        self._query_delete = 'DELETE FROM show_settings WHERE tvdb_id=?'

    def get_show_settings(self, tvdb_id: int) -> Optional[ShowSettings]:
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
        show_settings: Optional[ShowSettings] = cursor.fetchone()
        connection.close()

        return show_settings

    def set_show_settings(self, show_settings: ShowSettings) -> None:
        """Set the show settings.

        :param show_settings: the show settings
        :type show_settings: ShowSettings
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_set,
            [
                show_settings.tvdb_id,
                to_text(show_settings.wanted_languages),
                show_settings.refine,
                show_settings.hearing_impaired,
                show_settings.utf8_encoding,
            ],
        )
        connection.commit()
        connection.close()

    def update_show_settings(self, show_settings: ShowSettings) -> None:
        """Update show settings.

        :param show_settings: the show settings
        :type show_settings: ShowSettings
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(
            self._query_update,
            [
                to_text(show_settings.wanted_languages),
                show_settings.refine,
                show_settings.hearing_impaired,
                show_settings.utf8_encoding,
                show_settings.tvdb_id,
            ],
        )
        connection.commit()

    def delete_show_settings(self, tvdb_id: int) -> None:
        """Delete the show settings by its tvdb id.

        :param tvdb_id: the tvdb id
        :type tvdb_id: int
        """
        connection = sqlite3.connect(autosubliminal.DBFILE)
        cursor = connection.cursor()
        cursor.execute(self._query_delete, [tvdb_id])
        connection.commit()
        connection.close()
