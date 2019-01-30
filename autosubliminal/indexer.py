# coding=utf-8

import abc
import logging
import os
import re
from functools import wraps
from time import time

from imdbpie import Imdb
from imdbpie.facade import ImdbFacade
from imdbpie.objects import TitleSearchResult
from six import add_metaclass, text_type
from six.moves.urllib.parse import urlparse, urlunparse
from tvdb_api_v2.client import TvdbClient
from unidecode import unidecode

import autosubliminal
from autosubliminal.db import ImdbIdCacheDb, TvdbIdCacheDb
from autosubliminal.core.movie import MovieDetails
from autosubliminal.core.show import ShowDetails, ShowEpisodeDetails
from autosubliminal.util.encoding import s2n
from autosubliminal.util.common import sanitize
from autosubliminal.util.mapping import get_movie_name_mapping, get_show_name_mapping

log = logging.getLogger(__name__)

TVDB_ID_UNKNOWN = -1
IMDB_ID_UNKNOWN = 'tt0000000'


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

    @abc.abstractproperty
    def name(self):
        pass

    @abc.abstractmethod
    def _search(self, title, year=None):
        pass

    @abc.abstractmethod
    def _get_by_id(self, id):
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
    def name(self):
        return 'tvdb'

    @property
    def _token_needs_refresh(self):
        """Check if authentication token needs refresh."""
        return time() > self._token_generation_time + self._token_refresh_interval

    @property
    def _token_expired(self):
        """Check if authentication has expired."""
        return time() >= self._token_generation_time + self._token_expiration_interval

    @authenticate
    def _search(self, title, year=None, language='en'):
        """ Search the api for a show.

        :param title: the title to search for
        :type title: str
        :param year: the year (optional)
        :type year: int or None
        :param language: the language to search for
        :type language: str
        :return: the search result or None if not found
        :rtype : tvdb_api_v2.models.series_search_result.SeriesSearchResult or None
        """
        name = title
        if year:
            name += ' (' + text_type(year) + ')'
        log.info('Searching tvdb api for %s', name)
        # Make sure to convert it to native string before searching (to prevent unicode encoding error)
        search_results = self._client.search_series_by_name(s2n(name), language=language)

        # Only return 1 result or None
        for search_result in search_results.data:
            if sanitize(search_result.series_name) == sanitize(name):
                return search_result
            elif search_result.aliases:
                # If no match, fallback to aliases (if aliases are available)
                for alias in search_result.aliases:
                    if sanitize(alias) == sanitize(name):
                        return search_result
            else:
                continue

        return None

    @authenticate
    def _get_by_id(self, id, language='en'):
        """ Get details for a show from the api by it's id.

        :param id: the id of the show
        :type id: int
        :param language: the language to search for
        :type language: str
        :return: the show details or None if not found
        :rtype : tvdb_api_v2.models.series.Series or None
        """
        log.info('Querying tvdb api for id %s', id)
        series_data = self._client.get_series(id, language=language)

        return series_data.data if series_data.data else None

    def get_tvdb_id(self, title, year=None, language='en', force_search=False, store_id=True):
        tvdb_id = None
        name = title
        if year:
            name += ' (' + text_type(year) + ')'
        log.debug('Getting tvdb id for %s', name)

        db = TvdbIdCacheDb()
        # If not force_search, first check shownamemapping and tvdb id cache
        if not force_search:
            # Check shownamemapping
            tvdb_id = get_show_name_mapping(name)
            if tvdb_id:
                log.debug('Tvdb id from shownamemapping: %s', tvdb_id)
                return int(tvdb_id)
            # Check tvdb id cache
            tvdb_id = db.get_tvdb_id(name)
            if tvdb_id:
                log.debug('Tvdb id from cache: %s', tvdb_id)
                if tvdb_id == TVDB_ID_UNKNOWN:
                    log.warning('Tvdb id not found in cache for %s', name)
                    return None
                return int(tvdb_id)

        # Search on tvdb (throws exception when not found)
        try:
            api_obj = self._search(title, year=year, language=language)
            if api_obj:
                tvdb_id = api_obj.id
        except Exception as e:
            # Log error on other exceptions than 404
            if not hasattr(e, 'status') or e.status != 404:
                log.exception('Error while getting tvdb id for %s', name)

        if tvdb_id:
            log.debug('Tvdb id from api: %s', tvdb_id)
            if store_id:
                db.delete_tvdb_id(name)
                db.set_tvdb_id(tvdb_id, name)
                log.info('Tvdb id added to cache for %s: %s', name, tvdb_id)
            return int(tvdb_id)
        else:
            log.warning('Tvdb id not found for %s', name)
            if store_id:
                db.delete_tvdb_id(name)
                db.set_tvdb_id(TVDB_ID_UNKNOWN, name)
            return None

    @authenticate
    def get_show_details(self, tvdb_id, language='en'):
        log.debug('Getting show details for tvdb id %s', tvdb_id)

        api_obj = None
        api_poster_obj = None
        try:
            api_obj = self._get_by_id(tvdb_id, language=language)
            api_poster_obj = self._client.get_series_highest_rated_image(tvdb_id, language=language)
        except Exception as e:
            # Log error on other exceptions than 404
            if not hasattr(e, 'status') or e.status != 404:
                log.exception('Error while getting show details for tvdb id %s', tvdb_id)

        # Convert to show object if found
        return ShowDetails.from_indexer(api_obj, api_poster_obj) if api_obj else None

    @authenticate
    def get_show_episodes(self, tvdb_id):
        log.debug('Getting show episode details for tvdb id %s', tvdb_id)

        page = 1
        api_list = []
        episodes = self._client.get_series_episodes(tvdb_id, page=page)
        if episodes and episodes.data:
            api_list.extend(episodes.data)
            # Loop over all pages if needed
            while episodes and episodes.links and episodes.links.next:
                page = episodes.links.next
                episodes = self._client.get_series_episodes(tvdb_id, page=page)
                if episodes and episodes.data:
                    api_list.extend(episodes.data)

        # Convert to list of show details objects if found
        return [ShowEpisodeDetails.from_indexer(x) for x in api_list] if api_list else None

    @authenticate
    def get_show_episode(self, tvdb_id, season, episode, language='en'):
        log.debug('Getting show episode details for tvdb id %s, season %d, episode, %d', tvdb_id, season, episode)

        api_obj = None
        api_query_obj = self._client.get_series_episode(tvdb_id, season, episode, language=language)
        if api_query_obj and api_query_obj.data and len(api_query_obj.data) > 0:
            api_obj = api_query_obj.data[0]  # Query should only return 1 episode

        # Convert to show episode details if found
        return ShowEpisodeDetails.from_indexer(api_obj) if episode else None


