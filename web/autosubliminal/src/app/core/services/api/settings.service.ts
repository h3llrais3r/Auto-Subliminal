import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralSettings, LogSettings, NameMappingSettings, PostProcessSettings, SkipMappingSettings, SubliminalSettings, WebServerSettings } from '../../../shared/models/settings';
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

  // WebServer settings

  getWebServerSettings(): Observable<WebServerSettings> {
    return this.httpClient.get(`${this.URL}/webserver`, this.options)
      .pipe(map(result => new WebServerSettings(result)));
  }

  updateWebServerSettings(webServerSettings: WebServerSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/webserver`, JSON.stringify(webServerSettings), this.options)
      .pipe(map(() => true));
  }

  // Subliminal settings

  getSubliminalSettings(): Observable<SubliminalSettings> {
    return this.httpClient.get(`${this.URL}/subliminal`, this.options)
      .pipe(map(result => new SubliminalSettings(result)));
  }

  updateSubliminalSettings(subliminalSettings: SubliminalSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/subliminal`, JSON.stringify(subliminalSettings), this.options)
      .pipe(map(() => true));
  }

  // NameMapping settings

  getNameMappingSettings(): Observable<NameMappingSettings> {
    return this.httpClient.get(`${this.URL}/namemapping`, this.options)
      .pipe(map(result => new NameMappingSettings(result)));
  }

  updateNameMappingSettings(nameMappingSettings: NameMappingSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/namemapping`, JSON.stringify(nameMappingSettings), this.options)
      .pipe(map(() => true));
  }

  // SkipMapping settings

  getSkipMappingSettings(): Observable<SkipMappingSettings> {
    return this.httpClient.get(`${this.URL}/skipmapping`, this.options)
      .pipe(map(result => new SkipMappingSettings(result)));
  }

  updateSkipMappingSettings(skipMappingSettings: SkipMappingSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/skipmapping`, JSON.stringify(skipMappingSettings), this.options)
      .pipe(map(() => true));
  }

  // PostProcess settings

  getPostProcessSettings(): Observable<PostProcessSettings> {
    return this.httpClient.get(`${this.URL}/postprocessing`, this.options)
      .pipe(map(result => new PostProcessSettings(result)));
  }

  updatePostProcessSettings(postProcessSettings: PostProcessSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/postprocessing`, JSON.stringify(postProcessSettings), this.options)
      .pipe(map(() => true));
  }
}
