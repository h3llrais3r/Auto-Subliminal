import os

import autosubliminal
from autosubliminal.fileprocessor import process_file
from autosubliminal.indexer import ShowIndexer

autosubliminal.SHOWINDEXER = ShowIndexer()


def test_get_process_file(mocker):
    # Mock get_tvdb_id call
    mocker.patch.object(autosubliminal.SHOWINDEXER, 'get_tvdb_id')
    autosubliminal.SHOWINDEXER.get_tvdb_id.return_value = 263365
    # Test process_file
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Marvels.Agents.of.S.H.I.E.L.D.S05E03.720p.HDTV.x264-AVS.mkv')
    assert result_dict is not None
    assert result_dict['title'] == 'Marvels Agents of S.H.I.E.L.D.'
    assert result_dict['season'] == 5
    assert result_dict['episode'] == 3
    assert result_dict['source'] == 'HDTV'
    assert result_dict['quality'] == '720p'
    assert result_dict['codec'] == 'h264'
    assert result_dict['releasegrp'] == 'AVS'
    assert result_dict['tvdbid'] == 263365


def test_get_process_file_multi_episode(mocker):
    # Mock get_tvdb_id call
    mocker.patch.object(autosubliminal.SHOWINDEXER, 'get_tvdb_id')
    autosubliminal.SHOWINDEXER.get_tvdb_id.return_value = 263365
    # Test process_file
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Marvels.Agents.of.S.H.I.E.L.D.S05E01-E02.720p.HDTV.x264-AVS.mkv')
    assert result_dict is not None
    assert result_dict['title'] == 'Marvels Agents of S.H.I.E.L.D.'
    assert result_dict['season'] == 5
    assert result_dict['episode'] == '1,2'
    assert result_dict['source'] == 'HDTV'
    assert result_dict['quality'] == '720p'
    assert result_dict['codec'] == 'h264'
    assert result_dict['releasegrp'] == 'AVS'
    assert result_dict['tvdbid'] == 263365
