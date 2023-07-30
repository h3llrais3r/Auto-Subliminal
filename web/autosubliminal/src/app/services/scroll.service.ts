import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollUp$ = new Subject<boolean>();
  scrollDown$ = new Subject<boolean>();

  triggerScrollUp(): void {
    this.scrollUp$.next(true);
  }

  triggerScrollDown(): void {
    this.scrollDown$.next(true);
  }
}
