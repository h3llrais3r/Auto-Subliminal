import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService } from '../../../core/services/api/settings.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { SkipMappingSettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-skipmapping',
  templateUrl: './settings-skipmapping.component.html',
  styleUrls: ['./settings-skipmapping.component.scss']
})
export class SettingsSkipmappingComponent implements OnInit {

  settingsForm: FormGroup;

  saveAttempt = false;

  constructor(private fb: FormBuilder, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getSkipMappingSettings().subscribe(
      result => {
        this.buildForm(result);
      });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateSkipMappingSettings(this.getSkipMappingSettings()).subscribe(
        result => {
          // updated
        });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildForm(skipMappingSettings: SkipMappingSettings): void {
    this.settingsForm = this.fb.group({
      skipShowMapping: [skipMappingSettings.skipShowMapping, []],
      skipMovieMapping: [skipMappingSettings.skipMovieMapping, []],
    });
  }

  private getSkipMappingSettings(): SkipMappingSettings {
    const settings = new SkipMappingSettings();
    settings.skipShowMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'skipShowMapping');
    settings.skipMovieMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'skipMovieMapping');
    return settings;
  }
}
