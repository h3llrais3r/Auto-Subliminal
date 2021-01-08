# coding=utf-8

import autosubliminal

PAGE_RELOAD = 'PAGE_RELOAD'
PROCESS_STARTED = 'PROCESS_STARTED'
PROCESS_FINISHED = 'PROCESS_FINISHED'
SYSTEM_RESTARTED = 'SYSTEM_RESTARTED'

SUPPORTED_EVENT_TYPES = [PAGE_RELOAD, PROCESS_STARTED, PROCESS_FINISHED, SYSTEM_RESTARTED]


def send_websocket_event(type, data=None):
    """ Send a websocket event message.

    :param type: the event type
    :type type: str
    :param data: the optional data for the event
    :type data: dict
    """
    event = {
        'type': 'EVENT',
        'event': {
            'type': type,
            'data': data
        }
    }
    autosubliminal.WEBSOCKETMESSAGEQUEUE.append(event)


def send_websocket_notification(message, type='info', sticky=False):
    """Send a websocket notification message.

    :param message: the notification message
    :type message: str
    :param type: the notification type
    Possible values for notification type are (to be in sync with PNotify jquery plugin):
    - info (blue)
    - success (green)
    - notice (orange)
    - error (red)
    :type type: str
    :param sticky: indication if it will be shown at a fixed inline location and it will not fade
    :type sticky: bool
    """
    notification = {
        'type': 'NOTIFICATION',
        'notification': {
            'message': message,
            'type': type,
            'sticky': sticky}
    }
    autosubliminal.WEBSOCKETMESSAGEQUEUE.append(notification)
