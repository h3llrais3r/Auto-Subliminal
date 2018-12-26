# coding=utf-8

import logging
import os
import re
import time

import subliminal
from babelfish.language import Language
from six import text_type

import autosubliminal
from autosubliminal.util.common import natural_keys, safe_lowercase

log = logging.getLogger(__name__)

VIDEO_TYPE = 'video'
SUBTITLE_TYPE = 'subtitle'
FILE_EXTENSIONS = list(subliminal.VIDEO_EXTENSIONS) + ['.srt']


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


def get_show_files(show_path):
    """Get all show files.

    :param show_path: the root path of the show (folder)
    :type show_path: str
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
                        language = _get_subtitle_language(f)
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
                        language = _get_subtitle_language(f)
                    root_files.append({'filename': f, 'type': file_type, 'language': language})
            if root_files:
                sorted_files = sorted(root_files, key=lambda k: k['filename'])
                files.update({root_name: {'path': dirpath, 'files': sorted_files}})

    # Return sorted list of file dicts (grouped by location=subdir)
    return [{'location_name': k, 'location_path': files[k]['path'], 'location_files': files[k]['files']} for k in
            sorted(files.keys(), key=natural_keys)]


def get_movie_files(movie_path, available_languages):
    """Get all movie files.

    This returns all files that have a similar filename as the movie itself.
    :param movie_path: path to the movie video file
    :type movie_path: str
    :param available_languages: the list of available subtitle languages for the movie
    :type available_languages: list[str]
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
                    language = _get_subtitle_language(f)
                    languages.append(language)
                files.update({f: {'filename': f, 'type': file_type, 'language': language}})

    # Add embedded languages to movie filename if needed
    embedded_languages = [l for l in available_languages if l not in languages]
    if embedded_languages:
        files[movie_filename]['language'] = embedded_languages

    # Return sorted list of file dicts
    return sorted([v for v in files.values()], key=lambda k: k['filename'])


def _get_file_type(ext):
    file_type = VIDEO_TYPE
    if safe_lowercase(ext) == '.srt':
        file_type = SUBTITLE_TYPE

    return file_type


def _get_subtitle_language(filename):
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
