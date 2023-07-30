import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { forkJoin } from 'rxjs';
import { appSettings } from '../../../app-settings.service';
import { MovieService } from '../../../services/api/movie.service';
import { ShowService } from '../../../services/api/show.service';
import { MessageService } from '../../../services/message.service';
import { SystemEventService } from '../../../services/system-event.service';
import { IconDropdownComponent } from '../../../components/icon-dropdown/icon-dropdown.component';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';
import { MoviesOverview } from '../../../models/movie';
import { ShowsOverview } from '../../../models/show';
import { LibraryScanningComponent } from '../scanning/library-scanning.component';

@Component({
  selector: 'app-library-overview',
  templateUrl: './library-overview.component.html',
  styleUrls: ['./library-overview.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, PanelModule, LibraryScanningComponent, IconDropdownComponent, ProgressBarComponent]
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
