# coding=utf-8

import os
import sys
from distutils.version import StrictVersion

from six import text_type


def get_python_version_full():
    """Return the full python version as a string."""
    return sys.version


def get_python_version_strict():
    """Return the python version as a distutils StrictVersion object."""
    version_tuple = sys.version_info[:3]
    version_string = '.'.join(text_type(x) for x in version_tuple)
    return StrictVersion(version_string)


def get_python_location():
    """Get the path of the python executable."""
    return os.path.dirname(sys.executable)
