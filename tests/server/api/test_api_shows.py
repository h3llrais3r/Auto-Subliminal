# coding=utf-8

from autosubliminal.core.show import ShowDetails, ShowEpisodeDetails, ShowSettings
from autosubliminal.core.subtitle import Subtitle, EXTERNAL
from autosubliminal.db import ShowDetailsDb, ShowEpisodeDetailsDb, ShowSettingsDb
from autosubliminal.server.api.shows import ShowsApi

from tests.server.api.test_api import pickle_api_result

show_details_1 = ShowDetails(path='/path/to/show1', tvdb_id=1, title='title1', year=2018, overview='overview1',
                             poster='poster1.jpg', banner='banner1.jpg')

show_details_2 = ShowDetails(path='/path/to/show2', tvdb_id=2, title='title2', year=2019, overview='overview2',
                             poster='poster2.jpg', banner='banner2.jpg')

show_settings_1 = ShowSettings(tvdb_id=1, wanted_languages=['en', 'nl'], refine=True, hearing_impaired=False,
                               utf8_encoding=True)

show_settings_2 = ShowSettings(tvdb_id=2, wanted_languages=['en', 'nl'], refine=True, hearing_impaired=False,
                               utf8_encoding=True)

show_episode_details_1_1 = ShowEpisodeDetails(path='/path/to/show1/s01e01.mkv', tvdb_id=11, show_tvdb_id=1,
                                              title='title1_1', season=1, episode=1, missing_languages=['en'],
                                              subtitles=[Subtitle(type=EXTERNAL, language='nl',
                                                                  path='/path/to/movie1/subtitle1.srt')])

show_episode_details_2_1 = ShowEpisodeDetails(path='/path/to/show2/s01e01.mkv', tvdb_id=21, show_tvdb_id=2,
                                              title='title2_1', season=1, episode=1, missing_languages=['en'],
                                              subtitles=[Subtitle(type=EXTERNAL, language='nl',
                                                                  path='/path/to/movie1/subtitle1.srt')])

show_episode_details_2_2 = ShowEpisodeDetails(path='/path/to/show2/s01e02.mkv', tvdb_id=22, show_tvdb_id=2,
                                              title='title2_2', season=1, episode=2, missing_languages=['nl', 'en'],
                                              subtitles=[])

shows_json = '[{"banner": true, "overview": "overview1", "path": "/path/to/show1", "poster": true, "settings": ' \
             '{"hearing_impaired": false, "refine": true, "utf8_encoding": true, "wanted_languages": ["en", "nl"]}, ' \
             '"title": "title1", "total_subtitles_available": 1, "total_subtitles_missing": 1, ' \
             '"total_subtitles_wanted": 2, "tvdb_id": 1, "year": 2018}, ' \
             '{"banner": true, "overview": "overview2", "path": "/path/to/show2", "poster": true, "settings": ' \
             '{"hearing_impaired": false, "refine": true, "utf8_encoding": true, "wanted_languages": ["en", "nl"]}, ' \
             '"title": "title2", "total_subtitles_available": 1, "total_subtitles_missing": 3, ' \
             '"total_subtitles_wanted": 4, "tvdb_id": 2, "year": 2019}]'

show_1_json = '{"banner": true, "files": ' \
              '[{"season_files": [{"embedded_languages": [], "filename": "s01e01.mkv", "hardcoded_languages": [], ' \
              '"tvdb_id": 11, "type": "video"}, {"filename": "s01e01.srt", "language": "nl", "type": "subtitle"}], ' \
              '"season_name": "Season 01", "season_path": "/path/to/show1"}], ' \
              '"overview": "overview1", "path": "/path/to/show1", "poster": true, "settings": ' \
              '{"hearing_impaired": false, "refine": true, "utf8_encoding": true, "wanted_languages": ["en", "nl"]}, ' \
              '"title": "title1", ' \
              '"total_subtitles_available": 1, "total_subtitles_missing": 1, "total_subtitles_wanted": 2, ' \
              '"tvdb_id": 1, "year": 2018}'


def test_get_shows(mocker):
    mocker.patch.object(ShowDetailsDb, 'get_all_shows', return_value=[show_details_1, show_details_2])
    mocker.patch.object(ShowEpisodeDetailsDb, 'get_show_episodes',
                        side_effect=[[show_episode_details_1_1], [show_episode_details_2_1, show_episode_details_2_2]])
    mocker.patch.object(ShowSettingsDb, 'get_show_settings', side_effect=[show_settings_1, show_settings_2])
    assert shows_json == pickle_api_result(ShowsApi().get())


def test_get_show(mocker):
    mocker.patch.object(ShowDetailsDb, 'get_show', return_value=show_details_1)
    mocker.patch.object(ShowEpisodeDetailsDb, 'get_show_episodes', return_value=[show_episode_details_1_1])
    mocker.patch.object(ShowSettingsDb, 'get_show_settings', return_value=show_settings_1)
    mocker.patch('autosubliminal.server.api.shows.ShowsApi._get_show_episode_files',
                 return_value=[{'season_name': 'Season 01', 'season_path': '/path/to/show1', 'season_files': [
                     {'filename': 's01e01.mkv', 'type': 'video', 'embedded_languages': [], 'hardcoded_languages': [],
                      'tvdb_id': 11},
                     {'filename': 's01e01.srt', 'type': 'subtitle', 'language': 'nl'}
                 ]}])
    assert show_1_json == pickle_api_result(ShowsApi().get('1'))


def test_get_shows_overview(mocker):
    mocker.patch.object(ShowDetailsDb, 'get_all_shows', return_value=[show_details_1, show_details_2])
    mocker.patch.object(ShowSettingsDb, 'get_show_settings', side_effect=[show_settings_1, show_settings_2])
    mocker.patch.object(ShowEpisodeDetailsDb, 'get_show_episodes',
                        side_effect=[[show_episode_details_1_1], [show_episode_details_2_1, show_episode_details_2_2]])
    overview_json = '{"total_episodes": 3, "total_shows": 2, "total_subtitles_available": 2, ' \
                    '"total_subtitles_missing": 4, "total_subtitles_wanted": 6}'
    assert overview_json == pickle_api_result(ShowsApi().overview.get())
