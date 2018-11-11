# coding=utf-8

import jsonpickle

import autosubliminal
from autosubliminal.db import LastDownloads
from autosubliminal.server.api.items import ItemsApi

wanted_item = {
    'codec': u'h264',
    'episode': u'6',
    'imdbid': None,
    'languages': [u'nl'],
    'quality': u'720p',
    'releasegrp': u'NTb',
    'season': u'1',
    'source': u'WEB-DL',
    'timestamp': u'2015-11-15 16:27:35',
    'title': u'Mr Robot',
    'type': u'episode',
    'tvdbid': u'289590',
    'videopath': u'Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    'year': None
}

wanted_item_json = '{"codec": "h264", "episode": "6", "imdbid": null, "languages": ["nl"], "quality": "720p",' \
                   ' "releasegrp": "NTb", "season": "1", "source": "WEB-DL", "timestamp": "2015-11-15 16:27:35",' \
                   ' "title": "Mr Robot", "tvdbid": "289590", "type": "episode",' \
                   ' "videopath": "Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb.mkv", "year": null}'

wanted_item_list_json = '[' + wanted_item_json + ']'

downloaded_item = {
    'codec': u'h264',
    'episode': u'6',
    'id': u'1',
    'language': u'nl',
    'provider': u'shooter',
    'quality': u'720p',
    'releasegrp': u'NTb',
    'season': u'1',
    'source': u'WEB-DL',
    'subtitle': u'Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb',
    'timestamp': u'2015-11-15 16:27:35',
    'title': u'Mr Robot',
    'type': u'episode',
    'year': None
}

downloaded_item_json = '{"codec": "h264", "episode": "6", "id": "1", "language": "nl", "provider": "shooter",' \
                       ' "quality": "720p", "releasegrp": "NTb", "season": "1", "source": "WEB-DL",' \
                       ' "subtitle": "Mr.Robot.S01E06.720p.WEB-DL.DD5.1.H.264-NTb",' \
                       ' "timestamp": "2015-11-15 16:27:35", "title": "Mr Robot", "type": "episode", "year": null}'

downloaded_item_list_json = '[' + downloaded_item_json + ']'


def test_get_wanted_all_items():
    autosubliminal.WANTEDQUEUE = []
    autosubliminal.WANTEDQUEUE.append(wanted_item)
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(ItemsApi().wanted.get())
    assert wanted_item_list_json == json_out


def test_get_wanted_single_item():
    autosubliminal.WANTEDQUEUE = []
    autosubliminal.WANTEDQUEUE.append(wanted_item)
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(ItemsApi().wanted.get(0))
    assert wanted_item_json == json_out


def test_delete_wanted():
    autosubliminal.WANTEDQUEUE = []
    autosubliminal.WANTEDQUEUE.append(wanted_item)
    # Check conversion to json (need to pickle ourselves because we don't use cherrypy.tools here)
    json_out = jsonpickle.encode(ItemsApi().wanted.delete(0))
    assert wanted_item_json == json_out
    json_out = jsonpickle.encode(ItemsApi().wanted.get())
    assert '[]' == json_out


def test_get_downloaded_all_items(mocker):
    mocker.patch.object(LastDownloads, 'get_last_downloads')
    LastDownloads.get_last_downloads.return_value = [downloaded_item]
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(ItemsApi().downloaded.get())
    assert downloaded_item_list_json == json_out


def test_get_downloaded_number_of_items(mocker):
    mocker.patch.object(LastDownloads, 'get_last_downloads')
    LastDownloads.get_last_downloads.return_value = [downloaded_item]
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(ItemsApi().downloaded.get(1))
    assert downloaded_item_list_json == json_out


def test_get_downloaded_zero_items(mocker):
    mocker.patch.object(LastDownloads, 'get_last_downloads')
    LastDownloads.get_last_downloads.return_value = [downloaded_item]
    # Check conversion to json:
    # - pickle ourselves because we don't use cherrypy.tools here
    # - force sorted keys to be able to compare results (Python 3 sorts by default)
    jsonpickle.set_encoder_options('simplejson', sort_keys=True)
    json_out = jsonpickle.encode(ItemsApi().downloaded.get(0))
    assert '[]' == json_out
