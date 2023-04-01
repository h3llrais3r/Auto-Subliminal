# coding=utf-8

import autosubliminal
from autosubliminal.util.skip import skip_movie, skip_show


def test_skip_show() -> None:
    autosubliminal.SKIPSHOW = {'show1': '0', 'show2': '1', 'show3': '0,1', 'show4': '00'}
    assert skip_show('SHOW1', 0)  # 0 means skip specials
    assert not skip_show('SHOW1', 1)
    assert not skip_show('Show2', 0)
    assert skip_show('Show2', 1)
    assert skip_show('show3', 0)  # 00 means skip all, so also 0 is skipped
    assert skip_show('show3', 1)  # 00 means skip all, so also 1 is skipped
    assert skip_show('show4', 0)
    assert skip_show('show4', 1)
    assert not skip_show('show5', 0)
    assert not skip_show('show5', 1)


def test_skip_movie() -> None:
    autosubliminal.SKIPMOVIE = {'movie1': '00', 'movie2 (2016)': '00'}
    assert skip_movie('MOVIE1', None)
    assert not skip_movie('MOVIE1', 2016)
    assert not skip_movie('Movie2', None)
    assert skip_movie('Movie2', 2016)
    assert not skip_movie('movie3', None)
    assert not skip_movie('movie3', 2016)
