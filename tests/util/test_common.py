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
from autosubliminal.util.common import get_today, run_cmd, connect_url, wait_for_internet_connection, to_obj, to_text, \
    to_list, to_obj_or_list, to_dict, get_boolean, safe_text, safe_lowercase, safe_uppercase, safe_trim, sanitize, \
    display_mapping_dict, display_list_single_line, display_list_multi_line, display_value, display_item_title, \
    display_item_name, display_interval, display_timestamp, convert_timestamp, humanize_bytes, get_common_path, \
    get_root_path, get_file_size, set_rw_and_remove, atoi, natural_keys, get_wanted_languages, get_alpha2_languages

vcr = VCR(path_transformer=VCR.ensure_suffix('.yaml'),
          record_mode='once',
          match_on=['method', 'scheme', 'host', 'port', 'path', 'query', 'body'],
          cassette_library_dir=os.path.join(os.path.abspath(os.path.dirname(__file__)), 'cassettes', 'common'))

text_value = 'test'
text_value_upper = 'TEST'
text_value_special_char = u'ù'
text_value_special_char_upper = u'Ù'
num_value = 1
long_value = 1.0
bool_value = True
list_value = []
list_value_with_items = ['a', 'b']
list_value_with_items_upper = ['A', 'B']
dict_value = {}
dict_value_with_items = {'1': 'a'}
dict_value_with_items_upper = {'1': 'A'}


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


def test_to_obj():
    value_1 = 1
    value_2 = '2'
    assert to_obj(None) is None
    assert to_obj(value_1) == '1'
    assert to_obj(value_2, obj_type=int) == 2


def test_to_text():
    value_1 = 1
    value_2 = [1, 2]
    assert to_text(None) is None
    assert to_text(value_1) == '1'
    assert to_text(value_2) == '1,2'


def test_to_list():
    value_1 = '1'
    value_2 = '1,2'
    value_3 = [1, 2, 3]
    value_4 = ['1', '2', '3', '4']
    assert to_list(None) == []
    assert to_list(value_1) == ['1']
    assert to_list(value_2, obj_type=int) == [1, 2]
    assert to_list(value_3) == ['1', '2', '3']
    assert to_list(value_4, obj_type=int) == [1, 2, 3, 4]


def test_to_obj_or_list():
    value_1 = '1'
    value_2 = '1,2'
    assert to_obj_or_list(None) is None
    assert to_obj_or_list(value_1) == '1'
    assert to_obj_or_list(value_2, obj_type=int) == [1, 2]


def test_to_dict():
    obj_dict = {
        'key1': 1,
        'key2': '2',
        'key3': [3],
        'key5': {'5': 5}
    }
    object_dict_with_key7 = dict(obj_dict)
    object_dict_with_key7.update({'key7': 7})
    my_args = ('key6',)
    my_kwargs = {'key7': 7}
    assert to_dict(MyObject(), 'key6') == obj_dict
    assert to_dict(MyObject(), *my_args, **my_kwargs) == object_dict_with_key7  # test with predefined args and kwargs


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


def test_safe_lowercase():
    assert safe_lowercase(None) is None
    assert safe_lowercase(None, default_value='n/a') == 'n/a'
    assert safe_lowercase(text_value_upper) == 'test'
    assert safe_lowercase(text_value_special_char_upper) == u'ù'
    assert safe_lowercase(num_value) is num_value
    assert safe_lowercase(num_value, default_value='n/a') == 'n/a'
    assert safe_lowercase(long_value) is long_value
    assert safe_lowercase(long_value, default_value='n/a') == 'n/a'
    assert safe_lowercase(bool_value) is bool_value
    assert safe_lowercase(bool_value, default_value='n/a') == 'n/a'
    assert safe_lowercase(list_value) is list_value
    assert safe_lowercase(list_value, default_value='n/a') == 'n/a'
    assert safe_lowercase(list_value_with_items, default_value='n/a') == 'n/a'
    assert safe_lowercase(safe_text(list_value_with_items_upper), default_value='n/a') == '[\'a\', \'b\']'
    assert safe_lowercase(dict_value) is dict_value
    assert safe_lowercase(dict_value, default_value='n/a') == 'n/a'
    assert safe_lowercase(dict_value_with_items_upper, default_value='n/a') == 'n/a'
    assert safe_lowercase(safe_text(dict_value_with_items_upper), default_value='n/a') == '{\'1\': \'a\'}'


