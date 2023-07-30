import { Routes } from '@angular/router';
import { SystemInfoComponent } from './info/system-info.component';
import { SystemStatusComponent } from './status/system-status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: SystemInfoComponent
  },
  {
    path: 'status',
    component: SystemStatusComponent
  },
  {
    path: '**', // wildcard to match any non matching routes
    redirectTo: 'info'
  }
];

// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
export default routes;
