# coding=utf-8

import jsonpickle

from autosubliminal.server.api.settings import SettingsApi

settings_json = '{"imdbUrl": "http://www.dereferer.org/?http://www.imdb.com/title/", ' \
                '"timestampFormat": "%d-%m-%Y %H:%M:%S", ' \
                '"tvdbUrl": "http://www.dereferer.org/?http://thetvdb.com/?tab=series&id="}'


def test_get_settings(monkeypatch):
    monkeypatch.setattr('autosubliminal.DEREFERURL', 'http://www.dereferer.org/?')
    monkeypatch.setattr('autosubliminal.TVDBURL', 'http://thetvdb.com/?tab=series&id=')
    monkeypatch.setattr('autosubliminal.IMDBURL', 'http://www.imdb.com/title/')
    monkeypatch.setattr('autosubliminal.TIMESTAMPFORMAT', '%d-%m-%Y %H:%M:%S')
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(SettingsApi().get())
    assert settings_json == json_out
