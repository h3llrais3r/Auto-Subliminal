# coding=utf-8

import autosubliminal
from autosubliminal.indexer import MovieIndexer, ShowIndexer

autosubliminal.TVDBAPIKEY = '76F2D5362F45C5EC'
autosubliminal.SHOWNAMEMAPPING = {}
autosubliminal.MOVIENAMEMAPPING = {}


def test_get_tvdb_id():
    indexer = ShowIndexer()
    assert indexer.get_tvdb_id(u'The Big Bang Theory', force_search=True, store_id=False) == 80379
    assert indexer.get_tvdb_id(u'The Americans', year=2013, force_search=True, store_id=False) == 261690
    assert indexer.get_tvdb_id(u'Mr Robot', force_search=True, store_id=False) == 289590


def test_get_imdb_id():
    indexer = MovieIndexer()
    assert indexer.get_imdb_id_and_year(u'Southpaw', 2015, force_search=True, store_id=False) == ('tt1798684', 2015)
    assert indexer.get_imdb_id_and_year(u'Southpaw', force_search=True, store_id=False) == ('tt1798684', 2015)
    assert indexer.get_imdb_id_and_year(u'Joyeux Noël', 2005, force_search=True, store_id=False) == ('tt0424205', 2005)


def test_sanitize_imdb_title():
    # See result of http://www.imdb.com/find?q=Aftermath&s=tt&mx=20
    assert MovieIndexer.sanitize_imdb_title(u'Aftermath (I)') == 'aftermath'
    assert MovieIndexer.sanitize_imdb_title(u'Aftermath') == 'aftermath'
    assert MovieIndexer.sanitize_imdb_title(u'(Aftermath)') == 'aftermath'
