# coding=utf-8

import os

from autosubliminal.util.filesystem import is_skipped_dir, is_valid_video_file, get_linked_files, one_path_exists


def test_one_path_exists():
    paths = [os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources')]
    assert one_path_exists(paths)
    assert not one_path_exists(['invalid/path'], retry_delay=1)
    assert not one_path_exists([], retry_delay=1)
    assert not one_path_exists(None, retry_delay=1)


def test_is_skipped_dir(monkeypatch):
    monkeypatch.setattr('autosubliminal.SKIPHIDDENDIRS', True)
    assert is_skipped_dir('/path/to/.hidden')
    assert is_skipped_dir('/path/to/_unpack_')
    assert is_skipped_dir('path/to/_failed_')
    assert not is_skipped_dir('/path/to/valid')


def test_is_valid_video_file():
    assert is_valid_video_file('test.mkv')
    assert not is_valid_video_file('test.txt')
    assert not is_valid_video_file('sample_test.mkv')


def test_get_linked_files():
    file_path = os.path.abspath(
        os.path.join(os.path.dirname(__file__), '..', 'resources', 'Southpaw.2015.1080p.BluRay.x264.mkv'))
    subtitle_path = os.path.abspath(
        os.path.join(os.path.dirname(__file__), '..', 'resources', 'Southpaw.2015.1080p.BluRay.x264.srt'))
    linked_files = [{'path': file_path, 'type': 'movie'}, {'path': subtitle_path, 'type': 'subtitle'}]
    assert get_linked_files(file_path) == linked_files
