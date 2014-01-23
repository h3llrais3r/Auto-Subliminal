# TODO: Use subliminal download_best_subtitles here, currently it's used directly in the subchecker.py

import logging
import os
import time
import tempfile

import autosubliminal
from autosubliminal import utils, notify
from autosubliminal.db import LastDownloads
from autosubliminal.postprocessor import PostProcessor

log = logging.getLogger(__name__)


#TODO: refactor this when subliminal has split up search for subtitle and dnwload subtitle (should be from next version)
def download_subtitle(download_dict):
    # Before we download, lest check if there are enough APICalls left
    if not utils.check_apicalls(use=True):
        log.error("Out of api calls")
        return False

    if 'destinationFileLocationOnDisk' in download_dict.keys() and 'downloadLink' in download_dict.keys():
        log.debug("Download dict seems ok. Dumping it for debug: %r" % download_dict)

        download_dict['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')

        LastDownloads().set_last_downloads(dict=download_dict)

        notify.notify(download_dict['downlang'], download_dict['destinationFileLocationOnDisk'],
                      download_dict["originalFileLocationOnDisk"], download_dict['provider'])

        if autosubliminal.POSTPROCESSCMD:
            PostProcessor(autosubliminal.POSTPROCESSCMD, download_dict).run()

        return True

    else:
        log.error("No downloadLink or locationOnDisk found at download_item, skipping")
        return False


def download_subtitle_old(download_dict):
    # Before we download, lest check if there are enough APICalls left
    if not utils.check_apicalls():
        log.error("Out of api calls")
        return False

    log.debug("Starting DownloadSub function")

    if 'destinationFileLocationOnDisk' in download_dict.keys() and 'downloadLink' in download_dict.keys():
        log.debug("downloadSubs: Download dict seems ook. Dumping it for debug: %r" % download_dict)
        destsrt = download_dict['destinationFileLocationOnDisk']
        download_link = download_dict['downloadLink']

        try:
            #bierdopjeapi = API(downloadLink)
            log.debug("Trying to download the following subtitle %s" % download_link)
        except:
            log.error("The server returned an error for request %s" % download_link)
            return False

        destdir = os.path.split(destsrt)[0] #make sure the download dest is there
        if not os.path.exists(destdir):
            log.debug("checkSubs: no destination directory %s" % destdir)
            return False
        elif not os.path.lexists(destdir):
            log.debug("checkSubs: no destination directory %s" % destdir)
            return False

        # Lets first download the subtitle to a tempfile and then write it to the destination
        tmpfile = tempfile.TemporaryFile('w+b')

        try:
            log.debug("Get subtitle")
            # if bierdopjeapi.resp:
            #     tmpfile.write(bierdopjeapi.resp.read())
            #     tmpfile.write('\n') #If subtitle is exclusive for bierdopje, they add some footer which doesn't have a line feed >.>
            # bierdopjeapi.close()
        except:
            log.error(
                "Error while downloading subtitle %s. Common cases: bierdopje.com not reachable or the subtitle is corrupt on bierdopje.com. " % destsrt)
            return False

        tmpfile.seek(0) #Return to the start of the file
        try:
            log.debug("Trying to save the subtitle to the filesystem")
            open(destsrt, 'wb').write(tmpfile.read())
            tmpfile.close()
        except IOError:
            log.error("Could not write subtitle file. Permission denied? Enough diskspace?")
            tmpfile.close()
            return False

        log.info("DOWNLOADED: %s" % destsrt)

        download_dict['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')

        LastDownloads().set_last_downloads(dict=download_dict)

        notify.notify(download_dict['downlang'], destsrt, download_dict["originalFileLocationOnDisk"])

        if autosubliminal.POSTPROCESSCMD:
            postprocesscmdconstructed = autosubliminal.POSTPROCESSCMD + ' "' + download_dict[
                "destinationFileLocationOnDisk"] + '" "' + download_dict["originalFileLocationOnDisk"] + '"'
            log.debug("Postprocess: running %s" % postprocesscmdconstructed)
            log.info("Running PostProcess")
            postprocessoutput, postprocesserr = utils.run_cmd(postprocesscmdconstructed)
            if postprocesserr:
                log.error("PostProcess: %s" % postprocesserr)
            log.debug("PostProcess Output:% s" % postprocessoutput)

        return True

    else:
        log.error("No downloadLink or locationOnDisk found at downloadItem, skipping")
        return False
