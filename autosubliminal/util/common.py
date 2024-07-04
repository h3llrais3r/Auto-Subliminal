# coding=utf-8

import builtins
import ctypes
import datetime
import logging
import os
import re
import stat
import subprocess
import sys
import time
from collections.abc import Mapping
from typing import Any, Callable, Dict, List, Optional, Set, Tuple, Type, Union

import requests

import autosubliminal

log = logging.getLogger(__name__)


# Copied from ConfigParser
_boolean_states = {
    '1': True,
    'yes': True,
    'true': True,
    'on': True,
    '0': False,
    'no': False,
    'false': False,
    'off': False,
}


def get_today() -> datetime.datetime:
    """Helper to get today as datetime.

    We made this a function, otherwise we can't mock built-in datetime.datetime.today in our tests!
    """
    return datetime.datetime.today()


def run_cmd(cmd: Union[str, List[str]], communicate: bool = True) -> Optional[Tuple[bytes, bytes]]:
    """Run a command.

    By default it will communicate the output, but it can be disabled.
    """
    log.debug('Running cmd: %r', cmd)
    process = subprocess.Popen(cmd, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if communicate:
        # Return stdout, stderr
        return process.communicate()

    return None


def connect_url(url: str) -> requests.Response:
    """Connect to a certain url.

    Use our user agent and timeout by default.
    """
    log.debug('Connecting to url: %s', url)
    try:
        return requests.get(url, headers={'User-Agent': autosubliminal.USERAGENT}, timeout=autosubliminal.TIMEOUT)
    except Exception as e:
        # Replaces log.exception() because we want it to be logged in debug
        log.debug('Could not connect to url: %s', url, exc_info=True)
        # Throw again the exception
        raise e


def wait_for_internet_connection() -> None:
    """Function that blocks the process until there is internet connection."""

    # Internal check for internet connection
    def _check_internet_connection(url: str) -> bool:
        try:
            connect_url(url)
            return True
        except Exception:
            return False

    log.debug('Checking internet connection')
    while not _check_internet_connection(autosubliminal.VERSIONURL):
        log.debug('Waiting for internet connection')
        time.sleep(5)


def to_obj(value: Any, obj_type: Type[Any] = str, default_value: Optional[Any] = None) -> Any:
    """Convert any value to an object type.

    By default it converts it to a string.
    Optionally, it can be converted to the specified object type.
    """
    try:
        return obj_type(value) if value is not None else default_value
    except Exception:
        return default_value


def to_list(value: Any, obj_type: Type[Any] = str, default_value: Optional[List[Any]] = None) -> Optional[List[Any]]:
    """Convert a value to a list.

    If the value is None, the default value will be returned.
    If the value contains ',', return the split values.
    By default it converts the value(s) to text value(s).
    Optionally, it can be converted to the specified object type.
    """
    if value is not None:
        if isinstance(value, list):
            return [to_obj(v, obj_type=obj_type) for v in value]
        elif ',' in str(value):
            return [to_obj(v, obj_type=obj_type) for v in str(value).split(',')]
        else:
            return [to_obj(value, obj_type=obj_type)] if str(value) != '' else default_value
    else:
        return default_value


def to_obj_or_list(
    value: Any, obj_type: Type[Any] = str, default_value: Optional[Any] = None
) -> Union[Optional[Any], Optional[List[Any]]]:
    """Convert a value to an object or a list.

    If the value is None, the default value will be returned.
    If the value contains ',', return the split values.
    By default it converts the value(s) to text value(s).
    Optionally, it can be converted to the specified object type.
    """
    if value is not None:
        if isinstance(value, list) or ',' in str(value):
            return to_list(value, obj_type=obj_type, default_value=default_value)
        else:
            return to_obj(value, obj_type=obj_type, default_value=default_value)
    else:
        return default_value


def to_dict(obj: Any, key_fn: Optional[Callable] = None, *args: Any, **kwargs: Any) -> Dict[str, Any]:
    """Convert an object to a dict.

    Only public attributes are converted. Private attributes and callable attributes (methods) are not included.
    :param obj: the object to convert
    :type obj: object or Mapping
    :param key_fn: the function that is executed on the keys when creating the dict (f.e. camelize, decamelize, ...)
    :type key_fn: function
    :param args: optional list of attributes not to include in the conversion
    :type args: tuple
    :param kwargs: optional dict with custom attributes to include in the conversion
    :type args: dict
    :return: the dict
    :rtype: dict
    """

    # Internal helper to add a value to a dict
    def _add_to_dict(obj_dict: Dict[str, Any], key: str, value: Any, key_fn: Callable, *args: Any) -> None:
        # Add to dict and filter out unwanted attributes
        if key not in args:
            dict_key = key_fn(key) if key_fn else key
            obj_dict[dict_key] = _process_dict_value(value, to_dict, key_fn, *args)

    # Internal helper to process a dict value
    def _process_dict_value(val_or_iter: Any, fn: Callable, *args: Any) -> Any:
        """Process the dict value, which can be an class, dict, list, ... again."""
        if type(val_or_iter).__module__ != type(builtins).__module__ or isinstance(val_or_iter, Mapping):
            return fn(val_or_iter, *args)
        elif isinstance(val_or_iter, list):
            return [_process_dict_value(k, fn, *args) for k in val_or_iter]
        else:
            return val_or_iter

    obj_dict: Dict[str, Any] = {}

    # Convert to dict (if not from builtins module, we assume it's an custom class object)
    if type(obj).__module__ != type(builtins).__module__:
        # Filter out private attributes (start with _) and callable attributes (methods) fom a class object
        for key in filter(lambda x: not x.startswith('_') and not callable(getattr(obj, x)), dir(obj)):
            _add_to_dict(obj_dict, key, getattr(obj, key), key_fn, *args)
    elif isinstance(obj, Mapping):
        # Filter out private keys (start with _) from a Mapping object (dict, ...)
        for key, value in filter(lambda x: not x[0].startswith('_'), obj.items()):
            _add_to_dict(obj_dict, key, value, key_fn, *args)

    # Add custom attributes
    if kwargs:
        for key, value in kwargs.items():
            _add_to_dict(obj_dict, key, value, key_fn)  # do not pass *args: Any to skip filtering

    return obj_dict


def dict_to_list(obj_dict: Dict[str, Any]) -> List[str]:
    """Return a dict as a list with key value pairs."""
    obj_list: List[str] = []
    for key, value in obj_dict.items():
        obj_list.append(key + ' = ' + value)

    return obj_list


def list_to_dict(obj_list: List[str]) -> Dict[str, str]:
    """Return a key value pair list as a dict."""
    obj_dict: Dict[str, str] = {}
    for item in obj_list:
        item_split = item.split('=')
        obj_dict[safe_trim(item_split[0])] = safe_trim(item_split[1])

    return obj_dict


# Based on ConfigParser.getboolean
def get_boolean(value: Any) -> bool:
    v = str(value)
    if v.lower() not in _boolean_states:
        raise ValueError('Not a boolean: %s' % v)
    return _boolean_states[v.lower()]


def safe_str(value: Any, default_value: str = '', uppercase: bool = False) -> str:
    """Convert any value to a string safely."""

    # Internal helper to convert any value to its string representation safely
    def _safe_str(value: Any, default_value: str) -> str:
        try:
            return str(value)
        except Exception:
            return default_value

    result = value or default_value
    result = ','.join(str(v) for v in result) if isinstance(result, (list, set)) else result
    result = _safe_str(result, default_value)
    if uppercase:
        result = safe_uppercase(result, default_value=default_value)
    return result


def safe_lowercase(value: Any, default_value: str = '') -> str:
    """Convert any value safely to lowercase."""
    return safe_str(value, default_value=default_value).lower()


def safe_uppercase(value: Any, default_value: str = '') -> str:
    """Convert any value safely to uppercase."""
    return safe_str(value, default_value=default_value).upper()


def safe_trim(value: Any, default_value: str = '') -> str:
    """Trim any value safely."""
    return safe_str(value, default_value=default_value).strip(' \n\r\t')


def camelize(string_value: Optional[str], uppercase_first_letter: bool = False) -> Optional[str]:
    """Camelize a string.

    Return the original string if it cannot be camelized (empty or no underscores in it).
    """
    if string_value and re.search(r'_', string_value):
        if uppercase_first_letter:
            return re.sub(r'(?:^|_)(.)', lambda m: m.group(1).upper(), string_value)
        return string_value[0].lower() + camelize(string_value.lower(), uppercase_first_letter=True)[1:]
    return string_value


def decamelize(string_value: Optional[str]) -> Optional[str]:
    """Decamelize a string.

    Return the original string if it cannot be decamelized.
    """
    if string_value:
        decamelized = re.sub(r'([A-Z]+)([A-Z][a-z])', r'\1_\2', string_value)
        decamelized = re.sub(r'([a-z\d])([A-Z])', r'\1_\2', decamelized)
        return decamelized.lower()
    return string_value


def sanitize(string_value: str, ignore_characters: Set[str] = None) -> str:
    """Sanitize a string to strip special characters.

    Based on https://github.com/Diaoul/subliminal/blob/master/subliminal/utils.py
    """
    ignore_characters = ignore_characters or set()
    # Only deal with strings
    if string_value:
        # Replace some characters with one space
        characters = {'-', ':', '(', ')', '.', ',', '!'} - ignore_characters
        if characters:
            string_value = re.sub(r'[%s]' % re.escape(''.join(characters)), ' ', string_value)
        # Remove some characters
        characters = {"'", '/'} - ignore_characters
        if characters:
            string_value = re.sub(r'[%s]' % re.escape(''.join(characters)), '', string_value)
        # Replace multiple spaces with one
        string_value = re.sub(r'\s+', ' ', string_value)
        # Strip and lower case
        return string_value.strip().lower()
    return string_value


def convert_timestamp(timestamp_string: str) -> str:
    return time.strftime(
        autosubliminal.TIMESTAMPFORMAT, time.strptime(timestamp_string, autosubliminal.DBTIMESTAMPFORMAT)
    )


def get_file_size(path: str) -> int:
    try:
        byte_size = os.path.getsize(path)
    except Exception:
        # If size cannot be retrieved, it's most likely because the path doesn't exist anymore
        byte_size = 0
    return byte_size


def get_common_path(paths: List[str], separator: str = os.path.sep) -> Optional[str]:
    """Get the common path between paths.

    This unlike the os.path.commonprefix version always returns path prefixes as it compares path component wise.
    See https://stackoverflow.com/questions/21498939/how-to-circumvent-the-fallacy-of-pythons-os-path-commonprefix
    """
    cp = []
    ls = [p.split(separator) for p in paths]
    ml = min(len(p) for p in ls)
    for i in list(range(ml)):
        s = set(p[i] for p in ls)
        if len(s) != 1:
            break
        cp.append(s.pop())
    return separator.join(cp) if cp else None


def find_path_in_paths(path_to_find: str, paths: List[str], check_common_path: bool = False) -> Optional[str]:
    # Normalize all paths before checking
    def n(x: str) -> str:
        return os.path.normcase(os.path.normpath(x))

    # If check_common_path, also check if the path_to_find is a sub path of the paths to check (not the way around!)
    if check_common_path:
        paths_found = list(filter(lambda x: get_common_path([n(x), n(path_to_find)]) == n(x), paths))
    else:
        paths_found = list(filter(lambda x: n(x) == n(path_to_find), paths))
    return paths_found[0] if paths_found else None


def get_root_path(video_path: str, separator: str = os.path.sep) -> str:
    """Get the root path of a video path.

    The root path must be one of the paths listed in autosubliminal.VIDEOPATHS.
    """
    for path in autosubliminal.VIDEOPATHS:
        norm_path = os.path.normpath(path)
        if get_common_path([norm_path, video_path], separator) == norm_path:
            return path
    # Should not occur, but you just to make sure
    raise RuntimeError('Video %s not located in one of the configured VIDEOPATHS' % video_path)


# Thanks to: http://code.activestate.com/recipes/577081-humanized-representation-of-a-number-of-bytes/
def humanize_bytes(bytes: int, precision: int = 1) -> str:
    """Return a humanized string representation of a number of bytes.

    >>> humanize_bytes(1)
    '1 byte'
    >>> humanize_bytes(1024)
    '1.0 kB'
    >>> humanize_bytes(1024*123)
    '123.0 kB'
    >>> humanize_bytes(1024*12342)
    '12.1 MB'
    >>> humanize_bytes(1024*12342,2)
    '12.05 MB'
    >>> humanize_bytes(1024*1234,2)
    '1.21 MB'
    >>> humanize_bytes(1024*1234*1111,2)
    '1.31 GB'
    >>> humanize_bytes(1024*1234*1111,1)
    '1.3 GB'
    """
    abbrevs = ((1 << 50, 'PB'), (1 << 40, 'TB'), (1 << 30, 'GB'), (1 << 20, 'MB'), (1 << 10, 'kB'), (1, 'bytes'))
    if bytes == 0:
        return '0 bytes'
    if bytes == 1:
        return '1 byte'
    for factor, suffix in abbrevs:
        if bytes >= factor:
            break
    # Python 2.x uses integer division by default, so convert to float first
    return '%.*f %s' % (precision, float(bytes) / factor, suffix)


# Thanks to http://stackoverflow.com/questions/51658/cross-platform-space-remaining-on-volume-using-python
def get_disk_space_details(directory: str) -> Tuple[int, int]:
    """Return folder/drive disk space details (free and total space)."""
    if sys.platform == 'win32':
        total_bytes = ctypes.c_ulonglong(0)
        free_bytes = ctypes.c_ulonglong(0)
        ctypes.windll.kernel32.GetDiskFreeSpaceExW(
            ctypes.c_wchar_p(directory), None, ctypes.pointer(total_bytes), ctypes.pointer(free_bytes)
        )
        return free_bytes.value, total_bytes.value
    else:
        st = os.statvfs(directory)
        return st.f_bavail * st.f_frsize, st.f_blocks * st.f_frsize


def set_rw_and_remove(func: Callable, path: str, _: Any) -> None:
    os.chmod(path, stat.S_IWRITE)
    func(path)


def atoi(text: str) -> Union[int, str]:
    """Convert a text to int.

    Returns the int value if the text contains digits, otherwise it returns the text.
    """
    return int(text) if text.isdigit() else text


def natural_keys(text: str) -> List[Union[int, str]]:
    """Sort by natural key order.

    Sorts in human order (http://nedbatchelder.com/blog/200712/human_sorting.html).
    Based on https://stackoverflow.com/questions/5967500/how-to-correctly-sort-a-string-with-a-number-inside
    Usage:
    - sorted(my_list, key=natural_keys)
    - my_list.sort(key=natural_keys)
    """
    return [atoi(c) for c in re.split(r'(\d+)', text)]


def get_wanted_languages() -> List[str]:
    """Get the default list of configured wanted languages."""
    wanted_languages: List[str] = []

    if autosubliminal.DEFAULTLANGUAGE:
        wanted_languages.append(autosubliminal.DEFAULTLANGUAGE)
    if autosubliminal.ADDITIONALLANGUAGES:
        wanted_languages.extend(autosubliminal.ADDITIONALLANGUAGES)

    return wanted_languages
