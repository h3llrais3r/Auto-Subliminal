import { Component, OnInit } from '@angular/core';
import { SchedulerService } from 'src/app/core/services/api/scheduler.service';
import { Scheduler } from 'src/app/shared/models/scheduler';
import { DiskUsageService } from '../../../core/services/api/diskusage.service';
import { DiskUsage } from '../../../shared/models/diskusage';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss']
})
export class SystemStatusComponent implements OnInit {

  schedulers: Scheduler[];
  diskUsages: DiskUsage[];

  constructor(private schedulerService: SchedulerService, private diskUsageService: DiskUsageService) { }

  ngOnInit(): void {
    this.schedulerService.getSchedulers().subscribe(result => this.schedulers = result);
    this.diskUsageService.getDiskUsages().subscribe(result => this.diskUsages = result);
  }

}
