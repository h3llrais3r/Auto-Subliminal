from autosubliminal.core.movie import MovieDetails


def test_get_movie_artwork_url() -> None:
    # Same test as in test_movie.py but now with real data from movie indexer
    url = 'https://m.media-amazon.com/images/M/MV5BMjI1MTcwODk0MV5BMl5BanBnXkFtZTgwMTgwMDM5NTE@._V1_.jpg'
    url_thumb = 'https://m.media-amazon.com/images/M/MV5BMjI1MTcwODk0MV5BMl5BanBnXkFtZTgwMTgwMDM5NTE@._V1_SX300.jpg'
    movie_details = MovieDetails(
        path='/path/to/movie', imdb_id='tt1798684', title='Southpaw', year=2015, overview='overview', poster=url
    )
    assert movie_details.get_artwork_url('poster', thumbnail=False) == url
    assert movie_details.get_artwork_url('poster', thumbnail=True) == url_thumb
    assert movie_details.get_artwork_url('banner', thumbnail=False) is None
    assert movie_details.get_artwork_url('banner', thumbnail=True) is None
