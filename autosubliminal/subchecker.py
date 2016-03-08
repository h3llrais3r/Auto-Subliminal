import logging
import os
import operator
import shutil

import babelfish
import subliminal
from subliminal.providers.addic7ed import Addic7edSubtitle
from subliminal.providers.opensubtitles import OpenSubtitlesSubtitle
from subliminal.providers.podnapisi import PodnapisiSubtitle
from subliminal.providers.thesubdb import TheSubDBSubtitle
from subliminal.providers.tvsubtitles import TVsubtitlesSubtitle
from subliminal.video import Episode, Movie

import autosubliminal
from autosubliminal import utils
from autosubliminal.postprocessor import PostProcessor
from autosubliminal.scheduler import ScheduledProcess
from autosubliminal.subdownloader import SubDownloader

log = logging.getLogger(__name__)


class SubChecker(ScheduledProcess):
    """
    Sub checker. Check for subtitles of episodes and movies that are in the WANTEDQUEUE.
    """

    def __init__(self):
        super(SubChecker, self).__init__()

    def run(self, force_run):
        log.info("Starting round of subtitle checking")
        to_delete_wanted_queue = []

        # Get wanted queue lock
        if not utils.get_wanted_queue_lock():
            return False

        # Show info message (only when run was forced manually)
        if force_run:
            utils.add_notification_message("Checking subtitles...")

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
                subtitles, language, single = _search_subtitles(video, lang, True)

                # Save when a subtitle is found for the video
                if subtitles[video]:
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
        log.info("Finished round of subtitle checking")
        utils.release_wanted_queue_lock()

        return True


def search_subtitle(wanted_item_index, lang):
    log.info("Searching for an individual subtitle")
    subs = []

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return subs, "Skipping! Cannot get a wanted queue lock because another threat is using the queues!"

    # Get wanted_item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]

    # Scan wanted_item for video
    video = _scan_wanted_item_for_video(wanted_item)
    if video:
        # Search the subtitles with the default minimal score (to get all the possibilities to select from)
        subtitles, language, single = _search_subtitles(video, lang, False)
        # Check if subtitles are found for the video
        if subtitles[video]:
            # Add found subtitles to wanted_item
            wanted_item['found_subtitles'] = {'subtitles': subtitles, 'language': language, 'single': single}
            # Order subtitles by score and create new dict
            # Use subliminal scoring (scores=None)
            for index, subtitle, score in sorted([(index, s, subliminal.compute_score(
                    s.get_matches(video, hearing_impaired=utils.include_hearing_impaired()), video, scores=None))
                                                  for index, s in enumerate(subtitles[video])],
                                                 key=operator.itemgetter(2), reverse=True):
                # Only add subtitle when content is found
                if subtitle.content:
                    # Create new sub dict for showing result
                    sub = {'subtitle_index': index, 'score': score, 'provider_name': subtitle.provider_name,
                           'content': subtitle.content, 'language': language, 'single': single,
                           'page_link': subtitle.page_link, 'releases': _get_releases(subtitle),
                           'wanted_item_index': wanted_item_index,
                           'playvideo_url': _construct_playvideo_url(wanted_item)}
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

    if not len(subs):
        return subs, "No subtitles could be found or downloaded!"

    return subs, None


def save_subtitle(wanted_item_index, subtitle_index):
    log.info("Saving an individual subtitle")

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return False

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    found_subtitles = wanted_item['found_subtitles']
    subtitles = found_subtitles['subtitles']
    language = found_subtitles['language']
    single = found_subtitles['single']

    # Get selected subtitle
    wanted_subtitles = _get_wanted_subtitle(subtitles, subtitle_index)

    # Save subtitle (skip notify and post_process)
    download_item = _construct_download_item(wanted_item, wanted_subtitles, language, single)
    downloaded = SubDownloader(download_item).save()

    # Release wanted queue lock
    utils.release_wanted_queue_lock()

    return downloaded


def force_id_search(wanted_item_index):
    log.info("Force id search")

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return

    # Force id search
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    title = wanted_item['title']
    year = wanted_item['year']
    if wanted_item['type'] == 'episode':
        wanted_item['showid'] = utils.get_show_id(title, True)
    elif wanted_item['type'] == 'movie':
        wanted_item['imdbid'], wanted_item['year'] = utils.get_imdb_info(title, year, True)

    # Release wanted queue lock
    utils.release_wanted_queue_lock()


