import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly PREXIX = 'autosubliminal';
  private readonly THEME = `${this.PREXIX}-theme`;

  constructor(private localStorageService: LocalStorageService) { }

  public storeTheme(theme: string): void {
    this.localStorageService.store(this.THEME, theme);
  }

  public getTheme(): string | null {
    return this.localStorageService.retrieve(this.THEME);
  }
}
