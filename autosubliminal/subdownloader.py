import logging
import os
import time

import subliminal

import autosubliminal
from autosubliminal import utils
from autosubliminal.db import LastDownloads
from autosubliminal.notify import Notifier
from autosubliminal.postprocessor import PostProcessor

log = logging.getLogger(__name__)


class SubDownloader(object):
    """
    Handles the downloaded subtitle.
    It stores the subtitle at the right location with the right name and handle the notifications and post processing.
    """

    def __init__(self, download_item):
        log.debug("Download item: %r" % download_item)
        self.download_item = download_item
        self.keys = download_item.keys()

    def run(self):
        """
        Save the subtitle with further handling
        """

        log.info("Running sub downloader")

        # Check download_item
        if 'video' in self.keys and 'subtitles' in self.keys and 'single' in self.keys:

            # Save the subtitle
            video = self.download_item['video']
            subliminal.save_subtitles(video, self.download_item['subtitles'][video], self.download_item['single'])

            # Add download_item to last downloads
            self.download_item['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
            LastDownloads().set_last_downloads(self.download_item)

            # Notify
            if autosubliminal.NOTIFY:
                Notifier(self.download_item).notify()

            # Post processing
            if autosubliminal.POSTPROCESS:
                PostProcessor(self.download_item).run()

            # Show success message
            language = self.download_item['downlang']
            name = utils.display_name(self.download_item)
            provider = self.download_item['provider']
            utils.add_notification_message(
                "Downloaded '" + language + "' subtitle for '" + name + "' from '" + provider + "'", 'success')

            return True
        else:
            log.error("Download item is not complete, skipping")
            return False

    def save(self):
        """
        Save the subtitle without further handling
        """

        log.info("Saving subtitle")

        # Check download_item
        if 'video' in self.keys and 'subtitles' in self.keys and 'single' in self.keys:
            # Save the subtitle
            video = self.download_item['video']
            subliminal.save_subtitles(video, self.download_item['subtitles'][video], self.download_item['single'])
            return True
        else:
            log.error("Download item is not complete, skipping")
            return False

    def post_process(self):
        """
        Execute post process logic only
        """

        log.debug("Post procesing subtitle")

        # Add download_item to last downloads
        self.download_item['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
        LastDownloads().set_last_downloads(self.download_item)

        # Notify
        if autosubliminal.NOTIFY:
            Notifier(self.download_item).notify()

        # Post processing
        result = True
        if autosubliminal.POSTPROCESS:
            result = PostProcessor(self.download_item).run()

        return result
