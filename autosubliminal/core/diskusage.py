# coding=utf-8

from autosubliminal.util.common import get_disk_space_details, humanize_bytes, to_dict


class DiskUsage(object):
    """ Disk usage class.

    Contains the disk usage details for a path.
    """

    def __init__(self, name=None, path=None, free_bytes=None, total_bytes=None):
        self.name = name
        self.path = path
        self.free_bytes = free_bytes
        self.total_bytes = total_bytes
        self.free_space = humanize_bytes(self.free_bytes)
        self.total_space = humanize_bytes(self.total_bytes)
        self.free_percentage = self._calculate_free_percentage()

    def _calculate_free_percentage(self):
        return round((float(self.free_bytes) / float(self.total_bytes) * 100), 2) if self.total_bytes else 0.0

    def to_json(self):
        """Convert to its json representation."""
        return to_dict(self, True)

    @classmethod
    def calculate_disk_usage(cls, name, path):
        free_bytes, total_bytes = get_disk_space_details(path)
        return cls(name=name, path=path, free_bytes=free_bytes, total_bytes=total_bytes)
