import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Scheduler } from '../../shared/models/scheduler';
import { SystemUpdate } from '../../shared/models/systemupdate';

@Injectable({
  providedIn: 'root'
})
export class SystemEventService {

  systemStart = new Subject<boolean>();
  systemRestart = new Subject<boolean>();
  systemShutdown = new Subject<boolean>();
  systemUpdate = new Subject<SystemUpdate>();
  schedulerStart = new Subject<Scheduler>();
  schedulerFinish = new Subject<Scheduler>();
  webSocketConnectionFailure = new Subject<boolean>();

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

  notifyWebSocketConnectionFailure(failure: boolean): void {
    this.webSocketConnectionFailure.next(failure);
  }
}
