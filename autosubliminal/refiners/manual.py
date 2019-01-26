# coding=utf-8

import logging

from subliminal.video import Episode, Movie

logger = logging.getLogger(__name__)


def refine(video, wanted_item, **kwargs):
    """Refine a video by using the manually altered data from the wanted_item.

    Based on subliminal.refiners

    For an episode video several :class:`~subliminal.video.Episode` attributes will be refined:

      * :attr:`~subliminal.video.Episode.series`
      * :attr:`~subliminal.video.Episode.year`
      * :attr:`~subliminal.video.Episode.season`
      * :attr:`~subliminal.video.Episode.episode`
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
        return

    # refine episode
    if isinstance(video, Episode):
        logger.info('Refining episode video with data from wanted_item')
        video.series = _get_video_attr(wanted_item.title, video.series)
        video.year = _get_video_attr(wanted_item.year, video.year)
        video.season = _get_video_attr(wanted_item.season, video.season)
        video.episode = _get_video_attr(wanted_item.episode, video.episode)
        video.source = _get_video_attr(wanted_item.source, video.source)
        video.resolution = _get_video_attr(wanted_item.quality, video.resolution)
        video.video_codec = _get_video_attr(wanted_item.codec, video.video_codec)
        video.release_group = _get_video_attr(wanted_item.releasegrp, video.release_group)
        return

    # refine movie
    if isinstance(video, Movie):
        logger.info('Refining movie video with data from wanted_item')
        video.title = _get_video_attr(wanted_item.title, video.title)
        video.year = _get_video_attr(wanted_item.year, video.year)
        video.source = _get_video_attr(wanted_item.source, video.source)
        video.resolution = _get_video_attr(wanted_item.quality, video.resolution)
        video.video_codec = _get_video_attr(wanted_item.codec, video.video_codec)
        video.release_group = _get_video_attr(wanted_item.releasegrp, video.release_group)
        return


def _get_video_attr(attr, default_attr):
    # Video can only work with single values, so take first element from the list if attr is a list
    if isinstance(attr, list) and len(attr) > 0:
        return attr[0]
    else:
        return attr if attr else default_attr
