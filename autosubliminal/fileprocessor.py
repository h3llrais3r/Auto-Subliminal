import os
import logging

import guessit


log = logging.getLogger(__name__)


def process_file(dirname, filename):
    log.info("Processing file: %s" % filename)
    filepath = os.path.join(dirname, filename)
    # Guess file info
    log.debug("Guessing file info")
    guess = guessit.guess_file_info(filepath)
    log.debug("Guess: %r" % guess)
    # Create show dict
    show_dict = _show_dict_from_guess(guess)
    # Check if mandatory elements could be guessed
    if show_dict['title'] and show_dict['season'] and show_dict['episode']:
        return show_dict
    else:
        log.error("Could not guess file info for %s" % filepath)
        return {}


def _show_dict_from_guess(guess):
    log.debug("Getting show dict from guess")
    show_dict = {'title': _property_from_guess(guess, 'series'),
                 'season': _property_from_guess(guess, 'season'),
                 'episode': _property_from_guess(guess, 'episodeNumber'),
                 'source': _property_from_guess(guess, 'format'),
                 'quality': _property_from_guess(guess, 'screenSize', u'SD'),  # No screenSize found means SD
                 'codec': _property_from_guess(guess, 'videoCodec'),
                 'releasegrp': _property_from_guess(guess, 'releaseGroup')}
    log.debug("Dumping show dict for debug %r" % show_dict)
    return show_dict


def _property_from_guess(guess, propertyname, defaultvalue=None):
    propertyvalue = defaultvalue
    if propertyname in guess.keys():
        propertyvalue = guess[propertyname]
    return propertyvalue