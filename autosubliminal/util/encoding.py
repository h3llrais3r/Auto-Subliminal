# coding=utf-8

def b2u(b, encoding='utf-8', fallback_error_mode='replace'):
    """
    Convert a byte string (bytes) to a unicode string (str).

    :param b: a byte string
    :type b: bytes
    :param encoding: the used encoding, defaults to 'utf-8'
    :param fallback_error_mode: the fallback error mode, defaults to 'replace'
    :return: the unicode string
    :rtype: str
    """
    try:
        return b.decode(encoding)
    except Exception:
        # Use fallback error mode
        return b.decode(encoding, errors=fallback_error_mode)


def s2u(s, encoding='utf-8', fallback_error_mode='replace', validate=False):
    """
    Convert a string value (bytes or str) to a unicode string (str).

    :param s: a string value
    :type s: bytes or str
    :param encoding: the used encoding, defaults to 'utf-8'
    :param fallback_error_mode: the fallback error mode, defaults to 'replace'
    :param validate: indication if the provided string must be validated against the provided encoding
    :return: the unicode string
    :rtype: str
    """

    if isinstance(s, bytes):
        return b2u(s, encoding=encoding, fallback_error_mode=fallback_error_mode)
    elif validate:
        return s.encode(encoding).decode(encoding)
    else:
        return s


def u2b(u, encoding='utf-8', fallback_error_mode='replace'):
    """
    Convert a unicode string to a byte string.

    :param u: a unicode string
    :type u: str
    :param encoding: the used encoding, defaults to 'utf-8'
    :param fallback_error_mode: the fallback error mode, defaults to 'replace'
    :return: the byte string
    :rtype: bytes
    """
    try:
        return u.encode(encoding)
    except Exception:
        # Use fallback error mode
        return u.encode(encoding, fallback_error_mode)


def s2b(s, encoding='utf-8', fallback_error_mode='replace', validate=False):
    """
    Convert a string value to a byte string.

    :param s: a string value
    :type s: bytes or str
    :param encoding: the used encoding, defaults to 'utf-8'
    :param fallback_error_mode: the fallback error mode, defaults to 'replace'
    :param validate: indication if the provided string must be validated against the provided encoding
    :return: the byte string
    :rtype: bytes
    """

    if isinstance(s, str):
        return u2b(s, encoding=encoding, fallback_error_mode=fallback_error_mode)
    elif validate:
        return s.decode(encoding).encode(encoding)
    else:
        return s
