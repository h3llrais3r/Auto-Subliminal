# coding=utf-8

import logging
import os

import autosubliminal
from autosubliminal.core.cache import cache_artwork, is_artwork_cached
from autosubliminal.core.indexer import MovieIndexer, ShowIndexer
from autosubliminal.core.movie import MovieSettings
from autosubliminal.core.scheduler import ScheduledProcess
from autosubliminal.core.show import ShowSettings
from autosubliminal.core.subtitle import get_missing_subtitle_languages
from autosubliminal.db import (
    FailedMoviesDb,
    FailedShowsDb,
    MovieDetailsDb,
    MovieSettingsDb,
    ShowDetailsDb,
    ShowEpisodeDetailsDb,
    ShowSettingsDb,
)
from autosubliminal.fileprocessor import process_file
from autosubliminal.util.common import safe_lowercase
from autosubliminal.util.filesystem import (
    VIDEO_EXTENSIONS,
    get_available_subtitles,
    is_skipped_dir,
    is_valid_video_file,
    one_path_exists,
)
from autosubliminal.util.websocket import send_websocket_notification

log = logging.getLogger(__name__)

EXTENDED_VIDEO_EXTENSIONS = VIDEO_EXTENSIONS + ('.iso',)  # Also iso files are supported in library mode


class LibraryScanner(ScheduledProcess):
    """Library scanner.

    Scan the library paths for building the library view.
    Data is stored in the database.
    """

    def __init__(self) -> None:
        super().__init__(run_lock=False, force_run_lock=False)

    def run(self, force_run: bool) -> None:
        paths = autosubliminal.LIBRARYPATHS
        log.info('Starting round of library scanning at %r', paths)
        send_websocket_notification('Scanning library...')

        # Check if a path exists to scan
        if not one_path_exists(paths):
            log.error('None of the configured library paths (%r) exists, aborting...', paths)
            return

        # Clear failed shows/movies before starting a full scan
        FailedShowsDb().flush_failed_shows()
        FailedMoviesDb().flush_failed_movies()

        # Walk through paths and store info in db
        path_scanner = LibraryPathScanner()
        for path in paths:
            try:
                path_scanner.scan_path(path)
            except Exception:
                log.exception('Could not scan the path (%s), skipping it', path)

        send_websocket_notification('Library scan finished.')
        log.info('Finished round of library scanning')


