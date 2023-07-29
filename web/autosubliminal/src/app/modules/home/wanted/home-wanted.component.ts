import { Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ConfirmationService, SelectItem, SortEvent } from 'primeng/api';
import { appSettings } from '../../../app-settings.service';
import { ItemService } from '../../../core/services/api/item.service';
import { MessageService } from '../../../core/services/message.service';
import { SystemEventService } from '../../../core/services/system-event.service';
import { WantedItem } from '../../../shared/models/item';
import { VideoType } from '../../../shared/models/video';
import { WantedTotals } from '../../../shared/models/wanted';
import { getImdbUrl, getTvdbUrl } from '../../../shared/utils/common-utils';
import { capitalizeFirstChar, displayValue } from '../../../shared/utils/string-utils';
import { naturalSort } from '../../../shared/utils/table-utils';

@Component({
  selector: 'app-home-wanted',
  templateUrl: './home-wanted.component.html',
  styleUrls: ['./home-wanted.component.scss']
})
export class HomeWantedComponent implements OnInit {

  @Input()
  wantedItems: WantedItem[];

  @Output()
  totals = new EventEmitter<WantedTotals>();

  videoTypes: SelectItem[];
  selectedWantedItem: WantedItem;
  selectedWantedItemLanguage: string;
  showShowSettings = false;
  showMovieSettings = false;
  showManualRefine = false;
  manualRefineEnabled = false;
  loading = false;
  confirmationType: 'delete' | 'skip';
  cleanupOnDelete = false;
  seasonToSkip = '00';

  globalFilterFields = ['name', 'season', 'episode', 'source', 'quality', 'codec', 'releaseGroup', 'languages', 'timestamp'];
  tableStateKey = 'autosubliminal-home-wanted-table';

