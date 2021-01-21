import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralSettings, LibrarySettings, LogSettings, NameMappingSettings, NotificationSettings, PostProcessSettings, SkipMappingSettings, SubliminalSettings, TwitterAuthorization, TwitterRegistration, WebServerSettings } from '../../../shared/models/settings';
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
      .pipe(map((settings) => new GeneralSettings(settings)));
  }

  updateGeneralSettings(generalSettings: GeneralSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/general`, JSON.stringify(generalSettings), this.options)
      .pipe(map(() => true));
  }

  updateGeneralSetting(settingName: string, value: any): Observable<boolean> {
    return this.httpClient.patch(`${this.URL}/general/${settingName}`, JSON.stringify(value), this.options)
      .pipe(map(() => true));
  }

  // Library settings

  getLibrarySettings(): Observable<LibrarySettings> {
    return this.httpClient.get(`${this.URL}/library`, this.options)
      .pipe(map((settings) => new LibrarySettings(settings)));
  }

  updateLibrarySettings(librarySettings: LibrarySettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/library`, JSON.stringify(librarySettings), this.options)
      .pipe(map(() => true));
  }

  // Log settings

  getLogSettings(): Observable<LogSettings> {
    return this.httpClient.get(`${this.URL}/logging`, this.options)
      .pipe(map((settings) => new LogSettings(settings)));
  }

  updateLogSettings(logSettings: LogSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/logging`, JSON.stringify(logSettings), this.options)
      .pipe(map(() => true));
  }

  // WebServer settings

  getWebServerSettings(): Observable<WebServerSettings> {
    return this.httpClient.get(`${this.URL}/webserver`, this.options)
      .pipe(map((settings) => new WebServerSettings(settings)));
  }

  updateWebServerSettings(webServerSettings: WebServerSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/webserver`, JSON.stringify(webServerSettings), this.options)
      .pipe(map(() => true));
  }

  // Subliminal settings

  getSubliminalSettings(): Observable<SubliminalSettings> {
    return this.httpClient.get(`${this.URL}/subliminal`, this.options)
      .pipe(map((settings) => new SubliminalSettings(settings)));
  }

  updateSubliminalSettings(subliminalSettings: SubliminalSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/subliminal`, JSON.stringify(subliminalSettings), this.options)
      .pipe(map(() => true));
  }

  // NameMapping settings

  getNameMappingSettings(): Observable<NameMappingSettings> {
    return this.httpClient.get(`${this.URL}/namemapping`, this.options)
      .pipe(map((settings) => new NameMappingSettings(settings)));
  }

  updateNameMappingSettings(nameMappingSettings: NameMappingSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/namemapping`, JSON.stringify(nameMappingSettings), this.options)
      .pipe(map(() => true));
  }

  // SkipMapping settings

  getSkipMappingSettings(): Observable<SkipMappingSettings> {
    return this.httpClient.get(`${this.URL}/skipmapping`, this.options)
      .pipe(map((settings) => new SkipMappingSettings(settings)));
  }

  updateSkipMappingSettings(skipMappingSettings: SkipMappingSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/skipmapping`, JSON.stringify(skipMappingSettings), this.options)
      .pipe(map(() => true));
  }

  // Notification settings

  getNotificationSettings(): Observable<NotificationSettings> {
    return this.httpClient.get(`${this.URL}/notification`, this.options)
      .pipe(map((settings) => new NotificationSettings(settings)));
  }

  updateNotificationSettings(notificationSettings: NotificationSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/notification`, JSON.stringify(notificationSettings), this.options)
      .pipe(map(() => true));
  }

  testNotifier(notifierName: string): Observable<boolean> {
    return this.httpClient.patch(`${this.URL}/notification/${notifierName}`, {}, this.options)
      .pipe(map(() => true));
  }

  registerTwitter(): Observable<TwitterRegistration> {
    return this.httpClient.post(`${this.URL}/notification/twitter`, {}, this.options)
      .pipe(map((twitterRegistration) => new TwitterRegistration(twitterRegistration)));
  }

  authorizeTwitter(twitterRegistration: TwitterRegistration): Observable<TwitterAuthorization> {
    return this.httpClient.post(`${this.URL}/notification/twitter`, twitterRegistration, this.options)
      .pipe(map((twitterAuthorization) => new TwitterAuthorization(twitterAuthorization)));
  }

  // PostProcess settings

  getPostProcessSettings(): Observable<PostProcessSettings> {
    return this.httpClient.get(`${this.URL}/postprocessing`, this.options)
      .pipe(map((settings) => new PostProcessSettings(settings)));
  }

  updatePostProcessSettings(postProcessSettings: PostProcessSettings): Observable<boolean> {
    return this.httpClient.put(`${this.URL}/postprocessing`, JSON.stringify(postProcessSettings), this.options)
      .pipe(map(() => true));
  }
}
