import { NgClass, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SharedModule } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { Scheduler } from 'src/app/shared/models/scheduler';
import { SystemService } from '../../../core/services/api/system.service';
import { MessageService } from '../../../core/services/message.service';
import { SystemEventService } from '../../../core/services/system-event.service';
import { PathInfo } from '../../../shared/models/pathinfo';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, PanelModule, TableModule, SharedModule]
})
export class SystemStatusComponent implements OnInit {

  schedulers: Scheduler[];
  paths: PathInfo[];

  private systemService = inject(SystemService);
  private systemEventService = inject(SystemEventService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // Get schedulers
    this.systemService.getSchedulers().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (schedulers) => {
        this.schedulers = schedulers;
        // Subscribe on scheduler start events
        this.systemEventService.schedulerStart$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: (startedScheduler) => {
            // Replace started scheduler in list of schedulers
            this.schedulers = this.schedulers.map((scheduler) => scheduler.name === startedScheduler.name ? startedScheduler : scheduler);
          }
        });
        // Subscribe on scheduler finish events
        this.systemEventService.schedulerFinish$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: (finishedScheduler) => {
            // Replace finished scheduler in list of schedulers
            this.schedulers = this.schedulers.map((scheduler) => scheduler.name === finishedScheduler.name ? finishedScheduler : scheduler);
          }
        });
      },
      error: () => this.messageService.showErrorMessage('Unable to get the system schedulers!')
    });
    // Get paths
    this.systemService.getPaths().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (paths) => {
        this.paths = paths;
      },
      error: () => this.messageService.showErrorMessage('Unable to get the system paths!')
    });
  }

}
