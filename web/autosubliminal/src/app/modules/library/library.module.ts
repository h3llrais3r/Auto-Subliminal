import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryOverviewComponent } from './overview/library-overview.component';

@NgModule({
  declarations: [
    LibraryOverviewComponent
  ],
  imports: [
    SharedModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
