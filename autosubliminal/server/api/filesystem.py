# coding=utf-8

import os
import re
import sys

from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import get_boolean


class FileSystemApi(RestResource):
    """
    Rest resource for handling the /filesystem path.
    """

    def __init__(self):
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self, **kwargs):
        """Get the details of a path from the filesytem."""
        files = []
        folders = []

        path = kwargs.get('path', '')
        include_files = get_boolean(kwargs.get('includeFiles', 'false'))

        try:

            # Make sure to browse a directory, if it's a file, use the files directory to brows
            path = path if os.path.isdir(path) else os.path.dirname(path)

            # List files and folders in path (for root path in windows, use mountvol to find all drives)
            if path == '' and sys.platform == 'win32':
                # Find mounted volumes on windows (only folders)
                folders = re.findall(r'[A-Z]+:.*$', os.popen('mountvol /').read(), re.MULTILINE)
                path = ''
            else:
                path = '/' if path == '' else path  # use root path on non windows platform if no path is specified
                tmp_list = os.listdir(path)  # list files/folders in path
                for tmp in tmp_list:
                    tmp_path = os.path.join(path, tmp)
                    if include_files and os.path.isfile(tmp_path):
                        files.append(tmp)
                    elif os.path.isdir(tmp_path):
                        folders.append(tmp)

            return {
                'files': files,
                'folders': folders,
                'path': path
            }

        except Exception:
            # Return no content on error (don't throw 4xx error to prevent api errors)
            return self._no_content()
