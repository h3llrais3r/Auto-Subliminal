# coding=utf-8

from aenum import Enum


class InstallType(Enum):
    """
    Install type enum.
    """
    SOURCE = 1
    GIT = 2
