# coding=utf-8

from subliminal.cache import region

import autosubliminal

# Addic7ed _search_show_id prefix (provide it for both subliminal version and our custom version)
ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX = 'subliminal.providers.addic7ed:_search_show_id'
CUSTOM_ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX = 'autosubliminal.providers.addic7ed_custom:_search_show_id'


def fill_addic7ed_show_id_cache() -> None:
    """
    Fill the Addic7ed show_id cache used by the Addic7ed provider with our Addic7ed show name mappings.

    If the show name of a parsed file is not found on Addic7ed, no subtitles can be search on Addic7ed.
    That's why we need to force the id in the subliminal cache, in order to find the subtitles.
    Subtitles on Addic7ed can only be listed by their own internal Addic7ed id.

    Filling of the cache will make sure that this method of addic7ed.py always returns our mapping for a show_name.
    Since we are filling it before each run, the expiration_time will never be met and we'll always use mapping id.
    If there is no custom mapping, a search will be done on Addic7ed with the show_name.
    >>>@region.cache_on_arguments(expiration_time=SHOW_EXPIRATION_TIME)
    >>>def _search_show_id(self, series, year=None):
    """
    for x in autosubliminal.ADDIC7EDSHOWNAMEMAPPING:
        # Dogpile cache expects native strings as keys!
        cache_value = int(autosubliminal.ADDIC7EDSHOWNAMEMAPPING[x])
        cache_key = ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|' + x
        region.set(cache_key, cache_value)
        cache_key = CUSTOM_ADDIC7ED_SEARCH_SHOW_ID_CACHE_PREFIX + '|' + x
        region.set(cache_key, cache_value)
