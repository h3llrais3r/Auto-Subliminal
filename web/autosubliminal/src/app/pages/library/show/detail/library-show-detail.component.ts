import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { appSettings } from '../../../../app-settings.service';
import { SettingsService } from '../../../../services/api/settings.service';
import { ShowService } from '../../../../services/api/show.service';
import { ArtworkService } from '../../../../services/artwork.service';
import { MessageService } from '../../../../services/message.service';
import { IconDropdownComponent } from '../../../../components/icon-dropdown/icon-dropdown.component';
import { MessageComponent } from '../../../../components/message/message.component';
import { ProgressBarComponent } from '../../../../components/progress-bar/progress-bar.component';
import { ShowSettingsComponent } from '../../../../components/show-settings/show-settings.component';
import { SubtitleSyncComponent } from '../../../../components/subtitle-sync/subtitle-sync.component';
import { FileType } from '../../../../models/filetype';
import { Show, ShowEpisodeFile } from '../../../../models/show';
import { VideoSubtitles } from '../../../../models/video';
import { getPlayVideoUrl, getPosterPlaceholderUrl, getTvdbUrl } from '../../../../utils/common-utils';
import { joinPaths } from '../../../../utils/path-utils';
import { LibraryScanningComponent } from '../../scanning/library-scanning.component';
import { LibraryVideoSubtitlesComponent } from '../../video/library-video-subtitles.component';

