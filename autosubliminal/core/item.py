# coding=utf-8

import datetime
import logging
import os
import re
from abc import ABC
from typing import Any, Callable, Dict, List, Literal, Optional, Type, TypedDict, Union, cast

import babelfish
from subliminal.video import Video

import autosubliminal
from autosubliminal.core.subtitle import Subtitle
from autosubliminal.util.common import (find_path_in_paths, get_today, humanize_bytes, safe_str, to_dict, to_list,
                                        to_obj, to_obj_or_list)

# Release group regex
release_group_regex = re.compile(r'(.*)\[.*?\]')

log = logging.getLogger(__name__)

ItemType = Literal['episode', 'movie']

WantedItemSubtitles = TypedDict('WantedItemSubtitles', {
    'subtitles': List[Subtitle],
    'language': babelfish.Language,
    'single': bool}
)


class _BaseItem(ABC):
    """ Base item class.

    Represents a base item from which all item related class should extend.

    :param type: the parsed video type
    :type type: str
    :param title: the parsed video title
    :type title: str
    :param year: the parsed video year
    :type year: int
    :param season: the parsed video season
    :type season: int
    :param episode: the parsed video episode
    :type episode: int or list(int)
    :param source: the parsed video source
    :type source: str or list(str)
    :param quality: the parsed video quality
    :type quality: str
    :param codec: the parsed video codec
    :type codec: str or list(str)
    :param release_group: the parsed video release group
    :type release_group: str

    All equivalence functions are written based on:
    https://stackoverflow.com/questions/390250/elegant-ways-to-support-equivalence-equality-in-python-classes
    """

    # Keep list of default properties that should be excluded when converting to json for frontend
    # Typically these are generated properties, which can be generated from the default properties
    # This is to keep the data to be sent over the wire to a minimum
    exclude_props = ['exclude_props', 'is_episode', 'is_movie', 'name', 'long_name']

    def __init__(self, type: ItemType = None, title: str = None, year: int = None, season: int = None,
                 episode: Union[int, List[int]] = None, source: Union[str, List[str]] = None, quality: str = None,
                 codec: Union[str, List[str]] = None, release_group: str = None) -> None:
        # We need to trim the release group in some cases
        _release_group: str = release_group
        if release_group:
            # Remove release group provider (part between []) if present (f.e. KILLERS[rarbg])
            match = release_group_regex.match(release_group)
            if match:
                # Return first parenthesized group (=release group without [] part)
                _release_group = cast(str, match.group(1))

        self.id: int = None
        self.type = type
        self.title = title
        self.year = year
        self.season = season
        self.episode = episode
        self.source = source
        self.quality = quality
        self.codec = codec
        self.release_group = _release_group
        self.tvdb_id: Optional[int] = None
        self.imdb_id: Optional[str] = None

    @property
    def is_episode(self) -> bool:
        return self.type == 'episode'

    @property
    def is_movie(self) -> bool:
        return self.type == 'movie'

    @property
    def name(self) -> str:
        name = safe_str(self.title)
        year = safe_str(self.year)
        if name and year:
            name += ' (' + year + ')'
        return name

    @property
    def long_name(self) -> str:
        name = self.name
        if name and self.is_episode:
            season = safe_str(self.season)
            episode = safe_str(self.episode)
            if season and episode:
                name += ' S' + season.zfill(2)
                if isinstance(self.episode, list):
                    for idx, ep in enumerate(self.episode):
                        episode = safe_str(ep)
                        if idx > 0:
                            name += '-'
                        name += 'E' + episode.zfill(2)
                else:
                    name += 'E' + episode.zfill(2)
        return name

    def set_attr(self, key: str, value: Any) -> None:
        """Set an attribute (ignore/skip @property attributes).

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: Any
        """
        if hasattr(self, key) and not hasattr(type(self), key):
            if key in ['year', 'season', 'tvdb_id']:
                # Set as int
                setattr(self, key, to_obj(value, obj_type=int))
            elif key in ['episode']:
                # Can be returned as a list of int values
                setattr(self, key, to_obj_or_list(value, obj_type=int))
            elif key in ['source', 'codec']:
                # Can be returned as a list of text values
                setattr(self, key, to_obj_or_list(value))
            else:
                # Use default value
                setattr(self, key, value)

    def __eq__(self, other: object) -> bool:
        """Overrides the default implementation to allow comparison."""
        if not isinstance(other, type(self)):
            return NotImplemented

        return self.__dict__ == other.__dict__

    def __ne__(self, other: object) -> bool:
        """Overrides the default implementation (unnecessary in Python 3) to allow comparison."""
        return not self.__eq__(other)

    def __hash__(self) -> int:
        """Overrides the default implementation to allow comparison."""
        # Exclude items that have a value of type list, as they are not hashable
        return hash(tuple(sorted(filter(lambda x: not isinstance(x[1], list), self.__dict__.items()))))

    def __repr__(self) -> str:
        """Overrides the default implementation to get readable representation of the object."""
        return '<%s [%r]>' % (self.__class__.__name__, self.__dict__)


