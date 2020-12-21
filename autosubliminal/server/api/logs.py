# coding=utf-8

import os
import re

import cherrypy

import autosubliminal
from autosubliminal.core.logger import count_backup_logfiles, display_logfile
from autosubliminal.server.rest import RestResource


@cherrypy.popargs('lognum')
class LogsApi(RestResource):
    """
    Rest resource for handling the /api/logs path.
    """

    def __init__(self):
        super(LogsApi, self).__init__()

        # Add all sub paths here: /api/logs/...
        self.count = _CountApi()

        # Set the allowed methods
        self.allowed_methods = ('GET', 'DELETE')

    def get(self, lognum=None):
        """Get the logs for a logfile."""
        return display_logfile(loglevel='all', lines=1000, lognum=lognum)

    def delete(self, lognum=None):
        """Delete the logs for a logfile."""
        if lognum:
            # Clear only specified backup log file
            logs = [f for f in os.listdir('.') if os.path.isfile(f) and re.match(autosubliminal.LOGFILE + '.', f)]
            for f in list(filter(lambda x: x == autosubliminal.LOGFILE + '.' + lognum, logs)):
                os.remove(f)
        else:
            # Clear current log file (open it in write mode and pass)
            with open(autosubliminal.LOGFILE, mode='w'):
                pass
            # Remove possible backup log files
            for f in [f for f in os.listdir('.') if os.path.isfile(f) and re.match(autosubliminal.LOGFILE + '.', f)]:
                os.remove(f)

        return self._no_content()


class _CountApi(RestResource):
    """
    Rest resource for handling the /api/logs/count path.
    """

    def __init__(self):
        super(_CountApi, self).__init__()

        # Set the allowed methods
        self.allowed_methods = ('GET',)

    def get(self):
        """Get the number of backup logfiles."""
        return count_backup_logfiles()
