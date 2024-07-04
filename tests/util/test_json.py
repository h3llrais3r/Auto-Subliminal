# coding=utf-8


import jsonpickle
from pytest_mock import MockerFixture

from autosubliminal.util.encoding import s2b
from autosubliminal.util.json import from_json, json_out_handler, to_json


class MyClass(object):
    def __init__(self, id: int) -> None:
        self.id = id
        self.key1 = 'key1'
        self.key2 = 'key2'
        self.object1 = MyChildClass(1, id)
        self.object2 = MyChildClass(2, id)

    def __eq__(self, other: object) -> bool:
        return self.__dict__ == other.__dict__


class MyChildClass(object):
    def __init__(self, id: int, parent_id: int) -> None:
        self.id = id + (parent_id * 10)
        self.key1 = 'keychild1'
        self.key2 = 'keychild2'

    def __eq__(self, other: object) -> bool:
        return self.__dict__ == other.__dict__


obj = MyClass(1)

obj_dict = {
    'id': 1,
    'key1': 'key1',
    'key2': 'key2',
    'object1': {'id': 11, 'key1': 'keychild1', 'key2': 'keychild2'},
    'object2': {'id': 12, 'key1': 'keychild1', 'key2': 'keychild2'},
}

obj_json = (
    '{"id": 1,'
    ' "key1": "key1",'
    ' "key2": "key2",'
    ' "object1": {"id": 11, "key1": "keychild1", "key2": "keychild2"},'
    ' "object2": {"id": 12, "key1": "keychild1", "key2": "keychild2"}}'
)

obj_json_unpickable_true = (
    '{"id": 1,'
    ' "key1": "key1",'
    ' "key2": "key2",'
    ' "object1": {"id": 11,'
    ' "key1": "keychild1",'
    ' "key2": "keychild2",'
    ' "py/object": "tests.util.test_json.MyChildClass"},'
    ' "object2": {"id": 12,'
    ' "key1": "keychild1",'
    ' "key2": "keychild2",'
    ' "py/object": "tests.util.test_json.MyChildClass"},'
    ' "py/object": "tests.util.test_json.MyClass"}'
)

# Force sorted keys to be able to compare results (Python 3 sorts by default)
jsonpickle.set_encoder_options('simplejson', sort_keys=True)


def test_object_from_json() -> None:
    assert obj == from_json(obj_json_unpickable_true)


def test_dict_from_json() -> None:
    assert obj_dict == from_json(obj_json)


def test_object_to_json() -> None:
    assert obj_json == to_json(obj)


def test_dict_to_json() -> None:
    assert obj_json == to_json(obj_dict)


def test_json_out_handler(mocker: MockerFixture) -> None:
    mocker.patch('cherrypy.serving.request')
    mocker.patch('cherrypy.serving.request._json_inner_handler', return_value=obj)
    assert json_out_handler() == s2b(obj_json)  # cherrypy requires a bytes output
