# coding=utf-8

import abc
import logging
import re
from functools import wraps
from time import time

from imdbpie import Imdb
from six import add_metaclass, text_type
from tvdb_api_v2.client import TvdbClient
from unidecode import unidecode

import autosubliminal
from autosubliminal import utils
from autosubliminal.db import ImdbIdCache, TvdbIdCache
from autosubliminal.util.encoding import s2n

log = logging.getLogger(__name__)


def authenticate(func):
    """Decorator for :class:ShowIndexer methods that require authentication"""

    @wraps(func)
    def wrapper(self, *args, **kwargs):
        if not self._token or self._token_expired:
            self._token = self._client.login()
            self._token_generation_time = time()
        elif self._token_needs_refresh:
            self._token = self._client.refresh_token()
            self._token_generation_time = time()
        return func(self, *args, **kwargs)

    return wrapper


@add_metaclass(abc.ABCMeta)
class Indexer(object):
    """
    Base class for all indexers.
    """

    @abc.abstractmethod
    def _query_api(self, title, year=None):
        pass


class ShowIndexer(Indexer):
    """
    Indexer for tv shows, which uses the TVDB api.
    """

    def __init__(self):
        self._client = TvdbClient(api_key=autosubliminal.TVDBAPIKEY, user_agent=autosubliminal.USERAGENT)
        # Currently, the token expires after 24 hours, see https://api.thetvdb.com/swagger
        # Let's refresh it every 2h at our side
        self._token_expiration_interval = 24 * 60 * 60
        self._token_refresh_interval = 2 * 60 * 60
        self._token_generation_time = None
        self._token = None

    @property
    def _token_needs_refresh(self):
        """Check if authentication token needs refresh."""
        return time() > self._token_generation_time + self._token_refresh_interval

    @property
    def _token_expired(self):
        """Check if authentication has expired."""
        return time() >= self._token_generation_time + self._token_expiration_interval

    @authenticate
    def _query_api(self, title, year=None, language='en'):
        name = title
        if year:
            name += ' (' + text_type(year) + ')'
        log.info('Querying tvdb api for %s', name)
        # Return a tvdb_api_v2.models.series_search.SeriesSearch object
        # Make sure to convert it to native string before searching (to prevent unicode encoding error)
        series_search = self._client.search_series_by_name(s2n(name), language=language)
        for series_search_data in series_search.data:
            if utils.sanitize(series_search_data.series_name) == utils.sanitize(name):
                return series_search_data
            elif series_search_data.aliases:
                # If no match, fallback to aliases (if aliases are available)
                for alias in series_search_data.aliases:
                    if utils.sanitize(alias) == utils.sanitize(name):
                        return series_search_data
            else:
                continue

    def get_tvdb_id(self, title, year=None, language='en', force_search=False, store_id=True):
        tvdb_id = None
        name = title
        if year:
            name += ' (' + text_type(year) + ')'
        log.debug('Getting tvdb id for %s', name)
        # If not force_search, first check shownamemapping and tvdb id cache
        if not force_search:
            # Check shownamemapping
            tvdb_id = utils.get_show_name_mapping(name)
            if tvdb_id:
                log.debug('Tvdb id from shownamemapping: %s', tvdb_id)
                return int(tvdb_id)
            # Check tvdb id cache
            tvdb_id = TvdbIdCache().get_id(name)
            if tvdb_id:
                log.debug('Tvdb id from cache: %s', tvdb_id)
                if tvdb_id == -1:
                    log.warning('Tvdb id not found in cache for %s', name)
                    return None
                return int(tvdb_id)
        # Search on tvdb (throws exception when not found)
        try:
            show = self._query_api(title, year=year, language=language)
            if show:
                tvdb_id = show.id
        except Exception as e:
            # Log error on other exceptions than 404
            if not hasattr(e, 'status') or e.status != 404:
                log.exception('Error while retrieving tvdb id for %s', name)
        if tvdb_id:
            log.debug('Tvdb id from api: %s', tvdb_id)
            if store_id:
                TvdbIdCache().set_id(tvdb_id, name)
                log.info('Tvdb id added to cache for %s: %s', name, tvdb_id)
            return int(tvdb_id)
        else:
            log.warning('Tvdb id not found for %s', name)
            if store_id:
                TvdbIdCache().set_id(-1, name)
            return None


