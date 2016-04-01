import logging
import os
import re

import guessit

import autosubliminal
from autosubliminal import utils

log = logging.getLogger(__name__)

release_group_regex = "(.*)\[.*?\]"


def process_file(dirname, filename):
    """
    Process a file with guessit and construct the wanted_item dict.
    Items used in wanted_item for type = 'episode':
    - 'type'
    - 'title'
    - 'year'
    - 'season'
    - 'episode'
    - 'source'
    - 'quality'
    - 'codec'
    - 'releasegrp'
    Items used in wanted_item for type = 'movie':
    - 'type'
    - 'title'
    - 'year'
    - 'source'
    - 'quality'
    - 'codec'
    - 'releasegrp'
    """

    log.info("Processing file: %s" % filename)
    file_path = os.path.join(dirname, filename)

    # Check minimal video file size if needed
    if autosubliminal.MINVIDEOFILESIZE:
        file_size = os.path.getsize(file_path)
        # MINVIDEOFILESIZE is size in MB
        if file_size < autosubliminal.MINVIDEOFILESIZE * 1024 * 1024:
            log.warning("File size (%s) is lower than %sMB, skipping" % (
                utils.humanize_bytes(file_size), autosubliminal.MINVIDEOFILESIZE))
            return

    # Guess
    try:
        log.debug("Guessing file info")
        guess = guessit.guess_file_info(file_path)
        log.debug("Guess: %r" % guess)
    except Exception, e:
        log.error("Could not guess file info for: %s" % file_path)
        log.error(e)
        return

    # Create and return dict from guess
    return _dict_from_guess(guess)


def _dict_from_guess(guess):
    """
    Create a wanted_item dict from a guess:
    - The same dict is used for both episode and movie
    - The 'series' is used as 'title' for an episode
    - If no 'series' is found as 'title', it will be a movie, so take the 'title' of the movie as 'title'
    - If no 'screenSize' is found, it will default to 'SD' quality
    """
    log.debug("Getting dict from guess")
    result_dict = {'type': _property_from_guess(guess, 'type'),
                   'title': _property_from_guess(guess, 'series', _property_from_guess(guess, 'title')),
                   'year': _property_from_guess(guess, 'year'),
                   'season': _property_from_guess(guess, 'season'),
                   'episode': _property_from_guess(guess, 'episodeNumber'),
                   'source': _property_from_guess(guess, 'format', u'N/A'),
                   'quality': _property_from_guess(guess, 'screenSize', u'SD'),
                   'codec': _property_from_guess(guess, 'videoCodec', u'N/A'),
                   'releasegrp': _split_release_group(_property_from_guess(guess, 'releaseGroup', u'N/A'))}
    log.debug("Dict from guess: %r" % result_dict)

    # Check if mandatory elements are available in the guess
    if result_dict['type'] == 'movie' and result_dict['title']:
        return result_dict
    elif result_dict['type'] == 'episode' and result_dict['title'] and result_dict['season'] and result_dict['episode']:
        return result_dict
    else:
        log.error("Could not guess all the mandatory elements")
        return {}


def _property_from_guess(guess, property_name, default_value=None):
    property_value = default_value
    if property_name in guess.keys():
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
