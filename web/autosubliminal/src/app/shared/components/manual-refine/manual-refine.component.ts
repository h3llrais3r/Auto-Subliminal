import { Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../../core/services/api/item.service';
import { MessageService } from '../../../core/services/message.service';
import { WantedItem } from '../../models/item';
import { toNumber, toNumberList } from '../../utils/number-utils';
import { FormUtils } from '../forms/form-utils';
import { FormValidators } from '../forms/form-validators';

@Component({
  selector: 'app-manual-refine',
  templateUrl: './manual-refine.component.html',
  styleUrls: ['./manual-refine.component.scss']
})
export class ManualRefineComponent implements OnInit {

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter<boolean>(); // Setup 2-way binding [(visible)]="..."

  @Input()
  wantedItem: WantedItem;

  @Output()
  wantedItemChange = new EventEmitter<WantedItem>();

  itemForm: UntypedFormGroup;

  updateAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private itemService = inject(ItemService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.buildForm(this.wantedItem);
  }

  resetWantedItem(): void {
    const wantedItem = this.getWantedItem();
    // Reset the wanted item (restore it with the data from the db after it has been temporarily updated)
    this.itemService.resetWantedItem(wantedItem.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updatedWantedItem) => {
        this.wantedItemChange.emit(updatedWantedItem);
        this.messageService.showSuccessMessage(`Restored ${updatedWantedItem.longName}.`);
        this.close();
      },
      error: () => this.messageService.showErrorMessage(`Unable to restore ${wantedItem.longName}`)
    });
  }

  updateWantedItem(): void {
    this.updateAttempt = true;
    if (this.itemForm.valid) {
      const wantedItem = this.getWantedItem();
      // Update the wanted item
      this.itemService.updateWantedItem(wantedItem).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (updatedWantedItem) => {
          this.wantedItemChange.emit(updatedWantedItem);
          this.messageService.showSuccessMessage(`Updated ${updatedWantedItem.longName}.`);
          this.close();
        },
        error: () => this.messageService.showErrorMessage(`Unable to update ${wantedItem.longName}`)
      });
    }
  }

  close(): void {
    this.visibleChange.emit(false);
  }

  private buildForm(wantedItem: WantedItem): void {
    this.itemForm = this.fb.group({
      title: [wantedItem.title, [Validators.required, FormValidators.notEmpty]],
      year: [wantedItem.year, []],
      season: [wantedItem.season, []],
      episode: [wantedItem.episode ? wantedItem.episode.toString() : wantedItem.codec, []], // convert to string as we convert it back afterwards to the required type
      source: [wantedItem.source ? wantedItem.source.toString() : wantedItem.codec, []], // convert to string as we convert it back afterwards to the required type
      quality: [wantedItem.quality, []],
      codec: [wantedItem.codec ? wantedItem.codec.toString() : wantedItem.codec, []], // convert to string as we convert it back afterwards to the required type
      releaseGroup: [wantedItem.releaseGroup, []]
    });
  }

  private getWantedItem(): WantedItem {
    const wantedItem = new WantedItem(this.wantedItem);
    wantedItem.title = FormUtils.getFormControlValue<string>(this.itemForm, 'title');
    wantedItem.year = FormUtils.getFormControlValue<number>(this.itemForm, 'year');
    wantedItem.season = FormUtils.getFormControlValue<number>(this.itemForm, 'season');
    const episode = FormUtils.getFormControlValue<string>(this.itemForm, 'episode');
    wantedItem.episode = (episode && episode.indexOf(',') > 0) ? toNumberList(episode) : (episode ? toNumber(episode) : null);
    const source = FormUtils.getFormControlValue<string>(this.itemForm, 'source');
    wantedItem.source = (source && source.indexOf(',') > 0) ? source.split(',').map((s) => s.trim()) : source;
    wantedItem.quality = FormUtils.getFormControlValue<string>(this.itemForm, 'quality');
    const codec = FormUtils.getFormControlValue<string>(this.itemForm, 'codec');
    wantedItem.codec = (codec && codec.indexOf(',') > 0) ? codec.split(',').map((s) => s.trim()) : codec;
    wantedItem.releaseGroup = FormUtils.getFormControlValue<string>(this.itemForm, 'releaseGroup');
    return wantedItem;
  }
}
