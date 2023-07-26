import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appSettings } from '../../../app-settings.service';
import { DownloadedItem, WantedItem } from '../../../shared/models/item';
import { SavedSubtitle, Subtitle } from '../../../shared/models/subtitle';
import { SubtitleSyncResult } from '../../../shared/models/subtitle-sync-result';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends ApiServiceTemplate {

  private readonly URL = `${appSettings.webRoot}/api/items`;

  getWantedItems(): Observable<WantedItem[]> {
    return this.httpClient.get<WantedItem[]>(`${this.URL}/wanted`, this.options)
      .pipe(map((wantedItems) => wantedItems.map((wantedItem) => new WantedItem(wantedItem))));
  }

  getWantedItem(wantedItemId: number): Observable<WantedItem> {
    return this.httpClient.get<WantedItem>(`${this.URL}/wanted/${wantedItemId}`, this.options)
      .pipe(map((wantedItem) => new WantedItem(wantedItem)));
  }

  updateWantedItem(wantedItem: WantedItem): Observable<WantedItem> {
    return this.httpClient.put<WantedItem>(`${this.URL}/wanted/${wantedItem.id}`, JSON.stringify(wantedItem), this.options)
      .pipe(map((updatedWantedItem) => new WantedItem(updatedWantedItem)));
  }

  resetWantedItem(wantedItemId: number): Observable<WantedItem> {
    return this.httpClient.patch<WantedItem>(`${this.URL}/wanted/${wantedItemId}`, { action: 'reset' }, this.options)
      .pipe(map((wantedItem) => new WantedItem(wantedItem)));
  }

  deleteWantedItem(wantedItemId: number, cleanup?: boolean): Observable<boolean> {
    return this.httpClient.patch<void>(`${this.URL}/wanted/${wantedItemId}`, { action: 'delete', cleanup }, this.options)
      .pipe(map(() => true));
  }

  skipWantedItem(wantedItemId: number, type: string, season?: string): Observable<boolean> {
    return this.httpClient.patch<void>(`${this.URL}/wanted/${wantedItemId}`, { action: 'skip', type, season }, this.options)
      .pipe(map(() => true));
  }

  postProcessWantedItem(wantedItemId: number, subtitleIndex?: number): Observable<boolean> {
    return this.httpClient.patch<void>(`${this.URL}/wanted/${wantedItemId}`, { action: 'postProcess', subtitleIndex }, this.options)
      .pipe(map(() => true));
  }

  searchWantedItemIndexerId(wantedItemId: number): Observable<WantedItem> {
    return this.httpClient.patch<WantedItem>(`${this.URL}/wanted/${wantedItemId}`, { action: 'searchIndexerId' }, this.options)
      .pipe(map((wantedItem) => new WantedItem(wantedItem)));
  }

  searchWantedItemSubtitles(wantedItemId: number, language: string): Observable<Subtitle[]> {
    return this.httpClient.patch<Subtitle[]>(`${this.URL}/wanted/${wantedItemId}`, { action: 'searchSubtitles', language }, this.options)
      .pipe(map((subtitles) => subtitles.map((subtitle) => new Subtitle(subtitle))));
  }

  saveWantedItemSubtitle(wantedItemId: number, subtitleIndex: number): Observable<SavedSubtitle> {
    return this.httpClient.patch<SavedSubtitle>(`${this.URL}/wanted/${wantedItemId}`, { action: 'saveSubtitle', subtitleIndex }, this.options)
      .pipe(map((savedSubtitle) => new SavedSubtitle(savedSubtitle)));
  }

  syncWantedItemSubtitle(wantedItemId: number): Observable<SubtitleSyncResult> {
    return this.httpClient.patch<void>(`${this.URL}/wanted/${wantedItemId}`, { action: 'syncSubtitle' }, this.options)
      .pipe(map((subtitleSyncResult) => new SubtitleSyncResult(subtitleSyncResult)));
  }

  deleteWantedItemSubtitle(wantedItemId: number): Observable<boolean> {
    return this.httpClient.patch<void>(`${this.URL}/wanted/${wantedItemId}`, { action: 'deleteSubtitle' }, this.options)
      .pipe(map(() => true));
  }

  getDownloadedItems(): Observable<DownloadedItem[]> {
    return this.httpClient.get<DownloadedItem[]>(`${this.URL}/downloaded`, this.options)
      .pipe(map((downloadedItems) => downloadedItems.map((downloadedItem) => new DownloadedItem(downloadedItem))));
  }
}
