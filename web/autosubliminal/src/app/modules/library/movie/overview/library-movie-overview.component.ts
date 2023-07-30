import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule, SortEvent } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { appSettings } from '../../../../app-settings.service';
import { MovieService } from '../../../../core/services/api/movie.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { MessageService } from '../../../../core/services/message.service';
import { SystemEventService } from '../../../../core/services/system-event.service';
import { ProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar.component';
import { TableFilterComponent } from '../../../../shared/components/table-filter/table-filter.component';
import { Movie } from '../../../../shared/models/movie';
import { naturalSort } from '../../../../shared/utils/table-utils';
import { LibraryScanningComponent } from '../../scanning/library-scanning.component';

@Component({
  selector: 'app-library-movie-overview',
  templateUrl: './library-movie-overview.component.html',
  styleUrls: ['./library-movie-overview.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, PanelModule, TableModule, ButtonModule, SharedModule, LazyLoadImageModule, LibraryScanningComponent, TableFilterComponent, ProgressBarComponent]
})
export class LibraryMovieOverviewComponent implements OnInit {

  movies: Movie[];
  nrOfMovies = 0;
  loading = false;
  globalFilterFields = ['title', 'year', 'path', 'settings.wantedLanguages', 'totalSubtitlesAvailable'];
  tableStateKey = 'autosubliminal-library-movie-overview-table';

  private systemEventService = inject(SystemEventService);
  private movieService = inject(MovieService);
  private artworkService = inject(ArtworkService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // Load overview
    this.loadOverview();
    // Subscribe on scanLibrary finish events to reload the overview
    this.systemEventService.schedulerFinish$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanLibrary) {
          this.loadOverview();
        }
      }
    });
  }

  sort(event: SortEvent): void {
    naturalSort(event);
  }

  getMoviePosterThumbnailUrl(imdbId: string): string {
    return this.artworkService.getMoviePosterThumbnailUrl(imdbId);
  }

  getPosterPlaceholderUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }

  private loadOverview(): void {
    this.loading = true;
    this.movieService.getMovies().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (movies) => {
        this.movies = movies;
        this.nrOfMovies = this.movies.length;
        this.loading = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to get the movies!')
    });
  }
}
