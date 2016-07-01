import autosubliminal
from autosubliminal.indexer import MovieIndexer, ShowIndexer

autosubliminal.SHOWNAMEMAPPINGUPPER = {}
autosubliminal.MOVIENAMEMAPPINGUPPER = {}
autosubliminal.USERSHOWNAMEMAPPINGUPPER = {}
autosubliminal.USERMOVIENAMEMAPPINGUPPER = {}


def test_get_tvdb_id():
    assert ShowIndexer().get_tvdb_id('The Big Bang Theory', force_search=True, store_id=False) == 80379


def test_get_imdb_id():
    assert MovieIndexer().get_imdb_id_and_year('Southpaw', 2015, force_search=True, store_id=False) == ('1798684', 2015)
    assert MovieIndexer().get_imdb_id_and_year('Southpaw', force_search=True, store_id=False) == ('1798684', 2015)
