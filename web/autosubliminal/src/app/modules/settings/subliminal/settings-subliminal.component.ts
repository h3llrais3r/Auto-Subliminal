import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { appSettings, AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../core/services/api/settings.service';
import { MessageService } from '../../../core/services/message.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { SubliminalSettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-subliminal',
  templateUrl: './settings-subliminal.component.html',
  styleUrls: ['./settings-subliminal.component.scss']
})
export class SettingsSubliminalComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  enabledOrDisabled: SelectItem[];
  subliminalProviders: SelectItem[];
  antiCaptchaProviders: SelectItem[];

  saveAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private settingsService = inject(SettingsService);
  private appSettingsService = inject(AppSettingsService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getSubliminalSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (subliminalSettings) => {
        this.buildForm(subliminalSettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the subliminal settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateSubliminalSettings(this.getSubliminalSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('Subliminal settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the subliminal settings!')
      });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = FormUtils.enabledOrDisabledSelectItems();
    // Subliminal providers
    this.subliminalProviders = [];
    appSettings.subliminalProviders.forEach((provider) => this.subliminalProviders.push({ label: provider, value: provider }));
    // Anti-Captcha providers
    this.antiCaptchaProviders = [];
    this.antiCaptchaProviders.push({ label: 'Disabled', value: '' });
    appSettings.antiCaptchaProviders.forEach((provider) => this.antiCaptchaProviders.push({ label: provider.source, value: provider.class }));
  }

  private buildForm(subliminalSettings: SubliminalSettings): void {
    this.settingsForm = this.fb.group({
      showMatchSource: [subliminalSettings.showMatchSource, [Validators.required]],
      showMatchQuality: [subliminalSettings.showMatchQuality, [Validators.required]],
      showMatchCodec: [subliminalSettings.showMatchCodec, [Validators.required]],
      showMatchReleaseGroup: [subliminalSettings.showMatchReleaseGroup, [Validators.required]],
      movieMatchSource: [subliminalSettings.movieMatchSource, [Validators.required]],
      movieMatchQuality: [subliminalSettings.movieMatchQuality, [Validators.required]],
      movieMatchCodec: [subliminalSettings.movieMatchCodec, [Validators.required]],
      movieMatchReleaseGroup: [subliminalSettings.movieMatchReleaseGroup, [Validators.required]],
      subliminalProviders: [subliminalSettings.subliminalProviders || [], []],
      subtitleUtf8Encoding: [subliminalSettings.subtitleUtf8Encoding, [Validators.required]],
      refineVideo: [subliminalSettings.refineVideo, [Validators.required]],
      manualRefineVideo: [subliminalSettings.manualRefineVideo, [Validators.required]],
      preferHearingImpaired: [subliminalSettings.preferHearingImpaired, [Validators.required]],
      antiCaptchaClass: [subliminalSettings.antiCaptchaClass, []],
      antiCaptchaClientKey: [subliminalSettings.antiCaptchaClientKey, []],
      addic7edUserName: [subliminalSettings.addic7edUserName, []],
      addic7edPassword: [subliminalSettings.addic7edPassword, []],
      addic7edUserId: [subliminalSettings.addic7edUserId, []],
      opensubtitlesUserName: [subliminalSettings.opensubtitlesUserName, []],
      opensubtitlesPassword: [subliminalSettings.opensubtitlesPassword, []],
      legendastvUserName: [subliminalSettings.legendastvUserName, []],
      legendastvPassword: [subliminalSettings.legendastvPassword, []]
    });
  }

  private getSubliminalSettings(): SubliminalSettings {
    const settings = new SubliminalSettings();
    settings.showMatchSource = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'showMatchSource');
    settings.showMatchQuality = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'showMatchQuality');
    settings.showMatchCodec = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'showMatchCodec');
    settings.showMatchReleaseGroup = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'showMatchReleaseGroup');
    settings.movieMatchSource = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'movieMatchSource');
    settings.movieMatchQuality = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'movieMatchQuality');
    settings.movieMatchCodec = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'movieMatchCodec');
    settings.movieMatchReleaseGroup = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'movieMatchReleaseGroup');
    settings.subliminalProviders = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'subliminalProviders');
    settings.subtitleUtf8Encoding = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'subtitleUtf8Encoding');
    settings.refineVideo = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'refineVideo');
    settings.manualRefineVideo = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'manualRefineVideo');
    settings.preferHearingImpaired = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'preferHearingImpaired');
    settings.antiCaptchaClass = FormUtils.getFormControlValue<string>(this.settingsForm, 'antiCaptchaClass');
    settings.antiCaptchaClientKey = FormUtils.getFormControlValue<string>(this.settingsForm, 'antiCaptchaClientKey');
    settings.addic7edUserName = FormUtils.getFormControlValue<string>(this.settingsForm, 'addic7edUserName');
    settings.addic7edPassword = FormUtils.getFormControlValue<string>(this.settingsForm, 'addic7edPassword');
    settings.addic7edUserId = FormUtils.getFormControlValue<string>(this.settingsForm, 'addic7edUserId');
    settings.opensubtitlesUserName = FormUtils.getFormControlValue<string>(this.settingsForm, 'opensubtitlesUserName');
    settings.opensubtitlesPassword = FormUtils.getFormControlValue<string>(this.settingsForm, 'opensubtitlesPassword');
    settings.legendastvUserName = FormUtils.getFormControlValue<string>(this.settingsForm, 'legendastvUserName');
    settings.legendastvPassword = FormUtils.getFormControlValue<string>(this.settingsForm, 'legendastvPassword');
    return settings;
  }
}
