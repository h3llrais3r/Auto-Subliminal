import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryMovieOverviewComponent } from './movie/overview/library-movie-overview.component';
import { LibraryOverviewComponent } from './overview/library-overview.component';
import { LibraryShowOverviewComponent } from './show/overview/library-show-overview.component';

@NgModule({
  declarations: [
    LibraryOverviewComponent,
    LibraryShowOverviewComponent,
    LibraryMovieOverviewComponent
  ],
  imports: [
    SharedModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
