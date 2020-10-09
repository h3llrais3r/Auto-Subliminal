# coding=utf-8

import logging
import os

from imdbpie.objects import Title
from six.moves.urllib.parse import urlparse, urlunparse

import autosubliminal
from autosubliminal.util.common import get_wanted_languages, to_dict, to_list, to_obj

log = logging.getLogger(__name__)


class MovieDetails(object):
    """ Movie details class.

    Contains all the details of a movie that are fetched from the indexer.
    """

    def __init__(self, path=None, imdb_id=None, title=None, year=None, overview=None, poster=None,
                 missing_languages=None, subtitles=None):
        self.path = path
        self.imdb_id = imdb_id
        self.title = title
        self.year = year
        self.overview = overview
        self.poster = poster
        self.missing_languages = missing_languages or []
        self.subtitles = subtitles or []

    def get_artwork_url(self, artwork_type, thumbnail=False):
        """Get the actual artwork url for download.

        Returns the url of the full size artwork or the thumbnail version.
        :param artwork_type: the artwork type
        :type artwork_type: str
        :param thumbnail: the indication to return the thumbnail version or not
        :type thumbnail: bool
        :return: the full artwork url
        :rtype: str or None
        """
        artwork_url = None
        artwork_name = getattr(self, artwork_type) if hasattr(self, artwork_type)else None
        if artwork_name:
            if thumbnail:
                # Parse url (artwork name is already an url)
                parsed_parts = urlparse(artwork_name)

                # Reconstruct url but now with thumbnail suffix included
                if parsed_parts.path:
                    name, ext = os.path.splitext(parsed_parts.path)
                    if not name.endswith('_'):
                        name += '_'
                    thumbnail_parts = parsed_parts._replace(path=name + 'SX300' + ext)
                    artwork_url = urlunparse(thumbnail_parts)
            else:
                # Artwork name is already an url
                artwork_url = artwork_name

        return artwork_url

    def set_attr(self, key, value):
        """Set an attribute.

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key):
            if key in ['year']:
                # # Set as int
                setattr(self, key, to_obj(value, obj_type=int))
            elif key in ['missing_languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value, default_value=[]))
            else:
                # Use default value
                setattr(self, key, value)

    def to_dict(self, key_fn, *args, **kwargs):
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
        exclude_args = ['path', 'poster', 'missing_languages', 'subtitles']
        if args:
            exclude_args.extend(list(args))

        # Define kwargs to include
        path, _ = os.path.split(self.path)  # remove filename from path
        poster_available = True if self.poster else False  # indication if poster is available
        include_kwargs = {'path': path, 'poster': poster_available}
        if kwargs:
            include_kwargs.update(kwargs)

        # Convert to json dict
        return to_dict(self, key_fn, *exclude_args, **include_kwargs)

    @classmethod
    def from_indexer(cls, obj):
        """Construct a :class:`MovieDetails` object from the indexer object.

        :param obj: the indexer object
        :type obj: Title
        :return: the :class:`MovieDetails` object or None
        :rtype: MovieDetails or None
        """
        if obj and isinstance(obj, Title):
            return cls(imdb_id=obj.imdb_id,
                       title=obj.title,
                       year=obj.year,
                       overview=obj.plot_outline,
                       poster=obj.image.url)
        else:
            return None


class MovieSettings(object):
    """ Movie settings class.

    Contains all the settings for a movie.
    """

    def __init__(self, imdb_id=None, wanted_languages=None, refine=None, hearing_impaired=None, utf8_encoding=None):
        self.imdb_id = imdb_id
        self.wanted_languages = wanted_languages
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
            if key in ['wanted_languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value, default_value=[]))
            elif key in ['refine', 'hearing_impaired', 'utf8_encoding']:
                # Set as bool
                setattr(self, key, to_obj(value, obj_type=bool))
            else:
                # Use default value
                setattr(self, key, value)

    def to_dict(self, key_fn, *args, **kwargs):
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
        exclude_args = ['imdb_id']
        if args:
            exclude_args.extend(list(args))

        # Define kwargs to include
        include_kwargs = {}
        if kwargs:
            include_kwargs.update(kwargs)

        # Convert to json dict
        return to_dict(self, key_fn, *exclude_args, **include_kwargs)

    @classmethod
    def default_settings(cls, imdb_id):
        return cls(imdb_id=imdb_id,
                   wanted_languages=get_wanted_languages(),
                   refine=autosubliminal.REFINEVIDEO,
                   hearing_impaired=autosubliminal.PREFERHEARINGIMPAIRED,
                   utf8_encoding=autosubliminal.SUBTITLEUTF8ENCODING)
