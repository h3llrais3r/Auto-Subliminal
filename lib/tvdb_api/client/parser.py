# coding: utf-8

import json

from six import iteritems, string_types

from tvdb_api.models.series_episodes_summary import SeriesEpisodesSummary
from tvdb_api.models.series_search_result import SeriesSearchResult
from tvdb_api.models.series_search_results import SeriesSearchResults


# Custom parser module (if we want to parse the response ourselves)

def parse_series_episodes_summary(response):
    """Manual parser for SeriesEpisodesSummary.

    Example usage:
    >>> params = {'imdb_id': imdb_id, '_preload_content': False}
    >>> parser.parse_series_episodes_summary(SeriesApi(self.api_client).series_id_episodes_summary_get(**params))
    """
    data = _response_to_json(response)
    # The json object is a dict with a data key which contains a SeriesEpisodesSummary object
    # The result is an object of type SeriesEpisodesSummary
    result = data['data'] if 'data' in data.keys() else None
    return _deserialize_model(result, SeriesEpisodesSummary())


def parse_search_series_results(response, best_result=False):
    """Manual parser for SeriesSearchResults.

    Example usage:
    >>> params = {'imdb_id': imdb_id, '_preload_content': False}
    >>> parser.parse_search_series(SearchApi(self.api_client).search_series_get(**params))
    """
    data = _response_to_json(response)
    # The json object is a dict with a data key which contains a list of SeriesSearchResult
    # The result is an object of type SeriesSearchResults
    search_results = data['data'] if 'data' in data.keys() else None
    if search_results and best_result:
        return SeriesSearchResults([_deserialize_model(search_results[0], SeriesSearchResult())])
    else:
        return SeriesSearchResults([_deserialize_model(result, SeriesSearchResult()) for result in search_results])


def _response_to_json(response):
    # urllib3 always returns byte responses, so decode if needed because json needs string type
    return json.loads(response.data) if isinstance(response.data, string_types) else json.loads(
        response.data.decode('utf-8'))


def _deserialize_model(data, instance):
    if not instance.swagger_types:
        return data
    for attr, attr_type in iteritems(instance.swagger_types):
        if data is not None and instance.attribute_map[attr] in data and isinstance(data, (list, dict)):
            value = data[instance.attribute_map[attr]]
            setattr(instance, attr, value)
    return instance
