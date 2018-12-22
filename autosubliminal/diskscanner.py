# coding=utf-8

import logging
import os

import langdetect
import pysrt
from babelfish import Error as BabelfishError, Language
from enzyme.mkv import MKV

import autosubliminal
from autosubliminal import fileprocessor
from autosubliminal.core.scheduler import ScheduledProcess
from autosubliminal.db import WantedItemsDb
from autosubliminal.util.filesystem import is_skipped_dir, is_valid_video_file, one_path_exists
from autosubliminal.util.queue import release_wanted_queue_lock_on_exception
from autosubliminal.util.skip import skip_movie, skip_show
from autosubliminal.util.websocket import send_websocket_event, send_websocket_notification, PAGE_RELOAD

log = logging.getLogger(__name__)


class DiskScanner(ScheduledProcess):
    """Disk scanner.

    Scan the specified path for episodes and movies with missing subtitles.
    If found, episodes and movies are added to the WANTEDQUEUE.
    """

    def __init__(self):
        super(DiskScanner, self).__init__()
        self.wanted_db = WantedItemsDb()

    @release_wanted_queue_lock_on_exception
    def run(self, force_run):
        paths = autosubliminal.VIDEOPATHS
        log.info('Starting round of local disk checking at %r', paths)

        # Show info message (only when run was forced manually)
        if force_run:
            send_websocket_notification('Scanning disk...')

        # Check if a path exists to scan
        if not one_path_exists(paths):
            log.error('None of the configured video paths (%r) exists, aborting...', paths)
            return

        # Walk through paths to search for wanted items
        new_wanted_items = []
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
                self.wanted_db.delete_wanted_item(item)
                log.debug('Deleted non existing wanted item: %s', item.videopath)

        # Populate WANTEDQUEUE with all items from wanted_items database
        log.info('Listing videos with missing subtitles:')
        autosubliminal.WANTEDQUEUE = []
        for item in self.wanted_db.get_wanted_items():
            log.info('%s %s', item.videopath, item.languages)
            autosubliminal.WANTEDQUEUE.append(item)

        # Send home page reload event
        send_websocket_event(PAGE_RELOAD, data={'name': 'home'})

        log.info('Finished round of local disk checking')

    def _scan_path(self, path):
        log.info('Scanning video path: %s', path)
        wanted_items = []

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
                    wanted_item = self._scan_file(dirname, filename)

                    # Add it to list of wanted items
                    if wanted_item:
                        log.debug('Video added to list of wanted items')
                        wanted_items.append(wanted_item)

        return wanted_items

    def _scan_file(self, dirname, filename):
        # Check if video file has already been processed before, so we don't need to process it again
        wanted_item = self.wanted_db.get_wanted_item(os.path.join(dirname, filename))
        if wanted_item:
            log.debug('Video found in wanted_items database, no need to scan it again')
        else:
            log.debug('Video not found in wanted_items database, start scanning it')

            # Check for missing subtitles (scan embedded and detect invalid if configured to do so)
            languages = get_missing_subtitle_languages(dirname, filename, scan_embedded=autosubliminal.SCANEMBEDDEDSUBS,
                                                       detect_invalid=autosubliminal.DETECTINVALIDSUBLANGUAGE)

            # Process the video file if there are missing subtitles
            if len(languages) > 0:
                wanted_item = fileprocessor.process_file(dirname, filename)
                if wanted_item:
                    # Add wanted languages and store in wanted_items database
                    wanted_item.languages = languages
                    self.wanted_db.set_wanted_item(wanted_item)
                else:
                    return None
            else:
                log.debug('Video has no missing subtitles')
                return None

        # Check if we need to skip it and delete it from the database
        log.debug('Checking if the video needs to be skipped')
        if wanted_item:
            # Skip episode check
            if wanted_item.is_episode:
                title = wanted_item.title
                season = wanted_item.season
                if skip_show(title, season):
                    self.wanted_db.delete_wanted_item(wanted_item)
                    log.info('Skipping %s - Season %s', title, season)
                    return None

            # Skip movie check
            if wanted_item.is_movie:
                title = wanted_item.title
                year = wanted_item.year
                if skip_movie(title, year):
                    self.wanted_db.delete_wanted_item(wanted_item)
                    log.info('Skipping %s (%s)', title, year)
                    return None

        return wanted_item


def get_available_subtitle_languages(dirname, filename, missing_subtitle_languages=None):
    # Get the wanted languages
    wanted_languages = []
    wanted_languages.append(autosubliminal.DEFAULTLANGUAGE) if autosubliminal.DEFAULTLANGUAGE else None
    wanted_languages.extend(autosubliminal.ADDITIONALLANGUAGES) if autosubliminal.ADDITIONALLANGUAGES else None

    # Get the missing languages if not yet available
    missing_languages = missing_subtitle_languages or get_missing_subtitle_languages(dirname, filename)

    # Return the available languages (= not in missing languages)
    return [language for language in wanted_languages if language not in missing_languages]


