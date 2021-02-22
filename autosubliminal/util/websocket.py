# coding=utf-8

import autosubliminal

SYSTEM_START = 'SYSTEM_START'
SYSTEM_RESTART = 'SYSTEM_RESTART'
SYSTEM_SHUTDOWN = 'SYSTEM_SHUTDOWN'
SYSTEM_UPDATE = 'SYSTEM_UPDATE'
SCHEDULER_START = 'SCHEDULER_START'
SCHEDULER_FINISH = 'SCHEDULER_FINISH'
PAGE_RELOAD = 'PAGE_RELOAD'  # TODO: remove PAGE_RELOAD after angularize frontend

SUPPORTED_EVENT_TYPES = [SYSTEM_START, SYSTEM_RESTART, SYSTEM_SHUTDOWN, SYSTEM_UPDATE, SCHEDULER_START,
                         SCHEDULER_FINISH, PAGE_RELOAD]


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


def send_websocket_notification(message, severity='info', sticky=False):
    """Send a websocket notification message.

    :param message: the notification message
    :type message: str
    :param severity: the notification message severity
    Possible values for notification type are:
    - success (green)
    - info (blue)
    - warn (orange)
    - error (red)
    :type severity: str
    :param sticky: indication if it will be shown at a fixed inline location and it will not fade
    :type sticky: bool
    """
    notification = {
        'type': 'NOTIFICATION',
        'notification': {
            'message': message,
            'severity': severity,
            'sticky': sticky}
    }
    autosubliminal.WEBSOCKETMESSAGEQUEUE.append(notification)
