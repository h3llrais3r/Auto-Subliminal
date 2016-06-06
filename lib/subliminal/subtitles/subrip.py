# -*- coding: utf-8 -*-

import re
from datetime import time

class SubripReadError(Exception):
    pass

class SubripReadIndexError(SubripReadError):
    pass

class SubripReader(object):
    INDEX = 1
    TIMINGS = 2
    TEXT = 3

    index_re = re.compile(r'\d+')
    timing_re = re.compile(r'(?P<hour>\d{2}):(?P<minute>\d{2}):(?P<second>\d{2}),(?P<milliseconds>\d{3})')

    def __init__(self):
        self.state = self.INDEX

    def read(self, content):
        pass

    def read_line(self, line):
        if self.state == self.INDEX:
            if self.index_re.match(line):
                raise SubripReadIndexError


def read_cue(stream):
    i = 1
    print 'i', i
    for x in range(5):
        yield x
    i += 1


class SubripSubtitle(object):
    def __init__(self):
        self.cues = []


if __name__ == '__main__':
    print read_cue('toto')
    i = 0
    for x in read_cue('toto'):
        print x
        if i > 10:
            break
        i += 1
