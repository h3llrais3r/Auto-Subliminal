# coding=utf-8

import os
import tempfile

import autosubliminal
from autosubliminal.core.logger import display_logfile


def test_display_logfile():
    try:
        linesep = os.linesep
        line1 = u'2016-06-06 20:32:15,509 INFO     [MainThread :: __main__] Running application with PID: 9944'
        line2 = u'traceback'
        line3 = u'2016-06-06 20:32:15,509 DEBUG    [MainThread :: __main__] System encoding: cp1252'
        line4 = u'2016-06-06 20:32:15,509 DEBUG    [MainThread :: __main__] Config version: 10'
        lines = line1 + linesep + line2 + linesep + line3 + linesep + line4 + linesep
        lines_info = line1 + linesep + line2 + linesep
        lines_debug = line3 + linesep + line4 + linesep
        lines_debug_reversed = line4 + linesep + line3 + linesep
        fd, autosubliminal.LOGFILE = tempfile.mkstemp(text=True)
        file = open(autosubliminal.LOGFILE, 'w')
        file.write(line1 + '\n' + line2 + '\n' + line3 + '\n' + line4 + '\n')
        file.close()
        os.close(fd)
        assert display_logfile() == lines
        assert display_logfile(loglevel='all') == lines
        assert display_logfile(loglevel='debug') == lines_debug
        assert display_logfile(loglevel='info') == lines_info
        assert display_logfile(loglevel='error') == ''
        autosubliminal.LOGREVERSED = True
        assert display_logfile(loglevel='debug') == lines_debug_reversed
    finally:
        os.remove(autosubliminal.LOGFILE)
