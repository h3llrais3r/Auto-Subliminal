import logging
import time

import autosubliminal
from autosubliminal import notify
from autosubliminal.db import LastDownloads
from autosubliminal.postprocessor import PostProcessor
import subliminal

log = logging.getLogger(__name__)


def download_subtitle(download_dict):
    # Handle downloaded subtitle
    if 'destinationFileLocationOnDisk' in download_dict.keys() and 'downloadLink' in download_dict.keys():
        log.debug("Download dict seems ok. Dumping it for debug: %r" % download_dict)
        # Save it
        subliminal.save_subtitles(download_dict['subtitles'], single=True)
        download_dict['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
        LastDownloads().set_last_downloads(dict=download_dict)
        # Notify
        notify.notify(download_dict['downlang'], download_dict['destinationFileLocationOnDisk'],
                      download_dict["originalFileLocationOnDisk"], download_dict['provider'])
        # Post processing
        if autosubliminal.POSTPROCESSCMD:
            PostProcessor(autosubliminal.POSTPROCESSCMD, download_dict).run()
        return True
    else:
        log.error("No downloadLink or locationOnDisk found at download_item, skipping")
        return False