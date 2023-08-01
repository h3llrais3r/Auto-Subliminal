import { DOCUMENT, NgClass } from '@angular/common';
import { AfterContentChecked, Component, DestroyRef, HostListener, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WINDOW } from 'ngx-window-token';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class ScrollComponent implements OnInit, AfterContentChecked {

  @Input()
  target: HTMLElement; // optional target html element, if specified scroll is related to the element

  private scrollHeight: number;
  private maxScrollHeight: number;

  private window = inject(WINDOW);
  private document = inject(DOCUMENT);
  private scrollService = inject(ScrollService);
  private destroyRef = inject(DestroyRef);

  get scrollBottom(): boolean {
    return this.scrollHeight < this.maxScrollHeight;
  }

  get scrollTop(): boolean {
    return this.scrollHeight >= 100;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrollHeight = this.getScrollHeight();
    this.maxScrollHeight = this.getMaxScrollHeight();
  }

  ngOnInit(): void {
    this.scrollHeight = this.getScrollHeight();
    this.maxScrollHeight = this.getMaxScrollHeight();
    // Subscribe on scrollUp events
    this.scrollService.scrollUp$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => this.scrollToTop()
    });
    // Subscribe on scrollDown events
    this.scrollService.scrollDown$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => this.scrollToBottom()
    });
  }

  ngAfterContentChecked(): void {
    // Make sure to update the scrollheight after the page/component is loaded
    this.scrollHeight = this.getScrollHeight();
    this.maxScrollHeight = this.getMaxScrollHeight();
  }

  scrollToTop(): void {
    if (this.scrollHeight > 0) {
      if (this.target) {
        this.target.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
      } else {
        this.window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  scrollToBottom(): void {
    if (this.maxScrollHeight > 0) {
      if (this.target) {
        this.target.scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' });
      } else {
        this.window.scrollTo({ top: this.maxScrollHeight, behavior: 'smooth' });
      }
    }
  }

  private getScrollHeight(): number {
    return this.document.documentElement.scrollTop || this.document.body.scrollTop;
  }

  private getMaxScrollHeight(): number {
    return (this.document.documentElement.scrollHeight || this.document.body.scrollHeight) - (this.document.documentElement.offsetHeight || this.document.body.offsetHeight);
  }
}
