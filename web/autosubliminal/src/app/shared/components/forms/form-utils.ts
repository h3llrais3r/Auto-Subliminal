import { FormGroup } from '@angular/forms';
import $ from 'jquery';
import { SelectItem } from 'primeng/api';
import { appSettings } from '../../../app-settings.service';

export class FormUtils {

  static isFormControlValueEmpty(formGroup: FormGroup, fieldName: string): boolean {
    const value = formGroup.controls[fieldName].value;
    return value == null || value.length === 0;
  }

  static getFormControlValue<T>(formGroup: FormGroup, fieldName: string): T {
    let value = formGroup.controls[fieldName].value;
    if (value && typeof value === 'string') {
      value = value.trim();
    }
    return value as T;
  }

  static setFormControlValue(formGroup: FormGroup, fieldName: string, value: string, defaultValue = ''): void {
    formGroup.controls[fieldName].setValue(value ? value : defaultValue);
  }

  static enableFormControlField(formGroup: FormGroup, fieldName: string): void {
    formGroup.controls[fieldName].enable();
  }

  static disableFormControlField(formGroup: FormGroup, fieldName: string): void {
    formGroup.controls[fieldName].disable();
  }

  static markFormControlFieldsAsDirty(formGroup: FormGroup): void {
    // Mark all controls as dirty (it seems that formGroup.markAsDirty() is not doing the same thing)
    Object.values(formGroup.controls).forEach((control) => control.markAsDirty());
  }

  static scrollToTop(): void {
    $('html,body').animate({ scrollTop: 0 }, 'smooth');
  }

  static scrollToFirstInvalidField(formGroup: FormGroup): void {
    // Get first invalid form control field
    let formControlName: string;
    for (const controlName in formGroup.controls) {
      if (formGroup.controls[controlName].invalid) {
        formControlName = controlName;
        break;
      }
    }
    // Scroll to it
    if (formControlName) {
      const selector = '#' + formControlName;
      const el = $(selector);
      $('html,body').animate({ scrollTop: el.offset().top - 30 }, 'smooth');
    }
  }

  static enabledOrDisabledSelectItems(): SelectItem[] {
    const enabledOrDisabled: SelectItem[] = [];
    enabledOrDisabled.push({ label: 'Enabled', value: true });
    enabledOrDisabled.push({ label: 'Disabled', value: false });
    return enabledOrDisabled;
  }

  static languageSelectItems(): SelectItem[] {
    const languages: SelectItem[] = [];
    appSettings.languages.forEach((language) => languages.push({ label: language.name, value: language.code }));
    return languages;
  }
}
