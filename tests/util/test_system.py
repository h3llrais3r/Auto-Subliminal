# coding=utf-8

import datetime
import os
import tempfile
from pathlib import Path

from pytest import MonkeyPatch
from pytest_mock import MockerFixture

from autosubliminal.util.system import (
    TIMESTAMP_FORMAT,
    get_python_location,
    get_python_version,
    get_python_version_full,
    get_stored_python_version,
    get_stored_venv_creation_time,
    get_venv_creation_time,
    is_python_version_changed,
    store_python_version,
    store_venv_creation_time,
)

python_executable = '/path/to/python/executable/python.exe'
python_version = '3.7.9 (tags/v3.7.9:13c94747c7, Aug 17 2020, 18:58:18) [MSC v.1900 64 bit (AMD64)]'
python_version_info = (3, 7, 9, 'final', 0)


def test_get_python_version_full(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('sys.version', python_version)
    assert get_python_version_full() == python_version


def test_get_python_version(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('sys.version_info', python_version_info)
    assert get_python_version() == '3.7.9'


def test_get_python_location(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('sys.executable', python_executable)
    assert get_python_location() == '/path/to/python/executable'


def test_get_stored_python_version(monkeypatch: MonkeyPatch) -> None:
    path = None
    python_version = get_python_version()
    try:
        fd, path = tempfile.mkstemp(text=True)
        monkeypatch.setattr('autosubliminal.util.system.PYTHON_VERSION_FILE', path)
        store_python_version(python_version)
        os.close(fd)
        assert get_stored_python_version() == python_version
    finally:
        os.remove(path)


def test_is_python_version_changed(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('sys.version_info', python_version_info)
    monkeypatch.setattr('autosubliminal.util.system.PYTHON_VERSION_FILE', 'path/does/not/exist')
    assert is_python_version_changed()
    mocker.patch('autosubliminal.util.system.get_python_version', return_value='3.7.9')
    mocker.patch('autosubliminal.util.system.get_stored_python_version', return_value='3.7.10')
    assert is_python_version_changed()
    mocker.patch('autosubliminal.util.system.get_python_version', return_value='3.7.9')
    mocker.patch('autosubliminal.util.system.get_stored_python_version', return_value='3.7.9')
    assert not is_python_version_changed()


def test_get_venv_creation_time(monkeypatch: MonkeyPatch) -> None:
    path = None
    try:
        fd, path = tempfile.mkstemp(text=True)
        venv_cfg_file = Path(path)
        creation_time = datetime.datetime.fromtimestamp(venv_cfg_file.stat().st_mtime).strftime(TIMESTAMP_FORMAT)
        monkeypatch.setattr('sys.prefix', str(venv_cfg_file.parent))
        monkeypatch.setattr('autosubliminal.util.system.VENV_CFG_FILE', venv_cfg_file.name)
        os.close(fd)
        assert get_venv_creation_time() == creation_time
    finally:
        os.remove(path)


def test_get_stored_venv_creation_time(monkeypatch: MonkeyPatch) -> None:
    path = None
    venv_creation_time = '2021-12-01 00:00:00'
    try:
        fd, path = tempfile.mkstemp(text=True)
        monkeypatch.setattr('autosubliminal.util.system.VENV_CREATION_TIME_FILE', path)
        store_venv_creation_time(venv_creation_time)
        os.close(fd)
        assert get_stored_venv_creation_time() == venv_creation_time
    finally:
        os.remove(path)
