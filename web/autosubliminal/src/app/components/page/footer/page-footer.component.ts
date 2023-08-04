import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import moment from 'moment';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { appSettings } from '../../../app-settings.service';
import { Scheduler } from '../../../models/scheduler';
import { SystemService } from '../../../services/api/system.service';
import { SystemEventService } from '../../../services/system-event.service';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
  standalone: true,
  imports: [NgIf, CountdownComponent]
})
export class PageFooterComponent implements OnInit {

  @ViewChild('scanDiskCountdown', { static: false })
  private scanDiskCountdown: CountdownComponent;

  @ViewChild('checkSubCountdown', { static: false })
  private checkSubCountdown: CountdownComponent;

  appVersion: string;
  scanDiskCountdownConfig: CountdownConfig;
  checkSubCountdownConfig: CountdownConfig;
  scanDiskRunning = false;
  scanDiskNotAvailable = false;
  scanDiskCountdownRunning = false;
  checkSubRunning = false;
  checkSubNotAvailable = false;
  checkSubCountdownRunning = false;

  private systemService = inject(SystemService);
  private systemEventService = inject(SystemEventService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // Init values
    this.initValues();
    // Subscribe on scanDisk started events
    this.systemEventService.schedulerStart$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.initScanDiskCountdown(scheduler);
        }
      }
    });
    // Subscribe on scanDisk finished events
    this.systemEventService.schedulerFinish$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.initScanDiskCountdown(scheduler);
        }
      }
    });
    // Subscribe on checkSub started events
    this.systemEventService.schedulerStart$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.initCheckSubCountdown(scheduler);
        }
      }
    });
    // Subscribe on checkSub finished events
    this.systemEventService.schedulerFinish$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.initCheckSubCountdown(scheduler);
        }
      }
    });
    // Subscribe on websocket events
    this.systemEventService.webSocketConnectionStatus$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (connected) => {
        if (connected) {
          this.initValues();
        } else {
          this.scanDiskCountdown.pause();
          this.checkSubCountdown.pause();
        }
      }
    });
  }

  private initValues(): void {
    // Set app version
    this.appVersion = appSettings.appVersion;
    // Init countdowns
    this.systemService.getScheduler(appSettings.scanDisk).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => this.initScanDiskCountdown(scheduler)
    });
    this.systemService.getScheduler(appSettings.checkSub).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => this.initCheckSubCountdown(scheduler)
    });
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