@Component({
  selector: 'app-library-show-detail',
  templateUrl: './library-show-detail.component.html',
  styleUrls: ['./library-show-detail.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, PanelModule, TableModule, ButtonModule, ConfirmDialogModule, SharedModule, LazyLoadImageModule, LibraryScanningComponent, MessageComponent, ProgressBarComponent, IconDropdownComponent, ShowSettingsComponent, SubtitleSyncComponent, LibraryVideoSubtitlesComponent]
})
export class LibraryShowDetailComponent implements OnInit {

  readonly videoFileType = FileType.VIDEO;
  readonly subtitleFileType = FileType.SUBTITLE;

  show: Show;
  loading = false;
  refreshInProgress = false;
  showShowSettings = false;
  showVideoSubtitles = false;
  showSubtitleSync = false;
  manualSubSyncEnabled = false;
  libraryEditModeEnabled = false;
  videoSubtitles: VideoSubtitles;
  episodeVideoFilePath: string;
  episodeSubtitleFilePath: string;
  episodeTvdbId: number;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private domSanitizer = inject(DomSanitizer);
  private showService = inject(ShowService);
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
        const tvdbId = Number(paramMap.get('tvdbId'));
        this.getShowDetails(tvdbId);
      }
    });
  }

  getShowPosterFullSizeUrl(): string {
    return this.artworkService.getShowPosterFullSizeUrl(this.show.tvdbId);
  }

  getShowPosterThumbnailUrl(): string {
    return this.artworkService.getShowPosterThumbnailUrl(this.show.tvdbId);
  }

  getPosterPlaceholderUrl(): string {
    return getPosterPlaceholderUrl();
  }

  getTvdbUrl(): string {
    return getTvdbUrl(this.show.tvdbId);
  }

  getPlayVideoUrl(filePath: string, fileName: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(getPlayVideoUrl(filePath, fileName));
  }

  openSettingsDialog(): void {
    this.showShowSettings = true;
  }

  refreshShowDetails(): void {
    this.refreshInProgress = true;
    this.showService.refreshShowDetails(this.show.tvdbId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.getShowDetails(this.show.tvdbId);
        this.refreshInProgress = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to refresh the show details!')
    });
  }

  openDeleteDialog(): void {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete <b>${this.show.name}</b>?`,
      accept: () => {
        this.showService.deleteShow(this.show.tvdbId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: () => this.router.navigateByUrl('/library/show'),
          error: () => this.messageService.showErrorMessage(`Unable to delete the show ${this.show.name}!`)
        });
      }
    });
  }

  openDeleteSubtitleDialog(episodeTvdbId: number, filePath: string, fileName: string): void {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete the subtitle<br><b>${fileName}</b>?`,
      accept: () => {
        this.showService.deleteShowEpisodeSubtitle(this.show.tvdbId, episodeTvdbId, joinPaths(filePath, fileName)).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: () => {
            // Reload details
            this.getShowDetails(this.show.tvdbId);
            this.messageService.showSuccessMessage(`Deleted ${fileName}.`);
          },
          error: () => this.messageService.showErrorMessage(`Unable to delete the subtitle ${fileName}!`)
        });
      }
    });
  }

  addShowPathToVideoPaths(): void {
    const videoPath = { videoPath: this.show.path };
    this.settingsService.updateGeneralSetting('videoPaths', videoPath).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.messageService.showSuccessMessage(`Path ${this.show.path} added to the video paths.`);
        this.getShowDetails(this.show.tvdbId);
      },
      error: (error) => {
        if (error.status && error.status === 409) {
          this.messageService.showWarningMessage(`Path ${this.show.path} already added to the video paths.`);
        } else {
          this.messageService.showErrorMessage(`Unable to add path ${this.show.path} to the video paths!`);
        }
      }
    });
  }

  openVideoSubtitlesDialog(episodeTvdbId: number, fileLocation: string, fileName: string, languages: string[]): void {
    this.episodeTvdbId = episodeTvdbId; // keep track for which episode the video subtitles are edited
    this.videoSubtitles = new VideoSubtitles();
    this.videoSubtitles.fileLocation = fileLocation;
    this.videoSubtitles.fileName = fileName;
    this.videoSubtitles.languages = languages;
    this.showVideoSubtitles = true;
  }

  closeVideoSubtitlesDialog(): void {
    this.showVideoSubtitles = false;
    this.videoSubtitles = null;
    this.episodeTvdbId = null;
  }

  openSubtitleSyncDialog(videoFilePath: string, subtitleFilePath: string): void {
    this.episodeVideoFilePath = videoFilePath;
    this.episodeSubtitleFilePath = subtitleFilePath;
    this.showSubtitleSync = true;
  }

  saveHardcodedSubtitles(videoSubtitles: VideoSubtitles): void {
    this.showService.saveShowEpisodeHardcodedSubtitles(this.show.tvdbId, this.episodeTvdbId, videoSubtitles).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.closeVideoSubtitlesDialog();
        this.getShowDetails(this.show.tvdbId);
      },
      error: () => this.messageService.showErrorMessage('Unable to save the harcoded subtitles!')
    });
  }

  getNrOfSubtitles(files: ShowEpisodeFile[], language: string): string {
    let subtitleCount = 0;
    files.forEach((file) => {
      if (file.type === FileType.SUBTITLE && file.language && file.language === language) {
        // A subtitle file can have only 1 language
        subtitleCount++;
      } else if (file.type === FileType.VIDEO) {
        // A video file can have multiple hardcoded languages
        if (file.hardcodedLanguages) {
          file.hardcodedLanguages.forEach((harcodedLanguage) => {
            if (harcodedLanguage === language) {
              subtitleCount++;
            }
          });
        }
        // A video file can have multiple embedded languages
        if (file.embeddedLanguages) {
          file.embeddedLanguages.forEach((embeddedLanguage) => {
            if (embeddedLanguage === language) {
              subtitleCount++;
            }
          });
        }
      }
    });
    return subtitleCount.toString(); // must be string to be used as badge
  }

  getNrOfVideos(files: ShowEpisodeFile[]): string {
    let videoCount = 0;
    files.forEach((file) => {
      if (file.type === FileType.VIDEO) {
        videoCount++;
      }
    });
    return videoCount.toString(); // must be string to be used as badge
  }

  private getShowDetails(tvdbId: number): void {
    this.showService.getShowDetails(tvdbId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (show) => {
        this.show = show;
        this.loading = false;
      },
      error: () => this.messageService.showErrorMessage('Unable to get the show details!')
    });
  }
}
