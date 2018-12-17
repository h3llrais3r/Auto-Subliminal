# coding=utf-8

from autosubliminal.core.show import ShowDetails, ShowEpisodeDetails
from autosubliminal.db.show_db import ShowDetailsDb, ShowEpisodeDetailsDb
from autosubliminal.server.api.shows import ShowsApi

from tests.server.api.test_api import pickle_api_result

show_details_1 = ShowDetails(path='path1', tvdb_id=1, title='title1', year=2018, overview='overview1',
                             poster='poster1.jpg', banner='banner1.jpg')

show_details_2 = ShowDetails(path='path2', tvdb_id=2, title='title2', year=2019, overview='overview2',
                             poster='poster2.jpg', banner='banner2.jpg')

show_episode_details_1_1 = ShowEpisodeDetails(path='path1_1', tvdb_id=11, show_tvdb_id=1, title='title1_1', season=1,
                                              episode=1, available_languages=['nl'], missing_languages=['en'])

show_episode_details_2_1 = ShowEpisodeDetails(path='path2_1', tvdb_id=21, show_tvdb_id=2, title='title2_1', season=1,
                                              episode=1, available_languages=['nl'], missing_languages=['en'])

show_episode_details_2_2 = ShowEpisodeDetails(path='path2_2', tvdb_id=22, show_tvdb_id=2, title='title2_2', season=1,
                                              episode=2, available_languages=[], missing_languages=['nl', 'en'])

shows_json = '[{"banner": true, "overview": "overview1", "path": "path1", "poster": true, ' \
             '"subtitles_wanted": ["nl", "en"], "title": "title1", "total_subtitles_available": 1, ' \
             '"total_subtitles_missing": 1, "total_subtitles_needed": 2, "tvdb_id": 1, "year": 2018}, ' \
             '{"banner": true, "overview": "overview2", "path": "path2", "poster": true, ' \
             '"subtitles_wanted": ["nl", "en"], "title": "title2", "total_subtitles_available": 1, ' \
             '"total_subtitles_missing": 3, "total_subtitles_needed": 4, "tvdb_id": 2, "year": 2019}]'


def test_get_shows(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['en'])
    mocker.patch.object(ShowDetailsDb, 'get_all_shows', return_value=[show_details_1, show_details_2])
    mocker.patch.object(ShowEpisodeDetailsDb, 'get_show_episodes',
                        side_effect=[[show_episode_details_1_1], [show_episode_details_2_1, show_episode_details_2_2]])
    assert shows_json == pickle_api_result(ShowsApi().get())
