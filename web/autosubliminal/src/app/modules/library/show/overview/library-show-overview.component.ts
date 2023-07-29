import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SortEvent } from 'primeng/api';
import { appSettings } from '../../../../app-settings.service';
import { ShowService } from '../../../../core/services/api/show.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { MessageService } from '../../../../core/services/message.service';
import { SystemEventService } from '../../../../core/services/system-event.service';
import { Show } from '../../../../shared/models/show';
import { getBannerPlaceholderUrl } from '../../../../shared/utils/common-utils';
import { naturalSort } from '../../../../shared/utils/table-utils';

@Component({
  selector: 'app-library-show-overview',
  templateUrl: './library-show-overview.component.html',
  styleUrls: ['./library-show-overview.component.scss']
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
