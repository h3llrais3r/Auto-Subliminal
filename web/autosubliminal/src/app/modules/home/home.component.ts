import { Component, OnInit } from '@angular/core';
import { WantedTotals } from '../../shared/models/wanted';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  total = 0;
  totalShows = 0;
  totalMovies = 0;

  constructor() { }

  ngOnInit(): void { }

  getTotals(wantedTotals: WantedTotals): void {
    this.total = wantedTotals.total;
    this.totalShows = wantedTotals.totalShows;
    this.totalMovies = wantedTotals.totalMovies;
  }

  getWantedHeader(): string {
    return `Wanted (${this.total}) - Shows (${this.totalShows}) - Movies (${this.totalMovies})`;
  }
}
