import logging
from autosubliminal import utils

from subliminal.video import Episode, Movie

logger = logging.getLogger(__name__)


def refine(video, **kwargs):
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
        return

    # refine episode
    if isinstance(video, Episode):
        logger.info('Refining episode video with custom name mappings')
        video.alternative_series = (video.alternative_series or []) + (
            utils.get_alternative_show_name_mapping(video.series) or [])
        video.series_tvdb_id = utils.get_show_name_mapping(video.series) or video.series
        return

    # refine movie
    if isinstance(video, Movie):
        logger.info('Refining movie video with custom name mappings')
        video.alternative_titles = (video.alternative_titles or []) + (
            utils.get_alternative_movie_name_mapping(video.title) or [])
        video.imdb_id = utils.get_movie_name_mapping(video.title, video.year) or video.imdb_id
        return