class LibraryPathScanner(object):
    def __init__(self) -> None:
        self.show_db = ShowDetailsDb()
        self.failed_shows_db = FailedShowsDb()
        self.show_episodes_db = ShowEpisodeDetailsDb()
        self.show_settings_db = ShowSettingsDb()
        self.failed_movies_db = FailedMoviesDb()
        self.movie_db = MovieDetailsDb()
        self.movie_settings_db = MovieSettingsDb()
        self.show_indexer = ShowIndexer()
        self.movie_indexer = MovieIndexer()

    def scan_path(self, path: str) -> None:
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
                if is_valid_video_file(filename, video_extensions=EXTENDED_VIDEO_EXTENSIONS):
                    log.debug('Video file found: %s', filename)
                    try:
                        self._scan_file(dirname, filename)
                    except Exception:
                        log.exception('Error while scanning video file: %s', os.path.join(dirname, filename))

    def _scan_file(self, dirname: str, filename: str) -> None:
        wanted_item = process_file(dirname, filename)
        if wanted_item:
            if wanted_item.is_episode:
                # Do a force search if no tvdb id found
                if not wanted_item.tvdb_id:
                    wanted_item.tvdb_id = self.show_indexer.get_tvdb_id(
                        wanted_item.title, year=wanted_item.year, force_search=True
                    )

                # Skip if no tvdb id is found
                if not wanted_item.tvdb_id:
                    log.warning('Skipping show episode file with unknown tvdb id: %s', os.path.join(dirname, filename))
                    show_path = self._get_show_path(dirname)
                    if not self.failed_shows_db.get_failed_show(show_path):
                        self.failed_shows_db.set_failed_show(show_path)
                    return

                # Store default show settings if not yet available
                if not self.show_settings_db.get_show_settings(wanted_item.tvdb_id):
                    self.show_settings_db.set_show_settings(ShowSettings.default_settings(wanted_item.tvdb_id))
                show_settings = self.show_settings_db.get_show_settings(wanted_item.tvdb_id)

                # Get show details
                show_details = self.show_db.get_show(wanted_item.tvdb_id)
                # Add show and episodes to db if not yet in db
                if not show_details:
                    show_details = self.show_indexer.get_show_details(wanted_item.tvdb_id)
                    if show_details:
                        show_details.path = self._get_show_path(dirname)
                        self.show_db.set_show(show_details)
                        episodes = self.show_indexer.get_show_episodes(wanted_item.tvdb_id)
                        if episodes:
                            for episode in episodes:
                                self.show_episodes_db.set_show_episode(episode)

                # Cache artwork (fullsize and thumbnail) if not yet cached
                if show_details:
                    # Poster
                    if show_details.poster:
                        artwork_type = 'poster'
                        if not is_artwork_cached(self.show_indexer.name, show_details.tvdb_id, artwork_type):
                            artwork_url = show_details.get_artwork_url(artwork_type, thumbnail=False)
                            cache_artwork(self.show_indexer.name, show_details.tvdb_id, artwork_type, artwork_url)
                        if not is_artwork_cached(
                            self.show_indexer.name, show_details.tvdb_id, artwork_type, thumbnail=True
                        ):
                            artwork_url = show_details.get_artwork_url(artwork_type, thumbnail=True)
                            cache_artwork(
                                self.show_indexer.name, show_details.tvdb_id, artwork_type, artwork_url, thumbnail=True
                            )
                    # Banner
                    if show_details.banner:
                        artwork_type = 'banner'
                        if not is_artwork_cached(self.show_indexer.name, show_details.tvdb_id, artwork_type):
                            artwork_url = show_details.get_artwork_url(artwork_type, thumbnail=False)
                            cache_artwork(self.show_indexer.name, show_details.tvdb_id, artwork_type, artwork_url)
                        if not is_artwork_cached(
                            self.show_indexer.name, show_details.tvdb_id, artwork_type, thumbnail=True
                        ):
                            artwork_url = show_details.get_artwork_url(artwork_type, thumbnail=True)
                            cache_artwork(
                                self.show_indexer.name, show_details.tvdb_id, artwork_type, artwork_url, thumbnail=True
                            )

                # Check episode details
                if isinstance(wanted_item.episode, list):
                    for episode in wanted_item.episode:
                        self._update_episode_details(
                            show_settings, dirname, filename, wanted_item.tvdb_id, wanted_item.season, episode
                        )
                else:
                    self._update_episode_details(
                        show_settings, dirname, filename, wanted_item.tvdb_id, wanted_item.season, wanted_item.episode
                    )
            if wanted_item.is_movie:
                # Do a force search if no imdb id found
                if not wanted_item.imdb_id:
                    wanted_item.imdb_id, _ = self.movie_indexer.get_imdb_id_and_year(
                        wanted_item.title, year=wanted_item.year, force_search=True
                    )

                # Skip if no imdb id is found
                if not wanted_item.imdb_id:
                    log.warning('Skipping movie file with unknown imdb id: %s', os.path.join(dirname, filename))
                    if not self.failed_movies_db.get_failed_movie(dirname):
                        self.failed_movies_db.set_failed_movie(dirname)
                    return

                # Store default movie settings if not yet available
                if not self.movie_settings_db.get_movie_settings(wanted_item.imdb_id):
                    self.movie_settings_db.set_movie_settings(MovieSettings.default_settings(wanted_item.imdb_id))
                movie_settings = self.movie_settings_db.get_movie_settings(wanted_item.imdb_id)

                # Get movie details
                movie_details = self.movie_db.get_movie(wanted_item.imdb_id)
                # Add movie to db if not yet in db
                if not movie_details:
                    movie_details = self.movie_indexer.get_movie_details(wanted_item.imdb_id)
                    if movie_details:
                        movie_details.path = dirname
                        self.movie_db.set_movie(movie_details)

                # Cache artwork (fullsize and thumbnail) if not yet cached
                if movie_details:
                    # Poster
                    if movie_details.poster:
                        artwork_type = 'poster'
                        if not is_artwork_cached(self.movie_indexer.name, movie_details.imdb_id, artwork_type):
                            artwork_url = movie_details.get_artwork_url(artwork_type, thumbnail=False)
                            cache_artwork(self.movie_indexer.name, movie_details.imdb_id, artwork_type, artwork_url)
                        if not is_artwork_cached(
                            self.movie_indexer.name, movie_details.imdb_id, artwork_type, thumbnail=True
                        ):
                            artwork_url = movie_details.get_artwork_url(artwork_type, thumbnail=True)
                            cache_artwork(
                                self.movie_indexer.name,
                                movie_details.imdb_id,
                                artwork_type,
                                artwork_url,
                                thumbnail=True,
                            )

                # Check movie details
                self._update_movie_details(movie_settings, dirname, filename, wanted_item.imdb_id)

    def _get_show_path(self, dirname: str) -> str:
        path = dirname
        # Get root show path (ignore season folders)
        while 'season' in safe_lowercase(os.path.normpath(os.path.normcase(path))):
            path, _ = os.path.split(path)
        return path

    def _update_episode_details(
        self, show_settings: ShowSettings, dirname: str, filename: str, show_tvdb_id: int, season: int, episode: int
    ) -> None:
        episode_details = self.show_episodes_db.get_show_episode_by_show(show_tvdb_id, season, episode)

        # If no episode is found, we need to fetch the episode details of the show
        # This is because the show is still on-going and we didn't got all episodes when the show was loaded
        if not episode_details:
            episode_details = self.show_indexer.get_show_episode(show_tvdb_id, season, episode)
            if episode_details:
                self.show_episodes_db.set_show_episode(episode_details)

        if episode_details:
            # Set details
            available_subtitles = get_available_subtitles(
                dirname, filename, autosubliminal.SCANEMBEDDEDSUBS, autosubliminal.SCANHARDCODEDSUBS
            )
            missing_languages = get_missing_subtitle_languages(
                available_subtitles, wanted_languages=show_settings.wanted_languages
            )
            episode_details.subtitles = available_subtitles
            episode_details.missing_languages = missing_languages
            episode_details.path = os.path.abspath(os.path.join(dirname, filename))
            # Update details in db
            self.show_episodes_db.update_show_episode(episode_details, subtitles=True)

    def _update_movie_details(self, movie_settings: MovieSettings, dirname: str, filename: str, imdb_id: str) -> None:
        movie_details = self.movie_db.get_movie(imdb_id)

        if movie_details:
            # Set details
            available_subtitles = get_available_subtitles(
                dirname, filename, autosubliminal.SCANEMBEDDEDSUBS, autosubliminal.SCANHARDCODEDSUBS
            )
            missing_languages = get_missing_subtitle_languages(
                available_subtitles, wanted_languages=movie_settings.wanted_languages
            )
            movie_details.subtitles = available_subtitles
            movie_details.missing_languages = missing_languages
            movie_details.path = os.path.abspath(os.path.join(dirname, filename))
            # Update details in db
            self.movie_db.update_movie(movie_details, subtitles=True)
