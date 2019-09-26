# coding=utf-8

from six import PY2, text_type, binary_type

from autosubliminal.util.encoding import b2u, u2b, s2b, s2u, s2n


def test_b2u():
    assert b2u(b'\xc3\xa9l\xc3\xa0') == u'élà'


def test_b2u_exception_fallback_replace():
    assert b2u(b'\xc3\xa9l\xc3\xa0', 'ascii') == u'��l��'


def test_b2u_exception_fallback_ignore():
    assert b2u(b'\xc3\xa9l\xc3\xa0', 'ascii', 'ignore') == u'l'


def test_u2b():
    assert u2b(u'élà') == b'\xc3\xa9l\xc3\xa0'


def test_u2b_exception_fallback_replace():
    assert u2b(u'élà', 'ascii') == b'?l?'


def test_u2b_exception_fallback_ignore():
    assert u2b(u'élà', 'ascii', 'ignore') == b'l'


def test_s2b():
    assert s2b(u'élà') == b'\xc3\xa9l\xc3\xa0'
    assert s2b(b'\xc3\xa9l\xc3\xa0') == b'\xc3\xa9l\xc3\xa0'


def test_s2u():
    assert s2u(b'\xc3\xa9l\xc3\xa0') == u'élà'
    assert s2u(u'élà') == u'élà'


def test_s2n():
    s1 = 'élà'  # str (binary_type) in PY2,  str (text_type) in PY3
    s2 = u'élà'
    s3 = b'\xc3\xa9l\xc3\xa0'
    if PY2:
        assert s2n(s1) == b'\xc3\xa9l\xc3\xa0'
        assert s2n(str(s1), validate=True) == b'\xc3\xa9l\xc3\xa0'
        assert isinstance(s2n(s1), binary_type)
        assert s2n(s2) == b'\xc3\xa9l\xc3\xa0'
        assert s2n(s2, validate=True) == b'\xc3\xa9l\xc3\xa0'
        assert isinstance(s2n(s2), binary_type)
        assert s2n(s3) == b'\xc3\xa9l\xc3\xa0'
        assert isinstance(s2n(s3), binary_type)
    else:
        assert s2n(s1) == u'élà'
        assert s2n(s1, validate=True) == u'élà'
        assert isinstance(s2n(s1), text_type)
        assert s2n(s2) == u'élà'
        assert s2n(s2, validate=True) == u'élà'
        assert isinstance(s2n(s2), text_type)
        assert s2n(s3) == u'élà'
        assert isinstance(s2n(s3), text_type)
