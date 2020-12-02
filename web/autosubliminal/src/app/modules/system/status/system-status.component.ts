import { Component, OnInit } from '@angular/core';
import { SchedulerService } from 'src/app/core/services/api/scheduler.service';
import { Scheduler } from 'src/app/shared/models/scheduler';
import { DiskUsageService } from '../../../core/services/api/diskusage.service';
import { SystemEventService } from '../../../core/services/system-event.service';
import { DiskUsage } from '../../../shared/models/diskusage';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss']
})
export class SystemStatusComponent implements OnInit {

  schedulers: Scheduler[];
  diskUsages: DiskUsage[];

  constructor(
    private schedulerService: SchedulerService,
    private diskUsageService: DiskUsageService,
    private systemEventService: SystemEventService) { }

  ngOnInit(): void {
    // Get schedulers
    this.schedulerService.getSchedulers().subscribe(
      result => {
        this.schedulers = result;
      });
    // Get diskusages
    this.diskUsageService.getDiskUsages().subscribe(
      result => {
        this.diskUsages = result;
      });
    // Subscribe on scheduler started events
    this.systemEventService.schedulerStarted.subscribe(
      result => {
        // Replace started scheduler in list of schedulers
        this.schedulers = this.schedulers.map(scheduler => scheduler.name === result.name ? result : scheduler);
      });
    // Subscribe on scheduler finished events
    this.systemEventService.schedulerFinished.subscribe(
      result => {
        // Replace finished scheduler in list of schedulers
        this.schedulers = this.schedulers.map(scheduler => scheduler.name === result.name ? result : scheduler);
      });
  }

}
