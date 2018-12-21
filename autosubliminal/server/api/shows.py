# coding=utf-8

import logging

import cherrypy

import autosubliminal
from autosubliminal.db import ShowDetailsDb, ShowEpisodeDetailsDb
from autosubliminal.util.filesystem import get_show_files

from autosubliminal.server.rest import RestResource

log = logging.getLogger(__name__)


@cherrypy.popargs('tvdb_id')
class ShowsApi(RestResource):
    """
    Rest resource for handling the /shows path.
    """

    def __init__(self):
        super(ShowsApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self, tvdb_id=None):
        """Get the list of shows or the details of a single show."""
        # Get wanted subtitles
        wanted_languages = []
        if autosubliminal.DEFAULTLANGUAGE:
            wanted_languages.append(autosubliminal.DEFAULTLANGUAGE)
        if autosubliminal.ADDITIONALLANGUAGES:
            wanted_languages.extend(autosubliminal.ADDITIONALLANGUAGES)

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

        # Calculate totals based on available episodes
        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        episodes = ShowEpisodeDetailsDb().get_show_episodes(show.tvdb_id)
        for episode in episodes:
            if episode.available:
                total_subtitles_wanted += len(wanted_languages)
                total_subtitles_available += len(episode.available_languages)
                total_subtitles_missing += len(episode.missing_languages)

        show_json['wanted_languages'] = wanted_languages
        show_json['total_subtitles_wanted'] = total_subtitles_wanted
        show_json['total_subtitles_available'] = total_subtitles_available
        show_json['total_subtitles_missing'] = total_subtitles_missing

        if details:
            show_json['files'] = get_show_files(show.path)

        return show_json
