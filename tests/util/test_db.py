# coding=utf-8

from autosubliminal.util.db import to_text


def test_to_text() -> None:
    value_0 = 0
    value_1 = 1
    value_2 = [1, 2]
    assert to_text(None) is None
    assert to_text(None, default_value='') == ''
    assert to_text([]) is None
    assert to_text([], default_value='') == ''
    assert to_text(value_0) == '0'
    assert to_text(value_1) == '1'
    assert to_text(value_2) == '1,2'
