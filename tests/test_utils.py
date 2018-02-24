# coding=utf-8

import os
import tempfile
import time
from collections import OrderedDict

import pytest
from six import PY2, text_type, binary_type
from vcr import VCR

import autosubliminal
from autosubliminal import version
from autosubliminal.utils import connect_url, getboolean, safe_text, safe_trim, safe_uppercase, sanitize, \
    mapping_string_to_dict, display_logfile, display_mapping_dict, get_show_name_mapping, \
    get_addic7ed_show_name_mapping, get_alternative_show_name_mapping, get_movie_name_mapping, \
    get_alternative_movie_name_mapping, skip_show, skip_movie, display_list_single_line, display_list_multi_line, \
    display_item, display_title, display_name, display_timestamp, convert_timestamp, humanize_bytes, \
    get_wanted_queue_lock, release_wanted_queue_lock, count_wanted_items, get_common_path, get_root_path, \
    get_file_size, set_rw_and_remove, u2b, s2n

vcr = VCR(path_transformer=VCR.ensure_suffix('.yaml'),
          record_mode='once',
          match_on=['method', 'scheme', 'host', 'port', 'path', 'query', 'body'],
          cassette_library_dir=os.path.join(os.path.abspath(os.path.dirname(__file__)), 'cassettes', 'utils'))

text_value = 'test'
text_value_special_char = u'ù'
num_value = 1
long_value = 1.0
bool_value = True
list_value = []
list_value_with_items = ['a', 'b']
dict_value = {}
dict_value_with_items = {'1': 'a', '2': 'b'}


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


def test_getboolean():
    assert getboolean('1')
    assert getboolean('yes')
    assert getboolean('true')
    assert getboolean('on')
    assert not getboolean('0')
    assert not getboolean('no')
    assert not getboolean('false')
    assert not getboolean('off')
    with pytest.raises(ValueError):
        getboolean('test')


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
    assert safe_text(dict_value_with_items) == '{\'1\': \'a\', \'2\': \'b\'}'


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
    assert safe_uppercase(safe_text(dict_value_with_items), 'N/A') == '{\'1\': \'A\', \'2\': \'B\'}'


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
    assert sanitize('(Mr.-Robot :)') == 'mr robot'


def test_mapping_string_to_dict():
    mapping_dict = {'show1': '111111,000000', 'show2': '222222'}
    assert mapping_string_to_dict('show1 = 111111,000000\r\nshow2 = 222222') == mapping_dict


def test_display_logfile():
    try:
        text = '2016-06-06 20:32:15,509 INFO     [MainThread :: __main__] Running application with PID: 9944'
        fd, autosubliminal.LOGFILE = tempfile.mkstemp(text=True)
        file = open(autosubliminal.LOGFILE, 'w')
        file.write(text)
        file.close()
        os.close(fd)
        assert display_logfile() == text
        assert display_logfile(loglevel='all') == text
        assert display_logfile(loglevel='info') == text
        autosubliminal.LOGREVERSED = True
        assert display_logfile(loglevel='info') == text
        assert display_logfile(loglevel='error') == ''
    finally:
        os.remove(autosubliminal.LOGFILE)


def test_get_show_name_mapping():
    autosubliminal.SHOWNAMEMAPPING = {'show1': '111111', 'show2': '222222'}
    assert get_show_name_mapping('SHOW1') == 111111
    assert get_show_name_mapping('Show2') == 222222
    assert get_show_name_mapping('show3') is None


def test_get_addic7ed_show_name_mapping():
    autosubliminal.ADDIC7EDSHOWNAMEMAPPING = {'show1': '111111', 'show2': '222222'}
    assert get_addic7ed_show_name_mapping('SHOW1') == 111111
    assert get_addic7ed_show_name_mapping('Show2') == 222222
    assert get_addic7ed_show_name_mapping('show3') is None


def test_get_alternative_show_name_mapping():
    autosubliminal.ALTERNATIVESHOWNAMEMAPPING = {'show1': 'show1a, show1b', 'show2': 'show2a'}
    assert get_alternative_show_name_mapping('SHOW1') == ['show1a', 'show1b']
    assert get_alternative_show_name_mapping('Show2') == ['show2a']
    assert get_alternative_show_name_mapping('show3') is None


def test_movie_name_mapping():
    autosubliminal.MOVIENAMEMAPPING = {'movie1': 'tt111111', 'movie2': 'tt222222', 'movie3 (2016)': 'tt333333'}
    assert get_movie_name_mapping('MOVIE1', None) == 'tt111111'
    assert get_movie_name_mapping('Movie2', None) == 'tt222222'
    assert get_movie_name_mapping('movie3', None) is None
    assert get_movie_name_mapping('movie3', 2016) == 'tt333333'
    assert get_movie_name_mapping('movie4', None) is None


def test_get_alternative_movie_name_mapping():
    autosubliminal.ALTERNATIVEMOVIENAMEMAPPING = {'movie1': 'movie1a, movie1b', 'movie2': 'movie2a',
                                                  'movie3 (2016)': 'movie3a'}
    assert get_alternative_movie_name_mapping('MOVIE1', None) == ['movie1a', 'movie1b']
    assert get_alternative_movie_name_mapping('Movie2', None) == ['movie2a']
    assert get_alternative_movie_name_mapping('movie3', None) is None
    assert get_alternative_movie_name_mapping('movie3', 2016) == ['movie3a']
    assert get_alternative_movie_name_mapping('movie4', None) is None


