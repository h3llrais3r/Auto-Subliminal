# Autosub Db.py - http://code.google.com/p/auto-sub/
#
# The Autosub checkSub module
#

import logging
import os

# Autosub specific modules
import autosub.Bierdopje
import autosub.Helpers as Helpers

import subliminal
import babelfish

# Settings
log = logging.getLogger(__name__)

language_nl = babelfish.Language.fromietf('nl')
language_en = babelfish.Language.fromietf('en')

class checkSub():
    """
    Check the Bierdopje API for subtitles of episodes that are in the WANTEDQUEUE.
    If the subtitles are found, call DownloadSub
    """
    def run(self):
        log.debug("checkSub: Starting round of checkSub")
        toDelete_wantedQueue = []

        if not autosub.Helpers.checkAPICalls():
            log.warning("checkSub: out of api calls")
            return True

        if autosub.WANTEDQUEUELOCK:
            log.debug("checkSub: Exiting, another threat is using the queues")
            return False
        else:
            autosub.WANTEDQUEUELOCK = True
        
        for index, wantedItem in enumerate(autosub.WANTEDQUEUE):
            title = wantedItem['title']
            season = wantedItem['season']
            episode = wantedItem['episode']
            originalfile = wantedItem['originalFileLocationOnDisk']
            languages = wantedItem['lang']

            if not autosub.Helpers.checkAPICalls():
                #Make sure that we are allow to connect to bierdopje
                log.warning("checkSub: out of api calls")
                break
            
            if autosub.SUBNL != "":
                srtfile = os.path.splitext(originalfile)[0] + u"." + autosub.SUBNL + u".srt"
            else:
                srtfile = os.path.splitext(originalfile)[0] + u".srt"

            engsrtfile = os.path.splitext(originalfile)[0] + u"." + autosub.SUBENG + u".srt"

            #lets try to find a showid
            showid = Helpers.getShowid(title)

            #no showid? skip this item
            if not showid:
                continue
            
            #scan video
            video = subliminal.video.scan_video(originalfile)

            #check sub for each language
            tmpLanguages = languages[:]
            for tmpLanguage in tmpLanguages:
                language = babelfish.Language.fromietf(tmpLanguage)
                if not language:
                    log.error("checkSub: invalid language '%s' specified" % tmpLanguage)
                    continue;

                #download best subtitle with min_score
                subtitles = subliminal.api.download_best_subtitles(set([video]), set([language]), autosub.SUBLIMINALPROVIDERLIST, min_score=autosub.MINMATCHSCORE)

                #TODO: review completely if support for multiple languages is needed
                #check if subtitle found
                if subtitles:
                    log.info("checkSub: A matching subtitle has been downloaded for the series %s - Season %s Episode %s" % (title, season, episode))
                    if language == language_nl and (autosub.FALLBACKTOENG and not autosub.DOWNLOADENG) and language_en in languages:
                        log.debug('checkSub: We found a dutch subtitle and fallback is true. Removing the english subtitle from the wantedlist.')
                        languages.remove('en')
                        languages.remove(tmpLanguage)
                        if len(languages) == 0:
                            toDelete_wantedQueue.append(index)
                        break

                    languages.remove(tmpLanguage)
                    if len(languages) == 0:
                        toDelete_wantedQueue.append(index)

        i = len(toDelete_wantedQueue) - 1
        while i >= 0:
            log.debug("checkSub: Removed item from the wantedQueue at index %s" % toDelete_wantedQueue[i])
            autosub.WANTEDQUEUE.pop(toDelete_wantedQueue[i])
            i = i - 1

        log.debug("checkSub: Finished round of checkSub")
        autosub.WANTEDQUEUELOCK = False
        return True
