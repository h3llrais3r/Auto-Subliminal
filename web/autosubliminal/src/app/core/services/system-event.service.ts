import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WantedItem } from '../../shared/models/item';
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
  wantedItemUpdate = new Subject<WantedItem>();
  wantedItemDelete = new Subject<WantedItem>();
  webSocketConnectionInterrupted = new Subject<boolean>();

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

  notifyWantedItemUpdate(wantedItem: WantedItem): void {
    this.wantedItemUpdate.next(wantedItem);
  }

  notifyWantedItemDelete(wantedItem: WantedItem): void {
    this.wantedItemDelete.next(wantedItem);
  }

  notifyWebSocketConnectionInterrupted(interrupted: boolean): void {
    this.webSocketConnectionInterrupted.next(interrupted);
  }
}
