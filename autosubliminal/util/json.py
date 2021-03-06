# coding=utf-8

import cherrypy
import jsonpickle

from autosubliminal.util.encoding import s2b


def from_json(value):
    """
    Convert json to an object. This will only work for objects which were converted to json with unpickable=True.
    In all other cases, the result will be a dict instead.

    :param value: the value to convert to an object
    :return: the object or dict
    """
    return jsonpickle.loads(value)


def to_json(value, unpickable=False):
    """
    Convert an object to json.

    :param value: the value to convert to json
    :param unpickable: if set to true, the json will contain extra info to convert the json back to the object
    :return: the json string
    """
    return jsonpickle.dumps(value, unpicklable=unpickable)


def json_out_handler(*args, **kwargs):
    """
    Custom cherrypy json_handler which uses jsonpickle for converting objects to json.
    This is a copy from cherrypy.jsontools json_handler() but encodes with jsonpickle.

    Remark: cherrypy requires a bytes output, so make sure to convert it to bytes.
    """
    value = cherrypy.serving.request._json_inner_handler(*args, **kwargs)
    return s2b(jsonpickle.dumps(value, unpicklable=False))
