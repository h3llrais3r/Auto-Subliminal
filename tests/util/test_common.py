# coding=utf-8

import os
import tempfile
import time
from collections import OrderedDict
from datetime import datetime

import pytest
from vcr import VCR

import autosubliminal
from autosubliminal import version
from autosubliminal.core.item import WantedItem
from autosubliminal.util.common import get_today, run_cmd, connect_url, wait_for_internet_connection, to_dict, \
    get_boolean, safe_text, safe_trim, safe_uppercase, sanitize, display_mapping_dict, display_list_single_line, \
    display_list_multi_line, display_value, display_item_title, display_item_name, display_timestamp, \
    convert_timestamp, humanize_bytes, get_common_path, get_root_path, get_file_size, set_rw_and_remove

vcr = VCR(path_transformer=VCR.ensure_suffix('.yaml'),
          record_mode='once',
          match_on=['method', 'scheme', 'host', 'port', 'path', 'query', 'body'],
          cassette_library_dir=os.path.join(os.path.abspath(os.path.dirname(__file__)), 'cassettes', 'common'))

text_value = 'test'
text_value_special_char = u'ù'
num_value = 1
long_value = 1.0
bool_value = True
list_value = []
list_value_with_items = ['a', 'b']
dict_value = {}
dict_value_with_items = {'1': 'a'}


class MyObject(object):
    def __init__(self):
        self.key1 = 1
        self.key2 = '2'
        self.key3 = [3]
        self._key4 = 4

    @property
    def key5(self):
        return {'5': 5}

    @property
    def key6(self):
        return 6

    def method1(self):
        pass

    def _method2(self):
        pass


def test_get_today():
    today = get_today()
    assert today is not None
    assert isinstance(today, datetime)


def test_run_cmd():
    assert run_cmd('cd') is not None


@vcr.use_cassette()
def test_connect_url(monkeypatch):
    monkeypatch.setattr('autosubliminal.USERAGENT', 'Auto-Subliminal/' + version.RELEASE_VERSION)
    monkeypatch.setattr('autosubliminal.TIMEOUT', 60)
    response = connect_url('https://raw.github.com/h3llrais3r/Auto-Subliminal/master/autosubliminal/version.py')
    assert response is not None
    assert response.text is not None


def test_connect_url_exception(monkeypatch):
    monkeypatch.setattr('autosubliminal.USERAGENT', 'Auto-Subliminal/' + version.RELEASE_VERSION)
    monkeypatch.setattr('autosubliminal.TIMEOUT', 60)
    with pytest.raises(Exception):
        connect_url('invalid_url')


def test_wait_for_internet_connection(mocker):
    mocker.patch('autosubliminal.util.common.connect_url')
    time_sleep = mocker.patch('time.sleep')
    wait_for_internet_connection()
    assert not time_sleep.called


def test_wait_for_internet_connection_with_sleep(mocker):
    mocker.patch('autosubliminal.util.common.connect_url', side_effect=[Exception, None])
    time_sleep = mocker.patch('time.sleep')
    wait_for_internet_connection()
    assert time_sleep.called


def test_to_dict():
    obj_dict = {
        'key1': 1,
        'key2': '2',
        'key3': [3],
        'key5': {'5': 5}
    }
    my_args = ('key6',)
    assert to_dict(MyObject(), 'key6') == obj_dict
    assert to_dict(MyObject(), *my_args) == obj_dict  # test with predefined tuple


def test_get_boolean():
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


def test_save_text():
    assert safe_text(None) == 'None'
    assert safe_text(text_value) == 'test'
    assert safe_text(text_value_special_char) == u'ù'
    assert safe_text(num_value) == '1'
    assert safe_text(long_value) == '1.0'
    assert safe_text(bool_value) == 'True'
    assert safe_text(list_value) == '[]'
    assert safe_text(list_value_with_items) == '[\'a\', \'b\']'
    assert safe_text(dict_value) == '{}'
    assert safe_text(dict_value_with_items) == '{\'1\': \'a\'}'


def test_save_text_default_value(mocker):
    mocker.patch('autosubliminal.util.common.text_type', side_effect=Exception)
    assert safe_text(None, 'fallback') == 'fallback'


