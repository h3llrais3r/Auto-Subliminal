import { AfterViewChecked, Component, HostListener, Input, OnInit } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit, AfterViewChecked {

  @Input()
  target: HTMLElement; // optional target html element, if specified scroll is related to the element

  private scrollHeight: number;
  private maxScrollHeight: number;

  constructor(private scrollService: ScrollService) {
    // Subscribe on scrollUp events
    this.scrollService.scrollUp.subscribe({
      next: () => this.scrollToTop()
    });
    // Subscribe on scrollDown events
    this.scrollService.scrollDown.subscribe({
      next: () => this.scrollToBottom()
    });
  }

  ngOnInit(): void {
    this.scrollHeight = this.getScrollHeight();
    this.maxScrollHeight = this.getMaxScrollHeight();
  }

  ngAfterViewChecked(): void {
    // Make sure to update the scrollheight after the page/component is loaded
    this.scrollHeight = this.getScrollHeight();
    this.maxScrollHeight = this.getMaxScrollHeight();
  }

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

  scrollToTop(): void {
    if (this.scrollHeight > 0) {
      if (this.target) {
        this.target.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  scrollToBottom(): void {
    if (this.maxScrollHeight > 0) {
      if (this.target) {
        this.target.scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' });
      } else {
        window.scrollTo({ top: this.maxScrollHeight, behavior: 'smooth' });
      }
    }
  }

  private getScrollHeight(): number {
    return document.documentElement.scrollTop || document.body.scrollTop;
  }

  private getMaxScrollHeight(): number {
    return (document.documentElement.scrollHeight || document.body.scrollHeight) - (document.documentElement.offsetHeight || document.body.offsetHeight);
  }
}
