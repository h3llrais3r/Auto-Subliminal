import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appSettings } from '../../../app-settings.service';
import { SubtitleSyncResult } from '../../../shared/models/subtitle-sync-result';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class SubtitleService extends ApiServiceTemplate {

  private readonly URL = `${appSettings.webRoot}/api/subtitles`;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  syncSubtitle(subtitlePath: string, referenceFilePath: string): Observable<SubtitleSyncResult> {
    return this.httpClient.patch<SubtitleSyncResult>(`${this.URL}/synchronization`, { action: 'sync', subtitlePath, referenceFilePath }, this.options)
      .pipe(map((subtitleSyncResult) => new SubtitleSyncResult(subtitleSyncResult)));
  }

  saveSyncedSubtitle(subtitlePath: string, syncedSubtitlePath: string, backup: boolean): Observable<boolean> {
    return this.httpClient.patch<void>(`${this.URL}/synchronization`, { action: 'save', subtitlePath, syncedSubtitlePath, backup }, this.options)
      .pipe(map(() => true));
  }

  deleteSyncedSubtitle(syncedSubtitlePath: string): Observable<boolean> {
    return this.httpClient.patch<void>(`${this.URL}/synchronization`, { action: 'delete', syncedSubtitlePath }, this.options)
      .pipe(map(() => true));
  }
}
