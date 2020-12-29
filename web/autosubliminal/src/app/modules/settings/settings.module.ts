import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SettingsGeneralComponent } from './general/settings-general.component';
import { ConfigRoutingModule } from './settings-routing.module';
import { SettingsLoggingComponent } from './logging/settings-logging.component';

@NgModule({
  declarations: [
    SettingsGeneralComponent,
    SettingsLoggingComponent
  ],
  imports: [
    SharedModule,
    ConfigRoutingModule
  ]
})
export class SettingsModule { }
