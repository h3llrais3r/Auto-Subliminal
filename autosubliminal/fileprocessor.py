# coding=utf-8

import logging
import os
import time
from typing import Any, Dict, Optional

from guessit import guessit

import autosubliminal
from autosubliminal.core.item import WantedItem
from autosubliminal.util.common import get_file_size, humanize_bytes

log = logging.getLogger(__name__)


def process_file(dirname: str, filename: str) -> Optional[WantedItem]:
    """
    Process a file with guessit and construct the wanted item.
    """

    log.info('Processing file: %s', filename)
    file_path = os.path.join(dirname, filename)

    # Check minimal video file size if needed
    file_size = get_file_size(file_path)
    if autosubliminal.MINVIDEOFILESIZE:
        # MINVIDEOFILESIZE is size in MB
        if file_size < autosubliminal.MINVIDEOFILESIZE * 1024 * 1024:
            log.warning(
                'File size (%s) is lower than %sMB, skipping',
                humanize_bytes(file_size),
                autosubliminal.MINVIDEOFILESIZE,
            )
            return None

    # Guess and create wanted item from guess
    wanted_item = WantedItem.from_guess(_guess(filename))
    if wanted_item is None:
        # Fallback to guess on full path
        wanted_item = WantedItem.from_guess(_guess(file_path))
    log.debug('WantedItem from guess: %r', wanted_item)

    # Enrich wanted item
    if wanted_item is not None:
        _enrich_wanted_item(wanted_item, file_path, file_size)

    return wanted_item


def _guess(file_path: str) -> Optional[Dict[str, Any]]:
    try:
        log.debug('Guessing file info')
        guess = guessit(file_path)
        log.debug('Guess result: %r', guess)
        return _validate_guess(guess)
    except Exception:
        log.exception('Could not guess file info for: %s', file_path)
        return None


def _validate_guess(guess: Dict[str, Any]) -> Optional[Dict[str, Any]]:
    log.debug('Validating guess')

    # Validate episode guess
    if _property_from_guess(guess, 'type') == 'episode':
        log.debug('Video guessed as episode')
        if (
            _property_from_guess(guess, 'title') is None
            or _property_from_guess(guess, 'season') is None
            or _property_from_guess(guess, 'episode') is None
        ):
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


def _property_from_guess(guess: Dict[str, Any], property_name: str, default_value: Any = None) -> Any:
    property_value = default_value
    if property_name in guess:
        property_value = guess[property_name]
    return property_value


def _enrich_wanted_item(wanted_item: WantedItem, file_path: str, file_size: int) -> None:
    """
    Enrich a wanted item.

    :param wanted_item: the wanted item
    :type wanted_item: WantedItem
    :param file_path: the file path
    :type file_path: str
    """
    log.debug('Enriching WantedItem with metadata')

    # Enrich with common data
    wanted_item.video_path = file_path
    wanted_item.video_size = file_size
    wanted_item.timestamp = str(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(os.path.getctime(file_path))))

    # Enrich with episode data
    if wanted_item.is_episode:
        wanted_item.tvdb_id = autosubliminal.SHOWINDEXER.get_tvdb_id(wanted_item.title, wanted_item.year)

    # Enrich with movie data
    elif wanted_item.is_movie:
        wanted_item.imdb_id, wanted_item.year = autosubliminal.MOVIEINDEXER.get_imdb_id_and_year(
            wanted_item.title, wanted_item.year
        )

    log.debug('Enriched WantedItem: %r', wanted_item)
