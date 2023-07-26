import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appSettings } from '../../../app-settings.service';
import { Show, ShowSettings, ShowsOverview } from '../../../shared/models/show';
import { VideoSubtitles } from '../../../shared/models/video';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class ShowService extends ApiServiceTemplate {

  private readonly URL = `${appSettings.webRoot}/api/shows`;

  getShowsOverview(): Observable<ShowsOverview> {
    return this.httpClient.get<ShowsOverview>(`${this.URL}/overview`, this.options)
      .pipe(map((showsOverview) => new ShowsOverview(showsOverview)));
  }

  getShows(): Observable<Show[]> {
    return this.httpClient.get<Show[]>(this.URL, this.options)
      .pipe(map((shows) => shows.map((show) => new Show(show))));
  }

  getShowDetails(tvdbId: number): Observable<Show> {
    return this.httpClient.get<Show>(`${this.URL}/${tvdbId}`, this.options)
      .pipe(map((show) => new Show(show)));
  }

  refreshShowDetails(tvdbId: number): Observable<boolean> {
    return this.httpClient.put<void>(`${this.URL}/${tvdbId}/refresh`, {}, this.options)
      .pipe(map(() => true));
  }

  getShowSettings(tvdbId: number): Observable<ShowSettings> {
    return this.httpClient.get<ShowSettings>(`${this.URL}/${tvdbId}/settings`, this.options)
      .pipe(map((showSettings) => new ShowSettings(showSettings)));
  }

  saveShowSettings(tvdbId: number, showSettings: ShowSettings): Observable<boolean> {
    return this.httpClient.put<ShowSettings>(`${this.URL}/${tvdbId}/settings`, JSON.stringify(showSettings), this.options)
      .pipe(map(() => true));
  }

  saveShowEpisodeHardcodedSubtitles(tvdbId: number, episodeTvdbId: number, videoSubtitles: VideoSubtitles): Observable<boolean> {
    return this.httpClient.put<VideoSubtitles>(`${this.URL}/${tvdbId}/episodes/${episodeTvdbId}/subtitles/hardcoded`, JSON.stringify(videoSubtitles), this.options)
      .pipe(map(() => true));
  }

  deleteShow(tvdbId: number): Observable<boolean> {
    return this.httpClient.delete<void>(`${this.URL}/${tvdbId}`, this.options)
      .pipe(map(() => true));
  }

  deleteShowEpisodeSubtitle(tvdbId: number, episodeTvdbId: number, subtitlePath: string): Observable<boolean> {
    return this.httpClient.patch<void>(`${this.URL}/${tvdbId}/episodes/${episodeTvdbId}/subtitles`, { action: 'delete', subtitlePath }, this.options)
      .pipe(map(() => true));
  }
}
