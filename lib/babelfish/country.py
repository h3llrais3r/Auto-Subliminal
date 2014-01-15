# -*- coding: utf-8 -*-
#
# Copyright (c) 2013 the BabelFish authors. All rights reserved.
# Use of this source code is governed by the 3-clause BSD license
# that can be found in the LICENSE file.
#
from __future__ import unicode_literals
from collections import namedtuple
from functools import partial
from pkg_resources import resource_stream, iter_entry_points  # @UnresolvedImport
from .converters import CountryReverseConverter


COUNTRIES = {}
COUNTRY_MATRIX = []
COUNTRY_CONVERTERS = {}

#: The namedtuple used in the :data:`COUNTRY_MATRIX`
IsoCountry = namedtuple('IsoCountry', ['name', 'alpha2'])

f = resource_stream('babelfish', 'data/iso-3166-1.txt')
f.readline()
for l in f:
    iso_country = IsoCountry(*l.decode('utf-8').strip().split(';'))
    COUNTRIES[iso_country.alpha2] = iso_country.name
    COUNTRY_MATRIX.append(iso_country)
f.close()


class CountryMeta(type):
    """The :class:`Country` metaclass

    Dynamically redirect :meth:`Country.frommycode` to :meth:`Country.fromcode` with the ``mycode`` `converter`

    """
    def __getattr__(cls, name):
        if name.startswith('from'):
            return partial(cls.fromcode, converter=name[4:])
        return getattr(cls, name)


class Country(CountryMeta(str('CountryBase'), (object,), {})):
    """A country on Earth

    A country is represented by a 2-letter code from the ISO-3166 standard

    :param string country: 2-letter ISO-3166 country code

    """
    def __init__(self, country):
        if country not in COUNTRIES:
            raise ValueError('%r is not a valid country' % country)

        #: ISO-3166 2-letter country code
        self.alpha2 = country

    @classmethod
    def fromcode(cls, code, converter):
        """Create a :class:`Country` by its `code` using `converter` to
        :meth:`~babelfish.converters.CountryReverseConverter.reverse` it

        :param string code: the code to reverse
        :param string converter: name of the :class:`~babelfish.converters.CountryReverseConverter` to use
        :return: the corresponding :class:`Country` instance
        :rtype: :class:`Country`

        """
        return cls(get_country_converter(converter).reverse(code))

    def __getattr__(self, name):
        return get_country_converter(name).convert(self.alpha2)

    def __hash__(self):
        return hash(self.alpha2)

    def __eq__(self, other):
        if other is None:
            return False
        return self.alpha2 == other.alpha2

    def __ne__(self, other):
        return not self == other

    def __repr__(self):
        return '<Country [%s]>' % self

    def __str__(self):
        return self.alpha2


def get_country_converter(name):
    """Get a registered :class:`~babelfish.converters.CountryConverter` by `name`

    If the converter was already loaded, it is returned from :data:`COUNTRY_CONVERTERS` otherwise the
    entry point is searched for a matching converter.
    If a matching converter is found, it is registered and then returned.
    If no matching converter could be found, a ``KeyError`` is raised.

    :param string name: name of the country converter to get
    :return: the country converter
    :rtype: :class:`~babelfish.converters.CountryConverter`
    :raise: KeyError if no matching converter could be found

    """
    if name in COUNTRY_CONVERTERS:
        return COUNTRY_CONVERTERS[name]
    for ep in iter_entry_points('babelfish.country_converters'):
        if ep.name == name:
            register_country_converter(name, ep.load())
            return COUNTRY_CONVERTERS[name]
    raise KeyError(name)


def register_country_converter(name, converter):
    """Register a :class:`~babelfish.converters.CountryConverter`
    with the given name

    This will add the `name` property to the :class:`Country` class and
    an alternative constructor `fromname` if the `converter` is a
    :class:`~babelfish.converters.CountryReverseConverter`

    :param string name: name of the converter to register
    :param converter: converter to register
    :type converter: :class:`~babelfish.converters.CountryConverter`

    """
    if name in COUNTRY_CONVERTERS:
        raise ValueError('Converter %r already exists' % name)
    COUNTRY_CONVERTERS[name] = converter()


def unregister_country_converter(name):
    """Unregister a :class:`~babelfish.converters.CountryConverter` by
    name

    :param string name: name of the converter to unregister

    """
    if name not in COUNTRY_CONVERTERS:
        raise ValueError('Converter %r does not exist' % name)
    del COUNTRY_CONVERTERS[name]


def load_country_converters():
    """Load converters from the entry point

    Call :func:`register_country_converter` for each entry of the
    'babelfish.country_converters' entry point

    """
    for ep in iter_entry_points('babelfish.country_converters'):
        if ep.name not in COUNTRY_CONVERTERS:
            register_country_converter(ep.name, ep.load())


def clear_country_converters():
    """Clear all country converters

    Call :func:`unregister_country_converter` on each registered converter
    in :data:`COUNTRY_CONVERTERS`

    """
    for name in set(COUNTRY_CONVERTERS.keys()):
        unregister_country_converter(name)
