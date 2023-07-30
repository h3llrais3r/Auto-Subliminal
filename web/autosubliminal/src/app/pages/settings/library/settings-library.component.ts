import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { appSettings, AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../services/api/settings.service';
import { MessageService } from '../../../services/message.service';
import { FormUtils } from '../../../components/forms/form-utils';
import { IconDropdownComponent } from '../../../components/icon-dropdown/icon-dropdown.component';
import { InputDropdownComponent } from '../../../components/input/dropdown/input-dropdown.component';
import { InputMultiFileBrowserComponent } from '../../../components/input/multi-file-browser/input-multi-file-browser.component';
import { InputNumberComponent } from '../../../components/input/number/input-number.component';
import { LibrarySettings } from '../../../models/settings';

@Component({
  selector: 'app-settings-library',
  templateUrl: './settings-library.component.html',
  styleUrls: ['./settings-library.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, PanelModule, ButtonModule, IconDropdownComponent, InputDropdownComponent, InputMultiFileBrowserComponent, InputNumberComponent]
})
export class SettingsLibraryComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  scanLibraryIntervalDefault: number;

  enabledOrDisabled: SelectItem[];

  saveAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private settingsService = inject(SettingsService);
  private appSettingsService = inject(AppSettingsService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.initDefaults();
    this.buildSelectItems();
    this.settingsService.getLibrarySettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (librarySettings) => {
        this.buildForm(librarySettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the library settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateLibrarySettings(this.getLibrarySettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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
      libraryEditMode: [librarySettings.libraryEditMode, [Validators.required]]
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
