# coding=utf-8

import os

from autosubliminal.util.filesystem import one_path_exists


def test_one_path_exists():
    paths = [os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources')]
    assert one_path_exists(paths)
    assert not one_path_exists(['invalid/path'], retry_delay=1)
    assert not one_path_exists([], retry_delay=1)
    assert not one_path_exists(None, retry_delay=1)