def test_safe_uppercase():
    assert safe_uppercase(None) is None
    assert safe_uppercase(None, default_value='N/A') == 'N/A'
    assert safe_uppercase(text_value) == 'TEST'
    assert safe_uppercase(text_value_special_char) == u'Ù'
    assert safe_uppercase(num_value) is num_value
    assert safe_uppercase(num_value, default_value='N/A') == 'N/A'
    assert safe_uppercase(long_value) is long_value
    assert safe_uppercase(long_value, default_value='N/A') == 'N/A'
    assert safe_uppercase(bool_value) is bool_value
    assert safe_uppercase(bool_value, default_value='N/A') == 'N/A'
    assert safe_uppercase(list_value) is list_value
    assert safe_uppercase(list_value, default_value='N/A') == 'N/A'
    assert safe_uppercase(list_value_with_items, default_value='N/A') == 'N/A'
    assert safe_uppercase(safe_text(list_value_with_items), default_value='N/A') == '[\'A\', \'B\']'
    assert safe_uppercase(dict_value) is dict_value
    assert safe_uppercase(dict_value, default_value='N/A') == 'N/A'
    assert safe_uppercase(dict_value_with_items, default_value='N/A') == 'N/A'
    assert safe_uppercase(safe_text(dict_value_with_items), default_value='N/A') == '{\'1\': \'A\'}'


def test_safe_trim():
    assert safe_trim(None) is None
    assert safe_trim(None, default_value='N/A') == 'N/A'
    assert safe_trim('test') == 'test'
    assert safe_trim(' test ') == 'test'
    assert safe_trim('\ntest\n') == 'test'
    assert safe_trim('\rtest\r') == 'test'
    assert safe_trim('\ttest\t') == 'test'
    assert safe_trim(' \n\r\ttest \n\r\t') == 'test'
    assert safe_trim(' \n\r\ttest and test \n\r\t') == 'test and test'
    assert safe_trim(' \n\r\ttest \n\r\tand \n\r\ttest \n\r\t') == 'test \n\r\tand \n\r\ttest'
    assert safe_trim(num_value) is num_value
    assert safe_trim(num_value, default_value='N/A') == 'N/A'
    assert safe_trim(long_value) is long_value
    assert safe_trim(long_value, default_value='N/A') == 'N/A'
    assert safe_trim(bool_value) is bool_value
    assert safe_trim(bool_value, default_value='N/A') == 'N/A'
    assert safe_trim(list_value) is list_value
    assert safe_trim(list_value, default_value='N/A') == 'N/A'
    assert safe_trim(dict_value) is dict_value
    assert safe_trim(dict_value, default_value='N/A') == 'N/A'


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
    wanted_item_5 = WantedItem(title='title5', year=2016, type='episode', season=1, episode=[1, 2])
    wanted_item_empty = WantedItem()
    assert display_item_name(wanted_item_1) == 'title1'
    assert display_item_name(wanted_item_1, uppercase=True) == 'TITLE1'
    assert display_item_name(wanted_item_2) == 'title2 (2016)'
    assert display_item_name(wanted_item_2, uppercase=True) == 'TITLE2 (2016)'
    assert display_item_name(wanted_item_3) == 'title3 S01E01'
    assert display_item_name(wanted_item_3, uppercase=True) == 'TITLE3 S01E01'
    assert display_item_name(wanted_item_4) == 'title4 (2016) S01E01'
    assert display_item_name(wanted_item_4, uppercase=True) == 'TITLE4 (2016) S01E01'
    assert display_item_name(wanted_item_5) == 'title5 (2016) S01E01-E02'
    assert display_item_name(wanted_item_5, uppercase=True) == 'TITLE5 (2016) S01E01-E02'
    assert display_item_name(wanted_item_empty) == 'N/A'
    assert display_item_name(wanted_item_empty, default_value='default') == 'default'
    assert display_item_name(wanted_item_empty, default_value='default', uppercase=True) == 'DEFAULT'


