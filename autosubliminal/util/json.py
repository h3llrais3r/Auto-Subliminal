# coding=utf-8

import cherrypy
import jsonpickle


def json_out_handler(*args, **kwargs):
    """
    Custom cherrypy json_handler which uses jsonpickle for converting objects to json.
    This is a copy from cherrypy.jsontools json_handler() but encodes with jsonpickle.
    """
    value = cherrypy.serving.request._json_inner_handler(*args, **kwargs)
    return jsonpickle.encode(value, unpicklable=False)
