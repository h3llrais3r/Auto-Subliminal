# coding=utf-8

import codecs
import logging
import os
import re
import time
from typing import List, Optional, Set, Tuple, cast

import langdetect
import pysrt
import subliminal
from babelfish import Error as BabelfishError
from babelfish import Language
from enzyme import SubtitleTrack
from enzyme.mkv import MKV

import autosubliminal
from autosubliminal.core.subtitle import Subtitle
from autosubliminal.util.common import get_wanted_languages

log = logging.getLogger(__name__)

SUBTITLE_EXTENSION = '.srt'
HARDCODED_SUBS_EXTENSION = '.hardcoded.subs'
VIDEO_EXTENSIONS = subliminal.video.VIDEO_EXTENSIONS


def one_path_exists(paths: List[str], retry_delay: int = 15) -> bool:
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


def is_skipped_dir(dirname: str) -> bool:
    skipped = False
    if autosubliminal.SKIPHIDDENDIRS and os.path.split(dirname)[1].startswith('.'):
        log.debug('Skipping hidden directory: %s', dirname)
        skipped = True
    elif re.search('_unpack_', dirname, flags=re.IGNORECASE):
        log.debug('Skipping _unpack_ directory: %s', dirname)
        skipped = True
    elif re.search('_failed_', dirname, flags=re.IGNORECASE):
        log.debug('Skipping _failed_ directory: %s', dirname)
        skipped = True
    return skipped


def is_valid_video_file(filename: str, video_extensions: Tuple[str, ...] = VIDEO_EXTENSIONS) -> bool:
    valid = False
    _, ext = os.path.splitext(filename)
    if ext and ext in video_extensions:
        valid = True
        # Skip 'sample' videos
        if re.search('sample', filename, flags=re.IGNORECASE):
            log.debug('Skipping sample video file: %s', filename)
            valid = False
    return valid


def save_hardcoded_subtitle_languages(dirname: str, filename: str, hardcoded_subtitle_languages: List[str]) -> None:
    log.debug('Saving hardcoded subtitle(s)')
    hardcoded_filename = os.path.join(dirname, filename + HARDCODED_SUBS_EXTENSION)

    # Write hardcoded subtitle languages to file (use set to exclude duplicates), overwrite existing file!
    languages = set(hardcoded_subtitle_languages)
    with codecs.open(hardcoded_filename, mode='w', encoding='utf-8') as f:
        f.write(','.join(languages))


def check_missing_subtitle_languages(
    dirname: str,
    filename: str,
    scan_embedded: bool = False,
    scan_hardcoded: bool = False,
    detect_invalid: bool = False,
    wanted_languages: List[str] = None,
) -> List[str]:
    log.debug('Checking for missing subtitle(s)')
    missing_languages: List[str] = []

    # Check embedded languages
    embedded_languages: List[str] = []
    if scan_embedded:
        embedded_languages = [s.language for s in get_embedded_subtitles(dirname, filename, log_scan=True)]

    # Check hardcoded languages
    hardcoded_languages: List[str] = []
    if scan_hardcoded:
        hardcoded_languages = [s.language for s in get_hardcoded_subtitles(dirname, filename)]

    # Determine list of languages to check
    languages_to_check = set(wanted_languages or get_wanted_languages())

    # Check default language
    detect_language = False
    if autosubliminal.DEFAULTLANGUAGE and autosubliminal.DEFAULTLANGUAGE in languages_to_check:
        log.debug('Checking for missing default language')
        languages_to_check.remove(autosubliminal.DEFAULTLANGUAGE)
        default_language = Language.fromietf(autosubliminal.DEFAULTLANGUAGE)

        # Check with or without language code suffix depending on configuration
        if autosubliminal.DEFAULTLANGUAGESUFFIX:
            srt_file = os.path.splitext(filename)[0] + '.' + autosubliminal.DEFAULTLANGUAGE + SUBTITLE_EXTENSION
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
    if languages_to_check:
        log.debug('Checking for missing additional language(s)')

        # Always check with language code suffix for additional languages
        for language in languages_to_check:
            additional_language = Language.fromietf(language)
            srt_file = os.path.splitext(filename)[0] + '.' + language + SUBTITLE_EXTENSION
            if not os.path.exists(os.path.join(dirname, srt_file)) and additional_language not in embedded_languages:
                log.debug('Video is missing the additional language: %s', language)
                missing_languages.append(language)

    return missing_languages


