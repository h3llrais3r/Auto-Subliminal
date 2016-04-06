import codecs
import ctypes
import imdb
import logging
import os
import platform
import re
import stat
import subprocess
import threading
import time
import urllib2

from string import capwords
from tvdb_api import tvdb_api

import autosubliminal
from autosubliminal.db import TvdbIdCache, ImdbIdCache

log = logging.getLogger(__name__)

_lock = threading.Lock()

# Copied from ConfigParser
_boolean_states = {'1': True, 'yes': True, 'true': True, 'on': True,
                   '0': False, 'no': False, 'false': False, 'off': False}

LOG_PARSER = re.compile('^((?P<date>\d{4}\-\d{2}\-\d{2}) (?P<time>\d{2}:\d{2}:\d{2},\d{3}) (?P<loglevel>\w+))',
                        re.IGNORECASE)


def add_notification_message(message, message_type='info', sticky=False):
    """
    Add a notification message with a specific message type.
    Possible values for message type are (to be in sync with PNotify jquery plugin):
    - info (blue)
    - success (green)
    - notice (orange)
    - error (red)
    Sticky indicates that it will be shown at a fixed inline location and it will not fade.
    """
    message_dict = {'message': message, 'message_type': message_type, 'sticky': sticky}
    autosubliminal.MESSAGEQUEUE.append(message_dict)


def run_cmd(cmd, communicate=True):
    log.debug("Running cmd: %s" % cmd)
    process = subprocess.Popen(cmd,
                               shell=True,
                               stdin=subprocess.PIPE,
                               stdout=subprocess.PIPE,
                               stderr=subprocess.PIPE)

    if communicate:
        # Return stdout, stderr
        return process.communicate()


def connect_url(url):
    log.debug("Connecting to url: %s" % url)
    response = None
    try:
        response = urllib2.urlopen(url, None, autosubliminal.TIMEOUT)
        log.debug("Connection successful")
    except urllib2.HTTPError, e:
        http_code = e.code
        log.debug("Could not connect to url: http response code %s" % http_code)
    except Exception, e:
        log.debug("Could not connect to url: %s" % e.message)

    return response


def wait_for_internet_connection():
    log.debug("Checking internet connection")
    while not connect_url(autosubliminal.VERSIONURL):
        log.debug("Waiting for internet connection")
        time.sleep(5)


def clean_series_name(series_name):
    """Clean up series name by removing any . and _
    characters, along with any trailing hyphens.

    Is basically equivalent to replacing all _ and . with a
    space, but handles decimal numbers in string, for example:

    >>> clean_series_name("an.example.1.0.test")
    'an example 1.0 test'
    >>> clean_series_name("an_example_1.0_test")
    'an example 1.0 test'

    Stolen from dbr's tvnamer
    """
    try:
        series_name = re.sub("(\D)\.(?!\s)(\D)", "\\1 \\2", series_name)
        series_name = re.sub("(\d)\.(\d{4})", "\\1 \\2", series_name)  # if it ends in a year then don't keep the dot
        series_name = re.sub("(\D)\.(?!\s)", "\\1 ", series_name)
        series_name = re.sub("\.(?!\s)(\D)", " \\1", series_name)
        series_name = series_name.replace("_", " ")
        series_name = re.sub("-$", "", series_name)
        return capwords(series_name.strip())
    except TypeError:
        log.debug("There is no SerieName to clean")


# Based on ConfigParser.getboolean
def getboolean(value):
    v = str(value)
    if v.lower() not in _boolean_states:
        raise ValueError, 'Not a boolean: %s' % v
    return _boolean_states[v.lower()]


def safe_string(obj, default_value=None):
    """
    Return the object converted to string.
    When not possible return the default value.
    """
    try:
        text = str(obj)
        return text
    except:
        return default_value


def safe_uppercase(obj, default_value=None):
    """
    Return the object converted to uppercase.
    When not possible return the default value.
    """
    try:
        text = obj.upper()
        return text
    except:
        return default_value


