# coding=utf-8

from typing import Any, Literal

SubtitleType = Literal['hardcoded', 'embedded', 'external']


class Subtitle(object):
    """Subtitle class."""

    def __init__(self, type: SubtitleType = None, language: str = None, path: str = None) -> None:
        self.type = type
        self.language = language
        self.path = path

    def set_attr(self, key: str, value: Any) -> None:
        """Set an attribute (ignore/skip @property attributes).

        It takes care of converting the value if needed.
        :param key: the attribute key
        :type key: str
        :param value: the attribute value
        :type value: str
        """
        if hasattr(self, key) and not hasattr(type(self), key):
            # Use default value
            setattr(self, key, value)
