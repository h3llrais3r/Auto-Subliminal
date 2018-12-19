# coding=utf-8

import logging

from imdbpie.objects import Title

from autosubliminal.util.common import to_dict, to_obj, to_list

log = logging.getLogger(__name__)


class MovieDetails(object):
    """ Movie details class.

    Contains all the details of a movie that are fetched from the indexer.
    """

    def __init__(self, path=None, imdb_id=None, title=None, year=None, overview=None, poster=None,
                 available_languages=None, missing_languages=None):
        self.path = path
        self.imdb_id = imdb_id
        self.title = title
        self.year = year
        self.overview = overview
        self.poster = poster
        self.available_languages = available_languages or []
        self.missing_languages = missing_languages or []

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
            elif key in ['available_languages', 'missing_languages']:
                # Must be returned as a list of values
                setattr(self, key, to_list(value))
            else:
                # Use default value
                setattr(self, key, value)

    def to_json(self):
        """Convert to its json representation."""
        json_dict = to_dict(self, 'poster')

        # Indicate if artwork is available or not
        json_dict['poster'] = True if self.poster else False

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
