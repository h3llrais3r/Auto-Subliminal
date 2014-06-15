import logging
import os
import operator

import babelfish
import subliminal

import autosubliminal
from autosubliminal import utils
from autosubliminal.subdownloader import SubDownloader
from subliminal.providers.addic7ed import Addic7edSubtitle
from subliminal.providers.opensubtitles import OpenSubtitlesSubtitle
from subliminal.providers.podnapisi import PodnapisiSubtitle
from subliminal.providers.thesubdb import TheSubDBSubtitle
from subliminal.providers.tvsubtitles import TVsubtitlesSubtitle

log = logging.getLogger(__name__)


class SubChecker():
    """
    Sub checker. It checks for subtitles of episodes that are in the WANTEDQUEUE.
    """

    def __init__(self):
        pass

    def run(self):
        log.debug("Starting round of subtitle checking")
        to_delete_wanted_queue = []

        # Check api calls
        if not utils.check_apicalls():
            log.warning("Out of api calls")
            return True

        # Get wanted queue lock
        if not utils.get_wanted_queue_lock():
            return False

        # Process all items in wanted queue
        for index, wanted_item in enumerate(autosubliminal.WANTEDQUEUE):
            # Scan wanted_item for video, skip when no video could be determined
            video = _scan_wanted_item_for_video(wanted_item)
            if not video:
                continue

            # Check subtitles for each language
            langs = wanted_item['lang']
            for lang in langs[:]:
                # Search the best subtitle with the minimal score
                subtitles, language, single = _search_subtitles(video, lang, autosubliminal.MINMATCHSCORE, True)

                # Save when the best subtitle is found
                if subtitles:
                    download_item = _construct_download_item(wanted_item, subtitles, language, single)
                    SubDownloader(download_item).run()

                    # Remove from wanted queue if needed (if no additional languages are still needed)
                    langs.remove(lang)
                    if len(langs) == 0:
                        to_delete_wanted_queue.append(index)

        # Cleanup wanted queue
        i = len(to_delete_wanted_queue) - 1
        while i >= 0:
            log.debug("Removed item from the wanted queue at index %s" % to_delete_wanted_queue[i])
            autosubliminal.WANTEDQUEUE.pop(to_delete_wanted_queue[i])
            i -= 1

        # Release wanted queue lock
        log.debug("Finished round of subtitle checking")
        utils.release_wanted_queue_lock()

        return True


def search_subtitle(wanted_item_index, lang):
    log.debug("Searching for an individual subtitle")
    subs = []

    # Check api calls
    if not utils.check_apicalls():
        log.warning("Out of api calls")

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return

    # Get wanted_item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]

    # Scan wanted_item for video
    video = _scan_wanted_item_for_video(wanted_item)
    if video:
        # Search the subtitles with the default minimal score (to get all the possibilities to select from)
        subtitles, language, single = _search_subtitles(video, lang, autosubliminal.MINMATCHSCOREDEFAULT, False)
        if subtitles:
            # Add found subtitles to wanted_item
            wanted_item['found_subtitles'] = {'subtitles': subtitles, 'language': language, 'single': single}

            # Order subtitles by score and create new dict
            for subtitle, score in sorted([(s, s.compute_score(video)) for s in subtitles[video]],
                                          key=operator.itemgetter(1), reverse=True):
                # Only add subtitle when content is found
                if subtitle.content:
                    # Create new sub dict for showing result
                    sub = {'score': score, 'provider_name': subtitle.provider_name, 'content': subtitle.content,
                           'language': language, 'single': single, 'page_link': subtitle.page_link,
                           'releases': _get_releases(subtitle), 'wanted_item_index': wanted_item_index}
                    # Get content preview (the first 28 lines and last 30 lines of the subtitle)
                    content_split = subtitle.content.splitlines(False)
                    if len(content_split) < 58:
                        content_preview = "This seems to be an invalid subtitle."
                        content_preview += "<br> It has less than 58 lines to preview."
                    else:
                        try:
                            # First 28 lines
                            content_preview = "<br>".join(
                                x.replace('"', "'") for x in content_split[:28])
                            # Separator
                            content_preview += "<br>"
                            content_preview += "<br>"
                            content_preview += "..."
                            content_preview += "<br>"
                            content_preview += "<br>"
                            # Last 30 lines
                            content_preview += "<br>".join(
                                x.replace('"', "'") for x in content_split[len(content_split) - 30:])
                        except:
                            content_preview = "Problem with parsing the first 28 and/or last 30 lines of the file."
                    sub['content_preview'] = content_preview
                    subs.append(sub)

    # Release wanted queue lock
    utils.release_wanted_queue_lock()

    return subs