  private router = inject(Router);
  private itemService = inject(ItemService);
  private systemEventService = inject(SystemEventService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.manualRefineEnabled = appSettings.manualRefineVideo;
    this.buildSelectItems();
    this.loadWantedItems();
    // Subscribe on scanDisk finish events to reload the overview
    this.systemEventService.schedulerFinish$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.scanDisk) {
          this.loadWantedItems();
        }
      }
    });
    // Subscribe on checkSub finish events to reload the overview
    this.systemEventService.schedulerFinish$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (scheduler) => {
        if (scheduler.name === appSettings.checkSub) {
          this.loadWantedItems();
        }
      }
    });
    // Subscribe on wantedItem update events to update the overview
    this.systemEventService.wantedItemUpdate$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (wantedItem) => {
        this.updateWantedItemInList(wantedItem);
      }
    });
    // Subscribe on wantedItem delete events to update the overview
    this.systemEventService.wantedItemDelete$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (wantedItem) => {
        this.deleteWantedItemInList(wantedItem);
      }
    });
  }

  sort(event: SortEvent): void {
    naturalSort(event);
  }

  displayUpperCase(value: any): string {
    return displayValue(value, 'N/A', true);
  }

  getTvdbUrl(wantedItem: WantedItem): string {
    return getTvdbUrl(wantedItem.tvdbId);
  }

  getImdbUrl(wantedItem: WantedItem): string {
    return getImdbUrl(wantedItem.imdbId);
  }

  searchIndexerId(wantedItem: WantedItem): void {
    const indexer = wantedItem.isEpisode ? 'tvdb id' : 'imdb id';
    this.messageService.showInfoMessage(`Searching for ${indexer} for ${wantedItem.longName}.`);
    this.itemService.searchWantedItemIndexerId(wantedItem.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updatedWantedItem) => {
        this.updateWantedItemInList(updatedWantedItem);
        this.messageService.showSuccessMessage(`${capitalizeFirstChar(indexer)} found for ${updatedWantedItem.longName}.`);
      },
      error: () => this.messageService.showErrorMessage(`Unable to search ${indexer} for ${wantedItem.longName}!`)
    });
  }

  openShowSettingsDialog(wantedItem: WantedItem): void {
    this.showShowSettings = true;
    this.selectedWantedItem = wantedItem;
  }

  openMovieSettingsDialog(wantedItem: WantedItem): void {
    this.showMovieSettings = true;
    this.selectedWantedItem = wantedItem;
  }

  openManualRefineDialog(wantedItem: WantedItem): void {
    this.showManualRefine = true;
    this.selectedWantedItem = wantedItem;
  }

  goToManualSearch(wantedItem: WantedItem, language: string): void {
    this.router.navigate(['/home/search'], { queryParams: { wantedItemId: wantedItem.id, language } });
  }

  updateWantedItemInList(wantedItem: WantedItem): void {
    // Replace updated wanted item in list of wanted items
    this.wantedItems = this.wantedItems.map((item) => item.id === wantedItem.id ? wantedItem : item);
  }

  postProcessWantedItem(wantedItem: WantedItem): void {
    this.itemService.postProcessWantedItem(wantedItem.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.deleteWantedItemInList(wantedItem);
        this.messageService.showSuccessMessage(`Post processed ${wantedItem.longName}.`);
      },
      error: () => this.messageService.showErrorMessage(`Unable to post process ${wantedItem.longName}!`)
    });
  }

  deleteWantedItem(wantedItem: WantedItem): void {
    this.confirmationType = 'delete';
    this.cleanupOnDelete = false;
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete <b>${wantedItem.longName}</b>?<br><small><i>Toggle button if you want to cleanup leftovers as well.</i></small>`,
      accept: () => {
        this.itemService.deleteWantedItem(wantedItem.id, this.cleanupOnDelete).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: () => {
            this.deleteWantedItemInList(wantedItem);
            this.messageService.showSuccessMessage(`Deleted ${wantedItem.longName}.`);
          },
          error: () => this.messageService.showErrorMessage(`Unable to delete ${wantedItem.longName}!`)
        });
      }
    });
  }

  skipShow(wantedItem: WantedItem): void {
    this.confirmationType = 'skip';
    this.seasonToSkip = '00';
    this.confirmationService.confirm({
      message: `Are you sure that you want to skip show <b>${wantedItem.name}</b>?<br><small><i>Enter season(s) to skip (comma separated, 00 = all seasons, 0 = specials).</i></small>`,
      accept: () => {
        this.itemService.skipWantedItem(wantedItem.id, wantedItem.type, this.seasonToSkip).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: () => {
            this.deleteWantedItemInList(wantedItem);
            if (!this.seasonToSkip || this.seasonToSkip === '00') { // '00' or nothing means all seasons
              this.messageService.showSuccessMessage(`Skipped the show ${wantedItem.name} all seasons.`);
            } else {
              this.messageService.showSuccessMessage(`Skipped the show ${wantedItem.name} season(s) ${this.seasonToSkip}.`);
            }
          },
          error: () => this.messageService.showErrorMessage(`Unable to skip the show ${wantedItem.name}!`)
        });
      }
    });
  }

  skipMovie(wantedItem: WantedItem): void {
    this.confirmationService.confirm({
      message: `Are you sure that you want to skip movie <b>${wantedItem.name}</b>?`,
      accept: () => {
        this.itemService.skipWantedItem(wantedItem.id, wantedItem.type).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: () => {
            this.deleteWantedItemInList(wantedItem);
            this.messageService.showSuccessMessage(`Skipped the movie ${wantedItem.name}.`);
          },
          error: () => this.messageService.showErrorMessage(`Unable to skip the movie ${wantedItem.name}!`)
        });
      }
    });
  }

  private buildSelectItems(): void {
    // videoTypes
    this.videoTypes = [];
    this.videoTypes.push({ label: 'All', value: null });
    Object.values(VideoType).forEach((videoType) => this.videoTypes.push({ label: capitalizeFirstChar(videoType), value: videoType }));
  }

  private loadWantedItems(): void {
    this.loading = true;
    this.itemService.getWantedItems().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (wantedItems) => {
        this.wantedItems = wantedItems;
        this.emitTotals();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.showErrorMessage('Unable to get the wanted items');
      }
    });
  }

  private deleteWantedItemInList(wantedItem: WantedItem): void {
    this.wantedItems = this.wantedItems.filter((item) => item.id !== wantedItem.id);
    this.emitTotals();
  }

  private emitTotals(): void {
    const total = this.wantedItems.length;
    const totalEpisodes = this.wantedItems.filter((wantedItem) => wantedItem.isEpisode).length;
    const totalMovies = this.wantedItems.filter((wantedItem) => wantedItem.isMovie).length;
    this.totals.emit({ total, totalEpisodes, totalMovies });
  }
}
