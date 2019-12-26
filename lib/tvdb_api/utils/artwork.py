# coding=utf-8

BASE_ARTWORK_URL = 'https://www.thetvdb.com'


def get_artwork_url(artwork_name, thumbnail=False):
    """Get the actual artwork url for download.

    Returns the url of the full size artwork or the thumbnail version.
    :param artwork_name: the artwork name
        This can be taken from:
            - The 'file_name' property in a SeriesImageQueryResult object from the get_series_images(...)
            - The 'thumbnail' property in a SeriesImageQueryResult object from the get_series_images(...)
            - the 'banner' property in a Series object from the SeriesData object from the get_series(...)
    :type artwork_name: str
    :param thumbnail: the indication to return the thumbnail version or not
    :type thumbnail: bool
    :return: the full artwork url
    :rtype: str
    """
    if thumbnail and '_cache' not in artwork_name:
        # Thumbnail urls are the same as the normal url's but name is prefixed with '_cache/'
        # Since we can also pass a thumbnail as artwork name, we need to make sure to not prefix it 2 times
        return '{base_url}/banners/_cache/{artwork_name}'.format(base_url=BASE_ARTWORK_URL, artwork_name=artwork_name)

    return '{base_url}/banners/{artwork_name}'.format(base_url=BASE_ARTWORK_URL, artwork_name=artwork_name)
