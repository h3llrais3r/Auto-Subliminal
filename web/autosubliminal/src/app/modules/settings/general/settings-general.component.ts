import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { appSettings, AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../core/services/api/settings.service';
import { MessageService } from '../../../core/services/message.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { FormValidators } from '../../../shared/components/forms/form-validators';
import { GeneralSettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})
export class SettingsGeneralComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  scanDiskIntervalDefault: number;
  checkSubIntervalDefault: number;
  checkSubDeadlineDefault: number;
  checkSubDeltaDefault: number;
  checkVersionIntervalDefault: number;

  enabledOrDisabled: SelectItem[];
  languages: SelectItem[];
  timestampFormats: SelectItem[];

  saveAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private settingsService = inject(SettingsService);
  private appSettingsService = inject(AppSettingsService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.initDefaults();
    this.buildSelectItems();
    this.settingsService.getGeneralSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (generalSettings) => {
        this.buildForm(generalSettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the general settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateGeneralSettings(this.getGeneralSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('General settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the general settings!')
      });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  showFfmpegPath(): boolean {
    // FFMPEG is required for manualSubSync
    return FormUtils.getFormControlValue<boolean>(this.settingsForm, 'manualSubSync');
  }

  private initDefaults(): void {
    this.scanDiskIntervalDefault = appSettings.scanDiskIntervalDefault;
    this.checkSubIntervalDefault = appSettings.checkSubIntervalDefault;
    this.checkSubDeadlineDefault = appSettings.checkSubDeadlineDefault;
    this.checkSubDeltaDefault = appSettings.checkSubDeltaDefault;
    this.checkVersionIntervalDefault = appSettings.checkVersionIntervalDefault;
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = FormUtils.enabledOrDisabledSelectItems();
    // Languages
    this.languages = [];
    this.languages.push({ label: 'Select a language', value: '' });
    appSettings.languages.forEach((language) => this.languages.push({ label: language.name, value: language.code }));
    // Timestamp formats (python strftime() formats)
    this.timestampFormats = [];
    this.timestampFormats.push({ label: 'YYYY-MM-DD HH:MM:SS', value: '%Y-%m-%d %H:%M:%S' });
    this.timestampFormats.push({ label: 'MM-DD-YYYY HH:MM:SS', value: '%m-%d-%Y %H:%M:%S' });
    this.timestampFormats.push({ label: 'DD-MM-YYYY HH:MM:SS', value: '%d-%m-%Y %H:%M:%S' });
  }

  private buildForm(generalSettings: GeneralSettings): void {
    this.settingsForm = this.fb.group({
      videoPaths: [generalSettings.videoPaths || [], [Validators.required, FormValidators.notEmpty]],
      defaultLanguage: [generalSettings.defaultLanguage, [Validators.required]],
      defaultLanguageSuffix: [generalSettings.defaultLanguageSuffix, [Validators.required]],
      additionalLanguages: [generalSettings.additionalLanguages || [], []],
      manualSearchWithScoring: [generalSettings.manualSearchWithScoring, [Validators.required]],
      scanDiskInterval: [generalSettings.scanDiskInterval, [Validators.required]],
      scanDiskAtStartup: [generalSettings.scanDiskAtStartup, [Validators.required]],
      checkSubInterval: [generalSettings.checkSubInterval, [Validators.required]],
      checkSubAtStartup: [generalSettings.checkSubAtStartup, [Validators.required]],
      checkSubDeadline: [generalSettings.checkSubDeadline, [Validators.required]],
      checkSubDelta: [generalSettings.checkSubDelta, [Validators.required]],
      checkVersionInterval: [generalSettings.checkVersionInterval, [Validators.required]],
      checkVersionAtStartup: [generalSettings.checkVersionAtStartup, [Validators.required]],
      checkVersionAutoUpdate: [generalSettings.checkVersionAutoUpdate, [Validators.required]],
      scanEmbeddedSubs: [generalSettings.scanEmbeddedSubs, [Validators.required]],
      scanHardcodedSubs: [generalSettings.scanHardcodedSubs, [Validators.required]],
      skipHiddenDirs: [generalSettings.skipHiddenDirs, [Validators.required]],
      detectInvalidSubLanguage: [generalSettings.detectInvalidSubLanguage, [Validators.required]],
      detectedLanguageProbability: [generalSettings.detectedLanguageProbability * 100, [Validators.required]], // as percentage
      manualSubSync: [generalSettings.manualSubSync, [Validators.required]],
      ffmpegPath: [generalSettings.ffmpegPath, []],
      minVideoFileSize: [generalSettings.minVideoFileSize, [Validators.required]],
      maxDbResults: [generalSettings.maxDbResults, [Validators.required]],
      timestampFormat: [generalSettings.timestampFormat, [Validators.required]]
    }, { validator: this.globalFormValidator });
  }

  private globalFormValidator(formGroup: UntypedFormGroup): ValidationErrors | null {
    // Return error ffmpegPath is not filled in when manualSubSync is enabled
    const error: ValidationErrors = { ffmpegPathRequired: true };
    const ffmpegPath = FormUtils.getFormControlValue<string>(formGroup, 'ffmpegPath');
    if (FormUtils.getFormControlValue<boolean>(formGroup, 'manualSubSync') && (!ffmpegPath || !ffmpegPath.trim())) {
      FormUtils.addFormControlValidationErrors(formGroup.controls['ffmpegPath'], error);
      FormUtils.markFormControlFieldsAsDirty(formGroup);
      return error;
    }
    FormUtils.clearFormControlValidationErrors(formGroup.controls['ffmpegPath'], error);
    return null;
  }

  private getGeneralSettings(): GeneralSettings {
    const settings = new GeneralSettings();
    settings.videoPaths = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'videoPaths');
    settings.defaultLanguage = FormUtils.getFormControlValue<string>(this.settingsForm, 'defaultLanguage');
    settings.defaultLanguageSuffix = FormUtils.getFormControlValue<string>(this.settingsForm, 'defaultLanguageSuffix');
    settings.additionalLanguages = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'additionalLanguages');
    settings.manualSearchWithScoring = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'manualSearchWithScoring');
    settings.scanDiskInterval = FormUtils.getFormControlValue<number>(this.settingsForm, 'scanDiskInterval');
    settings.scanDiskAtStartup = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'scanDiskAtStartup');
    settings.checkSubInterval = FormUtils.getFormControlValue<number>(this.settingsForm, 'checkSubInterval');
    settings.checkSubAtStartup = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'checkSubAtStartup');
    settings.checkSubDeadline = FormUtils.getFormControlValue<number>(this.settingsForm, 'checkSubDeadline');
    settings.checkSubDelta = FormUtils.getFormControlValue<number>(this.settingsForm, 'checkSubDelta');
    settings.checkVersionInterval = FormUtils.getFormControlValue<number>(this.settingsForm, 'checkVersionInterval');
    settings.checkVersionAtStartup = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'checkVersionAtStartup');
    settings.checkVersionAutoUpdate = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'checkVersionAutoUpdate');
    settings.scanEmbeddedSubs = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'scanEmbeddedSubs');
    settings.scanHardcodedSubs = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'scanHardcodedSubs');
    settings.skipHiddenDirs = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'skipHiddenDirs');
    settings.detectInvalidSubLanguage = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'detectInvalidSubLanguage');
    settings.detectedLanguageProbability = FormUtils.getFormControlValue<number>(this.settingsForm, 'detectedLanguageProbability') / 100; // percentage as decimal number
    settings.manualSubSync = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'manualSubSync');
    settings.ffmpegPath = FormUtils.getFormControlValue<string>(this.settingsForm, 'ffmpegPath');
    settings.minVideoFileSize = FormUtils.getFormControlValue<number>(this.settingsForm, 'minVideoFileSize');
    settings.maxDbResults = FormUtils.getFormControlValue<number>(this.settingsForm, 'maxDbResults');
    settings.timestampFormat = FormUtils.getFormControlValue<string>(this.settingsForm, 'timestampFormat');
    return settings;
  }
}