def test_skip_show():
    autosubliminal.SKIPSHOW = {'show1': '0', 'show2': '1', 'show3': '0,1', 'show4': '00'}
    assert skip_show('SHOW1', 0, 1)  # 0 means skip specials
    assert not skip_show('SHOW1', 1, 1)
    assert not skip_show('Show2', 0, 1)
    assert skip_show('Show2', 1, 1)
    assert skip_show('show3', 0, 1)  # 00 means skip all, so also 0 is skipped
    assert skip_show('show3', 1, 1)  # 00 means skip all, so also 1 is skipped
    assert skip_show('show4', 0, 1)
    assert skip_show('show4', 1, 1)
    assert not skip_show('show5', 0, 1)
    assert not skip_show('show5', 1, 1)


def test_skip_movie():
    autosubliminal.SKIPMOVIE = {'movie1': '00', 'movie2 (2016)': '00'}
    assert skip_movie('MOVIE1', None)
    assert not skip_movie('MOVIE1', 2016)
    assert not skip_movie('Movie2', None)
    assert skip_movie('Movie2', 2016)
    assert not skip_movie('movie3', None)
    assert not skip_movie('movie3', 2016)


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


def test_display_item():
    item_dict = {'test': 'value', 'test2': u'ù'}
    empty_dict = {}
    assert display_item(item_dict, 'test') == 'value'
    assert display_item(item_dict, 'test2') == u'ù'
    assert display_item(item_dict, 'test', uppercase=True) == 'VALUE'
    assert display_item(empty_dict, 'test') == ''
    assert display_item(empty_dict, 'test', default_value='default') == 'default'
    assert display_item(empty_dict, 'test', default_value='default', uppercase=True) == 'DEFAULT'


def test_display_title():
    item_dict1 = {'title': 'title1'}
    item_dict2 = {'title': 'title2', 'year': 2016}
    empty_dict = {}
    assert display_title(item_dict1) == 'title1'
    assert display_title(item_dict1, uppercase=True) == 'TITLE1'
    assert display_title(item_dict2) == 'title2 (2016)'
    assert display_title(item_dict2, uppercase=True) == 'TITLE2 (2016)'
    assert display_title(empty_dict) == 'N/A'
    assert display_title(empty_dict, default_value='default') == 'default'
    assert display_title(empty_dict, default_value='default', uppercase=True) == 'DEFAULT'


def test_display_name():
    item_dict1 = {'title': 'title1'}
    item_dict2 = {'title': 'title2', 'year': 2016, 'type': 'movie'}
    item_dict3 = {'title': 'title3', 'type': 'episode', 'season': 1, 'episode': 1}
    item_dict4 = {'title': 'title4', 'year': 2016, 'type': 'episode', 'season': 1, 'episode': 1}
    empty_dict = {}
    assert display_name(item_dict1) == 'title1'
    assert display_name(item_dict1, uppercase=True) == 'TITLE1'
    assert display_name(item_dict2) == 'title2 (2016)'
    assert display_name(item_dict2, uppercase=True) == 'TITLE2 (2016)'
    assert display_name(item_dict3) == 'title3 S01E01'
    assert display_name(item_dict3, uppercase=True) == 'TITLE3 S01E01'
    assert display_name(item_dict4, uppercase=True) == 'TITLE4 (2016) S01E01'
    assert display_name(item_dict4, uppercase=True) == 'TITLE4 (2016) S01E01'
    assert display_name(empty_dict) == 'N/A'
    assert display_name(empty_dict, default_value='default') == 'default'
    assert display_name(empty_dict, default_value='default', uppercase=True) == 'DEFAULT'


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


def test_wanted_queue_lock():
    assert get_wanted_queue_lock()
    assert autosubliminal.WANTEDQUEUELOCK
    assert not get_wanted_queue_lock()
    assert autosubliminal.WANTEDQUEUELOCK
    release_wanted_queue_lock()
    assert not autosubliminal.WANTEDQUEUELOCK
    release_wanted_queue_lock()
    assert not autosubliminal.WANTEDQUEUELOCK


def test_count_wanted_items():
    autosubliminal.WANTEDQUEUE = [{'type': 'movie', 'title': 'title1'}, {'type': 'episode', 'title': 'title2'}]
    assert count_wanted_items() == 2
    assert count_wanted_items(itemtype='movie') == 1
    assert count_wanted_items(itemtype='episode') == 1
    assert count_wanted_items(itemtype='video') == 0


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


def test_u2b():
    assert u2b(u'élà') == b'\xc3\xa9l\xc3\xa0'


def test_s2n():
    s1 = u'élà'
    s2 = b'\xc3\xa9l\xc3\xa0'
    if PY2:
        assert s2n(s1) == b'\xc3\xa9l\xc3\xa0'
        assert isinstance(s2n(s1), binary_type)
        assert s2n(s2) == b'\xc3\xa9l\xc3\xa0'
        assert isinstance(s2n(s2), binary_type)
    else:
        assert s2n(s1) == u'élà'
        assert isinstance(s2n(s1), text_type)
        assert s2n(s2) == u'élà'
        assert isinstance(s2n(s2), text_type)
