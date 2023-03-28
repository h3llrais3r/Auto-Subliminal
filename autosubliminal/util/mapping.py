# coding=utf-8

import logging
from typing import List, Optional

import autosubliminal
from autosubliminal.util.common import sanitize

log = logging.getLogger(__name__)


def get_show_name_mapping(show_name: str) -> Optional[int]:
    """
    Get the tvdb show name mapping for a show.

    :param show_name: the show name to get the tvdb id for
    :return: the tvdb show id or None
    :rtype: int | None
    """
    show_name_sanitized = sanitize(show_name)
    for x in autosubliminal.SHOWNAMEMAPPING:
        if show_name_sanitized == sanitize(x):
            log.debug('Found match in shownamemapping for %s', show_name)
            return int(autosubliminal.SHOWNAMEMAPPING[x])

    return None


def get_addic7ed_show_name_mapping(show_name: str) -> Optional[int]:
    """
    Get the addic7ed show name mapping for a show.

    :param show_name: the show name to get the addic7ed id for
    :return: the addic7ed show id or None
    :rtype: int | None
    """
    show_name_sanitized = sanitize(show_name)
    for x in autosubliminal.ADDIC7EDSHOWNAMEMAPPING:
        if show_name_sanitized == sanitize(x):
            log.debug('Found match in addic7edshownamemapping for %s', show_name)
            return int(autosubliminal.ADDIC7EDSHOWNAMEMAPPING[x])

    return None


def get_alternative_show_name_mapping(show_name: str) -> Optional[List[str]]:
    """
    Get the list of alternative show names for a show.

    :param show_name: the show name to get the alternatives for
    :return: a list of alternative show names or None
    :rtype: list[str] | None
    """
    show_name_sanitized = sanitize(show_name)
    for x in autosubliminal.ALTERNATIVESHOWNAMEMAPPING:
        if show_name_sanitized == sanitize(x):
            log.debug('Found match in alternativeshownamemapping for %s', show_name)
            alternatives = autosubliminal.ALTERNATIVESHOWNAMEMAPPING[x]
            return [sanitize(x) for x in alternatives.split(',')]  # Needs to return a list

    return None


def get_movie_name_mapping(title: str, year: int) -> Optional[str]:
    """
    Get the imdb movie name mapping for a movie.

    :param title: the title of the movie
    :param year: the year of the movie
    :return: the imdb id of the movie or None
    :rtype: str | None
    """
    movie = title
    if year:
        movie += ' (' + str(year) + ')'
    movie_sanitized = sanitize(movie)
    for x in autosubliminal.MOVIENAMEMAPPING:
        if movie_sanitized == sanitize(x):
            log.debug('Found match in movienamemapping for %s', movie)
            return autosubliminal.MOVIENAMEMAPPING[x]

    return None


def get_alternative_movie_name_mapping(title: str, year: int) -> Optional[List[str]]:
    """
    Get the list of alternative movie titles (without year).

    :param title: the title of the movie
    :param year: the year of the movie
    :return: a list of alternative titles (without year) or None
    :rtype: list[str] | None
    """
    movie = title
    if year:
        movie += ' (' + str(year) + ')'
    movie_sanitized = sanitize(movie)
    for x in autosubliminal.ALTERNATIVEMOVIENAMEMAPPING:
        if movie_sanitized == sanitize(x):
            log.debug('Found match in alternativemovienamemapping for %s', movie)
            alternatives = autosubliminal.ALTERNATIVEMOVIENAMEMAPPING[x]
            return [sanitize(x) for x in alternatives.split(',')]  # Needs to return a list

    return None
