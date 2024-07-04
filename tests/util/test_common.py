# coding=utf-8

import os
import tempfile
from datetime import datetime
from typing import Any, Dict, List, Set

import pytest
from pytest import MonkeyPatch
from pytest_mock import MockerFixture
from vcr import VCR

import autosubliminal
from autosubliminal import version
from autosubliminal.util.common import (
    atoi,
    camelize,
    connect_url,
    convert_timestamp,
    decamelize,
    find_path_in_paths,
    get_boolean,
    get_common_path,
    get_file_size,
    get_root_path,
    get_today,
    get_wanted_languages,
    humanize_bytes,
    natural_keys,
    run_cmd,
    safe_lowercase,
    safe_str,
    safe_trim,
    safe_uppercase,
    sanitize,
    set_rw_and_remove,
    to_dict,
    to_list,
    to_obj,
    to_obj_or_list,
    wait_for_internet_connection,
)

vcr = VCR(
    path_transformer=VCR.ensure_suffix('.yaml'),
    record_mode='once',
    match_on=['method', 'scheme', 'host', 'port', 'path', 'query', 'body'],
    cassette_library_dir=os.path.join(os.path.abspath(os.path.dirname(__file__)), 'cassettes', 'common'),
)

text_value = 'test'
text_value_upper = 'TEST'
text_value_special_char = 'ù'
text_value_special_char_upper = 'Ù'
num_value = 1
long_value = 1.0
bool_value = True
list_value_empty: List[Any] = []
list_value_with_items = ['a', 'b']
list_value_with_items_upper = ['A', 'B']
set_value_empty: Set[Any] = set()
set_value_with_items = sorted({'a', 'b'})  # sorted to be able to compare
set_value_with_items_upper = sorted({'A', 'B'})  # sorted to be able to compare
dict_value_empty: Dict[Any, Any] = {}
dict_value_with_items = {'1': 'a'}
dict_value_with_items_upper = {'1': 'A'}


class MyObject(object):
    def __init__(self) -> None:
        self.my_key1 = 1
        self.my_key2 = '2'
        self.my_key3 = [3]
        self._my_key4 = 4

    @property
    def my_key5(self) -> Dict[str, Any]:
        return {'my_sub_key5': 5}

    @property
    def my_key6(self) -> int:
        return 6

    def my_method1(self) -> None:
        pass

    def _my_method2(self) -> None:
        pass


def test_get_today() -> None:
    today = get_today()
    assert today is not None
    assert isinstance(today, datetime)


def test_run_cmd() -> None:
    assert run_cmd('cd') is not None


