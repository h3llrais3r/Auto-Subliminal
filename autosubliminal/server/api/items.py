# coding=utf-8

from typing import Any, Dict, List, Optional, Union

import cherrypy

import autosubliminal
from autosubliminal import config, subchecker
from autosubliminal.core.queue import (
    find_wanted_item_in_queue,
    get_wanted_queue_lock,
    release_wanted_queue_lock,
    release_wanted_queue_lock_on_exception,
    update_wanted_item_in_queue,
)
from autosubliminal.db import LastDownloadsDb, WantedItemsDb
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize, decamelize, sanitize, to_dict


class ItemsApi(RestResource):
    """
    Rest resource for handling the /api/items path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/items/...
        self.wanted = _WantedApi()
        self.downloaded = _DownloadedApi()


@cherrypy.popargs('wanted_item_id')
class _WantedApi(RestResource):
    """
    Rest resource for handling the /api/items/wanted path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET', 'DELETE', 'PUT', 'PATCH']

    def get(self, wanted_item_id: str = None) -> Union[List[Dict[str, Any]], Dict[str, Any]]:
        """Get the list of wanted items or a single wanted item from the wanted queue."""
        if wanted_item_id:
            wanted_item, _ = find_wanted_item_in_queue(int(wanted_item_id))
            if wanted_item:
                return wanted_item.to_dict(camelize)
            else:
                self._raise_bad_request('Invalid wanted_item_id')
        else:
            items = []
            for item in autosubliminal.WANTEDQUEUE:
                items.append(item.to_dict(camelize))
            return items

    @release_wanted_queue_lock_on_exception
    def put(self, wanted_item_id: str) -> Dict[str, Any]:
        """Update a wanted item in the wanted queue."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if wanted_item_id:
            wanted_item, _ = find_wanted_item_in_queue(int(wanted_item_id))
            if wanted_item:
                if get_wanted_queue_lock():
                    # Update wanted item (all keys that are passed) and update the wanted queue
                    for key in input_dict:
                        wanted_item.set_attr(key, input_dict[key])
                    update_wanted_item_in_queue(wanted_item)
                    release_wanted_queue_lock()
                    return wanted_item.to_dict(camelize)
                else:
                    self._raise_conflict('Wanted queue in use')

        self._raise_bad_request('Invalid wanted_item_id')

    @release_wanted_queue_lock_on_exception
    def patch(self, wanted_item_id: str) -> Optional[Union[List[Dict[str, Any]], Dict[str, Any]]]:
        """Execute an action on the wanted item in the wanted queue."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if wanted_item_id:
            wanted_item, wanted_item_index = find_wanted_item_in_queue(int(wanted_item_id))
            if wanted_item:
                if 'action' in input_dict:
                    action = input_dict['action']

                    # Search indexer id
                    if action == 'searchIndexerId':
                        found = subchecker.force_id_search(wanted_item_index)
                        if found:
                            wanted_item = WantedItemsDb().get_wanted_item(int(wanted_item_id))
                            return wanted_item.to_dict(camelize)
                        else:
                            self._raise_conflict('Unable to search indexer id')

                    # Search subtitles
                    elif action == 'searchSubtitles':
                        language = input_dict['language'] if 'language' in input_dict else None
                        if language:
                            subs, error_message = subchecker.search_subtitle(wanted_item_index, language)
                            if not error_message:
                                return [to_dict(x, camelize) for x in subs]
                            else:
                                self._raise_conflict(error_message)

                        self._raise_bad_request('Missing language')

                    # Save subtitle
                    elif action == 'saveSubtitle':
                        subtitle_index = input_dict['subtitle_index'] if 'subtitle_index' in input_dict else None
                        if subtitle_index is not None:
                            download_item = subchecker.save_subtitle(wanted_item_index, subtitle_index)
                            if download_item:
                                saved_subtitle = {'subtitle_path': download_item.subtitle_path}
                                return to_dict(saved_subtitle, camelize)
                            else:
                                self._raise_conflict('Unable to save subtitle')

                        self._raise_bad_request('Missing subtitle_index')

                    # Sync subtitle
                    elif action == 'syncSubtitle':
                        sync_result = subchecker.sync_subtitle(wanted_item_index)
                        if sync_result:
                            return to_dict(sync_result, camelize)
                        else:
                            self._raise_conflict('Unable to sync subtitle')

                    # Delete subtitle
                    elif action == 'deleteSubtitle':
                        removed = subchecker.delete_subtitle(wanted_item_index)
                        if removed:
                            self._set_no_content_status()
                            return None
                        else:
                            self._raise_conflict('Unable to delete subtitle')

                    # Reset a wanted item
                    elif action == 'reset':
                        if get_wanted_queue_lock():
                            wanted_item = WantedItemsDb().get_wanted_item(int(wanted_item_id))
                            update_wanted_item_in_queue(wanted_item)
                            release_wanted_queue_lock()
                            return wanted_item.to_dict(camelize)
                        else:
                            self._raise_conflict('Unable to reset item')

                    # Delete a wanted item
                    elif action == 'delete':
                        cleanup = input_dict['cleanup'] if 'cleanup' in input_dict else False
                        deleted = subchecker.delete_video(wanted_item_index, cleanup)
                        if deleted:
                            self._set_no_content_status()
                            return None
                        else:
                            self._raise_conflict('Unable to delete item')

                    # Skip a wanted item
                    elif action == 'skip':
                        item_type = input_dict['type'] if 'type' in input_dict else None
                        if item_type:
                            if item_type == 'episode':
                                season = input_dict['season'] if 'season' in input_dict else '00'  # defaults to all
                                if not season == '00':
                                    season = str(int(season))
                                config_season = season
                                # Check if already skipped
                                title_sanitized = sanitize(wanted_item.title)
                                for x in autosubliminal.SKIPSHOW:
                                    if title_sanitized == sanitize(x):
                                        for s in autosubliminal.SKIPSHOW[x].split(','):
                                            if s == season or s == '00':
                                                self._set_no_content_status()
                                                return None
                                        # Not skipped yet, skip all or append season the seasons to skip
                                        if season == '00':
                                            config_season = '00'
                                        else:
                                            seasons = autosubliminal.SKIPSHOW[x].split(',')
                                            seasons.append(season)
                                            config_season = ','.join(sorted(seasons))
                                # Skip show
                                if subchecker.skip_show(wanted_item_index, season):
                                    config.write_config_property('skipshow', wanted_item.title, config_season)
                                    config.apply_skipshow()
                                    self._set_no_content_status()
                                    return None
                                else:
                                    self._raise_conflict('Unable to skip show')
                            elif item_type == 'movie':
                                movie = wanted_item.title
                                if wanted_item.year:
                                    movie += ' (' + str(wanted_item.year) + ')'
                                # Check if already skipped
                                movie_sanitized = sanitize(movie)
                                for x in autosubliminal.SKIPMOVIE:
                                    if movie_sanitized == sanitize(x):
                                        self._set_no_content_status()
                                        return None
                                # Skip movie
                                if subchecker.skip_movie(wanted_item_index):
                                    config.write_config_property('skipmovie', movie, '00')
                                    config.apply_skipmovie()
                                    self._set_no_content_status()
                                    return None
                                else:
                                    self._raise_conflict('Unable to skip movie')

                        self._raise_bad_request("Invalid type '%s'" % item_type)

                    # Post process a wanted item
                    elif action == 'postProcess':
                        if 'subtitle_index' in input_dict:
                            processed = subchecker.post_process(wanted_item_index, input_dict['subtitle_index'])
                        else:
                            processed = subchecker.post_process_no_subtitle(wanted_item_index)
                        if processed:
                            self._set_no_content_status()
                            return None
                        else:
                            self._raise_conflict('Unable to post process item')

                    self._raise_bad_request("Invalid action '%s'" % action)

        self._raise_bad_request('Invalid wanted_item_id')


class _DownloadedApi(RestResource):
    """
    Rest resource for handling the /api/items/downloaded path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self) -> List[Dict[str, Any]]:
        """Get the list of downloaded items."""
        last_downloads = LastDownloadsDb().get_last_downloads()
        items: List[Dict[str, Any]] = []
        for item in last_downloads:
            items.append(item.to_dict(camelize))

        return items
