import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsGeneralComponent } from './general/settings-general.component';
import { SettingsLoggingComponent } from './logging/settings-logging.component';
import { SettingsNamemappingComponent } from './namemapping/settings-namemapping.component';
import { SettingsPostprocessingComponent } from './postprocessing/settings-postprocessing.component';
import { SettingsSkipmappingComponent } from './skipmapping/settings-skipmapping.component';
import { SettingsWebserverComponent } from './webserver/settings-webserver.component';

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
  },
  {
    path: 'webserver',
    component: SettingsWebserverComponent
  },
  {
    path: 'namemapping',
    component: SettingsNamemappingComponent
  },
  {
    path: 'skipmapping',
    component: SettingsSkipmappingComponent
  },
  {
    path: 'postprocessing',
    component: SettingsPostprocessingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