def delete_subtitle(wanted_item_index):
    log.info("Deleting an individual subtitle")

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return False

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]

    # Delete subtitle
    deleted = False
    subtitle_path = _get_subtitle_path(wanted_item)
    try:
        os.remove(subtitle_path)
        deleted = True
    except Exception, e:
        log.error("Unable to delete subtitle: %s" % subtitle_path)
        log.error("Exception: %s" % e)

    # Release wanted queue lock
    utils.release_wanted_queue_lock()

    return deleted


def delete_video(wanted_item_index, cleanup):
    log.info("Deleting an individual video file")

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return False

    # Remove wanted item for queue
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))

    # Physically delete the video file (and optionally leftovers)
    deleted = False
    video_path = wanted_item['originalFileLocationOnDisk']
    # Delete with cleanup
    if cleanup:
        norm_video_path = os.path.normcase(os.path.normpath(video_path))
        norm_video_folder = os.path.dirname(norm_video_path).rstrip(os.sep)
        for root_folder in autosubliminal.VIDEOPATHS:
            # Get root folder
            norm_root_folder = os.path.normcase(os.path.normpath(root_folder)).rstrip(os.sep)
            # Check if video is located in subfolder underneath root folder
            if os.path.commonprefix([norm_root_folder, norm_video_path]) == norm_root_folder:
                if norm_video_folder != norm_root_folder:
                    # Move up until the first subfolder underneath the root folder to cleanup
                    while norm_video_folder != norm_root_folder:
                        folder_to_clean = norm_video_folder
                        norm_video_folder = os.path.dirname(norm_video_folder).rstrip(os.sep)
                    try:
                        # Remove the folder of the video underneath the root folder
                        shutil.rmtree(folder_to_clean, onerror=utils.set_rw_and_remove)
                        log.info("Deleted video folder: %s" % folder_to_clean)
                        deleted = True
                        # Break for loop
                        break
                    except Exception, e:
                        log.error("Unable to delete video folder: %s" % folder_to_clean)
                        log.error("Exception: %s" % e)
    # Delete video file only
    if not deleted:
        try:
            os.remove(video_path)
            log.info("Deleted file: %s" % video_path)
            deleted = True
        except Exception, e:
            log.error("Unable to delete file: %s" % video_path)
            log.error("Exception: %s" % e)

    # Release wanted queue lock
    utils.release_wanted_queue_lock()

    return deleted


def post_process(wanted_item_index, subtitle_index):
    log.info("Post processing an individual subtitle")

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return False

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    found_subtitles = wanted_item['found_subtitles']
    subtitles = found_subtitles['subtitles']
    language = found_subtitles['language']
    single = found_subtitles['single']

    # Only execute post processing when a subtitle is present
    processed = False
    subtitle_path = _get_subtitle_path(wanted_item)
    if os.path.exists(subtitle_path):
        # Get selected subtitle
        wanted_subtitles = _get_wanted_subtitle(subtitles, subtitle_index)

        # Post process only
        download_item = _construct_download_item(wanted_item, wanted_subtitles, language, single)
        processed = SubDownloader(download_item).post_process()

        # Remove from wanted queue is downloaded
        if processed:
            autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))
    else:
        log.warning("No subtitle downloaded, skipping post processing")

    # Release wanted queue lock
    utils.release_wanted_queue_lock()

    return processed


def post_process_no_subtitle(wanted_item_index):
    log.info("Post processing without subtitle")

    # Get wanted queue lock
    if not utils.get_wanted_queue_lock():
        return False

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]

    # Post process only
    processed = PostProcessor(wanted_item).run()

    # Remove from wanted queue is downloaded
    if processed:
        autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))

    # Release wanted queue lock
    utils.release_wanted_queue_lock()

    return processed


def _scan_wanted_item_for_video(wanted_item):
    originalfile = wanted_item['originalFileLocationOnDisk']
    log.debug("Scanning the wanted item for a video: %s" % originalfile)

    # Scan the video (disable scan for subtitles)
    # With subtitle scan enabled, enzyme looks inside for embedded subtitles
    # When an 'UND' subtitle language is found (f.e. Grimm.S03E04.720p.WEB-DL.DD5.1.H.264-ECI),
    # no other subtitles will be downloaded when using subliminal.download_best_subtitles(..., single=True)
    try:
        video = subliminal.scan_video(originalfile, subtitles=False, embedded_subtitles=False)
    except Exception, e:
        log.error("Error while scanning video, skipping %s" % originalfile)
        log.error("Exception: %s" % e)
        return

    return video


