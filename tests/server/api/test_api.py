# coding=utf-8

from autosubliminal.server.api import Api
from autosubliminal.server.api.items import ItemsApi


def test_api():
    api = Api()
    assert api.allowed_methods == ('GET',)
    assert api.get() == {'api': 'Welcome to the Auto-Subliminal REST api'}
    assert isinstance(api.items, ItemsApi)
