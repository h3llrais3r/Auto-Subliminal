import { Component, OnDestroy, OnInit } from '@angular/core';
import moment from 'moment';
import { CountdownConfig } from 'ngx-countdown';
import { Subscription } from 'rxjs';
import { appSettings } from '../../../../app-settings.service';
import { Scheduler } from '../../../../shared/models/scheduler';
import { SystemService } from '../../../services/api/system.service';
import { SystemEventService } from '../../../services/system-event.service';

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
  checkSubRunning = false;
  checkSubNotAvailable = false;

  private scanDiskStartedSubscription: Subscription;
  private scanDiskFinishedSubscription: Subscription;
  private checkSubStartedSubscription: Subscription;
  private checkSubFinishedSubscription: Subscription;

  constructor(private systemService: SystemService, private systemEventService: SystemEventService) { }

  ngOnInit(): void {
    // Init values
    this.initValues();
    // Subscribe on scanDisk started events
    this.scanDiskStartedSubscription = this.systemEventService.schedulerStart.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.initScanDiskCountdown(scheduler);
        }
      }
    });
    // Subscribe on scanDisk finished events
    this.scanDiskFinishedSubscription = this.systemEventService.schedulerFinish.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.initScanDiskCountdown(scheduler);
        }
      }
    });
    // Subscribe on checkSub started events
    this.checkSubStartedSubscription = this.systemEventService.schedulerStart.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.initCheckSubCountdown(scheduler);
        }
      }
    });
    // Subscribe on checkSub finished events
    this.checkSubFinishedSubscription = this.systemEventService.schedulerFinish.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.initCheckSubCountdown(scheduler);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.scanDiskStartedSubscription.unsubscribe();
    this.scanDiskFinishedSubscription.unsubscribe();
    this.checkSubStartedSubscription.unsubscribe();
    this.checkSubFinishedSubscription.unsubscribe();
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
    } else {
      this.scanDiskRunning = false;
      if (scheduler.nextRun) {
        this.scanDiskNotAvailable = false;
        const now = moment();
        this.scanDiskCountdownConfig = {
          leftTime: moment.duration(moment(scheduler.nextRun).diff(now)).asSeconds()
        };
      } else {
        this.scanDiskNotAvailable = true; // if not running, 0 means N/A
      }
    }
  }

  private initCheckSubCountdown(scheduler: Scheduler): void {
    if (scheduler.running) {
      this.checkSubRunning = true;
      this.checkSubNotAvailable = false;
    } else {
      this.checkSubRunning = false;
      if (scheduler.nextRun) {
        this.checkSubNotAvailable = false;
        const now = moment();
        this.checkSubCountdownConfig = {
          leftTime: moment.duration(moment(scheduler.nextRun).diff(now)).asSeconds()
        };
      } else {
        this.checkSubNotAvailable = true; // if not running, 0 means N/A
      }
    }
  }
}
