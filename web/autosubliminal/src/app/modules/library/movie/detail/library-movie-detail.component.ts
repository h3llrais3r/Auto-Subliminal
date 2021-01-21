import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { appSettings } from '../../../../app-settings.service';
import { MovieService } from '../../../../core/services/api/movie.service';
import { SettingsService } from '../../../../core/services/api/settings.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { Movie } from '../../../../shared/models/movie';
import { VideoSubtitles } from '../../../../shared/models/video';

@Component({
  selector: 'app-library-movie-detail',
  templateUrl: './library-movie-detail.component.html',
  styleUrls: ['./library-movie-detail.component.scss']
})
export class LibraryMovieDetailComponent implements OnInit {

  movie: Movie;
  loading = false;
  refreshInProgress = false;
  showMovieSettings = false;
  showVideoSubtitles = false;
  videoSubtitles: VideoSubtitles;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private movieService: MovieService,
    private artworkService: ArtworkService,
    private settingsService: SettingsService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (paramMap) => {
        this.loading = true;
        const imdbId = paramMap.get('imdbId');
        this.getMovieDetails(imdbId);
      });
  }

  getMoviePosterFullSizeUrl(): string {
    return this.artworkService.getMoviePosterFullSizeUrl(this.movie.imdbId);
  }

  getMoviePosterThumbnailUrl(): string {
    return this.artworkService.getMoviePosterThumbnailUrl(this.movie.imdbId);
  }

  getPosterPlaceholderUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }

  getImdbUrl(): string {
    return `${appSettings.imdbUrl}${this.movie.imdbId}`;
  }

  getPlayVideoUrl(filePath: string, fileName: string): string {
    return `playvideo://${filePath}${appSettings.pathSeparator}${fileName}`;
  }

  openSettingsDialog(): void {
    this.showMovieSettings = true;
  }

  refreshMovieDetails(): void {
    this.refreshInProgress = true;
    this.movieService.refreshMovieDetails(this.movie.imdbId).subscribe(
      () => {
        this.getMovieDetails(this.movie.imdbId);
        this.refreshInProgress = false;
      });
  }

  openDeleteDialog(): void {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete <b>${this.movie.name}</b>?`,
      accept: () => {
        this.movieService.deleteMovie(this.movie.imdbId).subscribe(
          () => {
            this.router.navigateByUrl('/library/movie');
          });
      }
    });
  }

  addMoviePathToVideoPaths(): void {
    const videoPath = { videoPath: this.movie.path };
    this.settingsService.updateGeneralSetting('videoPaths', videoPath).subscribe(
      () => {
        this.getMovieDetails(this.movie.imdbId);
      });
  }

  openVideoSubtitlesDialog(fileLocation: string, fileName: string, languages: string[]): void {
    this.videoSubtitles = new VideoSubtitles();
    this.videoSubtitles.fileLocation = fileLocation;
    this.videoSubtitles.fileName = fileName;
    this.videoSubtitles.languages = languages;
    this.showVideoSubtitles = true;
  }

  closeVideoSubtitlesDialog(): void {
    this.showVideoSubtitles = false;
    this.videoSubtitles = null;
  }

  saveHardcodedSubtitles(videoSubtitles: VideoSubtitles): void {
    this.movieService.saveMovieHardcodedSubtitles(this.movie.imdbId, videoSubtitles).subscribe(
      () => {
        this.closeVideoSubtitlesDialog();
        this.getMovieDetails(this.movie.imdbId);
      });
  }

  private getMovieDetails(imdbId: string): void {
    this.movieService.getMovieDetails(imdbId).subscribe(
      (movie) => {
        this.movie = movie;
        this.loading = false;
      });
  }
}
