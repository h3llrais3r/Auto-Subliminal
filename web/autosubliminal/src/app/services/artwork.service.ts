import { Injectable } from '@angular/core';
import { appSettings } from '../app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  getShowBannerThumbnailUrl(tvdbId: number): string {
    return `${appSettings.webRoot}/artwork/tvdb/banner/thumbnail/${tvdbId}`;
  }

  getShowBannerFullSizeUrl(tvdbId: number): string {
    return `${appSettings.webRoot}/artwork/tvdb/banner/fullsize/${tvdbId}`;
  }

  getShowPosterThumbnailUrl(tvdbId: number): string {
    return `${appSettings.webRoot}/artwork/tvdb/poster/thumbnail/${tvdbId}`;
  }

  getShowPosterFullSizeUrl(tvdbId: number): string {
    return `${appSettings.webRoot}/artwork/tvdb/poster/fullsize/${tvdbId}`;
  }

  getMoviePosterThumbnailUrl(imdbId: string): string {
    return `${appSettings.webRoot}/artwork/imdb/poster/thumbnail/${imdbId}`;
  }

  getMoviePosterFullSizeUrl(imdbId: string): string {
    return `${appSettings.webRoot}/artwork/imdb/poster/fullsize/${imdbId}`;
  }
}
