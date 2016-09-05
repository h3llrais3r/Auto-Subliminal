import os
import tempfile
import time

import pytest

import autosubliminal
from autosubliminal.utils import getboolean, safe_string, safe_trim, safe_uppercase, display_logfile, show_name_mapping, \
    movie_name_mapping, skip_show, skip_movie, display_item, display_title, display_name, display_timestamp, \
    convert_timestamp, humanize_bytes, get_wanted_queue_lock, release_wanted_queue_lock, count_wanted_items, \
    get_file_size, set_rw_and_remove

string_value = "test"
num_value = 1
long_value = 1.0
bool_value = True
list_value = []
dict_value = {}


def test_getboolean():
    assert getboolean("1")
    assert getboolean("yes")
    assert getboolean("true")
    assert getboolean("on")
    assert not getboolean("0")
    assert not getboolean("no")
    assert not getboolean("false")
    assert not getboolean("off")
    with pytest.raises(ValueError):
        getboolean("test")


def test_save_string():
    assert safe_string(None) == "None"
    assert safe_string(string_value) == "test"
    assert safe_string(num_value) == "1"
    assert safe_string(long_value) == "1.0"
    assert safe_string(bool_value) == "True"
    assert safe_string(list_value) == "[]"
    assert safe_string(dict_value) == "{}"


def test_safe_uppercase():
    assert safe_uppercase(None) is None
    assert safe_uppercase(None, "N/A") == "N/A"
    assert safe_uppercase(string_value) == "TEST"
    assert safe_uppercase(num_value) is None
    assert safe_uppercase(num_value, "N/A") == "N/A"
    assert safe_uppercase(long_value) is None
    assert safe_uppercase(long_value, "N/A") == "N/A"
    assert safe_uppercase(bool_value) is None
    assert safe_uppercase(bool_value, "N/A") == "N/A"
    assert safe_uppercase(list_value) is None
    assert safe_uppercase(list_value, "N/A") == "N/A"
    assert safe_uppercase(dict_value) is None
    assert safe_uppercase(dict_value, "N/A") == "N/A"


def test_safe_trim():
    assert safe_trim(None) is None
    assert safe_trim(None, "N/A") == "N/A"
    assert safe_trim("test") == "test"
    assert safe_trim(" test ") == "test"
    assert safe_trim("\ntest\n") == "test"
    assert safe_trim("\rtest\r") == "test"
    assert safe_trim("\ttest\t") == "test"
    assert safe_trim(" \n\r\ttest \n\r\t") == "test"
    assert safe_trim(" \n\r\ttest and test \n\r\t") == "test and test"
    assert safe_trim(" \n\r\ttest \n\r\tand \n\r\ttest \n\r\t") == "test \n\r\tand \n\r\ttest"
    assert safe_trim(num_value) is None
    assert safe_trim(num_value, "N/A") == "N/A"
    assert safe_trim(long_value) is None
    assert safe_trim(long_value, "N/A") == "N/A"
    assert safe_trim(bool_value) is None
    assert safe_trim(bool_value, "N/A") == "N/A"
    assert safe_trim(list_value) is None
    assert safe_trim(list_value, "N/A") == "N/A"
    assert safe_trim(dict_value) is None
    assert safe_trim(dict_value, "N/A") == "N/A"
    print "Post processor failed:\r\n%s" % "test"


def test_display_logfile():
    try:
        text = '2016-06-06 20:32:15,509 INFO     [MainThread :: __main__] Running application with PID: 9944'
        fd, autosubliminal.LOGFILE = tempfile.mkstemp(text=True)
        file = open(autosubliminal.LOGFILE, 'w')
        file.write(text)
        file.close()
        os.close(fd)
        assert display_logfile(loglevel='') == text
        assert display_logfile(loglevel='INFO') == text
        autosubliminal.LOGREVERSED = True
        assert display_logfile(loglevel='INFO') == text
        assert display_logfile(loglevel='ERROR') == ""
    finally:
        os.remove(autosubliminal.LOGFILE)


def test_show_name_mapping():
    autosubliminal.USERSHOWNAMEMAPPINGUPPER = {"SHOW1": "111111"}
    autosubliminal.SHOWNAMEMAPPINGUPPER = {"SHOW2": "222222"}
    assert show_name_mapping("show1") == "111111"
    assert show_name_mapping("show2") == "222222"
    assert show_name_mapping("show3") is None


def test_movie_name_mapping():
    autosubliminal.USERMOVIENAMEMAPPINGUPPER = {"MOVIE1": "111111", "MOVIE3 (2016)": "333333"}
    autosubliminal.MOVIENAMEMAPPINGUPPER = {"MOVIE2": "222222", "MOVIE4 (2016)": "444444"}
    assert movie_name_mapping("movie1", None) == "111111"
    assert movie_name_mapping("movie2", None) == "222222"
    assert movie_name_mapping("movie3", None) is None
    assert movie_name_mapping("movie3", 2016) == "333333"
    assert movie_name_mapping("movie4", None) is None
    assert movie_name_mapping("movie4", 2016) == "444444"
    assert movie_name_mapping("movie5", None) is None


