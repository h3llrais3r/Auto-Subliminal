import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
