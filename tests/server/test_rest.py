# coding=utf-8

import pytest
from pytest import MonkeyPatch

from autosubliminal.server.rest import MethodNotAllowed, MethodNotImplemented, NotFound, RestResource


def test_rest_method_not_found(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('cherrypy.request.method', 'UNKNOWN')
    resource = RestResource()
    with pytest.raises(NotFound):
        resource.default()


def test_rest_method_not_allowed():
    resource = RestResource()
    with pytest.raises(MethodNotAllowed):
        resource.default()


def test_rest_get(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('cherrypy.request.method', 'GET')
    resource = RestResource()
    resource.allowed_methods = ['GET']
    with pytest.raises(MethodNotImplemented):
        resource.default()


def test_rest_post(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('cherrypy.request.method', 'POST')
    resource = RestResource()
    resource.allowed_methods = ['POST']
    with pytest.raises(MethodNotImplemented):
        resource.default()


def test_rest_put(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('cherrypy.request.method', 'PUT')
    resource = RestResource()
    resource.allowed_methods = ['PUT']
    with pytest.raises(MethodNotImplemented):
        resource.default()


def test_rest_patch(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('cherrypy.request.method', 'PATCH')
    resource = RestResource()
    resource.allowed_methods = ['PATCH']
    with pytest.raises(MethodNotImplemented):
        resource.default()


def test_rest_delete(monkeypatch: MonkeyPatch):
    monkeypatch.setattr('cherrypy.request.method', 'DELETE')
    resource = RestResource()
    resource.allowed_methods = ['DELETE']
    with pytest.raises(MethodNotImplemented):
        resource.default()
