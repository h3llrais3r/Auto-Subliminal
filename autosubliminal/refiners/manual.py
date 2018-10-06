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
      * :attr:`~subliminal.video.Episode.format`
      * :attr:`~subliminal.video.Episode.resolution`
      * :attr:`~subliminal.video.Episode.video_codec`
      * :attr:`~subliminal.video.Episode.release_group`

    For a movie video several :class:`~subliminal.video.Movie` attributes will be refined:

      * :attr:`~subliminal.video.Movie.title`
      * :attr:`~subliminal.video.Movie.year`
      * :attr:`~subliminal.video.Movie.format`
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
        video.series = wanted_item.title if wanted_item.title else video.series
        video.year = int(wanted_item.year) if wanted_item.year else video.year
        video.season = int(wanted_item.season) if wanted_item.season else video.season
        video.episode = int(wanted_item.episode) if wanted_item.episode else video.episode
        video.format = wanted_item.source if wanted_item.source else video.format
        video.resolution = wanted_item.quality if wanted_item.quality else video.resolution
        video.video_codec = wanted_item.codec if wanted_item.codec else video.video_codec
        video.release_group = wanted_item.releasegrp if wanted_item.releasegrp else video.release_group
        return

    # refine movie
    if isinstance(video, Movie):
        logger.info('Refining movie video with data from wanted_item')
        video.title = wanted_item.title if wanted_item.title else video.title
        video.year = int(wanted_item.year) if wanted_item.year else video.year
        video.format = wanted_item.source if wanted_item.source else video.format
        video.resolution = wanted_item.quality if wanted_item.quality else video.resolution
        video.video_codec = wanted_item.codec if wanted_item.codec else video.video_codec
        video.release_group = wanted_item.releasegrp if wanted_item.releasegrp else video.release_group
        return
