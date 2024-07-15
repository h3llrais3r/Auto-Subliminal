# -*- coding: utf-8 -*-
import datetime
import logging
import re

from babelfish import Language, language_converters
from dogpile.cache.api import NO_VALUE
from guessit import guessit
from requests import JSONDecodeError, Response, Session
from subliminal import Provider
from subliminal.cache import region
from subliminal.exceptions import (
    AuthenticationError,
    ConfigurationError,
    DownloadLimitExceeded,
    ProviderError,
    ServiceUnavailable,
)
from subliminal.matches import guess_matches
from subliminal.subtitle import Subtitle, fix_line_ending
from subliminal.utils import sanitize
from subliminal.video import Episode, Movie

import autosubliminal

logger = logging.getLogger(__name__)

TOKEN_EXPIRATION_TIME = datetime.timedelta(hours=12).total_seconds()


class OpenSubtitlesComSubtitle(Subtitle):
    """OpenSubtitles.com Subtitle."""

    provider_name = 'opensubtitles_com'
    series_re = re.compile(r'^(?P<series_name>.*) - (?P<series_slug>.*)$')
    encoding = 'utf-8'

    def __init__(
        self,
        language,
        hearing_impaired,
        page_link,
        subtitle_id,
        feature_type,
        hash,
        hash_matched,
        title,
        movie_name,
        release,
        year,
        imdb_id,
        series_season,
        series_episode,
        file_name,
        file_id,
    ):
        super(OpenSubtitlesComSubtitle, self).__init__(
            language, hearing_impaired=hearing_impaired, page_link=page_link, encoding=self.encoding
        )
        self.subtitle_id = subtitle_id
        self.feature_type = feature_type
        self.hash = hash
        self.hash_matched = hash_matched
        self.title = title
        self.movie_name = movie_name
        self.release = release
        self.year = year
        self.imdb_id = imdb_id
        self.series_season = series_season
        self.series_episode = series_episode
        self.file_name = file_name
        self.file_id = file_id

        self.download_link = None

    @property
    def id(self):
        return str(self.subtitle_id)

    @property
    def series_name(self):
        return self.series_re.match(self.movie_name).group('series_name')

    def get_matches(self, video):
        matches = set()

        # episode
        if isinstance(video, Episode) and self.feature_type == 'episode':
            # series
            if video.series and sanitize(self.series_name) == sanitize(video.series):
                matches.add('series')
            # year
            if video.original_series and self.year is None or video.year and video.year == self.year:
                matches.add('year')
            # season
            if video.season and self.series_season == video.season:
                matches.add('season')
            # episode
            if video.episode and self.series_episode == video.episode:
                matches.add('episode')
            # title
            if video.title and sanitize(self.title) == sanitize(video.title):
                matches.add('title')
            # guess
            matches |= guess_matches(video, guessit(self.release, {'type': 'episode'}))
            matches |= guess_matches(video, guessit(self.file_name, {'type': 'episode'}))
            # hash
            if self.hash_matched:
                matches.add('hash')
        # movie
        elif isinstance(video, Movie) and self.feature_type == 'movie':
            # title
            if video.title and sanitize(self.title) == sanitize(video.title):
                matches.add('title')
            # year
            if video.year and self.year == video.year:
                matches.add('year')
            # guess
            matches |= guess_matches(video, guessit(self.release, {'type': 'movie'}))
            matches |= guess_matches(video, guessit(self.file_name, {'type': 'movie'}))
            # hash
            if self.hash_matched:
                matches.add('hash')
        else:
            logger.info('%r is not a valid feature_type', self.feature_type)
            return matches

        # imdb_id
        if video.imdb_id and self.imdb_id == video.imdb_id:
            matches.add('imdb_id')

        return matches


