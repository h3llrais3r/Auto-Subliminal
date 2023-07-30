import { NgIf } from '@angular/common';
import { Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SelectItem, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ShowService } from '../../services/api/show.service';
import { ArtworkService } from '../../services/artwork.service';
import { MessageService } from '../../services/message.service';
import { ShowSettings } from '../../models/show';
import { FormUtils } from '../forms/form-utils';
import { FormValidators } from '../forms/form-validators';
import { IconDropdownComponent } from '../icon-dropdown/icon-dropdown.component';
import { InputMultiSelectComponent } from '../input/multi-select/input-multi-select.component';
import { InputSwitchComponent } from '../input/switch/input-switch.component';

@Component({
  selector: 'app-show-settings',
  templateUrl: './show-settings.component.html',
  styleUrls: ['./show-settings.component.scss'],
  standalone: true,
  imports: [NgIf, DialogModule, FormsModule, ReactiveFormsModule, ButtonModule, SharedModule, LazyLoadImageModule, IconDropdownComponent, InputMultiSelectComponent, InputSwitchComponent]
})
export class ShowSettingsComponent implements OnInit {

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter<boolean>(); // Setup 2-way binding [(visible)]="..."

  @Input()
  tvdbId: number; // needed to update the show settings afterwards

  @Input()
  title: string; // needed to display the title

  @Input()
  showSettings: ShowSettings; // if specified, these settings will be used instead of fetching them via the tvdbId

  settingsForm: UntypedFormGroup;

  languages: SelectItem[];

  loaded = false;

  private fb = inject(UntypedFormBuilder);
  private showService = inject(ShowService);
  private artworkService = inject(ArtworkService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.languages = FormUtils.languageSelectItems();
    if (!this.showSettings) {
      this.showService.getShowSettings(this.tvdbId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (showSettings) => {
          this.buildForm(showSettings);
          this.loaded = true;
        },
        error: () => this.messageService.showErrorMessage('Unable to get the show settings!')
      });
    } else {
      this.buildForm(this.showSettings);
      this.loaded = true;
    }
  }

  getShowPosterThumbnailUrl(): string {
    return this.artworkService.getShowPosterThumbnailUrl(this.tvdbId);
  }

  getPosterPlaceholderUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }

  saveShowSettings(): void {
    this.showService.saveShowSettings(this.tvdbId, this.getShowSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.messageService.showSuccessMessage(`Show settings saved and will be applied on next disk scan.`);
        this.close();
      },
      error: () => this.messageService.showErrorMessage(`Unable to save the show settings!`)
    });
  }

  close(): void {
    this.visibleChange.emit(false);
  }

  private buildForm(showSettings: ShowSettings): void {
    this.settingsForm = this.fb.group({
      wantedLanguages: [showSettings.wantedLanguages || [], [Validators.required, FormValidators.notEmpty]],
      refine: [showSettings.refine, [Validators.required]],
      hearingImpaired: [showSettings.hearingImpaired, [Validators.required]],
      utf8Encoding: [showSettings.utf8Encoding, [Validators.required]]
    });
  }

  private getShowSettings(): ShowSettings {
    const showSettings = new ShowSettings();
    showSettings.wantedLanguages = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'wantedLanguages');
    showSettings.refine = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'refine');
    showSettings.hearingImpaired = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'hearingImpaired');
    showSettings.utf8Encoding = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'utf8Encoding');
    return showSettings;
  }
}
