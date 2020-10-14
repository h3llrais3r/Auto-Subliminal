# coding=utf-8

from tests.server.api.test_api import pickle_api_result

import autosubliminal
from autosubliminal.core.diskusage import DiskUsage
from autosubliminal.server.api.settings import SettingsApi

diskusage_1 = DiskUsage('diskusage1', 'path1', 1024, 2048)
diskusage_2 = DiskUsage('diskusage2', 'path2', 1024, 1024)

diskusage_1_json = '{"freeBytes": 1024, "freePercentage": 50.0, "freeSpace": "1.0 kB", "name": "diskusage1", ' \
                   '"path": "path1", "totalBytes": 2048, "totalSpace": "2.0 kB"}'
diskusage_2_json = '{"freeBytes": 1024, "freePercentage": 100.0, "freeSpace": "1.0 kB", "name": "diskusage2", ' \
                   '"path": "path2", "totalBytes": 1024, "totalSpace": "1.0 kB"}'

diskusage_json_list = '[' + diskusage_1_json + ', ' + diskusage_2_json + ']'

settings_json = '{"checkSub": "SubChecker", ' \
                '"checkVersion": "VersionChecker", ' \
                '"developerMode": true, ' \
                '"imdbUrl": "http://www.dereferer.org/?http://www.imdb.com/title/", ' \
                '"languages": [{"code": "nl", "name": "Dutch"}], ' \
                '"logReversed": false, ' \
                '"pathSeparator": "/", ' \
                '"scanDisk": "DiskScanner", ' \
                '"scanLibrary": "LibraryScanner", ' \
                '"timestampFormat": "%d-%m-%Y %H:%M:%S", ' \
                '"tvdbUrl": "http://www.dereferer.org/?http://thetvdb.com/?tab=series&id=", ' \
                '"webRoot": "mywebroot"}'


class MyScheduler(object):
    def __init__(self, name):
        self.name = name


def test_get_diskusage(mocker):
    autosubliminal.PATH = 'path1'
    autosubliminal.VIDEOPATHS = ['path2']
    mocker.patch.object(DiskUsage, 'calculate_disk_usage', side_effect=[diskusage_1, diskusage_2])
    assert diskusage_json_list == pickle_api_result(SettingsApi().diskusage.get())


def test_get_frontend_settings(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.DEVELOPER', True)
    monkeypatch.setattr('autosubliminal.LOGREVERSED', False)
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