def save_subtitle(wanted_item_index, subtitle_index):
    log.debug("Saving an individual subtitle")

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return False

    # Get wanted_item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    found_subtitles = wanted_item['found_subtitles']
    subtitles = found_subtitles['subtitles']
    language = found_subtitles['language']
    single = found_subtitles['single']

    # Create new subtitles dict with only the wanted subtitle
    video = next(iter(subtitles.keys()))  # video is always the first key in the subtitles dict
    wanted_subtitle = subtitles[video][int(subtitle_index)]
    wanted_subtitles = subtitles.copy()
    wanted_subtitles[video] = [wanted_subtitle]

    # Save subtitle
    download_item = _construct_download_item(wanted_item, wanted_subtitles, language, single)
    downloaded = SubDownloader(download_item).run()

    # Remove from wanted queue is downloaded
    if downloaded:
        autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))

    # Release wanted queue lock
    utils.release_wanted_queue_lock()

    return downloaded


def _scan_wanted_item_for_video(wanted_item):
    log.debug("Scanning the wanted item for a video")
    title = wanted_item['title']
    originalfile = wanted_item['originalFileLocationOnDisk']

    # Check api calls
    if not utils.check_apicalls(use=True):
        log.warning("Out of api calls")
        return

    # Lets try to find a showid, skip when not found
    showid = utils.get_showid(title)
    if not showid:
        log.warning("No showid found. Skipping %s" % originalfile)
        return

    # Scan the video (disable scan for subtitles)
    # With subtitle scan enabled, enzyme looks inside for embedded subtitles
    # When an 'UND' subtitle language is found (f.e. Grimm.S03E04.720p.WEB-DL.DD5.1.H.264-ECI),
    # no other subtitles will be downloaded when using subliminal.download_best_subtitles(..., single=True)
    try:
        video = subliminal.scan_video(originalfile, subtitles=False, embedded_subtitles=False)
    except Exception, e:
        log.error("Error while scanning video. Skipping %s" % originalfile)
        log.error("Exception: %s" % e.message)
        return

    return video


def _search_subtitles(video, lang, min_score, best_only):
    log.debug("Searching for subtitles")

    # Determine language
    language = babelfish.Language.fromietf(lang)
    if not language:
        log.error("Invalid language '%s' specified" % lang)
        return

    # Determine if language alpha2 code suffix is needed in srt file name (f.e. <episode_name>.nl.srt)
    single = False
    if lang == autosubliminal.DEFAULTLANGUAGE and not autosubliminal.DEFAULTLANGUAGESUFFIX:
        single = True

    # If hearing_impaired is True, we ALSO want the hearing_impaired subs in our results -> pass None
    # I hearing_impaired is False, we DO NOT want the hearing_impaired subs in our results -> pass False
    include_hearing_impaired = autosubliminal.INCLUDEHEARINGIMPAIRED
    if include_hearing_impaired:
        include_hearing_impaired = None

    # Search for subtitles
    videos = {video}
    languages = {language}
    if best_only:
        # Download the best subtitle with min_score (without saving it in to file)
        subtitles = subliminal.download_best_subtitles(videos, languages,
                                                       providers=autosubliminal.SUBLIMINALPROVIDERLIST,
                                                       min_score=min_score,
                                                       hearing_impaired=include_hearing_impaired,
                                                       single=True)
    else:
        # Download all subtitles with default min score (without saving it to file)
        subtitles = subliminal.list_subtitles(videos, languages, providers=autosubliminal.SUBLIMINALPROVIDERLIST)
        subliminal.download_subtitles(subtitles[video])

    return subtitles, lang, single


def _construct_download_item(wanted_item, subtitles, language, single):
    log.debug("Constructing the download item")
    video = next(iter(subtitles.keys()))  # video is always the first key in the subtitles dict

    # Get the subtitle, subtitles should only contain 1 subtitle
    subtitle = subtitles[video][0]
    log.info("Download from: %s" % subtitle.page_link)

    # Construct the download item
    download_item = wanted_item.copy()
    subtitle_path = subliminal.subtitle.get_subtitle_path(video.name, None if single else language)
    download_item['destinationFileLocationOnDisk'] = subtitle_path
    download_item['downloadLink'] = subtitle.page_link
    download_item['downlang'] = language
    download_item['subtitle'] = os.path.split(download_item['destinationFileLocationOnDisk'])[1][:-4]
    download_item['provider'] = subtitle.provider_name
    download_item['subtitles'] = subtitles
    download_item['single'] = single

    return download_item


def _get_releases(subtitle):
    releases = []
    if isinstance(subtitle, Addic7edSubtitle):
        releases.extend([subtitle.version])
    elif isinstance(subtitle, OpenSubtitlesSubtitle):
        releases.extend(subtitle.movie_release_name)
    elif isinstance(subtitle, PodnapisiSubtitle):
        releases.extend(subtitle.releases)
    elif isinstance(subtitle, TheSubDBSubtitle):
        # No release present
        releases.extend([])
    elif isinstance(subtitle, TVsubtitlesSubtitle):
        releases.extend([subtitle.release])
    #return "<br>".join(x for x in releases)
    return releases