def show_name_mapping(show_name):
    if show_name.upper() in autosubliminal.USERSHOWNAMEMAPPINGUPPER.keys():
        log.debug("Found match in usershownamemapping for %s" % show_name)
        return autosubliminal.USERSHOWNAMEMAPPINGUPPER[show_name.upper()]
    elif show_name.upper() in autosubliminal.SHOWNAMEMAPPINGUPPER.keys():
        log.debug("Found match for %s" % show_name)
        return autosubliminal.SHOWNAMEMAPPINGUPPER[show_name.upper()]


def movie_name_mapping(title, year):
    movie = title
    if year:
        movie += " (" + str(year) + ")"
    if movie.upper() in autosubliminal.USERMOVIENAMEMAPPINGUPPER.keys():
        log.debug("Found match in usermovienamemapping for %s" % movie)
        return autosubliminal.USERMOVIENAMEMAPPINGUPPER[movie.upper()]
    elif movie.upper() in autosubliminal.MOVIENAMEMAPPINGUPPER.keys():
        log.debug("Found match for %s" % movie)
        return autosubliminal.MOVIENAMEMAPPINGUPPER[movie.upper()]


def skip_show(show_name, season, episode):
    if show_name.upper() in autosubliminal.SKIPSHOWUPPER.keys():
        log.debug("Found %s in skipshow dictionary" % show_name)
        for seasontmp in autosubliminal.SKIPSHOWUPPER[show_name.upper()]:
            if seasontmp == '0':
                log.debug("Variable of %s is set to 0, skipping the complete Serie" % show_name)
                return True
            elif int(seasontmp) == int(season):
                log.debug("Season matches variable of %s, skipping season" % show_name)
                return True


def skip_movie(title, year):
    movie = title
    if year:
        movie += " (" + str(year) + ")"
    if movie.upper() in autosubliminal.SKIPMOVIEUPPER.keys():
        log.debug("Found %s in skipmovie dictionary" % movie)
        log.debug("Skipping movie %s" % movie)
        return True


def get_tvdb_id(show_name, force_search=False):
    log.debug("Getting tvdb id for %s" % show_name)
    tvdb_id = None
    # Skip search in shownamemapping and id cache when force_search = True
    if not force_search:
        tvdb_id = show_name_mapping(show_name)
        if tvdb_id:
            log.debug("Tvdb id from shownamemapping %s" % tvdb_id)
            return int(tvdb_id)

        tvdb_id = TvdbIdCache().get_id(show_name)
        if tvdb_id:
            log.debug("Getting tvdb id from cache %s" % tvdb_id)
            if tvdb_id == -1:
                log.error("Tvdb id not found in cache for %s" % show_name)
                return
            return int(tvdb_id)

    # Search on tvdb
    try:
        show = tvdb_api.Tvdb()[show_name]
        if show:
            tvdb_id = show['id']
    except:
        log.error("Tvdb id not found for %s" % show_name)
        TvdbIdCache().set_id(-1, show_name)

    if tvdb_id:
        log.debug("Tvdb id from api %s" % tvdb_id)
        TvdbIdCache().set_id(tvdb_id, show_name)
        log.info("%s added to cache with %s" % (show_name, tvdb_id))
        return int(tvdb_id)


