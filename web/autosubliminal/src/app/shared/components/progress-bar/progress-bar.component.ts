import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    standalone: true
})
export class ProgressBarComponent {

  @Input()
  value = 0;

  @Input()
  total = 100;

  @Input()
  showPercentage = false; // if true, percentage is show as text

  get percentage(): number {
    return Math.round(this.value / this.total * 100);
  }

  getText(): string {
    // Show text or percentage
    if (this.showPercentage) {
      return `${this.percentage}%`;
    } else {
      return `${this.value} of ${this.total}`;
    }
  }

  getStyleClass(): string {
    // Get the progress percentage (always round down to nearest multiple of 5)
    const percentage = Math.floor(this.percentage / 5) * 5;
    return `progress-${percentage}`;
  }

  getWidth(): string {
    return `${this.percentage}%`;
  }
}
