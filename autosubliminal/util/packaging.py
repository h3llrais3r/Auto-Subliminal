# coding=utf-8

REQUIREMENTS_FILE = 'requirements.txt'


def get_libraries():
    """Return the dict with the packaged libraries and their versions."""
    libs = open(REQUIREMENTS_FILE, 'r').read().split('\n')

    # Only keep library and version (remove python dependencies and requires.io filters) and convert to dict
    requirements = filter(lambda x: x if '==' in x else None, list(map(lambda x: x.split(';')[0].split('#')[0], libs)))
    requirements_dict = dict(map(lambda x: (x.split('==')[0].lower(), x.split('==')[1].strip()), requirements))

    return requirements_dict


def get_library_version(library):
    """Return the version of a packaged library."""
    requirements_dict = get_libraries()

    # Return version or raise ValueError when library is not packaged
    if library.lower() in requirements_dict:
        return requirements_dict[library]
    else:
        raise ValueError('Not a packaged library: %s' % library)
