import logging
import logging.handlers

import autosubliminal


def initialize():
    # Customize the root logger so every logger outputs to this
    # Using logging.getLogger() without name parameter returns the root logger
    log = logging.getLogger()
    log.setLevel(autosubliminal.LOGLEVEL)

    # Clear existing handlers (needed after soft restart) to prevent double logging
    log.handlers = []

    log_filter = _LogFilter(autosubliminal.LOGHTTPACCESS)
    # If the formatter is changed, also the utils.LOG_PARSER must be changed!
    log_formatter = logging.Formatter('%(asctime)s %(levelname)-8s [%(name)s] %(message)s')
    log_handler = logging.handlers.RotatingFileHandler(autosubliminal.LOGFILE, 'a', autosubliminal.LOGSIZE,
                                                       autosubliminal.LOGNUM)
    log_handler.addFilter(log_filter)
    log_handler.setFormatter(log_formatter)
    log_handler.setLevel(autosubliminal.LOGLEVEL)
    log.addHandler(log_handler)

    # console log handler
    if not autosubliminal.DAEMON:
        console = logging.StreamHandler()
        console.setLevel(autosubliminal.LOGLEVELCONSOLE)
        # set a format which is simpler for console use
        formatter = logging.Formatter('%(asctime)s %(levelname)s  %(message)s')
        console.setFormatter(formatter)
        log.addHandler(console)


class _LogFilter(logging.Filter):
    def __init__(self, log_http_access=None):
        self.log_http_access = log_http_access

    def filter(self, record):
        # Filter out http access
        if not self.log_http_access:
            if 'cherrypy.access' in record.name:
                return False
        return True
