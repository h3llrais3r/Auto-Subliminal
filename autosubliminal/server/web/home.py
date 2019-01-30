# coding=utf-8

import cherrypy
from six import text_type

import autosubliminal
from autosubliminal import config, subchecker
from autosubliminal.db import WantedItemsDb
from autosubliminal.server.web import redirect
from autosubliminal.templates.page import PageTemplate
from autosubliminal.util.common import display_value, display_item_title, run_cmd, sanitize
from autosubliminal.util.queue import get_wanted_queue_lock, release_wanted_queue_lock
from autosubliminal.util.websocket import send_websocket_notification


class Home(object):
    def __init__(self):
        pass

    @cherrypy.expose
    def index(self):
        return PageTemplate('/home/home.mako').render()

    @cherrypy.expose(alias='updateWantedItem')
    @cherrypy.tools.json_out()
    def update_wanted_item(self, wanted_item_index, **kwargs):
        if get_wanted_queue_lock():
            # Get wanted item and update all keys that are passed
            wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
            for key in kwargs:
                wanted_item.set_attr(key, kwargs[key])

            # Release wanted queue lock
            release_wanted_queue_lock()

            # Only return updatable fields
            # These values will be shown in the view through jquery, so apply the display_value() on it!
            return {'displaytitle': display_item_title(wanted_item),
                    'title': display_value(wanted_item.title),
                    'year': display_value(wanted_item.year),
                    'season': display_value(wanted_item.season),
                    'episode': display_value(wanted_item.episode),
                    'source': display_value(wanted_item.source, default_value='N/A', uppercase=True),
                    'quality': display_value(wanted_item.quality, default_value='N/A', uppercase=True),
                    'codec': display_value(wanted_item.codec, default_value='N/A', uppercase=True),
                    'releasegrp': display_value(wanted_item.releasegrp, default_value='N/A', uppercase=True)}

        # Show notification if wanted queue is in use
        send_websocket_notification('Cannot update wanted item when wanted queue is in use!', type='notice')

    @cherrypy.expose(alias='resetWantedItem')
    @cherrypy.tools.json_out()
    def reset_wanted_item(self, wanted_item_index, **kwargs):
        if get_wanted_queue_lock():
            # Get wanted item and reset values
            wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
            wanted_item_db = WantedItemsDb().get_wanted_item(wanted_item.videopath)
            wanted_item_db.copy_to(wanted_item)

            # Release wanted queue lock
            release_wanted_queue_lock()

            # Only return updatable fields
            # These values represent the original values, so apply default display_value() on it!
            return {'displaytitle': display_item_title(wanted_item),
                    'title': display_value(wanted_item.title),
                    'year': display_value(wanted_item.year),
                    'season': display_value(wanted_item.season),
                    'episode': display_value(wanted_item.episode),
                    'source': display_value(wanted_item.source, default_value='N/A'),
                    'quality': display_value(wanted_item.quality, default_value='N/A'),
                    'codec': display_value(wanted_item.codec, default_value='N/A'),
                    'releasegrp': display_value(wanted_item.releasegrp, default_value='N/A')}

        # Show notification if wanted queue is in use
        send_websocket_notification('Cannot reset wanted item when wanted queue is in use!', type='notice')

    @cherrypy.expose(alias='searchId')
    def force_id_search(self, wanted_item_index):
        subchecker.force_id_search(wanted_item_index)
        redirect('/home')

    @cherrypy.expose(alias='skipShow')
    def skip_show(self, wanted_item_index, title, season=None):
        if not season:
            return PageTemplate('/home/home-skipshow.mako').render(wanted_item_index=wanted_item_index, title=title)
        else:
            if not wanted_item_index:
                raise cherrypy.HTTPError(400, 'No wanted_item index supplied')
            if not title:
                raise cherrypy.HTTPError(400, 'No show supplied')
            # Check if season is a number to be sure
            if not season == '00':
                season = text_type(int(season))
            config_season = season
            # Check if already skipped
            title_sanitized = sanitize(title)
            for x in autosubliminal.SKIPSHOW:
                if title_sanitized == sanitize(x):
                    for s in autosubliminal.SKIPSHOW[x].split(','):
                        if s == season or s == '00':
                            send_websocket_notification('Already skipped show %s season %s.' % (title, season))
                            redirect('/home')
                    # Not skipped yet, skip all or append season the seasons to skip
                    if season == '00':
                        config_season = '00'
                    else:
                        seasons = autosubliminal.SKIPSHOW[x].split(',')
                        seasons.append(season)
                        config_season = ','.join(sorted(seasons))
            # Skip show
            if subchecker.skip_show(wanted_item_index, season):
                config.write_config_property('skipshow', title, config_season)
                config.apply_skipshow()
                if season == '00':
                    send_websocket_notification('Skipped show %s all seasons.' % title)
                else:
                    send_websocket_notification('Skipped show %s season %s.' % (title, season))
            else:
                send_websocket_notification('Could not skip show! Please check the log file!', type='error')

            redirect('/home')

    @cherrypy.expose(alias='skipMovie')
    def skip_movie(self, wanted_item_index, title, year):
        if not wanted_item_index:
            raise cherrypy.HTTPError(400, 'No wanted_item index supplied')
        if not title:
            raise cherrypy.HTTPError(400, 'No title supplied')
        movie = title
        if year:
            movie += ' (' + year + ')'
        # Check if already skipped
        movie_sanitized = sanitize(movie)
        for x in autosubliminal.SKIPMOVIE:
            if movie_sanitized == sanitize(x):
                send_websocket_notification('Already skipped movie %s.' % movie)
                redirect('/home')
        # Skip movie
        if subchecker.skip_movie(wanted_item_index):
            config.write_config_property('skipmovie', movie, '00')
            config.apply_skipmovie()
            send_websocket_notification('Skipped movie %s.' % movie)
        else:
            send_websocket_notification('Could not skip movie! Please check the log file!', type='error')
        redirect('/home')

    @cherrypy.expose(alias='deleteVideo')
    def delete_video(self, wanted_item_index, confirmed=False, cleanup=False):
        if not confirmed:
            wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
            video = wanted_item.videopath
            return PageTemplate('/home/home-delete-video.mako').render(wanted_item_index=wanted_item_index, video=video)
        else:
            # Delete video
            deleted = subchecker.delete_video(wanted_item_index, cleanup)
            if deleted:
                send_websocket_notification('Video deleted from filesystem.')
            else:
                send_websocket_notification('Video could not be deleted! Please check the log file!', type='error')
            redirect('/home')

    @cherrypy.expose(alias='searchSubtitle')
    def search_subtitle(self, wanted_item_index, lang):
        # Search subtitle
        subs, errormessage = subchecker.search_subtitle(wanted_item_index, lang)
        # Send response in html (store subs under subs key)
        return PageTemplate('/home/home-manualsearch.mako').render(subs=subs, infomessage=None,
                                                                   errormessage=errormessage)

    @cherrypy.expose(alias='saveSubtitle')
    @cherrypy.tools.json_out()
    def save_subtitle(self, wanted_item_index, subtitle_index):
        # Save subtitle
        saved = subchecker.save_subtitle(wanted_item_index, subtitle_index)
        if saved:
            return {'result': saved, 'infomessage': 'Subtitle saved.', 'errormessage': None}
        else:
            return {'result': saved, 'infomessage': None,
                    'errormessage': 'Unable to save the subtitle! Please check the log file!'}

    @cherrypy.expose(alias='deleteSubtitle')
    @cherrypy.tools.json_out()
    def delete_subtitle(self, wanted_item_index):
        # Delete subtitle
        removed = subchecker.delete_subtitle(wanted_item_index)
        if removed:
            return {'result': removed, 'infomessage': 'Subtitle deleted.', 'errormessage': None}
        else:
            return {'result': removed, 'infomessage': None,
                    'errormessage': 'Unable to delete the subtitle! Please check the log file!'}

    @cherrypy.expose(alias='playVideo')
    @cherrypy.tools.json_out()
    def play_video(self, wanted_item_index):
        # Get wanted item
        wanted_item = autosubliminal.WANTEDQUEUE[int(wanted_item_index)]
        # Play video with default player
        video = wanted_item.videopath
        try:
            run_cmd(video, False)
            return {'result': True, 'infomessage': 'Playing video.', 'errormessage': None}
        except Exception:
            return {'result': False, 'infomessage': None,
                    'errormessage': 'Cannot play the video! Please check the log file!'}

    @cherrypy.expose(alias='postProcess')
    @cherrypy.tools.json_out()
    def post_process(self, wanted_item_index, subtitle_index=None):
        # Post process
        if subtitle_index:
            processed = subchecker.post_process(wanted_item_index, subtitle_index)
            if processed:
                return {'result': processed, 'infomessage:': None, 'errormessage': None, 'redirect': '/home'}
            else:
                return {'result': processed, 'infomessage': None,
                        'errormessage': 'Unable to handle post processing! Please check the log file!'}
        else:
            subchecker.post_process_no_subtitle(wanted_item_index)
            redirect('/home')
