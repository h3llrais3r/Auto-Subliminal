import abc
import logging

from imdb import IMDb
from tvdb_api.tvdb_api import Tvdb

from autosubliminal import utils
from autosubliminal.db import ImdbIdCache, TvdbIdCache

log = logging.getLogger(__name__)


class Indexer(object):
    """
    Base class for all indexers.
    """
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def _query_api(self, title, year=None):
        pass


class ShowIndexer(Indexer):
    """
    Indexer for tv shows, which uses the TVDB api.
    """

    def _query_api(self, title, year=None):
        name = title
        if year:
            name += " (" + str(year) + ")"
        log.info("Querying tvdb api for %s" % name)
        # Return a tvdb_api.tvdb_api.Show object
        return Tvdb()[name]

    def get_tvdb_id(self, title, year=None, force_search=False, store_id=True):
        log.debug("Getting tvdb id for %s" % title)
        tvdb_id = None
        # If not force_search, first check shownamemapping and tvdb id cache
        if not force_search:
            # Check shownamemapping
            tvdb_id = utils.show_name_mapping(title)
            if tvdb_id:
                log.debug("Tvdb id from shownamemapping %s" % tvdb_id)
                return int(tvdb_id)
            # Check tvdb id cache
            tvdb_id = TvdbIdCache().get_id(title)
            if tvdb_id:
                log.debug("Getting tvdb id from cache %s" % tvdb_id)
                if tvdb_id == -1:
                    log.error("Tvdb id not found in cache for %s" % title)
                    return
                return int(tvdb_id)
        # Search on tvdb
        try:
            show = self._query_api(title, year)
            if show:
                tvdb_id = show['id']
        except Exception, e:
            log.error("Tvdb id not found for %s" % title)
            log.error(e)
            if store_id:
                TvdbIdCache().set_id(-1, title)
        if tvdb_id:
            log.debug("Tvdb id from api %s" % tvdb_id)
            if store_id:
                TvdbIdCache().set_id(tvdb_id, title)
                log.info("%s added to cache with %s" % (title, tvdb_id))
            return int(tvdb_id)


class MovieIndexer(Indexer):
    """
    Indexer for movies, which uses the IMDB api.
    """

    def _query_api(self, title, year=None):
        name = title
        if year:
            name += " (" + str(year) + ")"
        log.info("Querying imdb api for %s" % name)
        # Return a imdb.Movie object
        imdb_movies = IMDb().search_movie(title)
        # Find the first movie that matches the title (and year if present)
        for movie in imdb_movies:
            data = movie.data
            if data['kind'] == 'movie' and data['title'] == title:
                # If a year is present, it should also be the same
                if year:
                    if data['year'] == year:
                        return movie
                    else:
                        continue
                # If no year is present, take the first match
                else:
                    return movie

    def get_imdb_id_and_year(self, title, year=None, force_search=False, store_id=True):
        imdb_id = None
        name = title
        if year:
            name += " (" + str(year) + ")"
        log.debug("Getting imdb info for %s" % name)
        # If not force_search, first check movienamemapping and tvdb id cache
        if not force_search:
            imdb_id = utils.movie_name_mapping(title, year)
            if imdb_id:
                log.debug("Imdb id from movienamemapping %s" % imdb_id)
                return imdb_id, year
            imdb_id = ImdbIdCache().get_id(title, year)
            if imdb_id:
                log.debug("Getting imdb id from cache %s" % imdb_id)
                return imdb_id, year
        # Search on imdb
        try:
            movie = self._query_api(title, year)
            if movie:
                imdb_id = movie.movieID
                year = movie.data['year'] if not year else year
                log.debug("Getting imdb id from api %s" % imdb_id)
                if store_id:
                    ImdbIdCache().set_id(imdb_id, title, year)
                    log.info("%s added to cache with %s" % (name, imdb_id))
        except Exception, e:
            log.error("Imdb id not found for %s" % name)
            log.error(e)
        if not imdb_id:
            log.error("Imdb id not found for %s (%s)" % (title, year))
        return imdb_id, year
