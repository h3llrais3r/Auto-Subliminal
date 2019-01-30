# coding=utf-8

from time import time

from autosubliminal.parsers.guessit import default_api

# Expected release groups
expected_groups = [
    'CHD'
]


def guessit(string, options=None):
    """
    Retrieves all matches from string as a dict
    :param string: the filename or release name
    :type string: str
    :param options:
    :type options: str|dict
    :return:
    :rtype:
    """
    start_time = time()
    custom_options = dict(options) if options else dict()
    custom_options.update(dict(expected_group=expected_groups))
    result = default_api.guessit(string, options=custom_options)
    result['parsing_time'] = time() - start_time

    return result
