import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { concatMap, interval, noop } from 'rxjs';
import { AppSettingsService } from './app-settings.service';
import { SystemService } from './core/services/api/system.service';
import { MessageService } from './core/services/message.service';
import { SystemEventService } from './core/services/system-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appSettingsLoaded = false;
  systemStarted = false;
  systemStart = false;
  systemRestart = false;
  systemShutdown = false;
  systemShutdownFinished = false;
  webSocketConnectionInterrupted = false;

  private readonly ALIVE_CHECK_INTERVAL = 2000;

  private appSettingsService = inject(AppSettingsService);
  private systemEventService = inject(SystemEventService);
  private systemService = inject(SystemService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  constructor() {
    // Check if app settings are loaded
    this.appSettingsLoaded = this.appSettingsService.loaded();
    // Check if system is started (this is the case when the settings are loaded)
    this.systemStarted = this.appSettingsLoaded;
    // Subscribe on system start events
    this.systemEventService.systemStart$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => this.checkStart()
    });
    // Subscribe on system restart events
    this.systemEventService.systemRestart$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.messageService.clearMessages(); // Clear messages
        this.checkRestart();
      }
    });
    // Subscribe on system shutdown events
    this.systemEventService.systemShutdown$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => this.checkShutdown()
    });
    // Subscribe on websocket connection interrupted events
    this.systemEventService.webSocketConnectionInterrupted$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (interrupted) => this.webSocketConnectionInterrupted = interrupted
    });
  }

  get connectionInterrupted(): boolean {
    // Only show connection interrupted if not one of the other dialogs are shown
    return this.webSocketConnectionInterrupted &&
      !this.systemStart &&
      !this.systemRestart &&
      !this.systemShutdown &&
      !this.systemShutdownFinished;
  }

  private checkStart(): void {
    // Only check for start if not restarting (this check is for start after a shutdown)
    if (!this.systemRestart) {
      this.systemStart = true;
      this.systemStarted = false;
      this.systemShutdownFinished = false;
      const check = interval(this.ALIVE_CHECK_INTERVAL).pipe(
        concatMap(() => this.systemService.isAlive()),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe({
        next: (alive) => {
          if (alive) {
            // If app is loaded, mark system is started
            if (this.appSettingsLoaded) {
              this.systemStart = false;
              this.systemStarted = true;
              check.unsubscribe(); // stop the check
            } else {
              // If iapp is not loaded, reload page to re-initialize the app
              document.location.reload();
            }
          }
          // Continue the check
        }
      });
    }
  }

  private checkRestart(): void {
    this.systemRestart = true;
    this.systemStarted = false;
    const check = interval(this.ALIVE_CHECK_INTERVAL).pipe(
      concatMap(() => this.systemService.isAlive()),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (alive) => {
        if (alive) {
          this.systemRestart = false;
          this.systemStarted = true;
          check.unsubscribe(); // stop the check
        }
        // continue the check
      }
    });
  }

  private checkShutdown(): void {
    this.systemShutdown = true;
    this.systemStarted = false;
    const check = interval(this.ALIVE_CHECK_INTERVAL).pipe(
      concatMap(() => this.systemService.isAlive()),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => noop, // continue the check
      error: () => {
        // error means no longer alive -> shutdown finished
        this.systemShutdown = false;
        this.systemShutdownFinished = true;
        check.unsubscribe(); // stop the check
      }
    });
  }
}
