# coding=utf-8

import logging

import autosubliminal
from autosubliminal.db import ShowDetailsDb, ShowEpisodeDetailsDb

from autosubliminal.server.rest import RestResource

log = logging.getLogger(__name__)


class ShowsApi(RestResource):
    """
    Rest resource for handling the /shows path.
    """

    def __init__(self):
        super(ShowsApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Get the list of shows."""
        result = []

        subtitles_wanted = []
        if autosubliminal.DEFAULTLANGUAGE:
            subtitles_wanted.append(autosubliminal.DEFAULTLANGUAGE)
        if autosubliminal.ADDITIONALLANGUAGES:
            subtitles_wanted.extend(autosubliminal.ADDITIONALLANGUAGES)

        shows = ShowDetailsDb().get_all_shows()
        for show in shows:
            total_subtitles_needed = 0
            total_subtitles_available = 0
            total_subtitles_missing = 0

            episodes = ShowEpisodeDetailsDb().get_show_episodes(show.tvdb_id)
            for episode in episodes:
                if episode.available:
                    total_subtitles_needed += len(subtitles_wanted)
                    total_subtitles_available += len(episode.available_languages)
                    total_subtitles_missing += len(episode.missing_languages)

            show_json = show.to_json()
            show_json['subtitles_wanted'] = subtitles_wanted
            show_json['total_subtitles_needed'] = total_subtitles_needed
            show_json['total_subtitles_available'] = total_subtitles_available
            show_json['total_subtitles_missing'] = total_subtitles_missing

            result.append(show_json)

        return result
