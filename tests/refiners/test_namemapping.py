# coding=utf-8

import os

from subliminal.video import Movie, Episode

import autosubliminal
from autosubliminal.refiners.namemapping import refine

resources_dir = os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources')

# Mappings are always stored in sanitized form!
autosubliminal.ALTERNATIVESHOWNAMEMAPPING = {'refine': 'series'}
autosubliminal.SHOWNAMEMAPPING = {'refine': 123456}

autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = {'refine': 'title'}
autosubliminal.MOVIENAMEMAPPING = {'refine': 't123456'}


def test_refine_episode():
    episode = Episode(name=os.path.join(resources_dir, 'Refine.Episode.mkv'), series='Refine', season=0, episode=0)
    refine(episode)
    assert episode.alternative_series == ['series']
    assert episode.series_tvdb_id == 123456


def test_refine_movie():
    movie = Movie(name=os.path.join(resources_dir, 'Refine.Movie.mkv'), title='Refine')
    refine(movie)
    assert movie.alternative_titles == ['title']
    assert movie.imdb_id == 't123456'
    pass
