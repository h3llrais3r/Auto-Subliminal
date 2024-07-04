# coding=utf-8

from typing import Any, List, Literal

from autosubliminal.util.common import get_wanted_languages

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


def get_missing_subtitle_languages(
    available_subtitles: List[Subtitle], wanted_languages: List[str] = None
) -> List[str]:
    """Get the missing subtitle languages."""
    if wanted_languages is None:
        wanted_languages = get_wanted_languages()

    available_languages: List[str] = []
    for subtitle in available_subtitles:
        available_languages.append(subtitle.language)

    # Return the missing languages (= not in available languages)
    return [language for language in wanted_languages if language not in available_languages]
