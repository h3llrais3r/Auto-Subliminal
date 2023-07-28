import { Component, OnDestroy, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
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
export class LibraryShowOverviewComponent implements OnInit, OnDestroy {

  shows: Show[];
  nrOfShows = 0;
  globalFilterFields = ['title', 'year', 'path', 'settings.wantedLanguages', 'totalSubtitlesAvailable'];
  tableStateKey = 'autosubliminal-library-show-overview-table';
  loading = false;

  private scanLibrarySubscription: Subscription;

  constructor(
    private systemEventService: SystemEventService,
    private showService: ShowService,
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
    this.showService.getShows().subscribe({
      next: (shows) => {
        this.shows = shows;
        this.nrOfShows = this.shows.length;
        this.loading = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to get the shows!')
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
}
