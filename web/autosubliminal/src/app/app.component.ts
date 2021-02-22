import { Component } from '@angular/core';
import { interval } from 'rxjs';
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

  private readonly ALIVE_CHECK_INTERVAL = 2000;

  appSettingsLoaded = false;
  systemStarted = false;
  systemStart = false;
  systemRestart = false;
  systemShutdown = false;
  systemShutdownFinished = false;

  constructor(
    private appSettingsService: AppSettingsService,
    private systemEventService: SystemEventService,
    private systemService: SystemService,
    private messageService: MessageService) {
    // Check if app settings are loaded
    this.appSettingsLoaded = this.appSettingsService.loaded();
    // Check if system is started (this is the case when the settings are loaded)
    this.systemStarted = this.appSettingsLoaded;
    // Subscribe on system start events
    this.systemEventService.systemStart.subscribe(() => this.checkStart());
    // Subscribe on system restart events
    this.systemEventService.systemRestart.subscribe(() => {
      this.messageService.clearMessages(); // Clear messages
      this.checkRestart();
    });
    // Subscribe on system shutdown events
    this.systemEventService.systemShutdown.subscribe(() => this.checkShutdown());
  }

  private checkStart(): void {
    // Only check for start if not restarting (this check is for start after a shutdown)
    if (!this.systemRestart) {
      this.systemStart = true;
      this.systemStarted = false;
      this.systemShutdownFinished = false;
      const check = interval(this.ALIVE_CHECK_INTERVAL).subscribe(
        () => {
          this.systemService.isAlive().subscribe(
            (alive) => {
              if (alive) {
                this.systemStart = false;
                this.systemStarted = true;
                check.unsubscribe(); // stop the check
              }
              // continue the check
            });
        }
      );
    }
  }


  private checkRestart(): void {
    this.systemRestart = true;
    this.systemStarted = false;
    const check = interval(this.ALIVE_CHECK_INTERVAL).subscribe(
      () => {
        this.systemService.isAlive().subscribe(
          (alive) => {
            if (alive) {
              this.systemRestart = false;
              this.systemStarted = true;
              check.unsubscribe(); // stop the check
            }
            // continue the check
          });
      }
    );
  }

  private checkShutdown(): void {
    this.systemShutdown = true;
    this.systemStarted = false;
    const check = interval(this.ALIVE_CHECK_INTERVAL).subscribe(
      () => {
        this.systemService.isAlive().subscribe(
          () => {
            // continue the check
          },
          () => {
            // no longer alive -> shutdown finished
            this.systemShutdown = false;
            this.systemShutdownFinished = true;
            check.unsubscribe(); // stop the check
          }
        );
      }
    );
  }
}
