import { Component } from '@angular/core';
import { AppSettingsService } from './app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appSettingsLoaded = false;

  constructor(private appSettingsService: AppSettingsService) {
    // Check if app settings are loaded
    this.appSettingsLoaded = this.appSettingsService.loaded();
  }
}
