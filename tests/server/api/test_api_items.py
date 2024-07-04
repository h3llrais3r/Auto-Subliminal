# coding=utf-8

import pytest
from pytest import MonkeyPatch
from pytest_mock import MockerFixture

import autosubliminal
from autosubliminal.core.item import DownloadedItem, WantedItem
from autosubliminal.db import LastDownloadsDb
from autosubliminal.server.api.items import ItemsApi
from autosubliminal.server.rest import BadRequest
from tests.server.api.test_api import pickle_api_result

wanted_item = WantedItem()
wanted_item.id = 1
wanted_item.video_path = '/path/to/Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb.mkv'
wanted_item.video_size = 0
wanted_item.languages = ['nl']
wanted_item.timestamp = '2015-11-15 16:27:35'
wanted_item.type = 'episode'
wanted_item.title = 'Mr Robot'
wanted_item.year = None
wanted_item.season = 1
wanted_item.episode = 6
wanted_item.quality = '720p'
wanted_item.source = 'Web'
wanted_item.codec = 'H.264'
wanted_item.release_group = 'NTb'
wanted_item.tvdb_id = 289590
wanted_item.imdb_id = None

wanted_item_json = '{"codec": "H.264", "episode": 6, "id": 1, "imdbId": null, "isSearchActive": true, ' \
                   '"languages": ["nl"], "libraryPath": null, "quality": "720p", "releaseGroup": "NTb", "season": 1, ' \
                   '"source": "Web", "timestamp": "2015-11-15 16:27:35", "title": "Mr Robot", "tvdbId": 289590, ' \
                   '"type": "episode", "videoFileName": "Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb.mkv", ' \
                   '"videoFilePath": "/path/to", "videoFileSize": "0 bytes", "year": null}'

wanted_item_list_json = '[' + wanted_item_json + ']'

downloaded_item = DownloadedItem()
downloaded_item.id = 1
downloaded_item.video_path = '/path/to/Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb.mkv'
downloaded_item.language = 'nl'
downloaded_item.provider = 'shooter'
downloaded_item.subtitle = 'Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb.srt'
downloaded_item.timestamp = '2015-11-15 16:27:35'
downloaded_item.type = 'episode'
downloaded_item.title = 'Mr Robot'
downloaded_item.year = None
downloaded_item.season = 1
downloaded_item.episode = 6
downloaded_item.quality = '720p'
downloaded_item.source = 'Web'
downloaded_item.codec = 'H.264'
downloaded_item.release_group = 'NTb'
downloaded_item.tvdb_id = 289590
downloaded_item.imdb_id = None

downloaded_item_json = '{"codec": "H.264", "episode": 6, "id": 1, "imdbId": null, "language": "nl", ' \
                       '"provider": "shooter", "quality": "720p", "releaseGroup": "NTb", "season": 1, ' \
                       '"source": "Web", "subtitle": "Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb.srt",' \
                       ' "timestamp": "2015-11-15 16:27:35", "title": "Mr Robot", "tvdbId": 289590, ' \
                       '"type": "episode", "videoFileName": "Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb.mkv", ' \
                       '"videoFilePath": "/path/to", "year": null}'

downloaded_item_list_json = '[' + downloaded_item_json + ']'


def test_get_wanted_all_items(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.LIBRARYPATHS', [])
    monkeypatch.setattr('autosubliminal.CHECKSUBDEADLINE', 4)
    monkeypatch.setattr('autosubliminal.CHECKSUBDELTA', 1)  # put on 1 to always return true on is_search_active
    autosubliminal.WANTEDQUEUE = []
    autosubliminal.WANTEDQUEUE.append(wanted_item)
    assert wanted_item_list_json == pickle_api_result(ItemsApi().wanted.get())


def test_get_wanted_single_item(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.LIBRARYPATHS', [])
    monkeypatch.setattr('autosubliminal.CHECKSUBDEADLINE', 4)
    monkeypatch.setattr('autosubliminal.CHECKSUBDELTA', 1)  # put on 1 to always return true on is_search_active
    autosubliminal.WANTEDQUEUE = []
    autosubliminal.WANTEDQUEUE.append(wanted_item)
    assert wanted_item_json == pickle_api_result(ItemsApi().wanted.get('1'))


def test_get_wanted_item_bad_request() -> None:
    autosubliminal.WANTEDQUEUE = []
    with pytest.raises(BadRequest):
        ItemsApi().wanted.get('-1')


def test_get_downloaded_items(mocker: MockerFixture) -> None:
    mocker.patch.object(LastDownloadsDb, 'get_last_downloads', return_value=[downloaded_item])
    assert downloaded_item_list_json == pickle_api_result(ItemsApi().downloaded.get())