def _search_subtitles(video, lang, best_only):
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

    # Get min match score
    if isinstance(video, Episode):
        min_score = autosubliminal.SHOWMINMATCHSCORE
    elif isinstance(video, Movie):
        min_score = autosubliminal.MOVIEMINMATCHSCORE
    else:
        log.error("Invalid video found '%s'" % video)
        return

    # Search for subtitles
    videos = {video}
    languages = {language}
    if best_only:
        # Download the best subtitle with min_score (without saving it in to file)
        subtitles = subliminal.download_best_subtitles(videos, languages,
                                                       min_score=min_score,
                                                       hearing_impaired=utils.include_hearing_impaired(),
                                                       only_one=True,
                                                       providers=autosubliminal.SUBLIMINALPROVIDERLIST,
                                                       provider_configs=autosubliminal.SUBLIMINALPROVIDERCONFIGS)
    else:
        # Download all subtitles with default min score (without saving it to file)
        subtitles = subliminal.list_subtitles(videos, languages, providers=autosubliminal.SUBLIMINALPROVIDERLIST)
        subliminal.download_subtitles(subtitles[video])

    return subtitles, language, single


def _get_wanted_subtitle(subtitles, subtitle_index):
    log.debug("Getting wanted subtitle")
    # Create new subtitles dict with only the wanted subtitle
    video = next(iter(subtitles.keys()))  # video is always the first key in the subtitles dict
    wanted_subtitle = subtitles[video][int(subtitle_index)]
    wanted_subtitles = subtitles.copy()
    wanted_subtitles[video] = [wanted_subtitle]

    return wanted_subtitles


def _get_subtitle_path(wanted_item):
    log.debug("Getting subtitle path")
    found_subtitles = wanted_item['found_subtitles']
    subtitles = found_subtitles['subtitles']
    language = found_subtitles['language']
    single = found_subtitles['single']

    # Get subtitle path
    video = next(iter(subtitles.keys()))  # video is always the first key in the subtitles dict
    path = subliminal.subtitle.get_subtitle_path(video.name, None if single else language)
    log.debug("Subtitle path: %s" % path)
    return path


def _construct_download_item(wanted_item, subtitles, language, single):
    log.debug("Constructing the download item")
    video = next(iter(subtitles.keys()))  # video is always the first key in the subtitles dict

    # Get the subtitle, subtitles should only contain 1 subtitle
    subtitle = subtitles[video][0]
    log.debug("Download page link: %s" % subtitle.page_link)

    # Construct the download item
    download_item = wanted_item.copy()
    subtitle_path = subliminal.subtitle.get_subtitle_path(video.name, None if single else language)
    download_item['destinationFileLocationOnDisk'] = subtitle_path
    download_item['downloadLink'] = subtitle.page_link
    download_item['downlang'] = language.alpha2
    download_item['subtitle'] = os.path.split(download_item['destinationFileLocationOnDisk'])[1][:-4]
    download_item['provider'] = subtitle.provider_name
    download_item['subtitles'] = subtitles
    download_item['single'] = single
    download_item['video'] = video

    return download_item


def _get_releases(subtitle):
    log.debug("Getting supported releases")
    releases = []
    if isinstance(subtitle, Addic7edSubtitle):
        releases.extend([subtitle.version])
    elif isinstance(subtitle, OpenSubtitlesSubtitle):
        releases.extend([subtitle.movie_release_name])
    elif isinstance(subtitle, PodnapisiSubtitle):
        releases.extend(subtitle.releases)
    elif isinstance(subtitle, TheSubDBSubtitle):
        # No release present
        releases.extend([])
    elif isinstance(subtitle, TVsubtitlesSubtitle):
        releases.extend([subtitle.release])
    return releases


def _construct_playvideo_url(wanted_item):
    log.debug("Constructing 'playvideo://' url")
    play_protocol = 'playvideo://'
    # Encode path for special characters -> need to decode again before accessing the path (see playvideo.py)
    path = wanted_item['originalFileLocationOnDisk'].encode('utf-8')
    return play_protocol + path
