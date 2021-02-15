import { Component, OnDestroy, OnInit } from '@angular/core';
import moment from 'moment';
import { CountdownConfig } from 'ngx-countdown';
import { Subscription } from 'rxjs';
import { appSettings } from '../../../../app-settings.service';
import { SystemEventService } from '../../../services/system-event.service';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit, OnDestroy {

  appVersion: string;
  scanDiskCountdown: CountdownConfig;
  checkSubCountdown: CountdownConfig;
  scanDiskRunning = false;
  checkSubRunning = false;

  private scanDiskStartedSubscription: Subscription;
  private scanDiskFinishedSubscription: Subscription;
  private checkSubStartedSubscription: Subscription;
  private checkSubFinishedSubscription: Subscription;

  constructor(private systemEventService: SystemEventService) { }

  ngOnInit(): void {
    // Init values
    this.initValues();
    // Subscribe on scanDisk started events
    this.scanDiskStartedSubscription = this.systemEventService.schedulerStart.subscribe(
      (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.scanDiskRunning = true;
        }
      });
    // Subscribe on scanDisk finished events
    this.scanDiskFinishedSubscription = this.systemEventService.schedulerFinish.subscribe(
      (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.initScanDiskCountdown(scheduler.nextRun);
          this.scanDiskRunning = false;
        }
      });
    // Subscribe on checkSub started events
    this.checkSubStartedSubscription = this.systemEventService.schedulerStart.subscribe(
      (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.checkSubRunning = true;
        }
      });
    // Subscribe on checkSub finished events
    this.checkSubFinishedSubscription = this.systemEventService.schedulerFinish.subscribe(
      (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.initCheckSubCountdown(scheduler.nextRun);
          this.checkSubRunning = false;
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
    this.initScanDiskCountdown(appSettings.scanDiskNextRunInMs);
    this.initCheckSubCountdown(appSettings.checkSubNextRunInMs);
  }

  private initScanDiskCountdown(scanDiskNextRun: number): void {
    if (scanDiskNextRun) {
      const now = moment();
      this.scanDiskCountdown = {
        leftTime: moment.duration(moment(scanDiskNextRun).diff(now)).asSeconds()
      };
    } else {
      this.scanDiskRunning = true; // 0 means it's currently running
    }
  }

  private initCheckSubCountdown(checkSubNextRun: number): void {
    if (checkSubNextRun) {
      const now = moment();
      this.checkSubCountdown = {
        leftTime: moment.duration(moment(checkSubNextRun).diff(now)).asSeconds()
      };
    } else {
      this.checkSubRunning = true; // 0 means it's currently running
    }
  }
}