def test_safe_uppercase():
    assert safe_uppercase(None) is None
    assert safe_uppercase(None, 'N/A') == 'N/A'
    assert safe_uppercase(text_value) == 'TEST'
    assert safe_uppercase(text_value_special_char) == u'Ù'
    assert safe_uppercase(num_value) is None
    assert safe_uppercase(num_value, 'N/A') == 'N/A'
    assert safe_uppercase(long_value) is None
    assert safe_uppercase(long_value, 'N/A') == 'N/A'
    assert safe_uppercase(bool_value) is None
    assert safe_uppercase(bool_value, 'N/A') == 'N/A'
    assert safe_uppercase(list_value) is None
    assert safe_uppercase(list_value, 'N/A') == 'N/A'
    assert safe_uppercase(list_value_with_items, 'N/A') == 'N/A'
    assert safe_uppercase(safe_text(list_value_with_items), 'N/A') == '[\'A\', \'B\']'
    assert safe_uppercase(dict_value) is None
    assert safe_uppercase(dict_value, 'N/A') == 'N/A'
    assert safe_uppercase(dict_value_with_items, 'N/A') == 'N/A'
    assert safe_uppercase(safe_text(dict_value_with_items), 'N/A') == '{\'1\': \'A\'}'


def test_safe_trim():
    assert safe_trim(None) is None
    assert safe_trim(None, 'N/A') == 'N/A'
    assert safe_trim('test') == 'test'
    assert safe_trim(' test ') == 'test'
    assert safe_trim('\ntest\n') == 'test'
    assert safe_trim('\rtest\r') == 'test'
    assert safe_trim('\ttest\t') == 'test'
    assert safe_trim(' \n\r\ttest \n\r\t') == 'test'
    assert safe_trim(' \n\r\ttest and test \n\r\t') == 'test and test'
    assert safe_trim(' \n\r\ttest \n\r\tand \n\r\ttest \n\r\t') == 'test \n\r\tand \n\r\ttest'
    assert safe_trim(num_value) is None
    assert safe_trim(num_value, 'N/A') == 'N/A'
    assert safe_trim(long_value) is None
    assert safe_trim(long_value, 'N/A') == 'N/A'
    assert safe_trim(bool_value) is None
    assert safe_trim(bool_value, 'N/A') == 'N/A'
    assert safe_trim(list_value) is None
    assert safe_trim(list_value, 'N/A') == 'N/A'
    assert safe_trim(dict_value) is None
    assert safe_trim(dict_value, 'N/A') == 'N/A'


def test_sanitize():
    assert sanitize(None) is None
    assert sanitize('(Mr.-Robot :)') == 'mr robot'


def test_display_list_single_line():
    list_object = ['item1']
    assert display_list_single_line(list_object) == 'item1'
    list_object.append('item2')
    assert display_list_single_line(list_object) == 'item1,item2'


def test_display_list_multi_line():
    list_object = ['item1']
    assert display_list_multi_line(list_object) == 'item1'
    list_object.append('item2')
    assert display_list_multi_line(list_object) == 'item1\nitem2'


def test_display_mapping_dict():
    # We only use an OrderedDict here to keep the order as entered to be able to match the result
    mapping_dict = OrderedDict([('key1', 'value1')])
    assert display_mapping_dict(mapping_dict) == 'key1 = value1'
    mapping_dict.update({'key2': 'value2'})
    assert display_mapping_dict(mapping_dict) == 'key1 = value1\nkey2 = value2'


def test_display_value():
    assert display_value(None) == ''
    assert display_value('value') == 'value'
    assert display_value(u'ù') == u'ù'
    assert display_value('value', uppercase=True) == 'VALUE'
    assert display_value('', default_value='default') == 'default'
    assert display_value('', default_value='default', uppercase=True) == 'DEFAULT'


def test_display_item_title():
    wanted_item_1 = WantedItem(title='title1')
    wanted_item_2 = WantedItem(title='title2', year=2016)
    wanted_item_empty = WantedItem()
    assert display_item_title(wanted_item_1) == 'title1'
    assert display_item_title(wanted_item_1, uppercase=True) == 'TITLE1'
    assert display_item_title(wanted_item_2) == 'title2 (2016)'
    assert display_item_title(wanted_item_2, uppercase=True) == 'TITLE2 (2016)'
    assert display_item_title(wanted_item_empty) == 'N/A'
    assert display_item_title(wanted_item_empty, default_value='default') == 'default'
    assert display_item_title(wanted_item_empty, default_value='default', uppercase=True) == 'DEFAULT'


