import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
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
import { LogSettings } from '../../../models/settings';

@Component({
  selector: 'app-settings-logging',
  templateUrl: './settings-logging.component.html',
  styleUrls: ['./settings-logging.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, PanelModule, ButtonModule, IconDropdownComponent, InputTextComponent, InputDropdownComponent, InputNumberComponent]
})
export class SettingsLoggingComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  enabledOrDisabled: SelectItem[];
  logLevels: SelectItem[];

  saveAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private settingsService = inject(SettingsService);
  private appSettingsService = inject(AppSettingsService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getLogSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (logSettings) => {
        this.buildForm(logSettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the log settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateLogSettings(this.getLogSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('Log settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the log settings!')
      });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = FormUtils.enabledOrDisabledSelectItems();
    // Log levels (value corresponds to python log level)
    this.logLevels = [];
    this.logLevels.push({ label: 'Debug', value: 10 });
    this.logLevels.push({ label: 'Info', value: 20 });
    this.logLevels.push({ label: 'Warning', value: 30 });
    this.logLevels.push({ label: 'Error', value: 40 });
    this.logLevels.push({ label: 'Critical', value: 50 });
  }

  private buildForm(logSettings: LogSettings): void {
    this.settingsForm = this.fb.group({
      logFile: [logSettings.logFile, [Validators.required, FormValidators.notEmpty]],
      logLevel: [logSettings.logLevel, [Validators.required]],
      logNum: [logSettings.logNum, [Validators.required]],
      logSize: [logSettings.logSize, [Validators.required]],
      logHttpAccess: [logSettings.logHttpAccess, [Validators.required]],
      logExternalLibs: [logSettings.logExternalLibs, [Validators.required]],
      logDetailedFormat: [logSettings.logDetailedFormat, [Validators.required]],
      logReversed: [logSettings.logReversed, [Validators.required]],
      logLevelConsole: [logSettings.logLevelConsole, [Validators.required]]
    });
  }

  private getLogSettings(): LogSettings {
    const settings = new LogSettings();
    settings.logFile = FormUtils.getFormControlValue<string>(this.settingsForm, 'logFile');
    settings.logLevel = FormUtils.getFormControlValue<number>(this.settingsForm, 'logLevel');
    settings.logNum = FormUtils.getFormControlValue<number>(this.settingsForm, 'logNum');
    settings.logSize = FormUtils.getFormControlValue<number>(this.settingsForm, 'logSize');
    settings.logHttpAccess = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'logHttpAccess');
    settings.logExternalLibs = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'logExternalLibs');
    settings.logDetailedFormat = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'logDetailedFormat');
    settings.logReversed = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'logReversed');
    settings.logLevelConsole = FormUtils.getFormControlValue<number>(this.settingsForm, 'logLevelConsole');
    return settings;
  }
}
