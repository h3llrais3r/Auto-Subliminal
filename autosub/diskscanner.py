import logging
import os
import re
import time

import autosub
from autosub import utils, fileprocessor

log = logging.getLogger(__name__)


def walk_dir(path):
    for dirname, dirnames, filenames in os.walk(os.path.join(path)):
        log.debug("Directory name: %s" % dirname)
        if re.search('_unpack_', dirname, re.IGNORECASE):
            log.debug("Found a unpack directory, skipping")
            continue

        if autosub.SKIPHIDDENDIRS and os.path.split(dirname)[1].startswith(u'.'):
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

                if autosub.SUBNL != "":
                    srtfile = os.path.splitext(filename)[0] + u"." + autosub.SUBNL + u".srt"
                else:
                    srtfile = os.path.splitext(filename)[0] + u".srt"

                srtfileeng = os.path.splitext(filename)[0] + u"." + autosub.SUBENG + u".srt"

                if not os.path.exists(os.path.join(dirname, srtfile)) or (
                        not os.path.exists(os.path.join(dirname, srtfileeng)) and autosub.DOWNLOADENG):
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
                                        autosub.FALLBACKTOENG or autosub.DOWNLOADENG):
                                    lang.append('en')

                                filename_results['lang'] = lang
                                autosub.WANTEDQUEUE.append(filename_results)

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
        log.debug("Starting round of local disk checking at %s" % autosub.ROOTPATH)
        if autosub.WANTEDQUEUELOCK:
            log.debug("Exiting, another threat is using the queues")
            return False
        else:
            autosub.WANTEDQUEUELOCK = True
        autosub.WANTEDQUEUE = []

        if not os.path.exists(autosub.ROOTPATH):
            log.error("Root path does %s not exists, aborting..." % autosub.ROOTPATH)
            autosub.WANTEDQUEUELOCK = False
            return True

        try:
            walk_dir(autosub.ROOTPATH)
        except:
            walk_dir(str(autosub.ROOTPATH))

        log.debug("Finished round of local disk checking")
        autosub.WANTEDQUEUELOCK = False
        return True


