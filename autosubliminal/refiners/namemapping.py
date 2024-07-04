# coding=utf-8

import logging
from typing import Any

from subliminal.video import Episode, Movie, Video

from autosubliminal.util.mapping import (
    get_alternative_movie_name_mapping,
    get_alternative_show_name_mapping,
    get_movie_name_mapping,
    get_show_name_mapping,
)

logger = logging.getLogger(__name__)


def refine(video: Video, **kwargs: Any) -> None:
    """Refine a video by adding the custom name mappings.

    Based on subliminal.refiners

    For an episode video several :class:`~subliminal.video.Episode` attributes will be refined:

      * :attr:`~subliminal.video.Episode.alternative_series`
      * :attr:`~subliminal.video.Episode.series_tvdb_id`

    For a movie video several :class:`~subliminal.video.Movie` attributes will be refined:

      * :attr:`~subliminal.video.Movie.alternative_titles`
      * :attr:`~subliminal.video.Movie.imdb_id`

    """
    # skip non existing videos
    if not video.exists:
        return None

    # refine episode
    if isinstance(video, Episode):
        logger.info('Refining episode video with custom name mappings')
        video.alternative_series = (video.alternative_series or []) + (
            get_alternative_show_name_mapping(video.series) or [])
        video.series_tvdb_id = get_show_name_mapping(video.series) or video.series_tvdb_id
        return None

    # refine movie
    if isinstance(video, Movie):
        logger.info('Refining movie video with custom name mappings')
        video.alternative_titles = (video.alternative_titles or []) + (
            get_alternative_movie_name_mapping(video.title, video.year) or [])
        video.imdb_id = get_movie_name_mapping(video.title, video.year) or video.imdb_id
        return None
