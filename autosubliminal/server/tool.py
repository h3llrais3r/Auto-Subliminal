# coding=utf-8

import cherrypy
from cherrypy import Tool


class SPARedirectTool(Tool):
    """
    Single Page Application redirect tool.

    This makes sure that single page application routing works (404 redirect to index.html).
    This replaces the usage of custom error page, which also works, but gives 404 error responses instead.
    """

    def __init__(self, index_url: str) -> None:
        Tool.__init__(self, 'before_handler', self._redirect)
        self._index_url = index_url

    def _redirect(self) -> None:
        if cherrypy.request.handler and cherrypy.request.handler.status == 404:
            raise cherrypy.InternalRedirect(self._index_url)
