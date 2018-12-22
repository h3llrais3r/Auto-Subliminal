# coding=utf-8

import logging
import os
import re
import time

import subliminal

import autosubliminal

log = logging.getLogger(__name__)

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
        if 'season' in os.path.normcase(dirpath):
            _, season_name = os.path.split(dirpath)
            # Files in season dirs
            season_files = []
            for f in filenames:
                _, ext = os.path.splitext(os.path.normcase(f))
                if ext in FILE_EXTENSIONS:
                    season_files.append({'filename': f, 'type': _get_file_type(ext)})
            if season_files:
                sorted_files = sorted(season_files, key=lambda k: k['filename'])
                files.update({season_name: {'path': dirpath, 'files': sorted_files}})
        elif dirpath == show_path:
            # Files in root dir
            root_name = 'Root'
            root_files = []
            for f in filenames:
                _, ext = os.path.splitext(os.path.normcase(f))
                if ext in FILE_EXTENSIONS:
                    root_files.append({'filename': f, 'type': _get_file_type(ext)})
            if root_files:
                sorted_files = sorted(root_files, key=lambda k: k['filename'])
                files.update({root_name: {'path': dirpath, 'files': sorted_files}})
        else:
            print('Unsupported dir found: %s' % dirpath)
            print(os.path.normcase(dirpath))
            print(os.path.normpath(dirpath))

    # Convert to list and return
    return [{'location_name': k, 'location_path': v['path'], 'location_files': v['files']} for k, v in files.items()]


def get_movie_files(movie_path):
    """Get all movie files.

    This returns all files that have a similar filename as the movie itself.
    :param movie_path: path to the movie video file
    :type movie_path: str
    :return: list of dict objects representing a file (filename and type)
    :rtype: list[dict]
    """
    dirname, filename = os.path.split(movie_path)
    root, _ = os.path.splitext(filename)

    # Movie files are supposed to be in the same dir as the file itself
    # Because movies can also be stored all together, we only check files with a similar name as the movie file itself
    files = []
    for f in os.listdir(dirname):
        if f.startswith(root):
            _, ext = os.path.splitext(os.path.normcase(f))
            if ext in FILE_EXTENSIONS:
                files.append({'filename': f, 'type': _get_file_type(ext)})

    return sorted(files, key=lambda k: k['filename'])


def _get_file_type(ext):
    file_type = 'video'
    if ext == '.srt':
        file_type = 'subtitle'

    return file_type
