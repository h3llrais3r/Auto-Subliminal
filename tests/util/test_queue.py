# coding=utf-8

import autosubliminal
from autosubliminal.util.queue import count_wanted_queue_items, get_wanted_queue_lock, release_wanted_queue_lock


def test_wanted_queue_lock():
    assert get_wanted_queue_lock()
    assert autosubliminal.WANTEDQUEUELOCK
    assert not get_wanted_queue_lock()
    assert autosubliminal.WANTEDQUEUELOCK
    release_wanted_queue_lock()
    assert not autosubliminal.WANTEDQUEUELOCK
    release_wanted_queue_lock()
    assert not autosubliminal.WANTEDQUEUELOCK


def test_count_wanted_queue_items():
    autosubliminal.WANTEDQUEUE = [{'type': 'movie', 'title': 'title1'}, {'type': 'episode', 'title': 'title2'}]
    assert count_wanted_queue_items() == 2
    assert count_wanted_queue_items(itemtype='movie') == 1
    assert count_wanted_queue_items(itemtype='episode') == 1
    assert count_wanted_queue_items(itemtype='video') == 0
