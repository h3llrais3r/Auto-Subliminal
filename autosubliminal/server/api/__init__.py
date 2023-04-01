# coding=utf-8

from typing import Any, Dict

from autosubliminal.server.api.filesystem import FileSystemApi
from autosubliminal.server.api.items import ItemsApi
from autosubliminal.server.api.logs import LogsApi
from autosubliminal.server.api.movies import MoviesApi
from autosubliminal.server.api.settings import SettingsApi
from autosubliminal.server.api.shows import ShowsApi
from autosubliminal.server.api.subtitles import SubtitlesApi
from autosubliminal.server.api.system import SystemApi
from autosubliminal.server.rest import RestResource


class Api(RestResource):
    """
    The Auto-Subliminal REST api.
    Rest resource for handling the /api path.
    """

    def __init__(self) -> None:
        super().__init__()

        # Set the allowed methods
        self.allowed_methods = ['GET']

        # Add all sub paths here: /api/...
        self.filesystem = FileSystemApi()
        self.items = ItemsApi()
        self.logs = LogsApi()
        self.movies = MoviesApi()
        self.settings = SettingsApi()
        self.shows = ShowsApi()
        self.subtitles = SubtitlesApi()
        self.system = SystemApi()

    def get(self, *args: Any, **kwargs: Any) -> Dict[str, Any]:
        return {'api': 'Welcome to the Auto-Subliminal REST api'}
