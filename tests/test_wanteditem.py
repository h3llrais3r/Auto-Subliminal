# coding=utf-8

import datetime

from autosubliminal.wanteditem import WantedItem

wanted_item = WantedItem({'timestamp': '2018-01-01 12:30:01'})


def test_is_search_enabled_before_on_creation(mocker):
    today = datetime.datetime(2018, 01, 01, 0, 0, 0)
    mocker.patch('autosubliminal.utils.today', return_value=today)
    assert wanted_item.search_enabled


def test_is_search_enabled_before_deadline(mocker):
    today = datetime.datetime(2018, 01, 02, 0, 0, 0)
    mocker.patch('autosubliminal.utils.today', return_value=today)
    assert wanted_item.search_enabled


def test_is_search_enabled_on_deadline(mocker):
    today = datetime.datetime(2018, 01, 29, 0, 0, 0)
    mocker.patch('autosubliminal.utils.today', return_value=today)
    assert wanted_item.search_enabled


def test_is_search_enabled_after_deadline(mocker):
    today = datetime.datetime(2018, 01, 30, 0, 0, 0)
    mocker.patch('autosubliminal.utils.today', return_value=today)
    assert not wanted_item.search_enabled


def test_is_search_enabled_after_deadline_on_delta(mocker):
    today = datetime.datetime(2018, 02, 26, 0, 0, 0)
    mocker.patch('autosubliminal.utils.today', return_value=today)
    assert wanted_item.search_enabled
