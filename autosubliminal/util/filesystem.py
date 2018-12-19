# coding=utf-8

import logging
import os
import re
import time

import subliminal

import autosubliminal

log = logging.getLogger(__name__)


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


def get_linked_files(file_path):
    dirname, filename = os.path.split(file_path)
    root, _ = os.path.splitext(filename)

    files = []
    for f in os.listdir(dirname):
        if f.startswith(root):
            _, ext = os.path.splitext(f)
            files.append({'path': os.path.join(dirname, f), 'type': _get_file_type(ext)})

    return files


def _get_file_type(ext):
    file_type = 'movie'
    if ext == u'.srt':
        file_type = 'subtitle'

    return file_type
