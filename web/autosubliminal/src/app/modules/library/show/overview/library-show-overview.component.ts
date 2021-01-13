import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { ShowService } from '../../../../core/services/api/show.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { Show } from '../../../../shared/models/show';
import { naturalSort } from '../../../../shared/utils/table-utils';

@Component({
  selector: 'app-library-show-overview',
  templateUrl: './library-show-overview.component.html',
  styleUrls: ['./library-show-overview.component.scss']
})
export class LibraryShowOverviewComponent implements OnInit {

  shows: Show[];
  nrOfShows = 0;
  globalFilterFields = ['title', 'year', 'path', 'settings.wantedLanguages', 'totalSubtitlesAvailable'];
  tableStateKey = 'autosubliminal-library-show-overview-table';
  loading = false;

  constructor(private showService: ShowService, private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.loading = true;
    this.showService.getShows().subscribe(result => {
      this.shows = result;
      this.nrOfShows = this.shows.length;
      this.loading = false;
    });
  }

  sort(event: SortEvent): void {
    naturalSort(event);
  }

  getShowBannerUrl(tvdbId: number): string {
    return this.artworkService.getShowBannerThumbnailUrl(tvdbId);
  }

  getDefaultBannerUrl(): string {
    return 'assets/banner-placeholder.jpg';
  }
}
