# coding=utf-8

import cherrypy
import jsonpickle

from autosubliminal.util.encoding import s2b


def json_out_handler(*args, **kwargs):
    """
    Custom cherrypy json_handler which uses jsonpickle for converting objects to json.
    This is a copy from cherrypy.jsontools json_handler() but encodes with jsonpickle.

    Remark: cherrypy requires a bytes output, so make sure to convert it to bytes.
    """
    value = cherrypy.serving.request._json_inner_handler(*args, **kwargs)
    return s2b(jsonpickle.encode(value, unpicklable=False))
