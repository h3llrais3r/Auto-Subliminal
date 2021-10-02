"""Module with additional types used by the index"""

from binascii import b2a_hex

from .util import (
    pack,
    unpack
)
from git.objects import Blob


# typing ----------------------------------------------------------------------

from typing import (List, Sequence, TYPE_CHECKING, Tuple, cast)

from git.types import PathLike

if TYPE_CHECKING:
    from git.repo import Repo

# ---------------------------------------------------------------------------------

__all__ = ('BlobFilter', 'BaseIndexEntry', 'IndexEntry')

#{ Invariants
CE_NAMEMASK = 0x0fff
CE_STAGEMASK = 0x3000
CE_EXTENDED = 0x4000
CE_VALID = 0x8000
CE_STAGESHIFT = 12

#} END invariants


class BlobFilter(object):

    """
    Predicate to be used by iter_blobs allowing to filter only return blobs which
    match the given list of directories or files.

    The given paths are given relative to the repository.
    """
    __slots__ = 'paths'

    def __init__(self, paths: Sequence[PathLike]) -> None:
        """
        :param paths:
            tuple or list of paths which are either pointing to directories or
            to files relative to the current repository
        """
        self.paths = paths

    def __call__(self, stage_blob: Blob) -> bool:
        path = stage_blob[1].path
        for p in self.paths:
            if path.startswith(p):
                return True
        # END for each path in filter paths
        return False


class BaseIndexEntry(tuple):

    """Small Brother of an index entry which can be created to describe changes
    done to the index in which case plenty of additional information is not required.

    As the first 4 data members match exactly to the IndexEntry type, methods
    expecting a BaseIndexEntry can also handle full IndexEntries even if they
    use numeric indices for performance reasons. """

    def __str__(self) -> str:
        return "%o %s %i\t%s" % (self.mode, self.hexsha, self.stage, self.path)

    def __repr__(self) -> str:
        return "(%o, %s, %i, %s)" % (self.mode, self.hexsha, self.stage, self.path)

    @property
    def mode(self) -> int:
        """ File Mode, compatible to stat module constants """
        return self[0]

    @property
    def binsha(self) -> bytes:
        """binary sha of the blob """
        return self[1]

    @property
    def hexsha(self) -> str:
        """hex version of our sha"""
        return b2a_hex(self[1]).decode('ascii')

    @property
    def stage(self) -> int:
        """Stage of the entry, either:

            * 0 = default stage
            * 1 = stage before a merge or common ancestor entry in case of a 3 way merge
            * 2 = stage of entries from the 'left' side of the merge
            * 3 = stage of entries from the right side of the merge

        :note: For more information, see http://www.kernel.org/pub/software/scm/git/docs/git-read-tree.html
        """
        return (self[2] & CE_STAGEMASK) >> CE_STAGESHIFT

    @property
    def path(self) -> str:
        """:return: our path relative to the repository working tree root"""
        return self[3]

    @property
    def flags(self) -> List[str]:
        """:return: flags stored with this entry"""
        return self[2]

    @classmethod
    def from_blob(cls, blob: Blob, stage: int = 0) -> 'BaseIndexEntry':
        """:return: Fully equipped BaseIndexEntry at the given stage"""
        return cls((blob.mode, blob.binsha, stage << CE_STAGESHIFT, blob.path))

    def to_blob(self, repo: 'Repo') -> Blob:
        """:return: Blob using the information of this index entry"""
        return Blob(repo, self.binsha, self.mode, self.path)


class IndexEntry(BaseIndexEntry):

    """Allows convenient access to IndexEntry data without completely unpacking it.

    Attributes usully accessed often are cached in the tuple whereas others are
    unpacked on demand.

    See the properties for a mapping between names and tuple indices. """
    @property
    def ctime(self) -> Tuple[int, int]:
        """
        :return:
            Tuple(int_time_seconds_since_epoch, int_nano_seconds) of the
            file's creation time"""
        return cast(Tuple[int, int], unpack(">LL", self[4]))

    @property
    def mtime(self) -> Tuple[int, int]:
        """See ctime property, but returns modification time """
        return cast(Tuple[int, int], unpack(">LL", self[5]))

    @property
    def dev(self) -> int:
        """ Device ID """
        return self[6]

    @property
    def inode(self) -> int:
        """ Inode ID """
        return self[7]

    @property
    def uid(self) -> int:
        """ User ID """
        return self[8]

    @property
    def gid(self) -> int:
        """ Group ID """
        return self[9]

    @property
    def size(self) -> int:
        """:return: Uncompressed size of the blob """
        return self[10]

    @classmethod
    def from_base(cls, base):
        """
        :return:
            Minimal entry as created from the given BaseIndexEntry instance.
            Missing values will be set to null-like values

        :param base: Instance of type BaseIndexEntry"""
        time = pack(">LL", 0, 0)
        return IndexEntry((base.mode, base.binsha, base.flags, base.path, time, time, 0, 0, 0, 0, 0))

    @classmethod
    def from_blob(cls, blob: Blob, stage: int = 0) -> 'IndexEntry':
        """:return: Minimal entry resembling the given blob object"""
        time = pack(">LL", 0, 0)
        return IndexEntry((blob.mode, blob.binsha, stage << CE_STAGESHIFT, blob.path,
                           time, time, 0, 0, 0, 0, blob.size))
