# coding=utf-8

from autosubliminal.util.language import SubtitleLanguage, get_subtitle_languages


def test_compare_subtitle_languages() -> None:
    language_1 = SubtitleLanguage('nl', 'Dutch')
    language_2 = SubtitleLanguage('nl', 'Dutch')
    language_3 = SubtitleLanguage('pt-BR', 'Brazilian Portuguese')
    assert language_1.__eq__(None) is NotImplemented
    assert language_1.__eq__(language_2)
    assert language_1.__ne__(language_3)
    assert language_1.__hash__() != language_3.__hash__()


def test_get_subtitle_languages() -> None:
    languages = get_subtitle_languages()
    nl_language = SubtitleLanguage('nl', 'Dutch')
    pt_br_language = SubtitleLanguage('pt-BR', 'Brazilian Portuguese')
    assert isinstance(languages, list)
    assert len(languages) == 185
    assert nl_language in languages
    assert pt_br_language in languages
