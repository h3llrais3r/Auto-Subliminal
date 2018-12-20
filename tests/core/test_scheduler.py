# coding=utf-8

import time

import autosubliminal
from autosubliminal.core.scheduler import ScheduledProcess, Scheduler

autosubliminal.SCHEDULERS = {}
autosubliminal.WEBSOCKETMESSAGEQUEUE = []


class MyScheduledProcess(ScheduledProcess):
    def run(self, force_run):
        pass


def test_scheduler(mocker):
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1, initial_run=True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_scheduler_force_run(mocker):
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 10, initial_run=False)
        scheduler.run(delay=1)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_duplicate_scheduler(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.SCHEDULERS', {'MyScheduledProcess': None})
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1, initial_run=True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert 'MyScheduledProcess-1' in autosubliminal.SCHEDULERS
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_triple_scheduler(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.SCHEDULERS', {'MyScheduledProcess': None, 'MyScheduledProcess-1': None})
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess-1', MyScheduledProcess(), 1, initial_run=True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert 'MyScheduledProcess-2' in autosubliminal.SCHEDULERS
        assert process_run_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
        assert scheduler.active
    finally:
        _assert_scheduler(scheduler)


def test_scheduler_run_process_exception(mocker):
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        mocker.patch.object(MyScheduledProcess, 'run', side_effect=Exception)
        os_mock = mocker.patch('os._exit')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 10, initial_run=False)
        scheduler.last_run = time.time()
        scheduler.run()
        time.sleep(3)  # Sleep to be sure that the run exception been executed at least once
        assert os_mock.called
    finally:
        _assert_scheduler(scheduler)


def test_scheduler_activate(mocker):
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1, active=False, initial_run=True)
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


def test_scheduler_deactivate(mocker):
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        process_run_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1, initial_run=True)
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


def _assert_scheduler(scheduler):
    if scheduler:
        scheduler.stop()
        assert not scheduler.running
        assert not scheduler.alive
