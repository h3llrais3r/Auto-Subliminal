# coding=utf-8

import autosubliminal
from autosubliminal.indexer import MovieIndexer, ShowIndexer

autosubliminal.TVDBAPIKEY = '76F2D5362F45C5EC'
autosubliminal.SHOWNAMEMAPPING = {}
autosubliminal.MOVIENAMEMAPPING = {}


def test_get_tvdb_id():
    indexer = ShowIndexer()
    assert indexer.get_tvdb_id('The Big Bang Theory', force_search=True, store_id=False) == 80379
    assert indexer.get_tvdb_id('The Americans', year=2013, force_search=True, store_id=False) == 261690
    assert indexer.get_tvdb_id('Mr Robot', force_search=True, store_id=False) == 289590


def test_get_imdb_id():
    indexer = MovieIndexer()
    assert indexer.get_imdb_id_and_year('Southpaw', 2015, force_search=True, store_id=False) == ('tt1798684', 2015)
    assert indexer.get_imdb_id_and_year('Southpaw', force_search=True, store_id=False) == ('tt1798684', 2015)
    assert indexer.get_imdb_id_and_year(u'Kyatapirâ', 2010, force_search=True, store_id=False) == ('tt1508290', 2010)


def test_sanitize_imdb_title():
    # See result of http://www.imdb.com/find?q=Aftermath&s=tt&mx=20
    assert MovieIndexer.sanitize_imdb_title('Aftermath (I)') == 'aftermath'
    assert MovieIndexer.sanitize_imdb_title('Aftermath') == 'aftermath'
    assert MovieIndexer.sanitize_imdb_title('(Aftermath)') == 'aftermath'
