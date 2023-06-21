import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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
  scanDiskIntervalDefault: number;
  scanLibrary: string;
  scanLibraryIntervalDefault: number;
  checkSub: string;
  checkSubIntervalDefault: number;
  checkSubDeadlineDefault: number;
  checkSubDeltaDefault: number;
  checkVersion: string;
  checkVersionIntervalDefault: number;
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

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private configLoaded = false;
  private webRoot = '';

  constructor(private platformLocation: PlatformLocation, private httpClient: HttpClient) {
    // Get webroot from base href
    this.webRoot = this.platformLocation.getBaseHrefFromDOM().slice(0, -1); // webroot is baseHref without trailing /
    console.log(`Application web root: ${this.webRoot}`);
  }

  public load(reload = false): Observable<AppSettings> {
    // Load settings
    return this.httpClient.get(`${this.webRoot}/api/system/settings`)
      .pipe(map((settings) => {
        appSettings.fromSettings(settings);
        this.configLoaded = true;
        console.log(`Application settings ${reload ? 're' : ''}loaded`);
        console.log(`Application version: ${appSettings.appVersion}`);
        console.log(`Application PID: ${appSettings.appProcessId}`);
        console.log(`Developer mode: ${appSettings.developerMode}`);
        return appSettings;
      }))
      .pipe(catchError((error) => {
        console.error('Error while loading application settings');
        return throwError(() => error); // rethrow error to be sure that app initialization stops
      }));
  }

  // Helper function to reload the appsettings in the background and reload the complete app in case of error
  public reload(): void {
    this.load(true).subscribe({
      error: () => {
        console.error('Forcing page reload to re-initialize the application');
        document.location.reload();
      }
    });
  }

  public loaded(): boolean {
    return this.configLoaded;
  }
}
