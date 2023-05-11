# coding=utf-8

from imdbpie.objects import TitleSearchResult
from pytest import MonkeyPatch
from pytest_mock import MockerFixture
from tvdb_api.models.series_search_result import SeriesSearchResult

import autosubliminal
from autosubliminal import version
from autosubliminal.core.indexer import IMDB_ID_UNKNOWN, TVDB_ID_UNKNOWN, MovieIndexer, ShowIndexer
from autosubliminal.core.movie import MovieDetails
from autosubliminal.core.show import ShowDetails, ShowEpisodeDetails

autosubliminal.USERAGENT = 'Auto-Subliminal/' + version.RELEASE_VERSION
autosubliminal.TVDBAPIKEY = '76F2D5362F45C5EC'
autosubliminal.SHOWNAMEMAPPING = {}
autosubliminal.MOVIENAMEMAPPING = {}


def test_get_tvdb_id() -> None:
    indexer = ShowIndexer()
    # By name
    assert indexer.get_tvdb_id('The Big Bang Theory', force_search=True, store_id=False) == 80379
    assert indexer.get_tvdb_id('Mr Robot', force_search=True, store_id=False) == 289590
    assert indexer.get_tvdb_id('Dragon Ball Kai', force_search=True, store_id=False) == 88031
    # By alias
    assert indexer.get_tvdb_id('Dragon Ball Z Kai', force_search=True, store_id=False) == 88031
    # By name and year
    assert indexer.get_tvdb_id('The Americans', year=2013, force_search=True, store_id=False) == 261690
    # By name and language
    assert indexer.get_tvdb_id('Fais pas ci, fais pas ça', language='fr', force_search=True, store_id=False) == 80977


