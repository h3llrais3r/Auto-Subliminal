import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../services/api/settings.service';
import { MessageService } from '../../../services/message.service';
import { FormUtils } from '../../../components/forms/form-utils';
import { IconDropdownComponent } from '../../../components/icon-dropdown/icon-dropdown.component';
import { InputMultiTextComponent } from '../../../components/input/multi-text/input-multi-text.component';
import { SkipMappingSettings } from '../../../models/settings';

@Component({
  selector: 'app-settings-skipmapping',
  templateUrl: './settings-skipmapping.component.html',
  styleUrls: ['./settings-skipmapping.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, PanelModule, ButtonModule, IconDropdownComponent, InputMultiTextComponent]
})
export class SettingsSkipmappingComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  saveAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private settingsService = inject(SettingsService);
  private appSettingsService = inject(AppSettingsService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.settingsService.getSkipMappingSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (skipMappingSettings) => {
        this.buildForm(skipMappingSettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the skipmapping settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateSkipMappingSettings(this.getSkipMappingSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('Skipmapping settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the skipmapping settings!')
      });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  private buildForm(skipMappingSettings: SkipMappingSettings): void {
    this.settingsForm = this.fb.group({
      skipShowMapping: [skipMappingSettings.skipShowMapping || [], []],
      skipMovieMapping: [skipMappingSettings.skipMovieMapping || [], []]
    });
  }

  private getSkipMappingSettings(): SkipMappingSettings {
    const settings = new SkipMappingSettings();
    settings.skipShowMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'skipShowMapping');
    settings.skipMovieMapping = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'skipMovieMapping');
    return settings;
  }
}
