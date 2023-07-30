import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { appSettings } from '../../../../app-settings.service';
import { MovieService } from '../../../../core/services/api/movie.service';
import { SettingsService } from '../../../../core/services/api/settings.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { MessageService } from '../../../../core/services/message.service';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { MovieSettingsComponent } from '../../../../shared/components/movie-settings/movie-settings.component';
import { ProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar.component';
import { SubtitleSyncComponent } from '../../../../shared/components/subtitle-sync/subtitle-sync.component';
import { FileType } from '../../../../shared/models/filetype';
import { Movie } from '../../../../shared/models/movie';
import { VideoSubtitles } from '../../../../shared/models/video';
import { getImdbUrl, getPlayVideoUrl, getPosterPlaceholderUrl } from '../../../../shared/utils/common-utils';
import { joinPaths } from '../../../../shared/utils/path-utils';
import { LibraryScanningComponent } from '../../scanning/library-scanning.component';
import { LibraryVideoSubtitlesComponent } from '../../video/library-video-subtitles.component';

@Component({
  selector: 'app-library-movie-detail',
  templateUrl: './library-movie-detail.component.html',
  styleUrls: ['./library-movie-detail.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, PanelModule, TableModule, ConfirmDialogModule, SharedModule, LazyLoadImageModule, LibraryScanningComponent, MessageComponent, MovieSettingsComponent, SubtitleSyncComponent, LibraryVideoSubtitlesComponent, ProgressBarComponent]
})
export class LibraryMovieDetailComponent implements OnInit {

  readonly videoFileType = FileType.VIDEO;
  readonly subtitleFileType = FileType.SUBTITLE;

  movie: Movie;
  loading = false;
  refreshInProgress = false;
  showMovieSettings = false;
  showVideoSubtitles = false;
  showSubtitleSync = false;
  manualSubSyncEnabled = false;
  libraryEditModeEnabled = false;
  videoSubtitles: VideoSubtitles;
  movieVideoFilePath: string;
  movieSubtitleFilePath: string;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private domSanitizer = inject(DomSanitizer);
  private movieService = inject(MovieService);
  private artworkService = inject(ArtworkService);
  private settingsService = inject(SettingsService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.manualSubSyncEnabled = appSettings.manualSubSync;
    this.libraryEditModeEnabled = appSettings.libraryEditMode;
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (paramMap) => {
        this.loading = true;
        const imdbId = paramMap.get('imdbId');
        this.getMovieDetails(imdbId);
      }
    });
  }

  getMoviePosterFullSizeUrl(): string {
    return this.artworkService.getMoviePosterFullSizeUrl(this.movie.imdbId);
  }

  getMoviePosterThumbnailUrl(): string {
    return this.artworkService.getMoviePosterThumbnailUrl(this.movie.imdbId);
  }

  getPosterPlaceholderUrl(): string {
    return getPosterPlaceholderUrl();
  }

  getImdbUrl(): string {
    return getImdbUrl(this.movie.imdbId);
  }

  getPlayVideoUrl(filePath: string, fileName: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(getPlayVideoUrl(filePath, fileName));
  }

  openSettingsDialog(): void {
    this.showMovieSettings = true;
  }

  refreshMovieDetails(): void {
    this.refreshInProgress = true;
    this.movieService.refreshMovieDetails(this.movie.imdbId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.getMovieDetails(this.movie.imdbId);
        this.refreshInProgress = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to refresh the movie details!')
    });
  }

  openDeleteDialog(): void {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete <b>${this.movie.name}</b>?`,
      accept: () => {
        this.movieService.deleteMovie(this.movie.imdbId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: () => {
            this.router.navigateByUrl('/library/movie');
          },
          error: () => this.messageService.showErrorMessage(`Unable to delete the movie ${this.movie.name}!`)
        });
      }
    });
  }

  openDeleteSubtitleDialog(filePath: string, fileName: string): void {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete the subtitle<br><b>${fileName}</b>?`,
      accept: () => {
        this.movieService.deleteMovieSubtitle(this.movie.imdbId, joinPaths(filePath, fileName)).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: () => {
            // Reload details
            this.getMovieDetails(this.movie.imdbId);
            this.messageService.showSuccessMessage(`Deleted ${fileName}.`);
          },
          error: () => this.messageService.showErrorMessage(`Unable to delete the subtitle ${fileName}!`)
        });
      }
    });
  }

  addMoviePathToVideoPaths(): void {
    const videoPath = { videoPath: this.movie.path };
    this.settingsService.updateGeneralSetting('videoPaths', videoPath).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.messageService.showSuccessMessage(`Path ${this.movie.path} added to the video paths.`);
        this.getMovieDetails(this.movie.imdbId);
      },
      error: (error) => {
        if (error.status && error.status === 409) {
          this.messageService.showInfoMessage(`Path ${this.movie.path} already added to the video paths.`);
        } else {
          this.messageService.showErrorMessage(`Unable to add path ${this.movie.path} to the video paths!`);
        }
      }
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

  openSubtitleSyncDialog(videoFilePath: string, subtitleFilepath: string): void {
    this.movieVideoFilePath = videoFilePath;
    this.movieSubtitleFilePath = subtitleFilepath;
    this.showSubtitleSync = true;
  }

  saveHardcodedSubtitles(videoSubtitles: VideoSubtitles): void {
    this.movieService.saveMovieHardcodedSubtitles(this.movie.imdbId, videoSubtitles).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.closeVideoSubtitlesDialog();
        this.getMovieDetails(this.movie.imdbId);
      },
      error: () => this.messageService.showErrorMessage('Unable to save the hardcoded subtitles!')
    });
  }

  private getMovieDetails(imdbId: string): void {
    this.movieService.getMovieDetails(imdbId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.loading = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to get the movie details!')
    });
  }
}
