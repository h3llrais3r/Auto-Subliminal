# coding=utf-8

import logging
import os
from typing import List, Optional

import autosubliminal
from autosubliminal import fileprocessor
from autosubliminal.core.item import WantedItem
from autosubliminal.core.queue import release_wanted_queue_lock_on_exception
from autosubliminal.core.scheduler import ScheduledProcess
from autosubliminal.db import MovieSettingsDb, ShowSettingsDb, WantedItemsDb
from autosubliminal.util.filesystem import (
    check_missing_subtitle_languages,
    is_skipped_dir,
    is_valid_video_file,
    one_path_exists,
)
from autosubliminal.util.skip import skip_movie, skip_show
from autosubliminal.util.websocket import send_websocket_notification

log = logging.getLogger(__name__)


class DiskScanner(ScheduledProcess):
    """Disk scanner.

    Scan the specified path for episodes and movies with missing subtitles.
    If found, episodes and movies are added to the WANTEDQUEUE.
    """

    def __init__(self) -> None:
        super().__init__()
        self.wanted_db = WantedItemsDb()
        self.show_settings_db = ShowSettingsDb()
        self.movie_settings_db = MovieSettingsDb()

    @release_wanted_queue_lock_on_exception
    def run(self, force_run: bool) -> None:
        paths = autosubliminal.VIDEOPATHS
        log.info('Starting round of local disk checking at %r', paths)
        send_websocket_notification('Scanning disk...')

        # Check if a path exists to scan
        if not one_path_exists(paths):
            log.error('None of the configured video paths (%r) exists, aborting...', paths)
            return

        # Walk through paths to search for wanted items
        new_wanted_items: List[WantedItem] = []
        old_wanted_items = self.wanted_db.get_wanted_items()
        for path in paths:
            try:
                new_wanted_items.extend(self._scan_path(path))
            except Exception:
                log.exception('Could not scan the video path (%s), skipping it', path)

        # Cleanup wanted items that have been removed from disk manually but are still stored in the db
        log.debug('Checking for non existing wanted items in wanted_items database')
        for item in old_wanted_items:
            if item not in new_wanted_items:
                self.wanted_db.delete_wanted_item(item.id)
                log.debug('Deleted non existing wanted item: %s', item.video_path)

        # Populate WANTEDQUEUE with all items from wanted_items database
        log.info('Listing videos with missing subtitles:')
        autosubliminal.WANTEDQUEUE = []
        for item in self.wanted_db.get_wanted_items():
            log.info('%s %s', item.video_path, item.languages)
            autosubliminal.WANTEDQUEUE.append(item)

        send_websocket_notification('Disk scan finished.')
        log.info('Finished round of local disk checking')

    def _scan_path(self, path: str) -> List[WantedItem]:
        log.info('Scanning video path: %s', path)
        wanted_items: List[WantedItem] = []

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
                    wanted_item: WantedItem = None
                    try:
                        wanted_item = self._scan_file(dirname, filename)
                    except Exception:
                        log.exception('Error while scanning video file: %s', os.path.join(dirname, filename))

                    # Add it to list of wanted items
                    if wanted_item:
                        log.debug('Video added to list of wanted items')
                        wanted_items.append(wanted_item)

        return wanted_items

    def _scan_file(self, dirname: str, filename: str) -> Optional[WantedItem]:
        # Check if video file has already been processed before, so we don't need to process it again
        wanted_item = self.wanted_db.get_wanted_item_by_video_path(os.path.join(dirname, filename), ignore_case=True)
        if wanted_item:
            log.debug('Video found in wanted_items database, no need to scan it again')
        else:
            log.debug('Video not found in wanted_items database, start scanning it')

            # Process file
            wanted_item = fileprocessor.process_file(dirname, filename)
            if wanted_item:
                # Determine wanted languages
                wanted_languages: List[str] = []
                if wanted_item.is_episode and wanted_item.tvdb_id:
                    show_settings = self.show_settings_db.get_show_settings(wanted_item.tvdb_id)
                    if show_settings and show_settings.wanted_languages:
                        wanted_languages = show_settings.wanted_languages
                elif wanted_item.is_movie and wanted_item.imdb_id:
                    movie_settings = self.movie_settings_db.get_movie_settings(wanted_item.imdb_id)
                    if movie_settings and movie_settings.wanted_languages:
                        wanted_languages = movie_settings.wanted_languages

                # Check for missing subtitles (scan embedded and detect invalid if configured to do so)
                languages = check_missing_subtitle_languages(dirname, filename,
                                                             scan_embedded=autosubliminal.SCANEMBEDDEDSUBS,
                                                             scan_hardcoded=autosubliminal.SCANHARDCODEDSUBS,
                                                             detect_invalid=autosubliminal.DETECTINVALIDSUBLANGUAGE,
                                                             wanted_languages=wanted_languages)

                # Process the video file if there are missing subtitles
                if len(languages) > 0:
                    # Add missing languages and store in wanted_items database
                    wanted_item.languages = languages
                    self.wanted_db.set_wanted_item(wanted_item)

                else:
                    log.debug('Video has no missing subtitles')
                    return None

            else:
                return None

        # Check if we need to skip it and delete it from the database
        log.debug('Checking if the video needs to be skipped')
        if wanted_item:
            # Skip episode check
            if wanted_item.is_episode:
                title = wanted_item.title
                season = wanted_item.season
                if skip_show(title, season):
                    self.wanted_db.delete_wanted_item(wanted_item.id)
                    log.info('Skipping %s - Season %s', title, season)
                    return None

            # Skip movie check
            if wanted_item.is_movie:
                title = wanted_item.title
                year = wanted_item.year
                if skip_movie(title, year):
                    self.wanted_db.delete_wanted_item(wanted_item.id)
                    log.info('Skipping %s (%s)', title, year)
                    return None

        return wanted_item
