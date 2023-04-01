# coding=utf-8

import os
import tempfile
from typing import BinaryIO

import cherrypy


class FileUpload(object):
    file: BinaryIO
    filename: str


class Upload(object):
    """ Upload path."""

    @cherrypy.expose(alias='tmp')
    def tmp(self, file_upload: FileUpload) -> str:
        # Get tmp file path
        tmp_file = os.path.abspath(os.path.join(tempfile.gettempdir(), file_upload.filename))

        # Remove any previous tmp file with same name
        if os.path.exists(tmp_file):
            os.remove(tmp_file)

        # Write tmp file
        with open(tmp_file, mode='wb') as handler:
            while True:
                data = file_upload.file.read(8192)
                if not data:
                    break
                handler.write(data)

        return tmp_file
