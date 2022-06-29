import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../core/services/api/settings.service';
import { MessageService } from '../../../core/services/message.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { FormValidators } from '../../../shared/components/forms/form-validators';
import { WebServerSettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-webserver',
  templateUrl: './settings-webserver.component.html',
  styleUrls: ['./settings-webserver.component.scss']
})
export class SettingsWebserverComponent implements OnInit {

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
    this.settingsService.getWebServerSettings().subscribe(
      (webServerSettings) => {
        this.buildForm(webServerSettings);
      },
      () => this.messageService.showErrorMessage('Unable to get the webserver settings!')
    );
  }

  formatWebRoot(): void {
    let webRoot = FormUtils.getFormControlValue<string>(this.settingsForm, 'webRoot');
    if (webRoot) {
      if (!webRoot.startsWith('/')) {
        webRoot = `/${webRoot}`;
      }
      if (webRoot.endsWith('/')) {
        webRoot = webRoot.replace(new RegExp('/+$'), '');
      }
    }
    FormUtils.setFormControlValue(this.settingsForm, 'webRoot', webRoot);
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateWebServerSettings(this.getWebServerSettings()).subscribe(
        () => {
          this.messageService.showSuccessMessage('Webserver settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        () => this.messageService.showErrorMessage('Unable to save the webserver settings!')
      );
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = FormUtils.enabledOrDisabledSelectItems();
  }

  private buildForm(webServerSettings: WebServerSettings): void {
    this.settingsForm = this.fb.group({
      webServerIp: [webServerSettings.webServerIp, [Validators.required, FormValidators.notEmpty]],
      webServerPort: [webServerSettings.webServerPort, [Validators.required, FormValidators.notEmpty]],
      webRoot: [webServerSettings.webRoot, []],
      userName: [webServerSettings.userName, []],
      password: [webServerSettings.password, []],
      launchBrowser: [webServerSettings.launchBrowser, [Validators.required]]
    });
  }

  private getWebServerSettings(): WebServerSettings {
    const settings = new WebServerSettings();
    settings.webServerIp = FormUtils.getFormControlValue<string>(this.settingsForm, 'webServerIp');
    settings.webServerPort = FormUtils.getFormControlValue<number>(this.settingsForm, 'webServerPort');
    settings.webRoot = FormUtils.getFormControlValue<string>(this.settingsForm, 'webRoot');
    settings.userName = FormUtils.getFormControlValue<string>(this.settingsForm, 'userName');
    settings.password = FormUtils.getFormControlValue<string>(this.settingsForm, 'password');
    settings.launchBrowser = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'launchBrowser');
    return settings;
  }
}
