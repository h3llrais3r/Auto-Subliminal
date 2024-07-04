# coding=utf-8

from abc import ABC
from inspect import getfullargspec
from typing import Any, List, NoReturn, Optional, cast

import cherrypy


class RestResource(ABC):
    """
    Base class for all REST resources.
    Based on https://gist.github.com/direct-fuel-injection/9c67d234a5ab1fd12c04.
    All data passed must be json data.
    All data returned will be json data.
    """

    def __init__(self) -> None:
        self.http_method: str = None
        self.allowed_methods: List[str] = []

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out(content_type='application/json; charset=utf-8')  # add charset to content-type
    def default(self, *args: Any, **kwargs: Any) -> Any:
        # Set http method
        self.http_method = cast(str, cherrypy.request.method)

        # Validate if resource exists
        if len(args) or not hasattr(self, self.http_method.lower()):
            raise NotFound()

        # Validate if method is allowed
        if self.http_method not in self.allowed_methods:
            cherrypy.response.headers['Allow'] = ','.join(self.allowed_methods)
            raise MethodNotAllowed()

        # Validate resource url
        method = getattr(self, self.http_method.lower())  # methods are defined in lower case
        arg_spec = getfullargspec(method)
        defaults_count = len(arg_spec.defaults) if arg_spec.defaults else 0
        arg_spec_set = set(arg_spec.args[1 : len(arg_spec.args) - defaults_count])
        arg_method_set = set(kwargs.keys())
        # Proper 404 error for paths like /api/songs/{{wrong_id}}/artists/35745
        if len(arg_spec_set.difference(arg_method_set)):
            raise NotFound()

        # Call method
        return method(*args, **kwargs)

    def head(self, *args: Any, **kwargs: Any) -> Any:
        raise MethodNotImplemented()

    def get(self, *args: Any, **kwargs: Any) -> Any:
        raise MethodNotImplemented()

    def post(self, *args: Any, **kwargs: Any) -> Any:
        raise MethodNotImplemented()

    def put(self, *args: Any, **kwargs: Any) -> Optional[Any]:
        raise MethodNotImplemented()

    def patch(self, *args: Any, **kwargs: Any) -> Optional[Any]:
        raise MethodNotImplemented()

    def delete(self, *args: Any, **kwargs: Any) -> Optional[Any]:
        raise MethodNotImplemented()

    # Cannot be used as 'return self._set_no_content_status()' due to https://github.com/python/mypy/issues/6549
    def _set_no_content_status(self) -> None:
        cherrypy.response.status = 204

    def _raise_bad_request(self, error_message: str) -> NoReturn:
        raise BadRequest(message=error_message)

    def _raise_conflict(self, error_message: str) -> NoReturn:
        raise Conflict(message=error_message)

    def _raise_internal_server_error(self, error_message: str = None) -> NoReturn:
        raise InternalServerError(message=error_message)


class BadRequest(cherrypy.HTTPError):
    """
    Exception raised for a bad request (400).
    """

    def __init__(self, message: str) -> None:
        self.args = (message,)
        cherrypy.HTTPError.__init__(self, status=400, message=message)


class NotFound(cherrypy.HTTPError):
    """
    Exception raised when the requested path is not found (404).
    """

    def __init__(self) -> None:
        cherrypy.HTTPError.__init__(self, status=404, message='Not found')


class MethodNotAllowed(cherrypy.HTTPError):
    """
    Exception raised when the request method is not allowed (405).
    """

    def __init__(self) -> None:
        cherrypy.HTTPError.__init__(self, status=405, message='Method not allowed')


class Conflict(cherrypy.HTTPError):
    """
    Exception raised for a conflict (409).
    """

    def __init__(self, message: str) -> None:
        self.args = (message,)
        cherrypy.HTTPError.__init__(self, status=409, message=message)


class InternalServerError(cherrypy.HTTPError):
    """
    Exception raised when the request return an internal server error (500).
    """

    def __init__(self, message: str = None) -> None:
        cherrypy.HTTPError.__init__(self, status=500, message=message or 'Internal server error')


class MethodNotImplemented(cherrypy.HTTPError):
    """
    Exception raised when the request method is not implemented (501).
    """

    def __init__(self) -> None:
        cherrypy.HTTPError.__init__(self, status=501, message='Method not implemented')
