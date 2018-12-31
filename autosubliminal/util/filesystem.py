# coding=utf-8

import codecs
import logging
import os
import re
import time

import langdetect
import pysrt
import subliminal
from babelfish import Error as BabelfishError, Language
from enzyme.mkv import MKV
from six import text_type

import autosubliminal
from autosubliminal.core.subtitle import Subtitle, EMBEDDED, HARDCODED, EXTERNAL

log = logging.getLogger(__name__)

SUBTITLE_EXTENSION = u'.srt'
HARDCODED_SUBS_EXTENSION = u'.hardcoded.subs'


def one_path_exists(paths, retry_delay=15):
    exists = False
    if paths and isinstance(paths, list):
        for path in paths:
            if os.path.exists(path):
                exists = True
            else:
                # In case of a network path, it's possible that the path is not directly found -> sleep and check again
                time.sleep(retry_delay)
                if os.path.exists(path):
                    exists = True
    return exists


def is_skipped_dir(dirname):
    skipped = False
    if autosubliminal.SKIPHIDDENDIRS and os.path.split(dirname)[1].startswith(u'.'):
        log.debug('Skipping hidden directory: %s', dirname)
        skipped = True
    elif re.search('_unpack_', dirname, flags=re.IGNORECASE):
        log.debug('Skipping _unpack_ directory: %s', dirname)
        skipped = True
    elif re.search('_failed_', dirname, flags=re.IGNORECASE):
        log.debug('Skipping _failed_ directory: %s', dirname)
        skipped = True
    return skipped


def is_valid_video_file(filename):
    valid = False
    _, ext = os.path.splitext(filename)
    if ext and ext in subliminal.video.VIDEO_EXTENSIONS:
        valid = True
        # Skip 'sample' videos
        if re.search('sample', filename, flags=re.IGNORECASE):
            log.debug('Skipping sample video file: %s', filename)
            valid = False
    return valid


def save_hardcoded_subtitle_languages(dirname, filename, hardcoded_subtitle_languages):
    log.debug('Saving hardcoded subtitle(s)')

    hardcoded_filename = os.path.join(dirname, filename + HARDCODED_SUBS_EXTENSION)
    # Check if there already exists a file wit hardcoded subtitle languages
    existing_hardcoded_subtitle_languages = []
    if os.path.exists(hardcoded_filename):
        existing_hardcoded_subtitle_languages = [s.language for s in get_hardcoded_subtitles(dirname, filename)]

    # Write hardcoded subtitle languages to file (use set to exclude duplicates)
    languages = set(existing_hardcoded_subtitle_languages + hardcoded_subtitle_languages)
    with codecs.open(hardcoded_filename, mode='w', encoding='utf-8') as f:
        f.write(','.join(languages))


def check_missing_subtitle_languages(dirname, filename, scan_embedded=False, scan_hardcoded=False,
                                     detect_invalid=False):
    log.debug('Checking for missing subtitle(s)')
    missing_languages = []

    # Check embedded languages
    embedded_languages = []
    if scan_embedded:
        embedded_languages = [s.language for s in get_embedded_subtitles(dirname, filename, log_scan=True)]

    # Check hardcoded languages
    hardcoded_languages = []
    if scan_hardcoded:
        hardcoded_languages = [s.language for s in get_hardcoded_subtitles(dirname, filename)]

    # Check default language
    detect_language = False
    if autosubliminal.DEFAULTLANGUAGE:
        log.debug('Checking for missing default language')
        default_language = Language.fromietf(autosubliminal.DEFAULTLANGUAGE)

        # Check with or without alpha2 code suffix depending on configuration
        if autosubliminal.DEFAULTLANGUAGESUFFIX:
            srt_file = os.path.splitext(filename)[0] + u'.' + autosubliminal.DEFAULTLANGUAGE + SUBTITLE_EXTENSION
        else:
            srt_file = os.path.splitext(filename)[0] + SUBTITLE_EXTENSION
            detect_language = detect_invalid  # Only for default subtitle without suffix
        srt_path = os.path.join(dirname, srt_file)
        sub_exists = os.path.exists(srt_path)
        if not sub_exists and default_language not in embedded_languages + hardcoded_languages:
            log.debug('Video is missing the default language: %s', autosubliminal.DEFAULTLANGUAGE)
            missing_languages.append(autosubliminal.DEFAULTLANGUAGE)
        elif sub_exists and detect_language:
            log.debug('Subtitle found, checking if it is not an invalid default language')
            detected_language = _detect_subtitle_language(srt_path)
            if detected_language and detected_language != default_language:
                log.warning('Detected an invalid default language: %s', detected_language)
                # Remove the subtitle with an invalid detected language in order to search for a new one
                if _delete_subtitle_file(srt_path, detected_language):
                    log.debug('Video is missing the default language: %s', autosubliminal.DEFAULTLANGUAGE)
                    missing_languages.append(autosubliminal.DEFAULTLANGUAGE)
            else:
                log.debug('No invalid default language detected')

    # Check additional languages
    if autosubliminal.ADDITIONALLANGUAGES:
        log.debug('Checking for missing additional language(s)')

        # Always check with alpha2 code suffix for additional languages
        for language in autosubliminal.ADDITIONALLANGUAGES:
            additional_language = Language.fromietf(language)
            srt_file = os.path.splitext(filename)[0] + u'.' + language + SUBTITLE_EXTENSION
            if not os.path.exists(os.path.join(dirname, srt_file)) and additional_language not in embedded_languages:
                log.debug('Video is missing the additional language: %s', language)
                missing_languages.append(language)

    return missing_languages