class OpenSubtitlesComProvider(Provider):
    """OpenSubtitles.com Provider.

    :param str username: username.
    :param str password: password.
    :param str apikey: apikey.

    """

    server_url = 'https://api.opensubtitles.com/api/v1/'
    languages = {Language.fromopensubtitles(l) for l in language_converters['opensubtitles'].codes}
    subtitle_class = OpenSubtitlesComSubtitle

    def __init__(self, username=None, password=None, apikey=None):
        if any((username, password)) and not all((username, password)):
            raise ConfigurationError('Username and password must be specified')

        if not apikey:
            raise ConfigurationError('Apikey must be specified')

        self.session = Session()
        self.session.headers = {
            'Content-Type': 'application/json',
            'User-Agent': autosubliminal.USERAGENT,
            'Api-Key': apikey,
        }

        # None values not allowed for logging in, so replace it by ''
        self.username = username or ''
        self.password = password or ''
        self.token = None
        self.timeout = 30

    def initialize(self):
        logger.info('Logging in')
        if region.get('oscom_token', expiration_time=TOKEN_EXPIRATION_TIME) is NO_VALUE:
            logger.debug('No cached token, trying to login again')
            self.login()
        else:
            self.token = region.get('oscom_token', expiration_time=TOKEN_EXPIRATION_TIME)
            logger.debug('Reusing login token')

    def login(self):
        response = checked(
            self.session.post(
                self.server_url + 'login',
                json={'username': self.username, 'password': self.password},
                allow_redirects=False,
                timeout=30,
            )
        )
        try:
            self.token = response.json()['token']
        except (ValueError, JSONDecodeError):
            logger.error('Cannot get token from provider login response')
            raise ProviderError('Cannot get token from provider login response')
        else:
            region.set('oscom_token', self.token)

    def terminate(self):
        logger.info('Logging out')
        self.session.close()
        self.token = None
        logger.debug('Logged out')

    def sanitize_imdb_id(self, external_id):
        if isinstance(external_id, str):
            external_id = external_id.lower().lstrip('tt').lstrip('0')
        sanitized_id = external_id[:-1].lstrip('0') + external_id[-1]
        return int(sanitized_id)

    def format_imdb_id(self, external_id):
        if isinstance(external_id, int):
            external_id = 'tt' + str(external_id).zfill(8)
        return str(external_id)

    def query(self, languages, hash=None, imdb_id=None, series_imdb_id=None, query=None, season=None, episode=None):
        # fill the search criteria
        criteria = []
        criteria.append(('ai_translated', 'exclude'))  # exclude ai translated subtitles
        if languages:
            criteria.append(('languages', ','.join(sorted(l.alpha2 for l in languages))))
        if hash:
            criteria.append(('moviehash', hash))
            pass
        if imdb_id:
            criteria.append(('imdb_id', self.sanitize_imdb_id(imdb_id)))
        elif series_imdb_id and season and episode:
            criteria.append(('parent_imdb_id', self.sanitize_imdb_id(series_imdb_id)))
            criteria.append(('season_number', season))
            criteria.append(('episode_number', episode))
        elif query:
            criteria.append(('query', query.replace("'", '')))
            if season and episode:
                criteria.append(('season_number', season))
                criteria.append(('episode_number', episode))
        if not criteria:
            raise ValueError('Not enough information')

        # query the server
        logger.info('Searching subtitles %r', criteria)
        response = checked(self.session.get(self.server_url + 'subtitles', params=criteria, timeout=self.timeout))
        subtitles = []

        # exit if no data
        if not response.json()['data']:
            logger.debug('No subtitles found')
            return subtitles

        # loop over subtitle items
        for subtitle_item in response.json()['data']:
            # read the item
            language = Language.fromopensubtitles(subtitle_item['attributes']['language'])
            hearing_impaired = bool(subtitle_item['attributes']['hearing_impaired'])
            page_link = subtitle_item['attributes']['url']
            subtitle_id = int(subtitle_item['attributes']['subtitle_id'])
            feature_type = str(subtitle_item['attributes']['feature_details']['feature_type']).lower()
            hash = hash
            hash_matched = False
            if 'moviehash_match' in subtitle_item['attributes']:
                hash_matched = subtitle_item['attributes']['moviehash_match']
            title = subtitle_item['attributes']['feature_details']['title']
            movie_name = subtitle_item['attributes']['feature_details']['movie_name']
            release = subtitle_item['attributes']['release']
            year = (
                int(subtitle_item['attributes']['feature_details']['year'])
                if subtitle_item['attributes']['feature_details']['year']
                else None
            )
            imdb_id = self.format_imdb_id(subtitle_item['attributes']['feature_details']['imdb_id'])
            series_season = None
            if 'season_number' in subtitle_item['attributes']['feature_details']:
                series_season = subtitle_item['attributes']['feature_details']['season_number']
            series_episode = None
            if 'episode_number' in subtitle_item['attributes']['feature_details']:
                series_episode = subtitle_item['attributes']['feature_details']['episode_number']
            file_name = None
            file_id = None
            if len(subtitle_item['attributes']['files']):
                file_name = subtitle_item['attributes']['files'][0]['file_name']
                file_id = subtitle_item['attributes']['files'][0]['file_id']

            subtitle = self.subtitle_class(
                language,
                hearing_impaired,
                page_link,
                subtitle_id,
                feature_type,
                hash,
                hash_matched,
                title,
                movie_name,
                release,
                year,
                imdb_id,
                series_season,
                series_episode,
                file_name,
                file_id,
            )
            logger.debug('Found subtitle %r', subtitle)
            subtitles.append(subtitle)

        return subtitles

    def list_subtitles(self, video, languages):
        season = episode = None
        if isinstance(video, Episode):
            query = video.series
            season = video.season
            episode = video.episode
        else:
            query = video.title

        # Use the same hashing as for opensubtitles
        return self.query(
            languages,
            hash=video.hashes.get('opensubtitles'),
            imdb_id=video.imdb_id,
            series_imdb_id=video.series_imdb_id,
            query=query,
            season=season,
            episode=episode,
        )

    def download_subtitle(self, subtitle):
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + self.token,
        }
        response = checked(
            self.session.post(
                self.server_url + 'download',
                json={'file_id': subtitle.file_id, 'sub_format': 'srt'},
                headers=headers,
                timeout=self.timeout,
            )
        )

        download_data = response.json()
        subtitle.download_link = download_data['link']

        response = checked(self.session.get(subtitle.download_link, timeout=self.timeout))

        if not response:
            logger.debug(f'Could not download subtitle from {subtitle.download_link}')
            subtitle.content = None
            return
        else:
            subtitle_content = response.content
            subtitle.content = fix_line_ending(subtitle_content)


