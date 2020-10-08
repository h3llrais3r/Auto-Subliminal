# coding=utf-8

import pytest
from tests.server.api.test_api import pickle_api_result

import autosubliminal
from autosubliminal.server.api.schedulers import SchedulersApi
from autosubliminal.server.rest import BadRequest
from autosubliminal.util.common import to_dict


class MyScheduler(object):
    def __init__(self, name):
        self.name = name
        self.process = None
        self.interval = 60
        self.last_run = 1
        self._delay = 0
        self._force_run = False
        self._force_stop = False

    @property
    def next_run(self):
        return self.last_run + self.interval

    def to_dict(self, camelize_keys):
        return to_dict(self, camelize_keys, 'process')


scheduler = MyScheduler('MyScheduler1')

scheduler_json = '{"interval": 60, "lastRun": 1, "name": "MyScheduler1", "nextRun": 61}'

scheduler_json_list = '[' + scheduler_json + ']'


def test_get_schedulers():
    autosubliminal.SCHEDULERS = {'MyScheduler1': MyScheduler('MyScheduler1')}
    assert scheduler_json_list == pickle_api_result(SchedulersApi().get())


def test_get_scheduler():
    autosubliminal.SCHEDULERS = {'MyScheduler1': MyScheduler('MyScheduler1')}
    assert scheduler_json == pickle_api_result(SchedulersApi().get('MyScheduler1'))


def test_get_scheduler_bad_request():
    with pytest.raises(BadRequest):
        SchedulersApi().get('InvalidSchedulerName')
