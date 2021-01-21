import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { appSettings } from '../../../../app-settings.service';
import { SettingsService } from '../../../../core/services/api/settings.service';
import { ShowService } from '../../../../core/services/api/show.service';
import { ArtworkService } from '../../../../core/services/artwork.service';
import { FileType } from '../../../../shared/models/filetype';
import { Show, ShowFile } from '../../../../shared/models/show';
import { VideoSubtitles } from '../../../../shared/models/video';

@Component({
  selector: 'app-library-show-detail',
  templateUrl: './library-show-detail.component.html',
  styleUrls: ['./library-show-detail.component.scss']
})
export class LibraryShowDetailComponent implements OnInit {

  show: Show;
  loading = false;
  refreshInProgress = false;
  showShowSettings = false;
  showVideoSubtitles = false;
  videoSubtitles: VideoSubtitles;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private showService: ShowService,
    private artworkService: ArtworkService,
    private settingsService: SettingsService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (paramMap) => {
        this.loading = true;
        const tvdbId = Number(paramMap.get('tvdbId'));
        this.getShowDetails(tvdbId);
      });
  }

  getShowPosterFullSizeUrl(): string {
    return this.artworkService.getShowPosterFullSizeUrl(this.show.tvdbId);
  }

  getShowPosterThumbnailUrl(): string {
    return this.artworkService.getShowPosterThumbnailUrl(this.show.tvdbId);
  }

  getPosterPlaceholderUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }

  getTvdbUrl(): string {
    return `${appSettings.tvdbUrl}${this.show.tvdbId}`;
  }

  getPlayVideoUrl(filePath: string, fileName: string): string {
    return `playvideo://${filePath}${appSettings.pathSeparator}${fileName}`;
  }

  openSettingsDialog(): void {
    this.showShowSettings = true;
  }

  refreshShowDetails(): void {
    this.refreshInProgress = true;
    this.showService.refreshShowDetails(this.show.tvdbId).subscribe(
      () => {
        this.getShowDetails(this.show.tvdbId);
        this.refreshInProgress = false;
      });
  }

  openDeleteDialog(): void {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete <b>${this.show.name}</b>?`,
      accept: () => {
        this.showService.deleteShow(this.show.tvdbId).subscribe(
          () => {
            this.router.navigateByUrl('/library/show');
          });
      }
    });
  }

  addShowPathToVideoPaths(): void {
    const videoPath = { videoPath: this.show.path };
    this.settingsService.updateGeneralSetting('videoPaths', videoPath).subscribe(
      () => {
        this.getShowDetails(this.show.tvdbId);
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

  saveHardcodedSubtitles(episodeTvdbId: number, videoSubtitles: VideoSubtitles): void {
    this.showService.saveShowHardcodedSubtitles(this.show.tvdbId, episodeTvdbId, videoSubtitles).subscribe(
      () => {
        this.closeVideoSubtitlesDialog();
        this.getShowDetails(this.show.tvdbId);
      });
  }

  getNrOfSubtitles(files: ShowFile[], language: string): string {
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

  getNrOfVideos(files: ShowFile[]): string {
    let videoCount = 0;
    files.forEach((file) => {
      if (file.type === FileType.VIDEO) {
        videoCount++;
      }
    });
    return videoCount.toString(); // must be string to be used as badge
  }

  private getShowDetails(tvdbId: number): void {
    this.showService.getShowDetails(tvdbId).subscribe(
      (show) => {
        this.show = show;
        this.loading = false;
      });
  }
}
