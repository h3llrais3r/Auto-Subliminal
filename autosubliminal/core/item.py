# coding=utf-8

import datetime
import logging
import re

from six import text_type

from autosubliminal.util.common import get_today

# A subtitle will be searched on each run, as long as the file is not older than 4 weeks
search_deadline = datetime.timedelta(weeks=4)

# Once a video file is older than the search deadline, it will only be searched once a week
search_delta = datetime.timedelta(weeks=1)

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
    :type episode: int
    :param source: the parsed video source
    :type source: str
    :param quality: the parsed video quality
    :type quality: str
    :param codec: the parsed video codec
    :type codec: str
    :param releasegrp: the parsed video release group
    :type releasegrp: str

    All equivalence functions are written based on:
    https://stackoverflow.com/questions/390250/elegant-ways-to-support-equivalence-equality-in-python-classes
    """

    def __init__(self, type=None, title=None, year=None, season=None, episode=None, source=None, quality=None,
                 codec=None, releasegrp=None):
        # Episode can be a list of episodes (for multi-ep videos), so make sure it's a string
        _episode = episode
        if isinstance(episode, list):
            _episode = ','.join(text_type(ep) for ep in episode)  # episode can be a list of episodes (int)

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
        self.episode = _episode
        self.source = source
        self.quality = quality
        self.codec = codec
        self.releasegrp = _releasegrp

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
    :type episode: int
    :param source: the parsed video source
    :type source: str
    :param quality: the parsed video quality
    :type quality: str
    :param codec: the parsed video codec
    :type codec: str
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
        file_search_deadline = file_datetime + search_deadline
        today = get_today()
        file_age_in_days = (today.date() - file_search_deadline.date()).days
        if today.date() <= file_search_deadline.date():
            return True
        elif file_age_in_days % search_delta.days == 0:
            return True
        else:
            return False

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
                       source=cls._property_from_guess(guess, 'format'),
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

        self.timestamp = None  # Download timestamp string - format '%Y-%m-%d %H:%M:%S'
        self.subtitle = None
        self.provider = None