class MovieIndexer(Indexer):
    """
    Indexer for movies, which uses the IMDB api.
    """

    def _query_api(self, title, year=None):
        name = title
        if year:
            name += ' (' + text_type(year) + ')'
        log.info('Querying imdb api for %s', name)
        api = Imdb()
        imdb_movies = api.search_for_title(title)
        # Find the first movie that matches the title (and year if present)
        for movie in imdb_movies:
            if self.sanitize_imdb_title(movie['title']) == self.sanitize_imdb_title(title):
                # If a year is present, it should also be the same
                if year:
                    if movie['year'] == text_type(year):
                        return movie['imdb_id'], int(movie['year'])
                    else:
                        continue
                # If no year is present, take the first match
                else:
                    return movie['imdb_id'], int(movie['year'])
        # If no match is found, try to search for alternative titles of the first (most relevant) result
        if len(imdb_movies) > 0:
            best_match = imdb_movies[0]
            best_match_title_versions = api.get_title_versions(best_match['imdb_id'])
            if best_match_title_versions and 'alternateTitles' in best_match_title_versions:
                for alternate_title in best_match_title_versions['alternateTitles']:
                    if self.sanitize_imdb_title(alternate_title['title']) == self.sanitize_imdb_title(title):
                        # If a year is present, it should also be the same
                        if year:
                            if best_match['year'] == text_type(year):
                                return best_match['imdb_id'], int(best_match['year'])
                            else:
                                continue
                        # If no year is present, take the first match
                        else:
                            return best_match['imdb_id'], text_type(best_match['year'])
        return None, year

    @staticmethod
    def sanitize_imdb_title(string_value, ignore_characters=None):
        # Remove (I), (II), ... from imdb titles (this is added when there are multiple titles with the same name)
        # Example response from imdb: see http://www.imdb.com/find?q=Aftermath&s=tt&mx=20
        string_value = re.sub('^(.+)(\(\w+\))$', r'\1', string_value)
        # Sanitize on ascii level (replaces à by a)
        string_value = unidecode(string_value)
        return utils.sanitize(string_value, ignore_characters)

    def get_imdb_id_and_year(self, title, year=None, force_search=False, store_id=True):
        imdb_id = None
        name = title
        if year:
            name += ' (' + text_type(year) + ')'
        log.debug('Getting imdb info for %s', name)
        # If not force_search, first check movienamemapping and tvdb id cache
        if not force_search:
            imdb_id = utils.get_movie_name_mapping(title, year)
            if imdb_id:
                log.debug('Imdb id from movienamemapping: %s', imdb_id)
                return imdb_id, year
            imdb_id = ImdbIdCache().get_id(title, year)
            if imdb_id:
                log.debug('Imdb id from cache: %s', imdb_id)
                # Imdb id is a string (digits only, but can have 0 prefixes)
                if imdb_id == 'tt0000000':
                    log.warning('Imdb id not found in cache for %s', name)
                    return None, year
                return imdb_id, year
        # Search on imdb
        try:
            imdb_id, year = self._query_api(title, year)
        except Exception:
            log.exception('Error while retrieving imdb id for %s', name)
        if imdb_id:
            log.debug('Imdb id from api: %s', imdb_id)
            if store_id:
                ImdbIdCache().set_id(imdb_id, title, year)
                log.info('Imdb id added to cache for %s: %s', name, imdb_id)
            return imdb_id, year
        else:
            log.warning('Imdb id not found for %s', name)
            if store_id:
                ImdbIdCache().set_id('tt0000000', title, year)
            return None, year
