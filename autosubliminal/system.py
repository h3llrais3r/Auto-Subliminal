# coding=utf-8

import threading

import autosubliminal
from autosubliminal.db.cache_db import ImdbIdCacheDb, TvdbIdCacheDb
from autosubliminal.db.main_db import LastDownloadsDb, WantedItemsDb
from autosubliminal.db.movie_db import MovieDetailsDb
from autosubliminal.db.show_db import ShowDetailsDb
from autosubliminal.util.queue import get_wanted_queue_lock, release_wanted_queue_lock, \
    release_wanted_queue_lock_on_exception
from autosubliminal.util.websocket import send_websocket_notification


def restart(exit=False):
    """
    Thread to restart the application.
    """
    import autosubliminal.application

    thread = threading.Thread(name='AppRestarter', target=autosubliminal.application.restart, kwargs={'exit': exit})
    thread.start()


def shutdown():
    """
    Thread to shutdown the application.
    """
    import autosubliminal.application

    timer = threading.Timer(2, autosubliminal.application.stop)
    timer.name = 'AppKiller'
    timer.start()


def update():
    """
    Update the system.
    """
    autosubliminal.CHECKVERSION.process.update(force_update=True)
    restart(exit=True)


def flush_cache():
    """
    Flush the cache db's.
    """
    TvdbIdCacheDb().flush_tvdb_ids()
    ImdbIdCacheDb().flush_imdb_ids()
    send_websocket_notification('Flushed cache database.')


@release_wanted_queue_lock_on_exception
def flush_wanted_items():
    """
    Flush the wanted items db.
    """
    if get_wanted_queue_lock():
        # Flush db and wanted queue
        WantedItemsDb().flush_wanted_items()
        autosubliminal.WANTEDQUEUE = []
        release_wanted_queue_lock()
        send_websocket_notification(
            'Flushed wanted items database. Please launch \'Scan Disk\' from the \'System\' menu.')
    else:
        send_websocket_notification('Cannot flush wanted items database when wanted queue is in use!', type='notice')


def flush_last_downloads():
    """
    Flush the last downloads db.
    """
    LastDownloadsDb().flush_last_downloads()
    send_websocket_notification('Flushed last downloads database.')


def flush_library():
    """
    Flush the library db.
    """
    if not autosubliminal.SCANLIBRARY.running:
        ShowDetailsDb().flush_shows(episodes=True, subtitles=True)
        MovieDetailsDb().flush_movies(subtitles=True)
        send_websocket_notification('Flushed library database.')
    else:
        send_websocket_notification('Cannot flush library database when library scanner is running!', type='notice')
