# coding=utf-8

import logging
import operator
import os
import shutil
from typing import Any, Dict, List, Optional, Set, Tuple, cast

import babelfish
import subliminal
from subliminal.core import ProviderPool
from subliminal.providers.addic7ed import Addic7edSubtitle
from subliminal.providers.gestdown import GestdownSubtitle
from subliminal.providers.napiprojekt import NapiProjektSubtitle
from subliminal.providers.opensubtitles import OpenSubtitlesSubtitle
from subliminal.providers.opensubtitlescom import OpenSubtitlesComSubtitle
from subliminal.providers.podnapisi import PodnapisiSubtitle
from subliminal.providers.tvsubtitles import TVsubtitlesSubtitle
from subliminal.video import Episode, Movie, Video

import autosubliminal
from autosubliminal.core.item import DownloadItem, WantedItem
from autosubliminal.core.queue import (
    delete_wanted_item_in_queue,
    get_wanted_queue_lock,
    release_wanted_queue_lock,
    release_wanted_queue_lock_on_exception,
)
from autosubliminal.core.scheduler import ScheduledProcess
from autosubliminal.db import WantedItemsDb
from autosubliminal.postprocessor import PostProcessor
from autosubliminal.providers import provider_cache
from autosubliminal.providers.addic7ed_custom import Addic7edSubtitle as CustomAddic7edSubtitle
from autosubliminal.providers.opensubtitles_com import OpenSubtitlesComSubtitle as CustomOpenSubtitlesComSubtitle
from autosubliminal.subdownloader import SubDownloader
from autosubliminal.subsynchronizer import SubSynchronizer
from autosubliminal.util.common import camelize, set_rw_and_remove, wait_for_internet_connection
from autosubliminal.util.websocket import (
    WANTED_ITEM_DELETE,
    WANTED_ITEM_UPDATE,
    send_websocket_event,
    send_websocket_notification,
)

log = logging.getLogger(__name__)


class SubChecker(ScheduledProcess):
    """
    Sub checker. Check for subtitles of episodes and movies that are in the WANTEDQUEUE.
    """

    def __init__(self) -> None:
        super().__init__()

    @release_wanted_queue_lock_on_exception
    def run(self, force_run: bool) -> None:
        log.info('Starting round of subtitle checking')

        # Wait for internet connection
        wait_for_internet_connection()
        send_websocket_notification('Checking subtitles...')

        # Setup provider pool
        provider_pool = _get_provider_pool()
        if provider_pool:
            log.info('Searching subtitles with providers: %s', ', '.join(provider_pool.providers))

            # Process all items in wanted queue
            # Loop over cloned queue list so we can remove the item directly from the wanted queue when downloaded
            db = WantedItemsDb()
            for wanted_item in autosubliminal.WANTEDQUEUE[:]:
                log.info('Searching subtitles for video: %s', wanted_item.video_path)

                # Check if the search is currently active for the wanted_item
                if not wanted_item.is_search_active:
                    log.info('Search not active in this run for video: %s', wanted_item.video_path)
                    continue

                # Scan wanted_item for video, skip when no video could be determined
                video = _scan_wanted_item_for_video(wanted_item)
                if not video:
                    continue

                # Clear discarded providers for each new wanted_item
                provider_pool.discarded_providers.clear()

                # Check subtitles for each language
                # Loop over cloned list so we can remove the language directly when downloaded
                languages = wanted_item.languages
                for lang in languages[:]:
                    # Search the best subtitle with the minimal score
                    try:
                        subtitles, language, single = _search_subtitles(video, lang, True, provider_pool)
                    except Exception:
                        log.exception('Error while searching subtitles for video %r', wanted_item.video_path)
                        continue

                    # Subtitle is found for the video
                    if subtitles:
                        # Handle download
                        download_item = _construct_download_item(wanted_item, subtitles, language, single)
                        SubDownloader(download_item).run()

                        # Remove downloaded language from wanted languages
                        languages.remove(lang)

                        # Update wanted item if there are still wanted languages
                        if len(languages) > 0:
                            db.update_wanted_item(wanted_item)
                            send_websocket_event(WANTED_ITEM_UPDATE, data=wanted_item.to_dict(camelize))

                        # Delete wanted item if there are no more wanted languages
                        else:
                            delete_wanted_item_in_queue(wanted_item)
                            log.debug('Removed item from the wanted queue: %s', wanted_item)
                            db.delete_wanted_item(wanted_item.id)
                            log.debug('Removed %s from wanted_items database', wanted_item.video_path)
                            send_websocket_event(WANTED_ITEM_DELETE, data=wanted_item.to_dict(camelize))

        else:
            log.info('No subliminal providers configured, skipping')

        send_websocket_notification('Subtitle check finished.')
        log.info('Finished round of subtitle checking')