def get_imdb_info(title, year=None, force_search=False):
    imdb_id = None
    name = title
    if year:
        name += " (" + str(year) + ")"
    log.debug("Getting imdb info for %s" % name)
    # Skip search in movienamemapping and id cache when force_search = True
    if not force_search:
        imdb_id = movie_name_mapping(title, year)
        if imdb_id:
            log.debug("Imdb id from movienamemapping %s" % imdb_id)
            return imdb_id, year

        imdb_id = ImdbIdCache().get_id(title, year)
        if imdb_id:
            log.debug("Getting imdb id from cache %s" % imdb_id)
            return imdb_id, year

    # Search on imdb
    handler = imdb.IMDb()
    imdb_movies = handler.search_movie(title)
    # Find the first movie that matches the title (and year if present)
    for movie in imdb_movies:
        data = movie.data
        if data['kind'] == 'movie' and data['title'] == title:
            # If a year is present, it should also be the same
            if year:
                if data['year'] == year:
                    imdb_id = movie.movieID
                    log.debug("Getting imdb id from api %s" % imdb_id)
                    ImdbIdCache().set_id(imdb_id, title, year)
                    log.info("%s added to cache with %s" % (name, imdb_id))
                    break
                else:
                    continue
            # If no year is present, take the first match
            else:
                year = data['year']
                imdb_id = movie.movieID
                log.debug("Getting imdb id from api %s" % imdb_id)
                ImdbIdCache.set_id(imdb_id, title, year)
                log.info("%s added to cache with %s" % (name, imdb_id))
    if not imdb_id:
        log.error("Imdb id not found for %s (%s)" % (title, year))
    return imdb_id, year


def check_apicalls(use=False):
    log.debug("Checking api calls")
    currentime = time.time()
    lastrun = autosubliminal.APICALLSLASTRESET
    interval = autosubliminal.APICALLSRESETINT

    if currentime - lastrun > interval:
        autosubliminal.APICALLS = autosubliminal.APICALLSMAX
        autosubliminal.APICALLSLASTRESET = time.time()

    if autosubliminal.APICALLS > 0:
        if use:
            autosubliminal.APICALLS -= 1
        return True
    else:
        return False


def get_logfile(lognum=None):
    logfile = autosubliminal.LOGFILE
    if lognum:
        logfile += "." + str(lognum)
    if os.path.isfile(logfile):
        return logfile
    return None


def display_logfile(loglevel):
    # Read log file data
    data = []
    logfile = get_logfile()
    if logfile:
        f = codecs.open(logfile, 'r', autosubliminal.SYSENCODING)
        data = f.readlines()
        f.close()
        # If reversed order is needed, use reversed(data)
    if autosubliminal.LOGREVERSED:
        data = reversed(data)
        # Log data
    log_data = []
    for x in data:
        try:
            matches = LOG_PARSER.search(x)
            matchdic = matches.groupdict()
            if (matchdic['loglevel'] == loglevel.upper()) or (loglevel == ''):
                log_data.append(x)
        except Exception, e:
            continue
    result = "".join(log_data)
    return result


def display_item(item_dict, key, default_value='N/A', uppercase=False):
    item = item_dict.get(key, default_value) or default_value
    item = safe_string(item, default_value)
    if uppercase:
        item = safe_uppercase(item, default_value)
    return item


def display_title(item_dict, default_value='N/A', uppercase=False):
    title = display_item(item_dict, 'title', default_value, uppercase)
    year = display_item(item_dict, 'year', default_value, uppercase)
    if not title == default_value and not year == default_value:
        title += " (" + year + ")"
    if uppercase:
        title = safe_uppercase(title, default_value)
    return title


def display_name(item_dict, default_value='N/A', uppercase=False):
    name = display_title(item_dict, default_value, uppercase)
    if 'type' in item_dict.keys() and item_dict['type'] == "episode":
        season = display_item(item_dict, 'season', default_value, uppercase)
        episode = display_item(item_dict, 'episode', default_value, uppercase)
        if not season == default_value and not episode == default_value:
            name += " S" + season.zfill(2) + "E" + episode.zfill(2)
    if uppercase:
        name = safe_uppercase(name, default_value)
    return name


def display_timestamp(time_float, format='%d-%m-%Y %H:%M:%S', default_value='N/A'):
    if time_float > 0.0:
        return time.strftime(format, time.localtime(time_float))
    else:
        return default_value


def display_next_scheduler_run(scheduler):
    if scheduler.running:
        return "Running..."
    else:
        return display_timestamp(scheduler.interval - (time.time() - scheduler.last_run), '%H:%M:%S')


