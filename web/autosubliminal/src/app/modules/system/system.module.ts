import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SystemInfoComponent } from './info/system-info.component';
import { SystemRestartComponent } from './restart/system-restart.component';
import { SystemShutdownComponent } from './shutdown/system-shutdown.component';
import { SystemStatusComponent } from './status/system-status.component';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  declarations: [
    SystemInfoComponent,
    SystemStatusComponent,
    SystemRestartComponent,
    SystemShutdownComponent
  ],
  imports: [
    SharedModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
