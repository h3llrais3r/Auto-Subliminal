import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { appSettings } from '../../../app-settings.service';
import { ItemService } from '../../../core/services/api/item.service';
import { MessageService } from '../../../core/services/message.service';
import { WantedItem } from '../../../shared/models/item';
import { EpisodeScores, MovieScores } from '../../../shared/models/score';
import { Subtitle } from '../../../shared/models/subtitle';
import { getDereferUrl, getPlayVideoUrl } from '../../../shared/utils/common-utils';
import { toNumber } from '../../../shared/utils/number-utils';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  wantedItem: WantedItem;
  subtitles: Subtitle[] = []; // default empty array so we are able to show the number of subtitles
  language: string;
  subtitlePreview: string;
  savedSubtitle: Subtitle;

  searchInProgress = false;
  postProcessInProgress = false;
  showScoreDetailsDialog = false;
  showSubtitlePreviewDialog = false;
  showSubtitleSyncDialog = false;
  scores: MovieScores | EpisodeScores;
  matches: string[];
  score: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private itemService: ItemService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      (queryParamMap) => {
        const wantedItemId = toNumber(queryParamMap.get('wantedItemId'));
        this.language = queryParamMap.get('language');
        this.itemService.getWantedItem(wantedItemId).subscribe(
          (wantedItem) => {
            this.wantedItem = wantedItem;
            this.scores = this.wantedItem.isEpisode ? appSettings.episodeScores : appSettings.movieScores;
            this.searchSubtitles();
          },
          () => this.messageService.showErrorMessage(`Unable to get the wanted item with id ${wantedItemId}`)
        );
      });
  }

  searchSubtitles(): void {
    this.searchInProgress = true;
    this.subtitles = []; // reset subtitles
    this.itemService.searchWantedItemSubtitles(this.wantedItem.id, this.language).subscribe(
      (subtitles) => {
        this.subtitles = subtitles;
        this.searchInProgress = false;
        this.messageService.showInfoMessage(`${this.subtitles.length} subtitles found.`);
      },
      () => {
        this.searchInProgress = false;
        this.messageService.showErrorMessage('Unable to search subtitles!');
      }
    );
  }

  showScoreDetails(subtitle: Subtitle): void {
    this.score = subtitle.score;
    this.matches = subtitle.matches;
    this.showScoreDetailsDialog = true;
  }

  getScoreMatches(): string[] {
    const matches: string[] = [];
    if (this.matches.includes('hash')) {
      matches.push(`Hash: ${this.scores.hash}`);
    }
    if (this.matches.includes('title')) {
      matches.push(`Title: ${this.scores.title}`);
    }
    if (this.matches.includes('year')) {
      matches.push(`Year: ${this.scores.year}`);
    }
    // Only available for episodes
    if (this.wantedItem.isEpisode) {
      if (this.matches.includes('season')) {
        matches.push(`Season: ${(this.scores as EpisodeScores).season}`);
      }
      if (this.matches.includes('episode')) {
        matches.push(`Episode: ${(this.scores as EpisodeScores).episode}`);
      }
    }
    if (this.matches.includes('source')) {
      matches.push(`Source: ${this.scores.source}`);
    }
    if (this.matches.includes('resolution')) {
      matches.push(`Quality: ${this.scores.quality}`);
    }
    if (this.matches.includes('video_codec')) {
      matches.push(`Codec: ${this.scores.codec}`);
    }
    if (this.matches.includes('release_group')) {
      matches.push(`Release group: ${this.scores.releaseGroup}`);
    }
    if (this.matches.includes('hearing_impaired')) {
      matches.push(`Hearing impaired: ${this.scores.hearingImpaired}`);
    }
    return matches;
  }

  showSubtitlePreview(subtitle: Subtitle): void {
    this.subtitlePreview = subtitle.contentPreview;
    this.showSubtitlePreviewDialog = true;
  }

  getWebsiteUrl(subtitle: Subtitle): string {
    return getDereferUrl(subtitle.pageLink);
  }

  saveSubtitle(subtitle: Subtitle): void {
    this.itemService.saveWantedItemSubtitle(this.wantedItem.id, subtitle.subtitleIndex).subscribe(
      () => {
        this.savedSubtitle = subtitle;
        this.messageService.showInfoMessage('Subtitles saved.');
      },
      () => this.messageService.showErrorMessage('Unable to save the subtitle!')
    );
  }

  syncSubtitle(): void {
    this.showSubtitleSyncDialog = true;
  }

  deleteSubtitle(): void {
    this.itemService.deleteWantedItemSubtitle(this.wantedItem.id).subscribe(
      () => {
        this.savedSubtitle = null;
        this.messageService.showInfoMessage('Subtitles deleted.');
      },
      () => this.messageService.showErrorMessage('Unable to delete the subtitle!')
    );
  }

  getPlayVideoUrl(): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(getPlayVideoUrl(this.wantedItem.videoFilePath, this.wantedItem.videoFileName));
  }

  postProcess(subtitle: Subtitle): void {
    this.postProcessInProgress = true;
    this.itemService.postProcessWantedItem(this.wantedItem.id, subtitle.subtitleIndex).subscribe(
      () => {
        this.postProcessInProgress = false;
        this.messageService.showSuccessMessage(`Post processed ${this.wantedItem.longName}.`);
        this.goHome();
      },
      () => {
        this.postProcessInProgress = false;
        this.messageService.showErrorMessage(`Unable to post process ${this.wantedItem.longName}!`);
      }
    );
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }
}
