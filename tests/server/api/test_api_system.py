# coding=utf-8

from typing import Any, Callable, Dict, cast

import pytest
from pytest import MonkeyPatch
from pytest_mock import MockerFixture
from subliminal.extensions import RegistrableExtensionManager

import autosubliminal
from autosubliminal.core.pathinfo import PathInfo
from autosubliminal.core.scheduler import Scheduler
from autosubliminal.server.api.system import SystemApi
from autosubliminal.server.rest import BadRequest
from autosubliminal.util.common import to_dict
from tests.server.api.test_api import pickle_api_result


class MyScheduler(object):
    def __init__(self, name: str) -> None:
        self.name = name
        self.process = None
        self.interval = 60
        self.last_run = 1
        self._delay = 0
        self._force_run = False
        self._force_stop = False

    @property
    def next_run(self) -> int:
        return self.last_run + self.interval

    @property
    def running(self) -> bool:
        return False

    def to_dict(self, key_fn: Callable) -> Dict[str, Any]:
        return to_dict(self, key_fn, 'process')


episode_scores_json = '{"codec": 2, "default": 0, "episode": 30, "hash": 359, "hearingImpaired": 1, "max": 360, ' \
                      '"min": 0, "quality": 2, "releaseGroup": 15, "season": 30, "source": 7, "title": 180, "year": 90}'

movie_scores_json = '{"codec": 2, "default": 0, "hash": 119, "hearingImpaired": 1, "max": 120, "min": 0, ' \
                    '"quality": 2, "releaseGroup": 15, "source": 7, "title": 60, "year": 30}'

settings_json = '{"antiCaptchaProviders": [], ' \
                '"appProcessId": 1, ' \
                '"appVersion": "' + autosubliminal.version.RELEASE_VERSION + '", ' \
                '"checkSub": "SubChecker", ' \
                '"checkSubDeadlineDefault": 1, '\
                '"checkSubDeltaDefault": 1, '\
                '"checkSubIntervalDefault": 6, '\
                '"checkVersion": "VersionChecker", ' \
                '"checkVersionIntervalDefault": 1, ' \
                '"dereferUrl": "https://dereferer.me/?", ' \
                '"developerMode": true, ' \
                '"episodeScores": ' + episode_scores_json + ', ' \
                '"imdbUrl": "http://www.imdb.com/title/", ' \
                '"languages": [{"code": "nl", "name": "Dutch"}], ' \
                '"libraryEditMode": false, ' \
                '"libraryMode": false, ' \
                '"logReversed": false, ' \
                '"manualRefineVideo": false, ' \
                '"manualSubSync": false, ' \
                '"movieScores": ' + movie_scores_json + ', ' \
                '"pathSeparator": "/", ' \
                '"preferHearingImpaired": false, ' \
                '"scanDisk": "DiskScanner", ' \
                '"scanDiskIntervalDefault": 1, ' \
                '"scanLibrary": "LibraryScanner", ' \
                '"scanLibraryIntervalDefault": 24, ' \
                '"subliminalProviders": [], ' \
                '"timestampFormat": "%d-%m-%Y %H:%M:%S", ' \
                '"tvdbUrl": "http://thetvdb.com/?tab=series&id=", ' \
                '"webRoot": "mywebroot"}'

scheduler = MyScheduler('MyScheduler1')

scheduler_json = '{"interval": 60, "lastRun": 1, "name": "MyScheduler1", "nextRun": 61, "running": false}'

scheduler_json_list = '[' + scheduler_json + ']'

pathinfo_1 = PathInfo('pathinfo1', 'path1', 1024, 2048)
pathinfo_2 = PathInfo('pathinfo2', 'path2', 1024, 1024)

pathinfo_1_json = '{"freeBytes": 1024, "freePercentage": 50.0, "freeSpace": "1.0 kB", "name": "pathinfo1", ' \
                  '"path": "path1", "totalBytes": 2048, "totalSpace": "2.0 kB"}'
pathinfo_2_json = '{"freeBytes": 1024, "freePercentage": 100.0, "freeSpace": "1.0 kB", "name": "pathinfo2", ' \
                  '"path": "path2", "totalBytes": 1024, "totalSpace": "1.0 kB"}'

pathinfo_json_list = '[' + pathinfo_1_json + ', ' + pathinfo_2_json + ']'


