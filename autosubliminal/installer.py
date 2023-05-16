# coding=utf-8

import filecmp
import os
import re
import shutil
import site
import stat
import subprocess
import sys
import sysconfig
from pathlib import Path
from typing import Any, Callable, List, Optional, Union

from .util.system import (get_python_version, get_venv_creation_time, is_python_version_changed,
                          is_venv_creation_time_changed, store_python_version, store_venv_creation_time)

# ATTENTION: only use standard libs as no dependencies are installed yet!

# Variables to handle dependencies installation in virtual environment (custom or internal one)
SOURCE_PATH = Path(__file__).parent.parent.resolve()
IN_VENV = hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix)


def install() -> None:
    _check_min_python_version()
    _check_python_version_change()
    _setup_venv()


def _check_min_python_version() -> None:
    min_python_version = (3, 8)
    if sys.version_info < min_python_version:
        print('ERROR: Python 3.8 or higher is required.')
        os._exit(1)


def _check_python_version_change() -> None:
    if is_python_version_changed():
        store_python_version(get_python_version())


def _setup_venv() -> None:
    print('INFO: Setting up the virtual environment.')

    # Make sure we are running inside a virtual environment
    if not IN_VENV:
        print('WARNING: A virtual environment is required when running from source.')
        _create_venv_and_restart()

    # At this point, we are always running inside a virtual environment
    print('INFO: Checking if the current virtual environment is writable.')
    if not _check_env_writable():
        print('WARNING: The current virtual environment is not writable.')
        _create_venv_and_restart()  # create an internal virtual environment if the current one is not writable

    # Print python interpreter
    print('INFO: Running virtual environment python interpreter %s.' % sys.executable)

    # Install dependencies
    _install_dependencies()

    print('INFO: Virtual environment setup finished.')


def _check_env_writable() -> bool:
    """Check if we can install packages to the current environment."""

    locations = []

    # Get python site packages
    try:
        locations.append(sysconfig.get_path('purelib'))
    except Exception:
        pass

    # Get user site packages
    try:
        if site.ENABLE_USER_SITE or site.check_enableusersite():
            if site.USER_SITE:
                locations.append(site.USER_SITE)
            else:
                locations.append(site.getusersitepackages())
    except Exception:
        pass

    # Check if any location is writable
    return any([os.access(location, os.W_OK) for location in set(locations)])


def _create_venv_and_restart() -> None:
    """
    Create and restart in a virtual environment.

    Create a virtual environment in the .venv dir in the project root if it doesn't exist yet.
    Restart the application in the virtual environment.
    """

    # Helper function
    def remove_readonly(func: Callable, path: Any, _: Any) -> None:
        os.chmod(path, stat.S_IWRITE)
        func(path)

    python_version_changed = is_python_version_changed()
    venv_path = SOURCE_PATH.joinpath('.venv')
    current_interpreter = Path(sys.executable).resolve()

    # Check if virtual environment is not the same as the current environment
    if str(venv_path) == str(sys.prefix):
        if IN_VENV:
            print('ERROR: Unable to install to the existing virtual environment located at %s.' % sys.prefix)
            print('ERROR: Please check the permissions, and that it does not include global site packages.')
        os._exit(1)

    # Create virtual environment if it doesn't exist yet or when the python version is changed
    if not venv_path.is_dir() or python_version_changed:
        if python_version_changed:
            print('WARNING: New python version %s detected.' % get_python_version())
            print('INFO: Recreating the virtual environment in %s.' % venv_path)
            # Clear the venv ourselves as the the clear option in the venv.create can fail on windows
            shutil.rmtree(venv_path, onerror=remove_readonly)
        else:
            print('INFO: Creating a new virtual environment in %s.' % venv_path)
        try:
            import venv
            venv.create(venv_path, system_site_packages=False, clear=True, symlinks=os.name != 'nt', with_pip=True)
            print('INFO: Created new virtual environment in %s.' % venv_path)
        except (ImportError, Exception) as error:
            print('ERROR: Cannot create virtual environment: %s' % error)
            os._exit(1)

    # Launch application in virtual environment
    if venv_path.is_dir():
        locations_to_check = []
        locations_to_check.append(venv_path.joinpath('bin', current_interpreter.parts[-1]))
        locations_to_check.append(venv_path.joinpath('Scripts', current_interpreter.parts[-1]))

        for location in locations_to_check:
            if location.is_file() and location.stat().st_mode & os.X_OK:
                # Add original arguments to the launch command
                new_path = str(location)
                new_argv = [new_path] + sys.argv

                print('INFO: Restarting Auto-Subliminal in virtual environment with %s.' % new_argv)
                os.execvp(new_path, new_argv)

        print('ERROR: Could not find the virtual environment executable in %s. Exiting.' % venv_path)
        os._exit(1)


