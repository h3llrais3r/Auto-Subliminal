import { Component, OnInit } from '@angular/core';
import { appSettings } from '../../../app-settings.service';
import { SystemService } from '../../../core/services/api/system.service';
import { SystemEventService } from '../../../core/services/system-event.service';

@Component({
  selector: 'app-library-scanning',
  templateUrl: './library-scanning.component.html',
  styleUrls: ['./library-scanning.component.scss']
})
export class LibraryScanningComponent implements OnInit {

  scanningInProgress = false;

  constructor(private systemService: SystemService, private systemEventService: SystemEventService) { }

  ngOnInit(): void {
    // Check if library scanner is running
    this.systemService.getScheduler(appSettings.scanLibrary).subscribe({
      next: (scheduler) => {
        this.scanningInProgress = scheduler.running;
      }
    });
    // Subscribe on scheduler finish events to check if library scanner is started
    this.systemEventService.schedulerStart$.subscribe({
      next: (scheduler) => {
        this.scanningInProgress = scheduler.name === appSettings.scanLibrary ? true : this.scanningInProgress;
      }
    });
    // Subscribe on scheduler finish events to check if library scanner is finished
    this.systemEventService.schedulerFinish$.subscribe({
      next: (scheduler) => {
        this.scanningInProgress = scheduler.name === appSettings.scanLibrary ? false : this.scanningInProgress;
      }
    });
  }

}
