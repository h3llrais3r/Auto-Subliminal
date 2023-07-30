import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../core/services/api/settings.service';
import { MessageService } from '../../../core/services/message.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { IconDropdownComponent } from '../../../shared/components/icon-dropdown/icon-dropdown.component';
import { InputMultiTextComponent } from '../../../shared/components/input/multi-text/input-multi-text.component';
import { NameMappingSettings } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-namemapping',
  templateUrl: './settings-namemapping.component.html',
  styleUrls: ['./settings-namemapping.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, PanelModule, ButtonModule, MessageModule, IconDropdownComponent, InputMultiTextComponent]
})
export class SettingsNamemappingComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  saveAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private settingsService = inject(SettingsService);
  private appSettingsService = inject(AppSettingsService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.settingsService.getNameMappingSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (nameMappingSettings) => {
        this.buildForm(nameMappingSettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the namemapping settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateNameMappingSettings(this.getNameMappingSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('Namemapping settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the namemapping settings!')
      });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildForm(nameMappingSettings: NameMappingSettings): void {
    this.settingsForm = this.fb.group({
      showNameMapping: [nameMappingSettings.showNameMapping || [], []],
      addic7edShowNameMapping: [nameMappingSettings.addic7edShowNameMapping || [], []],
      alternativeShowNameMapping: [nameMappingSettings.alternativeShowNameMapping || [], []],
      movieNameMapping: [nameMappingSettings.movieNameMapping || [], []],
      alternativeMovieNameMapping: [nameMappingSettings.alternativeMovieNameMapping || [], []]
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
