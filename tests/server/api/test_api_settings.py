# coding=utf-8

from autosubliminal.server.api.settings import SettingsApi

from tests.server.api.test_api import pickle_api_result

settings_json = '{"imdbUrl": "http://www.dereferer.org/?http://www.imdb.com/title/", ' \
                '"timestampFormat": "%d-%m-%Y %H:%M:%S", ' \
                '"tvdbUrl": "http://www.dereferer.org/?http://thetvdb.com/?tab=series&id="}'


def test_get_settings(monkeypatch):
    monkeypatch.setattr('autosubliminal.DEREFERURL', 'http://www.dereferer.org/?')
    monkeypatch.setattr('autosubliminal.TVDBURL', 'http://thetvdb.com/?tab=series&id=')
    monkeypatch.setattr('autosubliminal.IMDBURL', 'http://www.imdb.com/title/')
    monkeypatch.setattr('autosubliminal.TIMESTAMPFORMAT', '%d-%m-%Y %H:%M:%S')
    assert settings_json == pickle_api_result(SettingsApi().get())
