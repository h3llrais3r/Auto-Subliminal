import logging
import os

import babelfish
import subliminal
import subliminal.subtitle

import autosubliminal
from autosubliminal import utils, subdownloader

log = logging.getLogger(__name__)


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

            # Lets try to find a showid
            showid = utils.get_showid(title)

            # Skip this item when no showid
            if not showid:
                continue

            # Scan the video (disable scan for subtitles)
            # With subtitle scan enabled, enzyme looks inside for embedded subtitles
            # When an 'UND' subtitle language is found (f.e. Grimm.S03E04.720p.WEB-DL.DD5.1.H.264-ECI),
            # no other subtitles will be downloaded when using subliminal.download_best_subtitles(..., single=True)
            video = subliminal.scan_video(originalfile, subtitles=False, embedded_subtitles=False)

            # Check sub for each language
            for lang in langs[:]:
                language = babelfish.Language.fromietf(lang)
                if not language:
                    log.error("Invalid language '%s' specified" % lang)
                    continue

                # Determine if language alpha2 code suffix is needed in srt file name (f.e. <episode_name>.nl.srt)
                single = False
                if lang == autosubliminal.DEFAULTLANGUAGE and not autosubliminal.DEFAULTLANGUAGESUFFIX:
                    single = True

                # Download the best subtitle with min_score (without saving it in a file)
                videos = [video]
                languages = [language]
                subtitles = subliminal.download_best_subtitles(set(videos), set(languages),
                                                               providers=autosubliminal.SUBLIMINALPROVIDERLIST,
                                                               min_score=autosubliminal.MINMATCHSCORE,
                                                               hearing_impaired=autosubliminal.HEARINGIMPAIRED,
                                                               single=False)

                # Check if subtitle found
                if subtitles:
                    log.info("Download link: %s" % subtitles[video][0].page_link)

                    # Handle the donwload/post-download stuff
                    download_item = wanted_item.copy()
                    subtitle_path = subliminal.subtitle.get_subtitle_path(video.name, None if single else language)
                    download_item['destinationFileLocationOnDisk'] = subtitle_path
                    download_item['downloadLink'] = subtitles[video][0].page_link
                    download_item['downlang'] = lang
                    #TODO: Should be replaced with real subtitle name from download when subliminal provides it
                    #TODO: For now, just use name of the subtitle itself (not the real downloaded name)
                    download_item['subtitle'] = os.path.split(download_item['destinationFileLocationOnDisk'])[1][:-4]
                    download_item['provider'] = subtitles[video][0].provider_name
                    download_item['subtitles'] = subtitles
                    download_item['single'] = single

                    subdownloader.download_subtitle(download_item)

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
