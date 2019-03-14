# coding=utf-8

from autosubliminal.util.language import Alpha2Language, get_alpha2_languages


def test_get_alpha2_languages():
    languages = get_alpha2_languages()
    nl_language = Alpha2Language('nl', 'Dutch')
    pt_br_language = Alpha2Language('pt-BR', 'Brazilian Portuguese')
    assert isinstance(languages, list)
    assert len(languages) == 185
    assert nl_language in languages
    assert pt_br_language in languages
