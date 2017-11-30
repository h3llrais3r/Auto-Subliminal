from tvdb_api_v2.api_client import ApiClient
from tvdb_api_v2.apis.authentication_api import AuthenticationApi
from tvdb_api_v2.apis.episodes_api import EpisodesApi
from tvdb_api_v2.apis.search_api import SearchApi
from tvdb_api_v2.apis.series_api import SeriesApi
from tvdb_api_v2.apis.updates_api import UpdatesApi
from tvdb_api_v2.configuration import Configuration
from tvdb_api_v2.models.auth import Auth
from tvdb_api_v2.rest import ApiException

API_KEY = "9710D6F39C4A2457"
HOST = "https://api.thetvdb.com"
BASE_IMAGE_URL = "https://www.thetvdb.com"


class TvdbClient(object):
    def __init__(self, api_key=API_KEY):
        # Setup configuration
        self.configuration = Configuration()
        self.configuration.host = HOST
        self.configuration.api_key['ApiKey'] = api_key
        self.configuration.api_key_prefix['Authorization'] = 'Bearer'
        # Create client
        self.api_client = ApiClient()

    #####################
    # AuthenticationApi #
    #####################

    def authenticate(self):
        """Authenticate and return the authorization token.

        :return: The authentication token.
        :rtype: str
        """
        token = AuthenticationApi(self.api_client).login_post(Auth(self.configuration.api_key['ApiKey']))
        self.configuration.api_key['Authorization'] = token.token
        return token.token

    def refresh_token(self):
        """Refresh the authorization token.

        :return: The authentication token.
        :rtype: str
        """
        token = AuthenticationApi(self.api_client).refresh_token_get()
        self.configuration.api_key['Authorization'] = token.token
        return token.token

    def clear_token(self):
        """Clear the authorization token."""
        # Use with None otherwise a KeyError is raised
        self.configuration.api_key.pop('Authorization', None)

    #############
    # SearchApi #
    #############

    def search_series_by_name(self, name, language='en'):
        """Search for a series based on it's name.

        :param name: The name of the series
        :type name: str
        :param language: The desired language in which to return the result
        :type language: str
        :return: The series search object
        :rtype: tvdb_api_v2.models.series_search.SeriesSearch
        """
        return SearchApi(self.api_client).search_series_get(name=name, accept_language=language)

    def search_series_by_imdb_id(self, imdb_id, language='en'):
        """Search for a series based on it's imdb id.

        :param imdb_id: The id of the series on imdb
        :type imdb_id: str
        :param language: The desired language in which to return the result
        :type language: str
        :return: The series search data object
        :rtype: tvdb_api_v2.models.series_search_data.SeriesSearchData
        """
        result = SearchApi(self.api_client).search_series_get(imdb_id=imdb_id, accept_language=language)
        # Return the first result (there should be only 1)
        return result.data[0]

    #############
    # SeriesApi #
    #############

    def get_series(self, id, language='en'):
        """Get the details of a series.

        :param id: The id of the series on tvdb
        :type id: long
        :param language: The desired language in which to return the result
        :type language: str
        :return: The series data object
        :rtype: tvdb_api_v2.models.series_data.SeriesData
        """
        return SeriesApi(self.api_client).series_id_get(id, accept_language=language)

    def get_series_episodes(self, id, page=1):
        """Get all the episodes of a series.

        :param id: The id of the series on tvdb
        :type id: long
        :param page: The page of the results to fetch (100 results per page)
        :type page: str
        :return: The series episodes object
        :rtype: tvdb_api_v2.models.series_episodes.SeriesEpisodes
        """
        return SeriesApi(self.api_client).series_id_episodes_get(id, page=page)

    def get_series_episode(self, id, season, episode, language='en'):
        """Get a single episode of a series.

        :param id: The id of the series on tvdb
        :type id: long
        :param season: The season number
        :type season: str
        :param episode: The episode number
        :type episode: str
        :param language: The desired language in which to return the result
        :type language: str
        :return: The series episodes query object
        :rtype: tvdb_api_v2.models.series_episodes_query.SeriesEpisodesQuery
        """
        return SeriesApi(self.api_client).series_id_episodes_query_get(id, aired_season=season, aired_episode=episode,
                                                                       accept_language=language)

    def get_series_episode_by_absolute_number(self, id, absolute_number, language='en'):
        """Get a single episode of a series by it's absolute number.

        :param id: The id of the series on tvdb
        :type id: long
        :param absolute_number: The absolute number
        :type absolute_number: str
        :param language: The desired language in which to return the result
        :type language: str
        :return: The series episodes query object
        :rtype: tvdb_api_v2.models.series_episodes_query.SeriesEpisodesQuery
        """
        return SeriesApi(self.api_client).series_id_episodes_query_get(id, absolute_number=absolute_number,
                                                                       accept_language=language)

    def get_series_images_count(self, id, language='en'):
        """Get the images count (for all image_type values) of a series.

        :param id: The id of the series on tvdb
        :type id: long
        :return: The series images counts object
        :rtype: tvdb_api_v2.models.series_images_counts.SeriesImagesCounts
        """
        return SeriesApi(self.api_client).series_id_images_get(id, accept_language=language)

    def get_series_images(self, id, image_type='poster', language='en'):
        """Get all the images (of the specified image type) of a series.

        :param id: the id of the series on tvdb
        :type id: long
        :param image_type: the image type (possible types are: 'fanart', 'poster', 'season', 'seasonwide', 'series')
        :type image_type: str
        :param language: the desired language in which to return the result
        :type language: str
        :return: The series image query results object
        :rtype: tvdb_api_v2.models.series_image_query_results.SeriesImageQueryResults
        """
        return SeriesApi(self.api_client).series_id_images_query_get(id, key_type=image_type, accept_language=language)

    ###############
    # EpisodesApi #
    ###############

    def get_episode(self, id, language='en'):
        """Get all the details of an episode.

        :param id: the id of the episode on tvdb
        :type id: long
        :param language: the desired language in which to return the result
        :type language: str
        :return: The episode object
        :rtype: tvdb_api_v2.models.episode.Episode
        """
        result = EpisodesApi(self.api_client).episodes_id_get(id, accept_language=language)
        # Get by id will always contain data (or throw error otherwise)
        # Since the api does not actually throw the error, we are doing it ourselves when no id is returned
        if not result.data.id:
            raise ApiException(status=404, reason='Not Found')
        return result.data

    ##############
    # UpdatesApi #
    ##############

    def get_updates(self, from_time, language='en'):
        """Get series updates from a certain point in time (epoch time).

        :param from_time: the time (epoch time) from which to check for updates
        :type from_time: str
        :param language: the desired language in which to return the result
        :type language: str
        :return: the update data object
        :rtype: tvdb_api_v2.models.update_data.UpdateData
        """
        result = UpdatesApi(self.api_client).updated_query_get(from_time, accept_language=language)
        # Since the api does not actually throw the error, we are doing it ourselves when no data is returned
        if not result.data:
            raise ApiException(status=404, reason='Not Found')
        return result


#####################
# Utility functions #
#####################

def get_artwork_url(artwork_file_name):
    """Get the actual artwork url for download.

    :param artwork_file_name: The artwork file name.
        This can be taken from:
            - The 'file_name' property in a SeriesImageQueryResult object from the get_series_images(...)
            - The 'thumbnail' property in a SeriesImageQueryResult object from the get_series_images(...)
            - the 'banner' property in a Series object from the SeriesData object from the get_series(...)
    :type artwork_file_name: str
    :return: The full artwork url.
    :rtype: str
    """
    return '{base_url}/banners/{artwork_file_name}'.format(base_url=BASE_IMAGE_URL, artwork_file_name=artwork_file_name)
