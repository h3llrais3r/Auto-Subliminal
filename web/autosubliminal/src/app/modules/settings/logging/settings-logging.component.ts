import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { SettingsService } from '../../../core/services/api/settings.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { FormValidators } from '../../../shared/components/forms/form-validators';
import { LogSettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-logging',
  templateUrl: './settings-logging.component.html',
  styleUrls: ['./settings-logging.component.scss']
})
export class SettingsLoggingComponent implements OnInit {

  settingsForm: FormGroup;

  enabledOrDisabled: SelectItem[];
  logLevels: SelectItem[];

  saveAttempt = false;

  constructor(private fb: FormBuilder, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getLogSettings().subscribe(
      result => {
        this.buildForm(result);
      });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateLogSettings(this.getLogSettings()).subscribe(
        result => {
          // updated
        });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = [];
    this.enabledOrDisabled.push({ label: 'Enabled', value: true });
    this.enabledOrDisabled.push({ label: 'Disabled', value: false });
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
      logSize: [logSettings.logSize || [Validators.required]],
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
