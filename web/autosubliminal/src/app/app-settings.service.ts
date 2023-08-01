import { DOCUMENT, PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AppSettings } from './models/app-settings';

export const appSettings = new AppSettings();

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private configLoaded = false;
  private webRoot = '';

  private document = inject(DOCUMENT);
  private platformLocation = inject(PlatformLocation);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  constructor() {
    // Get webroot from base href
    this.webRoot = this.platformLocation.getBaseHrefFromDOM().slice(0, -1); // webroot is baseHref without trailing /
    console.log(`Application web root: ${this.webRoot}`);
  }

  public load(reload = false): Observable<AppSettings> {
    // Load settings
    return this.httpClient.get(`${this.webRoot}/api/system/settings`).pipe(
      map((settings) => {
        appSettings.fromSettings(settings);
        this.configLoaded = true;
        console.log(`Application settings ${reload ? 're' : ''}loaded`);
        console.log(`Application version: ${appSettings.appVersion}`);
        console.log(`Application PID: ${appSettings.appProcessId}`);
        console.log(`Developer mode: ${appSettings.developerMode}`);
        return appSettings;
      }),
      catchError((error) => {
        console.error('Error while loading application settings');
        return throwError(() => error); // rethrow error to be sure that app initialization stops
      })
    );
  }

  // Helper function to reload the appsettings in the background and reload the complete app in case of error
  public reload(): void {
    this.load(true).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      error: () => {
        console.error('Forcing page reload to re-initialize the application');
        this.document.location.reload();
      }
    });
  }

  public loaded(): boolean {
    return this.configLoaded;
  }
}