class WantedItem(_BaseItem):
    """Wanted item class.

    Represents an item that still needs a subtitle.

    :param type: the parsed video type
    :type type: str
    :param title: the parsed video title
    :type title: str
    :param year: the parsed video year
    :type year: int
    :param season: the parsed video season
    :type season: int
    :param episode: the parsed video episode
    :type episode: int or list(int)
    :param source: the parsed video source
    :type source: str or list(str)
    :param quality: the parsed video quality
    :type quality: str
    :param codec: the parsed video codec
    :type codec: str or list(str)
    :param release_group: the parsed video release group
    :type release_group: str
    """

    def __init__(self, type: ItemType = None, title: str = None, year: int = None, season: int = None,
                 episode: Union[int, List[int]] = None, source: Union[str, List[str]] = None, quality: str = None,
                 codec: Union[str, List[str]] = None, release_group: str = None) -> None:
        super().__init__(type=type, title=title, year=year, season=season, episode=episode,
                         source=source, quality=quality, codec=codec, release_group=release_group)

        self.video_path: str = None
        self.video_size: int = None  # Size in bytes
        self.languages: List[str] = []  # List of languages
        self.timestamp: str = None  # File timestamp string - format '%Y-%m-%d %H:%M:%S'

        self.video: Video = None  # Subliminal Video object
        self.found_subtitles: WantedItemSubtitles = None  # List of found subtitles after a manual search

    @property
    def is_search_active(self) -> bool:
        """Indication if the search is active for the wanted item.

        The search will be active:
        - on each run when file age is less or equal to 4 weeks
        - once every week (calculated from file timestamp) when file age is more than 4 weeks
        """
        file_datetime = datetime.datetime.strptime(self.timestamp, '%Y-%m-%d %H:%M:%S')
        file_search_deadline = file_datetime + datetime.timedelta(weeks=autosubliminal.CHECKSUBDEADLINE)
        today = get_today()
        file_age_in_days = (today.date() - file_search_deadline.date()).days
        if today.date() <= file_search_deadline.date():
            return True
        elif file_age_in_days % datetime.timedelta(days=autosubliminal.CHECKSUBDELTA).days == 0:
            return True
        else:
            return False

    def to_dict(self, key_fn: Callable, *args: Any, **kwargs: Any) -> Dict[str, Any]:
        """Convert the object to its json representation.

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
        exclude_args = [*_BaseItem.exclude_props, 'video_path', 'video_size', 'video', 'found_subtitles']
        if args:
            exclude_args.extend(list(args))

        # Define kwargs to include
        file_path, file_name = os.path.split(self.video_path)
        include_kwargs = {
            'video_file_name': file_name,
            'video_file_path': file_path.rstrip(os.path.sep),  # trim trailing slashes
            'video_file_size': humanize_bytes(self.video_size)
        }
        if kwargs:
            include_kwargs.update(kwargs)

        # Convert to json dict
        return to_dict(self, key_fn, *exclude_args, **include_kwargs)

    @property
    def library_path(self) -> Optional[str]:
        """Library path for the wanted item.

        If library paths are available, we check if the wanted item is located in a library path or not.
        If yes, return the library path, else return None
        """
        video_dir = os.path.dirname(self.video_path)
        return find_path_in_paths(video_dir, autosubliminal.LIBRARYPATHS, check_common_path=True)

    def set_attr(self, key: str, value: Any) -> None:
        """Set an attribute (ignore/skip @property attributes).

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key) and not hasattr(type(self), key):
            if key in ['languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value, default_value=[]))
            else:
                super().set_attr(key, value)

    def copy_to(self, wanted_item: 'WantedItem') -> None:
        """Copy all attributes to another wanted item."""
        wanted_item.__dict__.update(self.__dict__)

    @classmethod
    def from_guess(cls: Type['WantedItem'], guess: Dict[str, Any]) -> Optional['WantedItem']:
        """Construct a :class:`WantedItem` object from a guess.

        :param guess: the :mod:`guessit` dict
        :type guess: dict
        :return: the :class:`WantedItem` object or None
        :rtype: WantedItem or None
        """
        if guess:
            return cls(type=cls._property_from_guess(guess, 'type'),
                       title=cls._property_from_guess(guess, 'title'),
                       year=cls._property_from_guess(guess, 'year'),
                       season=cls._property_from_guess(guess, 'season'),
                       episode=cls._property_from_guess(guess, 'episode'),
                       source=cls._property_from_guess(guess, 'source'),
                       quality=cls._property_from_guess(guess, 'screen_size'),
                       codec=cls._property_from_guess(guess, 'video_codec'),
                       release_group=cls._property_from_guess(guess, 'release_group'))
        else:
            return None

    @staticmethod
    def _property_from_guess(guess: Dict[str, Any], property_name: str, default_value: Any = None) -> Any:
        property_value = default_value
        if property_name in guess:
            property_value = guess[property_name]

        return property_value


class DownloadItem(WantedItem):
    """Download item class.

    Represents an item with the extra info in order to download the found subtitle(s).

    :param wanted_item: the :class:`WantedItem` object to clone from
    :type wanted_item: WantedItem
    """

    def __init__(self, wanted_item: WantedItem) -> None:
        super().__init__()

        # Copy all properties from wanted_item
        self.__dict__.update(wanted_item.__dict__)

        self.subtitle_path: str = None
        self.subtitle_link: str = None
        self.language: str = None
        self.provider: str = None
        self.subtitle: str = None  # Filename without extension
        self.subtitles: List[Any] = None
        self.single: bool = None


class DownloadedItem(_BaseItem):
    """Downloaded item class.

    Represents an item that is completed and stored in the database to keep track of the downloaded items.
    """

    def __init__(self) -> None:
        super().__init__()

        self.video_path: str = None
        self.language: str = None
        self.provider: str = None
        self.subtitle: str = None
        self.timestamp: str = None  # Download timestamp string - format '%Y-%m-%d %H:%M:%S'

    def to_dict(self, key_fn: Callable, *args: Any, **kwargs: Any) -> Dict[str, Any]:
        """Convert the object to its json representation.

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
        exclude_args = [*_BaseItem.exclude_props, 'video_path']
        if args:
            exclude_args.extend(list(args))

        # Define kwargs to include (video_path is added afterwards, so could be empty)
        file_path, file_name = os.path.split(self.video_path) if self.video_path else (None, None)
        include_kwargs = {
            'video_file_name': file_name,
            'video_file_path': file_path.rstrip(os.path.sep) if file_path else file_path  # trim trailing slashes
        }
        if kwargs:
            include_kwargs.update(kwargs)

        # Convert to json dict
        return to_dict(self, key_fn, *exclude_args, **include_kwargs)
