import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../../core/services/api/movie.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'app-library-movie-overview',
  templateUrl: './library-movie-overview.component.html',
  styleUrls: ['./library-movie-overview.component.scss']
})
export class LibraryMovieOverviewComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(result => this.movies = result);
  }

  getMoviePosterUrl(imdbId: string): string {
    return this.artworkService.getMoviePosterThumbnailUrl(imdbId);
  }

  getDefaultPosterUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }
}
