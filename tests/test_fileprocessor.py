import os

import autosubliminal
from autosubliminal.fileprocessor import process_file
from autosubliminal.indexer import ShowIndexer, MovieIndexer

autosubliminal.SHOWINDEXER = ShowIndexer()
autosubliminal.MOVIEINDEXER = MovieIndexer()


def test_process_file_size_too_low(monkeypatch):
    # Monkey patch autosubliminal.MINVIDEOFILESIZE
    monkeypatch.setattr('autosubliminal.MINVIDEOFILESIZE', 10)
    # Test process_file
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Southpaw.2015.1080p.BluRay.x264.mkv')
    assert result_dict is None


def test_process_file_insufficient_guess(mocker):
    # Test process_file
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Insufficient.guess.series.S1.mkv')
    assert result_dict is None


def test_process_episode_file(mocker):
    # Mock get_tvdb_id call
    mocker.patch.object(autosubliminal.SHOWINDEXER, 'get_tvdb_id')
    autosubliminal.SHOWINDEXER.get_tvdb_id.return_value = 263365
    # Test process_file
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Marvels.Agents.of.S.H.I.E.L.D.S05E03.720p.HDTV.x264-AVS[rarbg].mkv')
    assert result_dict is not None
    assert result_dict['type'] == 'episode'
    assert result_dict['title'] == 'Marvels Agents of S.H.I.E.L.D.'
    assert result_dict['season'] == 5
    assert result_dict['episode'] == 3
    assert result_dict['source'] == 'HDTV'
    assert result_dict['quality'] == '720p'
    assert result_dict['codec'] == 'h264'
    assert result_dict['releasegrp'] == 'AVS'
    assert result_dict['tvdbid'] == 263365


def test_process_multi_episode_file(mocker):
    # Mock get_tvdb_id call
    mocker.patch.object(autosubliminal.SHOWINDEXER, 'get_tvdb_id')
    autosubliminal.SHOWINDEXER.get_tvdb_id.return_value = 263365
    # Test process_file
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Marvels.Agents.of.S.H.I.E.L.D.S05E01-E02.720p.HDTV.x264-AVS.mkv')
    assert result_dict is not None
    assert result_dict['type'] == 'episode'
    assert result_dict['title'] == 'Marvels Agents of S.H.I.E.L.D.'
    assert result_dict['season'] == 5
    assert result_dict['episode'] == '1,2'
    assert result_dict['source'] == 'HDTV'
    assert result_dict['quality'] == '720p'
    assert result_dict['codec'] == 'h264'
    assert result_dict['releasegrp'] == 'AVS'
    assert result_dict['tvdbid'] == 263365


def test_get_process_file_movie(mocker):
    # Mock get_imdb_id_and_year call
    mocker.patch.object(autosubliminal.MOVIEINDEXER, 'get_imdb_id_and_year')
    autosubliminal.MOVIEINDEXER.get_imdb_id_and_year.return_value = '1798684', 2015
    # Test process_file
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Southpaw.2015.1080p.BluRay.x264.mkv')
    assert result_dict is not None
    assert result_dict['type'] == 'movie'
    assert result_dict['title'] == 'Southpaw'
    assert result_dict['year'] == 2015
    assert result_dict['source'] == 'BluRay'
    assert result_dict['quality'] == '1080p'
    assert result_dict['codec'] == 'h264'
    assert result_dict['imdbid'] == '1798684'
