# coding=utf-8

import logging
import threading
from functools import wraps
from typing import Any, Callable, Optional, Tuple

import autosubliminal
from autosubliminal.core.item import ItemType, WantedItem

log = logging.getLogger(__name__)

_lock = threading.Lock()


def get_wanted_queue_lock() -> bool:
    with _lock:
        if autosubliminal.WANTEDQUEUELOCK:
            log.debug('Cannot get wanted queue lock, skipping')
            return False
        else:
            log.debug('Getting wanted queue lock')
            autosubliminal.WANTEDQUEUELOCK = True
            return True


def release_wanted_queue_lock() -> None:
    with _lock:
        if autosubliminal.WANTEDQUEUELOCK:
            log.debug('Releasing wanted queue lock')
            autosubliminal.WANTEDQUEUELOCK = False
        else:
            log.warning('Trying to release a wanted queue lock while there is no lock')


def release_wanted_queue_lock_on_exception(func: Callable) -> Callable:
    """
    Decorator to force the release of the wanted queue lock on unexpected exceptions.
    This should be used on every place where we do a get_wanted_queue_lock to release it also on unexpected exceptions.
    """

    @wraps(func)
    def wrapper(*args: Any, **kwargs: Any) -> Any:
        try:
            return func(*args, **kwargs)
        except Exception as e:
            with _lock:
                if autosubliminal.WANTEDQUEUELOCK:
                    log.exception('Releasing wanted queue lock with force due to exception')
                    autosubliminal.WANTEDQUEUELOCK = False
            raise e

    return wrapper


def count_wanted_queue_items(item_type: ItemType = None) -> int:
    size = 0
    if not item_type:
        size = len(autosubliminal.WANTEDQUEUE)
    else:
        for item in autosubliminal.WANTEDQUEUE:
            if item.type == item_type:
                size += 1
    return size


def find_wanted_item_in_queue(wanted_item_id: int) -> Tuple[Optional[WantedItem], Optional[int]]:
    """
    Find a wanted item in the wanted queue.
    """
    for index, item in enumerate(autosubliminal.WANTEDQUEUE):
        if item.id == wanted_item_id:
            return item, index

    return None, None


def update_wanted_item_in_queue(wanted_item: WantedItem) -> None:
    """
    Update the wanted item in the wanted queue.
    """

    for index, item in enumerate(autosubliminal.WANTEDQUEUE):
        if item.id == wanted_item.id:
            autosubliminal.WANTEDQUEUE[index] = wanted_item
            break


def delete_wanted_item_in_queue(wanted_item: WantedItem) -> None:
    """
    Delete the wanted item in the wanted queue.
    """

    for index, item in enumerate(autosubliminal.WANTEDQUEUE):
        if item.id == wanted_item.id:
            autosubliminal.WANTEDQUEUE.pop(index)
            break
