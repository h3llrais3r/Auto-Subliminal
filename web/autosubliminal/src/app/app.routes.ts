import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes')
  },
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.routes')
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.routes')
  },
  {
    path: 'log',
    loadChildren: () => import('./pages/log/log.routes')
  },
  {
    path: 'system',
    loadChildren: () => import('./pages/system/system.routes')
  },
  {
    path: '**', // wildcard to match any non matching routes
    redirectTo: 'home'
  }
];

// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
export default routes;
