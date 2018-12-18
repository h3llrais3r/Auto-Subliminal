# coding=utf-8

import logging

from dateutil import parser
from tvdb_api_v2.models.episode import Episode
from tvdb_api_v2.models.series import Series
from tvdb_api_v2.models.series_image_query_result import SeriesImageQueryResult
from tvdb_api_v2.models.series_search_result import SeriesSearchResult

from autosubliminal.util.common import to_dict, to_list, to_obj

log = logging.getLogger(__name__)


class ShowDetails(object):
    """ Show details class.

    Contains all the details of a show that are fetched from the indexer.
    """

    def __init__(self, path=None, tvdb_id=None, title=None, year=None, overview=None, poster=None, banner=None):
        self.path = path
        self.tvdb_id = tvdb_id
        self.title = title
        self.year = year
        self.overview = overview
        self.poster = poster
        self.banner = banner

    def set_attr(self, key, value):
        """Set an attribute.

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key):
            if key in ['tvdb_id', 'year']:
                # # Set as int
                setattr(self, key, to_obj(value, obj_type=int))
            else:
                # Use default value
                setattr(self, key, value)

    def to_json(self):
        """Convert to its json representation."""
        json_dict = to_dict(self, 'poster', 'banner')

        # Indicate if artwork is available or not
        json_dict['poster'] = True if self.poster else False
        json_dict['banner'] = True if self.banner else False

        return json_dict

    @classmethod
    def from_indexer(cls, obj, poster=None):
        """Construct a :class:`ShowDetails` object from the indexer object.

        :param obj: the indexer object
        :type obj: Series or SeriesSearchResult
        :param poster: the poster image object
        :type poster: SeriesImageQueryResult or None
        :return: the :class:`ShowDetails` object or None
        :rtype: ShowDetails or None
        """
        poster_file_name = None
        if poster and isinstance(poster, SeriesImageQueryResult):
            poster_file_name = poster.file_name
        if obj:
            if isinstance(obj, Series):
                return cls(tvdb_id=obj.id,
                           title=obj.series_name,
                           year=parser.parse(obj.first_aired).year,
                           overview=obj.overview,
                           poster=poster_file_name,
                           banner=obj.banner)
            elif isinstance(obj, SeriesSearchResult):
                return cls(tvdb_id=obj.id,
                           title=obj.series_name,
                           year=parser.parse(obj.first_aired).year,
                           overview=obj.overview,
                           poster=poster_file_name,
                           banner=obj.banner)
        else:
            return None


class ShowEpisodeDetails(object):
    """ Show episode details class.

    Contains all the details of an episode of a show that are fetched from the indexer.
    """

    def __init__(self, path=None, tvdb_id=None, show_tvdb_id=None, title=None, season=None, episode=None,
                 available_languages=None, missing_languages=None):
        self.path = path
        self.tvdb_id = tvdb_id
        self.show_tvdb_id = show_tvdb_id
        self.title = title
        self.season = season
        self.episode = episode
        self.available_languages = available_languages or []
        self.missing_languages = missing_languages or []

    @property
    def available(self):
        """Indicates if the show episode is available on disk."""
        return self.path is not None

    def set_attr(self, key, value):
        """Set an attribute.

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key):
            if key in ['tvdb_id', 'show_tvdb_id' 'year']:
                # # Set as int
                setattr(self, key, to_obj(value, obj_type=int))
            elif key in ['available_languages', 'missing_languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value))
            else:
                # Use default value
                setattr(self, key, value)

    @classmethod
    def from_indexer(cls, obj):
        """Construct a :class:`ShowEpisodeDetails` object from the indexer object.

        :param obj: the indexer object
        :type obj: Episode
        :return: the :class:`ShowEpisodeDetails` object or None
        :rtype: ShowEpisodeDetails or None
        """
        if obj:
            if isinstance(obj, Episode):
                return cls(tvdb_id=obj.id,
                           show_tvdb_id=obj.series_id,  # FIXME: the series_id is returned as str instead of int?!
                           title=obj.episode_name,
                           season=obj.aired_season,
                           episode=obj.aired_episode_number)
        else:
            return None


class ShowSettings(object):
    """ Show settings class.

    Contains all the settings for a show.
    """

    def __init__(self, tvdb_id=None, languages=None, refine=None, hearing_impaired=None, utf8_encoding=None):
        self.tvdb_id = tvdb_id
        self.languages = languages
        self.refine = refine
        self.hearing_impaired = hearing_impaired
        self.utf8_encoding = utf8_encoding

    def set_attr(self, key, value):
        """Set an attribute.

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key):
            if key in ['tvdb_id']:
                # # Set as int
                setattr(self, key, to_obj(value, obj_type=int))
            elif key in ['languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value))
            elif key in ['refine', 'hearing_impaired', 'utf8_encoding']:
                # Set as bool
                setattr(self, key, to_obj(value, obj_type=bool))
            else:
                # Use default value
                setattr(self, key, value)
