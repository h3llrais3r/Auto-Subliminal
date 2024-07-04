# coding=utf-8

import logging
import os
from typing import Any, Dict, List, Union

import cherrypy

import autosubliminal
from autosubliminal.core.movie import MovieDetails, MovieSettings
from autosubliminal.core.subtitle import Subtitle, get_missing_subtitle_languages
from autosubliminal.db import FailedMoviesDb, MovieDetailsDb, MovieSettingsDb, MovieSubtitlesDb, WantedItemsDb
from autosubliminal.libraryscanner import LibraryPathScanner
from autosubliminal.server.rest import NotFound, RestResource
from autosubliminal.util.common import camelize, decamelize, find_path_in_paths, get_boolean, to_dict
from autosubliminal.util.filesystem import save_hardcoded_subtitle_languages

log = logging.getLogger(__name__)


@cherrypy.popargs('imdb_id')
class MoviesApi(RestResource):
    """
    Rest resource for handling the /api/movies path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/movies/...
        self.overview = _OverviewApi()
        self.refresh = _RefreshApi()
        self.settings = _SettingsApi()
        self.subtitles = _SubtitlesApi()

        # Set the allowed methods
        self.allowed_methods = ['GET', 'DELETE']

    def get(self, imdb_id: str = None) -> Union[List[Dict[str, Any]], Dict[str, Any]]:
        """Get the list of movies or the details of a single movie."""
        if imdb_id:
            db_movie = MovieDetailsDb().get_movie(imdb_id, subtitles=True)
            db_movie_settings = MovieSettingsDb().get_movie_settings(imdb_id)

            # Return NotFound if movie does not longer exists on disk
            if not os.path.exists(db_movie.path):
                raise NotFound()

            # Return movie details
            return self._to_movie_dict(db_movie, db_movie_settings, details=True)

        else:
            movies: List[Dict[str, Any]] = []
            movie_settings_db = MovieSettingsDb()
            db_movies = MovieDetailsDb().get_all_movies()
            for db_movie in db_movies:
                db_movie_settings = movie_settings_db.get_movie_settings(db_movie.imdb_id)
                movies.append(self._to_movie_dict(db_movie, db_movie_settings))

            return movies

    def delete(self, imdb_id: str) -> None:
        # Delete from database
        MovieDetailsDb().delete_movie(imdb_id, subtitles=True)
        MovieSettingsDb().delete_movie_settings(imdb_id)

        self._set_no_content_status()
        return None

    def _to_movie_dict(
        self, movie: MovieDetails, movie_settings: MovieSettings, details: bool = False
    ) -> Dict[str, Any]:
        # Check if the movie path is listed in the video paths to scan
        path_in_video_paths = (
            True if find_path_in_paths(movie.path, autosubliminal.VIDEOPATHS, check_common_path=True) else False
        )

        # Calculate totals
        wanted_languages = movie_settings.wanted_languages
        total_subtitles_wanted = len(wanted_languages)
        total_subtitles_missing = len(movie.missing_languages)
        total_subtitles_available = len(wanted_languages) - len(movie.missing_languages)

        # Set kwargs to include in json
        include_kwargs = {
            'settings': movie_settings.to_dict(camelize),
            'path_in_video_paths': path_in_video_paths,
            'total_subtitles_wanted': total_subtitles_wanted,
            'total_subtitles_available': total_subtitles_available,
            'total_subtitles_missing': total_subtitles_missing,
        }

        # Add details if needed
        if details:
            include_kwargs['files'] = self._get_movie_files(movie)

        return movie.to_dict(camelize, **include_kwargs)

    def _get_movie_files(self, movie: MovieDetails) -> List[Dict[str, Any]]:
        # Movie files are supposed to be stored in the same dir
        files: Dict[str, Any] = {}

        embedded_languages: List[str] = []
        hardcoded_languages: List[str] = []
        # Get subtitle files
        for subtitle in movie.subtitles:
            if subtitle.type == 'embedded':
                embedded_languages.append(subtitle.language)
            elif subtitle.type == 'hardcoded':
                hardcoded_languages.append(subtitle.language)
            else:
                subtitle_filepath, subtitle_filename = os.path.split(subtitle.path)
                files.update(
                    {
                        subtitle_filename: {
                            'file_path': subtitle_filepath,
                            'file_name': subtitle_filename,
                            'type': 'subtitle',
                            'language': subtitle.language,
                        }
                    }
                )
        # Get video file
        movie_filepath, movie_filename = os.path.split(movie.path)
        files.update(
            {
                movie_filename: {
                    'file_path': movie_filepath,
                    'file_name': movie_filename,
                    'type': 'video',
                    'embedded_languages': embedded_languages,
                    'hardcoded_languages': hardcoded_languages,
                }
            }
        )

        # Return sorted list
        return sorted([v for v in files.values()], key=lambda k: str(k['file_name']))


class _OverviewApi(RestResource):
    """
    Rest resource for handling the /api/movies/overview path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

    def get(self) -> Dict[str, Any]:
        movies = MovieDetailsDb().get_all_movies()
        total_movies = len(movies)

        failed_movies = FailedMoviesDb().get_failed_movies()

        total_subtitles_wanted = 0
        total_subtitles_available = 0
        total_subtitles_missing = 0
        movie_settings_db = MovieSettingsDb()
        for movie in movies:
            movie_settings = movie_settings_db.get_movie_settings(movie.imdb_id)
            wanted_languages = movie_settings.wanted_languages
            total_subtitles_wanted += len(wanted_languages)
            total_subtitles_missing += len(movie.missing_languages)
            total_subtitles_available += len(wanted_languages) - len(movie.missing_languages)

        overview = {
            'total_movies': total_movies,
            'total_subtitles_wanted': total_subtitles_wanted,
            'total_subtitles_missing': total_subtitles_missing,
            'total_subtitles_available': total_subtitles_available,
            'failed_movies': failed_movies,
        }

        return to_dict(overview, camelize)


