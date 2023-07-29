import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme$ = new BehaviorSubject<string>('bootstrap4-dark-blue'); // default theme (as set in index.html)

  private storageService = inject(StorageService);

  constructor() {
    // Set the current theme from storage or use default theme
    const theme = this.storageService.getTheme() || this.currentTheme$.getValue();
    if (theme !== this.currentTheme$.getValue()) {
      this.changeTheme(theme);
    }
  }

  changeTheme(theme: string): void {
    const themeElement = document.getElementById('currentTheme');
    themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.currentTheme$.getValue(), theme));
    this.storageService.storeTheme(theme);
    this.currentTheme$.next(theme);
  }
}
