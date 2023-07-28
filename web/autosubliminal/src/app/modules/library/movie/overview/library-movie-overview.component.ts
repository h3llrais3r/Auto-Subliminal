import { Component, OnDestroy, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { appSettings } from '../../../../app-settings.service';
import { MovieService } from '../../../../core/services/api/movie.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { MessageService } from '../../../../core/services/message.service';
import { SystemEventService } from '../../../../core/services/system-event.service';
import { Movie } from '../../../../shared/models/movie';
import { naturalSort } from '../../../../shared/utils/table-utils';

@Component({
  selector: 'app-library-movie-overview',
  templateUrl: './library-movie-overview.component.html',
  styleUrls: ['./library-movie-overview.component.scss']
})
export class LibraryMovieOverviewComponent implements OnInit, OnDestroy {

  loading = false;
  movies: Movie[];
  nrOfMovies = 0;
  globalFilterFields = ['title', 'year', 'path', 'settings.wantedLanguages', 'totalSubtitlesAvailable'];
  tableStateKey = 'autosubliminal-library-movie-overview-table';

  private scanLibrarySubscription: Subscription;

  constructor(
    private systemEventService: SystemEventService,
    private movieService: MovieService,
    private artworkService: ArtworkService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    // Load overview
    this.loadOverview();
    // Subscribe on scanLibrary finish events to reload the overview
    this.scanLibrarySubscription = this.systemEventService.schedulerFinish$.subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanLibrary) {
          this.loadOverview();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.scanLibrarySubscription.unsubscribe();
  }

  private loadOverview(): void {
    this.loading = true;
    this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.nrOfMovies = this.movies.length;
        this.loading = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to get the movies!')
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
}
