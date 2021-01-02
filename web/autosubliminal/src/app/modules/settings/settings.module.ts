import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SettingsGeneralComponent } from './general/settings-general.component';
import { SettingsLoggingComponent } from './logging/settings-logging.component';
import { SettingsNamemappingComponent } from './namemapping/settings-namemapping.component';
import { SettingsPostprocessingComponent } from './postprocessing/settings-postprocessing.component';
import { ConfigRoutingModule } from './settings-routing.module';
import { SettingsSkipmappingComponent } from './skipmapping/settings-skipmapping.component';
import { SettingsWebserverComponent } from './webserver/settings-webserver.component';
import { SettingsSubliminalComponent } from './subliminal/settings-subliminal.component';

@NgModule({
  declarations: [
    SettingsGeneralComponent,
    SettingsLoggingComponent,
    SettingsWebserverComponent,
    SettingsNamemappingComponent,
    SettingsSkipmappingComponent,
    SettingsPostprocessingComponent,
    SettingsSubliminalComponent
  ],
  imports: [
    SharedModule,
    ConfigRoutingModule
  ]
})
export class SettingsModule { }
