# coding=utf-8

import datetime
import logging
import re

import autosubliminal
from autosubliminal.util.common import get_today, to_list, to_obj, to_obj_or_list

# Release group regex
release_group_regex = re.compile(r'(.*)\[.*?\]')

log = logging.getLogger(__name__)


class _Item(object):
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
    :param releasegrp: the parsed video release group
    :type releasegrp: str

    All equivalence functions are written based on:
    https://stackoverflow.com/questions/390250/elegant-ways-to-support-equivalence-equality-in-python-classes
    """

    def __init__(self, type=None, title=None, year=None, season=None, episode=None, source=None, quality=None,
                 codec=None, releasegrp=None):
        # We need to trim the release group in some cases
        _releasegrp = releasegrp
        if releasegrp:
            # Remove release group provider (part between []) if present (f.e. KILLERS[rarbg])
            match = release_group_regex.match(releasegrp)
            if match:
                # Return first parenthesized group (=release group without [] part)
                _releasegrp = match.group(1)

        self.id = None
        self.type = type  # Type of video: 'episode' or 'movie'
        self.title = title
        self.year = year
        self.season = season
        self.episode = episode
        self.source = source
        self.quality = quality
        self.codec = codec
        self.releasegrp = _releasegrp

    def set_attr(self, key, value):
        """Set an attribute.

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key):
            if key in ['year', 'season']:
                # Set as int
                setattr(self, key, to_obj(value, int))
            elif key in ['episode']:
                # Can be returned as a list of int values
                setattr(self, key, to_obj_or_list(value, int))
            elif key in ['source', 'codec']:
                # Can be returned as a list of text values
                setattr(self, key, to_obj_or_list(value))
            else:
                # Use default value
                setattr(self, key, value)

    def __eq__(self, other):
        """Overrides the default implementation to allow comparison."""
        if not isinstance(other, type(self)):
            return NotImplemented

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Overrides the default implementation (unnecessary in Python 3) to allow comparison."""
        return not self.__eq__(other)

    def __hash__(self):
        """Overrides the default implementation to allow comparison."""
        return hash(tuple(sorted(self.__dict__.items())))

    def __repr__(self):
        """Overrides the default implementation to get readable representation of the object."""
        return '<%s [%r]>' % (self.__class__.__name__, self.__dict__)


class WantedItem(_Item):
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
    :param releasegrp: the parsed video release group
    :type releasegrp: str
    """

    def __init__(self, type=None, title=None, year=None, season=None, episode=None, source=None, quality=None,
                 codec=None, releasegrp=None):
        super(WantedItem, self).__init__(type=type, title=title, year=year, season=season, episode=episode,
                                         source=source, quality=quality, codec=codec, releasegrp=releasegrp)

        self.videopath = None
        self.timestamp = None  # File timestamp string - format '%Y-%m-%d %H:%M:%S'
        self.languages = []  # List of languages

        self.tvdbid = None
        self.imdbid = None

        self.video = None  # Subliminal Video object

    @property
    def is_episode(self):
        """Indication if the item is an episode."""
        return self.type == 'episode'

    @property
    def is_movie(self):
        """Indication if the item is a movie."""
        return self.type == 'movie'

    @property
    def is_search_active(self):
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

    def set_attr(self, key, value):
        """Set an attribute.

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key):
            if key in ['languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value, default_value=[]))
            elif key in ['tvdbid']:
                setattr(self, key, to_obj(value, obj_type=int))
            else:
                super(WantedItem, self).set_attr(key, value)

    def copy_to(self, wanted_item):
        """Copy all attributes to another wanted item."""
        wanted_item.__dict__.update(self.__dict__)

    @classmethod
    def from_guess(cls, guess):
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
                       releasegrp=cls._property_from_guess(guess, 'release_group'))
        else:
            return None

    @staticmethod
    def _property_from_guess(guess, property_name, default_value=None):
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

    def __init__(self, wanted_item):
        super(DownloadItem, self).__init__()

        # Copy all properties from wanted_item
        self.__dict__.update(wanted_item.__dict__)

        self.subtitlepath = None
        self.downloadLink = None
        self.downlang = None
        self.subtitle = None  # Filename without extension
        self.provider = None
        self.subtitles = None
        self.single = None


class DownloadedItem(_Item):
    """Downloaded item class.

    Represents an item that is completed and stored in the database to keep track of the downloaded items.
    """

    def __init__(self):
        super(DownloadedItem, self).__init__()

        self.language = None
        self.timestamp = None  # Download timestamp string - format '%Y-%m-%d %H:%M:%S'
        self.subtitle = None
        self.provider = None
