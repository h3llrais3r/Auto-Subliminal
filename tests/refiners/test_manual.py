# coding=utf-8

import os

from subliminal.video import Episode, Movie

from autosubliminal.core.item import WantedItem
from autosubliminal.refiners.manual import refine

resources_dir = os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources')


def test_refine_episode() -> None:
    episode = Episode(name=os.path.join(resources_dir, 'Refine.Episode.mkv'), series='Refine', season=0, episode=0)
    wanted_item = WantedItem(
        type='episode',
        title='Series',
        year=2018,
        season=1,
        episode=[1, 2],
        source='Source',
        quality='Resolution',
        codec='Codec',
        release_group='Group',
    )
    refine(episode, wanted_item)
    assert episode.series == 'Series'
    assert episode.year == 2018
    assert episode.season == 1
    assert episode.episode == 1  # Only first episode is kept when refining
    assert episode.source == 'Source'
    assert episode.resolution == 'Resolution'
    assert episode.video_codec == 'Codec'
    assert episode.release_group == 'Group'


def test_refine_movie() -> None:
    movie = Movie(name=os.path.join(resources_dir, 'Refine.Movie.mkv'), title='Refine')
    wanted_item = WantedItem(
        type='movie',
        title='Title',
        year=2018,
        source='Source',
        quality='Resolution',
        codec='Codec',
        release_group='Group',
    )
    refine(movie, wanted_item)
    assert movie.title == 'Title'
    assert movie.year == 2018
    assert movie.source == 'Source'
    assert movie.resolution == 'Resolution'
    assert movie.video_codec == 'Codec'
    assert movie.release_group == 'Group'


def test_skip_refine() -> None:
    movie = Movie(name=os.path.join(resources_dir, 'Refine.Movie.Not.Exists.mkv'), title='Refine')
    wanted_item = WantedItem(type='movie', title='Title')
    refine(movie, wanted_item)
    assert movie.title == 'Refine'
