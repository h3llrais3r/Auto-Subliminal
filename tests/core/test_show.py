from autosubliminal.core.show import ShowDetails


def test_get_artwork_url() -> None:
    url_poster = 'https://www.thetvdb.com/banners/posters/80379-18.jpg'
    url_poster_thumb = 'https://www.thetvdb.com/banners/_cache/posters/80379-18.jpg'
    url_banner = 'https://www.thetvdb.com/banners/blank/80379.jpg'
    url_banner_thumb = 'https://www.thetvdb.com/banners/_cache/blank/80379.jpg'
    show_details = ShowDetails(
        path='/path/to/show',
        tvdb_id=80379,
        title='The Big Bang Theory',
        year=2007,
        overview='overview',
        poster='posters/80379-18.jpg',
        banner='blank/80379.jpg',
    )
    assert show_details.get_artwork_url('poster', thumbnail=False) == url_poster
    assert show_details.get_artwork_url('poster', thumbnail=True) == url_poster_thumb
    assert show_details.get_artwork_url('banner', thumbnail=False) == url_banner
    assert show_details.get_artwork_url('banner', thumbnail=True) == url_banner_thumb
    assert show_details.get_artwork_url('unknown', thumbnail=False) is None
    assert show_details.get_artwork_url('unknown', thumbnail=True) is None