def test_skip_show():
    autosubliminal.SKIPSHOWUPPER = {"SHOW1": "1", "SHOW2": "0"}
    assert not skip_show("show1", 0, 1)
    assert skip_show("show1", 1, 1)
    assert skip_show("show2", 0, 1)  # 0 means skip all
    assert skip_show("show2", 1, 1)  # 0 means skip all, so also 1 is skipped
    assert not skip_show("show3", 0, 1)
    assert not skip_show("show3", 1, 1)


def test_skip_movie():
    autosubliminal.SKIPMOVIEUPPER = {"MOVIE1": "0", "MOVIE2 (2016)": "0"}
    assert skip_movie("movie1", None)
    assert not skip_movie("movie1", 2016)
    assert not skip_movie("movie2", None)
    assert skip_movie("movie2", 2016)
    assert not skip_movie("movie3", None)
    assert not skip_movie("movie3", 2016)


def test_display_item():
    item_dict = {"test": "value"}
    empty_dict = {}
    assert display_item(item_dict, "test") == "value"
    assert display_item(item_dict, "test", uppercase=True) == "VALUE"
    assert display_item(empty_dict, "test") == "N/A"
    assert display_item(empty_dict, "test", default_value="default") == "default"
    assert display_item(empty_dict, "test", default_value="default", uppercase=True) == "DEFAULT"


def test_display_title():
    item_dict1 = {"title": "title1"}
    item_dict2 = {"title": "title2", "year": 2016}
    empty_dict = {}
    assert display_title(item_dict1) == "title1"
    assert display_title(item_dict1, uppercase=True) == "TITLE1"
    assert display_title(item_dict2) == "title2 (2016)"
    assert display_title(item_dict2, uppercase=True) == "TITLE2 (2016)"
    assert display_title(empty_dict) == "N/A"
    assert display_title(empty_dict, default_value="default") == "default"
    assert display_title(empty_dict, default_value="default", uppercase=True) == "DEFAULT"


def test_display_name():
    item_dict1 = {"title": "title1"}
    item_dict2 = {"title": "title2", "year": 2016, "type": "movie"}
    item_dict3 = {"title": "title3", "type": "episode", "season": 1, "episode": 1}
    item_dict4 = {"title": "title4", "year": 2016, "type": "episode", "season": 1, "episode": 1}
    empty_dict = {}
    assert display_name(item_dict1) == "title1"
    assert display_name(item_dict1, uppercase=True) == "TITLE1"
    assert display_name(item_dict2) == "title2 (2016)"
    assert display_name(item_dict2, uppercase=True) == "TITLE2 (2016)"
    assert display_name(item_dict3) == "title3 S01E01"
    assert display_name(item_dict3, uppercase=True) == "TITLE3 S01E01"
    assert display_name(item_dict4, uppercase=True) == "TITLE4 (2016) S01E01"
    assert display_name(item_dict4, uppercase=True) == "TITLE4 (2016) S01E01"
    assert display_name(empty_dict) == "N/A"
    assert display_name(empty_dict, default_value="default") == "default"
    assert display_name(empty_dict, default_value="default", uppercase=True) == "DEFAULT"


def test_display_timestamp():
    timestamp_float = time.mktime(time.strptime("01012016 0:00:00", "%d%m%Y %H:%M:%S")) - 1
    assert display_timestamp(timestamp_float) == "31-12-2015 23:59:59"
    assert display_timestamp(0.0) == "N/A"


def test_convert_timestamp():
    assert convert_timestamp("2015-12-31 23:59:59") == "31-12-2015 23:59:59"


def test_humanize_bytes():
    assert humanize_bytes(0) == "0 bytes"
    assert humanize_bytes(1) == "1 byte"
    assert humanize_bytes(1024) == "1.0 kB"
    assert humanize_bytes(1024 * 123) == "123.0 kB"
    assert humanize_bytes(1024 * 12342) == "12.1 MB"
    assert humanize_bytes(1024 * 12342, 2) == "12.05 MB"
    assert humanize_bytes(1024 * 1234, 2) == "1.21 MB"
    assert humanize_bytes(1024 * 1234 * 1111, 2) == "1.31 GB"
    assert humanize_bytes(1024 * 1234 * 1111, 1) == "1.3 GB"


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


def test_get_file_size():
    try:
        fd, file_path = tempfile.mkstemp(text=True)
        file = open(file_path, 'w')
        file.write("test")
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
        file.write("test")
        file.close()
        os.close(fd)
        set_rw_and_remove(None, file_path, None)
        assert not os.path.exists(file_path)
    finally:
        if os.path.exists(file_path):
            os.remove(file_path)
