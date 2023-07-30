import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeSearchComponent } from './search/home-search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: HomeSearchComponent
  },
  {
    path: '**', // wildcard to match any non matching routes
    redirectTo: ''
  }
];

// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
export default routes;
