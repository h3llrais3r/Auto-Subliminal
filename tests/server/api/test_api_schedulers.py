# coding=utf-8

import pytest

import jsonpickle

import autosubliminal
from autosubliminal.server.api.schedulers import SchedulersApi
from autosubliminal.server.rest import BadRequest


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


scheduler = MyScheduler('MyScheduler1')

scheduler_json = '{"interval": 60, "last_run": 1, "name": "MyScheduler1", "next_run": 61}'

scheduler_json_list = '[' + scheduler_json + ']'


def test_get_schedulers():
    autosubliminal.SCHEDULERS = {'MyScheduler1': MyScheduler('MyScheduler1')}
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(SchedulersApi().get())
    assert scheduler_json_list == json_out


def test_get_scheduler():
    autosubliminal.SCHEDULERS = {'MyScheduler1': MyScheduler('MyScheduler1')}
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(SchedulersApi().get('MyScheduler1'))
    assert scheduler_json == json_out


def test_get_scheduler_bad_request():
    with pytest.raises(BadRequest):
        SchedulersApi().get('InvalidSchedulerName')
