# coding=utf-8

from autosubliminal.parsers import guessit


def test_guessit_part_as_episode_number():
    guess = guessit('Buried.Knights.Templar.and.the.Holy.Grail.2018.Part1.720p.WEB.h264-CookieMonster.mkv',
                    {'type': 'episode'})
    assert guess is not None
    assert guess['type'] == 'episode'
    assert guess['title'] == 'Buried Knights Templar and the Holy Grail'
    assert guess['season'] == 1
    assert guess['episode'] == 1
    assert guess['year'] == 2018
    assert guess['source'] == 'Web'
    assert guess['screen_size'] == '720p'
    assert guess['video_codec'] == 'H.264'
    assert guess['release_group'] == 'CookieMonster'


def test_guessit_part_as_movie_title():
    guess = guessit('The.Hunger.Games.Mockingjay.Part.2.2015.1080p.BluRay.x264-SPARKS.mkv')
    assert guess is not None
    assert guess['type'] == 'movie'
    assert guess['title'] == 'The Hunger Games Mockingjay Part 2'
    assert guess['year'] == 2015
    assert guess['source'] == 'Blu-ray'
    assert guess['screen_size'] == '1080p'
    assert guess['video_codec'] == 'H.264'
    assert guess['release_group'] == 'SPARKS'
