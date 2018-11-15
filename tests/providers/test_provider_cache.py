# coding=utf-8

import os

from subliminal.cache import region
from subliminal.cli import MutexLock

from autosubliminal.providers.provider_cache import fill_addic7ed_show_id_cache, ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX, \
    CUSTOM_ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX

cache_file = os.path.abspath(
    os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources', 'test.subliminal.cache.dbm'))


def test_fill_addic7ed_show_id_cache(monkeypatch):
    # Use subliminal cache (not our own cache since the provider cache is used from within subliminal)
    region.configure(backend='dogpile.cache.dbm', arguments={'filename': cache_file, 'lock_factory': MutexLock})
    monkeypatch.setattr('autosubliminal.ADDIC7EDSHOWNAMEMAPPING', {'show1': 1, 'show2': 2})
    fill_addic7ed_show_id_cache()
    assert region.get(ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|show1') == 1
    assert region.get(CUSTOM_ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|show1') == 1
    assert region.get(ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|show2') == 2
    assert region.get(CUSTOM_ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|show2') == 2
    assert not region.get('unknown')
