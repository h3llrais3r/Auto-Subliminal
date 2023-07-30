import { Routes } from '@angular/router';
import { LibraryMovieDetailComponent } from './movie/detail/library-movie-detail.component';
import { LibraryMovieOverviewComponent } from './movie/overview/library-movie-overview.component';
import { LibraryOverviewComponent } from './overview/library-overview.component';
import { LibraryShowDetailComponent } from './show/detail/library-show-detail.component';
import { LibraryShowOverviewComponent } from './show/overview/library-show-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: LibraryOverviewComponent
  },
  {
    path: 'show',
    children: [
      {
        path: 'overview',
        component: LibraryShowOverviewComponent
      },
      {
        path: 'detail/:tvdbId',
        component: LibraryShowDetailComponent
      }
    ]
  },
  {
    path: 'movie',
    children: [
      {
        path: 'overview',
        component: LibraryMovieOverviewComponent
      },
      {
        path: 'detail/:imdbId',
        component: LibraryMovieDetailComponent
      }
    ]
  },
  {
    path: '**', // wildcard to match any non matching routes
    redirectTo: 'overview'
  }
];

// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
export default routes;