@release_wanted_queue_lock_on_exception
def search_subtitle(wanted_item_index: int, lang: str) -> Tuple[List[Dict[str, Any]], Optional[str]]:
    log.info('Searching for an individual subtitle')
    subs: List[Dict[str, Any]] = []

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return subs, 'Wanted queue in use'

    # Setup provider pool
    provider_pool = _get_provider_pool()
    if provider_pool:
        log.info('Searching subtitles with providers: %s', ', '.join(provider_pool.providers))

        # Get wanted_item
        wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
        log.info('Searching subtitles for video: %s', wanted_item.video_path)

        # Scan wanted_item for video
        video = _scan_wanted_item_for_video(wanted_item, is_manual=True)
        if video:
            # Search the subtitles with the default minimal score (to get all the possibilities to select from)
            default_min_score = _get_min_match_score(video, is_manual=True)
            subtitles, language, single = _search_subtitles(video, lang, False, provider_pool)

            # Check if subtitles are found for the video
            if subtitles:
                # Add found subtitles to wanted_item
                wanted_item.found_subtitles = {'subtitles': subtitles, 'language': language, 'single': single}

                # Order subtitles by score and create new dict
                # Use subliminal default compute_score
                for index, subtitle, score in sorted(
                    [
                        (
                            index,
                            s,
                            subliminal.compute_score(s, video, hearing_impaired=autosubliminal.PREFERHEARINGIMPAIRED),
                        )
                        for index, s in enumerate(subtitles)
                    ],
                    key=operator.itemgetter(2),
                    reverse=True,
                ):
                    # Filter out subtitles that do not match the default score
                    if score < default_min_score:
                        log.debug('Skipping subtitle %s with score below %d', subtitle, default_min_score)
                        break

                    # Only add subtitle when content is found
                    if subtitle.content:
                        # Get the matches (hearing_impaired is used for score increasing, so add it if matched)
                        # This is to get the same behaviour as in the subliminal.compute_score()
                        matches: Set[str] = subtitle.get_matches(video)
                        if subtitle.hearing_impaired == autosubliminal.PREFERHEARINGIMPAIRED:
                            matches.add('hearing_impaired')
                        # Create new sub dict for showing result
                        sub = {
                            'subtitle_index': index,
                            'score': score,
                            'provider_name': subtitle.provider_name,
                            'content': subtitle.content,
                            'language': language,
                            'single': single,
                            'page_link': subtitle.page_link,
                            'releases': _get_releases(subtitle),
                            'matches': matches,
                            'wanted_item_index': wanted_item_index,
                            'playvideo_url': _construct_playvideo_url(wanted_item),
                        }
                        # Get content preview (the first 28 lines and last 30 lines of the subtitle)
                        # Use the subtitle text (decoded content) instead of content to generate the preview
                        content_split = cast(str, subtitle.text).splitlines(False)
                        if len(content_split) < 58:
                            content_preview = 'This seems to be an invalid subtitle.'
                            content_preview += '<br> It has less than 58 lines to preview.'
                        else:
                            try:
                                # First 28 lines
                                content_preview = '<br>'.join(x.replace('"', "'") for x in content_split[:28])
                                # Separator
                                content_preview += '<br>'
                                content_preview += '<br>'
                                content_preview += '...'
                                content_preview += '<br>'
                                # Last 30 lines
                                content_preview += '<br>'.join(
                                    x.replace('"', "'") for x in content_split[len(content_split) - 30 :]
                                )
                            except Exception:
                                content_preview = 'Problem with parsing the first 28 and/or last 30 lines of the file.'
                        sub['content_preview'] = content_preview
                        subs.append(sub)

    # Release wanted queue lock
    release_wanted_queue_lock()

    if not provider_pool:
        log.error('No subliminal providers configured')
        return subs, 'No subliminal providers configured'

    return subs, None


