# coding: utf-8

import json

from six import iteritems

from tvdb_api_v2.models.series_search_result import SeriesSearchResult
from tvdb_api_v2.models.series_search_results import SeriesSearchResults


# Custom parser module (if we want to parse the response ourselves)

def parse_search_series_results(response, best_result=False):
    """Manual parser for SeriesSearchResults.

    Example usage:
    >>> params = {'imdb_id': imdb_id, '_preload_content': False}
    >>> result = parser.parse_search_series(SearchApi(self.api_client).search_series_get(**params))
    """
    data = json.loads(response.data)
    # The json object is a dict with a data key which contains a list of SeriesSearchResult
    # The result is an object of type SeriesSearchResults
    search_results = data['data'] if 'data' in data.keys() else None
    if best_result:
        return SeriesSearchResults([_deserialize_model(search_results[0], SeriesSearchResult())])
    else:
        return SeriesSearchResults([_deserialize_model(result, SeriesSearchResult()) for result in search_results])


def _deserialize_model(data, instance):
    if not instance.swagger_types:
        return data
    for attr, attr_type in iteritems(instance.swagger_types):
        if data is not None and instance.attribute_map[attr] in data and isinstance(data, (list, dict)):
            value = data[instance.attribute_map[attr]]
            setattr(instance, attr, value)
    return instance
