import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AntiCaptchaProvider } from './shared/models/captcha';
import { Language } from './shared/models/language';
import { EpisodeScores, MovieScores } from './shared/models/score';

class AppSettings {
  appVersion: string;
  appProcessId: number;
  developerMode: boolean;
  webRoot = ''; // Make sure it's a string as it's used to all url connections to the backend (if not set it becomes undefined, which gives 404 errors)
  scanDisk: string;
  scanDiskNextRunInMs: number;
  scanLibrary: string;
  checkSub: string;
  checkSubNextRunInMs: number;
  checkVersion: string;
  libraryMode: boolean;
  libraryEditMode: boolean;
  logReversed: boolean;
  manualRefineVideo: boolean;
  preferHearingImpaired: boolean;
  manualSubSync: boolean;
  dereferUrl: string;
  tvdbUrl: string;
  imdbUrl: string;
  timestampFormat: string;
  pathSeparator: string;
  languages: Language[];
  subliminalProviders: string[];
  antiCaptchaProviders: AntiCaptchaProvider[];
  episodeScores: EpisodeScores;
  movieScores: MovieScores;

  get timeFormat(): string {
    return this.timestampFormat.split(' ')[0];
  }

  get dateFormat(): string {
    return this.timestampFormat.split(' ')[1];
  }

  public fromSettings(obj: any): void {
    Object.assign(this, obj);
  }
}

export let appSettings = new AppSettings();

export function appSettingsServiceFactory(appSettingsService: AppSettingsService): () => Observable<AppSettings> {
  return () => appSettingsService.load();
}

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private configLoaded = false;
  private webRoot = '';

  constructor(private platformLocation: PlatformLocation, private httpClient: HttpClient) {
    // Get base href
    const baseHref = this.platformLocation.getBaseHrefFromDOM();
    console.log(`Application base href: ${baseHref}`);
    // Get webroot from base href
    this.webRoot = baseHref.slice(0, baseHref.indexOf('/autosubliminal/')); // webroot is the part before /autosubliminal/ in base path
    console.log(`Application web root: ${this.webRoot}`);
  }

  public load(): Observable<AppSettings> {
    if (this.configLoaded) {
      // Return previously loaded settings
      return of(appSettings);
    } else {
      // Load settings
      return this.httpClient.get(`${this.webRoot}/api/system/settings`)
        .pipe(map((settings) => {
          appSettings.fromSettings(settings);
          this.configLoaded = true;
          console.log('Application settings loaded');
          console.log(`Application version: ${appSettings.appVersion}`);
          console.log(`Application PID: ${appSettings.appProcessId}`);
          console.log(`Developer mode: ${appSettings.developerMode}`);
          return appSettings;
        }))
        .pipe(catchError((error) => {
          console.error(`Error while retrieving application settings`);
          return throwError(error); // rethrow error to be sure that app initialization stops
        }));
    }
  }

  public loaded(): boolean {
    return this.configLoaded;
  }
}
