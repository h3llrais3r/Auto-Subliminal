# coding=utf-8

from typing import cast

import pytest

import autosubliminal
from autosubliminal.core.item import ItemType, WantedItem
from autosubliminal.core.queue import (count_wanted_queue_items, get_wanted_queue_lock, release_wanted_queue_lock,
                                       release_wanted_queue_lock_on_exception)


def test_wanted_queue_lock() -> None:
    assert get_wanted_queue_lock()
    assert autosubliminal.WANTEDQUEUELOCK
    assert not get_wanted_queue_lock()
    assert autosubliminal.WANTEDQUEUELOCK
    release_wanted_queue_lock()
    assert not autosubliminal.WANTEDQUEUELOCK
    release_wanted_queue_lock()
    assert not autosubliminal.WANTEDQUEUELOCK


def test_count_wanted_queue_items() -> None:
    wanted_item_1 = WantedItem(type='movie', title='title1')
    wanted_item_2 = WantedItem(type='episode', title='title2')
    autosubliminal.WANTEDQUEUE = [wanted_item_1, wanted_item_2]
    assert count_wanted_queue_items() == 2
    assert count_wanted_queue_items(item_type='movie') == 1
    assert count_wanted_queue_items(item_type='episode') == 1
    assert count_wanted_queue_items(item_type=cast(ItemType, 'video')) == 0  # invalid item_type


def test_release_wanted_queue_lock_on_exception() -> None:
    @release_wanted_queue_lock_on_exception
    def test_function() -> None:
        get_wanted_queue_lock()
        assert autosubliminal.WANTEDQUEUELOCK
        raise Exception('unexpected')

    assert not autosubliminal.WANTEDQUEUELOCK
    with pytest.raises(Exception):
        test_function()
    assert not autosubliminal.WANTEDQUEUELOCK