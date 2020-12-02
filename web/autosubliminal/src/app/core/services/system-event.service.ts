import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Page } from '../../shared/models/page';
import { Scheduler } from '../../shared/models/scheduler';

@Injectable({
  providedIn: 'root'
})
export class SystemEventService {

  pageReload: Subject<Page> = new Subject<Page>();
  schedulerStarted: Subject<Scheduler> = new Subject<Scheduler>();
  schedulerFinished: Subject<Scheduler> = new Subject<Scheduler>();

  constructor() { }

  notifyPageReload(page: Page): void {
    this.pageReload.next(page);
  }

  notifySchedulerStarted(scheduler: Scheduler): void {
    this.schedulerStarted.next(scheduler);
  }

  notifySchedulerFinished(scheduler: Scheduler): void {
    this.schedulerFinished.next(scheduler);
  }
}
