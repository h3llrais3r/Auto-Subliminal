# coding=utf-8

import datetime
import os
import re
import sys
from pathlib import Path
from typing import Optional

# ATTENTION: only use standard libs as no dependencies are installed yet when imported in installer!

PYTHON_VERSION_FILE = '.pythonversion'
PYTHON_VERSION_REGEX = r'^(\d+)\.(\d+)\.(\d+)$'
VENV_CFG_FILE = 'pyvenv.cfg'
VENV_CREATION_TIME_FILE = '.venvcreationtime'
TIMESTAMP_FORMAT = '%Y-%m-%d %H:%M:%S'


def get_python_version_full() -> str:
    """Return the full python version as a string."""
    return sys.version


def get_python_version() -> str:
    """Return the python version as a string."""

    version_tuple = sys.version_info[:3]
    return '.'.join(str(x) for x in version_tuple)


def get_python_location() -> str:
    """Get the path of the python executable."""
    return os.path.dirname(sys.executable)


def get_stored_python_version() -> Optional[str]:
    """Get the stored python version as a string."""

    # Read python version from file
    python_version = None
    if os.path.exists(PYTHON_VERSION_FILE):
        with open(PYTHON_VERSION_FILE, mode='r') as f:
            version_string = f.readline().strip()
            if version_string and re.match(PYTHON_VERSION_REGEX, version_string):
                python_version = version_string

    return python_version


def store_python_version(python_version: str) -> None:
    """Store the currently used python version."""
    with open(PYTHON_VERSION_FILE, mode='w') as f:
        f.write(str(python_version))


def is_python_version_changed() -> bool:
    """Check if the python version has changed compared to the previous run."""
    previous_python_version = get_stored_python_version()
    current_python_version = get_python_version()
    return not previous_python_version or current_python_version != previous_python_version


def get_venv_creation_time() -> Optional[str]:
    """Get the creation time of the virtual environment."""
    creation_time = None

    # Get venv creation time as modification time of pyvenv.cfg (created when venv is created)
    pyvenv = Path(sys.prefix).joinpath(VENV_CFG_FILE)
    if pyvenv.exists():
        try:
            creation_time = datetime.datetime.fromtimestamp(pyvenv.stat().st_mtime).strftime(TIMESTAMP_FORMAT)
        except Exception:
            pass

    return creation_time


def get_stored_venv_creation_time() -> Optional[str]:
    """Get the stored creation time of the virtual environment."""
    creation_time = None

    # Read stored venv creation time from file
    if os.path.exists(VENV_CREATION_TIME_FILE):
        with open(VENV_CREATION_TIME_FILE, mode='r') as f:
            creation_time = f.readline().strip()

    return creation_time


def store_venv_creation_time(creation_time: str) -> None:
    """Store the creation time of the currently used virtual environment."""
    with open(VENV_CREATION_TIME_FILE, mode='w') as f:
        f.write(creation_time)


def is_venv_creation_time_changed() -> bool:
    """Check if the creation time of the virutal environment has changed compared to the previous run."""
    previous_creation_time = get_stored_venv_creation_time()
    current_creation_time = get_venv_creation_time()
    return not previous_creation_time or current_creation_time != previous_creation_time
