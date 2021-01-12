import { Component, OnInit } from '@angular/core';
import { appSettings } from '../../../app-settings.service';
import { MovieService } from '../../../core/services/api/movie.service';
import { ShowService } from '../../../core/services/api/show.service';
import { SystemService } from '../../../core/services/api/system.service';
import { SystemEventService } from '../../../core/services/system-event.service';
import { MoviesOverview } from '../../../shared/models/movie';
import { ShowsOverview } from '../../../shared/models/show';

@Component({
  selector: 'app-library-overview',
  templateUrl: './library-overview.component.html',
  styleUrls: ['./library-overview.component.scss']
})
export class LibraryOverviewComponent implements OnInit {

  scanningInProgress = false;
  showsOverview: ShowsOverview;
  moviesOverview: MoviesOverview;

  constructor(
    private systemService: SystemService,
    private systemEventService: SystemEventService,
    private showService: ShowService,
    private movieService: MovieService) { }

  ngOnInit(): void {
    // Check if library scanner is running
    this.systemService.getScheduler(appSettings.scanLibrary).subscribe(
      result => {
        this.scanningInProgress = result.running;
      });
    // Subscribe on scheduler finish events to check if library scanner is started
    this.systemEventService.schedulerStart.subscribe(
      result => {
        this.scanningInProgress = result.name === appSettings.scanLibrary ? true : this.scanningInProgress;
      });
    // Subscribe on scheduler finish events to check if library scanner is finished
    this.systemEventService.schedulerFinish.subscribe(
      result => {
        this.scanningInProgress = result.name === appSettings.scanLibrary ? false : this.scanningInProgress;
      });
    // Get shows overview
    this.showService.getShowsOverview().subscribe(
      result => {
        this.showsOverview = result;
      });
    // Get movies overview
    this.movieService.getMoviesOverview().subscribe(
      result => {
        this.moviesOverview = result;
      });
  }
}
