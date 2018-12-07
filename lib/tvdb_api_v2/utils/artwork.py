# coding=utf-8

BASE_ARTWORK_URL = "https://www.thetvdb.com"


def get_artwork_url(artwork_name):
    """Get the actual artwork url for download.

    :param artwork_name: The artwork name
        This can be taken from:
            - The 'file_name' property in a SeriesImageQueryResult object from the get_series_images(...)
            - The 'thumbnail' property in a SeriesImageQueryResult object from the get_series_images(...)
            - the 'banner' property in a Series object from the SeriesData object from the get_series(...)
    :type artwork_name: str
    :return: The full artwork url
    :rtype: str
    """
    return '{base_url}/banners/{artwork_name}'.format(base_url=BASE_ARTWORK_URL, artwork_name=artwork_name)
