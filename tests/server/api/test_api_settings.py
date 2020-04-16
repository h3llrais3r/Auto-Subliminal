# coding=utf-8

from tests.server.api.test_api import pickle_api_result

from autosubliminal.server.api.settings import SettingsApi

settings_json = '{"checkSub": "SubChecker", ' \
                '"checkVersion": "VersionChecker", ' \
                '"developerMode": true, ' \
                '"imdbUrl": "http://www.dereferer.org/?http://www.imdb.com/title/", ' \
                '"languages": [{"code": "nl", "name": "Dutch"}], ' \
                '"pathSeparator": "/", ' \
                '"scanDisk": "DiskScanner", ' \
                '"scanLibrary": "LibraryScanner", ' \
                '"timestampFormat": "%d-%m-%Y %H:%M:%S", ' \
                '"tvdbUrl": "http://www.dereferer.org/?http://thetvdb.com/?tab=series&id=", ' \
                '"webRoot": "mywebroot"}'


class MyScheduler(object):
    def __init__(self, name):
        self.name = name


def test_get_settings(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.DEVELOPER', True)
    monkeypatch.setattr('autosubliminal.WEBROOT', 'mywebroot')
    monkeypatch.setattr('autosubliminal.SCANDISK', MyScheduler('DiskScanner'))
    monkeypatch.setattr('autosubliminal.SCANLIBRARY', MyScheduler('LibraryScanner'))
    monkeypatch.setattr('autosubliminal.CHECKSUB', MyScheduler('SubChecker'))
    monkeypatch.setattr('autosubliminal.CHECKVERSION', MyScheduler('VersionChecker'))
    monkeypatch.setattr('autosubliminal.DEREFERURL', 'http://www.dereferer.org/?')
    monkeypatch.setattr('autosubliminal.TVDBURL', 'http://thetvdb.com/?tab=series&id=')
    monkeypatch.setattr('autosubliminal.IMDBURL', 'http://www.imdb.com/title/')
    monkeypatch.setattr('autosubliminal.TIMESTAMPFORMAT', '%d-%m-%Y %H:%M:%S')
    monkeypatch.setattr('autosubliminal.server.api.settings.os.path.sep', '/')
    mocker.patch('autosubliminal.server.api.settings.get_subtitle_languages',
                 return_value=[{'code': 'nl', 'name': 'Dutch'}])
    assert settings_json == pickle_api_result(SettingsApi().frontend.get())