@vcr.use_cassette()
def test_connect_url(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.USERAGENT', 'Auto-Subliminal/' + version.RELEASE_VERSION)
    monkeypatch.setattr('autosubliminal.TIMEOUT', 60)
    response = connect_url('https://raw.github.com/h3llrais3r/Auto-Subliminal/master/autosubliminal/version.py')
    assert response is not None
    assert response.text is not None


def test_connect_url_exception(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.USERAGENT', 'Auto-Subliminal/' + version.RELEASE_VERSION)
    monkeypatch.setattr('autosubliminal.TIMEOUT', 60)
    with pytest.raises(Exception):
        connect_url('invalid_url')


def test_wait_for_internet_connection(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.util.common.connect_url')
    time_sleep = mocker.patch('time.sleep')
    wait_for_internet_connection()
    assert not time_sleep.called


def test_wait_for_internet_connection_with_sleep(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.util.common.connect_url', side_effect=[Exception, None])
    time_sleep = mocker.patch('time.sleep')
    wait_for_internet_connection()
    assert time_sleep.called


def test_to_obj() -> None:
    value_0 = 0
    value_1 = 1
    value_2 = '2'
    value_empty = ''
    assert to_obj(None) is None
    assert to_obj(None, default_value='') == ''
    assert to_obj(value_0) == '0'
    assert to_obj(value_0, obj_type=bool) is False
    assert to_obj(value_1) == '1'
    assert to_obj(value_2, obj_type=int) == 2
    assert to_obj(value_empty) == ''
    assert to_obj(value_empty, obj_type=int) is None
    assert to_obj(value_empty, obj_type=int, default_value=0) == 0
    assert to_obj(value_empty, obj_type=bool) is False


def test_to_list() -> None:
    value_0 = 0
    value_1 = '1'
    value_2 = '1,2'
    value_3 = [1, 2, 3]
    value_4 = ['1', '2', '3', '4']
    assert to_list(None) is None
    assert to_list([]) == []
    assert to_list('') is None
    assert to_list('', default_value=[]) == []
    assert to_list(value_0) == ['0']
    assert to_list(value_0, obj_type=int) == [0]
    assert to_list(value_0, obj_type=bool) == [False]
    assert to_list(value_1) == ['1']
    assert to_list(value_2, obj_type=int) == [1, 2]
    assert to_list(value_3) == ['1', '2', '3']
    assert to_list(value_4, obj_type=int) == [1, 2, 3, 4]


def test_to_obj_or_list() -> None:
    value_0 = 0
    value_1 = '1'
    value_2 = '1,2'
    assert to_obj_or_list(None) is None
    assert to_obj_or_list([]) == []
    assert to_obj_or_list(value_0) == '0'
    assert to_obj_or_list(value_0, obj_type=int) == 0
    assert to_obj_or_list(value_0, obj_type=bool) is False
    assert to_obj_or_list(value_1) == '1'
    assert to_obj_or_list(value_2) == ['1', '2']
    assert to_obj_or_list(value_2, obj_type=int) == [1, 2]


def test_to_dict() -> None:
    obj_dict = {'my_key1': 1, 'my_key2': '2', 'my_key3': [3], 'my_key5': {'my_sub_key5': 5}}
    object_dict_with_key7 = dict(obj_dict)
    object_dict_with_key7.update({'my_key7': 7})
    my_args = ('my_key6',)
    my_kwargs = {'my_key7': 7}
    assert to_dict(MyObject(), decamelize, 'my_key6') == obj_dict
    assert to_dict(MyObject(), decamelize, *my_args, **my_kwargs) == object_dict_with_key7
    assert to_dict(MyObject(), None, 'my_key6') == obj_dict
    assert to_dict(MyObject(), None, decamelize, *my_args, **my_kwargs) == object_dict_with_key7


def test_to_dict_camelized() -> None:
    obj_dict = {'myKey1': 1, 'myKey2': '2', 'myKey3': [3], 'myKey5': {'mySubKey5': 5}}
    object_dict_with_key7 = dict(obj_dict)
    object_dict_with_key7.update({'myKey7': [{'mySubKey7a': '7a'}, {'mySubKey7b': '7b'}]})
    my_args = ('my_key6',)
    my_kwargs = {'my_key7': [{'my_sub_key7a': '7a'}, {'my_sub_key7b': '7b'}]}
    assert to_dict(MyObject(), camelize, 'my_key6') == obj_dict
    assert to_dict(MyObject(), camelize, *my_args, **my_kwargs) == object_dict_with_key7


def test_get_boolean() -> None:
    assert get_boolean('1')
    assert get_boolean('yes')
    assert get_boolean('true')
    assert get_boolean('on')
    assert not get_boolean('0')
    assert not get_boolean('no')
    assert not get_boolean('false')
    assert not get_boolean('off')
    with pytest.raises(ValueError):
        get_boolean('test')


def test_safe_str() -> None:
    assert safe_str(None) == ''
    assert safe_str(None, uppercase=True) == ''
    assert safe_str(None, default_value='default') == 'default'
    assert safe_str(None, default_value='default', uppercase=True) == 'DEFAULT'
    assert safe_str('') == ''
    assert safe_str('', uppercase=True) == ''
    assert safe_str('', default_value='default') == 'default'
    assert safe_str('', default_value='default', uppercase=True) == 'DEFAULT'
    assert safe_str(num_value) == '1'
    assert safe_str(num_value, uppercase=True) == '1'
    assert safe_str(long_value) == '1.0'
    assert safe_str(long_value, uppercase=True) == '1.0'
    assert safe_str(bool_value) == 'True'
    assert safe_str(bool_value, uppercase=True) == 'TRUE'
    assert safe_str(text_value) == 'test'
    assert safe_str(text_value, uppercase=True) == 'TEST'
    assert safe_str(text_value_special_char) == 'ù'
    assert safe_str(text_value_special_char, uppercase=True) == 'Ù'
    assert safe_str(list_value_empty) == ''
    assert safe_str(list_value_empty, uppercase=True) == ''
    assert safe_str(list_value_with_items) == 'a,b'
    assert safe_str(list_value_with_items, uppercase=True) == 'A,B'
    assert safe_str(set_value_empty) == ''
    assert safe_str(set_value_empty, uppercase=True) == ''
    assert safe_str(set_value_with_items) == 'a,b'
    assert safe_str(set_value_with_items, uppercase=True) == 'A,B'
    assert safe_str(dict_value_empty) == ''
    assert safe_str(dict_value_empty, uppercase=True) == ''
    assert safe_str(dict_value_with_items) == "{'1': 'a'}"
    assert safe_str(dict_value_with_items, uppercase=True) == "{'1': 'A'}"


def test_safe_text_default_value(mocker: MockerFixture) -> None:
    mocker.patch('autosubliminal.util.common.str', side_effect=Exception)
    assert safe_str(None, default_value='fallback') == 'fallback'


def test_safe_lowercase() -> None:
    assert safe_lowercase(None) == ''
    assert safe_lowercase(None, default_value='n/a') == 'n/a'
    assert safe_lowercase('') == ''
    assert safe_lowercase('', default_value='n/a') == 'n/a'
    assert safe_lowercase(text_value_upper) == 'test'
    assert safe_lowercase(text_value_special_char_upper) == 'ù'
    assert safe_lowercase(num_value) == '1'
    assert safe_lowercase(long_value) == '1.0'
    assert safe_lowercase(bool_value) == 'true'
    assert safe_lowercase(list_value_empty) == ''
    assert safe_lowercase(list_value_with_items_upper) == 'a,b'
    assert safe_lowercase(set_value_empty) == ''
    assert safe_lowercase(set_value_with_items_upper) == 'a,b'
    assert safe_lowercase(dict_value_empty) == ''
    assert safe_lowercase(dict_value_with_items_upper) == "{'1': 'a'}"


def test_safe_uppercase() -> None:
    assert safe_uppercase(None) == ''
    assert safe_uppercase(None, default_value='N/A') == 'N/A'
    assert safe_uppercase('') == ''
    assert safe_uppercase('', default_value='N/A') == 'N/A'
    assert safe_uppercase(text_value_upper) == 'TEST'
    assert safe_uppercase(text_value_special_char_upper) == 'Ù'
    assert safe_uppercase(num_value) == '1'
    assert safe_uppercase(long_value) == '1.0'
    assert safe_uppercase(bool_value) == 'TRUE'
    assert safe_uppercase(list_value_empty) == ''
    assert safe_uppercase(list_value_with_items_upper) == 'A,B'
    assert safe_uppercase(set_value_empty) == ''
    assert safe_uppercase(set_value_with_items_upper) == 'A,B'
    assert safe_uppercase(dict_value_empty) == ''
    assert safe_uppercase(dict_value_with_items_upper) == "{'1': 'A'}"


def test_safe_trim() -> None:
    assert safe_trim(None) == ''
    assert safe_trim(None, default_value='N/A') == 'N/A'
    assert safe_trim('test') == 'test'
    assert safe_trim(' test ') == 'test'
    assert safe_trim('\ntest\n') == 'test'
    assert safe_trim('\rtest\r') == 'test'
    assert safe_trim('\ttest\t') == 'test'
    assert safe_trim(' \n\r\ttest \n\r\t') == 'test'
    assert safe_trim(' \n\r\ttest and test \n\r\t') == 'test and test'
    assert safe_trim(' \n\r\ttest \n\r\tand \n\r\ttest \n\r\t') == 'test \n\r\tand \n\r\ttest'
    assert safe_trim(num_value) == '1'
    assert safe_trim(long_value) == '1.0'
    assert safe_trim(bool_value) == 'True'
    assert safe_trim(list_value_empty) == ''
    assert safe_trim(list_value_with_items) == 'a,b'
    assert safe_trim(set_value_empty) == ''
    assert safe_trim(set_value_with_items) == 'a,b'
    assert safe_trim(dict_value_empty) == ''
    assert safe_trim(dict_value_with_items) == "{'1': 'a'}"


def test_camelize() -> None:
    assert camelize(None) is None
    assert camelize('') == ''
    assert camelize('test_me_4') == 'testMe4'
    assert camelize('TEST_me4') == 'testMe4'
    assert camelize('utf_8_encoding') == 'utf8Encoding'
    assert camelize('utf8_encoding') == 'utf8Encoding'
    assert camelize('testMe') == 'testMe'


def test_decamelize() -> None:
    assert decamelize(None) is None
    assert decamelize('') == ''
    assert decamelize('testMe4') == 'test_me4'
    assert decamelize('TEST_me4') == 'test_me4'
    assert decamelize('utf8Encoding') == 'utf8_encoding'
    assert decamelize('test_me') == 'test_me'


def test_sanitize() -> None:
    assert sanitize(None) is None
    assert sanitize('(Mr.-Robot! / :),') == 'mr robot'


def test_convert_timestamp(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.DBTIMESTAMPFORMAT', '%Y-%m-%d %H:%M:%S')
    monkeypatch.setattr('autosubliminal.TIMESTAMPFORMAT', '%d-%m-%Y %H:%M:%S')
    assert convert_timestamp('2015-12-31 23:59:59') == '31-12-2015 23:59:59'


def test_humanize_bytes() -> None:
    assert humanize_bytes(0) == '0 bytes'
    assert humanize_bytes(1) == '1 byte'
    assert humanize_bytes(1024) == '1.0 kB'
    assert humanize_bytes(1024 * 123) == '123.0 kB'
    assert humanize_bytes(1024 * 12342) == '12.1 MB'
    assert humanize_bytes(1024 * 12342, 2) == '12.05 MB'
    assert humanize_bytes(1024 * 1234, 2) == '1.21 MB'
    assert humanize_bytes(1024 * 1234 * 1111, 2) == '1.31 GB'
    assert humanize_bytes(1024 * 1234 * 1111, 1) == '1.3 GB'


def test_get_common_path() -> None:
    separator = '\\'
    assert get_common_path(['c:\\temp\\test', 'c:\\temp\\video_path.ext'], separator) == 'c:\\temp'
    assert get_common_path(['c:\\temp', 'd:\\temp'], separator) is None


def test_find_path_in_paths() -> None:
    paths = ['path/to/dir1', 'path/to/dir2/sub/dir']
    assert find_path_in_paths('path/to/dir1', paths) == 'path/to/dir1'
    assert find_path_in_paths('path/to/dir1', paths, check_common_path=True) == 'path/to/dir1'
    assert find_path_in_paths('path/to/dir1/sub/dir', paths) is None
    assert find_path_in_paths('path/to/dir1/sub/dir', paths, check_common_path=True) == 'path/to/dir1'
    assert find_path_in_paths('path/to/dir2', paths) is None
    assert find_path_in_paths('path/to/dir2', paths, check_common_path=True) is None
    assert find_path_in_paths('path/to/dir2/sub/dir', paths) == 'path/to/dir2/sub/dir'
    assert find_path_in_paths('path/to/dir2/sub/dir', paths, check_common_path=True) == 'path/to/dir2/sub/dir'


def test_get_root_path() -> None:
    separator = '\\'
    autosubliminal.VIDEOPATHS = ['c:\\temp', 'c:\\test']
    assert get_root_path('c:\\temp\\video_path.ext', separator) == 'c:\\temp'
    with pytest.raises(RuntimeError):
        get_root_path('c:\\temp2\\test.ext', separator)


def test_get_file_size() -> None:
    file_path = None
    try:
        fd, file_path = tempfile.mkstemp(text=True)
        file = open(file_path, 'w')
        file.write('test')
        file.close()
        os.close(fd)
        size = get_file_size(file_path)
        assert float(size) > 0
    finally:
        if os.path.exists(file_path):
            os.remove(file_path)


def test_get_file_size_exception() -> None:
    assert get_file_size('path/does/not/exist') == 0


def test_set_rw_and_remove() -> None:
    file_path = None
    try:
        fd, file_path = tempfile.mkstemp(text=True)
        file = open(file_path, 'w')
        file.write('test')
        file.close()
        os.close(fd)
        set_rw_and_remove(os.remove, file_path, None)
        assert not os.path.exists(file_path)
    finally:
        if os.path.exists(file_path):
            os.remove(file_path)


def test_atoi() -> None:
    assert atoi('test') == 'test'
    assert atoi('test01') == 'test01'
    assert atoi('01') == 1
    assert atoi('1') == 1


def test_natural_keys() -> None:
    my_list = ['season 23', 'season 15', 'season 30', 'season 05', 'season 01', 'root']
    my_sorted_list = ['root', 'season 01', 'season 05', 'season 15', 'season 23', 'season 30']
    assert sorted(my_list, key=natural_keys) == my_sorted_list


def test_get_wanted_languages(monkeypatch: MonkeyPatch) -> None:
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['en', 'fr'])
    assert ['nl', 'en', 'fr'] == get_wanted_languages()
