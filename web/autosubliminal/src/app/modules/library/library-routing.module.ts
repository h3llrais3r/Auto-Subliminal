import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryOverviewComponent } from './overview/library-overview.component';

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
    path: '**', // wildcard to match any non matching routes
    redirectTo: 'overview'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
