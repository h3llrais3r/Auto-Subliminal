# coding=utf-8

import logging

import cherrypy

import autosubliminal
from autosubliminal.db import ShowDetailsDb, ShowEpisodeDetailsDb
from autosubliminal.util.filesystem import get_show_files, save_hardcoded_subtitle_languages

from autosubliminal.server.rest import RestResource

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

        # Get wanted subtitles
        wanted_languages = _get_wanted_languages()

        # Fetch show(s)
        if tvdb_id:
            db_show = ShowDetailsDb().get_show(tvdb_id)
            return self._to_show_json(db_show, wanted_languages, details=True)
        else:
            shows = []
            db_shows = ShowDetailsDb().get_all_shows()
            for show in db_shows:
                shows.append(self._to_show_json(show, wanted_languages))
            return shows

    def _to_show_json(self, show, wanted_languages, details=False):
        show_json = show.to_json()
        embedded_subtitles = {}

        # Calculate totals based on available episodes
        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        episodes = ShowEpisodeDetailsDb().get_show_episodes(show.tvdb_id)
        for episode in episodes:
            if episode.available:
                total_subtitles_wanted += len(wanted_languages)
                total_subtitles_available += len(
                    _get_available_wanted_languages(wanted_languages, episode.available_languages))
                total_subtitles_missing += len(episode.missing_languages)
                # Keep track of episodes with embedded subtitles
                if episode.embedded_languages:
                    embedded_subtitles[episode.path] = episode.embedded_languages

        show_json['wanted_languages'] = wanted_languages
        show_json['total_subtitles_wanted'] = total_subtitles_wanted
        show_json['total_subtitles_available'] = total_subtitles_available
        show_json['total_subtitles_missing'] = total_subtitles_missing

        if details:
            show_json['files'] = get_show_files(show.path, embedded_subtitles)

        return show_json


class _OverviewApi(RestResource):
    """
    Rest resource for handling the /api/shows/overview path.
    """

    def __init__(self):
        super(_OverviewApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        wanted_languages = _get_wanted_languages()
        shows = ShowDetailsDb().get_all_shows()
        total_shows = len(shows)

        total_episodes = 0
        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        show_details_db = ShowEpisodeDetailsDb()
        for show in shows:
            show_episodes = show_details_db.get_show_episodes(show.tvdb_id)
            for episode in [e for e in show_episodes if e.available]:
                total_episodes += 1
                total_subtitles_wanted += len(wanted_languages)
                total_subtitles_available += len(
                    _get_available_wanted_languages(wanted_languages, episode.available_languages))
                total_subtitles_missing += len(episode.missing_languages) if episode.missing_languages else 0

        return {
            'total_shows': total_shows,
            'total_episodes': total_episodes,
            'total_subtitles_wanted': total_subtitles_wanted,
            'total_subtitles_available': total_subtitles_available,
            'total_subtitles_missing': total_subtitles_missing
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
        if 'file_location' in input_json and 'file_name' in input_json and 'languages' in input_json:
            file_location = input_json['file_location']
            file_name = input_json['file_name']
            languages = input_json['languages']
            save_hardcoded_subtitle_languages(file_location, file_name, languages)
            saved = True

        return saved


def _get_wanted_languages():
    wanted_languages = []
    if autosubliminal.DEFAULTLANGUAGE:
        wanted_languages.append(autosubliminal.DEFAULTLANGUAGE)
    if autosubliminal.ADDITIONALLANGUAGES:
        wanted_languages.extend(autosubliminal.ADDITIONALLANGUAGES)

    return wanted_languages


def _get_available_wanted_languages(wanted_languages, available_languages):
    if available_languages:
        return [l for l in available_languages if l in wanted_languages]
    else:
        return []