@release_wanted_queue_lock_on_exception
def save_subtitle(wanted_item_index: int, subtitle_index: int) -> Optional[DownloadItem]:
    log.info('Saving an individual subtitle')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return None

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    found_subtitles = wanted_item.found_subtitles
    subtitles = found_subtitles['subtitles']
    language = found_subtitles['language']
    single = found_subtitles['single']

    # Get wanted subtitle
    wanted_subtitle = _get_wanted_subtitle(subtitles, subtitle_index)

    # Save subtitle (skip notify and post_process)
    download_item = _construct_download_item(wanted_item, [wanted_subtitle], language, single)
    downloaded = SubDownloader(download_item).save()

    # Release wanted queue lock
    release_wanted_queue_lock()

    # Return subtitle path if it was downloaded, None otherwise
    return download_item if downloaded else None


@release_wanted_queue_lock_on_exception
def force_id_search(wanted_item_index: int) -> bool:
    log.info('Force id search')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return False

    # Force id search
    found = False
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    title = wanted_item.title
    year = wanted_item.year
    if wanted_item.is_episode:
        tvdb_id = autosubliminal.SHOWINDEXER.get_tvdb_id(title, year, force_search=True)
        if tvdb_id:
            wanted_item.tvdb_id = tvdb_id
            WantedItemsDb().update_wanted_item(wanted_item)
            found = True
    elif wanted_item.is_movie:
        imdb_id, year = autosubliminal.MOVIEINDEXER.get_imdb_id_and_year(title, year, force_search=True)
        if imdb_id:
            wanted_item.imdb_id = imdb_id
            wanted_item.year = year
            WantedItemsDb().update_wanted_item(wanted_item)
            found = True

    # Release wanted queue lock
    release_wanted_queue_lock()

    return found


@release_wanted_queue_lock_on_exception
def sync_subtitle(wanted_item_index: int) -> Optional[Dict[str, Any]]:
    log.info('Synchronizing an individual subtitle')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return None

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]

    # Synchronize subtitle
    sync_result = None
    subtitle_path = _get_subtitle_path(wanted_item)
    try:
        sync_result = SubSynchronizer().run(wanted_item.video_path, subtitle_path)
    except Exception:
        log.exception('Unable to synchronize subtitle: %s', subtitle_path)

    # Release wanted queue lock
    release_wanted_queue_lock()

    return sync_result


@release_wanted_queue_lock_on_exception
def delete_subtitle(wanted_item_index: int) -> bool:
    log.info('Deleting an individual subtitle')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return False

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]

    # Delete subtitle
    deleted = False
    subtitle_path = _get_subtitle_path(wanted_item)
    try:
        os.remove(subtitle_path)
        deleted = True
    except Exception:
        log.exception('Unable to delete subtitle: %s', subtitle_path)

    # Release wanted queue lock
    release_wanted_queue_lock()

    return deleted


@release_wanted_queue_lock_on_exception
def delete_video(wanted_item_index: int, cleanup: bool) -> bool:
    log.info('Deleting an individual video file')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return False

    # Remove wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))
    log.debug('Removed item from the wanted queue at index %s', int(wanted_item_index))
    WantedItemsDb().delete_wanted_item(wanted_item.id)
    log.debug('Removed %s from wanted_items database', wanted_item.video_path)

    # Physically delete the video file (and optionally leftovers)
    deleted = False
    video_path = wanted_item.video_path
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
                        shutil.rmtree(folder_to_clean, onerror=set_rw_and_remove)
                        log.info('Deleted video folder: %s', folder_to_clean)
                        deleted = True
                        # Break for loop
                        break
                    except Exception:
                        log.exception('Unable to delete video folder: %s', folder_to_clean)
    # Delete video file only
    if not deleted:
        try:
            os.remove(video_path)
            log.info('Deleted file: %s', video_path)
            deleted = True
        except Exception:
            log.exception('Unable to delete file: %s', video_path)

    # Release wanted queue lock
    release_wanted_queue_lock()

    return deleted


