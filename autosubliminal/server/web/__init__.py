# coding=utf-8

import cherrypy

import autosubliminal


def redirect(abspath, *args, **kwargs):
    assert abspath[0] == '/'
    raise cherrypy.HTTPRedirect(autosubliminal.WEBROOT + abspath, *args, **kwargs)


def redirect_referer(abspath, *args, **kwargs):
    referer = cherrypy.request.headers.get('Referer')
    if referer:
        raise cherrypy.HTTPRedirect(referer, *args, **kwargs)
    else:
        redirect(abspath)
