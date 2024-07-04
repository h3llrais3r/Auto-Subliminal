# coding=utf-8

import autosubliminal
from autosubliminal.util.mapping import (
    get_addic7ed_show_name_mapping,
    get_alternative_movie_name_mapping,
    get_alternative_show_name_mapping,
    get_movie_name_mapping,
    get_show_name_mapping,
)


def test_get_show_name_mapping() -> None:
    autosubliminal.SHOWNAMEMAPPING = {'show1': '111111', 'show2': '222222'}
    assert get_show_name_mapping('SHOW1') == 111111
    assert get_show_name_mapping('Show2') == 222222
    assert get_show_name_mapping('show3') is None


def test_get_addic7ed_show_name_mapping() -> None:
    autosubliminal.ADDIC7EDSHOWNAMEMAPPING = {'show1': '111111', 'show2': '222222'}
    assert get_addic7ed_show_name_mapping('SHOW1') == 111111
    assert get_addic7ed_show_name_mapping('Show2') == 222222
    assert get_addic7ed_show_name_mapping('show3') is None


def test_get_alternative_show_name_mapping() -> None:
    autosubliminal.ALTERNATIVESHOWNAMEMAPPING = {'show1': 'show1a, show1b', 'show2': 'show2a'}
    assert get_alternative_show_name_mapping('SHOW1') == ['show1a', 'show1b']
    assert get_alternative_show_name_mapping('Show2') == ['show2a']
    assert get_alternative_show_name_mapping('show3') is None


def test_movie_name_mapping() -> None:
    autosubliminal.MOVIENAMEMAPPING = {'movie1': 'tt111111', 'movie2': 'tt222222', 'movie3 (2016)': 'tt333333'}
    assert get_movie_name_mapping('MOVIE1', None) == 'tt111111'
    assert get_movie_name_mapping('Movie2', None) == 'tt222222'
    assert get_movie_name_mapping('movie3', None) is None
    assert get_movie_name_mapping('movie3', 2016) == 'tt333333'
    assert get_movie_name_mapping('movie4', None) is None


def test_get_alternative_movie_name_mapping() -> None:
    autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = {
        'movie1': 'movie1a, movie1b',
        'movie2': 'movie2a',
        'movie3 (2016)': 'movie3a',
    }
    assert get_alternative_movie_name_mapping('MOVIE1', None) == ['movie1a', 'movie1b']
    assert get_alternative_movie_name_mapping('Movie2', None) == ['movie2a']
    assert get_alternative_movie_name_mapping('movie3', None) is None
    assert get_alternative_movie_name_mapping('movie3', 2016) == ['movie3a']
    assert get_alternative_movie_name_mapping('movie4', None) is None
