# coding=utf-8

import autosubliminal
from autosubliminal import system
from autosubliminal.server.rest import RestResource


class SystemApi(RestResource):
    """
    Rest resource for handling the /api/system path.
    """

    def __init__(self):
        super(SystemApi, self).__init__()

        # Add all sub paths here: /api/system/...
        self.alive = _AliveApi()
        self.restart = _RestartApi()
        self.shutdown = _ShutdownApi()


class _AliveApi(RestResource):
    """
    Rest resource for handling the /api/system/alive path.
    """

    def __init__(self):
        super(_AliveApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Return true if system is alive."""
        if autosubliminal.STARTED:
            return {'alive': True}
        else:
            return {'alive': False}


class _RestartApi(RestResource):
    """
    Rest resource for handling the /api/system/restart path.
    """

    def __init__(self):
        super(_RestartApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('POST',)

    def post(self):
        """Restart the system."""
        system.restart()

        return self._no_content()


class _ShutdownApi(RestResource):
    """
    Rest resource for handling the /api/system/shutdown path.
    """

    def __init__(self):
        super(_ShutdownApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('POST',)

    def post(self):
        """Shutdown the system."""
        system.shutdown()

        return self._no_content()