def get_available_subtitles(
    dirname: str, filename: str, scan_embedded: bool = False, scan_hardcoded: bool = False
) -> List[Subtitle]:
    subtitles: List[Subtitle] = []

    # Embedded subtitles
    if scan_embedded:
        subtitles.extend(get_embedded_subtitles(dirname, filename))

    # Hardcoded subtitles
    if scan_hardcoded:
        subtitles.extend(get_hardcoded_subtitles(dirname, filename))

    # External subtitles
    subtitles.extend(get_external_subtitles(dirname, filename))

    return subtitles


def get_embedded_subtitles(dirname: str, filename: str, log_scan: bool = False) -> List[Subtitle]:
    """Get the embedded subtitle languages for a video file.

    Based on subliminal.video.scan_video(...) but only keep the check for embedded subtitles.
    """
    log.debug('Checking for embedded subtitle(s)')

    languages: Set[Language] = set()
    path = os.path.join(dirname, filename)
    try:
        if filename.endswith('.mkv'):
            with open(path, mode='rb') as f:
                mkv = MKV(f)

            # subtitle tracks
            if mkv.subtitle_tracks:
                for st in cast(List[SubtitleTrack], mkv.subtitle_tracks):
                    if st.language:
                        try:
                            languages.add(Language.fromalpha3b(st.language))
                        except BabelfishError:
                            if log_scan:
                                log.error('Embedded subtitle track language %r is not a valid language', st.language)
                    elif st.name:
                        try:
                            languages.add(Language.fromname(st.name))
                        except BabelfishError:
                            if log_scan:
                                log.error('Embedded subtitle track name %r is not a valid language', st.name)
                    else:
                        if log_scan:
                            log.error('Embedded subtitle track language %r is not a valid language', st.language)
                if log_scan:
                    log.debug('Found embedded subtitles %r with enzyme', languages)
            else:
                if log_scan:
                    log.debug('MKV has no subtitle track')
        else:
            if log_scan:
                log.debug('Check is only supported for MKV containers, skipping')
    except Exception:
        if log_scan:
            log.error('Parsing video metadata with enzyme failed')

    return [Subtitle('embedded', str(language), path) for language in languages if language != Language('und')]


def get_hardcoded_subtitles(dirname: str, filename: str) -> List[Subtitle]:
    log.debug('Checking for hardcoded subtitle(s)')

    languages: List[str] = []
    path = os.path.join(dirname, filename)
    file_path = os.path.join(dirname, filename + HARDCODED_SUBS_EXTENSION)
    if os.path.exists(file_path):
        with codecs.open(file_path, mode='r', encoding='utf-8') as f:
            subtitles = f.readline().strip()
            if subtitles:
                languages = subtitles.split(',')  # Subs are comma separated on 1st line

    return [Subtitle('hardcoded', language, path) for language in languages]


def get_external_subtitles(dirname: str, filename: str) -> List[Subtitle]:
    log.debug('Checking for external subtitle(s)')

    languages: List[Subtitle] = []
    video_name, _ = os.path.splitext(filename)
    for f in os.listdir(dirname):
        name, ext = os.path.splitext(f)
        if video_name in name and ext == SUBTITLE_EXTENSION:
            languages.append(Subtitle('external', get_subtitle_language(f), os.path.join(dirname, f)))

    return languages


def get_subtitle_language(filename: str) -> str:
    video_name, _ = os.path.splitext(filename)
    language: Language = None
    # Try to parse the 2 last characters as language
    try:
        language = Language.fromietf(video_name[-2:])
    except Exception:
        pass
    # Check if language suffix is used in filename (f.e. <video_name>.nl)
    # If no language suffix is used, we assume it's the default language
    if video_name[-3:-2] == '.' and language:
        return str(language)
    else:
        return autosubliminal.DEFAULTLANGUAGE


def _detect_subtitle_language(srt_path: str) -> Optional[Language]:
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


def _delete_subtitle_file(subtitle_path: str, language: Language) -> bool:
    try:
        log.warning('Deleting subtitle with invalid language: %s [%s]', subtitle_path, language)
        os.remove(subtitle_path)
        return True
    except Exception:
        log.exception('Unable to delete subtitle with invalid language: %s [%s]', subtitle_path, language)
        return False
