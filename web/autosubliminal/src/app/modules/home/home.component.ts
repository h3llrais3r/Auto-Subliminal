import { Component } from '@angular/core';
import { WantedTotals } from '../../shared/models/wanted';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  total = 0;
  totalEpisodes = 0;
  totalMovies = 0;

  getTotals(wantedTotals: WantedTotals): void {
    this.total = wantedTotals.total;
    this.totalEpisodes = wantedTotals.totalEpisodes;
    this.totalMovies = wantedTotals.totalMovies;
  }

  getWantedHeader(): string {
    return `Wanted subtitles (${this.total}) - Episodes (${this.totalEpisodes}) - Movies (${this.totalMovies})`;
  }
}
