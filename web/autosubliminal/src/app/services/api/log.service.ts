import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { appSettings } from '../../app-settings.service';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class LogService extends ApiServiceTemplate {

  private readonly URL = `${appSettings.webRoot}/api/logs`;

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
