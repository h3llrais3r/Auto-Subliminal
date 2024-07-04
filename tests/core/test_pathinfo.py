from pytest_mock import MockerFixture

from autosubliminal.core.pathinfo import PathInfo
from autosubliminal.util.common import camelize


def test_get_path_info(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.core.pathinfo.get_disk_space_details', return_value=(1024, 2048))
    pathinfo = PathInfo.get_path_info('name', 'path')
    assert pathinfo.name == 'name'
    assert pathinfo.path == 'path'
    assert pathinfo.free_bytes == 1024
    assert pathinfo.total_bytes == 2048
    assert pathinfo.path == 'path'
    assert pathinfo.free_space == '1.0 kB'
    assert pathinfo.total_space == '2.0 kB'
    assert pathinfo.free_percentage == 50.0


def test_get_path_info_no_result(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.core.pathinfo.get_disk_space_details', return_value=(0, 0))
    pathinfo = PathInfo.get_path_info('name', 'path')
    assert pathinfo.name == 'name'
    assert pathinfo.path == 'path'
    assert pathinfo.free_bytes == 0
    assert pathinfo.total_bytes == 0
    assert pathinfo.free_space == '0 bytes'
    assert pathinfo.total_space == '0 bytes'
    assert pathinfo.free_percentage == 0.0  # if total is 0, return percentage = 0 to avoid division by 0


def test_to_dict(mocker: MockerFixture) -> None:
    pathinfo_dict = {
        'name': 'name',
        'path': 'path',
        'freeBytes': 0,
        'freeSpace': '0 bytes',
        'freePercentage': 0.0,
        'totalBytes': 0,
        'totalSpace': '0 bytes',
    }
    mocker.patch('autosubliminal.core.pathinfo.get_disk_space_details', return_value=(0, 0))
    pathinfo = PathInfo.get_path_info('name', 'path')
    assert pathinfo_dict == pathinfo.to_dict(camelize)
