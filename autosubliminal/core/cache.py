# coding=utf-8

import datetime
import logging
import os

import requests
from dogpile.cache.backends.file import AbstractFileLock
from dogpile.cache.region import make_region
from dogpile.util.readwrite_lock import ReadWriteMutex
from six import text_type

import autosubliminal

log = logging.getLogger(__name__)

#: Expiration time for video scan
SCAN_VIDEO_EXPIRATION_TIME = datetime.timedelta(days=1).total_seconds()


# MutexFileLock: copied from subliminal.cli so we don't depend on subliminal for our cache
class MutexFileLock(AbstractFileLock):
    """:class:`MutexFileLock` is a thread-based rw lock based on :class:`dogpile.core.ReadWriteMutex`."""

    def __init__(self, filename):
        self.mutex = ReadWriteMutex()

    def acquire_read_lock(self, wait):
        ret = self.mutex.acquire_read_lock(wait)
        return wait or ret

    def acquire_write_lock(self, wait):
        ret = self.mutex.acquire_write_lock(wait)
        return wait or ret

    def release_read_lock(self):
        return self.mutex.release_read_lock()

    def release_write_lock(self):
        return self.mutex.release_write_lock()


def cache_artwork(indexer_name, indexer_id, artwork_type, artwork_url, thumbnail=False):
    """Store the artwork in the cache."""
    try:
        img_data = requests.get(artwork_url).content
        file_path = get_artwork_cache_path(indexer_name, indexer_id, artwork_type, thumbnail=thumbnail)
        with open(file_path, 'wb') as handler:
            handler.write(img_data)
    except Exception:
        log.exception('Unable to store artwork in cache')


def is_artwork_cached(indexer_name, indexer_id, artwork_type, thumbnail=False):
    """Check if the artwork is cached."""
    return os.path.exists(get_artwork_cache_path(indexer_name, indexer_id, artwork_type, thumbnail=thumbnail))


def get_artwork_cache_path(indexer_name, indexer_id, artwork_type, thumbnail=False):
    """Get the path of the artwork in the cache."""
    # Make sure the cache path exists
    cache_location = os.path.join(autosubliminal.CACHEDIR, 'artwork', indexer_name, artwork_type)
    if thumbnail:
        cache_location = os.path.join(cache_location, 'thumbnail')
    cache_path = os.path.abspath(cache_location)
    if not os.path.exists(cache_path):
        os.makedirs(cache_path)
    # Return artwork cache path
    return os.path.abspath(os.path.join(cache_path, text_type(indexer_id) + '.jpg'))


# Global cache region
region = make_region()
