import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SettingsGeneralComponent } from './general/settings-general.component';
import { ConfigRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [
    SettingsGeneralComponent
  ],
  imports: [
    SharedModule,
    ConfigRoutingModule
  ]
})
export class SettingsModule { }
