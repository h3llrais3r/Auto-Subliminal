# coding=utf-8

import os

from autosubliminal.util.filesystem import is_skipped_dir, is_valid_video_file, get_movie_files, get_show_files, \
    one_path_exists


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


def test_get_show_files():
    file_name = 'The.Big.Bang.Theory.S01E01.720p.HDTV.x264-AVS[rarbg].mkv'
    show_path = os.path.abspath(
        os.path.join(os.path.dirname(__file__), '..', 'resources', 'shows', 'The Big Bang Theory'))
    subtitle_name = 'The.Big.Bang.Theory.S01E01.720p.HDTV.x264-AVS[rarbg].srt'
    files = [{'filename': file_name, 'type': 'video'}, {'filename': subtitle_name, 'type': 'subtitle'}]
    show_files = [{'location_name': 'Root', 'location_path': show_path, 'location_files': files}]
    assert get_show_files(show_path) == show_files


def test_get_show_files_in_season_folders():
    file_name = 'Ash.vs.Evil.Dead.S01E01.720p.WEB-DL.mkv'
    show_path = os.path.abspath(
        os.path.join(os.path.dirname(__file__), '..', 'resources', 'shows', 'Ash vs Evil Dead'))
    subtitle_name = 'Ash.vs.Evil.Dead.S01E01.720p.WEB-DL.srt'
    files = [{'filename': file_name, 'type': 'video'}, {'filename': subtitle_name, 'type': 'subtitle'}]
    show_files = [{'location_name': 'Season 01', 'location_path': show_path, 'location_files': files}]
    print get_show_files(show_path)
    print show_files


def test_get_movie_files():
    file_name = 'Southpaw.2015.1080p.BluRay.x264.mkv'
    file_path = os.path.abspath(
        os.path.join(os.path.dirname(__file__), '..', 'resources', file_name))
    subtitle_name = 'Southpaw.2015.1080p.BluRay.x264.srt'
    files = [{'filename': file_name, 'type': 'video'}, {'filename': subtitle_name, 'type': 'subtitle'}]
    assert get_movie_files(file_path) == files
