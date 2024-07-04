# coding=utf-8

import time
from typing import Any, Callable, Dict, Optional

from pytest import MonkeyPatch
from pytest_mock import MockerFixture

import autosubliminal
from autosubliminal.core.scheduler import ScheduledProcess, Scheduler
from autosubliminal.util.common import camelize, to_dict

autosubliminal.SCHEDULERS = {}
autosubliminal.WEBSOCKETMESSAGEQUEUE = []


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

    def to_dict(self, key_fn: Callable) -> Dict[str, Any]:
        return to_dict(self, key_fn, 'process')


class MyScheduledProcess(ScheduledProcess):
    def run(self, force_run: bool) -> None:
        pass


def test_scheduler(mocker: MockerFixture) -> None:
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1)
        scheduler.start(wait=True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_scheduler_force_run(mocker: MockerFixture) -> None:
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1)
        scheduler.start()
        scheduler.run(delay=1)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_duplicate_scheduler(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.SCHEDULERS', {'MyScheduledProcess': None})
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1)
        scheduler.start(wait=True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert 'MyScheduledProcess-1' in autosubliminal.SCHEDULERS
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_triple_scheduler(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.SCHEDULERS', {'MyScheduledProcess': None, 'MyScheduledProcess-1': None})
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess-1', MyScheduledProcess(), 1)
        scheduler.start(wait=True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert 'MyScheduledProcess-2' in autosubliminal.SCHEDULERS
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_scheduler_run_process_exception(mocker: MockerFixture) -> None:
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        mocker.patch.object(MyScheduledProcess, 'run', side_effect=Exception)
        os_mock = mocker.patch('os._exit')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1)
        scheduler.start()
        scheduler.last_run = time.time()
        scheduler.run()
        time.sleep(3)  # Sleep to be sure that the run exception been executed at least once
        assert os_mock.called
    finally:
        _assert_scheduler(scheduler)


def test_scheduler_activate(mocker: MockerFixture) -> None:
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1, active=False)
        scheduler.start(wait=True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert not process_run_mock.called
        assert scheduler.last_run == 0
        assert scheduler.next_run == 0
        assert not scheduler.active
        scheduler.activate()
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_scheduler_deactivate(mocker: MockerFixture) -> None:
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1)
        scheduler.start(wait=True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
        scheduler.deactivate()
        time.sleep(2)  # Sleep to be sure that the deactivate has the time to execute
        assert scheduler.last_run == 0
        assert scheduler.next_run == 0
        assert not scheduler.active
        assert not scheduler.running
    finally:
        _assert_scheduler(scheduler)


def test_scheduler_to_dict() -> None:
    scheduler = MyScheduler('MyScheduler1')
    scheduler_dict = {'interval': 60, 'lastRun': 1, 'name': 'MyScheduler1', 'nextRun': 61}
    assert scheduler_dict == scheduler.to_dict(camelize)


def _assert_scheduler(scheduler: Optional[Scheduler]) -> None:
    if scheduler:
        scheduler.stop()
        assert not scheduler.running
        assert not scheduler.alive
