# coding=utf-8

import ctypes
import datetime
import logging
import os
import platform
import re
import stat
import subprocess
import time

import requests
from six import text_type

import autosubliminal

log = logging.getLogger(__name__)


# Copied from ConfigParser
_boolean_states = {'1': True, 'yes': True, 'true': True, 'on': True,
                   '0': False, 'no': False, 'false': False, 'off': False}


def get_today():
    """Helper to get today as datetime.

    We made this a function, otherwise we can't mock built-in datetime.datetime.today in our tests!
    """
    return datetime.datetime.today()


def run_cmd(cmd, communicate=True):
    """Run a command.

    By default it will communicate the output, but it can be disabled.
    """
    log.debug('Running cmd: %r', cmd)
    process = subprocess.Popen(cmd,
                               shell=True,
                               stdin=subprocess.PIPE,
                               stdout=subprocess.PIPE,
                               stderr=subprocess.PIPE)

    if communicate:
        # Return stdout, stderr
        return process.communicate()


def connect_url(url):
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


def wait_for_internet_connection():
    """ Function that blocks the process until there is internet connection."""
    # Internal check for internet connection
    def _check_internet_connection(url):
        try:
            connect_url(url)
            return True
        except Exception:
            return False

    log.debug('Checking internet connection')
    while not _check_internet_connection(autosubliminal.VERSIONURL):
        log.debug('Waiting for internet connection')
        time.sleep(5)


def to_obj(value, obj_type=text_type, default_value=None):
    """Convert an object to an object value.

    By default it converts it to text value.
    Optionally, it can be converted to the specified object type.
    """
    try:
        return obj_type(value) if value is not None else default_value
    except Exception:
        return default_value


def to_text(obj, default_value=None):
    """Convert an object to a text value.

    If the object is None, the default value will be returned.
    If the object is a list, convert it to a comma separated text value.
    If not, return the text representation of the object.
    """
    if obj is not None:
        if isinstance(obj, list):
            return ','.join(text_type(e) for e in obj) if obj else default_value
        else:
            return text_type(obj)
    else:
        return default_value


def to_list(value, obj_type=text_type, default_value=None):
    """Convert a value to a list.

    If the value is None, the default value will be returned.
    If the value contains ',', return the split values.
    By default it converts the value(s) to text value(s).
    Optionally, it can be converted to the specified object type.
    """
    if value is not None:
        if isinstance(value, list):
            return [to_obj(v, obj_type=obj_type) for v in value]
        elif ',' in text_type(value):
            return [to_obj(v, obj_type=obj_type) for v in text_type(value).split(',')]
        else:
            return [to_obj(value, obj_type=obj_type)] if text_type(value) != '' else default_value
    else:
        return default_value


def to_obj_or_list(value, obj_type=text_type, default_value=None):
    """Convert a value to an object or a list.

    If the value is None, the default value will be returned.
    If the value contains ',', return the split values.
    By default it converts the value(s) to text value(s).
    Optionally, it can be converted to the specified object type.
    """
    if value is not None:
        if isinstance(value, list) or ',' in text_type(value):
            return to_list(value, obj_type=obj_type, default_value=default_value)
        else:
            return to_obj(value, obj_type=obj_type, default_value=default_value)
    else:
        return default_value


def to_dict(obj, *args, **kwargs):
    """Convert an object to a dict.

    Only public attributes are converted. Private attributes and callable attributes (methods) are not included.
    :param obj: the object to convert
    :type obj: object
    :param args: optional list of attributes not to include in the conversion
    :type args: tuple
    :param kwargs: optional dict with custom attributes to include in the conversion
    :type args: dict
    :return: the dict
    :rtype: dict
    """
    obj_dict = {}
    # Filter out private attributes (start with _) and callable attributes (methods)
    for key in filter(lambda x: not x.startswith('_') and not callable(getattr(obj, x)), dir(obj)):
        # Filter out unwanted attributes
        if key not in args:
            obj_dict[key] = getattr(obj, key)
    # Add custom attributes
    if kwargs:
        for key in kwargs:
            obj_dict[key] = kwargs[key]
    return obj_dict


