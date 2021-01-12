import { Injectable } from '@angular/core';
import { appSettings } from '../../app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  getShowBannerThumbnailUrl(tvdbId: number): string {
    return `${appSettings.webRoot}/artwork/tvdb/banner/thumbnail/${tvdbId}`;
  }

  getShowPosterThumbnailUrl(tvdbId: number): string {
    return `${appSettings.webRoot}/artwork/tvdb/poster/thumbnail/${tvdbId}`;
  }

  getMoviePosterThumbnailUrl(imdbId: string): string {
    return `${appSettings.webRoot}/artwork/imdb/poster/thumbnail/${imdbId}`;
  }
}
