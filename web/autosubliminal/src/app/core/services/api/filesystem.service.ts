import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appSettings } from '../../../app-settings.service';
import { FileBrowserResult } from '../../../shared/models/filebrowser';
import { ApiServiceTemplate } from './api-service-template';

@Injectable({
  providedIn: 'root'
})
export class FileSystemService extends ApiServiceTemplate {

  private readonly URL = `${appSettings.webRoot}/api/filesystem`;

  browse(path = '', includeFiles = true, includeFolders = true): Observable<FileBrowserResult> {
    const url = `${this.URL}?path=${path}&includeFiles=${includeFiles}&includeFolders=${includeFolders}`;
    return this.httpClient.get<FileBrowserResult>(url, this.options);
  }
}