# Based on ConfigParser.getboolean
def get_boolean(value):
    v = text_type(value)
    if v.lower() not in _boolean_states:
        raise ValueError('Not a boolean: %s' % v)
    return _boolean_states[v.lower()]


def safe_text(obj, default_value=None):
    """Return the object converted to text.

    When not possible return the default value.
    """
    try:
        return text_type(obj)
    except Exception:
        return default_value


def safe_lowercase(obj, default_value=None):
    """Return the object converted to lowercase.

    When not possible return the obj itself, or the default value if specified.
    """
    try:
        return obj.lower()
    except Exception:
        return default_value or obj


def safe_uppercase(obj, default_value=None):
    """Return the object converted to uppercase.

    When not possible return the obj itself, or the default value if specified.
    """
    try:
        return obj.upper()
    except Exception:
        return default_value or obj


def safe_trim(obj, default_value=None):
    """Return the object trimmed with leading and trailing spaces, tabs and newlines.

    When not possible return the obj itself, or the default value if specified.
    """
    try:
        return obj.strip(' \n\r\t')
    except Exception:
        return default_value or obj


def sanitize(string_value, ignore_characters=None):
    """Sanitize a string to strip special characters.

    Copied from https://github.com/Diaoul/subliminal/blob/master/subliminal/utils.py
    """
    ignore_characters = ignore_characters or set()
    # Only deal with strings
    if string_value is None:
        return
    # Replace some characters with one space
    characters = {'-', ':', '(', ')', '.', ',', '!'} - ignore_characters
    if characters:
        string_value = re.sub(r'[%s]' % re.escape(''.join(characters)), ' ', string_value)
    # Remove some characters
    characters = {'\'', '/'} - ignore_characters
    if characters:
        string_value = re.sub(r'[%s]' % re.escape(''.join(characters)), '', string_value)
    # Replace multiple spaces with one
    string_value = re.sub(r'\s+', ' ', string_value)
    # Strip and lower case
    return string_value.strip().lower()


def display_list_single_line(list_object):
    """Return a single lined string (comma separated) containing all the values of the list."""
    s = ''
    for x in list_object:
        if s == '':
            s += x
        else:
            s += ',' + x
    return s


def display_list_multi_line(list_object):
    """Return a multi lined string containing all values of the list."""
    s = ''
    for x in list_object:
        if s == '':
            s += x
        else:
            s += '\n' + x
    return s


def display_mapping_dict(mapping_dict):
    """Return a multi lined string containing all mappings (key = value) from the mapping_dict."""
    s = ''
    for x in mapping_dict:
        if s == '':
            s += x + ' = ' + text_type(mapping_dict[x])
        else:
            s += '\n' + x + ' = ' + text_type(mapping_dict[x])
    return s


def display_value(value, default_value='', uppercase=False):
    result = value or default_value
    result = ','.join(text_type(v) for v in result) if isinstance(result, list) else result
    result = safe_text(result, default_value)
    if uppercase:
        result = safe_uppercase(result, default_value=default_value)
    return result


def display_item_title(item, default_value='N/A', uppercase=False):
    title = display_value(item.title, default_value, uppercase=False)
    year = display_value(item.year, default_value, uppercase=False)
    if not title == default_value and not year == default_value:
        title += ' (' + year + ')'
    if uppercase:
        title = safe_uppercase(title, default_value=default_value)
    return title


def display_item_name(item, default_value='N/A', uppercase=False):
    name = display_item_title(item, default_value, False)
    if item.is_episode:
        season = display_value(item.season, default_value, uppercase=False)
        episode = display_value(item.episode, default_value, uppercase=False)
        if not season == default_value and not episode == default_value:
            name += ' S' + season.zfill(2)
            if isinstance(item.episode, list):
                for idx, e in enumerate(item.episode):
                    episode = display_value(e, default_value, uppercase=False)
                    if idx > 0:
                        name += '-'
                    name += 'E' + episode.zfill(2)
            else:
                name += 'E' + episode.zfill(2)
    if uppercase:
        name = safe_uppercase(name, default_value=default_value)
    return name


