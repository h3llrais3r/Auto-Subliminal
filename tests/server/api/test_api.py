# coding=utf-8

import jsonpickle

from autosubliminal.server.api import Api
from autosubliminal.server.api.items import ItemsApi


def test_api():
    api = Api()
    assert api.allowed_methods == ('GET',)
    assert api.get() == {'api': 'Welcome to the Auto-Subliminal REST api'}
    assert isinstance(api.items, ItemsApi)


def pickle_api_result(result):
    # Utility method to pickle results like the json_out_handler
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    return jsonpickle.encode(result, unpicklable=False)
