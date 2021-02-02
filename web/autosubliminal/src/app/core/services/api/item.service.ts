import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DownloadedItem, WantedItem } from '../../../shared/models/item';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends ApiServiceTemplate {

  private readonly URL = '/api/items';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getWantedItems(): Observable<WantedItem[]> {
    return this.httpClient.get<WantedItem[]>(`${this.URL}/wanted`, this.options)
      .pipe(map((wantedItems) => wantedItems.map((wantedItem) => new WantedItem(wantedItem))));
  }

  getWantedItem(wantedItemId: number): Observable<WantedItem> {
    return this.httpClient.get<WantedItem>(`${this.URL}/wanted/${wantedItemId}`, this.options)
      .pipe(map((wantedItem) => new WantedItem(wantedItem)));
  }

  updateWantedItem(wantedItem: WantedItem): Observable<boolean> {
    return this.httpClient.put<WantedItem>(`${this.URL}/wanted/${wantedItem.id}`, JSON.stringify(wantedItem), this.options)
      .pipe(map(() => true));
  }

  resetWantedItem(wantedItemId: number): Observable<boolean> {
    return this.httpClient.patch(`${this.URL}/wanted/${wantedItemId}`, {}, this.options)
      .pipe(map(() => true));
  }

  getDownloadedItems(): Observable<DownloadedItem[]> {
    return this.httpClient.get<DownloadedItem[]>(`${this.URL}/downloaded`, this.options)
      .pipe(map((downloadedItems) => downloadedItems.map((downloadedItem) => new DownloadedItem(downloadedItem))));
  }
}

type Alive = { alive: boolean };
