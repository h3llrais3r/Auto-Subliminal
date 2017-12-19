# -*- coding: utf-8 -*-

"""
growl library
~~~~~~~~~~~~~

Growl is a Python interface for the Growl (GNTP) protocol. It can be used to
build registration and notification packets for sending over a socket connection.

Usage:

    >>> from growl import Registration
    >>> from socket import AF_INET, SOCK_DGRAM, socket
    >>> addr = ("localhost", GROWL_UDP_PORT)
    >>> s = socket(AF_INET, SOCK_DGRAM)
    >>> p = Registration()
    >>> p.add_notification()
    >>> s.sendto(p.payload(), addr)
    >>>
    >>> p = Notification()
    >>> s.sendto(p.payload(), addr)


:copyright: (c) 2013 by Nathan Cahill. (c) 2004 Rui Carmo.
:license: BSD 2-Clause, see LICENSE.txt for more details.

"""

from .growl import Registration, Notification, GROWL_UDP_PORT
