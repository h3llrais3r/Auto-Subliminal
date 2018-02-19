# coding=utf-8

import logging
import os
import re
import time

from guessit import guessit
from six import text_type

import autosubliminal
from autosubliminal import utils

log = logging.getLogger(__name__)

release_group_regex = '(.*)\[.*?\]'


def process_file(dirname, filename):
    """
    Process a file with guessit and construct the wanted_item dict.
    Items used in wanted_item for type = 'episode':
    - 'videopath'
    - 'timestamp'
    - 'languages'
    - 'type'
    - 'title'
    - 'year'
    - 'season'
    - 'episode'
    - 'source'
    - 'quality'
    - 'codec'
    - 'releasegrp'
    - 'tvdbid'
    Items used in wanted_item for type = 'movie':
    - 'videopath'
    - 'timestamp'
    - 'languages'
    - 'type'
    - 'title'
    - 'year'
    - 'source'
    - 'quality'
    - 'codec'
    - 'releasegrp'
    - 'imdbid'
    """

    log.info('Processing file: %s' % filename)
    file_path = os.path.join(dirname, filename)

    # Check minimal video file size if needed
    if autosubliminal.MINVIDEOFILESIZE:
        file_size = os.path.getsize(file_path)
        # MINVIDEOFILESIZE is size in MB
        if file_size < autosubliminal.MINVIDEOFILESIZE * 1024 * 1024:
            log.warning('File size (%s) is lower than %sMB, skipping' % (
                utils.humanize_bytes(file_size), autosubliminal.MINVIDEOFILESIZE))
            return None

    # Guess and create dict from guess
    result_dict = _dict_from_guess(_guess(filename))
    if result_dict is None:
        # Fallback to guess on full path
        result_dict = _dict_from_guess(_guess(file_path))

    # Enrich dict
    if result_dict is not None:
        _enrich_dict(result_dict, file_path)

    return result_dict


def _guess(file_path):
    try:
        log.debug('Guessing file info')
        guess = guessit(file_path)
        log.debug('Guess result: %r' % guess)
        return _validate_guess(guess)
    except Exception as e:
        log.error('Could not guess file info for: %s' % file_path)
        log.exception(e)
        return None


def _validate_guess(guess):
    log.debug('Validating guess')

    # Validate episode guess
    if _property_from_guess(guess, 'type') == 'episode':
        log.debug('Video guessed as episode')
        if _property_from_guess(guess, 'title') is None or _property_from_guess(guess, 'season') is None \
                or _property_from_guess(guess, 'episode') is None:
            log.error('Could not guess all the mandatory elements for an episode')
            return None

    # Validate movie guess
    elif _property_from_guess(guess, 'type') == 'movie':
        log.debug('Video guessed as movie')
        if _property_from_guess(guess, 'title') is None:
            log.error('Could not guess all the mandatory elements for a movie')
            return None

    # Invalid type guess
    else:
        log.error('Could not guess the type of video')
        return None

    return guess


def _dict_from_guess(guess):
    result_dict = None
    if guess is not None:
        result_dict = {'type': _property_from_guess(guess, 'type'),
                       'title': _property_from_guess(guess, 'title'),
                       'year': _property_from_guess(guess, 'year'),
                       'season': _property_from_guess(guess, 'season'),
                       'episode': _join_episodes(_property_from_guess(guess, 'episode')),
                       'source': _property_from_guess(guess, 'format'),
                       'quality': _property_from_guess(guess, 'screen_size'),
                       'codec': _property_from_guess(guess, 'video_codec'),
                       'releasegrp': _split_release_group(_property_from_guess(guess, 'release_group'))}
        log.debug('Dict from guess: %r' % result_dict)
    return result_dict


def _property_from_guess(guess, property_name, default_value=None):
    property_value = default_value
    if property_name in guess:
        property_value = guess[property_name]
    return property_value


def _split_release_group(release_group):
    if release_group:
        # Remove release group provider (part between []) if present (f.e. KILLERS[rarbg])
        match = re.search(release_group_regex, release_group)
        if match:
            # Return first parenthesized group (=release group without [] part)
            return match.group(1)
    return release_group


def _join_episodes(episode):
    if isinstance(episode, list):
        return ','.join(text_type(ep) for ep in episode)  # episode can be a list of episodes (int)
    return episode


def _enrich_dict(result_dict, file_path):
    log.debug('Enriching dict with metadata')

    # Enrich with common data
    result_dict['videopath'] = file_path
    result_dict['timestamp'] = unicode(
        time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(os.path.getctime(result_dict['videopath']))))
    # Languages cannot be derived from the processing file, so set it outside the fileprocessor (i.e. in diskscanner)
    result_dict['languages'] = []

    # Enrich with episode data
    if result_dict['type'] == 'episode':
        result_dict['tvdbid'] = autosubliminal.SHOWINDEXER.get_tvdb_id(result_dict['title'], result_dict['year'])

    # Enrich with movie data
    elif result_dict['type'] == 'movie':
        result_dict['imdbid'], result_dict['year'] = autosubliminal.MOVIEINDEXER.get_imdb_id_and_year(
            result_dict['title'],
            result_dict['year'])

    log.debug('Enriched dict: %r' % result_dict)
