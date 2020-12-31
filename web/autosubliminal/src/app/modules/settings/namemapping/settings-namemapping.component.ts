import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService } from '../../../core/services/api/settings.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { NameMappingSettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-namemapping',
  templateUrl: './settings-namemapping.component.html',
  styleUrls: ['./settings-namemapping.component.scss']
})
export class SettingsNamemappingComponent implements OnInit {

  settingsForm: FormGroup;

  saveAttempt = false;

  constructor(private fb: FormBuilder, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getNameMappingSettings().subscribe(
      result => {
        this.buildForm(result);
      });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateNameMappingSettings(this.getNameMappingSettings()).subscribe(
        result => {
          // updated
        });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildForm(nameMappingSettings: NameMappingSettings): void {
    this.settingsForm = this.fb.group({
      showNameMapping: [nameMappingSettings.showNameMapping, []],
      addic7edShowNameMapping: [nameMappingSettings.addic7edShowNameMapping, []],
      alternativeShowNameMapping: [nameMappingSettings.alternativeShowNameMapping, []],
      movieNameMapping: [nameMappingSettings.movieNameMapping, []],
      alternativeMovieNameMapping: [nameMappingSettings.alternativeMovieNameMapping, []]
    });
  }

  private getNameMappingSettings(): NameMappingSettings {
    const settings = new NameMappingSettings();
    settings.showNameMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'showNameMapping');
    settings.addic7edShowNameMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'addic7edShowNameMapping');
    settings.alternativeShowNameMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'alternativeShowNameMapping');
    settings.movieNameMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'movieNameMapping');
    settings.alternativeMovieNameMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'alternativeMovieNameMapping');
    return settings;
  }
}
