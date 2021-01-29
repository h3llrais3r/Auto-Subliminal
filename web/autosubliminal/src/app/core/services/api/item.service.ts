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

  getDownloadedItems(): Observable<DownloadedItem[]> {
    return this.httpClient.get<DownloadedItem[]>(`${this.URL}/downloaded`, this.options)
      .pipe(map((downloadedItems) => downloadedItems.map((downloadedItem) => new DownloadedItem(downloadedItem))));
  }
}

type Alive = { alive: boolean };
