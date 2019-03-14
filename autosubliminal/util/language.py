# coding=utf-8

import babelfish


class Alpha2Language(object):
    def __init__(self, alpha2, name):
        self.alpha2 = alpha2
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


def get_alpha2_languages():
    """Get the list of iso languages in alpha2 format."""

    def to_alpha2(language):
        return Alpha2Language(language.alpha2, language.name)

    languages = list(map(to_alpha2, [language for language in babelfish.LANGUAGE_MATRIX if language.alpha2]))

    # Add special cases here (f.e. languages in ietf format)
    languages.append(Alpha2Language('pt-BR', 'Brazilian Portuguese'))

    # Return sorted on name
    return sorted(languages, key=lambda l: l.name)
