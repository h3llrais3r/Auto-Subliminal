import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appSettings } from '../../../app-settings.service';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class LogService extends ApiServiceTemplate {

  private readonly URL = `${appSettings.webRoot}/api/logs`;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getLogs(lognum?: number): Observable<string[]> {
    const url = lognum ? `${this.URL}/${lognum}` : this.URL;
    return this.httpClient.get<string[]>(url, this.options);
  }

  clearLogs(): Observable<boolean> {
    return this.httpClient.delete<void>(this.URL, this.options)
      .pipe(map(() => true));
  }

  getLogCount(): Observable<number> {
    return this.httpClient.get<Count>(`${this.URL}/count`, this.options)
      .pipe(map((count) => count.count));
  }
}

type Count = { count: number };
