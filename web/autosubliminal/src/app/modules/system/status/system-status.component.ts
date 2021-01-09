import { Component, OnInit } from '@angular/core';
import { Scheduler } from 'src/app/shared/models/scheduler';
import { SystemService } from '../../../core/services/api/system.service';
import { SystemEventService } from '../../../core/services/system-event.service';
import { PathInfo } from '../../../shared/models/pathinfo';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss']
})
export class SystemStatusComponent implements OnInit {

  schedulers: Scheduler[];
  paths: PathInfo[];

  constructor(
    private systemService: SystemService,
    private systemEventService: SystemEventService) { }

  ngOnInit(): void {
    // Get schedulers
    this.systemService.getSchedulers().subscribe(
      schedulers => {
        this.schedulers = schedulers;
        // Subscribe on scheduler start events
        this.systemEventService.schedulerStart.subscribe(
          result => {
            // Replace started scheduler in list of schedulers
            this.schedulers = this.schedulers.map(scheduler => scheduler.name === result.name ? result : scheduler);
          });
        // Subscribe on scheduler finish events
        this.systemEventService.schedulerFinish.subscribe(
          result => {
            // Replace finished scheduler in list of schedulers
            this.schedulers = this.schedulers.map(scheduler => scheduler.name === result.name ? result : scheduler);
          });
      });
    // Get paths
    this.systemService.getPaths().subscribe(
      result => {
        this.paths = result;
      });
  }

}
