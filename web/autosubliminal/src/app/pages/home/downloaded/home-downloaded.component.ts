import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SelectItem, SharedModule, SortEvent } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ItemService } from '../../../services/api/item.service';
import { MessageService } from '../../../services/message.service';
import { IconDropdownComponent } from '../../../components/icon-dropdown/icon-dropdown.component';
import { TableFilterComponent } from '../../../components/table-filter/table-filter.component';
import { DownloadedItem } from '../../../models/item';
import { VideoType } from '../../../models/video';
import { capitalizeFirstChar, displayValue } from '../../../utils/string-utils';
import { naturalSort } from '../../../utils/table-utils';

@Component({
  selector: 'app-home-downloaded',
  templateUrl: './home-downloaded.component.html',
  styleUrls: ['./home-downloaded.component.scss'],
  standalone: true,
  imports: [NgIf, TableModule, DropdownModule, SharedModule, TableFilterComponent, IconDropdownComponent]
})
export class HomeDownloadedComponent implements OnInit {

  @Input()
  downloadedItems: DownloadedItem[];

  videoTypes: SelectItem[];
  loading = false;

  globalFilterFields = ['name', 'season', 'episode', 'source', 'quality', 'codec', 'releaseGroup', 'languages', 'timestamp'];
  tableStateKey = 'autosubliminal-home-downloaded-table';

  private itemService = inject(ItemService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.buildSelectItems();
    this.loadDownloadedItems();
  }

  sort(event: SortEvent): void {
    naturalSort(event);
  }

  displayUpperCase(value: any): string {
    return displayValue(value, 'N/A', true);
  }

  private buildSelectItems(): void {
    // videoTypes
    this.videoTypes = [];
    this.videoTypes.push({ label: 'All', value: null });
    Object.values(VideoType).forEach((videoType) => this.videoTypes.push({ label: capitalizeFirstChar(videoType), value: videoType }));
  }

  private loadDownloadedItems(): void {
    this.loading = true;
    this.itemService.getDownloadedItems().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (downloadedItems) => {
        this.downloadedItems = downloadedItems;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.showErrorMessage('Unable to get the downloaded items');
      }
    });
  }
}
