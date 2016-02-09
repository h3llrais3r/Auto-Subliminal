import logging
import os
import re
import time

from babelfish import Error as BabelfishError, Language
from enzyme.mkv import MKV
from operator import itemgetter

import subliminal

import autosubliminal
from autosubliminal import utils, fileprocessor
from autosubliminal.scheduler import Process

log = logging.getLogger(__name__)


class DiskScanner(Process):
    """
    Scan the specified path for episodes and movies with missing subtitles.
    If found, add these episodes and movies to the WANTEDQUEUE.
    """

    def __init__(self):
        super(DiskScanner, self).__init__()

    def run(self):
        log.info("Starting round of local disk checking at %s" % autosubliminal.VIDEOPATHS)

        # Get wanted queue lock
        if not utils.get_wanted_queue_lock():
            return False

        # Check if a directory exists to scan
        one_dir_exists = False
        for videodir in autosubliminal.VIDEOPATHS:
            if os.path.exists(videodir):
                one_dir_exists = True
            else:
                # In case of a network path, it's possible that the path is not directly found -> sleep and check again
                time.sleep(15)
                if os.path.exists(videodir):
                    one_dir_exists = True
        if not one_dir_exists:
            # Release wanted queue lock
            log.error("None of the configured video paths (%s) exist, aborting..." % autosubliminal.VIDEOPATHS)
            utils.release_wanted_queue_lock()
            return True

        # Reset the wanted queue before walking through paths and adding the wanted items
        autosubliminal.WANTEDQUEUE = []
        for videodir in autosubliminal.VIDEOPATHS:
            try:
                walk_dir(videodir)
            except Exception, e:
                log.error("Could not scan the video path (%s), skipping..." % videodir)
                log.exception(e)

        # Release wanted queue lock
        log.info("Finished round of local disk checking")
        utils.release_wanted_queue_lock()

        return True


def walk_dir(path):
    log.info("Scanning video path: %s" % path)
    for dirname, dirnames, filenames in os.walk(os.path.join(path)):
        log.debug("Directory: %s" % dirname)

        # Check folders to be skipped
        if autosubliminal.SKIPHIDDENDIRS and os.path.split(dirname)[1].startswith(u'.'):
            continue
        if re.search('_unpack_', dirname, re.IGNORECASE):
            log.debug("Found a unpack directory, skipping")
            continue
        if re.search('_failed_', dirname, re.IGNORECASE):
            log.debug("Found a failed directory, skipping")
            continue

        # Populate WANTEDQUEUE
        for filename in filenames:
            log.debug("File: %s" % filename)
            root, ext = os.path.splitext(filename)

            if ext and ext in subliminal.video.VIDEO_EXTENSIONS:
                # Skip 'sample' videos
                if re.search('sample', filename, re.IGNORECASE):
                    continue

                # Check if there are missing subtitle languages for the video file
                languages = check_missing_subtitle_languages(dirname, filename)
                if len(languages) > 0:
                    log.debug("File is missing a subtitle")
                    wanted_item = fileprocessor.process_file(dirname, filename)
                    if wanted_item:

                        # Episode wanted
                        if wanted_item['type'] == 'episode':
                            title = wanted_item['title']
                            season = wanted_item['season']
                            episode = wanted_item['episode']
                            if utils.skip_show(title, season, episode):
                                log.info("Skipping %s - Season %s Episode %s" % (title, season, episode))
                                continue
                            log.info("Subtitle(s) wanted for %s and added to wantedQueue" % filename)
                            wanted_item['originalFileLocationOnDisk'] = os.path.join(dirname, filename)
                            wanted_item['time'] = os.path.getctime(wanted_item['originalFileLocationOnDisk'])
                            wanted_item['timestamp'] = unicode(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(
                                wanted_item['time'])))
                            wanted_item['lang'] = languages
                            # TODO: refactor showid to tvdbid
                            wanted_item['showid'] = utils.get_show_id(title)
                            autosubliminal.WANTEDQUEUE.append(wanted_item)

                        # Movie wanted
                        elif wanted_item['type'] == 'movie':
                            title = wanted_item['title']
                            year = wanted_item['year']
                            if utils.skip_movie(title, year):
                                log.info("Skipping %s (%s)" % (title, year))
                                continue
                            log.info("Subtitle(s) wanted for %s and added to wantedQueue" % filename)
                            wanted_item['originalFileLocationOnDisk'] = os.path.join(dirname, filename)
                            wanted_item['time'] = os.path.getctime(wanted_item['originalFileLocationOnDisk'])
                            wanted_item['timestamp'] = unicode(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(
                                wanted_item['time'])))
                            wanted_item['lang'] = languages
                            wanted_item['imdbid'], wanted_item['year'] = utils.get_imdb_info(title, year)
                            autosubliminal.WANTEDQUEUE.append(wanted_item)
                        else:
                            log.error("Could not process the filename: %s" % filename)
                            continue
                    else:
                        log.error("Could not process the filename: %s" % filename)
                        continue

    # Sort WANTEDQUEUE
    autosubliminal.WANTEDQUEUE = sorted(autosubliminal.WANTEDQUEUE, key=itemgetter('time'), reverse=True)


