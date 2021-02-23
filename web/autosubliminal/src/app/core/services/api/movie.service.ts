import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MovieSettings, MoviesOverview } from '../../../shared/models/movie';
import { VideoSubtitles } from '../../../shared/models/video';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends ApiServiceTemplate {

  private readonly URL = '/api/movies';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getMoviesOverview(): Observable<MoviesOverview> {
    return this.httpClient.get<MoviesOverview>(`${this.URL}/overview`, this.options)
      .pipe(map((movieOverview) => new MoviesOverview(movieOverview)));
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.URL, this.options)
      .pipe(map((movies) => movies.map((movie) => new Movie(movie))));
  }

  getMovieDetails(imdbId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.URL}/${imdbId}`, this.options)
      .pipe(map((movie) => new Movie(movie)));
  }

  refreshMovieDetails(imdbId: string): Observable<boolean> {
    return this.httpClient.put<void>(`${this.URL}/${imdbId}/refresh`, {}, this.options)
      .pipe(map(() => true));
  }

  getMovieSettings(imdbId: string): Observable<MovieSettings> {
    return this.httpClient.get<MovieSettings>(`${this.URL}/${imdbId}/settings`, this.options)
      .pipe(map((movieSettings) => new MovieSettings(movieSettings)));
  }

  saveMovieSettings(imdbId: string, movieSettings: MovieSettings): Observable<boolean> {
    return this.httpClient.put<MovieSettings>(`${this.URL}/${imdbId}/settings`, JSON.stringify(movieSettings), this.options)
      .pipe(map(() => true));
  }

  saveMovieHardcodedSubtitles(imdbId: string, videoSubtitles: VideoSubtitles): Observable<boolean> {
    return this.httpClient.put<VideoSubtitles>(`${this.URL}/${imdbId}/subtitles/hardcoded`, JSON.stringify(videoSubtitles), this.options)
      .pipe(map(() => true));
  }

  deleteMovie(imdbId: string): Observable<boolean> {
    return this.httpClient.delete<void>(`${this.URL}/${imdbId}`, this.options)
      .pipe(map(() => true));
  }
}
