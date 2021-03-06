# coding=utf-8

import logging
import os

import cherrypy

from autosubliminal.core.show import ShowSettings
from autosubliminal.core.subtitle import Subtitle, EMBEDDED, HARDCODED
from autosubliminal.db import FailedShowsDb, ShowDetailsDb, ShowEpisodeDetailsDb, ShowEpisodeSubtitlesDb, \
    ShowSettingsDb, WantedItemsDb
from autosubliminal.libraryscanner import LibraryPathScanner
from autosubliminal.server.rest import RestResource, NotFound
from autosubliminal.util.common import natural_keys
from autosubliminal.util.common import get_boolean
from autosubliminal.util.filesystem import save_hardcoded_subtitle_languages
from autosubliminal.util.websocket import send_websocket_notification

log = logging.getLogger(__name__)


@cherrypy.popargs('tvdb_id')
class ShowsApi(RestResource):
    """
    Rest resource for handling the /api/shows path.
    """

    def __init__(self):
        super(ShowsApi, self).__init__()

        # Add all sub paths here: /api/shows/...
        self.overview = _OverviewApi()
        self.refresh = _RefreshApi()
        self.settings = _SettingsApi()
        self.subtitles = _SubtitlesApi()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'DELETE')

    def get(self, tvdb_id=None):
        """Get the list of shows or the details of a single show."""
        if tvdb_id:
            db_show = ShowDetailsDb().get_show(tvdb_id)
            db_show_settings = ShowSettingsDb().get_show_settings(tvdb_id)

            # Return NotFound if movie does not longer exists on disk
            if not os.path.exists(db_show.path):
                raise NotFound()

            # Return show details
            return self._to_show_json(db_show, db_show_settings, details=True)

        else:
            shows = []
            show_settings_db = ShowSettingsDb()
            db_shows = ShowDetailsDb().get_all_shows()
            for db_show in db_shows:
                db_show_settings = show_settings_db.get_show_settings(db_show.tvdb_id)
                shows.append(self._to_show_json(db_show, db_show_settings))

            return shows

    def delete(self, tvdb_id):
        # Delete from database
        ShowDetailsDb().delete_show(tvdb_id, episodes=True, subtitles=True)
        ShowSettingsDb().delete_show_settings(tvdb_id)

        return self._no_content()

    def _to_show_json(self, show, show_settings, details=False):
        show_json = show.to_json()
        show_json['settings'] = show_settings.to_json()

        # Calculate totals based on available episodes
        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        wanted_languages = show_settings.wanted_languages
        episodes = ShowEpisodeDetailsDb().get_show_episodes(show.tvdb_id, available_only=True, subtitles=details)
        for episode in episodes:
            total_subtitles_wanted += len(wanted_languages)
            total_subtitles_missing += len(episode.missing_languages)
            total_subtitles_available += len(wanted_languages) - len(episode.missing_languages)
        show_json['total_subtitles_wanted'] = total_subtitles_wanted
        show_json['total_subtitles_missing'] = total_subtitles_missing
        show_json['total_subtitles_available'] = total_subtitles_available

        if details:
            show_json['files'] = self._get_show_episode_files(episodes)

        return show_json

    def _get_show_episode_files(self, show_episodes):
        # Show episode files are supposed to be stored in individual season dirs or the root dir only
        files = {}

        # Create episode dict, grouped by season
        season_episodes = {}
        for episode in show_episodes:
            if episode.season in season_episodes:
                season_episodes[episode.season].append(episode)
            else:
                season_episodes.update({episode.season: [episode]})

        for season in season_episodes.keys():
            season_files = []
            season_name = 'Season ' + season.zfill(2)
            season_path = None
            for episode in season_episodes[season]:
                # Determine season path
                if not season_path:
                    season_path, _ = os.path.split(episode.path)
                embedded_languages = []
                hardcoded_languages = []
                # Get subtitle files
                for subtitle in episode.subtitles:
                    if subtitle.type == EMBEDDED:
                        embedded_languages.append(subtitle.language)
                    elif subtitle.type == HARDCODED:
                        hardcoded_languages.append(subtitle.language)
                    else:
                        _, filename = os.path.split(subtitle.path)
                        season_files.append({'filename': filename, 'type': 'subtitle', 'language': subtitle.language})
                # Get video file
                _, episode_filename = os.path.split(episode.path)
                season_files.append(
                    {'filename': episode_filename, 'type': 'video', 'embedded_languages': embedded_languages,
                     'hardcoded_languages': hardcoded_languages, 'tvdb_id': episode.tvdb_id})
            # Sort season files
            if season_files:
                sorted_files = sorted(season_files, key=lambda k: k['filename'])
                files.update({season_name: {'path': season_path, 'files': sorted_files}})

        # Return sorted list of file dicts (grouped by season)
        return [{'season_name': k, 'season_path': files[k]['path'], 'season_files': files[k]['files']} for k in
                sorted(files.keys(), key=natural_keys)]


