import os
import logging

import guessit

log = logging.getLogger(__name__)


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

    # Guess
    log.info("Processing file: %s" % filename)
    filepath = os.path.join(dirname, filename)
    try:
        log.debug("Guessing file info")
        # Pass only filename for now
        # TODO: Revert to 'filepath' when guessit 0.11 is available
        guess = guessit.guess_file_info(filename)
        log.debug("Guess: %r" % guess)
    except Exception, e:
        log.error("Could not guess file info for: %s" % filepath)
        log.error(e)
        return {}

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
                   'source': _property_from_guess(guess, 'format'),
                   'quality': _property_from_guess(guess, 'screenSize', u'SD'),
                   'codec': _property_from_guess(guess, 'videoCodec'),
                   'releasegrp': _property_from_guess(guess, 'releaseGroup')}
    log.debug("Dict from guess: %r" % result_dict)

    # Check if mandatory elements are available in the guess
    if result_dict['type'] == 'movie' and result_dict['title']:
        return result_dict
    elif result_dict['type'] == 'episode' and result_dict['title'] and result_dict['season'] and result_dict['episode']:
        return result_dict
    else:
        log.error("Could not guess all the mandatory elements")
        return {}


def _property_from_guess(guess, propertyname, defaultvalue=None):
    propertyvalue = defaultvalue
    if propertyname in guess.keys():
        propertyvalue = guess[propertyname]
    return propertyvalue
