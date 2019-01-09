# coding=utf-8

import abc
from inspect import getargspec

import cherrypy
from six import add_metaclass


@add_metaclass(abc.ABCMeta)
class RestResource(object):
    """
    Base class for all REST resources.
    Based on https://gist.github.com/direct-fuel-injection/9c67d234a5ab1fd12c04.
    All data passed must be json data.
    All data returned will be json data.
    """

    def __init__(self):
        self.http_method = None
        self.allowed_methods = ()

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out(content_type='application/json; charset=utf-8')  # add charset to content-type
    def default(self, *args, **kwargs):
        # Set http method
        self.http_method = cherrypy.request.method

        # Validate if resource exists
        if len(args) or not hasattr(self, self.http_method.lower()):
            raise NotFound()

        # Validate if method is allowed
        if self.http_method not in self.allowed_methods:
            cherrypy.response.headers["Allow"] = ",".join(self.allowed_methods)
            raise MethodNotAllowed()

        # Validate resource url
        method = getattr(self, self.http_method.lower())  # methods are defined in lower case
        arg_spec = getargspec(method)
        defaults_count = len(arg_spec.defaults) if arg_spec.defaults else 0
        arg_spec_set = set(arg_spec.args[1:len(arg_spec.args) - defaults_count])
        arg_method_set = set(kwargs.keys())
        # Proper 404 error for paths like /api/songs/{{wrong_id}}/artists/35745
        if len(arg_spec_set.difference(arg_method_set)):
            raise NotFound()

        # Call method
        return method(*args, **kwargs)

    def get(self, *args, **kwargs):
        raise MethodNotImplemented()

    def post(self, *args, **kwargs):
        raise MethodNotImplemented()

    def put(self, *args, **kwargs):
        raise MethodNotImplemented()

    def delete(self, *args, **kwargs):
        raise MethodNotImplemented()

    def _bad_request(self, error_message):
        raise BadRequest(message=error_message)

    def _no_content(self):
        cherrypy.response.status = 204


class BadRequest(cherrypy.HTTPError):
    """
    Exception raised for a bad request (400).
    """

    def __init__(self, message):
        self.args = (message,)
        cherrypy.HTTPError.__init__(self, status=400, message=message)


class NotFound(cherrypy.HTTPError):
    """
    Exception raised when the requested path is not found (404).
    """

    def __init__(self):
        cherrypy.HTTPError.__init__(self, status=404, message='Not found')


class MethodNotAllowed(cherrypy.HTTPError):
    """
    Exception raised when the request method is not allowed (405).
    """

    def __init__(self):
        cherrypy.HTTPError.__init__(self, status=405, message='Method not allowed')


class MethodNotImplemented(cherrypy.HTTPError):
    """
    Exception raised when the request method is not implemented (501).
    """

    def __init__(self):
        cherrypy.HTTPError.__init__(self, status=501, message='Method not implemented')
