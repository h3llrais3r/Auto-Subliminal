import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathInfo } from '../../../shared/models/pathinfo';
import { Scheduler } from '../../../shared/models/scheduler';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class SystemService extends ApiServiceTemplate {

  private readonly URL = '/api/system';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  isAlive(): Observable<boolean> {
    return this.httpClient.get<alive>(`${this.URL}/alive`)
      .pipe(map((result) => result.alive));
  }

  restart(): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.URL}/restart`, {})
      .pipe(map(() => true));
  }

  shutdown(): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.URL}/shutdown`, {})
      .pipe(map(() => true));
  }

  getPaths(): Observable<PathInfo[]> {
    return this.httpClient.get<PathInfo[]>(`${this.URL}/paths`)
      .pipe(map(result => result.map(obj => new PathInfo(obj))));
  }

  getSchedulers(): Observable<Scheduler[]> {
    return this.httpClient.get<Scheduler[]>(`${this.URL}/schedulers`)
      .pipe(map(result => result.map(obj => new Scheduler(obj))));
  }
}

type alive = { alive: boolean };
