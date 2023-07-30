import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../services/api/settings.service';
import { MessageService } from '../../../services/message.service';
import { FormUtils } from '../../../components/forms/form-utils';
import { FormValidators } from '../../../components/forms/form-validators';
import { IconDropdownComponent } from '../../../components/icon-dropdown/icon-dropdown.component';
import { InputDropdownComponent } from '../../../components/input/dropdown/input-dropdown.component';
import { InputNumberComponent } from '../../../components/input/number/input-number.component';
import { InputTextComponent } from '../../../components/input/text/input-text.component';
import { WebServerSettings } from '../../../models/settings';

@Component({
  selector: 'app-settings-webserver',
  templateUrl: './settings-webserver.component.html',
  styleUrls: ['./settings-webserver.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, PanelModule, ButtonModule, MessageModule, IconDropdownComponent, InputTextComponent, InputNumberComponent, InputDropdownComponent]
})
export class SettingsWebserverComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  enabledOrDisabled: SelectItem[];

  saveAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private settingsService = inject(SettingsService);
  private appSettingsService = inject(AppSettingsService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getWebServerSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (webServerSettings) => {
        this.buildForm(webServerSettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the webserver settings!')
    });
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
      this.settingsService.updateWebServerSettings(this.getWebServerSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('Webserver settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the webserver settings!')
      });
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
