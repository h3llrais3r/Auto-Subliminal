# coding=utf-8

import autosubliminal

PAGE_RELOAD = 'PAGE_RELOAD'
PROCESS_STARTED = 'PROCESS_STARTED'
PROCESS_FINISHED = 'PROCESS_FINISHED'

SUPPORTED_EVENT_TYPES = [PAGE_RELOAD, PROCESS_STARTED, PROCESS_FINISHED]


def send_websocket_event(event_type, event_data={}):
    """ Send a websocket event message.

    :param event_type: the event type
    :type event_type: WebsocketEventType
    :param event_data: the optional data for the event
    :type event_data: dict
    """
    event = {
        'type': 'EVENT',
        'event': {
            'type': event_type,
            'data': event_data
        }
    }
    autosubliminal.WEBSOCKETMESSAGEQUEUE.append(event)


def send_websocket_notification(notification_message, notification_type='info', sticky=False):
    """Send a websocket notification message.

    :param notification_message: the notification message
    :type notification_message: str
    :param notification_type: the notification type
    Possible values for notification type are (to be in sync with PNotify jquery plugin):
    - info (blue)
    - success (green)
    - notice (orange)
    - error (red)
    :type notification_type: str
    :param sticky: indication if it will be shown at a fixed inline location and it will not fade
    :type sticky: bool
    """
    notification = {
        'type': 'NOTIFICATION',
        'notification': {
            'message': notification_message,
            'type': notification_type,
            'sticky': sticky}
    }
    autosubliminal.WEBSOCKETMESSAGEQUEUE.append(notification)
