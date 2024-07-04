# coding=utf-8

from typing import cast

import pytest

import autosubliminal
from autosubliminal.core.item import ItemType, WantedItem
from autosubliminal.core.queue import (
    count_wanted_queue_items,
    delete_wanted_item_in_queue,
    find_wanted_item_in_queue,
    get_wanted_queue_lock,
    release_wanted_queue_lock,
    release_wanted_queue_lock_on_exception,
    update_wanted_item_in_queue,
)


def test_wanted_queue_lock() -> None:
    assert get_wanted_queue_lock()
    assert autosubliminal.WANTEDQUEUELOCK
    assert not get_wanted_queue_lock()
    assert autosubliminal.WANTEDQUEUELOCK
    release_wanted_queue_lock()
    assert not autosubliminal.WANTEDQUEUELOCK
    release_wanted_queue_lock()
    assert not autosubliminal.WANTEDQUEUELOCK


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


def test_count_wanted_queue_items() -> None:
    wanted_item_1 = WantedItem(type='movie', title='title1')
    wanted_item_2 = WantedItem(type='episode', title='title2')
    autosubliminal.WANTEDQUEUE = [wanted_item_1, wanted_item_2]
    assert count_wanted_queue_items() == 2
    assert count_wanted_queue_items(item_type='movie') == 1
    assert count_wanted_queue_items(item_type='episode') == 1
    assert count_wanted_queue_items(item_type=cast(ItemType, 'video')) == 0  # invalid item_type


def test_find_wanted_item_in_queue() -> None:
    wanted_item_1 = WantedItem(type='movie', title='title1')
    wanted_item_1.id = 1
    wanted_item_2 = WantedItem(type='episode', title='title2')
    wanted_item_2.id = 2
    wanted_item_3 = WantedItem(type='episode', title='title2')
    wanted_item_3.id = 3
    autosubliminal.WANTEDQUEUE = [wanted_item_1, wanted_item_2, wanted_item_3]
    assert find_wanted_item_in_queue(2) == (wanted_item_2, 1)


def test_update_wanted_item_in_queue() -> None:
    wanted_item_1 = WantedItem(type='movie', title='title1')
    wanted_item_1.id = 1
    wanted_item_2 = WantedItem(type='episode', title='title2')
    wanted_item_2.id = 2
    wanted_item_3 = WantedItem(type='episode', title='title2')
    wanted_item_3.id = 3
    autosubliminal.WANTEDQUEUE = [wanted_item_1, wanted_item_2, wanted_item_3]
    wanted_item_2.title = 'title2Updated'
    update_wanted_item_in_queue(wanted_item_2)
    assert find_wanted_item_in_queue(2) == (wanted_item_2, 1)


def test_delete_wanted_item_in_queue() -> None:
    wanted_item_1 = WantedItem(type='movie', title='title1')
    wanted_item_1.id = 1
    wanted_item_2 = WantedItem(type='episode', title='title2')
    wanted_item_2.id = 2
    wanted_item_3 = WantedItem(type='episode', title='title2')
    wanted_item_3.id = 3
    autosubliminal.WANTEDQUEUE = [wanted_item_1, wanted_item_2, wanted_item_3]
    delete_wanted_item_in_queue(wanted_item_2)
    assert find_wanted_item_in_queue(2) == (None, None)  # item no longer in queue
    assert count_wanted_queue_items() == 2  # 1 item removed
