# coding=utf-8

from typing import Any, Callable, Dict, Type

from autosubliminal.util.common import get_disk_space_details, humanize_bytes, to_dict


class PathInfo(object):
    """Path info class.

    Contains the path info for a path.
    """

    def __init__(self, name: str = None, path: str = None, free_bytes: int = None, total_bytes: int = None) -> None:
        self.name = name
        self.path = path
        self.free_bytes = free_bytes
        self.total_bytes = total_bytes
        self.free_space = humanize_bytes(self.free_bytes)
        self.total_space = humanize_bytes(self.total_bytes)
        self.free_percentage = self._calculate_free_percentage()

    def _calculate_free_percentage(self) -> float:
        return round((float(self.free_bytes) / float(self.total_bytes) * 100), 2) if self.total_bytes else 0.0

    def to_dict(self, key_fn: Callable, *args: Any, **kwargs: Any) -> Dict[str, Any]:
        """Convert the object to its dict representation.

        :param key_fn: the function that is executed on the keys when creating the dict
        :type key_fn: function
        :param args: optional list of attributes not to include in the conversion
        :type args: tuple
        :param kwargs: optional dict with custom attributes to include in the conversion
        :type args: dict
        :return: the json dict
        :rtype: dict
        """
        # Define args to exclude
        exclude_args = []
        if args:
            exclude_args.extend(list(args))

        # Define kwargs to include
        include_kwargs = {}
        if kwargs:
            include_kwargs.update(kwargs)

        return to_dict(self, key_fn, *args, **kwargs)

    @classmethod
    def get_path_info(cls: Type['PathInfo'], name: str, path: str) -> 'PathInfo':
        free_bytes, total_bytes = get_disk_space_details(path)
        return cls(name=name, path=path, free_bytes=free_bytes, total_bytes=total_bytes)
