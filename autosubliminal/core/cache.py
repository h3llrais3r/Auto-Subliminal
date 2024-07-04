# coding=utf-8

import datetime
import logging
import os
import tempfile
from typing import Optional, Union

import requests
from dogpile.cache.backends.file import AbstractFileLock
from dogpile.cache.region import make_region
from dogpile.util.readwrite_lock import ReadWriteMutex

import autosubliminal

log = logging.getLogger(__name__)

# Expiration time for video scan
SCAN_VIDEO_EXPIRATION_TIME = datetime.timedelta(days=1).total_seconds()


# MutexFileLock: copied from subliminal.cli so we don't depend on subliminal for our cache
class MutexFileLock(AbstractFileLock):
    """:class:`MutexFileLock` is a thread-based rw lock based on :class:`dogpile.core.ReadWriteMutex`."""

    def __init__(self, filename: str) -> None:
        self.mutex = ReadWriteMutex()

    def acquire_read_lock(self, wait: bool) -> Optional[bool]:
        ret = self.mutex.acquire_read_lock(wait)
        return wait or ret

    def acquire_write_lock(self, wait: bool) -> Optional[bool]:
        ret = self.mutex.acquire_write_lock(wait)
        return wait or ret

    def release_read_lock(self) -> None:
        return self.mutex.release_read_lock()  # type: ignore[no-any-return]

    def release_write_lock(self) -> None:
        return self.mutex.release_write_lock()  # type: ignore[no-any-return]


def cache_artwork(
    indexer_name: str, indexer_id: Union[str, int], artwork_type: str, artwork_url: str, thumbnail: bool = False
) -> None:
    """Store the artwork in the cache."""
    try:
        img_data = requests.get(artwork_url).content
        file_path = get_artwork_cache_path(indexer_name, indexer_id, artwork_type, thumbnail=thumbnail)
        with open(file_path, mode='wb') as handler:
            handler.write(img_data)
    except Exception:
        log.exception('Unable to store artwork in cache')


def is_artwork_cached(
    indexer_name: str, indexer_id: Union[str, int], artwork_type: str, thumbnail: bool = False
) -> bool:
    """Check if the artwork is cached."""
    return os.path.exists(get_artwork_cache_path(indexer_name, indexer_id, artwork_type, thumbnail=thumbnail))


def get_artwork_cache_path(
    indexer_name: str, indexer_id: Union[str, int], artwork_type: str, thumbnail: bool = False
) -> str:
    """Get the path of the artwork in the cache."""
    # Make sure the cache path exists
    cache_location = os.path.join(autosubliminal.CACHEDIR, 'artwork', indexer_name, artwork_type)
    if thumbnail:
        cache_location = os.path.join(cache_location, 'thumbnail')
    cache_path = os.path.abspath(cache_location)
    if not os.path.exists(cache_path):
        os.makedirs(cache_path)
    # Return artwork cache path
    return os.path.abspath(os.path.join(cache_path, str(indexer_id) + '.jpg'))


def clear_cache() -> None:
    """Clear all caches."""
    _clear_autosubliminal_cache()
    _clear_subliminal_cache()
    _clear_imdbpie_cache()


def _clear_autosubliminal_cache() -> None:
    cache_file = os.path.abspath(os.path.join(autosubliminal.CACHEDIR, 'autosubliminal.cache.dbm'))
    if os.path.exists(cache_file):
        os.remove(cache_file)


def _clear_subliminal_cache() -> None:
    cache_file = os.path.abspath(os.path.join(autosubliminal.CACHEDIR, 'subliminal.cache.dbm'))
    if os.path.exists(cache_file):
        os.remove(cache_file)


def _clear_imdbpie_cache() -> None:
    # Cache is created by imdbpie in temp location (see auth.py in imdbpie)
    # Cleanup is required when switching between python versions
    # If not, 'ValueError: unsupported pickle protocol' is thrown
    cache_file = os.path.abspath(os.path.join(tempfile.gettempdir(), 'cache.db'))
    if os.path.exists(cache_file):
        os.remove(cache_file)


# Global cache region
region = make_region()
