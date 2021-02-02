import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem, SortEvent } from 'primeng/api';
import { appSettings } from '../../../app-settings.service';
import { ItemService } from '../../../core/services/api/item.service';
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
  showShowSettings = false;
  showMovieSettings = false;
  showManualRefine = false;
  manualRefineEnabled = false;
  loading = false;

  globalFilterFields = ['name', 'season', 'episode', 'source', 'quality', 'codec', 'releaseGroup', 'languages', 'timestamp'];
  tableStateKey = 'autosubliminal-home-wanted-table';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.manualRefineEnabled = appSettings.manualRefineVideo;
    this.buildSelectItems();
    this.loadWantedItems();
  }

  private buildSelectItems(): void {
    // videoTypes
    this.videoTypes = [];
    this.videoTypes.push({ label: 'All', value: null });
    Object.values(VideoType).forEach((videoType) => this.videoTypes.push({ label: capitalizeFirstChar(videoType), value: videoType }));
  }

  private loadWantedItems(): void {
    this.loading = true;
    this.itemService.getWantedItems().subscribe(
      (wantedItems) => {
        this.wantedItems = wantedItems;
        const total = wantedItems.length;
        const totalShows = wantedItems.filter((wantedItem) => wantedItem.isEpisode).length;
        const totalMovies = wantedItems.filter((wantedItem) => wantedItem.isMovie).length;
        this.totals.emit({ total, totalShows, totalMovies });
        this.loading = false;
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

  updateWantedItem(wantedItem: WantedItem): void {
    // Replace updated wanted item in list of wanted items
    this.wantedItems = this.wantedItems.map((item) => item.id === wantedItem.id ? wantedItem : item);
  }
}
