import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ShowService } from '../../../core/services/api/show.service';
import { ArtworkService } from '../../../core/services/artwork.service';
import { MessageService } from '../../../core/services/message.service';
import { ShowSettings } from '../../models/show';
import { FormUtils } from '../forms/form-utils';
import { FormValidators } from '../forms/form-validators';

@Component({
  selector: 'app-show-settings',
  templateUrl: './show-settings.component.html',
  styleUrls: ['./show-settings.component.scss']
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

  settingsForm: FormGroup;

  languages: SelectItem[];

  loaded = false;

  constructor(
    private fb: FormBuilder,
    private showService: ShowService,
    private artworkService: ArtworkService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.languages = FormUtils.languageSelectItems();
    if (!this.showSettings) {
      this.showService.getShowSettings(this.tvdbId).subscribe(
        (showSettings) => {
          this.buildForm(showSettings);
          this.loaded = true;
        });
    } else {
      this.buildForm(this.showSettings);
      this.loaded = true;
    }
  }

  private buildForm(showSettings: ShowSettings): void {
    this.settingsForm = this.fb.group({
      wantedLanguages: [showSettings.wantedLanguages || [], [Validators.required, FormValidators.notEmpty]],
      refine: [showSettings.refine, [Validators.required]],
      hearingImpaired: [showSettings.hearingImpaired, [Validators.required]],
      utf8Encoding: [showSettings.utf8Encoding, [Validators.required]]
    });
  }

  getShowPosterThumbnailUrl(): string {
    return this.artworkService.getShowPosterThumbnailUrl(this.tvdbId);
  }

  getPosterPlaceholderUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }

  saveShowSettings(): void {
    this.showService.saveShowSettings(this.tvdbId, this.getShowSettings()).subscribe(
      () => {
        this.messageService.showSuccessMessage(`Show settings saved and will be applied on next disk scan.`);
        this.close();
      },
      () => this.messageService.showErrorMessage(`Unable to save show settings! Please check the log file!`)
    );
  }

  private getShowSettings(): ShowSettings {
    const showSettings = new ShowSettings();
    showSettings.wantedLanguages = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'wantedLanguages');
    showSettings.refine = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'refine');
    showSettings.hearingImpaired = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'hearingImpaired');
    showSettings.utf8Encoding = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'utf8Encoding');
    return showSettings;
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
