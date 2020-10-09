# coding=utf-8

import cherrypy

import autosubliminal
from autosubliminal.server.rest import RestResource
from autosubliminal.util.common import camelize


@cherrypy.popargs('scheduler_name')
class SchedulersApi(RestResource):
    """
    Rest resource for handling the /api/schedulers path.
    """

    def __init__(self):
        super(SchedulersApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self, scheduler_name=None):
        """Get the list of schedulers or a single scheduler by it's name."""
        if scheduler_name is None:
            return [autosubliminal.SCHEDULERS[scheduler].to_dict(camelize) for scheduler in autosubliminal.SCHEDULERS]
        elif scheduler_name in autosubliminal.SCHEDULERS:
            return autosubliminal.SCHEDULERS[scheduler_name].to_dict(camelize)
        else:
            return self._bad_request('Invalid scheduler_name')
