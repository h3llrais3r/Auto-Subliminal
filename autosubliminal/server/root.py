# coding=utf-8

import json
import re

import cherrypy

from autosubliminal.server.web import redirect
from autosubliminal.server.web.config import Config
from autosubliminal.server.web.home import Home
from autosubliminal.server.web.log import Log
from autosubliminal.server.web.system import System
from autosubliminal.templates.page import PageTemplate


def error_page(status, message, traceback, version):
    """
    Custom error page.

    :param status: The http error status
    :param message: The error message
    :param traceback: The error traceback
    :param version: The server version
    :return: The error page or json error
    """
    # Do not show error page for json errors, show json error response instead
    content_type = cherrypy.response.headers['Content-Type']
    if content_type and 'application/json' in content_type.lower():
        return json.dumps({'status': status, 'error': message})

    # Parse status code (example status: '404 Not Found')
    match = re.search(r'^(\d{3}).*$', status)

    # Render template
    status_code = int(match.group(1)) if match else 500
    return PageTemplate(filename='/general/error.mako').render(status_code=status_code, status=status,
                                                               message=message, traceback=traceback)


class WebServerRoot(object):
    def __init__(self):
        # Create root tree (name of attribute defines name of path: f.e. home -> /home)
        self.home = Home()
        self.config = Config()
        self.log = Log()
        self.system = System()

    @cherrypy.expose
    def index(self):
        redirect('/home')

    # Configure default error page
    _cp_config = {'error_page.default': error_page}