def test_get_tvdb_id_from_show_name_mapping(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.SHOWNAMEMAPPING', {'the big bang theory': 80379})
    indexer = ShowIndexer()
    assert indexer.get_tvdb_id('The Big Bang Theory', force_search=False, store_id=False) == 80379


def test_get_tvdb_id_from_cache(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.SHOWNAMEMAPPING', {})
    mocker.patch('autosubliminal.db.TvdbIdCacheDb.get_tvdb_id', return_value=80379)
    indexer = ShowIndexer()
    assert indexer.get_tvdb_id('The Big Bang Theory', force_search=False, store_id=False) == 80379


def test_get_tvdb_id_from_cache_not_found(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.SHOWNAMEMAPPING', {})
    mocker.patch('autosubliminal.db.TvdbIdCacheDb.get_tvdb_id', return_value=TVDB_ID_UNKNOWN)
    indexer = ShowIndexer()
    assert indexer.get_tvdb_id('The Big Bang Theory', force_search=False, store_id=False) is None


def test_get_tvdb_id_and_store_in_cache(mocker: MockerFixture) -> None:
    search_result = SeriesSearchResult(id=80379)
    mocker.patch('autosubliminal.core.indexer.ShowIndexer._search', return_value=search_result)
    db_mock_delete = mocker.patch('autosubliminal.db.TvdbIdCacheDb.delete_tvdb_id')
    db_mock_set = mocker.patch('autosubliminal.db.TvdbIdCacheDb.set_tvdb_id')
    indexer = ShowIndexer()
    assert indexer.get_tvdb_id('The Big Bang Theory', force_search=True, store_id=True) == 80379
    assert db_mock_delete.called
    assert db_mock_set.called


def test_get_tvdb_id_exception(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.core.indexer.ShowIndexer._search', side_effect=Exception)
    db_mock_delete = mocker.patch('autosubliminal.db.TvdbIdCacheDb.delete_tvdb_id')
    db_mock_set = mocker.patch('autosubliminal.db.TvdbIdCacheDb.set_tvdb_id')
    indexer = ShowIndexer()
    assert indexer.get_tvdb_id('The Big Bang Theory', force_search=True, store_id=True) is None
    assert db_mock_delete.called
    assert db_mock_set.called


def test_get_show_details() -> None:
    indexer = ShowIndexer()
    show_details = indexer.get_show_details(80379)
    assert show_details is not None
    assert isinstance(show_details, ShowDetails)
    assert show_details.tvdb_id == 80379
    assert show_details.title == 'The Big Bang Theory'
    assert show_details.year == 2007
    assert show_details.overview is not None
    assert show_details.banner is not None
    assert show_details.poster is not None


def test_get_show_episodes() -> None:
    indexer = ShowIndexer()
    episodes = indexer.get_show_episodes(80379)
    assert episodes is not None
    assert isinstance(episodes, list)
    assert len(episodes) > 0
    episode = episodes[0]
    assert isinstance(episode, ShowEpisodeDetails)
    assert episode.tvdb_id == 2321301
    assert episode.show_tvdb_id == '80379'
    assert episode.title == 'Unaired Pilot'
    assert episode.season == 0
    assert episode.episode == 1


def test_get_show_episode() -> None:
    indexer = ShowIndexer()
    episode = indexer.get_show_episode(80379, 1, 1)
    assert isinstance(episode, ShowEpisodeDetails)
    assert episode.tvdb_id == 332484
    assert episode.show_tvdb_id == '80379'
    assert episode.title == 'Pilot'
    assert episode.season == 1
    assert episode.episode == 1


def test_get_show_artwork_url() -> None:
    # Same test as in test_show.py but now with real data from show indexer
    url_poster = 'https://www.thetvdb.com/banners/posters/80379-18.jpg'
    url_poster_thumb = 'https://www.thetvdb.com/banners/_cache/posters/80379-18.jpg'
    url_banner = 'https://www.thetvdb.com/banners/graphical/80379-g23.jpg'
    url_banner_thumb = 'https://www.thetvdb.com/banners/_cache/graphical/80379-g23.jpg'
    indexer = ShowIndexer()
    show_details = indexer.get_show_details(80379)
    assert show_details.get_artwork_url('poster', thumbnail=False) == url_poster
    assert show_details.get_artwork_url('poster', thumbnail=True) == url_poster_thumb
    assert show_details.get_artwork_url('banner', thumbnail=False) == url_banner
    assert show_details.get_artwork_url('banner', thumbnail=True) == url_banner_thumb
    assert show_details.get_artwork_url('unknown', thumbnail=False) is None
    assert show_details.get_artwork_url('unknown', thumbnail=True) is None


def test_get_imdb_id() -> None:
    indexer = MovieIndexer()
    # By title
    assert indexer.get_imdb_id_and_year('Southpaw', force_search=True, store_id=False) == ('tt1798684', 2015)
    # By title and year
    assert indexer.get_imdb_id_and_year(
        'Southpaw', year=2015, force_search=True, store_id=False) == ('tt1798684', 2015)
    assert indexer.get_imdb_id_and_year(
        'Joyeux Noël', year=2005, force_search=True, store_id=False) == ('tt0424205', 2005)
    assert indexer.get_imdb_id_and_year(
        'Ron Goossens, Low Budget Stuntman', year=2017, force_search=True, store_id=False) == ('tt5637542', 2017)
    # By alternative title
    assert indexer.get_imdb_id_and_year('Kyatapirâ', force_search=True, store_id=False) == ('tt1508290', 2010)
    # By alternative title and year
    assert indexer.get_imdb_id_and_year(
        'Kyatapirâ', year=2010, force_search=True, store_id=False) == ('tt1508290', 2010)
    # By fallback search
    assert indexer.get_imdb_id_and_year('Bullet', year=2014, force_search=True, store_id=False) == ('tt2544734', 2014)


def test_get_imdb_id_from_movie_name_mapping(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.MOVIENAMEMAPPING', {'southpaw (2015)': 'tt1798684'})
    indexer = MovieIndexer()
    assert indexer.get_imdb_id_and_year('Southpaw', 2015, force_search=False, store_id=False) == ('tt1798684', 2015)


def test_get_imdb_id_from_cache(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.MOVIENAMEMAPPING', {})
    mocker.patch('autosubliminal.db.ImdbIdCacheDb.get_imdb_id', return_value='tt1798684')
    indexer = MovieIndexer()
    assert indexer.get_imdb_id_and_year('Southpaw', 2015, force_search=False, store_id=False) == ('tt1798684', 2015)


def test_get_imdb_id_from_cache_not_found(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.MOVIENAMEMAPPING', {})
    mocker.patch('autosubliminal.db.ImdbIdCacheDb.get_imdb_id', return_value=IMDB_ID_UNKNOWN)
    indexer = MovieIndexer()
    assert indexer.get_imdb_id_and_year('Southpaw', 2015, force_search=False, store_id=False) == (None, 2015)


def test_get_imdb_id_and_store_in_cache(mocker: MockerFixture) -> None:
    search_result = TitleSearchResult(imdb_id='tt1798684', title='Southpaw', type='feature', year=2015)
    mocker.patch('autosubliminal.core.indexer.MovieIndexer._search', return_value=search_result)
    db_mock_delete = mocker.patch('autosubliminal.db.ImdbIdCacheDb.delete_imdb_id')
    db_mock_set = mocker.patch('autosubliminal.db.ImdbIdCacheDb.set_imdb_id')
    indexer = MovieIndexer()
    assert indexer.get_imdb_id_and_year('Southpaw', 2015, force_search=True, store_id=True) == ('tt1798684', 2015)
    assert db_mock_delete.called
    assert db_mock_set.called


def test_get_imdb_id_exception(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.core.indexer.MovieIndexer._search', side_effect=Exception)
    db_mock_delete = mocker.patch('autosubliminal.db.ImdbIdCacheDb.delete_imdb_id')
    db_mock_set = mocker.patch('autosubliminal.db.ImdbIdCacheDb.set_imdb_id')
    indexer = MovieIndexer()
    assert indexer.get_imdb_id_and_year('Southpaw', 2015, force_search=True, store_id=True) == (None, 2015)
    assert db_mock_delete.called
    assert db_mock_set.called


def test_get_movie_details() -> None:
    indexer = MovieIndexer()
    movie_details = indexer.get_movie_details('tt1798684')
    assert movie_details is not None
    assert isinstance(movie_details, MovieDetails)
    assert movie_details.imdb_id == 'tt1798684'
    assert movie_details.title == 'Southpaw'
    assert movie_details.year == 2015
    assert movie_details.overview is not None
    assert movie_details.poster is not None


def test_sanitize_imdb_title() -> None:
    # See result of http://www.imdb.com/find?q=Aftermath&s=tt&mx=20
    assert MovieIndexer.sanitize_imdb_title('Aftermath (I)') == 'aftermath'
    assert MovieIndexer.sanitize_imdb_title('Aftermath') == 'aftermath'
    assert MovieIndexer.sanitize_imdb_title('(Aftermath)') == 'aftermath'
    assert MovieIndexer.sanitize_imdb_title('The King is Dead!') == 'the king is dead'


def test_get_movie_artwork_url() -> None:
    # Same test as in test_movie.py but now with real data from movie indexer
    url = 'https://m.media-amazon.com/images/M/MV5BMjI1MTcwODk0MV5BMl5BanBnXkFtZTgwMTgwMDM5NTE@._V1_.jpg'
    url_thumb = 'https://m.media-amazon.com/images/M/MV5BMjI1MTcwODk0MV5BMl5BanBnXkFtZTgwMTgwMDM5NTE@._V1_SX300.jpg'
    indexer = MovieIndexer()
    movie_details = indexer.get_movie_details('tt1798684')
    assert movie_details.get_artwork_url('poster', thumbnail=False) == url
    assert movie_details.get_artwork_url('poster', thumbnail=True) == url_thumb
    assert movie_details.get_artwork_url('banner', thumbnail=False) is None  # banner not available
    assert movie_details.get_artwork_url('banner', thumbnail=True) is None  # banner not available
