import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryMovieDetailComponent } from './movie/detail/library-movie-detail.component';
import { LibraryMovieOverviewComponent } from './movie/overview/library-movie-overview.component';
import { LibraryOverviewComponent } from './overview/library-overview.component';
import { LibraryScanningComponent } from './scanning/library-scanning.component';
import { LibraryShowDetailComponent } from './show/detail/library-show-detail.component';
import { LibraryShowOverviewComponent } from './show/overview/library-show-overview.component';
import { LibraryVideoSubtitlesComponent } from './video/library-video-subtitles.component';

@NgModule({
  declarations: [
    LibraryScanningComponent,
    LibraryVideoSubtitlesComponent,
    LibraryOverviewComponent,
    LibraryShowOverviewComponent,
    LibraryShowDetailComponent,
    LibraryMovieOverviewComponent,
    LibraryMovieDetailComponent
  ],
  imports: [
    SharedModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
