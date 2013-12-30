import logging
import os

import subliminal
import babelfish

import autosubliminal
from autosubliminal import utils, subdownloader


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

        if autosubliminal.WANTEDQUEUELOCK:
            log.debug("Exiting, another threat is using the queues")
            return False
        else:
            autosubliminal.WANTEDQUEUELOCK = True

        for index, wanted_item in enumerate(autosubliminal.WANTEDQUEUE):
            title = wanted_item['title']
            season = wanted_item['season']
            episode = wanted_item['episode']
            originalfile = wanted_item['originalFileLocationOnDisk']
            langs = wanted_item['lang']

            if not utils.check_apicalls(use=True):
                log.warning("Out of api calls")
                break

            # This should map on the srt file names created by subliminal!
            if autosubliminal.SUBNL != "":
                srtfile = os.path.splitext(originalfile)[0] + u"." + autosubliminal.SUBNL + u".srt"
            else:
                srtfile = os.path.splitext(originalfile)[0] + u".srt"
            engsrtfile = os.path.splitext(originalfile)[0] + u"." + autosubliminal.SUBENG + u".srt"

            # Lets try to find a showid
            showid = utils.get_showid(title)

            # Skip this item when no showid
            if not showid:
                continue

            # Scan the video (disable scan for subtitles)
            # With subtitle scan enabled, enzyme looks inside for embedded subtitles (f.e. Grimm.S03E04.720p.WEB-DL.DD5.1.H.264-ECI)
            # When an 'UND' subtitle language is found, no other subtitles will be downloaded
            # The video will be filtered out in those cases in subliminal.download_best_subtitles
            # TODO: check if this is still the case with a newer version of subliminal
            video = subliminal.scan_video(originalfile, subtitles=False, embedded_subtitles=False)

            # Check sub for each language
            for lang in langs[:]:
                language = babelfish.Language.fromietf(lang)
                if not language:
                    log.error("Invalid language '%s' specified" % lang)
                    continue

                # Determine if language suffix is needed in srt file name (f.e. <episode_name>.nl.srt)
                # Default this is true, except when no prefix is defined for nl language
                single = False
                if language == language_nl:
                    if autosubliminal.SUBNL == "":
                        single = True

                # Download the best subtitle with min_score
                videos = [video]
                languages = [language]
                subtitles = subliminal.download_best_subtitles(set(videos), set(languages),
                                                               autosubliminal.SUBLIMINALPROVIDERLIST,
                                                               single=single, min_score=autosubliminal.MINMATCHSCORE)

                #TODO: review completely if support for multiple languages is needed
                # Check if subtitle found
                if subtitles:
                    log.info("A matching subtitle has been downloaded for the series %s - Season %s Episode %s" % (
                        title, season, episode))

                    # Handle the donwload/post-download stuff
                    if language == language_nl:
                        wanted_item['destinationFileLocationOnDisk'] = srtfile
                    elif language == language_en:
                        wanted_item['destinationFileLocationOnDisk'] = engsrtfile
                    download_item = wanted_item.copy()
                    #TODO: Should be replaced with the real donwnload link when subliminal provides it
                    #TODO: For now, just to mark it's already been downloaded
                    download_item['downloadLink'] = 'downloaded'
                    download_item['downlang'] = lang
                    #TODO: Should be replaced with real subtitle name from download when subliminal provides it
                    #TODO: For now, just use name of the subtitle itself (not the real downloaded name)
                    download_item['subtitle'] = os.path.split(wanted_item['destinationFileLocationOnDisk'])[1][:-4]

                    subdownloader.download_subtitle(download_item)

                    if lang == 'nl' and (autosubliminal.FALLBACKTOENG and not autosubliminal.DOWNLOADENG) and 'en' in langs:
                        log.debug(
                            'A dutch subtitle is found and fallback is true. Removing the english subtitle from the wantedlist.')
                        langs.remove('en')
                        langs.remove(lang)
                        if len(langs) == 0:
                            to_delete_wanted_queue.append(index)
                        break

                    langs.remove(lang)
                    if len(langs) == 0:
                        to_delete_wanted_queue.append(index)

        i = len(to_delete_wanted_queue) - 1
        while i >= 0:
            log.debug("Removed item from the wantedQueue at index %s" % to_delete_wanted_queue[i])
            autosubliminal.WANTEDQUEUE.pop(to_delete_wanted_queue[i])
            i -= 1

        log.debug("Finished round of subtitle checking")
        autosubliminal.WANTEDQUEUELOCK = False
        return True
