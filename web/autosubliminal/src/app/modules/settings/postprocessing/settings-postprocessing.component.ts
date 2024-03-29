import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../core/services/api/settings.service';
import { MessageService } from '../../../core/services/message.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { PostProcessSettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-postprocessing',
  templateUrl: './settings-postprocessing.component.html',
  styleUrls: ['./settings-postprocessing.component.scss']
})
export class SettingsPostprocessingComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  enabledOrDisabled: SelectItem[];

  saveAttempt = false;

  constructor(
    private fb: UntypedFormBuilder,
    private settingsService: SettingsService,
    private appSettingsService: AppSettingsService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getPostProcessSettings().subscribe({
      next: (postProcessSettings) => {
        this.buildForm(postProcessSettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the postprocessing settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updatePostProcessSettings(this.getPostProcessSettings()).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('Postprocessing settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the postprocessing settings!')
      });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = FormUtils.enabledOrDisabledSelectItems();
  }

  private buildForm(postProcessSettings: PostProcessSettings): void {
    this.settingsForm = this.fb.group({
      postProcess: [postProcessSettings.postProcess, [Validators.required]],
      postProcessIndividual: [postProcessSettings.postProcessIndividual, [Validators.required]],
      postProcessUtf8Encoding: [postProcessSettings.postProcessUtf8Encoding, [Validators.required]],
      showPostProcessCmd: [postProcessSettings.showPostProcessCmd, []],
      showPostProcessArgs: [postProcessSettings.showPostProcessArgs, []],
      moviePostProcessCmd: [postProcessSettings.moviePostProcessCmd, []],
      moviePostProcessArgs: [postProcessSettings.moviePostProcessArgs, []]
    });
  }

  private getPostProcessSettings(): PostProcessSettings {
    const settings = new PostProcessSettings();
    settings.postProcess = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'postProcess');
    settings.postProcessIndividual = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'postProcessIndividual');
    settings.postProcessUtf8Encoding = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'postProcessUtf8Encoding');
    settings.showPostProcessCmd = FormUtils.getFormControlValue<string>(this.settingsForm, 'showPostProcessCmd');
    settings.showPostProcessArgs = FormUtils.getFormControlValue<string>(this.settingsForm, 'showPostProcessArgs');
    settings.moviePostProcessCmd = FormUtils.getFormControlValue<string>(this.settingsForm, 'moviePostProcessCmd');
    settings.moviePostProcessArgs = FormUtils.getFormControlValue<string>(this.settingsForm, 'moviePostProcessArgs');
    return settings;
  }
}
