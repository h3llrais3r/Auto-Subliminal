import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DiskUsage } from '../../../shared/models/diskusage';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class DiskUsageService extends ApiServiceTemplate {

  private readonly URL = '/api/settings/diskusage';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getDiskUsages(): Observable<DiskUsage[]> {
    return this.httpClient.get<DiskUsage[]>(this.URL)
      .pipe(map(result => result.map(obj => new DiskUsage(obj))));
  }
}
