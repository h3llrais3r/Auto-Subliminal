import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this.httpClient.get<Alive>(`${this.URL}/alive`)
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
}


interface Alive {
  alive: boolean;
}
