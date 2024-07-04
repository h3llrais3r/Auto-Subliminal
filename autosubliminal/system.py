# coding=utf-8

import threading
from typing import cast

import autosubliminal
from autosubliminal.core.queue import (
    get_wanted_queue_lock,
    release_wanted_queue_lock,
    release_wanted_queue_lock_on_exception,
)
from autosubliminal.db.cache_db import ImdbIdCacheDb, TvdbIdCacheDb
from autosubliminal.db.main_db import LastDownloadsDb, WantedItemsDb
from autosubliminal.db.movie_db import MovieDetailsDb
from autosubliminal.db.show_db import ShowDetailsDb
from autosubliminal.util.websocket import send_websocket_notification
from autosubliminal.versionchecker import VersionChecker


def restart(exit: bool = False) -> None:
    """
    Thread to restart the application.
    """
    import autosubliminal.application

    thread = threading.Thread(name='AppRestarter', target=autosubliminal.application.restart, kwargs={'exit': exit})
    thread.start()


def shutdown() -> None:
    """
    Thread to shutdown the application.
    """
    import autosubliminal.application

    timer = threading.Timer(2, autosubliminal.application.stop)
    timer.name = 'AppKiller'
    timer.start()


def update() -> None:
    """
    Update the system.
    """
    cast(VersionChecker, autosubliminal.CHECKVERSION.process).update(force_update=True)
    restart(exit=True)


def flush_cache() -> None:
    """
    Flush the cache db's.
    """
    TvdbIdCacheDb().flush_tvdb_ids()
    ImdbIdCacheDb().flush_imdb_ids()
    send_websocket_notification('Flushed cache database.')


@release_wanted_queue_lock_on_exception
def flush_wanted_items() -> None:
    """
    Flush the wanted items db.
    """
    if get_wanted_queue_lock():
        # Flush db and wanted queue
        WantedItemsDb().flush_wanted_items()
        autosubliminal.WANTEDQUEUE = []
        release_wanted_queue_lock()
        send_websocket_notification('Flushed wanted items database.')
        send_websocket_notification("Please launch 'Scan Disk' from the 'System' menu.")
    else:
        send_websocket_notification('Cannot flush wanted items database when wanted queue is in use!', severity='warn')


def flush_last_downloads() -> None:
    """
    Flush the last downloads db.
    """
    LastDownloadsDb().flush_last_downloads()
    send_websocket_notification('Flushed last downloads database.')


def flush_library() -> None:
    """
    Flush the library db.
    """
    if not autosubliminal.SCANLIBRARY.running:
        ShowDetailsDb().flush_shows(episodes=True, subtitles=True)
        MovieDetailsDb().flush_movies(subtitles=True)
        send_websocket_notification('Flushed library database.')
        send_websocket_notification("Please launch 'Scan Library' from the 'System' menu.")
    else:
        send_websocket_notification('Cannot flush library database when library scanner is running!', severity='warn')
