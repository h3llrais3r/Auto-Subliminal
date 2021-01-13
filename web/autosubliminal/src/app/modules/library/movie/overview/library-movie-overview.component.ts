import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { MovieService } from '../../../../core/services/api/movie.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { Movie } from '../../../../shared/models/movie';
import { naturalSort } from '../../../../shared/utils/table-utils';

@Component({
  selector: 'app-library-movie-overview',
  templateUrl: './library-movie-overview.component.html',
  styleUrls: ['./library-movie-overview.component.scss']
})
export class LibraryMovieOverviewComponent implements OnInit {

  movies: Movie[];
  globalFilterFields = ['title', 'year', 'path', 'settings.wantedLanguages', 'totalSubtitlesAvailable'];
  loading = false;

  constructor(private movieService: MovieService, private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.loading = true;
    this.movieService.getMovies().subscribe(result => {
      this.movies = result;
      this.loading = false;
    });
  }

  sort(event: SortEvent): void {
    naturalSort(event);
  }

  getMoviePosterUrl(imdbId: string): string {
    return this.artworkService.getMoviePosterThumbnailUrl(imdbId);
  }

  getDefaultPosterUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }
}
