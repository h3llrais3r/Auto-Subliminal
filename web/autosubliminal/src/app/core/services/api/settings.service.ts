import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralSettings, LogSettings } from '../../../shared/models/settings';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends ApiServiceTemplate {

  private readonly URL = '/api/settings';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getGeneralSettings(): Observable<GeneralSettings> {
    return this.httpClient.get<string>(`${this.URL}/general`, this.options)
      .pipe(map(result => new GeneralSettings(result)));
  }

  updateGeneralSettings(generalSettings: GeneralSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/general`, JSON.stringify(generalSettings), this.options)
      .pipe(map(() => true));
  }

  getLogSettings(): Observable<LogSettings> {
    return this.httpClient.get<string>(`${this.URL}/logging`, this.options)
      .pipe(map(result => new LogSettings(result)));
  }

  updateLogSettings(logSettings: LogSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/logging`, JSON.stringify(logSettings), this.options)
      .pipe(map(() => true));
  }
}
