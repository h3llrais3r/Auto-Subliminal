# coding=utf-8

import os

import pytest
from pytest import MonkeyPatch

from autosubliminal.util.packaging import get_libraries, get_library_version

libraries_file = os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources', 'test.requirements.txt')


def test_get_libraries(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.util.packaging.REQUIREMENTS_FILE', libraries_file)
    libs = get_libraries()
    assert libs
    assert len(libs) == 4


def test_get_library_version(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.util.packaging.REQUIREMENTS_FILE', libraries_file)
    assert get_library_version('mylib') == '1.0.0'
    assert get_library_version('mylibwithcomment') == '2.0.0'
    assert get_library_version('mylibwithfilter') == '3.0.0'
    assert get_library_version('mylibwithpythonversion') == '4.0.0'


def test_get_library_version_error(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.util.packaging.REQUIREMENTS_FILE', libraries_file)
    with pytest.raises(ValueError):
        get_library_version('unknown')
