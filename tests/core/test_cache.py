# coding=utf-8

import os
import time

from dogpile.cache.api import NoValue

import autosubliminal
from autosubliminal.core.cache import region, MutexFileLock

cache_file = os.path.abspath(
    os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources', 'test.autosubliminal.cache.dbm'))


def test_cache(monkeypatch):
    monkeypatch.setattr('autosubliminal.core.cache.SCAN_VIDEO_EXPIRATION_TIME', 1)
    region.configure(backend='dogpile.cache.dbm', expiration_time=autosubliminal.core.cache.SCAN_VIDEO_EXPIRATION_TIME,
                     arguments={'filename': cache_file, 'lock_factory': MutexFileLock})
    region.set('KEY', 'VALUE')
    assert region.get('KEY') == 'VALUE'
    time.sleep(2)
    assert isinstance(region.get('KEY'), NoValue)  # Cache already expired
    assert isinstance(region.get('UNKNOWN'), NoValue)
