import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { appSettings } from '../../../app-settings.service';
import { SystemService } from '../../../services/api/system.service';
import { SystemEventService } from '../../../services/system-event.service';
import { MessageComponent } from '../../../components/message/message.component';

@Component({
  selector: 'app-library-scanning',
  templateUrl: './library-scanning.component.html',
  styleUrls: ['./library-scanning.component.scss'],
  standalone: true,
  imports: [MessageComponent]
})
export class LibraryScanningComponent implements OnInit {

  scanningInProgress = false;

  private systemService = inject(SystemService);
  private systemEventService = inject(SystemEventService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // Check if library scanner is running
    this.systemService.getScheduler(appSettings.scanLibrary).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        this.scanningInProgress = scheduler.running;
      }
    });
    // Subscribe on scheduler finish events to check if library scanner is started
    this.systemEventService.schedulerStart$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        this.scanningInProgress = scheduler.name === appSettings.scanLibrary ? true : this.scanningInProgress;
      }
    });
    // Subscribe on scheduler finish events to check if library scanner is finished
    this.systemEventService.schedulerFinish$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        this.scanningInProgress = scheduler.name === appSettings.scanLibrary ? false : this.scanningInProgress;
      }
    });
  }
}
