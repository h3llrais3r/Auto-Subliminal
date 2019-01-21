# coding=utf-8

from autosubliminal.parsers import guessit


def test_guessit_rename_parts_to_episode_numbers():
    guess = guessit('Buried.Knights.Templar.and.the.Holy.Grail.2018.Season.1.Part1.720p.WEB.h264-CookieMonster.mkv')
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


def test_guessit_append_part_to_movie_title():
    guess = guessit('The.Hunger.Games.Mockingjay.Part.2.2015.1080p.BluRay.x264-SPARKS.mkv')
    assert guess is not None
    assert guess['type'] == 'movie'
    assert guess['title'] == 'The Hunger Games Mockingjay Part 2'
    assert guess['year'] == 2015
    assert guess['source'] == 'Blu-ray'
    assert guess['screen_size'] == '1080p'
    assert guess['video_codec'] == 'H.264'
    assert guess['release_group'] == 'SPARKS'


def test_guessit_append_line_to_movie_title():
    guess = guessit('The.Thin.Red.Line.1998.1080p.BluRay.H264.AAC-RARBG.mkv')
    assert guess is not None
    assert guess['type'] == 'movie'
    assert guess['title'] == 'The Thin Red Line'
    assert guess['year'] == 1998
    assert guess['source'] == 'Blu-ray'
    assert guess['screen_size'] == '1080p'
    assert guess['video_codec'] == 'H.264'
    assert guess['audio_codec'] == 'AAC'
    assert guess['release_group'] == 'RARBG'


def test_guessit_append_us_to_movie_title():
    guess = guessit('Werewolf.The.Beast.Among.Us.2012.1080p.BluRay.x264.DTS-FGT.mkv')
    assert guess is not None
    assert guess['type'] == 'movie'
    assert guess['title'] == 'Werewolf The Beast Among Us'
    assert guess['year'] == 2012
    assert guess['source'] == 'Blu-ray'
    assert guess['screen_size'] == '1080p'
    assert guess['video_codec'] == 'H.264'
    assert guess['audio_codec'] == 'DTS'
    assert guess['release_group'] == 'FGT'


def test_guessit_prepend_xxx_to_movie_title():
    guess = guessit('xXx.Return.of.Xander.Cage.2017.1080p.BluRay.H264.AAC-RARBG.mkv')
    assert guess is not None
    assert guess['type'] == 'movie'
    assert guess['title'] == 'xXx Return of Xander Cage'
    assert guess['year'] == 2017
    assert guess['source'] == 'Blu-ray'
    assert guess['screen_size'] == '1080p'
    assert guess['video_codec'] == 'H.264'
    assert guess['audio_codec'] == 'AAC'
    assert guess['release_group'] == 'RARBG'
