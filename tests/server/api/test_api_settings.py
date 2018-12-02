# coding=utf-8

import jsonpickle

from autosubliminal.server.api.settings import SettingsApi

settings_json = '{"timestampFormat": "%d-%m-%Y %H:%M:%S"}'


def test_get_settings():
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(SettingsApi().get())
    assert settings_json == json_out
