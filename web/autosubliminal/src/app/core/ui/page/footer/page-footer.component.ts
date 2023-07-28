import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import moment from 'moment';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { Subscription } from 'rxjs';
import { appSettings } from '../../../../app-settings.service';
import { Scheduler } from '../../../../shared/models/scheduler';
import { SystemService } from '../../../services/api/system.service';
import { SystemEventService } from '../../../services/system-event.service';
import { WebSocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit, OnDestroy {

  appVersion: string;
  scanDiskCountdownConfig: CountdownConfig;
  checkSubCountdownConfig: CountdownConfig;
  scanDiskRunning = false;
  scanDiskNotAvailable = false;
  scanDiskCountdownRunning = false;
  checkSubRunning = false;
  checkSubNotAvailable = false;
  checkSubCountdownRunning = false;

  private scanDiskStartedSubscription: Subscription;
  private scanDiskFinishedSubscription: Subscription;
  private checkSubStartedSubscription: Subscription;
  private checkSubFinishedSubscription: Subscription;
  private webSocketConnectionInterruptedSubscription: Subscription;

  @ViewChild('scanDiskCountdown', { static: false })
  private scanDiskCountdown: CountdownComponent;

  @ViewChild('checkSubCountdown', { static: false })
  private checkSubCountdown: CountdownComponent;

  constructor(private systemService: SystemService, private systemEventService: SystemEventService, private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    // Init values
    this.initValues();
    // Subscribe on scanDisk started events
    this.scanDiskStartedSubscription = this.systemEventService.schedulerStart$.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.initScanDiskCountdown(scheduler);
        }
      }
    });
    // Subscribe on scanDisk finished events
    this.scanDiskFinishedSubscription = this.systemEventService.schedulerFinish$.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.initScanDiskCountdown(scheduler);
        }
      }
    });
    // Subscribe on checkSub started events
    this.checkSubStartedSubscription = this.systemEventService.schedulerStart$.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.initCheckSubCountdown(scheduler);
        }
      }
    });
    // Subscribe on checkSub finished events
    this.checkSubFinishedSubscription = this.systemEventService.schedulerFinish$.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.initCheckSubCountdown(scheduler);
        }
      }
    });
    // Subscribe on websocket events
    this.webSocketConnectionInterruptedSubscription = this.systemEventService.webSocketConnectionInterrupted$.subscribe({
      next: (interrupted) => {
        if (interrupted) {
          this.scanDiskCountdown.pause();
          this.checkSubCountdown.pause();
        } else {
          this.initValues();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.scanDiskStartedSubscription.unsubscribe();
    this.scanDiskFinishedSubscription.unsubscribe();
    this.checkSubStartedSubscription.unsubscribe();
    this.checkSubFinishedSubscription.unsubscribe();
    this.webSocketConnectionInterruptedSubscription.unsubscribe();
  }

  private initValues(): void {
    // Set app version
    this.appVersion = appSettings.appVersion;
    // Init countdowns
    this.systemService.getScheduler(appSettings.scanDisk).subscribe((scheduler) => this.initScanDiskCountdown(scheduler));
    this.systemService.getScheduler(appSettings.checkSub).subscribe((scheduler) => this.initCheckSubCountdown(scheduler));
  }

  private initScanDiskCountdown(scheduler: Scheduler): void {
    if (scheduler.running) {
      this.scanDiskRunning = true;
      this.scanDiskNotAvailable = false;
      this.scanDiskCountdownRunning = false;
    } else {
      this.scanDiskRunning = false;
      if (scheduler.nextRun) {
        this.scanDiskNotAvailable = false;
        const now = moment();
        this.scanDiskCountdownConfig = {
          leftTime: moment.duration(moment(scheduler.nextRun).diff(now)).asSeconds()
        };
        this.scanDiskCountdownRunning = true;
      } else {
        this.scanDiskNotAvailable = true; // 0 means N/A
        this.scanDiskCountdownRunning = false;
      }
    }
  }

  private initCheckSubCountdown(scheduler: Scheduler): void {
    if (scheduler.running) {
      this.checkSubRunning = true;
      this.checkSubNotAvailable = false;
      this.checkSubCountdownRunning = false;
    } else {
      this.checkSubRunning = false;
      if (scheduler.nextRun) {
        this.checkSubNotAvailable = false;
        const now = moment();
        this.checkSubCountdownConfig = {
          leftTime: moment.duration(moment(scheduler.nextRun).diff(now)).asSeconds()
        };
        this.checkSubCountdownRunning = true;
      } else {
        this.checkSubNotAvailable = true; // 0 means N/A
        this.checkSubCountdownRunning = false;
      }
    }
  }
}
