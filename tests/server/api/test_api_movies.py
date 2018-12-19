# coding=utf-8

from autosubliminal.core.movie import MovieDetails
from autosubliminal.db.movie_db import MovieDetailsDb
from autosubliminal.server.api.movies import MoviesApi

from tests.server.api.test_api import pickle_api_result

movie_details_1 = MovieDetails(path='path1', imdb_id=1, title='title1', year=2018, overview='overview1',
                               poster='poster1.jpg', available_languages=['nl'], missing_languages=['en'])

movie_details_2 = MovieDetails(path='path2', imdb_id=2, title='title2', year=2019, overview='overview2',
                               poster='poster2.jpg', available_languages=[], missing_languages=['nl', 'en'])

movies_json = '[{"available_languages": ["nl"], "imdb_id": 1, "missing_languages": ["en"], "overview": "overview1", ' \
              '"path": "path1", "poster": true, "subtitles_wanted": ["nl", "en"], "title": "title1", ' \
              '"total_subtitles_available": 1, "total_subtitles_missing": 1, "total_subtitles_needed": 2, ' \
              '"year": 2018}, ' \
              '{"available_languages": [], "imdb_id": 2, "missing_languages": ["nl", "en"], "overview": "overview2", ' \
              '"path": "path2", "poster": true, "subtitles_wanted": ["nl", "en"], "title": "title2", ' \
              '"total_subtitles_available": 0, "total_subtitles_missing": 2, "total_subtitles_needed": 2, ' \
              '"year": 2019}]'


def test_get_movies(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['en'])
    mocker.patch.object(MovieDetailsDb, 'get_all_movies', return_value=[movie_details_1, movie_details_2])
    result = pickle_api_result(MoviesApi().get())
    print result
    print movies_json
