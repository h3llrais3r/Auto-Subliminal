import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Scheduler } from '../../shared/models/scheduler';

@Injectable({
  providedIn: 'root'
})
export class SystemEventService {

  systemStart: Subject<boolean> = new Subject<boolean>();
  systemRestart: Subject<boolean> = new Subject<boolean>();
  systemShutdown: Subject<boolean> = new Subject<boolean>();
  schedulerStart: Subject<Scheduler> = new Subject<Scheduler>();
  schedulerFinish: Subject<Scheduler> = new Subject<Scheduler>();

  constructor() { }

  notifySystemStart(): void {
    this.systemStart.next(true);
  }

  notifySystemRestart(): void {
    this.systemRestart.next(true);
  }

  notifySystemShutdown(): void {
    this.systemShutdown.next(true);
  }

  notifySchedulerStart(scheduler: Scheduler): void {
    this.schedulerStart.next(scheduler);
  }

  notifySchedulerFinish(scheduler: Scheduler): void {
    this.schedulerFinish.next(scheduler);
  }
}
