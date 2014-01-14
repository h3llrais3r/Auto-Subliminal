import logging
import os
import re
import time

import autosubliminal
from autosubliminal import utils, fileprocessor

log = logging.getLogger(__name__)


def walk_dir(path):
    for dirname, dirnames, filenames in os.walk(os.path.join(path)):
        log.info("Scanning video path: %s" % path)
        log.debug("Directory name: %s" % dirname)
        if re.search('_unpack_', dirname, re.IGNORECASE):
            log.debug("Found a unpack directory, skipping")
            continue

        if autosubliminal.SKIPHIDDENDIRS and os.path.split(dirname)[1].startswith(u'.'):
            continue

        if re.search('_failed_', dirname, re.IGNORECASE):
            log.debug("Found a failed directory, skipping")
            continue

        for filename in filenames:
            splitname = filename.split(".")
            ext = splitname[len(splitname) - 1]

            if ext in ('avi', 'mkv', 'wmv', 'ts', 'mp4'):
                if re.search('sample', filename):
                    continue

                # What subtitle files should we expect?

                if autosubliminal.SUBNL != "":
                    srtfile = os.path.splitext(filename)[0] + u"." + autosubliminal.SUBNL + u".srt"
                else:
                    srtfile = os.path.splitext(filename)[0] + u".srt"

                srtfileeng = os.path.splitext(filename)[0] + u"." + autosubliminal.SUBENG + u".srt"

                if not os.path.exists(os.path.join(dirname, srtfile)) or (
                        not os.path.exists(os.path.join(dirname, srtfileeng)) and autosubliminal.DOWNLOADENG):
                    log.debug("File %s is missing a subtitle" % filename)
                    lang = []
                    filename_results = fileprocessor.process_filename(os.path.splitext(filename)[0],
                                                                      os.path.splitext(filename)[1])
                    if 'title' in filename_results.keys():
                        if 'season' in filename_results.keys():
                            if 'episode' in filename_results.keys():
                                title = filename_results['title']
                                season = filename_results['season']
                                episode = filename_results['episode']

                                if utils.skip_show(title, season, episode):
                                    log.debug("SkipShow returned True")
                                    log.info("Skipping %s - Season %s Episode %s" % (title, season, episode))
                                    continue
                                log.info("Dutch subtitle wanted for %s and added to wantedQueue" % filename)
                                filename_results['originalFileLocationOnDisk'] = os.path.join(dirname, filename)
                                filename_results['timestamp'] = unicode(time.strftime('%Y-%m-%d %H:%M:%S',
                                                                                      time.localtime(os.path.getctime(
                                                                                          filename_results[
                                                                                              'originalFileLocationOnDisk']))))
                                if not os.path.exists(os.path.join(dirname, srtfile)):
                                    lang.append('nl')
                                if not os.path.exists(os.path.join(dirname, srtfileeng)) and (
                                        autosubliminal.FALLBACKTOENG or autosubliminal.DOWNLOADENG):
                                    lang.append('en')

                                filename_results['lang'] = lang
                                autosubliminal.WANTEDQUEUE.append(filename_results)

                            else:
                                log.error("Could not process the filename properly filename: %s" % filename)
                                continue
                        else:
                            log.error("Could not process the filename properly filename: %s" % filename)
                            continue
                    else:
                        log.error("Could not process the filename properly filename: %s" % filename)
                        continue


class DiskScanner():
    """
    Scan the specified path for episodes without Dutch or (if wanted) English subtitles.
    If found add these Dutch or English subtitles to the WANTEDQUEUE.
    """

    def run(self):
        log.debug("Starting round of local disk checking at %s" % autosubliminal.VIDEOPATHS)
        if autosubliminal.WANTEDQUEUELOCK:
            log.debug("Exiting, another threat is using the queues")
            return False
        else:
            autosubliminal.WANTEDQUEUELOCK = True
        autosubliminal.WANTEDQUEUE = []

        one_dir_exists = False
        for videodir in autosubliminal.VIDEOPATHS:
            if os.path.exists(videodir):
                one_dir_exists = True
        if not one_dir_exists:
            log.error("None of the configured video paths (%s) exist, aborting..." % autosubliminal.VIDEOPATHS)
            autosubliminal.WANTEDQUEUELOCK = False
            return True

        try:
            for videodir in autosubliminal.VIDEOPATHS:
                walk_dir(videodir)
        except:
            for videodir in autosubliminal.VIDEOPATHS:
                walk_dir(str(videodir))

        log.debug("Finished round of local disk checking")
        autosubliminal.WANTEDQUEUELOCK = False
        return True


