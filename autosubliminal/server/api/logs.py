# coding=utf-8

import os
import re
from typing import Any, Dict, List

import cherrypy

import autosubliminal
from autosubliminal.core.logger import count_backup_logfiles, get_log_lines
from autosubliminal.server.rest import RestResource


@cherrypy.popargs('lognum')
class LogsApi(RestResource):
    """
    Rest resource for handling the /api/logs path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/logs/...
        self.count = _CountApi()

        # Set the allowed methods
        self.allowed_methods = ['GET', 'DELETE']

    def get(self, lognum: str = None) -> List[str]:
        """Get the log lines for a logfile."""
        return get_log_lines(loglevel='all', lines=1000, lognum=int(lognum) if lognum else None)

    def delete(self, lognum: str = None) -> None:
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

        self._set_no_content_status()
        return None


class _CountApi(RestResource):
    """
    Rest resource for handling the /api/logs/count path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self) -> Dict[str, Any]:
        """Get the number of backup logfiles."""
        count = count_backup_logfiles()
        return {'count': count}