def _install_dependencies() -> None:
    """
    Install dependencies.

    Install the runtime dependencies if they are not yet installed before, or when they have changed.
    """

    print('INFO: Installing dependencies.')
    reqs = SOURCE_PATH.joinpath('requirements.txt')
    reqs_installed = SOURCE_PATH.joinpath('.requirements')

    # Force new install when a new virtual environment is detected
    if is_venv_creation_time_changed():
        print('WARNING: New virtual environment detected.')
        store_venv_creation_time(get_venv_creation_time())  # store the new venv creation time
        if reqs_installed.is_file():
            SOURCE_PATH.joinpath('.requirements').unlink()  # trigger new install of dependencies

    # Check if requirements are already installed and up to date
    if reqs.is_file() and reqs_installed.is_file() and filecmp.cmp(reqs, reqs_installed, False):
        print('INFO: Dependencies already installed and up to date.')
        return

    # Upgrade pip
    _upgrade_pip()

    # Install/upgrade install tools
    print('INFO: Installing installation tools.')
    _pip_install(['setuptools', 'wheel'])

    # Install/upgrade requirements
    print('INFO: Installing requirements.')
    _pip_install(reqs.read_text())
    shutil.copy(reqs, reqs_installed)  # Keep copy of installed requirements


def _upgrade_pip() -> None:
    """Upgrade pip."""

    print('INFO: Upgrading pip.')
    cmd = [
        sys.executable,
        '-m',
        'pip',
        'install',
        'pip',
        '--upgrade',
        '--quiet',
        '--no-input',
        '--no-color',
        '--disable-pip-version-check'
    ]
    result = _subprocess_call(cmd)
    if result != 0:
        print('ERROR: Cannot upgrade pip. Exiting.')
        os._exit(1)


def _pip_install(packages: Union[List[str], str]) -> None:
    if not isinstance(packages, list):
        # Clean out Warning line in list (dirty clean)
        packages = re.sub(r'Warning.*', '', packages)
        packages = packages.strip().splitlines()

    print('INFO: Installing package(s): %s' % ' '.join(packages))

    # Default cmd
    cmd = [
        sys.executable,
        '-m',
        'pip',
        'install',
        '--upgrade',
        '--quiet',
        '--no-input',
        '--no-color',
        '--disable-pip-version-check',
        '--no-python-version-warning'
    ]

    # OS specific helpers for pip install
    os_id = _get_os_id()
    if os_id in ('alpine', 'ubuntu'):
        cmd.append('--find-links=https://wheel-index.linuxserver.io/%s/' % os_id)
    if os_id == 'alpine':
        cmd.append('--extra-index-url=https://alpine-wheels.github.io/index')
    elif os_id in ('raspian', 'osmc'):
        cmd.append('--extra-index-url=https://www.piwheels.org/simple')
    syno_wheelhouse = SOURCE_PATH.with_name('wheelhouse')
    if syno_wheelhouse.is_dir():
        print('DEBUG: Found wheelhouse dir at %s.' % syno_wheelhouse)
        cmd.append('--find-links=%s' % syno_wheelhouse)
    print('DEBUG: Install cmd: %s %s' % (' '.join(cmd), '<packages>'))

    # Final cmd
    cmd += packages

    # Execute cmd (fallback to user site-packages)
    result = _subprocess_call(cmd)
    if result != 0:  # Not Ok
        print('INFO: Trying user site-packages.')
        result = _subprocess_call(cmd + ['--user'])
        if result != 0:  # Not Ok
            print('ERROR: Cannot install packages. Exiting.')
            os._exit(1)


def _get_os_id() -> Optional[str]:
    os_id = None
    os_release = Path('/etc/os-release').resolve()
    if os_release.is_file():
        from configparser import ConfigParser

        parser = ConfigParser()
        parser.read_string('[DEFAULT]\n' + os_release.read_text())
        try:
            os_id = parser['DEFAULT']['ID']
        except (KeyError, IndexError):
            pass
    return os_id


def _subprocess_call(cmd_list: List[str]) -> int:
    try:
        process = subprocess.Popen(cmd_list, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                   stderr=subprocess.PIPE, universal_newlines=True, cwd=os.getcwd())
        stdout, stderr = process.communicate()
        process.wait()
        if stdout:
            print('INFO: Sub process result: %s' % stdout)
        if stderr:
            print('WARNING: Sub process error: %s' % stderr)
    except Exception as error:
        print('ERROR: Unable to run sub process: %s' % error)
        return 126

    return process.returncode
