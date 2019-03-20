# coding=utf-8

import babelfish


class SubtitleLanguage(object):
    def __init__(self, code, name):
        self.code = code  # iso (f.e. 'nl') or ietf (f.e. 'pt-BR')
        self.name = name

    def __eq__(self, other):
        """Overrides the default implementation to allow comparison."""
        if not isinstance(other, type(self)):
            return NotImplemented

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Overrides the default implementation (unnecessary in Python 3) to allow comparison."""
        return not self.__eq__(other)

    def __hash__(self):
        """Overrides the default implementation to allow comparison."""
        return hash(tuple(sorted(self.__dict__.items())))


def get_subtitle_languages():
    """Get the list of subtitle languages (iso languages and special ietf languages)."""

    def from_alpha2(language):
        return SubtitleLanguage(language.alpha2, language.name)

    # Add all iso languages (alpha2)
    languages = list(map(from_alpha2, [language for language in babelfish.LANGUAGE_MATRIX if language.alpha2]))

    # Add special cases here (f.e. languages in ietf format)
    languages.append(SubtitleLanguage('pt-BR', 'Brazilian Portuguese'))

    # Return sorted on name
    return sorted(languages, key=lambda l: l.name)
