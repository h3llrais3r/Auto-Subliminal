# coding=utf-8

from six import binary_type, text_type, PY2


def b2u(b, encoding='utf-8'):
    """
    Convert a byte string to a unicode string.

    :param b: a byte string
    :param encoding: the used encoding, defaults to utf-8
    :return: the unicode string
    """
    try:
        return b.decode(encoding)
    except Exception:
        # Fallback to 'replace' and 'ignore' error mode
        try:
            return b.decode(encoding, 'replace')
        except Exception:
            return b.decode(encoding, 'ignore')


def u2b(u, encoding='utf-8'):
    """
    Convert a unicode string to a byte string.

    :param u: a unicode string
    :param encoding: the used encoding, defaults to utf-8
    :return: the byte string
    """
    try:
        return u.encode(encoding)
    except Exception:
        # Fallback to 'replace' and 'ignore' error mode
        try:
            return u.encode(encoding, 'replace')
        except Exception:
            return u.encode(encoding, 'ignore')


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
