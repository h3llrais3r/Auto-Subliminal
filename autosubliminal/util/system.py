# coding=utf-8

import os
import sys
from distutils.version import StrictVersion

from six import text_type

PYTHON_VERSION_FILE = '.pythonversion'


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


def get_stored_python_version():
    """Get the stored python version."""
    python_version = None

    # Read previous version from file
    if os.path.exists(PYTHON_VERSION_FILE):
        with open(PYTHON_VERSION_FILE, mode='r') as f:
            version_string = f.readline().strip()
        try:
            if version_string:
                python_version = StrictVersion(version_string)
        except Exception:
            pass

    return python_version


def store_python_version(python_version):
    """Store the currently used python version."""
    with open(PYTHON_VERSION_FILE, mode='w') as f:
        f.write(text_type(python_version))