class OpenSubtitlesComError(ProviderError):
    """Base class for non-generic :class:`OpenSubtitlesComProvider` exceptions."""

    pass


class Unauthorized(OpenSubtitlesComError, AuthenticationError):
    """Exception raised when status is '401 Unauthorized'."""

    pass


class NoSession(OpenSubtitlesComError, AuthenticationError):
    """Exception raised when status is '406 No session'."""

    pass


class DownloadLimitReached(OpenSubtitlesComError, DownloadLimitExceeded):
    """Exception raised when status is '407 Download limit reached'."""

    pass


class InvalidImdbid(OpenSubtitlesComError):
    """Exception raised when status is '413 Invalid ImdbID'."""

    pass


class UnknownUserAgent(OpenSubtitlesComError, AuthenticationError):
    """Exception raised when status is '414 Unknown User Agent'."""

    pass


class DisabledUserAgent(OpenSubtitlesComError, AuthenticationError):
    """Exception raised when status is '415 Disabled user agent'."""

    pass


def checked(response: Response):
    """Check a response status before returning it.

    :param response: a requests.Response object.
    :return: the response.
    :raise: :class:`OpenSubtitlesComError`

    """
    status_code = response.status_code
    if status_code == 401:
        raise Unauthorized
    if status_code == 406:
        raise NoSession
    if status_code == 407:
        raise DownloadLimitReached
    if status_code == 413:
        raise InvalidImdbid
    if status_code == 414:
        raise UnknownUserAgent
    if status_code == 415:
        raise DisabledUserAgent
    if status_code == 503:
        raise ServiceUnavailable
    if status_code != 200:
        raise OpenSubtitlesComError(status_code)

    return response