@release_wanted_queue_lock_on_exception
def skip_show(wanted_item_index: int, season: str) -> bool:
    log.info('Skipping a show')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return False

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    show = wanted_item.title

    # Remove all wanted items for the same show and season
    to_delete_wanted_queue: List[int] = []
    for index, item in enumerate(autosubliminal.WANTEDQUEUE):
        if item.title == show:
            # Skip show all seasons
            if season == '00':
                to_delete_wanted_queue.append(index)
            # Skip season (and specials = season 0)
            elif int(season) == item.season:
                to_delete_wanted_queue.append(index)
    # Start at the end to delete to prevent index out of range error
    i = len(to_delete_wanted_queue) - 1
    while i >= 0:
        wanted_item_to_delete = autosubliminal.WANTEDQUEUE.pop(to_delete_wanted_queue[i])
        WantedItemsDb().delete_wanted_item(wanted_item_to_delete.id)
        i -= 1
    log.info('Skipped show %s season %s', show, season)

    # Release wanted queue lock
    release_wanted_queue_lock()

    return True


@release_wanted_queue_lock_on_exception
def skip_movie(wanted_item_index: int) -> bool:
    log.info('Skipping a movie')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return False

    # Remove wanted item from queue and db
    wanted_item = autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))
    WantedItemsDb().delete_wanted_item(wanted_item.id)
    movie = wanted_item.title
    if wanted_item.year:
        movie += ' (' + str(wanted_item.year) + ')'
    log.info('Skipped movie %s', movie)

    # Release wanted queue lock
    release_wanted_queue_lock()

    return True


@release_wanted_queue_lock_on_exception
def post_process(wanted_item_index: int, subtitle_index: int) -> bool:
    log.info('Post processing an individual subtitle')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return False

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
    found_subtitles = wanted_item.found_subtitles
    subtitles = found_subtitles['subtitles']
    language = found_subtitles['language']
    single = found_subtitles['single']

    # Only execute post processing when a subtitle is present
    processed = False
    subtitle_path = _get_subtitle_path(wanted_item)
    if os.path.exists(subtitle_path):
        # Get wanted subtitle
        wanted_subtitle = _get_wanted_subtitle(subtitles, subtitle_index)

        # Handle download
        download_item = _construct_download_item(wanted_item, [wanted_subtitle], language, single)
        downloader = SubDownloader(download_item)
        downloader.mark_downloaded()
        processed = downloader.post_process()

        if processed:
            # Remove downloaded language from wanted languages
            wanted_item.languages.remove(language)

            # Update wanted item if there are still wanted languages
            if len(wanted_item.languages) > 0:
                WantedItemsDb().update_wanted_item(wanted_item)

            # Remove wanted item if there are no more wanted languages
            else:
                # Remove wanted item
                autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))
                log.debug('Removed item from the wanted queue at index %s', int(wanted_item_index))
                WantedItemsDb().delete_wanted_item(wanted_item.id)
                log.debug('Removed %s from wanted_items database', wanted_item.video_path)

    else:
        log.warning('No subtitle downloaded, skipping post processing')

    # Release wanted queue lock
    release_wanted_queue_lock()

    return processed


@release_wanted_queue_lock_on_exception
def post_process_no_subtitle(wanted_item_index: int) -> bool:
    log.info('Post processing without subtitle')

    # Get wanted queue lock
    if not get_wanted_queue_lock():
        return False

    # Get wanted item
    wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]

    # Post process only (no need to check for individual or not because we are forcing post processing)
    processed = PostProcessor(wanted_item).run()

    # Remove wanted item if processed
    if processed:
        autosubliminal.WANTEDQUEUE.pop(int(wanted_item_index))
        log.debug('Removed item from the wanted queue at index %s', int(wanted_item_index))
        WantedItemsDb().delete_wanted_item(wanted_item.id)
        log.debug('Removed %s from wanted_items database', wanted_item.video_path)
    else:
        send_websocket_notification('Unable to handle post processing! Please check the log file!', severity='error')

    # Release wanted queue lock
    release_wanted_queue_lock()

    return processed


