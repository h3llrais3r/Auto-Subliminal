# coding=utf-8

import logging
import os
import tempfile

from pytest import MonkeyPatch

import autosubliminal
from autosubliminal.core.logger import (
    _LogFilter,
    _LogFormatter,
    count_backup_logfiles,
    get_log_lines,
    get_logfile,
    initialize,
    update_settings,
)


def _mock_settings(monkeypatch: MonkeyPatch) -> None:
    log_file = os.path.abspath(os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources', 'test.log'))
    monkeypatch.setattr('autosubliminal.LOGLEVEL', 'INFO')
    monkeypatch.setattr('autosubliminal.LOGHTTPACCESS', True)
    monkeypatch.setattr('autosubliminal.LOGEXTERNALLIBS', True)
    monkeypatch.setattr('autosubliminal.LOGDETAILEDFORMAT', True)
    monkeypatch.setattr('autosubliminal.LOGFILE', log_file)
    monkeypatch.setattr('autosubliminal.LOGSIZE', 1)
    monkeypatch.setattr('autosubliminal.LOGNUM', 1)
    monkeypatch.setattr('autosubliminal.DAEMON', False)
    monkeypatch.setattr('autosubliminal.LOGLEVELCONSOLE', 'ERROR')


def test_initialize(monkeypatch: MonkeyPatch) -> None:
    _mock_settings(monkeypatch)
    initialize()
    log = logging.getLogger()
    assert log.level == logging.INFO
    assert len(log.handlers) == 2
    file_handler = log.handlers[0]
    assert file_handler.level == logging.INFO
    assert len(file_handler.filters) == 1
    file_filter = file_handler.filters[0]
    assert isinstance(file_filter, _LogFilter)
    assert file_filter.log_http_access
    assert file_filter.log_external_libs
    assert file_handler.formatter is not None
    assert isinstance(file_handler.formatter, _LogFormatter)
    assert file_handler.formatter.detailed_format
    console_handler = log.handlers[1]
    assert console_handler.level == logging.ERROR


def test_update_settings(monkeypatch: MonkeyPatch) -> None:
    _mock_settings(monkeypatch)
    initialize()
    monkeypatch.setattr('autosubliminal.LOGLEVEL', 'DEBUG')
    monkeypatch.setattr('autosubliminal.LOGHTTPACCESS', False)
    monkeypatch.setattr('autosubliminal.LOGEXTERNALLIBS', False)
    monkeypatch.setattr('autosubliminal.LOGLEVELCONSOLE', 'WARNING')
    update_settings()
    log = logging.getLogger()
    file_handler = log.handlers[0]
    assert file_handler.level == logging.DEBUG
    file_filter = file_handler.filters[0]
    assert isinstance(file_filter, _LogFilter)
    assert not file_filter.log_http_access
    assert not file_filter.log_external_libs
    console_handler = log.handlers[1]
    assert console_handler.level == logging.WARNING


def test_get_log_lines(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.LOGREVERSED', False)
    try:
        line1 = '2016-06-06 20:32:15,509 INFO     [MainThread :: __main__] Running application with PID: 9944'
        line2 = 'traceback'
        line3 = '2016-06-06 20:32:15,509 DEBUG    [MainThread :: __main__] System encoding: cp1252'
        line4 = '2016-06-06 20:32:15,509 DEBUG    [MainThread :: __main__] Config version: 10'
        lines = [line1, line2, line3, line4]
        lines_info = [line1, line2]
        lines_debug = [line3, line4]
        lines_debug_reversed = list(reversed(lines_debug))
        fd, autosubliminal.LOGFILE = tempfile.mkstemp(text=True)
        file = open(autosubliminal.LOGFILE, 'w')
        file.write(line1 + '\n' + line2 + '\n' + line3 + '\n' + line4 + '\n')
        file.close()
        os.close(fd)
        assert get_log_lines() == lines
        assert get_log_lines(loglevel='all') == lines
        assert get_log_lines(loglevel='debug') == lines_debug
        assert get_log_lines(loglevel='info') == lines_info
        assert get_log_lines(loglevel='error') == []
        assert get_log_lines(loglevel='all', lines=10) == lines
        assert get_log_lines(loglevel='all', lines=2) == lines_debug  # last 2 lines
        monkeypatch.setattr('autosubliminal.LOGREVERSED', True)
        assert get_log_lines(loglevel='debug') == lines_debug_reversed
    finally:
        os.remove(autosubliminal.LOGFILE)


def test_get_logfile() -> None:
    try:
        fd, autosubliminal.LOGFILE = tempfile.mkstemp(text=True)
        os.close(fd)
        assert get_logfile() == autosubliminal.LOGFILE
        assert get_logfile(lognum=1) is None
    finally:
        os.remove(autosubliminal.LOGFILE)


def test_count_backup_logfiles() -> None:
    autosubliminal.LOGFILE = 'path/to/autosubliminal.log'
    assert count_backup_logfiles() == 0