def test_get_settings(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.PID', 1)
    monkeypatch.setattr('autosubliminal.DEVELOPER', True)
    monkeypatch.setattr('autosubliminal.WEBROOT', 'mywebroot')
    monkeypatch.setattr('autosubliminal.SCANDISK', MyScheduler('DiskScanner'))
    monkeypatch.setattr('autosubliminal.SCANDISKINTERVALDEFAULT', 1)
    monkeypatch.setattr('autosubliminal.SCANLIBRARY', MyScheduler('LibraryScanner'))
    monkeypatch.setattr('autosubliminal.SCANLIBRARYINTERVALDEFAULT', 24)
    monkeypatch.setattr('autosubliminal.CHECKSUB', MyScheduler('SubChecker'))
    monkeypatch.setattr('autosubliminal.CHECKSUBINTERVALDEFAULT', 6)
    monkeypatch.setattr('autosubliminal.CHECKSUBDEADLINEDEFAULT', 1)
    monkeypatch.setattr('autosubliminal.CHECKSUBDELTADEFAULT', 1)
    monkeypatch.setattr('autosubliminal.CHECKVERSION', MyScheduler('VersionChecker'))
    monkeypatch.setattr('autosubliminal.CHECKVERSIONINTERVALDEFAULT', 1)
    monkeypatch.setattr('autosubliminal.LIBRARYMODE', False)
    monkeypatch.setattr('autosubliminal.LIBRARYEDITMODE', False)
    monkeypatch.setattr('autosubliminal.LOGREVERSED', False)
    monkeypatch.setattr('autosubliminal.MANUALREFINEVIDEO', False)
    monkeypatch.setattr('autosubliminal.DEREFERURL', 'https://dereferer.me/?')
    monkeypatch.setattr('autosubliminal.TVDBURL', 'http://thetvdb.com/?tab=series&id=')
    monkeypatch.setattr('autosubliminal.IMDBURL', 'http://www.imdb.com/title/')
    monkeypatch.setattr('autosubliminal.TIMESTAMPFORMAT', '%d-%m-%Y %H:%M:%S')
    monkeypatch.setattr('autosubliminal.server.api.system.os.path.sep', '/')
    mocker.patch('autosubliminal.server.api.system.get_subtitle_languages',
                 return_value=[{'code': 'nl', 'name': 'Dutch'}])
    monkeypatch.setattr('autosubliminal.SUBLIMINALPROVIDERMANAGER',
                        RegistrableExtensionManager('subliminal.providers.dummy', []))
    mocker.patch('autosubliminal.server.api.system.ANTI_CAPTCHA_PROVIDERS', [])
    monkeypatch.setattr('autosubliminal.SHOWMINMATCHSCOREDEFAULT', 0)
    monkeypatch.setattr('autosubliminal.SHOWMINMATCHSCORE', 0)
    monkeypatch.setattr('autosubliminal.MOVIEMINMATCHSCOREDEFAULT', 0)
    monkeypatch.setattr('autosubliminal.MOVIEMINMATCHSCORE', 0)
    monkeypatch.setattr('autosubliminal.PREFERHEARINGIMPAIRED', False)
    monkeypatch.setattr('autosubliminal.MANUALSUBSYNC', False)

    print(settings_json)
    print(pickle_api_result(SystemApi().settings.get()))
    assert settings_json == pickle_api_result(SystemApi().settings.get())


def test_get_schedulers() -> None:
    autosubliminal.SCHEDULERS = {'MyScheduler1': cast(Scheduler, MyScheduler('MyScheduler1'))}
    assert scheduler_json_list == pickle_api_result(SystemApi().schedulers.get())


def test_get_scheduler() -> None:
    autosubliminal.SCHEDULERS = {'MyScheduler1': cast(Scheduler, MyScheduler('MyScheduler1'))}
    assert scheduler_json == pickle_api_result(SystemApi().schedulers.get('MyScheduler1'))


def test_get_scheduler_bad_request() -> None:
    with pytest.raises(BadRequest):
        SystemApi().schedulers.get('InvalidSchedulerName')


def test_get_paths(mocker: MockerFixture) -> None:
    autosubliminal.PATH = 'path1'
    autosubliminal.VIDEOPATHS = ['path2']
    mocker.patch.object(PathInfo, 'get_path_info', side_effect=[pathinfo_1, pathinfo_2])
    assert pathinfo_json_list == pickle_api_result(SystemApi().paths.get())
