from autosubliminal.core.diskusage import DiskUsage


def test_calculate_disk_usage(mocker):
    mocker.patch('autosubliminal.core.diskusage.get_disk_space_details', return_value=(1024, 2048))
    diskusage = DiskUsage.calculate_disk_usage('name', 'path')
    assert diskusage.name == 'name'
    assert diskusage.path == 'path'
    assert diskusage.free_bytes == 1024
    assert diskusage.total_bytes == 2048
    assert diskusage.path == 'path'
    assert diskusage.free_space == '1.0 kB'
    assert diskusage.total_space == '2.0 kB'
    assert diskusage.percentage_in_use == 50.0


def test_calculate_disk_usage_no_result(mocker):
    mocker.patch('autosubliminal.core.diskusage.get_disk_space_details', return_value=(0, 0))
    diskusage = DiskUsage.calculate_disk_usage('name', 'path')
    assert diskusage.name == 'name'
    assert diskusage.path == 'path'
    assert diskusage.free_bytes == 0
    assert diskusage.total_bytes == 0
    assert diskusage.free_space == '0 bytes'
    assert diskusage.total_space == '0 bytes'
    assert diskusage.percentage_in_use == 0.0  # if total is 0, return percentage = 0 to avoid division by 0