def get_available_subtitles(dirname, filename, scan_embedded=False, scan_hardcoded=False):
    subtitles = []

    # Embedded subtitles
    if scan_embedded:
        subtitles.extend(get_embedded_subtitles(dirname, filename))

    # Hardcoded subtitles
    if scan_hardcoded:
        subtitles.extend(get_hardcoded_subtitles(dirname, filename))

    # External subtitles
    subtitles.extend(get_external_subtitles(dirname, filename))

    return subtitles


def get_embedded_subtitles(dirname, filename, log_scan=False):
    """Get the embedded subtitle languages for a video file.

    Based on subliminal.video.scan_video(...) but only keep the check for embedded subtitles.
    """
    log.debug('Checking for embedded subtitle(s)')

    embedded_subtitle_languages = set()
    path = os.path.join(dirname, filename)
    try:
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
                            log_scan and log.error('Embedded subtitle track language %r is not a valid language',
                                                   st.language)
                    elif st.name:
                        try:
                            embedded_subtitle_languages.add(Language.fromname(st.name))
                        except BabelfishError:
                            log_scan and log.error('Embedded subtitle track name %r is not a valid language', st.name)
                    else:
                        log_scan and log.error('Embedded subtitle track language %r is not a valid language',
                                               st.language)
                log_scan and log.debug('Found embedded subtitles %r with enzyme', embedded_subtitle_languages)
            else:
                log_scan and log.debug('MKV has no subtitle track')
        else:
            log_scan and log.debug('Check is only supported for MKV containers, skipping')
    except Exception:
        log_scan and log.error('Parsing video metadata with enzyme failed')

    return [Subtitle(EMBEDDED, language.alpha2, path) for language in embedded_subtitle_languages if
            language != Language('und')]


def get_hardcoded_subtitles(dirname, filename):
    log.debug('Checking for hardcoded subtitle(s)')

    hardcoded_subtitle_languages = []
    path = os.path.join(dirname, filename)
    file_path = os.path.join(dirname, filename + HARDCODED_SUBS_EXTENSION)
    if os.path.exists(file_path):
        with codecs.open(file_path, mode='r', encoding='utf-8') as f:
            subtitles = f.readline().strip()
            hardcoded_subtitle_languages = subtitles.split(',')  # Subs are comma separated on 1st line

    return [Subtitle(HARDCODED, language, path) for language in hardcoded_subtitle_languages]


def get_external_subtitles(dirname, filename):
    log.debug('Checking for external subtitle(s)')

    external_subtitle_languages = []
    video_name, _ = os.path.splitext(filename)
    for f in os.listdir(dirname):
        name, ext = os.path.splitext(f)
        if video_name in name and ext == SUBTITLE_EXTENSION:
            external_subtitle_languages.append(Subtitle(EXTERNAL, get_subtitle_language(f), os.path.join(dirname, f)))

    return external_subtitle_languages


def get_subtitle_language(filename):
    video_name, _ = os.path.splitext(filename)
    language = None
    # Try to parse the 2 last characters as language
    try:
        language = Language.fromietf(video_name[-2:])
    except Exception:
        pass
    # Check if language suffix is used in filename (f.e. <video_name>.nl)
    # If no language suffix is used, we assume it's the default language
    if video_name[-3:-2] == '.' and language:
        return text_type(language)
    else:
        return autosubliminal.DEFAULTLANGUAGE


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
