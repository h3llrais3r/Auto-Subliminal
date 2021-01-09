import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SystemInfoComponent } from './info/system-info.component';
import { SystemStatusComponent } from './status/system-status.component';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  declarations: [
    SystemInfoComponent,
    SystemStatusComponent
  ],
  imports: [
    SharedModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
