import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { appSettings, AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../core/services/api/settings.service';
import { MessageService } from '../../../core/services/message.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { LibrarySettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-library',
  templateUrl: './settings-library.component.html',
  styleUrls: ['./settings-library.component.scss']
})
export class SettingsLibraryComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  scanLibraryIntervalDefault: number;

  enabledOrDisabled: SelectItem[];

  saveAttempt = false;

  constructor(
    private fb: UntypedFormBuilder,
    private settingsService: SettingsService,
    private appSettingsService: AppSettingsService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.initDefaults();
    this.buildSelectItems();
    this.settingsService.getLibrarySettings().subscribe({
      next: (librarySettings) => {
        this.buildForm(librarySettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the library settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateLibrarySettings(this.getLibrarySettings()).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('Library settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the library settings!')
      });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private initDefaults(): void {
    this.scanLibraryIntervalDefault = appSettings.scanLibraryIntervalDefault;
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = FormUtils.enabledOrDisabledSelectItems();
  }

  private buildForm(librarySettings: LibrarySettings): void {
    this.settingsForm = this.fb.group({
      libraryMode: [librarySettings.libraryMode, [Validators.required]],
      libraryPaths: [librarySettings.libraryPaths || [], []],
      scanLibraryInterval: [librarySettings.scanLibraryInterval, [Validators.required]],
      scanLibraryAtStartup: [librarySettings.scanLibraryAtStartup, [Validators.required]],
      libraryEditMode: [librarySettings.libraryEditMode, [Validators.required]],
    });
  }

  private getLibrarySettings(): LibrarySettings {
    const settings = new LibrarySettings();
    settings.libraryMode = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'libraryMode');
    settings.libraryPaths = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'libraryPaths');
    settings.scanLibraryInterval = FormUtils.getFormControlValue<number>(this.settingsForm, 'scanLibraryInterval');
    settings.scanLibraryAtStartup = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'scanLibraryAtStartup');
    settings.libraryEditMode = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'libraryEditMode');
    return settings;
  }
}
