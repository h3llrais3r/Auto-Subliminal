# coding=utf-8

import jsonpickle

import autosubliminal
from autosubliminal.server.api.wanted import Wanted

wanted_item = {
    'videopath': 'Marvels.Agents.of.S.H.I.E.L.D.S05E03.720p.HDTV.x264-AVS[rarbg].mkv',
    'season': 5,
    'releasegrp': 'AVS',
    'year': None,
    'quality': '720p',
    'episode': 3,
    'tvdbid': 263365,
    'title': 'Marvels Agents of S.H.I.E.L.D.',
    'languages': [],
    'source': 'HDTV',
    'codec': 'h264',
    'timestamp': u'2018-01-13 21:20:00',
    'type': 'episode'
}

wanted_item_json = '{"episode": 3, "tvdbid": 263365, "title": "Marvels Agents of S.H.I.E.L.D.", "season": 5, ' \
                   '"year": null, "releasegrp": "AVS", "languages": [], "source": "HDTV", "type": "episode", ' \
                   '"codec": "h264", "timestamp": "2018-01-13 21:20:00", "quality": "720p", ' \
                   '"videopath": "Marvels.Agents.of.S.H.I.E.L.D.S05E03.720p.HDTV.x264-AVS[rarbg].mkv"}'

wanted_item_list_json = '[' + wanted_item_json + ']'


def test_get():
    # Create wanted queue with 1 item
    autosubliminal.WANTEDQUEUE = []
    autosubliminal.WANTEDQUEUE.append(wanted_item)
    # Check conversion to json (need to pickle ourselves because we don't use cherrypy.tools here)
    json_out = jsonpickle.encode(Wanted().get())
    assert wanted_item_list_json == json_out


def test_delete():
    # Create wanted queue with 1 item
    autosubliminal.WANTEDQUEUE = []
    autosubliminal.WANTEDQUEUE.append(wanted_item)
    # Check conversion to json (need to pickle ourselves because we don't use cherrypy.tools here)
    json_out = jsonpickle.encode(Wanted().delete(0))
    assert wanted_item_json == json_out
    json_out = jsonpickle.encode(Wanted().get())
    assert '[]' == json_out
