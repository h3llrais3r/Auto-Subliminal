import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryMovieOverviewComponent } from './movie/overview/library-movie-overview.component';
import { LibraryOverviewComponent } from './overview/library-overview.component';
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
      }
    ]
  },
  {
    path: 'movie',
    children: [
      {
        path: 'overview',
        component: LibraryMovieOverviewComponent
      }
    ]
  },
  {
    path: '**', // wildcard to match any non matching routes
    redirectTo: 'overview'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
