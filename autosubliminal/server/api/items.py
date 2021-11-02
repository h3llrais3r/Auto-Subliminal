# coding=utf-8

import cherrypy

import autosubliminal
from autosubliminal import config, subchecker
from autosubliminal.db import LastDownloadsDb, WantedItemsDb
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize, decamelize, sanitize, to_dict
from autosubliminal.util.queue import (find_wanted_item_in_queue, get_wanted_queue_lock, release_wanted_queue_lock,
                                       release_wanted_queue_lock_on_exception, update_wanted_item_in_queue)


class ItemsApi(RestResource):
    """
    Rest resource for handling the /api/items path.
    """

    def __init__(self):
        super().__init__()

        # Add all sub paths here: /api/items/...
        self.wanted = _WantedApi()
        self.downloaded = _DownloadedApi()


@cherrypy.popargs('wanted_item_id')
class _WantedApi(RestResource):
    """
    Rest resource for handling the /api/items/wanted path.
    """

    def __init__(self):
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'DELETE', 'PUT', 'PATCH')

    def get(self, wanted_item_id=None):
        """Get the list of wanted items or a single wanted item from the wanted queue."""
        if wanted_item_id:
            wanted_item = find_wanted_item_in_queue(int(wanted_item_id))
            if wanted_item:
                return wanted_item.to_dict(camelize)
            else:
                return self._bad_request('Invalid wanted_item_id')
        else:
            items = []
            for item in autosubliminal.WANTEDQUEUE:
                items.append(item.to_dict(camelize))
            return items

    @release_wanted_queue_lock_on_exception
    def put(self, wanted_item_id):
        """Update a wanted item in the wanted queue."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if wanted_item_id:
            wanted_item = find_wanted_item_in_queue(int(wanted_item_id))
            if wanted_item:
                if get_wanted_queue_lock():
                    # Update wanted item (all keys that are passed) and update the wanted queue
                    for key in input_dict:
                        wanted_item.set_attr(key, input_dict[key])
                    update_wanted_item_in_queue(wanted_item)
                    release_wanted_queue_lock()
                    return wanted_item.to_dict(camelize)
                else:
                    return self._conflict('Wanted queue in use')

        return self._bad_request('Invalid wanted_item_id')

    @release_wanted_queue_lock_on_exception
    def patch(self, wanted_item_id):
        """Execute an action on the wanted item in the wanted queue."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if wanted_item_id:
            wanted_item, wanted_item_index = find_wanted_item_in_queue(int(wanted_item_id), include_index=True)
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
                            return self._conflict('Unable to search indexer id')

                    # Search subtitles
                    elif action == 'searchSubtitles':
                        language = input_dict['language'] if 'language' in input_dict else None
                        if language:
                            subs, error_message = subchecker.search_subtitle(wanted_item_index, language)
                            if not error_message:
                                return [to_dict(x, camelize) for x in subs]
                            else:
                                return self._conflict(error_message)

                        return self._bad_request('Missing language')

                    # Save subtitle
                    elif action == 'saveSubtitle':
                        subtitle_index = input_dict['subtitle_index'] if 'subtitle_index' in input_dict else None
                        if subtitle_index is not None:
                            saved = subchecker.save_subtitle(wanted_item_index, subtitle_index)
                            if saved:
                                return self._no_content()
                            else:
                                return self._conflict('Unable to save subtitle')

                        return self._bad_request('Missing subtitle_index')

                    # Sync subtitle
                    elif action == 'syncSubtitle':
                        synced = subchecker.sync_subtitle(wanted_item_index)
                        if synced:
                            return self._no_content()
                        else:
                            return self._conflict('Unable to sync subtitle')

                    # Delete subtitle
                    elif action == 'deleteSubtitle':
                        removed = subchecker.delete_subtitle(wanted_item_index)
                        if removed:
                            return self._no_content()
                        else:
                            return self._conflict('Unable to delete subtitle')

                    # Reset a wanted item
                    elif action == 'reset':
                        if get_wanted_queue_lock():
                            wanted_item = WantedItemsDb().get_wanted_item(int(wanted_item_id))
                            update_wanted_item_in_queue(wanted_item)
                            release_wanted_queue_lock()
                            return wanted_item.to_dict(camelize)
                        else:
                            return self._conflict('Unable to reset item')

                    # Delete a wanted item
                    elif action == 'delete':
                        cleanup = input_dict['cleanup'] if 'cleanup' in input_dict else False
                        deleted = subchecker.delete_video(wanted_item_index, cleanup)
                        if deleted:
                            return self._no_content()
                        else:
                            return self._conflict('Unable to delete item')

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
                                                return self._no_content()
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
                                    return self._no_content()
                                else:
                                    return self._conflict('Unable to skip show')
                            elif type == 'movie':
                                movie = wanted_item.title
                                if wanted_item.year:
                                    movie += ' (' + wanted_item.year + ')'
                                # Check if already skipped
                                movie_sanitized = sanitize(movie)
                                for x in autosubliminal.SKIPMOVIE:
                                    if movie_sanitized == sanitize(x):
                                        return self._no_content()
                                # Skip movie
                                if subchecker.skip_movie(wanted_item_index):
                                    config.write_config_property('skipmovie', movie, '00')
                                    config.apply_skipmovie()
                                    return self._no_content()
                                else:
                                    return self._conflict('Unable to skip movie')

                        return self._bad_request('Invalid type \'%s\'' % item_type)

                    # Post process a wanted item
                    elif action == 'postProcess':
                        if 'subtitle_index' in input_dict:
                            processed = subchecker.post_process(wanted_item_index, input_dict['subtitle_index'])
                        else:
                            processed = subchecker.post_process_no_subtitle(wanted_item_index)
                        if processed:
                            return self._no_content()
                        else:
                            return self._conflict('Unable to post process item')

                    return self._bad_request('Invalid action \'%s\'' % action)

        return self._bad_request('Invalid wanted_item_id')


@cherrypy.popargs('number_of_items')
class _DownloadedApi(RestResource):
    """
    Rest resource for handling the /api/items/downloaded path.
    """

    def __init__(self):
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self, ):
        """Get the list of downloaded items."""
        last_downloads = LastDownloadsDb().get_last_downloads()
        items = []
        for item in last_downloads:
            items.append(item.to_dict(camelize))

        return items
