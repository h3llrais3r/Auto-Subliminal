import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SettingsGeneralComponent } from './general/settings-general.component';
import { ConfigRoutingModule } from './settings-routing.module';
import { SettingsLoggingComponent } from './logging/settings-logging.component';
import { SettingsWebserverComponent } from './webserver/settings-webserver.component';
import { SettingsPostprocessingComponent } from './postprocessing/settings-postprocessing.component';
import { SettingsNamemappingComponent } from './namemapping/settings-namemapping.component';

@NgModule({
  declarations: [
    SettingsGeneralComponent,
    SettingsLoggingComponent,
    SettingsWebserverComponent,
    SettingsPostprocessingComponent,
    SettingsNamemappingComponent
  ],
  imports: [
    SharedModule,
    ConfigRoutingModule
  ]
})
export class SettingsModule { }
