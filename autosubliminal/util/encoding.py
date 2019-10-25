# coding=utf-8

from six import PY2, binary_type, text_type


def b2u(b, encoding='utf-8', fallback_error_mode='replace'):
    """
    Convert a byte string to a unicode string.

    :param b: a byte string
    :param encoding: the used encoding, defaults to 'utf-8'
    :param fallback_error_mode: the fallback error mode, defaults to 'replace'
    :return: the unicode string
    """
    try:
        return b.decode(encoding)
    except Exception:
        # Use fallback error mode
        return b.decode(encoding, fallback_error_mode)


def u2b(u, encoding='utf-8', fallback_error_mode='replace'):
    """
    Convert a unicode string to a byte string.

    :param u: a unicode string
    :param encoding: the used encoding, defaults to 'utf-8'
    :param fallback_error_mode: the fallback error mode, defaults to 'replace'
    :return: the byte string
    """
    try:
        return u.encode(encoding)
    except Exception:
        # Use fallback error mode
        return u.encode(encoding, fallback_error_mode)


def s2b(s, encoding='utf-8'):
    """
    Convert a string value to a byte string.

    :param s: a string
    :param encoding: the used encoding, defaults to utf-8
    :return: the byte string
    """

    if isinstance(s, binary_type):
        return s
    else:
        return u2b(s, encoding=encoding)


def s2u(s, encoding='utf-8'):
    """
    Convert a string value to a unicode string.

    :param s: a string
    :param encoding: the used encoding, defaults to utf-8
    :return: the unicode string
    """

    if isinstance(s, text_type):
        return s
    else:
        return b2u(s, encoding=encoding)


def s2n(s, encoding='utf-8', validate=False):
    """
    Convert a string value to the native string representation.

    :param s: a string value
    :param encoding: the used encoding, defaults to utf-8
    :param validate: indication if the provided native string must be validated against the provided encoding
    :return: the native string (based on python version)
    """
    if PY2:
        # In Python 2, the native string type is bytes
        if isinstance(s, text_type):  # unicode for Python 2
            return s.encode(encoding)
        elif validate:
            # Test if the provided native string can be represented with the provided encoding
            return s.decode(encoding).encode(encoding)
        else:
            return s
    else:
        # In Python 3, the native string type is unicode
        if isinstance(s, binary_type):  # bytes for Python 3
            return s.decode(encoding)
        elif validate:
            return s.encode(encoding).decode(encoding)
        else:
            return s
