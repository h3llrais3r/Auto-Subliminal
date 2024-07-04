# coding=utf-8

import logging
import os
from typing import Any, Dict, List, Union

import cherrypy

import autosubliminal
from autosubliminal.core.show import ShowDetails, ShowEpisodeDetails, ShowSettings
from autosubliminal.core.subtitle import Subtitle, get_missing_subtitle_languages
from autosubliminal.db import (
    FailedShowsDb,
    ShowDetailsDb,
    ShowEpisodeDetailsDb,
    ShowEpisodeSubtitlesDb,
    ShowSettingsDb,
    WantedItemsDb,
)
from autosubliminal.libraryscanner import LibraryPathScanner
from autosubliminal.server.rest import NotFound, RestResource
from autosubliminal.util.common import camelize, decamelize, find_path_in_paths, get_boolean, natural_keys, to_dict
from autosubliminal.util.filesystem import save_hardcoded_subtitle_languages

log = logging.getLogger(__name__)


@cherrypy.popargs('tvdb_id')
class ShowsApi(RestResource):
    """
    Rest resource for handling the /api/shows path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/shows/...
        self.overview = _OverviewApi()
        self.refresh = _RefreshApi()
        self.settings = _SettingsApi()
        self.episodes = _EpisodesApi()

        # Set the allowed methods
        self.allowed_methods = ['GET', 'DELETE']

    def get(self, tvdb_id: str = None) -> Union[List[Dict[str, Any]], Dict[str, Any]]:
        """Get the list of shows or the details of a single show."""
        if tvdb_id:
            db_show = ShowDetailsDb().get_show(int(tvdb_id))
            db_show_settings = ShowSettingsDb().get_show_settings(int(tvdb_id))

            # Return NotFound if movie does not longer exists on disk
            if not os.path.exists(db_show.path):
                raise NotFound()

            # Return show details
            return self._to_show_dict(db_show, db_show_settings, details=True)

        else:
            shows = []
            show_settings_db = ShowSettingsDb()
            db_shows = ShowDetailsDb().get_all_shows()
            for db_show in db_shows:
                db_show_settings = show_settings_db.get_show_settings(db_show.tvdb_id)
                shows.append(self._to_show_dict(db_show, db_show_settings))

            return shows

    def delete(self, tvdb_id: str) -> None:
        # Delete from database
        ShowDetailsDb().delete_show(int(tvdb_id), episodes=True, subtitles=True)
        ShowSettingsDb().delete_show_settings(int(tvdb_id))

        self._set_no_content_status()
        return None

    def _to_show_dict(self, show: ShowDetails, show_settings: ShowSettings, details: bool = False) -> Dict[str, Any]:
        # Check if the show path is listed in the video paths to scan
        path_in_video_paths = True if find_path_in_paths(show.path, autosubliminal.VIDEOPATHS,
                                                         check_common_path=True) else False

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

        # Set kwargs to include in json
        include_kwargs = {
            'settings': show_settings.to_dict(camelize),
            'path_in_video_paths': path_in_video_paths,
            'total_subtitles_wanted': total_subtitles_wanted,
            'total_subtitles_available': total_subtitles_available,
            'total_subtitles_missing': total_subtitles_missing
        }

        # Add details if needed
        if details:
            include_kwargs['seasons'] = self._get_show_season_files(episodes)

        return show.to_dict(camelize, **include_kwargs)

    def _get_show_season_files(self, show_episodes: List[ShowEpisodeDetails]) -> List[Dict[str, Any]]:
        # Show season files are supposed to be stored in individual season dirs or the root dir only
        seasons: Dict[str, Any] = {}

        # Create episode dict, grouped by season
        season_episodes: Dict[str, List[ShowEpisodeDetails]] = {}
        for episode in show_episodes:
            if episode.season in season_episodes:
                season_episodes[str(episode.season)].append(episode)
            else:
                season_episodes.update({str(episode.season): [episode]})

        for season in season_episodes.keys():
            season_files: List[Dict[str, Any]] = []
            season_name = 'Season ' + season.zfill(2)
            season_path: str = None
            for episode in season_episodes[season]:
                # Determine season path
                season_path, _ = os.path.split(episode.path)
                embedded_languages: List[str] = []
                hardcoded_languages: List[str] = []
                # Get subtitle files
                for subtitle in episode.subtitles:
                    if subtitle.type == 'embedded':
                        embedded_languages.append(subtitle.language)
                    elif subtitle.type == 'hardcoded':
                        hardcoded_languages.append(subtitle.language)
                    else:
                        subtitle_filepath, subtitle_filename = os.path.split(subtitle.path)
                        season_files.append(
                            {'file_path': subtitle_filepath, 'file_name': subtitle_filename, 'type': 'subtitle',
                             'language': subtitle.language, 'tvdb_id': episode.tvdb_id})
                # Get video file
                episode_filepath, episode_filename = os.path.split(episode.path)
                season_files.append(
                    {'file_path': episode_filepath, 'file_name': episode_filename, 'type': 'video',
                     'embedded_languages': embedded_languages, 'hardcoded_languages': hardcoded_languages,
                     'tvdb_id': episode.tvdb_id})
            # Sort season files
            if season_files:
                sorted_files = sorted(season_files, key=lambda k: str(k['file_name']))
                seasons.update({season_name: {'path': season_path, 'files': sorted_files}})

        # Return sorted list of file dicts (grouped by season)
        return [{'season_name': k, 'season_path': seasons[k]['path'], 'files': seasons[k]['files']} for k in
                sorted(seasons.keys(), key=natural_keys)]


class _OverviewApi(RestResource):
    """
    Rest resource for handling the /api/shows/overview path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self) -> Dict[str, Any]:
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

        overview = {
            'total_shows': total_shows,
            'total_episodes': total_episodes,
            'total_subtitles_wanted': total_subtitles_wanted,
            'total_subtitles_missing': total_subtitles_missing,
            'total_subtitles_available': total_subtitles_available,
            'failed_shows': failed_shows
        }

        return to_dict(overview, camelize)


