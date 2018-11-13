# coding=utf-8

import time

import autosubliminal
from autosubliminal.core.scheduler import ScheduledProcess, Scheduler

autosubliminal.SCHEDULERS = {}


class MyScheduledProcess(ScheduledProcess):
    def run(self, force_run):
        pass


def test_scheduler(mocker):
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        scheduler_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1, True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert scheduler_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
    finally:
        if scheduler:
            scheduler.stop()
            assert scheduler.running is False


def test_scheduler_force_run(mocker):
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        scheduler_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 10, False)
        assert scheduler.next_run == 0
        scheduler.run(delay=1)
        time.sleep(2)
        assert scheduler_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
    finally:
        if scheduler:
            scheduler.stop()
            assert scheduler.running is False


def test_duplicate_scheduler(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.SCHEDULERS', {'MyScheduledProcess': None})
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        scheduler_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 1, True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert 'MyScheduledProcess-1' in autosubliminal.SCHEDULERS
        assert scheduler_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
    finally:
        if scheduler:
            scheduler.stop()
            assert scheduler.running is False


def test_triple_scheduler(monkeypatch, mocker):
    monkeypatch.setattr('autosubliminal.SCHEDULERS', {'MyScheduledProcess': None, 'MyScheduledProcess-1': None})
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        scheduler_mock = mocker.patch.object(MyScheduledProcess, 'run')
        scheduler = Scheduler('MyScheduledProcess-1', MyScheduledProcess(), 1, True)
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert 'MyScheduledProcess-2' in autosubliminal.SCHEDULERS
        assert scheduler_mock.called
        assert scheduler.last_run > 0
        assert scheduler.next_run > 0
    finally:
        if scheduler:
            scheduler.stop()
            assert scheduler.running is False


def test_scheduler_run_process_exception(mocker):
    scheduler = None
    try:  # Use try/finally block to make sure that the thread is stopped
        mocker.patch.object(MyScheduledProcess, 'run', side_effect=Exception)
        os_mock = mocker.patch('os._exit')
        scheduler = Scheduler('MyScheduledProcess', MyScheduledProcess(), 10, False)
        scheduler.last_run = time.time()
        scheduler.run()
        time.sleep(1)
        assert os_mock.called
    finally:
        if scheduler:
            scheduler.stop()
            assert scheduler.running is False
