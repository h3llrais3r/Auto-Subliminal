# coding=utf-8

import logging
from typing import Any, Callable, Dict, List, Optional, Type, Union

from dateutil import parser
from tvdb_api.models.episode import Episode
from tvdb_api.models.series import Series
from tvdb_api.models.series_image_query_result import SeriesImageQueryResult
from tvdb_api.models.series_search_result import SeriesSearchResult
from tvdb_api.utils.artwork import get_artwork_url

import autosubliminal
from autosubliminal.core.subtitle import Subtitle
from autosubliminal.util.common import get_wanted_languages, to_dict, to_list, to_obj

log = logging.getLogger(__name__)


class ShowDetails(object):
    """Show details class.

    Contains all the details of a show that are fetched from the indexer.
    """

    def __init__(
        self,
        path: str = None,
        tvdb_id: int = None,
        title: str = None,
        year: int = None,
        overview: str = None,
        poster: str = None,
        banner: str = None,
    ) -> None:
        self.path = path
        self.tvdb_id = tvdb_id
        self.title = title
        self.year = year
        self.overview = overview
        self.poster = poster
        self.banner = banner

    def get_artwork_url(self, artwork_type: str, thumbnail: bool = False) -> Optional[str]:
        """Get the actual artwork url for download.

        Returns the url of the full size artwork or the thumbnail version.
        :param artwork_type: the artwork type
        :type artwork_type: str
        :param thumbnail: the indication to return the thumbnail version or not
        :type thumbnail: bool
        :return: the full artwork url
        :rtype: str or None
        """
        artwork_url: str = None
        artwork_name: str = getattr(self, artwork_type) if hasattr(self, artwork_type) else None
        if artwork_name:
            artwork_url = get_artwork_url(artwork_name, thumbnail=thumbnail)

        return artwork_url

    def set_attr(self, key: str, value: Any) -> None:
        """Set an attribute (ignore/skip @property attributes).

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key) and not hasattr(type(self), key):
            if key in ['tvdb_id', 'year']:
                # # Set as int
                setattr(self, key, to_obj(value, obj_type=int))
            else:
                # Use default value
                setattr(self, key, value)

    def to_dict(self, key_fn: Callable, *args: Any, **kwargs: Any) -> Dict[str, Any]:
        """Convert the object to its dict representation.

        :param key_fn: the function that is executed on the keys when creating the dict
        :type key_fn: function
        :param args: optional list of attributes not to include in the conversion
        :type args: tuple
        :param kwargs: optional dict with custom attributes to include in the conversion
        :type args: dict
        :return: the json dict
        :rtype: dict
        """
        # Define args to exclude
        exclude_args = ['poster', 'banner']
        if args:
            exclude_args.extend(list(args))

        # Define kwargs to include
        poster_available = True if self.poster else False  # indication if poster is available
        banner_available = True if self.banner else False  # indication if banner is available
        include_kwargs = {'poster': poster_available, 'banner': banner_available}
        if kwargs:
            include_kwargs.update(kwargs)

        # Convert to json dict
        return to_dict(self, key_fn, *exclude_args, **include_kwargs)

    @classmethod
    def from_indexer(
        cls: Type['ShowDetails'], obj: Union[Series, SeriesSearchResult], poster: SeriesImageQueryResult = None
    ) -> Optional['ShowDetails']:
        """Construct a :class:`ShowDetails` object from the indexer object.

        :param obj: the indexer object
        :type obj: Series or SeriesSearchResult
        :param poster: the poster image object
        :type poster: SeriesImageQueryResult or None
        :return: the :class:`ShowDetails` object or None
        :rtype: ShowDetails or None
        """
        poster_file_name: str = None
        if poster and isinstance(poster, SeriesImageQueryResult):
            poster_file_name = poster.file_name

        if obj:
            if isinstance(obj, Series):
                return cls(
                    tvdb_id=obj.id,
                    title=obj.series_name,
                    year=parser.parse(obj.first_aired).year,
                    overview=obj.overview,
                    poster=poster_file_name,
                    banner=obj.banner,
                )
            elif isinstance(obj, SeriesSearchResult):
                return cls(
                    tvdb_id=obj.id,
                    title=obj.series_name,
                    year=parser.parse(obj.first_aired).year,
                    overview=obj.overview,
                    poster=poster_file_name,
                    banner=obj.banner,
                )

        return None


class ShowEpisodeDetails(object):
    """Show episode details class.

    Contains all the details of an episode of a show that are fetched from the indexer.
    """

    def __init__(
        self,
        path: str = None,
        tvdb_id: int = None,
        show_tvdb_id: int = None,
        title: str = None,
        season: int = None,
        episode: int = None,
        missing_languages: List[str] = None,
        subtitles: List[Subtitle] = None,
    ) -> None:
        self.path = path
        self.tvdb_id = tvdb_id
        self.show_tvdb_id = show_tvdb_id
        self.title = title
        self.season = season
        self.episode = episode
        self.missing_languages = missing_languages or []
        self.subtitles = subtitles or []

    @property
    def available(self) -> bool:
        """Indicates if the show episode is available on disk."""
        return self.path is not None

    def set_attr(self, key: str, value: Any) -> None:
        """Set an attribute (ignore/skip @property attributes).

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: Any
        """
        if hasattr(self, key) and not hasattr(type(self), key):
            if key in ['tvdb_id', 'show_tvdb_id' 'year']:
                # # Set as int
                setattr(self, key, to_obj(value, obj_type=int))
            elif key in ['missing_languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value, default_value=[]))
            else:
                # Use default value
                setattr(self, key, value)

    @classmethod
    def from_indexer(cls: Type['ShowEpisodeDetails'], obj: Episode) -> Optional['ShowEpisodeDetails']:
        """Construct a :class:`ShowEpisodeDetails` object from the indexer object.

        :param obj: the indexer object
        :type obj: Episode
        :return: the :class:`ShowEpisodeDetails` object or None
        :rtype: ShowEpisodeDetails or None
        """
        if obj:
            if isinstance(obj, Episode):
                return cls(
                    tvdb_id=obj.id,
                    show_tvdb_id=obj.series_id,  # FIXME: the series_id is returned as str instead of int?!
                    title=obj.episode_name,
                    season=obj.aired_season,
                    episode=obj.aired_episode_number,
                )

        return None


class ShowSettings(object):
    """Show settings class.

    Contains all the settings for a show.
    """

    def __init__(
        self,
        tvdb_id: int = None,
        wanted_languages: List[str] = None,
        refine: bool = None,
        hearing_impaired: bool = None,
        utf8_encoding: bool = None,
    ) -> None:
        self.tvdb_id = tvdb_id
        self.wanted_languages = wanted_languages
        self.refine = refine
        self.hearing_impaired = hearing_impaired
        self.utf8_encoding = utf8_encoding

    def set_attr(self, key: str, value: Any) -> None:
        """Set an attribute (ignore/skip @property attributes).

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: Any
        """
        if hasattr(self, key) and not hasattr(type(self), key):
            if key in ['tvdb_id']:
                # # Set as int
                setattr(self, key, to_obj(value, obj_type=int))
            elif key in ['wanted_languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value, default_value=[]))
            elif key in ['refine', 'hearing_impaired', 'utf8_encoding']:
                # Set as bool
                setattr(self, key, to_obj(value, obj_type=bool))
            else:
                # Use default value
                setattr(self, key, value)

    def to_dict(self, key_fn: Callable, *args: Any, **kwargs: Any) -> Dict[str, Any]:
        """Convert the object to its dict representation.

        :param key_fn: the function that is executed on the keys when creating the dict
        :type key_fn: function
        :param args: optional list of attributes not to include in the conversion
        :type args: tuple
        :param kwargs: optional dict with custom attributes to include in the conversion
        :type args: dict
        :return: the json dict
        :rtype: dict
        """
        # Define args to exclude
        exclude_args = ['tvdb_id']
        if args:
            exclude_args.extend(list(args))

        # Define kwargs to include
        include_kwargs = {}
        if kwargs:
            include_kwargs.update(kwargs)

        # Convert to json dict
        return to_dict(self, key_fn, *exclude_args, **include_kwargs)

    @classmethod
    def default_settings(cls: Type['ShowSettings'], tvdb_id: int) -> 'ShowSettings':
        return cls(
            tvdb_id=tvdb_id,
            wanted_languages=get_wanted_languages(),
            refine=autosubliminal.REFINEVIDEO,
            hearing_impaired=autosubliminal.PREFERHEARINGIMPAIRED,
            utf8_encoding=autosubliminal.SUBTITLEUTF8ENCODING,
        )
