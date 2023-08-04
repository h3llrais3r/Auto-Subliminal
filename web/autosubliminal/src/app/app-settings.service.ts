import { DOCUMENT, PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, catchError, map, Observable, of, Subject } from 'rxjs';
import { AppSettings } from './models/app-settings';

export const appSettings = new AppSettings();

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  appSettings$ = new Subject<AppSettings>();
  appSettingsLoaded$ = new BehaviorSubject<boolean>(false);

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

  public load(reload = false): Observable<boolean> {
    // Load settings
    return this.httpClient.get(`${this.webRoot}/api/system/settings`).pipe(
      map((settings) => {
        appSettings.fromSettings(settings);
        this.appSettings$.next(appSettings);
        this.appSettingsLoaded$.next(true);
        console.log(`Application settings ${reload ? 're' : ''}loaded`);
        console.log(`Application version: ${appSettings.appVersion}`);
        console.log(`Application PID: ${appSettings.appProcessId}`);
        console.log(`Developer mode: ${appSettings.developerMode}`);
        return true;
      }),
      catchError((error) => {
        console.error('Error while loading application settings', error);
        this.appSettingsLoaded$.next(false);
        return of(false);
        // return throwError(() => error); // rethrow error only in case the  app initialization needs to stop
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
}
