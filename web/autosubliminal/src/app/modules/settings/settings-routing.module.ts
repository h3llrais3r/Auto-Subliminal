import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsGeneralComponent } from './general/settings-general.component';
import { SettingsLoggingComponent } from './logging/settings-logging.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full'
  },
  {
    path: 'general',
    component: SettingsGeneralComponent
  },
  {
    path: 'logging',
    component: SettingsLoggingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