def test_display_item_name():
    wanted_item_1 = WantedItem(title='title1')
    wanted_item_2 = WantedItem(title='title2', year=2016, type='mmovie')
    wanted_item_3 = WantedItem(title='title3', type='episode', season=1, episode=1)
    wanted_item_4 = WantedItem(title='title4', year=2016, type='episode', season=1, episode=1)
    wanted_item_empty = WantedItem()
    assert display_item_name(wanted_item_1) == 'title1'
    assert display_item_name(wanted_item_1, uppercase=True) == 'TITLE1'
    assert display_item_name(wanted_item_2) == 'title2 (2016)'
    assert display_item_name(wanted_item_2, uppercase=True) == 'TITLE2 (2016)'
    assert display_item_name(wanted_item_3) == 'title3 S01E01'
    assert display_item_name(wanted_item_3, uppercase=True) == 'TITLE3 S01E01'
    assert display_item_name(wanted_item_4, uppercase=True) == 'TITLE4 (2016) S01E01'
    assert display_item_name(wanted_item_4, uppercase=True) == 'TITLE4 (2016) S01E01'
    assert display_item_name(wanted_item_empty) == 'N/A'
    assert display_item_name(wanted_item_empty, default_value='default') == 'default'
    assert display_item_name(wanted_item_empty, default_value='default', uppercase=True) == 'DEFAULT'


def test_display_timestamp():
    timestamp_float = time.mktime(time.strptime('01012016 0:00:00', '%d%m%Y %H:%M:%S')) - 1
    assert display_timestamp(timestamp_float) == '31-12-2015 23:59:59'
    assert display_timestamp(0.0) == 'N/A'


def test_convert_timestamp():
    assert convert_timestamp('2015-12-31 23:59:59') == '31-12-2015 23:59:59'


def test_humanize_bytes():
    assert humanize_bytes(0) == '0 bytes'
    assert humanize_bytes(1) == '1 byte'
    assert humanize_bytes(1024) == '1.0 kB'
    assert humanize_bytes(1024 * 123) == '123.0 kB'
    assert humanize_bytes(1024 * 12342) == '12.1 MB'
    assert humanize_bytes(1024 * 12342, 2) == '12.05 MB'
    assert humanize_bytes(1024 * 1234, 2) == '1.21 MB'
    assert humanize_bytes(1024 * 1234 * 1111, 2) == '1.31 GB'
    assert humanize_bytes(1024 * 1234 * 1111, 1) == '1.3 GB'


def test_get_common_path():
    separator = '\\'
    assert get_common_path(['c:\\temp\\test', 'c:\\temp\\video_path.ext'], separator) == 'c:\\temp'
    assert get_common_path(['c:\\temp', 'd:\\temp'], separator) is None


def test_get_root_path():
    separator = '\\'
    autosubliminal.VIDEOPATHS = ['c:\\temp', 'c:\\test']
    assert get_root_path('c:\\temp\\video_path.ext', separator) == 'c:\\temp'
    with pytest.raises(RuntimeError):
        get_root_path('c:\\temp2\\test.ext', separator)


def test_get_file_size():
    try:
        fd, file_path = tempfile.mkstemp(text=True)
        file = open(file_path, 'w')
        file.write('test')
        file.close()
        os.close(fd)
        size = get_file_size(file_path).split(' ')[0]
        assert float(size) > 0
    finally:
        os.remove(file_path)


def test_get_file_size_exception():
    assert get_file_size('path/does/not/exist') == '0 bytes'


def test_set_rw_and_remove():
    try:
        fd, file_path = tempfile.mkstemp(text=True)
        file = open(file_path, 'w')
        file.write('test')
        file.close()
        os.close(fd)
        set_rw_and_remove(None, file_path, None)
        assert not os.path.exists(file_path)
    finally:
        if os.path.exists(file_path):
            os.remove(file_path)