def _scan_wanted_item_for_video(wanted_item: WantedItem, is_manual: bool = False) -> Optional[Video]:
    video_path = wanted_item.video_path
    log.info('Scanning video')

    try:
        # Scan the video
        video = subliminal.scan_video(video_path)

        # Use our manual refiner only for manual search if enabled
        # Always keep this first because you may completely override the video with this!
        if is_manual and autosubliminal.MANUALREFINEVIDEO:
            refiners = ('manual',)  # don't remove the , -> needs to be a tuple
            subliminal.refine(video, episode_refiners=refiners, movie_refiners=refiners, wanted_item=wanted_item)

        # Use build-in refiners (but use the omdb_custom instead omdb, as it requires an apikey now)
        if autosubliminal.REFINEVIDEO:
            episode_refiners: Tuple[str, ...] = ('metadata', 'tvdb')
            movie_refiners: Tuple[str, ...] = ('metadata',)
            if autosubliminal.OMDBAPIKEY:
                episode_refiners = tuple(list(episode_refiners) + [('omdb_custom')])
                movie_refiners = tuple(list(movie_refiners) + [('omdb_custom')])
            subliminal.refine(video, episode_refiners=episode_refiners, movie_refiners=movie_refiners)

        # Use our namemapping refiner (always enabled to enable our name mappings)
        # This should always be at the end since we want to enrich the result after the build-in refiners
        refiners = ('namemapping',)  # don't remove the , -> needs to be a tuple
        subliminal.refine(video, episode_refiners=refiners, movie_refiners=refiners)

        # Add our indexer id's in case the refiners were not able to detect it
        if isinstance(video, Episode) and not video.series_tvdb_id and wanted_item.tvdb_id:
            video.series_tvdb_id = wanted_item.tvdb_id
        elif isinstance(video, Movie) and not video.imdb_id and wanted_item.imdb_id:
            video.imdb_id = wanted_item.imdb_id
    except Exception:
        log.exception('Error while scanning video, skipping %s', video_path)
        return None

    # Add video to wanted item
    wanted_item.video = video

    return video


def _search_subtitles(
    video: Video, lang: str, best_only: bool, provider_pool: ProviderPool
) -> Tuple[Optional[List[subliminal.Subtitle]], Optional[babelfish.Language], Optional[bool]]:
    log.info('Searching for %s subtitles', lang)

    # Determine language
    language = babelfish.Language.fromietf(lang)
    if not language:
        log.error('Invalid language specified: %s', lang)
        return None

    # Determine if language code suffix is needed in srt file name (f.e. <episode_name>.nl.srt)
    single = False
    if lang == autosubliminal.DEFAULTLANGUAGE and not autosubliminal.DEFAULTLANGUAGESUFFIX:
        single = True

    # Search for subtitles
    languages = {language}
    if best_only:
        log.debug('Searching for best subtitle')
        # Download the best subtitle with min_score (without saving it in to file)
        subtitles = provider_pool.download_best_subtitles(
            provider_pool.list_subtitles(video, languages),
            video,
            languages,
            min_score=_get_min_match_score(video),
            hearing_impaired=autosubliminal.PREFERHEARINGIMPAIRED,
            only_one=True,
        )
        if subtitles:
            log.info('Found the best subtitle with the required min match score for video')
        else:
            log.info('No subtitle found with the required min match score for video')
    else:
        log.debug('Searching for all subtitles for video')
        # Download all subtitles (without saving it to file)
        subtitles = provider_pool.list_subtitles(video, languages)
        if subtitles:
            log.info('Found %s subtitles for video', len(subtitles))
            for subtitle in subtitles:
                provider_pool.download_subtitle(subtitle)
        else:
            log.info('No subtitles found for video')

    return subtitles, language, single


