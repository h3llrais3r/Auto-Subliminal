# coding=utf-8

import logging
import os

from imdbpie.objects import Title

from autosubliminal.util.common import to_dict, to_obj, to_list

log = logging.getLogger(__name__)


class MovieDetails(object):
    """ Movie details class.

    Contains all the details of a movie that are fetched from the indexer.
    """

    def __init__(self, path=None, imdb_id=None, title=None, year=None, overview=None, poster=None,
                 embedded_languages=None, external_languages=None, missing_languages=None):
        self.path = path
        self.imdb_id = imdb_id
        self.title = title
        self.year = year
        self.overview = overview
        self.poster = poster
        self.embedded_languages = embedded_languages or []
        self.external_languages = external_languages or []
        self.missing_languages = missing_languages or []

    @property
    def available_languages(self):
        return self.embedded_languages + self.external_languages

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
            elif key in ['embedded_languages', 'external_languages', 'missing_languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value))
            else:
                # Use default value
                setattr(self, key, value)

    def to_json(self, details=False):
        """Convert to its json representation."""
        json_dict = to_dict(self, 'path', 'poster', 'embedded_languages', 'external_languages', 'missing_languages',
                            'available_languages')

        # Remove filename from path
        path, _ = os.path.split(self.path)
        json_dict['path'] = path

        # Indicate if artwork is available or not
        json_dict['poster'] = True if self.poster else False

        # Add details if needed
        if details:
            json_dict['embedded_languages'] = self.embedded_languages
            json_dict['external_languages'] = self.external_languages
            json_dict['missing_languages'] = self.missing_languages
            json_dict['available_languages'] = self.available_languages

        return json_dict

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

    def __init__(self, imdb_id=None, languages=None, refine=None, hearing_impaired=None, utf8_encoding=None):
        self.imdb_id = imdb_id
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
            if key in ['languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value))
            elif key in ['refine', 'hearing_impaired', 'utf8_encoding']:
                # Set as bool
                setattr(self, key, to_obj(value, obj_type=bool))
            else:
                # Use default value
                setattr(self, key, value)
