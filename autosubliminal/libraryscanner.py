# coding=utf-8

import logging
import os

import autosubliminal
from autosubliminal.core.cache import cache_artwork, is_artwork_cached
from autosubliminal.core.scheduler import ScheduledProcess
from autosubliminal.db import ShowDetailsDb, ShowEpisodeDetailsDb, MovieDetailsDb
from autosubliminal.diskscanner import get_available_subtitle_languages, get_missing_subtitle_languages
from autosubliminal.fileprocessor import process_file
from autosubliminal.indexer import ShowIndexer, MovieIndexer
from autosubliminal.util.common import safe_lowercase
from autosubliminal.util.filesystem import is_valid_video_file, is_skipped_dir, one_path_exists
from autosubliminal.util.websocket import send_websocket_event, send_websocket_notification, PAGE_RELOAD
from tvdb_api_v2.utils.artwork import get_artwork_url

log = logging.getLogger(__name__)


class LibraryScanner(ScheduledProcess):
    """Library scanner.

    Scan the library paths for building the library view.
    Data is stored in the database.
    """

    def __init__(self):
        super(LibraryScanner, self).__init__(run_lock=False, force_run_lock=False)
        self.show_db = ShowDetailsDb()
        self.show_episodes_db = ShowEpisodeDetailsDb()
        self.movie_db = MovieDetailsDb()
        self.show_indexer = ShowIndexer()
        self.movie_indexer = MovieIndexer()

    def run(self, force_run):
        paths = autosubliminal.LIBRARYPATHS
        log.info('Starting round of library scanning at %r', paths)

        # Show info message (only when run was forced manually)
        if force_run:
            send_websocket_notification('Scanning library...')

        # Check if a path exists to scan
        if not one_path_exists(paths):
            log.error('None of the configured library paths (%r) exists, aborting...', paths)
            return

        # Walk through paths and store info in db
        for path in paths:
            try:
                self.scan_path(path)
            except Exception:
                log.exception('Could not scan the path (%s), skipping it', path)

        # Send library page reload event
        send_websocket_event(PAGE_RELOAD, data={'name': 'library'})

        log.info('Finished round of library scanning')

    def scan_path(self, path):
        log.info('Scanning path: %s', path)

        # Check all folders and files
        for dirname, dirnames, filenames in os.walk(os.path.join(path)):
            log.debug('Directory: %s', dirname)

            # Ignore skipped dirs
            if is_skipped_dir(dirname):
                continue

            # Check files
            for filename in filenames:
                # Only scan valid video files
                if is_valid_video_file(filename):
                    log.debug('Video file found: %s', filename)
                    self._scan_file(dirname, filename)

    def _scan_file(self, dirname, filename):
        wanted_item = process_file(dirname, filename)
        if wanted_item:
            if wanted_item.is_episode:
                # Do a force search if no tvdb id found
                # FIXME: also handle value -1 (not found) for id
                if not wanted_item.tvdbid:
                    wanted_item.tvdbid = self.show_indexer.get_tvdb_id(wanted_item.title, year=wanted_item.year,
                                                                       force_search=True)

                # Get show details
                show_details = self.show_db.get_show(wanted_item.tvdbid)
                # Add show and episodes to db if not yet in db
                if wanted_item.tvdbid and not show_details:
                    show_details = self.show_indexer.get_show_details(wanted_item.tvdbid)
                    if show_details:
                        show_details.path = self._get_show_path(dirname)
                        self.show_db.set_show(show_details)
                        episodes = self.show_indexer.get_show_episodes(wanted_item.tvdbid)
                        if episodes:
                            for episode in episodes:
                                self.show_episodes_db.set_show_episode(episode)

                # Cache artwork (fullsize and thumbnail) if not yet cached
                if show_details:
                    # Poster
                    if show_details.poster:
                        if not is_artwork_cached(self.show_indexer.name, show_details.tvdb_id, 'poster'):
                            cache_artwork(self.show_indexer.name, show_details.tvdb_id, 'poster',
                                          get_artwork_url(show_details.poster))
                        if not is_artwork_cached(self.show_indexer.name, show_details.tvdb_id, 'poster',
                                                 thumbnail=True):
                            cache_artwork(self.show_indexer.name, show_details.tvdb_id, 'poster',
                                          get_artwork_url(show_details.poster, thumbnail=True), thumbnail=True)
                    # Banner
                    if show_details.banner:
                        if not is_artwork_cached(self.show_indexer.name, show_details.tvdb_id, 'banner'):
                            cache_artwork(self.show_indexer.name, show_details.tvdb_id, 'banner',
                                          get_artwork_url(show_details.banner))
                        if not is_artwork_cached(self.show_indexer.name, show_details.tvdb_id, 'banner',
                                                 thumbnail=True):
                            cache_artwork(self.show_indexer.name, show_details.tvdb_id, 'banner',
                                          get_artwork_url(show_details.banner, thumbnail=True), thumbnail=True)

                # Check episode details
                if isinstance(wanted_item.episode, list):
                    for episode in wanted_item.episode:
                        self._update_episode_details(dirname, filename, wanted_item.tvdbid, wanted_item.season, episode)
                else:
                    self._update_episode_details(dirname, filename, wanted_item.tvdbid, wanted_item.season,
                                                 wanted_item.episode)
            if wanted_item.is_movie:
                # Do a force search if no imdb id found
                # FIXME: also handle value -1 (not found) for id
                if not wanted_item.imdbid:
                    wanted_item.imdbid, _ = self.movie_indexer.get_imdb_id_and_year(wanted_item.title,
                                                                                    year=wanted_item.year,
                                                                                    force_search=True)

                # Get movie details
                movie_details = self.movie_db.get_movie(wanted_item.imdbid)
                # Add movie to db if not yet in db
                if wanted_item.imdbid and not movie_details:
                    movie_details = self.movie_indexer.get_movie_details(wanted_item.imdbid)
                    if movie_details:
                        movie_details.path = dirname
                        self.movie_db.set_movie(movie_details)

                # Cache artwork (fullsize and thumbnail) if not yet cached
                if movie_details:
                    # Poster
                    if movie_details.poster:
                        if not is_artwork_cached(self.movie_indexer.name, movie_details.imdb_id, 'poster'):
                            cache_artwork(self.movie_indexer.name, movie_details.imdb_id, 'poster',
                                          movie_details.poster)
                        if not is_artwork_cached(self.movie_indexer.name, movie_details.imdb_id, 'poster',
                                                 thumbnail=True):
                            cache_artwork(self.movie_indexer.name, movie_details.imdb_id, 'poster',
                                          self.movie_indexer.get_artwork_thumbnail_url(movie_details.poster),
                                          thumbnail=True)

                # Check movie details
                self._update_movie_details(dirname, filename, wanted_item.imdbid)

    def _get_show_path(self, dirname):
        path = dirname
        # Get root show path (ignore season folders)
        while 'season' in safe_lowercase(os.path.normpath(os.path.normcase(path))):
            path, _ = os.path.split(path)
        return path

    def _update_episode_details(self, dirname, filename, show_tvdb_id, season, episode):
        episode_details = self.show_episodes_db.get_show_episode(show_tvdb_id, season, episode)

        # If no episode is found, we need to fetch the episode detailts of the show
        # This is because the show is still on-going and we didn't got all episodes when the show was loaded
        if not episode_details:
            episode_details = self.show_indexer.get_show_episode(show_tvdb_id, season, episode)
            if episode_details:
                self.show_episodes_db.set_show_episode(episode_details)

        if episode_details:
            # Set details
            missing_languages = get_missing_subtitle_languages(dirname, filename,
                                                               scan_embedded=autosubliminal.SCANEMBEDDEDSUBS)
            available_languages = get_available_subtitle_languages(dirname, filename, missing_languages)
            episode_details.missing_languages = missing_languages
            episode_details.available_languages = available_languages
            episode_details.path = os.path.abspath(os.path.join(dirname, filename))
            # Update details in db
            self.show_episodes_db.update_show_episode(episode_details)

    def _update_movie_details(self, dirname, filename, imdb_id):
        movie_details = self.movie_db.get_movie(imdb_id)

        if movie_details:
            # Set details
            missing_languages = get_missing_subtitle_languages(dirname, filename,
                                                               scan_embedded=autosubliminal.SCANEMBEDDEDSUBS)
            available_languages = get_available_subtitle_languages(dirname, filename, missing_languages)
            movie_details.missing_languages = missing_languages
            movie_details.available_languages = available_languages
            movie_details.path = os.path.abspath(os.path.join(dirname, filename))
            # Update details in db
            self.movie_db.update_movie(movie_details)
