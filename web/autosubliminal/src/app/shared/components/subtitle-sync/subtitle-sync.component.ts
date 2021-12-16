import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SubtitleService } from '../../../core/services/api/subtitle.service';
import { MessageService } from '../../../core/services/message.service';
import { SubtitleSyncResult } from '../../models/subtitle-sync-result';
import { getPlayVideoUrl } from '../../utils/common-utils';
import { splitPath } from '../../utils/path-utils';

@Component({
  selector: 'app-subtitle-sync',
  templateUrl: './subtitle-sync.component.html',
  styleUrls: ['./subtitle-sync.component.scss']
})
export class SubtitleSyncComponent implements OnInit, OnDestroy {

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter<boolean>(); // Setup 2-way binding [(visible)]="..."

  @Input()
  videoPath: string;

  @Input()
  subtitlePath: string;

  videoName: string;

  subtitleName: string;

  syncInProgress = false;

  backupOnSave = false;

  subtitleSyncResult: SubtitleSyncResult;

  constructor(private domSanitizer: DomSanitizer, private subtitleService: SubtitleService, private messageService: MessageService) { }

  ngOnInit(): void {
    if (this.videoPath) {
      this.videoName = splitPath(this.videoPath).pop(); // filename is last part of path
    }
    if (this.subtitlePath) {
      this.subtitleName = splitPath(this.subtitlePath).pop(); // filename is last part of path
    }
  }

  ngOnDestroy(): void {
    // Make sure the synced subtitle is removed if synchronization is not properly handled by the user
    if (this.subtitleSyncResult) {
      // No specific handling in subscribe as we want to do it in the background
      this.subtitleService.deleteSubtitle(this.subtitleSyncResult.syncedSubtitlePath).subscribe();
    }
  }

  syncSubtitle(): void {
    this.syncInProgress = true;
    this.subtitleService.syncSubtitle(this.videoPath, this.subtitlePath).subscribe(
      (subtitleSyncResult) => {
        this.subtitleSyncResult = subtitleSyncResult;
        this.syncInProgress = false;
        this.messageService.showInfoMessage('Subtitle synchronized.');
      },
      () => {
        this.syncInProgress = false;
        this.messageService.showErrorMessage('Unable to synchronize the subtitle!');
      }
    );
  }

  getPlayVideoUrl(): SafeResourceUrl {
    const [filePath, fileName] = splitPath(this.videoPath);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(getPlayVideoUrl(filePath, fileName));
  }

  getSyncedSubtitleName(syncedSubtitlePath): string {
    return splitPath(syncedSubtitlePath).pop(); // filename is last part of path
  }

  saveSubtitle(): void {
    this.subtitleService.saveSyncedSubtitle(this.subtitlePath, this.subtitleSyncResult.syncedSubtitlePath, this.backupOnSave).subscribe(
      () => {
        this.close();
        this.subtitleSyncResult = null; // clear sync result (to not trigger the cleanup in onDestroy)
        this.messageService.showInfoMessage('Synchronized subtitle saved.')
      },
      () => this.messageService.showErrorMessage('Unable to save the synchronized subtitle!')
    );
  }

  resetSubtitle(): void {
    // Delete the synced subtitle
    this.subtitleService.deleteSubtitle(this.subtitleSyncResult.syncedSubtitlePath).subscribe(
      () => {
        this.subtitleSyncResult = null; // clear previous sync result
        this.messageService.showInfoMessage('Synchronized subtitle removed.');
      },
      () => this.messageService.showErrorMessage('Unable to removed the synchronized subtitle!')
    );
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
