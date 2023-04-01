from pytest import MonkeyPatch

from autosubliminal.core.subtitle import Subtitle, get_missing_subtitle_languages


def test_get_missing_subtitle_languages(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['en', 'fr'])
    available_subtitles = [Subtitle(language='en'), Subtitle(language='fr')]
    assert ['nl', 'en', 'fr'] == get_missing_subtitle_languages([])
    assert ['nl', 'en', 'fr'] == get_missing_subtitle_languages([], ['nl', 'en', 'fr'])
    assert ['nl'] == get_missing_subtitle_languages(available_subtitles)
