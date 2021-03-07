import { Component, Input, OnInit } from '@angular/core';
import { SelectItem, SortEvent } from 'primeng/api';
import { ItemService } from '../../../core/services/api/item.service';
import { MessageService } from '../../../core/services/message.service';
import { DownloadedItem } from '../../../shared/models/item';
import { VideoType } from '../../../shared/models/video';
import { capitalizeFirstChar, displayValue } from '../../../shared/utils/string-utils';
import { naturalSort } from '../../../shared/utils/table-utils';

@Component({
  selector: 'app-home-downloaded',
  templateUrl: './home-downloaded.component.html',
  styleUrls: ['./home-downloaded.component.scss']
})
export class HomeDownloadedComponent implements OnInit {

  @Input()
  downloadedItems: DownloadedItem[];

  videoTypes: SelectItem[];
  loading = false;

  globalFilterFields = ['name', 'season', 'episode', 'source', 'quality', 'codec', 'releaseGroup', 'languages', 'timestamp'];
  tableStateKey = 'autosubliminal-home-downloaded-table';

  constructor(private itemService: ItemService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.buildSelectItems();
    this.loadDownloadedItems();
  }

  private buildSelectItems(): void {
    // videoTypes
    this.videoTypes = [];
    this.videoTypes.push({ label: 'All', value: null });
    Object.values(VideoType).forEach((videoType) => this.videoTypes.push({ label: capitalizeFirstChar(videoType), value: videoType }));
  }

  private loadDownloadedItems(): void {
    this.loading = true;
    this.itemService.getDownloadedItems().subscribe(
      (downloadedItems) => {
        this.downloadedItems = downloadedItems;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.showErrorMessage('Unable to get the downloaded items');
      }
    );
  }

  sort(event: SortEvent): void {
    naturalSort(event);
  }

  displayUpperCase(value: any): string {
    return displayValue(value, 'N/A', true);
  }
}
