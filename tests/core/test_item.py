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


def test_wanted_item_with_multi_episode():
    # Example file: Marvels.Agents.of.S.H.I.E.L.D.S05E01-E02.720p.HDTV.x264-AVS.mkv
    wanted_item_1 = WantedItem(type='episode', title='test', season=1, episode=[1, 2])
    assert wanted_item_1.episode == '1,2'


def test_wanted_item_with_multi_sources():
    # Example file: Inferno.2016.1080p.WEB.BluRay.x264-[GROUP1.AG].mp4
    wanted_item_1 = WantedItem(type='movie', title='test', source=['WEB-DL', 'BluRay'])
    assert wanted_item_1.source == 'WEB-DL,BluRay'


def test_wanted_item_with_multi_codec():
    # Example file: Code.37.S03E02.NL.VLAAMS.720p.HDTV.x264-SHOWGEMiST_xvid.avi
    wanted_item_1 = WantedItem(type='episode', title='test', season=1, episode=1, codec=['h264', 'XviD'])
    assert wanted_item_1.codec == 'h264,XviD'


def test_wanted_item_trim_release_group():
    wanted_item_1 = WantedItem(type='episode', title='test', season=1, episode=1, releasegrp='KILLERS[rarbg]')
    assert wanted_item_1.releasegrp == 'KILLERS'


def test_is_search_active_for_wanted_item_before_on_creation(mocker):
    today = datetime.datetime(2018, 1, 1, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_for_wanted_item_before_deadline(mocker):
    today = datetime.datetime(2018, 1, 2, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_for_wanted_item_on_deadline(mocker):
    today = datetime.datetime(2018, 1, 29, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_for_wanted_item_after_deadline(mocker):
    today = datetime.datetime(2018, 1, 30, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert not wanted_item.is_search_active


def test_is_search_active_for_wanted_item_after_deadline_on_delta(mocker):
    today = datetime.datetime(2018, 2, 26, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_copy_to():
    wanted_item_1 = WantedItem(type='episode', title='titl1', season=1, episode=1)
    wanted_item_2 = WantedItem(type='episode', title='title2', season=2, episode=2, codec=2)
    wanted_item_1.copy_to(wanted_item_2)
    assert wanted_item_1 == wanted_item_2
