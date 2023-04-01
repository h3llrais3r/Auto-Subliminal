# coding=utf-8

from time import time
from typing import Any, Dict, List

from autosubliminal.parsers.guessit import default_api
from autosubliminal.util.common import connect_url

_base_url = 'https://raw.githubusercontent.com/h3llrais3r/Auto-Subliminal/gh-pages/guessit_exceptions/'
_release_groups_url = _base_url + 'release_groups.txt'
_titles_url = _base_url + 'titles.txt'

# Load guessit exceptions
expected_titles: List[str] = []
try:
    print('INFO: Fetching guessit title exceptions.')
    response = connect_url(_titles_url)
    for line in response.text.splitlines():
        expected_titles.append(line)
except Exception:
    print('ERROR: Cannot fetch guessit title exceptions.')

expected_release_groups: List[str] = []
try:
    print('INFO: Fetching guessit release groups exceptions.')
    response = connect_url(_release_groups_url)
    for line in response.text.splitlines():
        expected_release_groups.append(line)
except Exception:
    print('ERROR: Cannot fetch guessit release group exceptions.')


def guessit(str_value: str, options: Dict[str, Any] = None) -> Dict[str, Any]:
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
    custom_options.update(dict(expected_title=expected_titles, expected_group=expected_release_groups))
    result: Dict[str, Any] = default_api.guessit(str_value, options=custom_options)
    result['parsing_time'] = time() - start_time

    return result
