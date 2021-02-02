# coding=utf-8

import logging
import threading
from functools import wraps

import autosubliminal

log = logging.getLogger(__name__)

_lock = threading.Lock()


def get_wanted_queue_lock():
    with _lock:
        if autosubliminal.WANTEDQUEUELOCK:
            log.debug('Cannot get wanted queue lock, skipping')
            return False
        else:
            log.debug('Getting wanted queue lock')
            autosubliminal.WANTEDQUEUELOCK = True
            return True


def release_wanted_queue_lock():
    with _lock:
        if autosubliminal.WANTEDQUEUELOCK:
            log.debug('Releasing wanted queue lock')
            autosubliminal.WANTEDQUEUELOCK = False
        else:
            log.warning('Trying to release a wanted queue lock while there is no lock')


def release_wanted_queue_lock_on_exception(func):
    """
    Decorator to force the release of the wanted queue lock on unexpected exceptions.
    This should be used on every place where we do a get_wanted_queue_lock to release it also on unexpected exceptions.
    """

    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            with _lock:
                if autosubliminal.WANTEDQUEUELOCK:
                    log.exception('Releasing wanted queue lock with force due to exception')
                    autosubliminal.WANTEDQUEUELOCK = False
            raise e

    return wrapper


def count_wanted_queue_items(item_type=None):
    size = 0
    if not item_type:
        size = len(autosubliminal.WANTEDQUEUE)
    else:
        for item in autosubliminal.WANTEDQUEUE:
            if item.type == item_type:
                size += 1
    return size


def find_wanted_item_in_queue(wanted_item_id):
    """
    Find a wanted item in the wanted queue.
    """

    # Return the first item that matches or None if not found
    return next((x for x in autosubliminal.WANTEDQUEUE if x.id == wanted_item_id), None)


def update_wanted_item_in_queue(wanted_item):
    """
    Update the wanted item in the wanted queue.
    """

    for index, item in enumerate(autosubliminal.WANTEDQUEUE):
        if item.id == wanted_item.id:
            autosubliminal.WANTEDQUEUE[index] = wanted_item
            break
