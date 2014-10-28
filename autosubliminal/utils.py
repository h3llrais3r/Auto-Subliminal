import logging
import re
import socket
import subprocess
import time
import urllib2
import codecs
import os

from distutils import version
from string import capwords

import imdb
from tvdb_api import tvdb_api

import autosubliminal
from autosubliminal.db import IdCache, ImdbIdCache
from autosubliminal.version import RELEASE_VERSION

log = logging.getLogger(__name__)

LOG_PARSER = re.compile('^((?P<date>\d{4}\-\d{2}\-\d{2}) (?P<time>\d{2}:\d{2}:\d{2},\d{3}) (?P<loglevel>\w+))',
                        re.IGNORECASE)


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
    errorcode = None
    socket.setdefaulttimeout(autosubliminal.TIMEOUT)
    try:
        response = urllib2.urlopen(url)
        errorcode = response.getcode()
    except urllib2.HTTPError, e:
        errorcode = e.getcode()

    if errorcode == 200:
        log.debug("API: HTTP Code: 200: OK!")
    else:
        log.error("HTTP Code: %s: NOT OK!" % errorcode)

    return response


def check_version():
    """
    Check version

    Return values:
    0 Same version
    1 New version
    """
    log.info('Checking version')
    try:
        req = urllib2.Request(autosubliminal.VERSIONURL)
        req.add_header("User-agent", autosubliminal.USERAGENT)
        resp = urllib2.urlopen(req, None, autosubliminal.TIMEOUT)
        respone = resp.read()
        resp.close()
    except:
        log.error("The server returned an error for request %s" % autosubliminal.VERSIONURL)
        return None
    try:
        match = re.search('(\d+)\.(\d+)\.(\d+)', respone)
        git_version = match.group(0)
    except:
        return None

    running_version = version.StrictVersion(RELEASE_VERSION)
    online_version = version.StrictVersion(git_version)

    log.info('Running version: %s' % running_version)
    log.info('Git version: %s' % online_version)

    if running_version < online_version:
        return 1
    else:
        return 0


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


def return_upper(text):
    """
    Return the text converted to uppercase.
    When not possible return nothing.
    """
    try:
        text = text.upper()
        return text
    except:
        pass


def name_mapping(show_name):
    if show_name.upper() in autosubliminal.USERNAMEMAPPINGUPPER.keys():
        log.debug("Found match in user's namemapping for %s" % show_name)
        return autosubliminal.USERNAMEMAPPINGUPPER[show_name.upper()]
    elif show_name.upper() in autosubliminal.NAMEMAPPINGUPPER.keys():
        log.debug("Found match for %s" % show_name)
        return autosubliminal.NAMEMAPPINGUPPER[show_name.upper()]


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


def get_showid(show_name, force_search=False):
    log.debug("Getting showid for %s" % show_name)
    show_id = None
    # Skip search in namemapping and id cache when force_search = True
    if not force_search:
        show_id = name_mapping(show_name)
        if show_id:
            log.debug("showid from namemapping %s" % show_id)
            return int(show_id)

        show_id = IdCache().get_id(show_name)
        if show_id:
            log.debug("showid from cache %s" % show_id)
            if show_id == -1:
                log.error("Showid not found for %s" % show_name)
                return
            return int(show_id)

    # Search on tvdb
    if check_apicalls():
        try:
            show = tvdb_api.Tvdb()[show_name]
            if show:
                show_id = show['id']
        except:
            log.error("Showid not found for %s" % show_name)
            IdCache().set_id(-1, show_name)
    else:
        log.warning("Out of API calls")
        return None

    if show_id:
        log.debug("Showid from api %s" % show_id)
        IdCache().set_id(show_id, show_name)
        log.info("%s added to cache with %s" % (show_name, show_id))
        return int(show_id)


def get_imdb_info(title, year=None, force_search=False):
    imdb_id = None
    name = title
    if year:
        name += " (" + str(year) + ")"
    log.debug("Getting imdb info for %s" % name)
    # Skip search in namemapping and id cache when force_search = True
    if not force_search:
        # TODO: include namemapping
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
                    log.debug("Imdb id from api %s" % imdb_id)
                    ImdbIdCache().set_id(imdb_id, title, year)
                    log.info("%s added to cache with %s" % (name, imdb_id))
                    break
                else:
                    continue
            # If no year is present, take the first match
            else:
                imdb_id = movie.movieID
                log.debug("Imdb id from api %s" % imdb_id)
                ImdbIdCache.set_id(imdb_id, title, year)
                log.info("%s added to cache with %s" % (name, imdb_id))
                year = data['year']
    if not imdb_id:
        log.error("Imdb id not found for %s (%s)" % title, year)
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


def display_name(item_dict, uppercase=False):
    name = item_dict['title']
    if item_dict['year']:
        name += " (" + str(item_dict['year']) + ")"
    if uppercase:
        name = name.upper()
    return name


def convert_timestamp(datestring):
    date_object = time.strptime(datestring, "%Y-%m-%d %H:%M:%S")
    return "%02i-%02i-%i %02i:%02i:%02i " % (
        date_object[2], date_object[1], date_object[0], date_object[3], date_object[4], date_object[5],)


def convert_timestamp_table(datestring):
    #used for the sorted table
    date_object = time.strptime(datestring, "%Y-%m-%d %H:%M:%S")
    return "%04i%02i%02i%02i%02i%02i" % (
        date_object[0], date_object[1], date_object[2], date_object[3], date_object[4], date_object[5])


def check_mobile_device(req_useragent):
    for MUA in autosubliminal.MOBILEUSERAGENTS:
        if MUA.lower() in req_useragent.lower():
            return True
    return False


def get_wanted_queue_lock():
    if autosubliminal.WANTEDQUEUELOCK:
        log.warning("Skipping, cannot get a wanted queue lock because another threat is using the queues")
        return False
    else:
        log.debug("Getting wanted queue lock")
        autosubliminal.WANTEDQUEUELOCK = True
        return True


def release_wanted_queue_lock():
    if autosubliminal.WANTEDQUEUELOCK:
        log.debug("Releasing wanted queue lock")
        autosubliminal.WANTEDQUEUELOCK = False
    else:
        log.warning("Trying to release a wanted queue lock while there is no lock")


# Thanks to: http://stackoverflow.com/questions/1088392/sorting-a-python-list-by-key-while-checking-for-string-or-float
def get_attr(name):
    def inner_func(o):
        try:
            rv = float(o[name])
        except ValueError:
            rv = o[name]
        return rv

    return inner_func