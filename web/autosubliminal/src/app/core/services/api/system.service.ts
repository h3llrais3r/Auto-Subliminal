import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appSettings } from '../../../app-settings.service';
import { PathInfo } from '../../../shared/models/pathinfo';
import { Scheduler } from '../../../shared/models/scheduler';
import { SystemInfo } from '../../../shared/models/systeminfo';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class SystemService extends ApiServiceTemplate {

  private readonly URL = `${appSettings.webRoot}/api/system`;

  isAlive(): Observable<boolean> {
    return this.httpClient.get<Alive>(`${this.URL}/alive`, this.options)
      .pipe(map((alive) => alive.alive));
  }

  getSystemInfo(): Observable<SystemInfo> {
    return this.httpClient.get<SystemInfo>(`${this.URL}/info`, this.options)
      .pipe(map((systemInfo) => new SystemInfo(systemInfo)));
  }

  getPaths(): Observable<PathInfo[]> {
    return this.httpClient.get<PathInfo[]>(`${this.URL}/paths`, this.options)
      .pipe(map((pathInfos) => pathInfos.map((pathInfo) => new PathInfo(pathInfo))));
  }

  getSchedulers(): Observable<Scheduler[]> {
    return this.httpClient.get<Scheduler[]>(`${this.URL}/schedulers`, this.options)
      .pipe(map((schedulers) => schedulers.map((scheduler) => new Scheduler(scheduler))));
  }

  getScheduler(schedulerName: string): Observable<Scheduler> {
    return this.httpClient.get<Scheduler>(`${this.URL}/schedulers/${schedulerName}`, this.options)
      .pipe(map((scheduler) => new Scheduler(scheduler)));
  }
}

type Alive = { alive: boolean };
