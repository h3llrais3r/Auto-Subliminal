import { Routes } from '@angular/router';
import { LogClearComponent } from './clear/log-clear.component';
import { LogViewComponent } from './view/log-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: LogViewComponent
  },
  {
    path: 'clear',
    component: LogClearComponent
  },
  {
    path: '**', // wildcard to match any non matching routes
    redirectTo: 'view'
  }
];

// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
export default routes;