class _RefreshApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/refresh path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['PUT']

    def put(self, tvdb_id: str) -> None:
        """Refresh/rescan a show."""
        show = ShowDetailsDb().get_show(int(tvdb_id))

        # Refresh/rescan the show path
        LibraryPathScanner().scan_path(show.path)

        self._set_no_content_status()
        return None


class _SettingsApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/settings path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self, tvdb_id: str) -> Dict[str, Any]:
        """Get the settings for a show"""
        show_settings_db = ShowSettingsDb()
        show_settings = show_settings_db.get_show_settings(int(tvdb_id))

        # If no settings are defined yet, use the default settings
        if not show_settings:
            show_settings = ShowSettings.default_settings(int(tvdb_id))
            show_settings_db.set_show_settings(show_settings)

        return show_settings.to_dict(camelize)

    def put(self, tvdb_id: str) -> None:
        """Save the settings for a show."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if all(k in input_dict for k in ('wanted_languages', 'refine', 'hearing_impaired', 'utf8_encoding')):
            wanted_languages = input_dict['wanted_languages']
            refine = get_boolean(input_dict['refine'])
            hearing_impaired = get_boolean(input_dict['hearing_impaired'])
            utf8_encoding = get_boolean(input_dict['utf8_encoding'])

            # Update settings
            db = ShowSettingsDb()
            show_settings = db.get_show_settings(int(tvdb_id))
            show_settings.wanted_languages = wanted_languages
            show_settings.refine = refine
            show_settings.hearing_impaired = hearing_impaired
            show_settings.utf8_encoding = utf8_encoding
            db.update_show_settings(show_settings)

            # Delete wanted items for the show so the new settings will be used in the next disk scan
            WantedItemsDb().delete_wanted_items_for_show(int(tvdb_id))

            self._set_no_content_status()
            return None

        self._raise_bad_request('Missing data')


@cherrypy.popargs('episode_tvdb_id')
class _EpisodesApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/episodes path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/shows/{tvdb_id}/episodes/...
        self.subtitles = _SubtitlesApi()


class _SubtitlesApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/episodes/{episode_tvdb_id}/subtitles path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/shows/{tvdb_id}/{episode_tvdb_id}/subtitles/...
        self.hardcoded = _HardcodedApi()

        # Set the allowed methods
        self.allowed_methods = ['PATCH']

    def patch(self, tvdb_id: str, episode_tvdb_id: str) -> None:
        """Patch actions related to show episode subtitles."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if 'action' in input_dict:
            action = input_dict['action']

            # Delete a subtitle
            if action == 'delete' and 'subtitle_path' in input_dict:
                # Delete file
                try:
                    subtitle_path = input_dict['subtitle_path']
                    os.remove(subtitle_path)
                except Exception:
                    self._raise_conflict('Unable to delete the subtitle')

                # Remove from subtitles
                ShowEpisodeSubtitlesDb().delete_show_episode_subtitle(int(episode_tvdb_id), subtitle_path)

                # Update missing languages
                show_episode_details_db = ShowEpisodeDetailsDb()
                db_show_episode = show_episode_details_db.get_show_episode(int(episode_tvdb_id), subtitles=True)
                db_show_settings = ShowSettingsDb().get_show_settings(int(tvdb_id))
                db_show_episode.missing_languages = get_missing_subtitle_languages(db_show_episode.subtitles,
                                                                                   db_show_settings.wanted_languages)
                show_episode_details_db.update_show_episode(db_show_episode)

                self._set_no_content_status()
                return None

            self._raise_bad_request('Invalid action \'%s\'' % action)

        self._raise_bad_request('Missing data')


class _HardcodedApi(RestResource):
    """
    Rest resource for handling the /api/shows/{tvdb_id}/episodes/{episode_tvdb_id}/subtitles/hardcoded path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['PUT']

    def put(self, tvdb_id: str, episode_tvdb_id: str) -> None:
        """Save the list of hardcoded subtitles for a show episode file."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if all(k in input_dict for k in ('file_location', 'file_name', 'languages')):
            # Save to file
            file_location = input_dict['file_location']
            file_name = input_dict['file_name']
            languages = input_dict['languages']
            save_hardcoded_subtitle_languages(file_location, file_name, languages)

            # Update subtitles
            subtitles: List[Subtitle] = []
            for language in languages:
                subtitles.append(Subtitle('hardcoded', language, path=os.path.join(file_location, file_name)))
            subtitles_db = ShowEpisodeSubtitlesDb()
            subtitles_db.delete_show_episode_subtitles(int(episode_tvdb_id), type='hardcoded')
            subtitles_db.set_show_episode_subtitles(int(episode_tvdb_id), subtitles)

            # Update missing languages
            show_episode_details_db = ShowEpisodeDetailsDb()
            db_show_episode = show_episode_details_db.get_show_episode(int(episode_tvdb_id), subtitles=True)
            db_show_settings = ShowSettingsDb().get_show_settings(int(tvdb_id))
            db_show_episode.missing_languages = get_missing_subtitle_languages(db_show_episode.subtitles,
                                                                               db_show_settings.wanted_languages)
            show_episode_details_db.update_show_episode(db_show_episode)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Missing data')
