# coding=utf-8

from autosubliminal.util.encoding import b2u, s2b, s2u, u2b


def test_b2u() -> None:
    assert b2u(b'\xc3\xa9l\xc3\xa0') == 'élà'


def test_b2u_exception_fallback_replace() -> None:
    assert b2u(b'\xc3\xa9l\xc3\xa0', 'ascii') == '��l��'


def test_b2u_exception_fallback_ignore() -> None:
    assert b2u(b'\xc3\xa9l\xc3\xa0', 'ascii', 'ignore') == 'l'


def test_s2u() -> None:
    assert s2u(b'\xc3\xa9l\xc3\xa0') == 'élà'
    assert s2u('élà') == 'élà'
    assert s2u('élà', validate=True) == 'élà'


def test_u2b() -> None:
    assert u2b('élà') == b'\xc3\xa9l\xc3\xa0'


def test_u2b_exception_fallback_replace() -> None:
    assert u2b('élà', 'ascii') == b'?l?'


def test_u2b_exception_fallback_ignore() -> None:
    assert u2b('élà', 'ascii', 'ignore') == b'l'


def test_s2b() -> None:
    assert s2b('élà') == b'\xc3\xa9l\xc3\xa0'
    assert s2b(b'\xc3\xa9l\xc3\xa0') == b'\xc3\xa9l\xc3\xa0'
    assert s2b(b'\xc3\xa9l\xc3\xa0', validate=True) == b'\xc3\xa9l\xc3\xa0'
