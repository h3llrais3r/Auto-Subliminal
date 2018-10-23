# coding=utf-8

import datetime

from autosubliminal.core.item import WantedItem

wanted_item = WantedItem()
wanted_item.timestamp = '2018-01-01 12:30:01'


def test_compare_wanted_items():
    wanted_item_1 = WantedItem(type='episode', title='testequal', season=1, episode=1)
    wanted_item_2 = WantedItem(type='episode', title='testequal', season=1, episode=1)
    wanted_item_3 = WantedItem(type='episode', title='testdifferent', season=1, episode=1)
    assert wanted_item_1 == wanted_item_2
    assert wanted_item_1 != wanted_item_3
    assert wanted_item_2 != wanted_item_3


def test_is_search_active_for_wanted_item_before_on_creation(mocker):
    today = datetime.datetime(2018, 1, 1, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_for_wanted_item_before_deadline(mocker):
    today = datetime.datetime(2018, 1, 2, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_on_deadline(mocker):
    today = datetime.datetime(2018, 1, 29, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_after_deadline(mocker):
    today = datetime.datetime(2018, 1, 30, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert not wanted_item.is_search_active


def test_is_search_active_after_deadline_on_delta(mocker):
    today = datetime.datetime(2018, 2, 26, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active
