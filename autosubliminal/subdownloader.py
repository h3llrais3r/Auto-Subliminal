import logging
import time

import subliminal

import autosubliminal
from autosubliminal import notify
from autosubliminal.db import LastDownloads
from autosubliminal.postprocessor import PostProcessor

log = logging.getLogger(__name__)


def download_subtitle(download_dict):
    # Handle downloaded subtitle
    if 'subtitles' in download_dict.keys() and 'single' in download_dict.keys() and 'destinationFileLocationOnDisk' in download_dict.keys():
        log.debug("Download dict seems ok. Dumping it for debug: %r" % download_dict)
        # Save
        subliminal.save_subtitles(download_dict['subtitles'], download_dict['single'])
        download_dict['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
        LastDownloads().set_last_downloads(dict=download_dict)
        # Notify
        if autosubliminal.NOTIFY:
            notify.notify(download_dict['downlang'], download_dict['destinationFileLocationOnDisk'],
                          download_dict["originalFileLocationOnDisk"], download_dict['provider'])
            # Post processing
        if autosubliminal.POSTPROCESS and autosubliminal.POSTPROCESSCMD:
            PostProcessor(autosubliminal.POSTPROCESSCMD, download_dict, encoding='utf-8').run()
        return True
    else:
        log.error("No downloadLink or locationOnDisk found at download_item, skipping")
        return False
