import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Scheduler } from 'src/app/shared/models/scheduler';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService extends ApiServiceTemplate {

  private readonly URL = '/api/schedulers';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getSchedulers(): Observable<Scheduler[]> {
    return this.httpClient.get<Scheduler[]>(this.URL)
      .pipe(map(result => result.map(obj => new Scheduler(obj))));
  }
}