def _get_provider_pool() -> Optional[ProviderPool]:
    # Create a new provider pool with our settings
    # If we don't have any providers configured, don't create the pool
    if autosubliminal.SUBLIMINALPROVIDERS:
        # Load the Addic7ed provider cache (if needed) with our Addic7ed show name mappings
        if 'addic7ed' in ','.join(autosubliminal.SUBLIMINALPROVIDERS):
            provider_cache.fill_addic7ed_show_id_cache()
        # Create the pool
        return ProviderPool(
            providers=autosubliminal.SUBLIMINALPROVIDERS, provider_configs=autosubliminal.SUBLIMINALPROVIDERCONFIGS
        )
    else:
        return None


def _get_wanted_subtitle(subtitles: List[subliminal.Subtitle], subtitle_index: int) -> Any:
    log.debug('Getting wanted subtitle')
    return subtitles[int(subtitle_index)]


def _get_subtitle_path(wanted_item: WantedItem) -> str:
    log.debug('Getting subtitle path')
    found_subtitles = wanted_item.found_subtitles
    language = found_subtitles['language']
    single = found_subtitles['single']

    # Get subtitle path
    path: str = subliminal.subtitle.get_subtitle_path(wanted_item.video.name, None if single else language)
    log.debug('Subtitle path: %s', path)
    return path


def _construct_download_item(
    wanted_item: WantedItem, subtitles: List[subliminal.Subtitle], language: babelfish.Language, single: bool
) -> DownloadItem:
    log.debug('Constructing the download item')

    # Get the subtitle, subtitles should only contain 1 subtitle
    subtitle = subtitles[0]
    log.debug('Download page link: %s', subtitle.page_link)

    # Construct the download item
    download_item = DownloadItem(wanted_item)
    subtitle_path = subliminal.subtitle.get_subtitle_path(download_item.video.name, None if single else language)
    download_item.subtitle_path = subtitle_path
    download_item.subtitle_link = subtitle.page_link
    download_item.language = str(language)  # return alpha2 (f.e. 'nl') or ietf code (f.e. 'pt-BR')
    download_item.subtitle = os.path.split(download_item.subtitle_path)[1]
    download_item.provider = subtitle.provider_name
    download_item.subtitles = subtitles
    download_item.single = single

    return download_item


def _get_min_match_score(video: Video, is_manual: bool = False) -> int:
    min_score = 0
    if isinstance(video, Episode):
        if is_manual:
            if autosubliminal.MANUALSEARCHWITHSCORING:
                min_score = autosubliminal.SHOWMINMATCHSCOREDEFAULT
        else:
            min_score = autosubliminal.SHOWMINMATCHSCORE
        log.debug('Using episode min match score: %s', min_score)
    elif isinstance(video, Movie):
        if is_manual:
            if autosubliminal.MANUALSEARCHWITHSCORING:
                min_score = autosubliminal.MOVIEMINMATCHSCOREDEFAULT
        else:
            min_score = autosubliminal.MOVIEMINMATCHSCORE
        log.debug('Using movie min match score: %s', min_score)
    else:
        log.error('Invalid video found: %r', video)
        log.debug('Unknown min match score: %d', min_score)
    return min_score


def _get_releases(subtitle: subliminal.Subtitle) -> List[str]:
    log.debug('Getting supported releases')
    releases: List[str] = []
    if isinstance(subtitle, Addic7edSubtitle):
        releases.extend([subtitle.release_group])
    elif isinstance(subtitle, CustomAddic7edSubtitle):
        releases.extend([subtitle.version])
    elif isinstance(subtitle, GestdownSubtitle):
        releases.extend([subtitle.release_group])
    elif isinstance(subtitle, NapiProjektSubtitle):
        releases.extend([subtitle.text])
    elif isinstance(subtitle, OpenSubtitlesSubtitle):
        releases.extend([subtitle.movie_release_name])
    elif isinstance(subtitle, (OpenSubtitlesComSubtitle, CustomOpenSubtitlesComSubtitle)):
        releases.extend([subtitle.release])
    elif isinstance(subtitle, PodnapisiSubtitle):
        releases.extend(subtitle.releases)
    elif isinstance(subtitle, TVsubtitlesSubtitle):
        releases.extend([subtitle.release])
    return releases


def _construct_playvideo_url(wanted_item: WantedItem) -> str:
    log.debug("Constructing 'playvideo://' url")
    return 'playvideo://' + wanted_item.video_path
