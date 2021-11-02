import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-subtitle-sync',
  templateUrl: './subtitle-sync.component.html',
  styleUrls: ['./subtitle-sync.component.scss']
})
export class SubtitleSyncComponent implements OnInit {

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter<boolean>(); // Setup 2-way binding [(visible)]="..."

  @Input()
  videoFilePath: string;

  @Input()
  videoFileName: string;

  constructor() { }

  ngOnInit(): void {
  }

  syncSubtitle(): void {
    // TODO
  }

  resetSubtitle(): void {
    // TODO
  }

  saveSubtitle(): void {
    // TODO
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
