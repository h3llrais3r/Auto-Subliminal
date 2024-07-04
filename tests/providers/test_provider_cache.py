# coding=utf-8

import os

from pytest import MonkeyPatch
from subliminal.cache import region
from subliminal.cli import MutexLock

from autosubliminal.providers.provider_cache import (
    ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX,
    CUSTOM_ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX,
    fill_addic7ed_show_id_cache,
)


def test_fill_addic7ed_show_id_cache(monkeypatch: MonkeyPatch) -> None:
    # Use subliminal cache (not our own cache since the provider cache is used from within subliminal)
    filename = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources', 'test.subliminal.cache.dbm'))
    region.configure(backend='dogpile.cache.dbm', arguments={'filename': filename, 'lock_factory': MutexLock})
    monkeypatch.setattr('autosubliminal.ADDIC7EDSHOWNAMEMAPPING', {'show1': 1, 'show2': 2})
    fill_addic7ed_show_id_cache()
    assert region.get(ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|show1') == 1
    assert region.get(CUSTOM_ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|show1') == 1
    assert region.get(ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|show2') == 2
    assert region.get(CUSTOM_ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|show2') == 2
    assert not region.get('unknown')
