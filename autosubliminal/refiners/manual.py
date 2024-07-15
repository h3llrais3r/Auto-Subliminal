# coding=utf-8

import logging
from typing import Any

from subliminal.video import Episode, Movie, Video

from autosubliminal.core.item import WantedItem
from autosubliminal.util.common import to_list

logger = logging.getLogger(__name__)


def refine(video: Video, wanted_item: WantedItem, **kwargs: Any) -> None:
    """Refine a video by using the manually altered data from the wanted_item.

    Based on subliminal.refiners

    For an episode video several :class:`~subliminal.video.Episode` attributes will be refined:

      * :attr:`~subliminal.video.Episode.series`
      * :attr:`~subliminal.video.Episode.year`
      * :attr:`~subliminal.video.Episode.season`
      * :attr:`~subliminal.video.Episode.episodes`
      * :attr:`~subliminal.video.Episode.source`
      * :attr:`~subliminal.video.Episode.resolution`
      * :attr:`~subliminal.video.Episode.video_codec`
      * :attr:`~subliminal.video.Episode.release_group`

    For a movie video several :class:`~subliminal.video.Movie` attributes will be refined:

      * :attr:`~subliminal.video.Movie.title`
      * :attr:`~subliminal.video.Movie.year`
      * :attr:`~subliminal.video.Movie.source`
      * :attr:`~subliminal.video.Movie.resolution`
      * :attr:`~subliminal.video.Movie.video_codec`
      * :attr:`~subliminal.video.Movie.release_group`

    """
    # skip non existing videos
    if not video.exists:
        return None

    # refine episode
    if isinstance(video, Episode):
        logger.info('Refining episode video with data from wanted_item')
        video.series = _get_video_attr(wanted_item.title, video.series)
        video.year = _get_video_attr(wanted_item.year, video.year)
        video.season = _get_video_attr(wanted_item.season, video.season)
        video.episodes = to_list(
            _get_video_attr(wanted_item.episode, video.episodes, allow_list=True), obj_type=int, default_value=[]
        )
        video.source = _get_video_attr(wanted_item.source, video.source)
        video.resolution = _get_video_attr(wanted_item.quality, video.resolution)
        video.video_codec = _get_video_attr(wanted_item.codec, video.video_codec)
        video.release_group = _get_video_attr(wanted_item.release_group, video.release_group)
        return None

    # refine movie
    if isinstance(video, Movie):
        logger.info('Refining movie video with data from wanted_item')
        video.title = _get_video_attr(wanted_item.title, video.title)
        video.year = _get_video_attr(wanted_item.year, video.year)
        video.source = _get_video_attr(wanted_item.source, video.source)
        video.resolution = _get_video_attr(wanted_item.quality, video.resolution)
        video.video_codec = _get_video_attr(wanted_item.codec, video.video_codec)
        video.release_group = _get_video_attr(wanted_item.release_group, video.release_group)
        return None


def _get_video_attr(attr: Any, default_attr: Any, allow_list: bool = False) -> Any:
    # If no list is allowed, take first element from the list if attr is a list
    if isinstance(attr, list) and len(attr) > 0:
        return attr if allow_list else attr[0]
    else:
        return attr if attr else default_attr
