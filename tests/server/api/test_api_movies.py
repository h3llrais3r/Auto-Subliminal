# coding=utf-8

from autosubliminal.core.movie import MovieDetails
from autosubliminal.db import MovieDetailsDb
from autosubliminal.server.api.movies import MoviesApi

from tests.server.api.test_api import pickle_api_result

movie_details_1 = MovieDetails(path='/path/to/movie1/movie1.mkv', imdb_id='tt1', title='title1', year=2018,
                               overview='overview1', poster='poster1.jpg', available_languages=['nl'],
                               missing_languages=['en'])

movie_details_2 = MovieDetails(path='/path/to/movie2/movie2.mkv', imdb_id='tt2', title='title2', year=2019,
                               overview='overview2', poster='poster2.jpg', available_languages=[],
                               missing_languages=['nl', 'en'])

movies_json = '[{"available_languages": ["nl"], "imdb_id": "tt1", "missing_languages": ["en"], ' \
              '"overview": "overview1", "path": "/path/to/movie1", "poster": true, "title": "title1", ' \
              '"total_subtitles_available": 1, "total_subtitles_missing": 1, "total_subtitles_wanted": 2, ' \
              '"wanted_languages": ["nl", "en"], "year": 2018}, ' \
              '{"available_languages": [], "imdb_id": "tt2", "missing_languages": ["nl", "en"], ' \
              '"overview": "overview2", "path": "/path/to/movie2", "poster": true, "title": "title2", ' \
              '"total_subtitles_available": 0, "total_subtitles_missing": 2, "total_subtitles_wanted": 2, ' \
              '"wanted_languages": ["nl", "en"], "year": 2019}]'

movie_1_json = '{"available_languages": ["nl"], "files": [{"filename": "movie1", "type": "video"}, ' \
               '{"filename": "subtitle1", "type": "subtitle"}], "imdb_id": "tt1", "missing_languages": ["en"], ' \
               '"overview": "overview1", "path": "/path/to/movie1", "poster": true, "title": "title1", ' \
               '"total_subtitles_available": 1, "total_subtitles_missing": 1, "total_subtitles_wanted": 2, ' \
               '"wanted_languages": ["nl", "en"], "year": 2018}'


def test_get_movies(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['en'])
    mocker.patch.object(MovieDetailsDb, 'get_all_movies', return_value=[movie_details_1, movie_details_2])
    assert movies_json == pickle_api_result(MoviesApi().get())


def test_get_movie(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['en'])
    mocker.patch.object(MovieDetailsDb, 'get_movie', return_value=movie_details_1)
    mocker.patch('autosubliminal.server.api.movies.get_movie_files',
                 return_value=[{'filename': 'movie1', 'type': 'video'},
                               {'filename': 'subtitle1', 'type': 'subtitle'}])
    assert movie_1_json == pickle_api_result(MoviesApi().get('tt1'))
