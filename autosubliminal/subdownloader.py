import logging
import time

import subliminal

import autosubliminal
from autosubliminal import utils
from autosubliminal.db import LastDownloads
from autosubliminal.notifiers import Notifier
from autosubliminal.postprocessor import PostProcessor

log = logging.getLogger(__name__)


class SubDownloader(object):
    """
    Handles the downloaded subtitle.
    It stores the subtitle at the right location with the right name and handle the notifications and post processing.
    """

    def __init__(self, download_item):
        log.debug("Download item: %r" % download_item)
        self._download_item = download_item
        self._keys = download_item.keys()

    def run(self):
        """
        Save the subtitle with further handling
        """

        log.info("Running sub downloader")

        # Save the subtitle
        if self.save():
            # Mark as downloaded
            self.mark_downloaded()

            # Post process
            self.post_process()

            # Show success message
            language = self._download_item['downlang']
            name = utils.display_name(self._download_item)
            provider = self._download_item['provider']
            utils.add_notification_message(
                "Downloaded '" + language + "' subtitle for '" + name + "' from '" + provider + "'", 'success')

    def save(self):
        """
        Save the subtitle
        """

        log.info("Saving subtitle")

        # Check download_item
        if 'video' in self._keys and 'subtitles' in self._keys and 'single' in self._keys:
            # Save the subtitle
            video = self._download_item['video']
            subliminal.save_subtitles(video, self._download_item['subtitles'][video], self._download_item['single'])
            return True
        else:
            log.error("Download item is not complete, skipping")
            return False

    def mark_downloaded(self):
        """
        Mark the subtitle as downloaded
        """

        log.debug("Marking subtitle as downloaded")

        # Add download_item to last downloads
        self._download_item['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
        LastDownloads().set_last_downloads(self._download_item)

        # Notify
        if autosubliminal.NOTIFY:
            Notifier(self._download_item).notify_download()

        return True

    def post_process(self):
        """
        Post process the subtitle
        """

        log.debug("Post processing subtitle")

        if autosubliminal.POSTPROCESS:

            # Individual processing: process after each subtitle download
            if autosubliminal.POSTPROCESSINDIVIDUAL:
                PostProcessor(self._download_item).run()

            # Global processing: only process when all subtitles are downloaded
            else:
                wanted_languages = self._download_item['languages'][:]
                downloaded_language = self._download_item['downlang']
                wanted_languages.remove(downloaded_language)
                if len(wanted_languages) == 0:
                    PostProcessor(self._download_item).run()

        return True
