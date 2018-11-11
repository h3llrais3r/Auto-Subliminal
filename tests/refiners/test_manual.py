# coding=utf-8

import os

from subliminal.video import Movie, Episode

from autosubliminal.core.item import WantedItem
from autosubliminal.refiners.manual import refine

resources_dir = os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources')


def test_refine_episode():
    episode = Episode(name=os.path.join(resources_dir, 'Refine.Episode.mkv'), series='Refine', season=0, episode=0)
    wanted_item = WantedItem(type='episode', title='Series', year=2018, season=1, episode=1, source='Format',
                             quality='Resolution', codec='Codec', releasegrp='Group')
    refine(episode, wanted_item)
    assert episode.series == 'Series'
    assert episode.year == 2018
    assert episode.season == 1
    assert episode.episode == 1
    assert episode.format == 'Format'
    assert episode.resolution == 'Resolution'
    assert episode.video_codec == 'Codec'
    assert episode.release_group == 'Group'


def test_refine_movie():
    movie = Movie(name=os.path.join(resources_dir, 'Refine.Movie.mkv'), title='Refine')
    wanted_item = WantedItem(type='movie', title='Title', year=2018, source='Format', quality='Resolution',
                             codec='Codec', releasegrp='Group')
    refine(movie, wanted_item)
    assert movie.title == 'Title'
    assert movie.year == 2018
    assert movie.format == 'Format'
    assert movie.resolution == 'Resolution'
    assert movie.video_codec == 'Codec'
    assert movie.release_group == 'Group'
