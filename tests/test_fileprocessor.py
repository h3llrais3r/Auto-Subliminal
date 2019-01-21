# coding=utf-8

import os

import autosubliminal
from autosubliminal.fileprocessor import process_file
from autosubliminal.indexer import ShowIndexer, MovieIndexer

autosubliminal.SHOWINDEXER = ShowIndexer()
autosubliminal.MOVIEINDEXER = MovieIndexer()


def test_process_file_size_too_low(monkeypatch):
    monkeypatch.setattr('autosubliminal.MINVIDEOFILESIZE', 10)
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Southpaw.2015.1080p.BluRay.x264.mkv')
    assert result_dict is None


def test_process_episode_file_insufficient_guess():
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    result_dict = process_file(dir_name, 'Insufficient.guess.series.S1.mkv')
    assert result_dict is None


def test_process_episode_file(mocker):
    mocker.patch.object(autosubliminal.SHOWINDEXER, 'get_tvdb_id')
    autosubliminal.SHOWINDEXER.get_tvdb_id.return_value = 263365
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    wanted_item = process_file(dir_name, 'Marvels.Agents.of.S.H.I.E.L.D.S05E03.720p.HDTV.x264-AVS[rarbg].mkv')
    assert wanted_item is not None
    assert wanted_item.type == 'episode'
    assert wanted_item.title == 'Marvels Agents of S.H.I.E.L.D.'
    assert wanted_item.season == 5
    assert wanted_item.episode == 3
    assert wanted_item.source == 'HDTV'
    assert wanted_item.quality == '720p'
    assert wanted_item.codec == 'H.264'
    assert wanted_item.releasegrp == 'AVS'
    assert wanted_item.tvdbid == 263365


def test_process_multi_episode_file(mocker):
    mocker.patch.object(autosubliminal.SHOWINDEXER, 'get_tvdb_id')
    autosubliminal.SHOWINDEXER.get_tvdb_id.return_value = 263365
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    wanted_item = process_file(dir_name, 'Marvels.Agents.of.S.H.I.E.L.D.S05E01-E02.720p.HDTV.x264-AVS.mkv')
    assert wanted_item is not None
    assert wanted_item.type == 'episode'
    assert wanted_item.title == 'Marvels Agents of S.H.I.E.L.D.'
    assert wanted_item.season == 5
    assert wanted_item.episode == [1, 2]
    assert wanted_item.source == 'HDTV'
    assert wanted_item.quality == '720p'
    assert wanted_item.codec == 'H.264'
    assert wanted_item.releasegrp == 'AVS'
    assert wanted_item.tvdbid == 263365


def test_process_episode_file_guess_by_filename(mocker):
    mocker.patch.object(autosubliminal.SHOWINDEXER, 'get_tvdb_id')
    autosubliminal.SHOWINDEXER.get_tvdb_id.return_value = 248741
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    wanted_item = process_file(dir_name, '2 Broke Girls - S01E01 - HDTV-720p Proper - x264 AC3 - IMMERSE.mkv')
    assert wanted_item is not None
    assert wanted_item.type == 'episode'
    assert wanted_item.title == '2 Broke Girls'
    assert wanted_item.season == 1
    assert wanted_item.episode == 1
    assert wanted_item.source == 'HDTV'
    assert wanted_item.quality == '720p'
    assert wanted_item.codec == 'H.264'
    assert wanted_item.releasegrp == 'IMMERSE'
    assert wanted_item.tvdbid == 248741


def test_process_episode_file_guess_by_file_path(mocker):
    mocker.patch.object(autosubliminal.SHOWINDEXER, 'get_tvdb_id')
    autosubliminal.SHOWINDEXER.get_tvdb_id.return_value = 248741
    # Mock getctime (we don't want that the _enrich_dict fails since we are using a simulated dir_name)
    mocker.patch.object(os.path, 'getctime')
    os.path.getctime.return_value = None
    dir_name = os.path.join(os.path.abspath(os.sep), 'Series', '2 Broke Girls', 'Season 1')
    wanted_item = process_file(dir_name, 'S01E01.mkv')
    assert wanted_item is not None
    assert wanted_item.type == 'episode'
    assert wanted_item.title == '2 Broke Girls'
    assert wanted_item.season == 1
    assert wanted_item.episode == 1
    assert wanted_item.source is None
    assert wanted_item.quality is None
    assert wanted_item.codec is None
    assert wanted_item.releasegrp is None
    assert wanted_item.tvdbid == 248741


def test_process_file_movie(mocker):
    mocker.patch.object(autosubliminal.MOVIEINDEXER, 'get_imdb_id_and_year')
    autosubliminal.MOVIEINDEXER.get_imdb_id_and_year.return_value = 'tt1798684', 2015
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    wanted_item = process_file(dir_name, 'Southpaw.2015.1080p.BluRay.x264.mkv')
    assert wanted_item is not None
    assert wanted_item.type == 'movie'
    assert wanted_item.title == 'Southpaw'
    assert wanted_item.year == 2015
    assert wanted_item.source == 'Blu-ray'
    assert wanted_item.quality == '1080p'
    assert wanted_item.codec == 'H.264'
    assert wanted_item.imdbid == 'tt1798684'


def test_process_movie_file_special_chars(mocker):
    mocker.patch.object(autosubliminal.MOVIEINDEXER, 'get_imdb_id_and_year')
    autosubliminal.MOVIEINDEXER.get_imdb_id_and_year.return_value = 'tt0993789', 2008
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    wanted_item = process_file(dir_name, u'Un conte de Noël (2008).mkv')
    assert wanted_item is not None
    assert wanted_item.type == 'movie'
    assert wanted_item.title == u'Un conte de Noël'
    assert wanted_item.year == 2008
    assert wanted_item.imdbid == 'tt0993789'


def test_process_movie_file_insufficient_guess(mocker):
    mocker.patch('autosubliminal.fileprocessor.guessit',
                 return_value=dict([('year', 2018), ('container', 'mkv'), ('type', 'movie')]))
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    assert process_file(dir_name, '2018.mkv') is None


def test_guess_invalid_type(mocker):
    mocker.patch('autosubliminal.fileprocessor.guessit', return_value=dict([('year', 2018), ('container', 'mkv')]))
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    assert process_file(dir_name, '2018.mkv') is None


def test_guess_exception(mocker):
    mocker.patch('autosubliminal.fileprocessor.guessit', side_effect=Exception)
    dir_name = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
    assert process_file(dir_name, 'Southpaw.2015.1080p.BluRay.x264.mkv') is None
