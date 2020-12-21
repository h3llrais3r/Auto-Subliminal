import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemInfoComponent } from './info/system-info.component';
import { SystemRestartComponent } from './restart/system-restart.component';
import { SystemShutdownComponent } from './shutdown/system-shutdown.component';
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
    path: 'restart',
    component: SystemRestartComponent
  },
  {
    path: 'shutdown',
    component: SystemShutdownComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
