import logging
import os

import subliminal
import babelfish

import autosub
from autosub import utils, subdownloader


log = logging.getLogger(__name__)

language_nl = babelfish.Language.fromietf('nl')
language_en = babelfish.Language.fromietf('en')


class SubChecker():
    """
    Check for subtitles of episodes that are in the WANTEDQUEUE.
    """

    def run(self):
        log.debug("Starting round of subtitle checking")
        to_delete_wanted_queue = []

        if not utils.check_apicalls():
            log.warning("Out of api calls")
            return True

        if autosub.WANTEDQUEUELOCK:
            log.debug("Exiting, another threat is using the queues")
            return False
        else:
            autosub.WANTEDQUEUELOCK = True

        for index, wanted_item in enumerate(autosub.WANTEDQUEUE):
            title = wanted_item['title']
            season = wanted_item['season']
            episode = wanted_item['episode']
            originalfile = wanted_item['originalFileLocationOnDisk']
            languages = wanted_item['lang']

            if not utils.check_apicalls():
                # Make sure that we are allow to connect to bierdopje
                log.warning("checkSub: out of api calls")
                break

            if autosub.SUBNL != "":
                srtfile = os.path.splitext(originalfile)[0] + u"." + autosub.SUBNL + u".srt"
            else:
                srtfile = os.path.splitext(originalfile)[0] + u".srt"

            engsrtfile = os.path.splitext(originalfile)[0] + u"." + autosub.SUBENG + u".srt"

            # Lets try to find a showid
            showid = utils.get_showid(title)

            # Skip this item when no showid
            if not showid:
                continue

            # Scan the video
            video = subliminal.scan_video(originalfile)

            # Check sub for each language
            tmp_languages = languages[:]
            for tmp_language in tmp_languages:
                language = babelfish.Language.fromietf(tmp_language)
                if not language:
                    log.error("Invalid language '%s' specified" % tmp_language)
                    continue

                # Download the best subtitle with min_score
                subtitles = subliminal.download_best_subtitles({video}, {language}, autosub.SUBLIMINALPROVIDERLIST,
                                                               single=True, min_score=autosub.MINMATCHSCORE)

                #TODO: review completely if support for multiple languages is needed
                # Check if subtitle found
                if subtitles:
                    log.info("A matching subtitle has been downloaded for the series %s - Season %s Episode %s" % (
                        title, season, episode))

                    # Handle the donwload/post-download stuff
                    subtitle = subtitles[video][0]
                    if language == language_nl:
                        wanted_item['destinationFileLocationOnDisk'] = srtfile
                    elif language == language_en:
                        wanted_item['destinationFileLocationOnDisk'] = engsrtfile
                    download_item = wanted_item.copy()
                    #TODO: Should be replaced with the real donwnload link when subliminal provides it
                    #TODO: For now, just to mark it's already been downloaded
                    download_item['downloadLink'] = 'downloaded'
                    download_item['downlang'] = tmp_language
                    #TODO: Should be replaced with real subtitle name from download when subliminal provides it
                    #TODO: For now, just use name of the subtitle itself (not the real downloaded name)
                    download_item['subtitle'] = os.path.split(wanted_item['destinationFileLocationOnDisk'])[1][:-4]

                    subdownloader.download_subtitle(download_item)

                    if language == language_nl and (
                            autosub.FALLBACKTOENG and not autosub.DOWNLOADENG) and language_en in languages:
                        log.debug(
                            'A dutch subtitle is found and fallback is true. Removing the english subtitle from the wantedlist.')
                        languages.remove('en')
                        languages.remove(tmp_language)
                        if len(languages) == 0:
                            to_delete_wanted_queue.append(index)
                        break

                    languages.remove(tmp_language)
                    if len(languages) == 0:
                        to_delete_wanted_queue.append(index)

        i = len(to_delete_wanted_queue) - 1
        while i >= 0:
            log.debug("Removed item from the wantedQueue at index %s" % to_delete_wanted_queue[i])
            autosub.WANTEDQUEUE.pop(to_delete_wanted_queue[i])
            i -= 1

        log.debug("Finished round of subtitle checking")
        autosub.WANTEDQUEUELOCK = False
        return True
