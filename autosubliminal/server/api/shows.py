# coding=utf-8

import logging
import os

import cherrypy

from autosubliminal.core.subtitle import Subtitle, EMBEDDED, HARDCODED
from autosubliminal.db import ShowDetailsDb, ShowEpisodeDetailsDb, ShowEpisodeSubtitlesDb, ShowSettingsDb
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import natural_keys
from autosubliminal.util.common import get_wanted_languages
from autosubliminal.util.filesystem import save_hardcoded_subtitle_languages

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
        self.subtitles = _SubtitlesApi()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self, tvdb_id=None):
        """Get the list of shows or the details of a single show."""
        if tvdb_id:
            db_show = ShowDetailsDb().get_show(tvdb_id)
            db_show_settings = ShowSettingsDb().get_show_settings(tvdb_id)
            return self._to_show_json(db_show, db_show_settings, details=True)
        else:
            shows = []
            show_settings_db = ShowSettingsDb()
            db_shows = ShowDetailsDb().get_all_shows()
            for db_show in db_shows:
                db_show_settings = show_settings_db.get_show_settings(db_show.tvdb_id)
                shows.append(self._to_show_json(db_show, db_show_settings))
            return shows

    def _to_show_json(self, show, show_settings, details=False):
        show_json = show.to_json()

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
        show_json['wanted_languages'] = wanted_languages
        show_json['total_subtitles_wanted'] = total_subtitles_wanted
        show_json['total_subtitles_missing'] = total_subtitles_missing
        show_json['total_subtitles_available'] = total_subtitles_available
        show_json['settings'] = show_settings.to_json()

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
        wanted_languages = get_wanted_languages()
        shows = ShowDetailsDb().get_all_shows()
        total_shows = len(shows)

        total_episodes = 0
        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        show_details_db = ShowEpisodeDetailsDb()
        for show in shows:
            show_episodes = show_details_db.get_show_episodes(show.tvdb_id, available_only=True, subtitles=False)
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
            'total_subtitles_available': total_subtitles_available
        }


class _SubtitlesApi(RestResource):
    """
    Rest resource for handling the /api/shows/subtitles path.
    """

    def __init__(self):
        super(_SubtitlesApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ()

        # Add all sub paths here: /api/shows/subtitles/...
        self.hardcoded = _HardcodedApi()


class _HardcodedApi(RestResource):
    """
    Rest resource for handling the /api/shows/subtitles/hardcoded path.
    """

    def __init__(self):
        super(_HardcodedApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('POST',)

    def post(self):
        """Save the list of hardcoded subtitles for a show episode file."""
        saved = False
        input_json = cherrypy.request.json

        if all(k in input_json for k in ('tvdb_id', 'file_location', 'file_name', 'languages')):
            # Save to file
            tvdb_id = input_json['tvdb_id']
            file_location = input_json['file_location']
            file_name = input_json['file_name']
            languages = input_json['languages']
            save_hardcoded_subtitle_languages(file_location, file_name, languages)

            # Update in db
            subtitles = []
            for language in languages:
                subtitles.append(Subtitle(HARDCODED, language, path=os.path.join(file_location, file_name)))
            subtitles_db = ShowEpisodeSubtitlesDb()
            subtitles_db.delete_show_episode_subtitles(tvdb_id)
            subtitles_db.set_show_episode_subtitles(tvdb_id, subtitles)

            saved = True

        return saved
