# coding=utf-8

import logging
import os
import re
import time

import langdetect
import pysrt
import subliminal
from babelfish import Error as BabelfishError, Language
from enzyme.mkv import MKV

import autosubliminal
from autosubliminal import fileprocessor
from autosubliminal.util.common import add_event_message, add_notification_message
from autosubliminal.util.queue import get_wanted_queue_lock, release_wanted_queue_lock, \
    release_wanted_queue_lock_on_exception
from autosubliminal.util.skip import skip_movie, skip_show
from autosubliminal.core.scheduler import ScheduledProcess
from autosubliminal.db import WantedItems

log = logging.getLogger(__name__)


class DiskScanner(ScheduledProcess):
    """
    Disk scanner. Scan the specified path for episodes and movies with missing subtitles.
    If found, add these episodes and movies to the WANTEDQUEUE.
    """

    def __init__(self):
        super(DiskScanner, self).__init__()

    @release_wanted_queue_lock_on_exception
    def run(self, force_run):
        # Get wanted queue lock
        if not get_wanted_queue_lock():
            return False

        log.info('Starting round of local disk checking at %r', autosubliminal.VIDEOPATHS)

        # Show info message (only when run was forced manually)
        if force_run:
            add_notification_message('Scanning disk...')

        # Check if a directory exists to scan
        one_dir_exists = False
        for videodir in autosubliminal.VIDEOPATHS:
            if os.path.exists(videodir):
                one_dir_exists = True
            else:
                # In case of a network path, it's possible that the path is not directly found -> sleep and check again
                time.sleep(15)
                if os.path.exists(videodir):
                    one_dir_exists = True
        if not one_dir_exists:
            # Release wanted queue lock
            log.error('None of the configured video paths (%r) exists, aborting...', autosubliminal.VIDEOPATHS)
            release_wanted_queue_lock()
            return True

        # Walk through paths to search for wanted items
        new_wanted_items = []
        db = WantedItems()
        old_wanted_items = db.get_wanted_items()
        for videodir in autosubliminal.VIDEOPATHS:
            try:
                new_wanted_items.extend(walk_dir(videodir))
            except Exception:
                log.exception('Could not scan the video path (%s), skipping it', videodir)

        # Cleanup wanted items that have been removed from disk manually but are still stored in the db
        log.debug('Checking for non existing wanted items in wanted_items database')
        for item in old_wanted_items:
            if item not in new_wanted_items:
                db.delete_wanted_item(item)
                log.debug('Deleted non existing wanted item: %s', item['videopath'])

        # Populate WANTEDQUEUE with all items from wanted_items database
        log.info('Listing videos with missing subtitles:')
        autosubliminal.WANTEDQUEUE = []
        for item in db.get_wanted_items():
            log.info('%s %s', item['videopath'], item['languages'])
            autosubliminal.WANTEDQUEUE.append(item)

        # Release wanted queue lock
        log.info('Finished round of local disk checking')
        release_wanted_queue_lock()

        # Send home page reload event
        add_event_message('HOME_PAGE_RELOAD')

        return True


def walk_dir(path):
    log.info('Scanning video path: %s', path)
    wanted_items = []
    db = WantedItems()

    # Check all folders and files
    for dirname, dirnames, filenames in os.walk(os.path.join(path)):
        log.debug('Directory: %s', dirname)

        # Check folders to be skipped
        if autosubliminal.SKIPHIDDENDIRS and os.path.split(dirname)[1].startswith(u'.'):
            continue
        if re.search('_unpack_', dirname, re.IGNORECASE):
            log.debug('Found a unpack directory, skipping')
            continue
        if re.search('_failed_', dirname, re.IGNORECASE):
            log.debug('Found a failed directory, skipping')
            continue

        # Check files
        for filename in filenames:
            root, ext = os.path.splitext(filename)

            # Check for video files
            if ext and ext in subliminal.video.VIDEO_EXTENSIONS:
                # Skip 'sample' videos
                if re.search('sample', filename, re.IGNORECASE):
                    continue
                log.debug('Video file found: %s', filename)

                # Check if video file has already been processed before, so we don't need to process it again
                wanted_item = db.get_wanted_item(os.path.join(dirname, filename))
                if wanted_item:
                    log.debug('Video found in wanted_items database, no need to scan it again')
                else:
                    log.debug('Video not found in wanted_items database, start scanning it')

                    # Check for missing subtitles
                    languages = check_missing_subtitle_languages(dirname, filename)

                    # Process the video file if there are missing subtitles
                    if len(languages) > 0:
                        wanted_item = fileprocessor.process_file(dirname, filename)
                        if wanted_item:
                            # Add wanted languages and store in wanted_items database
                            wanted_item['languages'] = languages
                            db.set_wanted_item(wanted_item)
                        else:
                            continue
                    else:
                        log.debug('Video has no missing subtitles')
                        continue

                # Check if we need to skip it and delete it from the database
                log.debug('Checking if the video needs to be skipped')
                if wanted_item:
                    # Skip episode check
                    if wanted_item['type'] == 'episode':
                        title = wanted_item['title']
                        season = wanted_item['season']
                        episode = wanted_item['episode']
                        if skip_show(title, season, episode):
                            db.delete_wanted_item(wanted_item)
                            log.info('Skipping %s - Season %s Episode %s', title, season, episode)
                            continue
                    # Skip movie check
                    elif wanted_item['type'] == 'movie':
                        title = wanted_item['title']
                        year = wanted_item['year']
                        if skip_movie(title, year):
                            db.delete_wanted_item(wanted_item)
                            log.info('Skipping %s (%s)', title, year)
                            continue

                # Add it to list of wanted items
                log.debug('Video added to list of wanted items')
                wanted_items.append(wanted_item)

    return wanted_items


def check_missing_subtitle_languages(dirname, filename):
    log.debug('Checking for missing subtitle(s)')
    missing_subtitles = []

    # Check embedded subtitles
    embedded_subtitles = []
    if autosubliminal.SCANEMBEDDEDSUBS:
        embedded_subtitles = _get_embedded_subtitles(dirname, filename)

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
            detect_language = autosubliminal.DETECTINVALIDSUBLANGUAGE
        srt_path = os.path.join(dirname, srt_file)
        sub_exists = os.path.exists(srt_path)
        if not sub_exists and default_language not in embedded_subtitles:
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
            if not os.path.exists(os.path.join(dirname, srt_file)) and additional_language not in embedded_subtitles:
                log.debug('Video is missing the additional language: %s', language)
                missing_subtitles.append(language)

    return missing_subtitles


def _get_embedded_subtitles(dirname, filename):
    """
    Based on subliminal.video.scan_video(...) but only keep the check for embedded subtitles
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
