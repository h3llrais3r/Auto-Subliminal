import logging
import os
import re
import time
from operator import itemgetter

import langdetect
import pysrt
import subliminal
from babelfish import Error as BabelfishError, Language
from enzyme.mkv import MKV

import autosubliminal
from autosubliminal import utils, fileprocessor
from autosubliminal.indexer import MovieIndexer, ShowIndexer
from autosubliminal.scheduler import ScheduledProcess

log = logging.getLogger(__name__)


class DiskScanner(ScheduledProcess):
    """
    Disk scanner. Scan the specified path for episodes and movies with missing subtitles.
    If found, add these episodes and movies to the WANTEDQUEUE.
    """

    def __init__(self):
        super(DiskScanner, self).__init__()

    def run(self, force_run):
        log.info("Starting round of local disk checking at %s" % autosubliminal.VIDEOPATHS)

        # Get wanted queue lock
        if not utils.get_wanted_queue_lock():
            return False

        # Show info message (only when run was forced manually)
        if force_run:
            utils.add_notification_message("Scanning disk...")

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
                            wanted_item['videopath'] = os.path.join(dirname, filename)
                            wanted_item['timestamp'] = unicode(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(
                                os.path.getctime(wanted_item['videopath']))))
                            wanted_item['languages'] = languages
                            wanted_item['tvdbid'] = ShowIndexer().get_tvdb_id(title)
                            autosubliminal.WANTEDQUEUE.append(wanted_item)

                        # Movie wanted
                        elif wanted_item['type'] == 'movie':
                            title = wanted_item['title']
                            year = wanted_item['year']
                            if utils.skip_movie(title, year):
                                log.info("Skipping %s (%s)" % (title, year))
                                continue
                            log.info("Subtitle(s) wanted for %s and added to wantedQueue" % filename)
                            wanted_item['videopath'] = os.path.join(dirname, filename)
                            wanted_item['timestamp'] = unicode(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(
                                os.path.getctime(wanted_item['videopath']))))
                            wanted_item['languages'] = languages
                            wanted_item['imdbid'], wanted_item['year'] = MovieIndexer().get_imdb_id_and_year(title, year)
                            autosubliminal.WANTEDQUEUE.append(wanted_item)
                        else:
                            log.error("Could not process the filename: %s" % filename)
                            continue

    # Sort WANTEDQUEUE
    autosubliminal.WANTEDQUEUE = sorted(autosubliminal.WANTEDQUEUE, key=itemgetter('timestamp'), reverse=True)


def check_missing_subtitle_languages(dirname, filename):
    log.debug("Checking for missing subtitle")
    missing_subtitles = []
    # Check embedded subtitles
    embedded_subtitles = []
    if autosubliminal.SCANEMBEDDEDSUBS:
        embedded_subtitles = _get_embedded_subtitles(dirname, filename)
    # Check default language
    detect_language = False
    if autosubliminal.DEFAULTLANGUAGE:
        default_language = Language.fromietf(autosubliminal.DEFAULTLANGUAGE)
        # Check with or without alpha2 code suffix depending on configuration
        if autosubliminal.DEFAULTLANGUAGESUFFIX:
            srt_file = os.path.splitext(filename)[0] + u"." + autosubliminal.DEFAULTLANGUAGE + u".srt"
        else:
            srt_file = os.path.splitext(filename)[0] + u".srt"
            detect_language = autosubliminal.DETECTINVALIDSUBLANGUAGE
        srt_path = os.path.join(dirname, srt_file)
        sub_exists = os.path.exists(srt_path)
        if not sub_exists and default_language not in embedded_subtitles:
            missing_subtitles.append(autosubliminal.DEFAULTLANGUAGE)
        elif sub_exists and detect_language:
            detected_language = _detect_subtitle_language(srt_path)
            if detected_language and detected_language != default_language:
                log.warning("Detected an invalid subtitle language: %s" % detected_language)
                # Remove the subtitle with an invalid detected language in order to search for a new one
                if _delete_subtitle_file(srt_path, detected_language):
                    missing_subtitles.append(autosubliminal.DEFAULTLANGUAGE)
            else:
                log.debug("No invalid subtitle language detected")
    # Check additional languages
    if autosubliminal.ADDITIONALLANGUAGES:
        # Always check with alpha2 code suffix for additional languages
        for language in autosubliminal.ADDITIONALLANGUAGES:
            additional_language = Language.fromietf(language)
            srt_file = os.path.splitext(filename)[0] + u"." + language + u".srt"
            if not os.path.exists(os.path.join(dirname, srt_file)) and additional_language not in embedded_subtitles:
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


def _detect_subtitle_language(srt_path):
    log.debug("Detecting subtitle language")
    # Load srt file (try first iso-8859-1 with fallback to utf-8)
    try:
        subtitle = pysrt.open(path=srt_path, encoding='iso-8859-1')
    except:
        try:
            subtitle = pysrt.open(path=srt_path, encoding='utf-8')
        except:
            # If we can't read it, we can't detect, so return
            return
    # Read first 5 subtitle lines to determine the language
    if len(subtitle) >= 5:
        text = ""
        for sub in subtitle[0:5]:
            text += sub.text
        # Detect the language with highest probability and return it if it's more than the required minimum probability
        detected_languages = langdetect.detect_langs(text)
        log.debug("Detected subtitle language(s): %s", detected_languages)
        if len(detected_languages) > 0:
            # Get first detected language (list is sorted according to probability, highest first)
            detected_language = detected_languages[0]
            language_probability = detected_language.prob
            if language_probability >= autosubliminal.DETECTEDLANGUAGEPROBABILITY:
                log.debug("Probability of detected subtitle language accepted: %s" % detected_language)
                return Language.fromietf(detected_language.lang)
            else:
                log.debug("Probability of detected subtitle language too low: %s" % detected_language)
    return


def _delete_subtitle_file(subtitle_path, language):
    try:
        log.warning("Deleting subtitle with invalid language: %s [%s]" % (subtitle_path, language))
        os.remove(subtitle_path)
        return True
    except Exception, e:
        log.error("Unable to delete subtitle with invalid language: %s [%s]" % (subtitle_path, language))
        log.error("Exception: %s" % e)
        return False
