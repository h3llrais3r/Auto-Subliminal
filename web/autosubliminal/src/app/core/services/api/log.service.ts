import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class LogService extends ApiServiceTemplate {

  private readonly URL = '/api/logs';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getLogs(lognum?: number): Observable<string[]> {
    const url = lognum ? `${this.URL}/${lognum}` : this.URL;
    return this.httpClient.get<string>(url)
      .pipe(map(result => result.split('\\r\\n')));
  }

  clearLogs(): Observable<boolean> {
    return this.httpClient.delete<void>(this.URL)
      .pipe(map(() => true));
  }

  getLogCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.URL}/count`);
  }
}
