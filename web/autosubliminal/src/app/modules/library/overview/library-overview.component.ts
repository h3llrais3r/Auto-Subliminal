import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { forkJoin } from 'rxjs';
import { appSettings } from '../../../app-settings.service';
import { MovieService } from '../../../core/services/api/movie.service';
import { ShowService } from '../../../core/services/api/show.service';
import { MessageService } from '../../../core/services/message.service';
import { SystemEventService } from '../../../core/services/system-event.service';
import { MoviesOverview } from '../../../shared/models/movie';
import { ShowsOverview } from '../../../shared/models/show';

@Component({
  selector: 'app-library-overview',
  templateUrl: './library-overview.component.html',
  styleUrls: ['./library-overview.component.scss']
})
export class LibraryOverviewComponent implements OnInit {

  loading = false;
  showsOverview: ShowsOverview;
  moviesOverview: MoviesOverview;

  private systemEventService = inject(SystemEventService);
  private showService = inject(ShowService);
  private movieService = inject(MovieService);
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

  private loadOverview(): void {
    this.loading = true;
    // Load shows and movies overview
    forkJoin([this.showService.getShowsOverview(), this.movieService.getMoviesOverview()]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: ([showsOverview, moviesOverview]) => {
        this.showsOverview = showsOverview;
        this.moviesOverview = moviesOverview;
        this.loading = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to get the library overview!')
    });
  }
}
