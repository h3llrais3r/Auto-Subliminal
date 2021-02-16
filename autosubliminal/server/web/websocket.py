# coding=utf-8

import cherrypy


class WebSocket(object):
    """
    Websocket paths.

    You can access the websocket handler class instance through:
    handler = cherrypy.request.ws_handler
    """

    @cherrypy.expose
    def log(self):
        """Log websocket."""
        pass

    @cherrypy.expose
    def system(self):
        """System websocket."""
        pass
