import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../../../core/services/api/show.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { Show } from '../../../../shared/models/show';

@Component({
  selector: 'app-library-show-overview',
  templateUrl: './library-show-overview.component.html',
  styleUrls: ['./library-show-overview.component.scss']
})
export class LibraryShowOverviewComponent implements OnInit {

  shows: Show[];

  constructor(private showService: ShowService, private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.showService.getShows().subscribe(result => this.shows = result);
  }

  getShowBannerUrl(tvdbId: number): string {
    return this.artworkService.getShowBannerThumbnailUrl(tvdbId);
  }

  getDefaultBannerUrl(): string {
    return 'assets/banner-placeholder.jpg';
  }
}
