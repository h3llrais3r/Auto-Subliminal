# coding=utf-8

from autosubliminal.util.language import SubtitleLanguage, get_subtitle_languages


def test_get_subtitle_languages():
    languages = get_subtitle_languages()
    nl_language = SubtitleLanguage('nl', 'Dutch')
    pt_br_language = SubtitleLanguage('pt-BR', 'Brazilian Portuguese')
    assert isinstance(languages, list)
    assert len(languages) == 185
    assert nl_language in languages
    assert pt_br_language in languages
