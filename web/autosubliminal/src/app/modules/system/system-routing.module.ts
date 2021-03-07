import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
