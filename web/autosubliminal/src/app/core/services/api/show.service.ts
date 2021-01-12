import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show, ShowsOverview } from '../../../shared/models/show';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class ShowService extends ApiServiceTemplate {

  private readonly URL = '/api/shows';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getShowsOverview(): Observable<ShowsOverview> {
    return this.httpClient.get<ShowsOverview>(`${this.URL}/overview`, this.options);
  }

  getShows(): Observable<Show[]> {
    return this.httpClient.get<Show[]>(this.URL, this.options)
      .pipe(map(result => result.map(obj => new Show(obj))));
  }
}
