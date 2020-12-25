import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme = 'bootstrap4-light-blue';

  changeTheme(theme: string) {
    let themeElement = document.getElementById('theme-link');
    themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.currentTheme, theme));
    this.currentTheme = theme;
  }
}
