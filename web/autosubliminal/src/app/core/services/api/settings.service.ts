import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralSettings, LogSettings, PostProcessSettings, WebServerSettings } from '../../../shared/models/settings';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends ApiServiceTemplate {

  private readonly URL = '/api/settings';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  // General settings

  getGeneralSettings(): Observable<GeneralSettings> {
    return this.httpClient.get(`${this.URL}/general`, this.options)
      .pipe(map(result => new GeneralSettings(result)));
  }

  updateGeneralSettings(generalSettings: GeneralSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/general`, JSON.stringify(generalSettings), this.options)
      .pipe(map(() => true));
  }

  // Log settings

  getLogSettings(): Observable<LogSettings> {
    return this.httpClient.get(`${this.URL}/logging`, this.options)
      .pipe(map(result => new LogSettings(result)));
  }

  updateLogSettings(logSettings: LogSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/logging`, JSON.stringify(logSettings), this.options)
      .pipe(map(() => true));
  }

  // Webserver settings

  getWebServerSettings(): Observable<WebServerSettings> {
    return this.httpClient.get(`${this.URL}/webserver`, this.options)
      .pipe(map(result => new WebServerSettings(result)));
  }

  updateWebServerSettings(webServerSettings: WebServerSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/webserver`, JSON.stringify(webServerSettings), this.options)
      .pipe(map(() => true));
  }

  // Postprocess settings

  getPostProcessSettings(): Observable<PostProcessSettings> {
    return this.httpClient.get(`${this.URL}/postprocessing`, this.options)
      .pipe(map(result => new PostProcessSettings(result)));
  }

  updatePostProcessSettings(postProcessSettings: PostProcessSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/postprocessing`, JSON.stringify(postProcessSettings), this.options)
      .pipe(map(() => true));
  }
}
