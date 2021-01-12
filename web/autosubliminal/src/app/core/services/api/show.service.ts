import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowsOverview } from '../../../shared/models/show';
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
}
