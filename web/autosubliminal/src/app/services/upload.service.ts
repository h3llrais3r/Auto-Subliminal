import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appSettings } from '../app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private readonly URL = `${appSettings.webRoot}/upload`;

  private httpClient = inject(HttpClient);

  uploadTmpFile(formData: FormData): Observable<string> {
    return this.httpClient.post(`${this.URL}/tmp`, formData, { responseType: 'text' });
  }
}
