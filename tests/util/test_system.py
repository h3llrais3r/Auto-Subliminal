# coding=utf-8

import os
import tempfile
from distutils.version import StrictVersion

from autosubliminal.util.system import get_python_location, get_python_version_full, get_python_version_strict, \
    store_python_version, get_stored_python_version

python_executable = '/path/to/python/executable/python.exe'
python_version = '2.7.15 (v2.7.15:ca079a3ea3, Apr 30 2018, 16:30:26) [MSC v.1500 64 bit (AMD64)]'


def test_get_python_version_full(monkeypatch):
    monkeypatch.setattr('sys.version', python_version)
    assert get_python_version_full() == python_version


def test_get_python_version_strict(monkeypatch):
    monkeypatch.setattr('sys.version', python_version)
    assert get_python_version_strict() == StrictVersion('2.7.15')


def test_get_python_executable(monkeypatch):
    monkeypatch.setattr('sys.executable', python_executable)
    assert get_python_location() == '/path/to/python/executable'


def test_stored_python_version(monkeypatch):
    path = None
    python_version = get_python_version_strict()
    try:
        fd, path = tempfile.mkstemp(text=True)
        monkeypatch.setattr('autosubliminal.util.system.PYTHON_VERSION_FILE', path)
        store_python_version(python_version)
        os.close(fd)
        assert get_stored_python_version() == python_version
    finally:
        os.remove(path)
