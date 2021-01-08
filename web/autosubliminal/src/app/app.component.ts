import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettingsService } from './app-settings.service';
import { SystemEventService } from './core/services/system-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appSettingsLoaded = false;

  constructor(private router: Router, private appSettingsService: AppSettingsService, private systemEventService: SystemEventService) {
    // Check if app settings are loaded
    this.appSettingsLoaded = this.appSettingsService.loaded();
    // Subscribe on system restarted events
    this.systemEventService.systemRestarted.subscribe(() => this.router.navigateByUrl('/system/restart?triggered=true'));
  }
}