class MovieIndexer(Indexer):
    """
    Indexer for movies, which uses the IMDB api.
    """

    def __init__(self):
        pass

    @property
    def name(self):
        return 'imdb'

    def _search(self, title, year=None, fallback_search=False):
        """ Search the api for a movie.

        :param title: the title to search for
        :type title: str
        :param year: the year
        :type year: int or None
        :return: the search result or None if not found
        :rtype: imdbpie.objects.TitleSearchResult or None
        """
        name = title
        if year:
            name += ' (' + text_type(year) + ')'

        if fallback_search:
            log.info('Searching imdb api again with year included for %s', name)
            search_results = ImdbFacade().search_for_title(re.sub('[()]', '', name))
        else:
            log.info('Searching imdb api for %s', name)
            search_results = ImdbFacade().search_for_title(title)

        # Find the first movie that matches the title (and year if present)
        for search_result in search_results:  # type: TitleSearchResult
            if self.sanitize_imdb_title(search_result.title) == self.sanitize_imdb_title(title):
                # If a year is present, it should also be the same
                if year:
                    if search_result.year == int(year):
                        return search_result
                    else:
                        continue
                # If no year is present, take the first match
                else:
                    return search_result

        # If no match is found, try to search for alternative titles of the first (most relevant) result
        if len(search_results) > 0:
            best_match = search_results[0]  # type: TitleSearchResult
            best_match_title_versions = Imdb().get_title_versions(best_match.imdb_id)  # Not available in ImdbFacade
            if best_match_title_versions and 'alternateTitles' in best_match_title_versions:
                for alternate_title in best_match_title_versions['alternateTitles']:
                    if self.sanitize_imdb_title(alternate_title['title']) == self.sanitize_imdb_title(title):
                        # If a year is present, it should also be the same
                        if year:
                            if best_match.year == int(year):
                                return TitleSearchResult(imdb_id=best_match.imdb_id, title=best_match.title,
                                                         type=best_match.type, year=best_match.year)
                            else:
                                continue
                        # If no year is present, take the first match
                        else:
                            return TitleSearchResult(imdb_id=best_match.imdb_id, title=best_match.title,
                                                     type=best_match.type, year=best_match.year)

        # Fallback search in case nothing could be found
        if not fallback_search:
            return self._search(title, year=year, fallback_search=True)

        return None

    def _get_by_id(self, id):
        """ Get details for a movie from the api by it's id.

        :param id: the id of the movie
        :type id: str
        :return: the movie details or None if not found
        :rtype : imdbpie.objects.Title or None
        """
        log.info('Querying imdb api for id %s', id)
        movie = ImdbFacade().get_title(id)

        return movie

    def get_imdb_id_and_year(self, title, year=None, force_search=False, store_id=True):
        imdb_id = None
        name = title
        if year:
            name += ' (' + text_type(year) + ')'
        log.debug('Getting imdb info for %s', name)

        db = ImdbIdCacheDb()
        # If not force_search, first check movienamemapping and tvdb id cache
        if not force_search:
            imdb_id = get_movie_name_mapping(title, year)
            if imdb_id:
                log.debug('Imdb id from movienamemapping: %s', imdb_id)
                return imdb_id, year
            imdb_id = db.get_imdb_id(title, year)
            if imdb_id:
                log.debug('Imdb id from cache: %s', imdb_id)
                # Imdb id is a string (digits only, but can have 0 prefixes)
                if imdb_id == IMDB_ID_UNKNOWN:
                    log.warning('Imdb id not found in cache for %s', name)
                    return None, year
                return imdb_id, year

        # Search on imdb
        try:
            api_obj = self._search(title, year)
            if api_obj:
                imdb_id, year = api_obj.imdb_id, api_obj.year
        except Exception:
            log.exception('Error while getting imdb id for %s', name)

        if imdb_id:
            log.debug('Imdb id from api: %s', imdb_id)
            if store_id:
                db.delete_imdb_id(title, year)
                db.set_imdb_id(imdb_id, title, year)
                log.info('Imdb id added to cache for %s: %s', name, imdb_id)
            return imdb_id, year
        else:
            log.warning('Imdb id not found for %s', name)
            if store_id:
                db.delete_imdb_id(title, year)
                db.set_imdb_id(IMDB_ID_UNKNOWN, title, year)
            return None, year

    def get_movie_details(self, imdb_id):
        log.debug('Getting movie details for imdb id %s', imdb_id)

        api_obj = None
        try:
            api_obj = self._get_by_id(imdb_id)
        except Exception:
            log.exception('Error while getting movie details for imdb id %s', imdb_id)

        # Convert to movie details object if found
        return MovieDetails.from_indexer(api_obj) if api_obj else None

    @staticmethod
    def sanitize_imdb_title(string_value, ignore_characters=None):
        # Remove (I), (II), ... from imdb titles (this is added when there are multiple titles with the same name)
        # Example response from imdb: see http://www.imdb.com/find?q=Aftermath&s=tt&mx=20
        string_value = re.sub('^(.+)(\(\w+\))$', r'\1', string_value)

        # Sanitize on ascii level (replaces à by a)
        string_value = unidecode(string_value)

        # Return sanitized title
        return sanitize(string_value, ignore_characters)

    @staticmethod
    def get_artwork_thumbnail_url(artwork_url):
        if artwork_url:
            # Parse url
            parsed_parts = urlparse(artwork_url)

            # Reconstruct url but now with thumbnail suffix included
            if parsed_parts.path:
                name, ext = os.path.splitext(parsed_parts.path)
                if not name.endswith('_'):
                    name += '_'
                thumbnail_parts = parsed_parts._replace(path=name + 'SX300' + ext)
                return urlunparse(thumbnail_parts)

        return None
