# coding=utf-8

import os
import shutil
import time

import pytest
import requests_mock
from dogpile.cache.api import NoValue
from pytest import MonkeyPatch

import autosubliminal
from autosubliminal.core.cache import MutexFileLock, cache_artwork, get_artwork_cache_path, is_artwork_cached, region
from autosubliminal.util.common import set_rw_and_remove

resource_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources'))
cache_path = os.path.abspath(os.path.join(resource_path, 'cache'))


def test_cache(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.core.cache.SCAN_VIDEO_EXPIRATION_TIME', 1)
    filename = os.path.abspath(os.path.join(resource_path, 'test.autosubliminal.cache.dbm'))
    region.configure(
        backend='dogpile.cache.dbm',
        expiration_time=autosubliminal.core.cache.SCAN_VIDEO_EXPIRATION_TIME,
        arguments={'filename': filename, 'lock_factory': MutexFileLock},
        replace_existing_backend=True,
    )
    region.set('KEY', 'VALUE')
    assert region.get('KEY') == 'VALUE'
    time.sleep(2)
    assert isinstance(region.get('KEY'), NoValue)  # Cache already expired
    assert isinstance(region.get('UNKNOWN'), NoValue)


@pytest.fixture
def clear_cache() -> None:
    if os.path.exists(cache_path):
        shutil.rmtree(cache_path, onerror=set_rw_and_remove)  # Needed to clear folders with files


@pytest.fixture
def populate_cache(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.CACHEDIR', cache_path)
    tvdb_id = 289590
    with open(os.path.join(resource_path, '%d.jpg' % tvdb_id), mode='rb') as f:
        with requests_mock.mock() as m:
            m.get('http://path/to/poster.jpg', content=f.read())
            cache_artwork('tvdb', tvdb_id, 'poster', 'http://path/to/poster.jpg')
            cache_artwork('tvdb', tvdb_id, 'poster', 'http://path/to/poster.jpg', thumbnail=True)


@pytest.mark.usefixtures('clear_cache')
def test_cache_artwork(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.CACHEDIR', cache_path)
    tvdb_id = 289590
    with open(os.path.join(resource_path, '%d.jpg' % tvdb_id), mode='rb') as f:
        with requests_mock.mock() as m:
            m.get('http://path/to/poster.jpg', content=f.read())
            cache_artwork('tvdb', tvdb_id, 'poster', 'http://path/to/poster.jpg')
            cache_artwork('tvdb', tvdb_id, 'poster', 'http://path/to/poster.jpg', thumbnail=True)
    assert os.path.exists(os.path.normpath('%s/artwork/tvdb/poster/%d.jpg' % (cache_path, tvdb_id)))
    assert os.path.exists(os.path.normpath('%s/artwork/tvdb/poster/thumbnail/%d.jpg' % (cache_path, tvdb_id)))


@pytest.mark.usefixtures('clear_cache', 'populate_cache')
def test_is_artwork_cached() -> None:
    assert is_artwork_cached('tvdb', 289590, 'poster')
    assert is_artwork_cached('tvdb', 289590, 'poster', thumbnail=True)


def test_get_artwork_cache_path(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.CACHEDIR', cache_path)
    tvdb_id = 289590
    expected_path = os.path.normpath('%s/artwork/tvdb/poster/%d.jpg' % (cache_path, tvdb_id))
    expected_thumbnail_path = os.path.normpath('%s/artwork/tvdb/poster/thumbnail/%d.jpg' % (cache_path, tvdb_id))
    assert get_artwork_cache_path('tvdb', tvdb_id, 'poster') == expected_path
    assert get_artwork_cache_path('tvdb', tvdb_id, 'poster', thumbnail=True) == expected_thumbnail_path
