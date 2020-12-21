import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LogRoutingModule } from './log-routing.module';
import { LogViewComponent } from './view/log-view.component';
import { LogClearComponent } from './clear/log-clear.component';

@NgModule({
  declarations: [
    LogViewComponent,
    LogClearComponent
  ],
  imports: [
    SharedModule,
    LogRoutingModule
  ]
})
export class LogModule { }
