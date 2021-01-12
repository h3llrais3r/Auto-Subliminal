import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MoviesOverview } from '../../../shared/models/movie';
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
    return this.httpClient.get<MoviesOverview>(`${this.URL}/overview`, this.options);
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.URL, this.options)
      .pipe(map(result => result.map(obj => new Movie(obj))));
  }
}
