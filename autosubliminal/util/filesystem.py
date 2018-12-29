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
from autosubliminal.util.common import natural_keys, safe_lowercase

log = logging.getLogger(__name__)

VIDEO_TYPE = u'video'
SUBTITLE_TYPE = u'subtitle'
SUBTITLE_EXTENSION = u'.srt'
HARDCODED_SUBS_EXTENSION = u'.hardcoded.subs'
FILE_EXTENSIONS = list(map(text_type, subliminal.VIDEO_EXTENSIONS)) + [SUBTITLE_EXTENSION]


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


def get_show_files(show_path, embedded_subtitles):
    """Get all show files.

    :param show_path: the root path of the show (folder)
    :type show_path: str
    :param embedded_subtitles: the dict with filenames with embedded subtitles
    :type embedded_subtitles: dict
    :return: a list of dict objects representing a location (name and path) and its list of dict objects representing
             a file (filename and type)
    :rtype: list[dict]
    """

    # Show files are supposed to be stored in individual season dirs or the root dir only
    files = {}
    for dirpath, dirnames, filenames in os.walk(show_path):
        if 'season' in safe_lowercase(os.path.normpath(os.path.normcase(dirpath))):
            _, season_name = os.path.split(dirpath)
            # Files in season dirs
            season_files = []
            for f in filenames:
                _, ext = os.path.splitext(os.path.normcase(f))
                if safe_lowercase(ext) in FILE_EXTENSIONS:
                    file_type = _get_file_type(ext)
                    language = None
                    if file_type == SUBTITLE_TYPE:
                        language = get_subtitle_language(f)
                    elif file_type == VIDEO_TYPE:
                        # Add embedded languages to video filename
                        video_path = os.path.join(dirpath, f)
                        if embedded_subtitles and video_path in embedded_subtitles:
                            language = embedded_subtitles[video_path]
                    season_files.append({'filename': f, 'type': file_type, 'language': language})
            if season_files:
                sorted_files = sorted(season_files, key=lambda k: k['filename'])
                files.update({season_name: {'path': dirpath, 'files': sorted_files}})
        elif dirpath == show_path:
            # Files in root dir
            root_name = 'Root'
            root_files = []
            for f in filenames:
                _, ext = os.path.splitext(os.path.normcase(f))
                if safe_lowercase(ext) in FILE_EXTENSIONS:
                    file_type = _get_file_type(ext)
                    language = None
                    if file_type == SUBTITLE_TYPE:
                        language = get_subtitle_language(f)
                    elif file_type == VIDEO_TYPE:
                        # Add embedded languages to video filename
                        video_path = os.path.join(dirpath, f)
                        if embedded_subtitles and video_path in embedded_subtitles:
                            language = embedded_subtitles[video_path]
                    root_files.append({'filename': f, 'type': file_type, 'language': language})
            if root_files:
                sorted_files = sorted(root_files, key=lambda k: k['filename'])
                files.update({root_name: {'path': dirpath, 'files': sorted_files}})

    # Return sorted list of file dicts (grouped by location=subdir)
    return [{'location_name': k, 'location_path': files[k]['path'], 'location_files': files[k]['files']} for k in
            sorted(files.keys(), key=natural_keys)]


def get_movie_files(movie_path, embedded_languages):
    """Get all movie files.

    This returns all files that have a similar filename as the movie itself.
    :param movie_path: path to the movie video file
    :type movie_path: str
    :param embedded_languages: the list of embedded subtitle languages for the movie
    :type embedded_languages: list[str]
    :return: list of dict objects representing a file (filename and type)
    :rtype: list[dict]
    """
    dirname, movie_filename = os.path.split(movie_path)
    root, _ = os.path.splitext(movie_filename)

    # Movie files are supposed to be in the same dir as the file itself
    # Because movies can also be stored all together, we only check files with a similar name as the movie file itself
    files = {}
    languages = []
    for f in os.listdir(dirname):
        if f.startswith(root):
            _, ext = os.path.splitext(os.path.normcase(f))
            if safe_lowercase(ext) in FILE_EXTENSIONS:
                file_type = _get_file_type(ext)
                language = None
                if file_type == SUBTITLE_TYPE:
                    language = get_subtitle_language(f)
                    languages.append(language)
                elif file_type == VIDEO_TYPE:
                    # Add embedded languages to video filename
                    if embedded_languages:
                        language = embedded_languages
                files.update({f: {'filename': f, 'type': file_type, 'language': language}})

    # Return sorted list of file dicts
    return sorted([v for v in files.values()], key=lambda k: k['filename'])


def check_missing_subtitle_languages(dirname, filename, scan_embedded=False, scan_hardcoded=False,
                                     detect_invalid=False):
    log.debug('Checking for missing subtitle(s)')
    missing_subtitles = []

    # Check embedded languages
    embedded_languages = []
    if scan_embedded:
        embedded_languages = get_embedded_subtitle_languages(dirname, filename)

    # Check hardcoded languages
    hardcoded_languages = []
    if scan_hardcoded:
        hardcoded_languages = get_hardcoded_subtitle_languages(dirname, filename)

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
            srt_file = os.path.splitext(filename)[0] + u'.' + language + SUBTITLE_EXTENSION
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

    return [language for language in embedded_subtitle_languages]


def save_hardcoded_subtitle_languages(dirname, filename, hardcoded_subtitle_languages):
    log.debug('Saving hardcoded subtitle(s)')

    hardcoded_filename = os.path.join(dirname, filename + HARDCODED_SUBS_EXTENSION)
    # Check if there already exists a file wit hardcoded subtitle languages
    existing_hardcoded_subtitle_languages = []
    if os.path.exists(hardcoded_filename):
        existing_hardcoded_subtitle_languages = get_hardcoded_subtitle_languages(dirname, filename)

    # Write hardcoded subtitle languages to file (use set to exclude duplicates)
    languages = set(existing_hardcoded_subtitle_languages + hardcoded_subtitle_languages)
    with codecs.open(hardcoded_filename, mode='w', encoding='utf-8') as f:
        f.write(','.join(languages))


def get_hardcoded_subtitle_languages(dirname, filename):
    log.debug('Checking for hardcoded subtitle(s)')

    hardcoded_subtitle_languages = []
    hardcoded_filename = os.path.join(dirname, filename + HARDCODED_SUBS_EXTENSION)
    if os.path.exists(hardcoded_filename):
        with codecs.open(hardcoded_filename, mode='r', encoding='utf-8') as f:
            subtitles = f.readline().strip()
            hardcoded_subtitle_languages = subtitles.split(',')  # Subs are comma separated on 1st line

    return hardcoded_subtitle_languages


def get_external_subtitle_languages(dirname, filename):
    log.debug('Checking for external subtitle(s)')

    external_subtitle_languages = []
    video_name, _ = os.path.splitext(filename)
    for f in os.listdir(dirname):
        name, ext = os.path.splitext(f)
        if video_name in name and ext == SUBTITLE_EXTENSION:
            external_subtitle_languages.append(get_subtitle_language(f))

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


def _get_file_type(ext):
    file_type = VIDEO_TYPE
    if safe_lowercase(ext) == SUBTITLE_EXTENSION:
        file_type = SUBTITLE_TYPE

    return file_type