def display_interval(seconds, textual=False):
    """Display a number of seconds as an interval."""
    time_delta = datetime.timedelta(seconds=seconds)
    if not textual:
        return str(time_delta)
    else:
        days = time_delta.days
        hours, remainder = divmod(time_delta.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        formatted_interval = '%d day%s' % (days, 's' if days > 1 else '') if days else ''
        formatted_interval += ' %d hour%s' % (hours, 's' if hours > 1 else '') if hours else ''
        formatted_interval += ' %d minute%s' % (minutes, 's' if minutes > 1 else '') if minutes else ''
        formatted_interval += ' %d second%s' % (seconds, 's' if seconds > 1 else '') if seconds else ''
        return formatted_interval.lstrip()


def display_timestamp(time_float, default_value='N/A'):
    if time_float > 0.0:
        return time.strftime(autosubliminal.TIMESTAMPFORMAT, time.localtime(time_float))
    else:
        return default_value


def get_next_scheduler_run_in_ms(scheduler):
    if not scheduler or scheduler.running:
        return 0
    else:
        return (scheduler.last_run + scheduler.interval) * 1000


def convert_timestamp(timestamp_string):
    return time.strftime(autosubliminal.TIMESTAMPFORMAT,
                         time.strptime(timestamp_string, autosubliminal.DBTIMESTAMPFORMAT))


def get_file_size(path):
    try:
        byte_size = os.path.getsize(path)
    except Exception:
        # If size cannot be retrieved, it's most likely because the path doesn't exist anymore
        # Occurs when displaying gui when a sub check is running and files are already moved by a postprocessor script
        byte_size = 0
    return humanize_bytes(byte_size, 2)


def get_common_path(paths, separator=os.path.sep):
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


def get_root_path(video_path, separator=os.path.sep):
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
def humanize_bytes(bytes, precision=1):
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
    abbrevs = (
        (1 << 50, 'PB'),
        (1 << 40, 'TB'),
        (1 << 30, 'GB'),
        (1 << 20, 'MB'),
        (1 << 10, 'kB'),
        (1, 'bytes')
    )
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
def get_disk_space_details(directory):
    """Return folder/drive disk space details (free and total space)."""
    if platform.system() == 'Windows':
        total_bytes = ctypes.c_ulonglong(0)
        free_bytes = ctypes.c_ulonglong(0)
        ctypes.windll.kernel32.GetDiskFreeSpaceExW(ctypes.c_wchar_p(directory), None, ctypes.pointer(total_bytes),
                                                   ctypes.pointer(free_bytes))
        return free_bytes.value, total_bytes.value
    else:
        st = os.statvfs(directory)
        return st.f_bavail * st.f_frsize, st.f_blocks * st.f_frsize


def set_rw_and_remove(operation, name, exc):
    os.chmod(name, stat.S_IWRITE)
    os.remove(name)


def atoi(text):
    """Convert a text to int.

    Returns the int value if the text contains digits, otherwise it returns the text.
    """
    return int(text) if text.isdigit() else text


def natural_keys(text):
    """ Sort by natural key order.

    Sorts in human order (http://nedbatchelder.com/blog/200712/human_sorting.html).
    Based on https://stackoverflow.com/questions/5967500/how-to-correctly-sort-a-string-with-a-number-inside
    Usage:
    - sorted(my_list, key=natural_keys)
    - my_list.sort(key=natural_keys)
    """
    return [atoi(c) for c in re.split('(\d+)', text)]


def get_wanted_languages():
    """Get the default list of configured wanted languages."""
    wanted_languages = []

    if autosubliminal.DEFAULTLANGUAGE:
        wanted_languages.append(autosubliminal.DEFAULTLANGUAGE)
    if autosubliminal.ADDITIONALLANGUAGES:
        wanted_languages.extend(autosubliminal.ADDITIONALLANGUAGES)

    return wanted_languages
