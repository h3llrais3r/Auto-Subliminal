import datetime

from dogpile.cache.backends.file import AbstractFileLock
from dogpile.cache.region import make_region
from dogpile.util.readwrite_lock import ReadWriteMutex


#: Expiration time for video scan
SCAN_VIDEO_EXPIRATION_TIME = datetime.timedelta(days=1).total_seconds()


# MutexFileLock: copied from subliminal.cli so we don't depend on subliminal for our cache
class MutexFileLock(AbstractFileLock):
    """:class:`MutexFileLock` is a thread-based rw lock based on :class:`dogpile.core.ReadWriteMutex`."""

    def __init__(self, filename):
        self.mutex = ReadWriteMutex()

    def acquire_read_lock(self, wait):
        ret = self.mutex.acquire_read_lock(wait)
        return wait or ret

    def acquire_write_lock(self, wait):
        ret = self.mutex.acquire_write_lock(wait)
        return wait or ret

    def release_read_lock(self):
        return self.mutex.release_read_lock()

    def release_write_lock(self):
        return self.mutex.release_write_lock()


region = make_region()
