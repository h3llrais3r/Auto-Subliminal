# coding=utf-8

import datetime

from pytest import MonkeyPatch
from pytest_mock import MockerFixture

from autosubliminal.core.item import WantedItem

wanted_item = WantedItem()
wanted_item.timestamp = '2018-01-01 12:30:01'


def test_compare_wanted_items():
    wanted_item_1 = WantedItem(type='episode', title='testequal', season=1, episode=1)
    wanted_item_2 = WantedItem(type='episode', title='testequal', season=1, episode=1)
    wanted_item_3 = WantedItem(type='episode', title='testdifferent', season=1, episode=1)
    assert wanted_item_1.__eq__(None) is NotImplemented
    assert wanted_item_1.__eq__(wanted_item_2)
    assert wanted_item_1.__ne__(wanted_item_3)
    assert wanted_item_1.__hash__() != wanted_item_3.__hash__()


def test_wanted_item_with_multi_episode():
    # Example file: Marvels.Agents.of.S.H.I.E.L.D.S05E01-E02.720p.HDTV.x264-AVS.mkv
    wanted_item_1 = WantedItem(type='episode', title='test', season=1, episode=[1, 2])
    assert wanted_item_1.episode == [1, 2]


def test_wanted_item_with_multi_sources():
    # Example file: Inferno.2016.1080p.WEB.BluRay.x264-[GROUP1.AG].mp4
    wanted_item_1 = WantedItem(type='movie', title='test', source=['Web', 'Blu-ray'])
    assert wanted_item_1.source == ['Web', 'Blu-ray']


def test_wanted_item_with_multi_codec():
    # Example file: Code.37.S03E02.NL.VLAAMS.720p.HDTV.x264-SHOWGEMiST_xvid.avi
    wanted_item_1 = WantedItem(type='episode', title='test', season=1, episode=1, codec=['H.264', 'Xvid'])
    assert wanted_item_1.codec == ['H.264', 'Xvid']


def test_wanted_item_trim_release_group():
    wanted_item_1 = WantedItem(type='episode', title='test', season=1, episode=1, release_group='KILLERS[rarbg]')
    assert wanted_item_1.release_group == 'KILLERS'


def test_wanted_item_library_path(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.LIBRARYPATHS', ['path/to/library'])
    wanted_item.set_attr('video_path', 'path/to/library/and/video/file')
    assert wanted_item.library_path == 'path/to/library'
    monkeypatch.setattr('autosubliminal.LIBRARYPATHS', ['path/to/library2'])
    assert wanted_item.library_path is None
    monkeypatch.setattr('autosubliminal.LIBRARYPATHS', [])
    assert wanted_item.library_path is None


def test_wanted_item_set_attr():
    wanted_item.set_attr('languages', 'nl,en')
    wanted_item.set_attr('season', '1')
    wanted_item.set_attr('episode', '1,2')
    wanted_item.set_attr('year', '2018')
    wanted_item.set_attr('source', 'Web')
    wanted_item.set_attr('quality', '720p')
    wanted_item.set_attr('codec', 'H.264')
    wanted_item.set_attr('tvdb_id', '263365')
    wanted_item.set_attr('unknown', 'unknown')
    assert wanted_item.languages == ['nl', 'en']
    assert wanted_item.season == 1
    assert wanted_item.episode == [1, 2]
    assert wanted_item.year == 2018
    assert wanted_item.source == 'Web'
    assert wanted_item.quality == '720p'
    assert wanted_item.codec == 'H.264'
    assert wanted_item.tvdb_id == 263365
    assert not hasattr(wanted_item, 'unknown')


def test_wanted_item_copy_to():
    wanted_item_1 = WantedItem(type='episode', title='titl1', season=1, episode=1)
    wanted_item_2 = WantedItem(type='episode', title='title2', season=2, episode=2, codec='H.264')
    wanted_item_1.copy_to(wanted_item_2)
    assert wanted_item_1 == wanted_item_2


def test_is_search_active_for_wanted_item_before_on_creation(monkeypatch: MonkeyPatch, mocker: MockerFixture):
    monkeypatch.setattr('autosubliminal.CHECKSUBDEADLINE', 4)
    monkeypatch.setattr('autosubliminal.CHECKSUBDELTA', 7)
    today = datetime.datetime(2018, 1, 1, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_for_wanted_item_before_deadline(monkeypatch: MonkeyPatch, mocker: MockerFixture):
    monkeypatch.setattr('autosubliminal.CHECKSUBDEADLINE', 4)
    monkeypatch.setattr('autosubliminal.CHECKSUBDELTA', 7)
    today = datetime.datetime(2018, 1, 2, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_for_wanted_item_on_deadline(monkeypatch: MonkeyPatch, mocker: MockerFixture):
    monkeypatch.setattr('autosubliminal.CHECKSUBDEADLINE', 4)
    monkeypatch.setattr('autosubliminal.CHECKSUBDELTA', 7)
    today = datetime.datetime(2018, 1, 29, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active


def test_is_search_active_for_wanted_item_after_deadline(monkeypatch: MonkeyPatch, mocker: MockerFixture):
    monkeypatch.setattr('autosubliminal.CHECKSUBDEADLINE', 4)
    monkeypatch.setattr('autosubliminal.CHECKSUBDELTA', 7)
    today = datetime.datetime(2018, 1, 30, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert not wanted_item.is_search_active


def test_is_search_active_for_wanted_item_after_deadline_on_delta(monkeypatch: MonkeyPatch, mocker: MockerFixture):
    monkeypatch.setattr('autosubliminal.CHECKSUBDEADLINE', 4)
    monkeypatch.setattr('autosubliminal.CHECKSUBDELTA', 7)
    today = datetime.datetime(2018, 2, 26, 0, 0, 0)
    mocker.patch('autosubliminal.core.item.get_today', return_value=today)
    assert wanted_item.is_search_active
