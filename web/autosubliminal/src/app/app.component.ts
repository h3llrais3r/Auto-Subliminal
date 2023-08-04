import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { filter, switchMap } from 'rxjs';
import { AppSettingsService } from './app-settings.service';
import { PageFooterComponent } from './components/page/footer/page-footer.component';
import { PageHeaderComponent } from './components/page/header/page-header.component';
import { MessageService } from './services/message.service';
import { SystemEventService } from './services/system-event.service';
import { WebSocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgIf, RouterOutlet, DialogModule, ToastModule, PageHeaderComponent, PageFooterComponent]
})
export class AppComponent {

  systemAlive = false;
  systemRestartInProgress = false;
  systemShutdownInProgress = false;

  private websocketService = inject(WebSocketService);
  private appSettingsService = inject(AppSettingsService);
  private systemEventService = inject(SystemEventService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  constructor() {
    // Check if app settings are loaded (which means the system is alive as it fetches data from the server)
    this.appSettingsService.appSettingsLoaded$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (loaded) => {
        // Indicate if system is alive or not
        this.systemAlive = loaded;
      }
    });
    // Initialize websockets
    this.websocketService.initialize();
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
    // Subscribe on websocket connection events
    this.systemEventService.webSocketConnectionStatus$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (connected) => this.systemAlive = connected // Mark system as alive or not
    });
  }

  get connectionInterrupted(): boolean {
    // Only show connection interrupted if not one of the other dialogs are shown
    return !this.systemAlive && !this.systemRestartInProgress && !this.systemShutdownInProgress;
  }

  private checkRestart(): void {
    this.systemRestartInProgress = true;
    const check = this.systemEventService.webSocketConnectionStatus$.pipe(
      filter((connected) => !connected), // wait util disconnected
      switchMap(() => this.systemEventService.webSocketConnectionStatus$), // check again
      filter((connected) => connected), // wait until connected
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => {
        this.systemAlive = true;
        this.systemRestartInProgress = false;
        check.unsubscribe(); // stop checking
      }
    });
  }

  private checkShutdown(): void {
    this.systemShutdownInProgress = true;
    const check = this.systemEventService.webSocketConnectionStatus$.pipe(
      filter((connected) => !connected), // wait until disconnected
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => {
        this.systemAlive = false;
        this.systemShutdownInProgress = false;
        check.unsubscribe(); // stop checking
      }
    });
  }
}
