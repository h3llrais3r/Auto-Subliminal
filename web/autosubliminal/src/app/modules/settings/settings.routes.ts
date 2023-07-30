import { Routes } from '@angular/router';
import { SettingsGeneralComponent } from './general/settings-general.component';
import { SettingsLibraryComponent } from './library/settings-library.component';
import { SettingsLoggingComponent } from './logging/settings-logging.component';
import { SettingsNamemappingComponent } from './namemapping/settings-namemapping.component';
import { SettingsNotificationComponent } from './notification/settings-notification.component';
import { SettingsPostprocessingComponent } from './postprocessing/settings-postprocessing.component';
import { SettingsSkipmappingComponent } from './skipmapping/settings-skipmapping.component';
import { SettingsSubliminalComponent } from './subliminal/settings-subliminal.component';
import { SettingsWebserverComponent } from './webserver/settings-webserver.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full'
  },
  {
    path: 'general',
    component: SettingsGeneralComponent
  },
  {
    path: 'library',
    component: SettingsLibraryComponent
  },
  {
    path: 'logging',
    component: SettingsLoggingComponent
  },
  {
    path: 'webserver',
    component: SettingsWebserverComponent
  },
  {
    path: 'subliminal',
    component: SettingsSubliminalComponent
  },
  {
    path: 'namemapping',
    component: SettingsNamemappingComponent
  },
  {
    path: 'skipmapping',
    component: SettingsSkipmappingComponent
  },
  {
    path: 'notification',
    component: SettingsNotificationComponent
  },
  {
    path: 'postprocessing',
    component: SettingsPostprocessingComponent
  },
  {
    path: '**', // wildcard to match any non matching routes
    redirectTo: 'general'
  }
];

// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
export default routes;
