# coding=utf-8

from pytest import MonkeyPatch
from pytest_mock import MockerFixture

from autosubliminal.core.movie import MovieDetails, MovieSettings
from autosubliminal.core.subtitle import Subtitle
from autosubliminal.db import FailedMoviesDb, MovieDetailsDb, MovieSettingsDb
from autosubliminal.server.api.movies import MoviesApi
from tests.server.api.test_api import pickle_api_result

movie_details_1 = MovieDetails(
    path='/path/to/movie1/movie1.mkv',
    imdb_id='tt1',
    title='title1',
    year=2018,
    overview='overview1',
    poster='poster1.jpg',
    missing_languages=['en'],
    subtitles=[Subtitle(type='external', language='nl', path='/path/to/movie1/subtitle1.srt')],
)

movie_details_2 = MovieDetails(
    path='/path/to/movie2/movie2.mkv',
    imdb_id='tt2',
    title='title2',
    year=2019,
    overview='overview2',
    poster='poster2.jpg',
    missing_languages=['nl', 'en'],
    subtitles=[],
)

movie_settings_1 = MovieSettings(
    imdb_id='tt1', wanted_languages=['en', 'nl'], refine=True, hearing_impaired=False, utf8_encoding=True
)

movie_settings_2 = MovieSettings(
    imdb_id='tt2', wanted_languages=['en', 'nl'], refine=True, hearing_impaired=False, utf8_encoding=True
)

movies_json = (
    '[{"imdbId": "tt1", '
    '"overview": "overview1", "path": "/path/to/movie1", "pathInVideoPaths": false, "poster": true, '
    '"settings": {"hearingImpaired": false, "refine": true, "utf8Encoding": true, '
    '"wantedLanguages": ["en", "nl"]}, "title": "title1", "totalSubtitlesAvailable": 1, '
    '"totalSubtitlesMissing": 1, "totalSubtitlesWanted": 2, "year": 2018}, '
    '{"imdbId": "tt2", '
    '"overview": "overview2", "path": "/path/to/movie2", "pathInVideoPaths": false, "poster": true, '
    '"settings": {"hearingImpaired": false, "refine": true, "utf8Encoding": true, '
    '"wantedLanguages": ["en", "nl"]}, "title": "title2", "totalSubtitlesAvailable": 0, '
    '"totalSubtitlesMissing": 2, "totalSubtitlesWanted": 2, "year": 2019}]'
)

movie_1_json = (
    '{"files": [{"embeddedLanguages": [], "fileName": "movie1.mkv", "hardcodedLanguages": [], '
    '"type": "video"}, {"fileName": "subtitle1.srt", "language": "nl", "type": "subtitle"}], '
    '"imdbId": "tt1", "overview": "overview1", "path": "/path/to/movie1", "pathInVideoPaths": false, '
    '"poster": true, "settings": {"hearingImpaired": false, "refine": true, "utf8Encoding": true, '
    '"wantedLanguages": ["en", "nl"]}, "title": "title1", "totalSubtitlesAvailable": 1, '
    '"totalSubtitlesMissing": 1, "totalSubtitlesWanted": 2, "year": 2018}'
)

movie_settings_1_json = (
    '{"hearingImpaired": false, "refine": true, "utf8Encoding": true, ' '"wantedLanguages": ["en", "nl"]}'
)

overview_json = (
    '{"failedMovies": ["/path/to/failed/movie"], "totalMovies": 1, "totalSubtitlesAvailable": 1, '
    '"totalSubtitlesMissing": 1, "totalSubtitlesWanted": 2}'
)


def test_get_movies(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.VIDEOPATHS', [])
    mocker.patch.object(MovieDetailsDb, 'get_all_movies', return_value=[movie_details_1, movie_details_2])
    mocker.patch.object(MovieSettingsDb, 'get_movie_settings', side_effect=[movie_settings_1, movie_settings_2])
    assert movies_json == pickle_api_result(MoviesApi().get())


def test_get_movie(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.VIDEOPATHS', [])
    mocker.patch.object(MovieDetailsDb, 'get_movie', return_value=movie_details_1)
    mocker.patch('os.path.exists', return_value=True)
    mocker.patch(
        'autosubliminal.server.api.movies.MoviesApi._get_movie_files',
        return_value=[
            {'file_name': 'movie1.mkv', 'type': 'video', 'embedded_languages': [], 'hardcoded_languages': []},
            {'file_name': 'subtitle1.srt', 'type': 'subtitle', 'language': 'nl'},
        ],
    )
    mocker.patch.object(MovieSettingsDb, 'get_movie_settings', return_value=movie_settings_1)
    assert movie_1_json == pickle_api_result(MoviesApi().get('tt1'))


def test_get_movie_settings(mocker: MockerFixture) -> None:
    mocker.patch.object(MovieSettingsDb, 'get_movie_settings', return_value=movie_settings_1)
    assert movie_settings_1_json == pickle_api_result(MoviesApi().settings.get('tt1'))


def test_get_movies_overview(mocker: MockerFixture) -> None:
    mocker.patch.object(FailedMoviesDb, 'get_failed_movies', return_value=['/path/to/failed/movie'])
    mocker.patch.object(MovieDetailsDb, 'get_all_movies', return_value=[movie_details_1])
    mocker.patch.object(MovieSettingsDb, 'get_movie_settings', side_effect=[movie_settings_1, movie_settings_2])
    assert overview_json == pickle_api_result(MoviesApi().overview.get())
