import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
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

  settingsForm: FormGroup;

  enabledOrDisabled: SelectItem[];

  saveAttempt = false;

  constructor(private fb: FormBuilder, private settingsService: SettingsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getLibrarySettings().subscribe(
      result => {
        this.buildForm(result);
      });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateLibrarySettings(this.getLibrarySettings()).subscribe(
        () => this.messageService.showSuccessMessage('Library settings saved.'),
        () => this.messageService.showErrorMessage('Error while saving library settings!'));
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = FormUtils.enabledOrDisabledSelectItems();
  }

  private buildForm(librarySettings: LibrarySettings): void {
    this.settingsForm = this.fb.group({
      libraryMode: [librarySettings.libraryMode, [Validators.required]],
      libraryPaths: [librarySettings.libraryPaths, []],
      scanLibraryInterval: [librarySettings.scanLibraryInterval, [Validators.required]]
    });
  }

  private getLibrarySettings(): LibrarySettings {
    const settings = new LibrarySettings();
    settings.libraryMode = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'libraryMode');
    settings.libraryPaths = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'libraryPaths');
    settings.scanLibraryInterval = FormUtils.getFormControlValue<number>(this.settingsForm, 'scanLibraryInterval');
    return settings;
  }
}
