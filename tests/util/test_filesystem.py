# coding=utf-8

import os

from enzyme.mkv import SubtitleTrack
from pytest import MonkeyPatch
from pytest_mock import MockerFixture

from autosubliminal.core.subtitle import Subtitle
from autosubliminal.util.filesystem import (
    check_missing_subtitle_languages,
    get_available_subtitles,
    get_embedded_subtitles,
    get_external_subtitles,
    get_hardcoded_subtitles,
    is_skipped_dir,
    is_valid_video_file,
    one_path_exists,
)


def test_one_path_exists() -> None:
    paths = [os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'resources')]
    assert one_path_exists(paths)
    assert not one_path_exists(['invalid/path'], retry_delay=1)
    assert not one_path_exists([], retry_delay=1)
    assert not one_path_exists(None, retry_delay=1)


def test_is_skipped_dir(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.SKIPHIDDENDIRS', True)
    assert is_skipped_dir('/path/to/.hidden')
    assert is_skipped_dir('/path/to/_unpack_')
    assert is_skipped_dir('path/to/_failed_')
    assert not is_skipped_dir('/path/to/valid')


def test_is_valid_video_file() -> None:
    assert is_valid_video_file('test.mkv')
    assert not is_valid_video_file('test.txt')
    assert not is_valid_video_file('sample_test.mkv')


def test_check_missing_subtitle_languages(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['de', 'en', 'fr'])
    mocker.patch('autosubliminal.util.filesystem.get_embedded_subtitles', return_value=[])
    mocker.patch('autosubliminal.util.filesystem.get_hardcoded_subtitles', return_value=[])
    filename = 'Southpaw.2015.1080p.BluRay.x264.mkv'
    dirname = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources'))
    missing_languages = ['de', 'fr']
    assert missing_languages == sorted(
        lang for lang in check_missing_subtitle_languages(dirname, filename, scan_embedded=True, scan_hardcoded=True)
    )


def test_check_missing_subtitle_languages_with_langdetect(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['en'])
    mocker.patch('autosubliminal.util.filesystem._detect_subtitle_language', return_value='fr')
    mocker.patch('autosubliminal.util.filesystem._delete_subtitle_file', return_value=True)
    filename = 'Southpaw.2015.1080p.BluRay.x264.mkv'
    dirname = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources'))
    missing_languages = ['nl']
    assert missing_languages == check_missing_subtitle_languages(dirname, filename, detect_invalid=True)


def test_get_available_subtitles(monkeypatch: MonkeyPatch, mocker: MockerFixture) -> None:
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    fr = Subtitle(type='embedded', language='fr', path='/path/to/subtitle/fr')
    de = Subtitle(type='hardcoded', language='de', path='/path/to/subtitle/de')
    mocker.patch('autosubliminal.util.filesystem.get_embedded_subtitles', return_value=[fr])
    mocker.patch('autosubliminal.util.filesystem.get_hardcoded_subtitles', return_value=[de])
    filename = 'Southpaw.2015.1080p.BluRay.x264.mkv'
    dirname = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources'))
    available_languages = ['de', 'en', 'fr', 'nl']
    assert available_languages == sorted(
        [s.language for s in get_available_subtitles(dirname, filename, scan_embedded=True, scan_hardcoded=True)]
    )


def test_get_embedded_subtitles(mocker: MockerFixture) -> None:
    mkv_mock = mocker.patch('autosubliminal.util.filesystem.MKV')
    mkv_subtitles = [
        SubtitleTrack(language='dut', name='Dutch'),
        SubtitleTrack(name='English'),
        SubtitleTrack(name='invalid'),
    ]
    mkv_mock.return_value.subtitle_tracks = mkv_subtitles
    filename = 'Southpaw.2015.1080p.BluRay.x264.mkv'
    dirname = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources'))
    available_languages = ['en', 'nl']
    assert available_languages == sorted([s.language for s in get_embedded_subtitles(dirname, filename)])


def test_get_hardcoded_subtitles() -> None:
    filename = 'Southpaw.2015.1080p.BluRay.x264.mkv'
    dirname = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources'))
    available_languages = ['de', 'fr']
    assert available_languages == sorted([s.language for s in get_hardcoded_subtitles(dirname, filename)])


def test_get_external_subtitles(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    filename = 'Southpaw.2015.1080p.BluRay.x264.mkv'
    dirname = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources'))
    available_languages = ['en', 'nl']
    assert available_languages == sorted([s.language for s in get_external_subtitles(dirname, filename)])