def check_missing_subtitle_languages(dirname, filename):
    log.debug("Checking for missing subtitle")
    missing_subtitles = []
    # Check embedded subtitles
    embedded_subtitles = []
    if autosubliminal.SCANEMBEDDEDSUBS:
        embedded_subtitles = _get_embedded_subtitles(dirname, filename)
    # Check default language
    if autosubliminal.DEFAULTLANGUAGE:
        default_language = Language.fromietf(autosubliminal.DEFAULTLANGUAGE)
        # Check with or without alpha2 code suffix depending on configuration
        if autosubliminal.DEFAULTLANGUAGESUFFIX:
            srtfile = os.path.splitext(filename)[0] + u"." + autosubliminal.DEFAULTLANGUAGE + u".srt"
        else:
            srtfile = os.path.splitext(filename)[0] + u".srt"
        if not os.path.exists(os.path.join(dirname, srtfile)) and default_language not in embedded_subtitles:
            missing_subtitles.append(autosubliminal.DEFAULTLANGUAGE)
    # Check additional languages
    if autosubliminal.ADDITIONALLANGUAGES:
        # Always check with alpha2 code suffix for additional languages
        for language in autosubliminal.ADDITIONALLANGUAGES:
            additional_language = Language.fromietf(language)
            srtfile = os.path.splitext(filename)[0] + u"." + language + u".srt"
            if not os.path.exists(os.path.join(dirname, srtfile)) and additional_language not in embedded_subtitles:
                missing_subtitles.append(language)
    return missing_subtitles


def _get_embedded_subtitles(dirname, filename):
    """
    Based on subliminal.video.scan_video(...) but only keep the check for embedded subtitles
    """
    log.debug("Checking for embedded subtitle")
    embedded_subtitle_languages = set()
    try:
        path = os.path.join(dirname, filename)
        if filename.endswith('.mkv'):
            with open(path, 'rb') as f:
                mkv = MKV(f)

            # subtitle tracks
            if mkv.subtitle_tracks:
                for st in mkv.subtitle_tracks:
                    if st.language:
                        try:
                            embedded_subtitle_languages.add(Language.fromalpha3b(st.language))
                        except BabelfishError:
                            log.error('Embedded subtitle track language %r is not a valid language', st.language)
                            embedded_subtitle_languages.add(Language('und'))
                    elif st.name:
                        try:
                            embedded_subtitle_languages.add(Language.fromname(st.name))
                        except BabelfishError:
                            log.debug('Embedded subtitle track name %r is not a valid language', st.name)
                            embedded_subtitle_languages.add(Language('und'))
                    else:
                        embedded_subtitle_languages.add(Language('und'))
                log.debug('Found embedded subtitles %r with enzyme', embedded_subtitle_languages)
            else:
                log.debug('MKV has no subtitle track')
    except:
        log.exception('Parsing video metadata with enzyme failed')
    return embedded_subtitle_languages
