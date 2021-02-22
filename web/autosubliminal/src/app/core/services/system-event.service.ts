import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Scheduler } from '../../shared/models/scheduler';
import { SystemUpdate } from '../../shared/models/systemupdate';

@Injectable({
  providedIn: 'root'
})
export class SystemEventService {

  systemStart: Subject<boolean> = new Subject<boolean>();
  systemRestart: Subject<boolean> = new Subject<boolean>();
  systemShutdown: Subject<boolean> = new Subject<boolean>();
  systemUpdate: Subject<SystemUpdate> = new Subject<SystemUpdate>();
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

  notifySystemUpdate(systemUpdate: SystemUpdate): void {
    this.systemUpdate.next(systemUpdate);
  }

  notifySchedulerStart(scheduler: Scheduler): void {
    this.schedulerStart.next(scheduler);
  }

  notifySchedulerFinish(scheduler: Scheduler): void {
    this.schedulerFinish.next(scheduler);
  }
}
