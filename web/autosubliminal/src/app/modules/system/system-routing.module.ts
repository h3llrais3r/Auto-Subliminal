import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemStatusComponent } from './status/system-status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'status',
    pathMatch: 'full'
  },
  {
    path: 'status',
    component: SystemStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
