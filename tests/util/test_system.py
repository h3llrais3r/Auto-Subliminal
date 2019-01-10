# coding=utf-8

from distutils.version import StrictVersion

from autosubliminal.util.system import get_python_location, get_python_version_full, get_python_version_strict

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