def test_display_interval():
    assert display_interval(1) == '0:00:01'
    assert display_interval(1, True) == '1 second'
    assert display_interval(30) == '0:00:30'
    assert display_interval(30, True) == '30 seconds'
    assert display_interval(60) == '0:01:00'
    assert display_interval(60, True) == '1 minute'
    assert display_interval(1800) == '0:30:00'
    assert display_interval(1800, True) == '30 minutes'
    assert display_interval(3600) == '1:00:00'
    assert display_interval(3600, True) == '1 hour'
    assert display_interval(43200) == '12:00:00'
    assert display_interval(43200, True) == '12 hours'
    assert display_interval(86400) == '1 day, 0:00:00'
    assert display_interval(86400, True) == '1 day'
    assert display_interval(172800) == '2 days, 0:00:00'
    assert display_interval(172800, True) == '2 days'
    assert display_interval(217830) == '2 days, 12:30:30'
    assert display_interval(217830, True) == '2 days 12 hours 30 minutes 30 seconds'


def test_display_timestamp(monkeypatch):
    monkeypatch.setattr('autosubliminal.TIMESTAMPFORMAT', '%d-%m-%Y %H:%M:%S')
    timestamp_float = time.mktime(time.strptime('01012016 0:00:00', '%d%m%Y %H:%M:%S')) - 1
    assert display_timestamp(timestamp_float) == '31-12-2015 23:59:59'
    assert display_timestamp(0.0) == 'N/A'


def test_convert_timestamp(monkeypatch):
    monkeypatch.setattr('autosubliminal.DBTIMESTAMPFORMAT', '%Y-%m-%d %H:%M:%S')
    monkeypatch.setattr('autosubliminal.TIMESTAMPFORMAT', '%d-%m-%Y %H:%M:%S')
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
    file_path = None
    try:
        fd, file_path = tempfile.mkstemp(text=True)
        file = open(file_path, 'w')
        file.write('test')
        file.close()
        os.close(fd)
        size = get_file_size(file_path).split(' ')[0]
        assert float(size) > 0
    finally:
        if os.path.exists(file_path):
            os.remove(file_path)


def test_get_file_size_exception():
    assert get_file_size('path/does/not/exist') == '0 bytes'


def test_set_rw_and_remove():
    file_path = None
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


def test_atoi():
    assert atoi('test') == 'test'
    assert atoi('test01') == 'test01'
    assert atoi('01') == 1
    assert atoi('1') == 1


def test_natural_keys():
    my_list = ['season 23', 'season 15', 'season 30', 'season 05', 'season 01', 'root']
    my_sorted_list = ['root', 'season 01', 'season 05', 'season 15', 'season 23', 'season 30']
    assert sorted(my_list, key=natural_keys) == my_sorted_list


def test_get_wanted_languages(monkeypatch):
    monkeypatch.setattr('autosubliminal.DEFAULTLANGUAGE', 'nl')
    monkeypatch.setattr('autosubliminal.ADDITIONALLANGUAGES', ['en', 'fr'])
    assert ['nl', 'en', 'fr'] == get_wanted_languages()


def test_get_alpha2_languages():
    languages = get_alpha2_languages()
    nl_language = {'alpha2': 'nl', 'name': 'Dutch'}
    assert isinstance(languages, list)
    assert len(languages) == 184
    assert nl_language in languages
