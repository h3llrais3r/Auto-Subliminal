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
import { ShowService } from '../../../../core/services/api/show.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { MessageService } from '../../../../core/services/message.service';
import { SystemEventService } from '../../../../core/services/system-event.service';
import { ProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar.component';
import { TableFilterComponent } from '../../../../shared/components/table-filter/table-filter.component';
import { Show } from '../../../../shared/models/show';
import { getBannerPlaceholderUrl } from '../../../../shared/utils/common-utils';
import { naturalSort } from '../../../../shared/utils/table-utils';
import { LibraryScanningComponent } from '../../scanning/library-scanning.component';

@Component({
  selector: 'app-library-show-overview',
  templateUrl: './library-show-overview.component.html',
  styleUrls: ['./library-show-overview.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, PanelModule, TableModule, ButtonModule, SharedModule, LazyLoadImageModule, LibraryScanningComponent, TableFilterComponent, ProgressBarComponent]
})
export class LibraryShowOverviewComponent implements OnInit {

  shows: Show[];
  nrOfShows = 0;
  loading = false;
  globalFilterFields = ['title', 'year', 'path', 'settings.wantedLanguages', 'totalSubtitlesAvailable'];
  tableStateKey = 'autosubliminal-library-show-overview-table';

  private systemEventService = inject(SystemEventService);
  private showService = inject(ShowService);
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

  getShowBannerThumbnailUrl(tvdbId: number): string {
    return this.artworkService.getShowBannerThumbnailUrl(tvdbId);
  }

  getBannerPlaceholderUrl(): string {
    return getBannerPlaceholderUrl();
  }

  private loadOverview(): void {
    this.loading = true;
    this.showService.getShows().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (shows) => {
        this.shows = shows;
        this.nrOfShows = this.shows.length;
        this.loading = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to get the shows!')
    });
  }
}