class _OverviewApi(RestResource):
    """
    Rest resource for handling the /api/shows/overview path.
    """

    def __init__(self):
        super(_OverviewApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        shows = ShowDetailsDb().get_all_shows()
        total_shows = len(shows)

        failed_shows = FailedShowsDb().get_failed_shows()

        total_episodes = 0
        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        show_settings_db = ShowSettingsDb()
        show_details_db = ShowEpisodeDetailsDb()
        for show in shows:
            show_settings = show_settings_db.get_show_settings(show.tvdb_id)
            show_episodes = show_details_db.get_show_episodes(show.tvdb_id, available_only=True, subtitles=False)
            wanted_languages = show_settings.wanted_languages
            for show_episode in show_episodes:
                total_episodes += 1
                total_subtitles_wanted += len(wanted_languages)
                total_subtitles_missing += len(show_episode.missing_languages)
                total_subtitles_available += len(wanted_languages) - len(show_episode.missing_languages)

        return {
            'total_shows': total_shows,
            'total_episodes': total_episodes,
            'total_subtitles_wanted': total_subtitles_wanted,
            'total_subtitles_missing': total_subtitles_missing,
            'total_subtitles_available': total_subtitles_available,
            'failed_shows': failed_shows
        }


class _RefreshApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/refresh path.
    """

    def __init__(self):
        super(_RefreshApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('PUT',)

    def put(self, tvdb_id):
        """Refresh/rescan a show."""
        show = ShowDetailsDb().get_show(tvdb_id)

        # Refresh/rescan the show path
        LibraryPathScanner().scan_path(show.path)

        return self._no_content()


class _SettingsApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/settings path.
    """

    def __init__(self):
        super(_SettingsApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'PUT')

    def get(self, tvdb_id):
        """Get the settings for a show"""
        show_settings_db = ShowSettingsDb()
        show_settings = show_settings_db.get_show_settings(tvdb_id)

        # If no settings are defined yet, use the default settings
        if not show_settings:
            show_settings = ShowSettings.default_settings(tvdb_id)
            show_settings_db.set_show_settings(show_settings)

        return show_settings.to_json()

    def put(self, tvdb_id):
        """Save the settings for a show."""
        input_json = cherrypy.request.json

        if all(k in input_json for k in ('wanted_languages', 'refine', 'hearing_impaired', 'utf8_encoding')):
            wanted_languages = input_json['wanted_languages']
            refine = get_boolean(input_json['refine'])
            hearing_impaired = get_boolean(input_json['hearing_impaired'])
            utf8_encoding = get_boolean(input_json['utf8_encoding'])

            # Update settings
            db = ShowSettingsDb()
            show_settings = db.get_show_settings(tvdb_id)
            show_settings.wanted_languages = wanted_languages
            show_settings.refine = refine
            show_settings.hearing_impaired = hearing_impaired
            show_settings.utf8_encoding = utf8_encoding
            db.update_show_settings(show_settings)

            # Delete wanted items for the show so the new settings will be used in the next disk scan
            WantedItemsDb().delete_wanted_items_for_show(tvdb_id)

            # Send notification
            send_websocket_notification('Settings will be applied on next disk scan.')

            return self._no_content()

        return self._bad_request('Missing data')


class _SubtitlesApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/subtitles path.
    """

    def __init__(self):
        super(_SubtitlesApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ()

        # Add all sub paths here: /api/shows/subtitles/...
        self.hardcoded = _HardcodedApi()


@cherrypy.popargs('episode_tvdb_id')
class _HardcodedApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/subtitles/hardcoded path.
    """

    def __init__(self):
        super(_HardcodedApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('PUT',)

    def put(self, tvdb_id, episode_tvdb_id):
        """Save the list of hardcoded subtitles for a show episode file."""
        input_json = cherrypy.request.json

        if all(k in input_json for k in ('file_location', 'file_name', 'languages')):
            # Save to file
            file_location = input_json['file_location']
            file_name = input_json['file_name']
            languages = input_json['languages']
            save_hardcoded_subtitle_languages(file_location, file_name, languages)

            # Update in db
            subtitles = []
            for language in languages:
                subtitles.append(Subtitle(HARDCODED, language, path=os.path.join(file_location, file_name)))
            subtitles_db = ShowEpisodeSubtitlesDb()
            subtitles_db.delete_show_episode_subtitles(episode_tvdb_id)
            subtitles_db.set_show_episode_subtitles(episode_tvdb_id, subtitles)

            return self._no_content()

        return self._bad_request('Missing data')