def get_missing_subtitle_languages(dirname, filename, scan_embedded=False, detect_invalid=False):
    log.debug('Checking for missing subtitle(s)')
    missing_subtitles = []

    # Check embedded subtitles
    embedded_languages = []
    if scan_embedded:
        embedded_languages = get_embedded_subtitle_languages(dirname, filename)

    # Check default language
    detect_language = False
    if autosubliminal.DEFAULTLANGUAGE:
        log.debug('Checking for missing default language')
        default_language = Language.fromietf(autosubliminal.DEFAULTLANGUAGE)

        # Check with or without alpha2 code suffix depending on configuration
        if autosubliminal.DEFAULTLANGUAGESUFFIX:
            srt_file = os.path.splitext(filename)[0] + u'.' + autosubliminal.DEFAULTLANGUAGE + u'.srt'
        else:
            srt_file = os.path.splitext(filename)[0] + u'.srt'
            detect_language = detect_invalid  # Only for default subtitle without suffix
        srt_path = os.path.join(dirname, srt_file)
        sub_exists = os.path.exists(srt_path)
        if not sub_exists and default_language not in embedded_languages:
            log.debug('Video is missing the default language: %s', autosubliminal.DEFAULTLANGUAGE)
            missing_subtitles.append(autosubliminal.DEFAULTLANGUAGE)
        elif sub_exists and detect_language:
            log.debug('Subtitle found, checking if it is not an invalid default language')
            detected_language = _detect_subtitle_language(srt_path)
            if detected_language and detected_language != default_language:
                log.warning('Detected an invalid default language: %s', detected_language)
                # Remove the subtitle with an invalid detected language in order to search for a new one
                if _delete_subtitle_file(srt_path, detected_language):
                    log.debug('Video is missing the default language: %s', autosubliminal.DEFAULTLANGUAGE)
                    missing_subtitles.append(autosubliminal.DEFAULTLANGUAGE)
            else:
                log.debug('No invalid default language detected')

    # Check additional languages
    if autosubliminal.ADDITIONALLANGUAGES:
        log.debug('Checking for missing additional language(s)')

        # Always check with alpha2 code suffix for additional languages
        for language in autosubliminal.ADDITIONALLANGUAGES:
            additional_language = Language.fromietf(language)
            srt_file = os.path.splitext(filename)[0] + u'.' + language + u'.srt'
            if not os.path.exists(os.path.join(dirname, srt_file)) and additional_language not in embedded_languages:
                log.debug('Video is missing the additional language: %s', language)
                missing_subtitles.append(language)

    return missing_subtitles


def get_embedded_subtitle_languages(dirname, filename):
    """Get the embedded subtitle languages for a video file.

    Based on subliminal.video.scan_video(...) but only keep the check for embedded subtitles.
    """
    log.debug('Checking for embedded subtitle(s)')

    embedded_subtitle_languages = set()
    try:
        path = os.path.join(dirname, filename)
        if filename.endswith('.mkv'):
            with open(path, 'rb') as f:
                mkv = MKV(f)

            # subtitle tracks
            if mkv.subtitle_tracks:
                for st in mkv.subtitle_tracks:
                    if st.language:
                        try:
                            embedded_subtitle_languages.add(Language.fromalpha3b(st.language))
                        except BabelfishError:
                            log.error('Embedded subtitle track language %r is not a valid language', st.language)
                            embedded_subtitle_languages.add(Language('und'))
                    elif st.name:
                        try:
                            embedded_subtitle_languages.add(Language.fromname(st.name))
                        except BabelfishError:
                            log.error('Embedded subtitle track name %r is not a valid language', st.name)
                            embedded_subtitle_languages.add(Language('und'))
                    else:
                        embedded_subtitle_languages.add(Language('und'))
                log.debug('Found embedded subtitles %r with enzyme', embedded_subtitle_languages)
            else:
                log.debug('MKV has no subtitle track')
        else:
            log.debug('Check is only supported for MKV containers, skipping')
    except Exception:
        log.error('Parsing video metadata with enzyme failed')

    return embedded_subtitle_languages


def _detect_subtitle_language(srt_path):
    log.debug('Detecting subtitle language')

    # Load srt file (try first iso-8859-1 with fallback to utf-8)
    try:
        subtitle = pysrt.open(path=srt_path, encoding='iso-8859-1')
    except Exception:
        try:
            subtitle = pysrt.open(path=srt_path, encoding='utf-8')
        except Exception:
            # If we can't read it, we can't detect, so return
            return None

    # Read first 5 subtitle lines to determine the language
    if len(subtitle) >= 5:
        text = ''
        for sub in subtitle[0:5]:
            text += sub.text

        # Detect the language with highest probability and return it if it's more than the required minimum probability
        detected_languages = langdetect.detect_langs(text)
        log.debug('Detected subtitle language(s): %s', detected_languages)
        if len(detected_languages) > 0:
            # Get first detected language (list is sorted according to probability, highest first)
            detected_language = detected_languages[0]
            language_probability = detected_language.prob
            if language_probability >= autosubliminal.DETECTEDLANGUAGEPROBABILITY:
                log.debug('Probability of detected subtitle language accepted: %s', detected_language)
                return Language.fromietf(detected_language.lang)
            else:
                log.debug('Probability of detected subtitle language too low: %s', detected_language)

    return None


def _delete_subtitle_file(subtitle_path, language):
    try:
        log.warning('Deleting subtitle with invalid language: %s [%s]', subtitle_path, language)
        os.remove(subtitle_path)
        return True
    except Exception:
        log.exception('Unable to delete subtitle with invalid language: %s [%s]', subtitle_path, language)
        return False
