import autosubliminal
from autosubliminal.indexer import MovieIndexer, ShowIndexer

autosubliminal.TVDBAPIKEY = '76F2D5362F45C5EC'
autosubliminal.SHOWNAMEMAPPINGUPPER = {}
autosubliminal.MOVIENAMEMAPPINGUPPER = {}
autosubliminal.USERSHOWNAMEMAPPINGUPPER = {}
autosubliminal.USERMOVIENAMEMAPPINGUPPER = {}


def test_get_tvdb_id():
    indexer = ShowIndexer()
    assert indexer.get_tvdb_id('The Big Bang Theory', force_search=True, store_id=False) == 80379
    assert indexer.get_tvdb_id('The Americans', year=2013, force_search=True, store_id=False) == 261690


def test_get_imdb_id():
    indexer = MovieIndexer()
    assert indexer.get_imdb_id_and_year('Southpaw', 2015, force_search=True, store_id=False) == ('1798684', 2015)
    assert indexer.get_imdb_id_and_year('Southpaw', force_search=True, store_id=False) == ('1798684', 2015)
