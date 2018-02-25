# coding=utf-8

import logging
import os
import shutil
from logging.handlers import BaseRotatingHandler

import autosubliminal


def initialize():
    # Customize the root logger so every logger outputs to this
    # Using logging.getLogger() without name parameter returns the root logger
    log = logging.getLogger()
    log.setLevel(autosubliminal.LOGLEVEL)

    # Clear existing handlers (needed after soft restart) to prevent double logging
    log.handlers = []

    log_filter = _LogFilter(autosubliminal.LOGHTTPACCESS, autosubliminal.LOGEXTERNALLIBS)
    log_formatter = _LogFormatter(autosubliminal.LOGDETAILEDFORMAT)
    log_handler = CustomRotatingFileHandler(autosubliminal.LOGFILE,
                                            mode='a',
                                            maxBytes=autosubliminal.LOGSIZE * 1024 * 1024,
                                            backupCount=autosubliminal.LOGNUM)
    log_handler.addFilter(log_filter)
    log_handler.setFormatter(log_formatter)
    log_handler.setLevel(autosubliminal.LOGLEVEL)
    log.addHandler(log_handler)

    # Console log handler
    if not autosubliminal.DAEMON:
        console = logging.StreamHandler()
        console.setLevel(autosubliminal.LOGLEVELCONSOLE)
        # Set a format which is simpler for console use
        formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
        console.setFormatter(formatter)
        log.addHandler(console)


class _LogFormatter(logging.Formatter):
    def __init__(self, detailed_format=False):
        self.detailed_format = detailed_format
        # If the format is changed, also the utils.LOG_PARSER must be changed!
        self._custom_fmt = '%(asctime)s %(levelname)-8s '
        if detailed_format:
            # Add custom details
            self._custom_fmt += '%(customDetails)s '
        self._custom_fmt += '%(message)s'
        super(_LogFormatter, self).__init__(self._custom_fmt)

    def format(self, record):
        # Add custom field(s) to the record to use it in the detailed format
        if self.detailed_format:
            record.customDetails = '[%s :: %s]' % (record.threadName, record.name)
        return super(_LogFormatter, self).format(record)


class _LogFilter(logging.Filter):
    def __init__(self, log_http_access=None, log_external_libs=None):
        self.log_http_access = log_http_access
        self.log_external_libs = log_external_libs
        super(_LogFilter, self).__init__()

    def filter(self, record):
        # Filter out http access
        if not self.log_http_access and 'cherrypy.access' in record.name:
            return False
        # Filter out external libs (= without own package name)
        # REMARK: this only works when the detailed log format is enabled
        if not self.log_external_libs and not any(x in record.name for x in ['__main__', 'autosubliminal.']):
            return False
        return True


class CustomRotatingFileHandler(BaseRotatingHandler):
    """
    Custom handler for logging to a set of files, which switches from one file
    to the next when the current file reaches a certain size.
    This is a modified version of the RotatingFileHandler to circumvent http://bugs.python.org/issue4749
    """

    def __init__(self, filename, mode='a', maxBytes=0, backupCount=0, encoding=None, delay=0):
        """
        Open the specified file and use it as the stream for logging.

        By default, the file grows indefinitely. You can specify particular
        values of maxBytes and backupCount to allow the file to rollover at
        a predetermined size.

        Rollover occurs whenever the current log file is nearly maxBytes in
        length. If backupCount is >= 1, the system will successively create
        new files with the same pathname as the base file, but with extensions
        ".1", ".2" etc. appended to it. For example, with a backupCount of 5
        and a base file name of "app.log", you would get "app.log",
        "app.log.1", "app.log.2", ... through to "app.log.5". The file being
        written to is always "app.log" - when it gets filled up, it is closed
        and renamed to "app.log.1", and if files "app.log.1", "app.log.2" etc.
        exist, then they are renamed to "app.log.2", "app.log.3" etc.
        respectively.

        If maxBytes is zero, rollover never occurs.
        """
        # If rotation/rollover is wanted, it doesn't make sense to use another
        # mode. If for example 'w' were specified, then if there were multiple
        # runs of the calling application, the logs from previous runs would be
        # lost if the 'w' is respected, because the log file would be truncated
        # on each run.
        if maxBytes > 0:
            mode = 'a'
        BaseRotatingHandler.__init__(self, filename, mode, encoding, delay)
        self.maxBytes = maxBytes
        self.backupCount = backupCount

    def doRollover(self):
        """
        Do a rollover, as described in __init__().
        """
        if self.stream:
            self.stream.close()
            self.stream = None
        if self.backupCount > 0:
            for i in list(range(self.backupCount - 1, 0, -1)):
                sfn = "%s.%d" % (self.baseFilename, i)
                dfn = "%s.%d" % (self.baseFilename, i + 1)
                if os.path.exists(sfn):
                    # print "%s -> %s" % (sfn, dfn)
                    if os.path.exists(dfn):
                        os.remove(dfn)
                    os.rename(sfn, dfn)
            dfn = self.baseFilename + ".1"
            if os.path.exists(dfn):
                os.remove(dfn)
            # Issue 18940: A file may not have been created if delay is True.
            if os.path.exists(self.baseFilename):
                # os.rename(self.baseFilename, dfn)
                #######################################
                # Line above replaced with code below
                # This prevents the error 32 on windows
                # See http://bugs.python.org/issue4749
                #######################################
                shutil.copy(self.baseFilename, dfn)
                # clear base log file
                with file(self.baseFilename, 'w'):
                    pass
                    #######################################

        if not self.delay:
            self.stream = self._open()

    def shouldRollover(self, record):
        """
        Determine if rollover should occur.

        Basically, see if the supplied record would cause the file to exceed
        the size limit we have.
        """
        if self.stream is None:  # delay was set...
            self.stream = self._open()
        if self.maxBytes > 0:  # are we rolling over?
            msg = "%s\n" % self.format(record)
            self.stream.seek(0, 2)  # due to non-posix-compliant Windows feature
            if self.stream.tell() + len(msg) >= self.maxBytes:
                return 1
        return 0
