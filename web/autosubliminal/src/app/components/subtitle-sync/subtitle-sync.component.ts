import { NgIf } from '@angular/common';
import { Component, DestroyRef, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SubtitleService } from '../../services/api/subtitle.service';
import { MessageService } from '../../services/message.service';
import { UploadService } from '../../services/upload.service';
import { SubtitleSyncResult } from '../../models/subtitle-sync-result';
import { getPlayVideoUrl } from '../../utils/common-utils';
import { splitPath } from '../../utils/path-utils';

@Component({
  selector: 'app-subtitle-sync',
  templateUrl: './subtitle-sync.component.html',
  styleUrls: ['./subtitle-sync.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, DialogModule, InputTextModule, FileUploadModule, ButtonModule, PanelModule, InputSwitchModule, SharedModule]
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

  referenceSubtitle: string = null;

  referenceSubtitlePath: string = null;

  syncInProgress = false;

  backupOnSave = false;

  subtitleSyncResult: SubtitleSyncResult;

  private domSanitizer = inject(DomSanitizer);
  private uploadService = inject(UploadService);
  private subtitleService = inject(SubtitleService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

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
      this.subtitleService.deleteSyncedSubtitle(this.subtitleSyncResult.syncedSubtitlePath).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }
  }

  uploadReferenceSubtitle(event: any): void {
    const file = event.files[0];
    const formData = new FormData();
    formData.append('file', event.files[0]);
    this.uploadService.uploadTmpFile(formData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (tmpFilePath) => {
        this.referenceSubtitle = file.name;
        this.referenceSubtitlePath = tmpFilePath;
      },
      error: () => {
        this.messageService.showErrorMessage('Unable to upload the reference subtitle!');
      }
    });
  }

  removeReferenceSubtitle(): void {
    this.referenceSubtitle = null;
    this.referenceSubtitlePath = null;
  }

  syncSubtitle(): void {
    this.syncInProgress = true;
    // Reference subtitle path is used when available, fallback to video path
    const referenceFilePath = this.referenceSubtitlePath || this.videoPath;
    this.subtitleService.syncSubtitle(this.subtitlePath, referenceFilePath).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (subtitleSyncResult) => {
        this.subtitleSyncResult = subtitleSyncResult;
        this.syncInProgress = false;
        this.messageService.showInfoMessage('Subtitle synchronized.');
      },
      error: () => {
        this.syncInProgress = false;
        this.messageService.showErrorMessage('Unable to synchronize the subtitle!');
      }
    });
  }

  syncSubtitleWithReferenceSubtitle(): void {
    this.syncInProgress = true;
    this.subtitleService.syncSubtitle(this.subtitlePath, this.referenceSubtitlePath).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (subtitleSyncResult) => {
        this.subtitleSyncResult = subtitleSyncResult;
        this.syncInProgress = false;
        this.messageService.showInfoMessage('Subtitle synchronized.');
      },
      error: () => {
        this.syncInProgress = false;
        this.messageService.showErrorMessage('Unable to synchronize the subtitle!');
      }
    });
  }

  getPlayVideoUrl(): SafeResourceUrl {
    const [filePath, fileName] = splitPath(this.videoPath);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(getPlayVideoUrl(filePath, fileName));
  }

  getSyncedSubtitleName(syncedSubtitlePath): string {
    return splitPath(syncedSubtitlePath).pop(); // filename is last part of path
  }

  saveSubtitle(): void {
    this.subtitleService.saveSyncedSubtitle(this.subtitlePath, this.subtitleSyncResult.syncedSubtitlePath, this.backupOnSave).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.close();
        this.subtitleSyncResult = null; // clear sync result (to not trigger the cleanup in onDestroy)
        this.messageService.showInfoMessage('Synchronized subtitle saved.');
      },
      error: () => this.messageService.showErrorMessage('Unable to save the synchronized subtitle!')
    });
  }

  resetSubtitle(): void {
    // Delete the synced subtitle
    this.subtitleService.deleteSyncedSubtitle(this.subtitleSyncResult.syncedSubtitlePath).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.subtitleSyncResult = null; // clear previous sync result
        this.messageService.showInfoMessage('Synchronized subtitle removed.');
      },
      error: () => this.messageService.showErrorMessage('Unable to removed the synchronized subtitle!')
    });
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
