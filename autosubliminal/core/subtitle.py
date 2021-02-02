# coding=utf-8

# Subtitle types
HARDCODED = 'hardcoded'
EMBEDDED = 'embedded'
EXTERNAL = 'external'


class Subtitle(object):
    """Subtitle class."""

    def __init__(self, type=None, language=None, path=None):
        self.type = type
        self.language = language
        self.path = path

    def set_attr(self, key, value):
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