class _RefreshApi(RestResource):
    """
    Rest resource for handling the /api/movies/{imdb_id}/refresh path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['PUT']

    def put(self, imdb_id: str) -> None:
        """Refresh/rescan a movie."""
        movie = MovieDetailsDb().get_movie(imdb_id)
        movie_path, _ = os.path.split(movie.path)

        # Refresh/rescan the movie path
        LibraryPathScanner().scan_path(movie_path)

        self._set_no_content_status()
        return None


class _SettingsApi(RestResource):
    """
    Rest resource for handling the /api/movies/{imdb_id}/settings path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET', 'PUT']

    def get(self, imdb_id: str) -> Dict[str, Any]:
        """Get the settings for a movie"""
        movie_settings_db = MovieSettingsDb()
        movie_settings = movie_settings_db.get_movie_settings(imdb_id)

        # If no settings are defined yet, use the default settings
        if not movie_settings:
            movie_settings = MovieSettings.default_settings(imdb_id)
            movie_settings_db.set_movie_settings(movie_settings)

        return movie_settings.to_dict(camelize)

    def put(self, imdb_id: str) -> None:
        """Save the settings for a movie."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if all(k in input_dict for k in ('wanted_languages', 'refine', 'hearing_impaired', 'utf8_encoding')):
            wanted_languages = input_dict['wanted_languages']
            refine = get_boolean(input_dict['refine'])
            hearing_impaired = get_boolean(input_dict['hearing_impaired'])
            utf8_encoding = get_boolean(input_dict['utf8_encoding'])

            # Update settings
            db = MovieSettingsDb()
            movie_settings = db.get_movie_settings(imdb_id)
            movie_settings.wanted_languages = wanted_languages
            movie_settings.refine = refine
            movie_settings.hearing_impaired = hearing_impaired
            movie_settings.utf8_encoding = utf8_encoding
            db.update_movie_settings(movie_settings)

            # Delete wanted items for the movie so the new settings will be used in the next disk scan
            WantedItemsDb().delete_wanted_items_for_movie(imdb_id)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Missing data')


class _SubtitlesApi(RestResource):
    """
    Rest resource for handling the /api/movies/{imdb_id}/subtitles path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Add all sub paths here: /api/movies/{imdb_id}/subtitles/...
        self.hardcoded = _HardcodedApi()

        # Set the allowed methods
        self.allowed_methods = ['PATCH']

    def patch(self, imdb_id: str) -> None:
        """Patch actions related to movie subtitles."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if 'action' in input_dict:
            action = input_dict['action']

            # Delete a subtitle
            if action == 'delete' and 'subtitle_path' in input_dict:
                try:
                    # Delete file
                    subtitle_path = input_dict['subtitle_path']
                    os.remove(subtitle_path)
                except Exception:
                    self._raise_conflict('Unable to delete the subtitle')

                # Remove from subtitles
                MovieSubtitlesDb().delete_movie_subtitle(imdb_id, subtitle_path)

                # Update missing languages
                movie_details_db = MovieDetailsDb()
                db_movie = movie_details_db.get_movie(imdb_id, subtitles=True)
                db_movie_settings = MovieSettingsDb().get_movie_settings(imdb_id)
                db_movie.missing_languages = get_missing_subtitle_languages(
                    db_movie.subtitles, db_movie_settings.wanted_languages
                )
                movie_details_db.update_movie(db_movie)

                self._set_no_content_status()
                return None

            self._raise_bad_request("Invalid action '%s'" % action)

        self._raise_bad_request('Missing data')


class _HardcodedApi(RestResource):
    """
    Rest resource for handling the /api/movies/{imdb_id}/subtitles/hardcoded path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['PUT']

    def put(self, imdb_id: str) -> None:
        """Save the list of hardcoded subtitles for a movie file."""
        input_dict = to_dict(cherrypy.request.json, decamelize)

        if all(k in input_dict for k in ('file_location', 'file_name', 'languages')):
            # Save to file
            file_location = input_dict['file_location']
            file_name = input_dict['file_name']
            languages = input_dict['languages']
            save_hardcoded_subtitle_languages(file_location, file_name, languages)

            # Update subtitles
            subtitles = []
            for language in languages:
                subtitles.append(Subtitle('hardcoded', language, path=os.path.join(file_location, file_name)))
            subtitles_db = MovieSubtitlesDb()
            subtitles_db.delete_movie_subtitles(imdb_id, type='hardcoded')
            subtitles_db.set_movie_subtitles(imdb_id, subtitles)

            # Update missing languages
            movie_details_db = MovieDetailsDb()
            db_movie = movie_details_db.get_movie(imdb_id, subtitles=True)
            db_movie_settings = MovieSettingsDb().get_movie_settings(imdb_id)
            db_movie.missing_languages = get_missing_subtitle_languages(
                db_movie.subtitles, db_movie_settings.wanted_languages
            )
            movie_details_db.update_movie(db_movie)

            self._set_no_content_status()
            return None

        self._raise_bad_request('Missing data')
