import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../core/services/api/item.service';
import { MessageService } from '../../../core/services/message.service';
import { WantedItem } from '../../../shared/models/item';
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
  showSubtitlePreviewDialog = false;

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
        if (!this.wantedItem) {
          this.itemService.getWantedItem(wantedItemId).subscribe(
            (wantedItem) => {
              this.wantedItem = wantedItem;
              this.searchSubtitles();
            }
          );
        } else {
          this.searchSubtitles();
        }
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
        this.messageService.showErrorMessage('Unable to search subtitles! Please check the log file!');
      }
    );
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
      () => this.messageService.showErrorMessage('Unable to save subtitle! Please check the log file!')
    );
  }

  deleteSubtitle(): void {
    this.itemService.deleteWantedItemSubtitle(this.wantedItem.id).subscribe(
      () => {
        this.savedSubtitle = null;
        this.messageService.showInfoMessage('Subtitles deleted.');
      },
      () => this.messageService.showErrorMessage('Unable to delete subtitle! Please check the log file!')
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
        this.messageService.showErrorMessage('Unable to post process! Please check the log file!');
      }
    );
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }
}
