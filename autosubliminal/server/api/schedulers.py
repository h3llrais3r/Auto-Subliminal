# coding=utf-8

import cherrypy

import autosubliminal
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import to_dict


@cherrypy.popargs('scheduler_name')
class SchedulersApi(RestResource):
    """
    Rest resource for handling the /schedulers path.
    """

    def __init__(self):
        super(SchedulersApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

        # Set the ignored attributes when converting the response objects
        self._ignored_attributes = ('process',)

    def get(self, scheduler_name=None):
        """Get the list of schedulers or a single scheduler by it's name."""
        if scheduler_name is None:
            return [to_dict(autosubliminal.SCHEDULERS[scheduler], *self._ignored_attributes) for scheduler in
                    autosubliminal.SCHEDULERS]
        elif scheduler_name in autosubliminal.SCHEDULERS:
            return to_dict(autosubliminal.SCHEDULERS[scheduler_name], *self._ignored_attributes)
        else:
            return self._bad_request('Invalid scheduler_name')
