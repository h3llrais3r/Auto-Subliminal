import logging
import time

import subliminal

import autosubliminal
from autosubliminal import notify
from autosubliminal.db import LastDownloads
from autosubliminal.postprocessor import PostProcessor

log = logging.getLogger(__name__)


def save_subtitle(download_item):
    keys = download_item.keys()

    # Handle downloaded subtitle
    if 'subtitles' in keys and 'single' in keys and 'destinationFileLocationOnDisk' in keys:
        log.debug("Download dict seems ok. Dumping it for debug: %r" % download_item)

        # Save the subtitle
        subliminal.save_subtitles(download_item['subtitles'], download_item['single'])
        download_item['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
        LastDownloads().set_last_downloads(dict=download_item)

        # Notify
        if autosubliminal.NOTIFY:
            notify.notify(download_item['downlang'], download_item['destinationFileLocationOnDisk'],
                          download_item["originalFileLocationOnDisk"], download_item['provider'])

        # Post processing
        if autosubliminal.POSTPROCESS and autosubliminal.POSTPROCESSCMD:
            PostProcessor(autosubliminal.POSTPROCESSUTF8ENCODING, autosubliminal.POSTPROCESSCMD, download_item).run()

        return True
    else:
        log.error("No subtitles or single or destinationFileLocationOnDisk found at download_item, skipping")
        return False
