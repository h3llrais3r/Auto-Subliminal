import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
  logReversed: boolean;
  manualRefineVideo: boolean;
  preferHearingImpaired: boolean;
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

export function appSettingsServiceFactory(appSettingsService: AppSettingsService): () => Promise<AppSettings> {
  // A lambda is required here, otherwise `this` won't work inside AppSettingsService::load
  return async () => {
    // Wait for load to finish to be sure that the app is not bootstrapped before this is loaded (IE/Edge fix)
    return await appSettingsService.load();
  };
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

  // The return value (Promise) of this method is used as an APP_INITIALIZER, so the application's initialization will not complete until the Promise resolves.
  public async load(): Promise<AppSettings> {
    if (this.configLoaded) {
      // Return previously loaded config
      return of(appSettings).toPromise();
    } else {
      // Use manual resolve, reject to be sure to not bootstrap the application in case of an error!
      return new Promise((resolve, reject) => {
        const settingsObservable = this.httpClient.get(`${this.webRoot}/api/system/settings`).pipe(map((settings) => settings as AppSettings));
        settingsObservable.subscribe(
          (settings) => {
            appSettings.fromSettings(settings);
            this.configLoaded = true;
            console.log('Application settings loaded');
            console.log(`Application version: ${appSettings.appVersion}`);
            console.log(`Application PID: ${appSettings.appProcessId}`);
            console.log(`Developer mode: ${appSettings.developerMode}`);
            resolve(appSettings);
          },
          (error) => {
            // Use reject if you want to break the boostrapping of the app!
            // reject(`Error while retrieving application settings: ${JSON.stringify(error)}`);
            console.error(`Error while retrieving application settings: ${JSON.stringify(error)}`);
            resolve(null);
          });
      });
    }
  }

  public loaded(): boolean {
    return this.configLoaded;
  }
}