def get_next_scheduler_run_in_ms(scheduler):
    if scheduler.running:
        return 0
    else:
        return (scheduler.last_run + scheduler.interval) * 1000


def convert_timestamp(timestamp_string, format_from='%Y-%m-%d %H:%M:%S', format_to='%d-%m-%Y %H:%M:%S'):
    return time.strftime(format_to, time.strptime(timestamp_string, format_from))


def check_mobile_device(req_useragent):
    for MUA in autosubliminal.MOBILEUSERAGENTS:
        if MUA.lower() in req_useragent.lower():
            return True
    return False


def get_wanted_queue_lock():
    with _lock:
        if autosubliminal.WANTEDQUEUELOCK:
            log.info("Cannot get wanted queue lock, skipping")
            return False
        else:
            log.info("Getting wanted queue lock")
            autosubliminal.WANTEDQUEUELOCK = True
            return True


def release_wanted_queue_lock():
    with _lock:
        if autosubliminal.WANTEDQUEUELOCK:
            log.info("Releasing wanted queue lock")
            autosubliminal.WANTEDQUEUELOCK = False
        else:
            log.warning("Trying to release a wanted queue lock while there is no lock")


def count_wanted_items(itemtype=None):
    size = 0
    if not itemtype:
        size = len(autosubliminal.WANTEDQUEUE)
    else:
        for item in autosubliminal.WANTEDQUEUE:
            if item['type'] == itemtype:
                size += 1
    return size


def get_file_size(path):
    try:
        byte_size = os.path.getsize(path)
    except Exception, e:
        # If size cannot be retrieved, it's most likely because the path doesn't exist anymore
        # Occurs when displaying gui when a sub check is running and files are already moved by a postprocessor script
        byte_size = 0
    return humanize_bytes(byte_size, 2)


def include_hearing_impaired():
    # If hearing_impaired is True, we ALSO want the hearing_impaired subs in our results -> pass None
    # I hearing_impaired is False, we DO NOT want the hearing_impaired subs in our results -> pass False
    include_hearing_impaired = autosubliminal.INCLUDEHEARINGIMPAIRED
    if include_hearing_impaired:
        include_hearing_impaired = None
    return include_hearing_impaired


# Thanks to: http://stackoverflow.com/questions/1088392/sorting-a-python-list-by-key-while-checking-for-string-or-float
def get_attr(name):
    def inner_func(o):
        try:
            rv = float(o[name])
        except ValueError:
            rv = o[name]
        return rv

    return inner_func


# Thanks to: http://code.activestate.com/recipes/577081-humanized-representation-of-a-number-of-bytes/
def humanize_bytes(bytes, precision=1):
    """
    Return a humanized string representation of a number of bytes.

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
        (1 << 50L, 'PB'),
        (1 << 40L, 'TB'),
        (1 << 30L, 'GB'),
        (1 << 20L, 'MB'),
        (1 << 10L, 'kB'),
        (1, 'bytes')
    )
    if bytes == 1:
        return '1 byte'
    for factor, suffix in abbrevs:
        if bytes >= factor:
            break
    return '%.*f %s' % (precision, bytes / factor, suffix)


# Thanks to http://stackoverflow.com/questions/51658/cross-platform-space-remaining-on-volume-using-python
def get_free_space(directory):
    """Return folder/drive free space."""
    if platform.system() == 'Windows':
        free_bytes = ctypes.c_ulonglong(0)
        ctypes.windll.kernel32.GetDiskFreeSpaceExW(ctypes.c_wchar_p(directory), None, None, ctypes.pointer(free_bytes))
        return free_bytes.value
    else:
        st = os.statvfs(directory)
        return st.f_bavail * st.f_frsize4


def set_rw_and_remove(operation, name, exc):
    os.chmod(name, stat.S_IWRITE)
    os.remove(name)
