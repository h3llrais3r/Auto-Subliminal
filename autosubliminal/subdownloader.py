import logging
import time

import subliminal

import autosubliminal
from autosubliminal.db import LastDownloads
from autosubliminal.notify import Notifier
from autosubliminal.postprocessor import PostProcessor

log = logging.getLogger(__name__)


class SubDownloader():
    """
    Handles the downloaded subtitle.
    It stores the subtitle at the right location with the right name and handle the notifications and post processing.
    """

    def __init__(self, download_item):
        log.debug("Download item: %r" % download_item)
        self.dowload_item = download_item
        self.keys = download_item.keys()

    def run(self):
        """
        Save the subtitle with further handling
        """

        # Check download_item
        if 'subtitles' in self.keys and 'single' in self.keys:

            # Save the subtitle
            subliminal.save_subtitles(self.dowload_item['subtitles'], self.dowload_item['single'])

            # Add download_item to last downloads
            self.dowload_item['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
            LastDownloads().set_last_downloads(self.dowload_item)

            # Notify
            if autosubliminal.NOTIFY:
                Notifier(self.dowload_item).notify()

            # Post processing
            if autosubliminal.POSTPROCESS and autosubliminal.POSTPROCESSCMD:
                PostProcessor(autosubliminal.POSTPROCESSUTF8ENCODING, autosubliminal.POSTPROCESSCMD,
                              self.dowload_item).run()

            return True
        else:
            log.error("Download item is not complete, skipping")
            return False

    def save(self):
        """
        Save the subtitle without further handling
        """

        # Check download_item
        if 'subtitles' in self.keys and 'single' in self.keys:
            # Save the subtitle
            subliminal.save_subtitles(self.dowload_item['subtitles'], self.dowload_item['single'])
            return True
        else:
            log.error("Download item is not complete, skipping")
            return False

    def post_process(self):
        """
        Execute post process logic only
        """

        result = True

        # Add download_item to last downloads
        self.dowload_item['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
        LastDownloads().set_last_downloads(self.dowload_item)

        # Notify
        if autosubliminal.NOTIFY:
            Notifier(self.dowload_item).notify()

        # Post processing
        if autosubliminal.POSTPROCESS and autosubliminal.POSTPROCESSCMD:
            result = PostProcessor(autosubliminal.POSTPROCESSUTF8ENCODING, autosubliminal.POSTPROCESSCMD,
                                   self.dowload_item).run()

        return result