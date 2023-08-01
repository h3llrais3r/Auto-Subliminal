import { AbstractControl, UntypedFormGroup, ValidationErrors } from '@angular/forms';
import $ from 'jquery';
import { SelectItem } from 'primeng/api';
import { appSettings } from '../app-settings.service';

export class FormUtils {

  static isFormControlValueEmpty(formGroup: UntypedFormGroup, fieldName: string): boolean {
    const value = formGroup.controls[fieldName].value;
    return value == null || value.length === 0;
  }

  static getFormControlValue<T>(formGroup: UntypedFormGroup, fieldName: string): T {
    let value = formGroup.controls[fieldName].value;
    if (value && typeof value === 'string') {
      value = value.trim();
    }
    return value as T;
  }

  static setFormControlValue(formGroup: UntypedFormGroup, fieldName: string, value: string, defaultValue = ''): void {
    formGroup.controls[fieldName].setValue(value ? value : defaultValue);
  }

  static enableFormControlField(formGroup: UntypedFormGroup, fieldName: string): void {
    formGroup.controls[fieldName].enable();
  }

  static disableFormControlField(formGroup: UntypedFormGroup, fieldName: string): void {
    formGroup.controls[fieldName].disable();
  }

  static markFormControlFieldsAsDirty(formGroup: UntypedFormGroup): void {
    // Mark all controls as dirty (it seems that formGroup.markAsDirty() is not doing the same thing)
    Object.values(formGroup.controls).forEach((control) => control.markAsDirty());
  }

  static addFormControlValidationErrors(control: AbstractControl, errors: ValidationErrors): void {
    // Add all validation errors to control errors
    if (control.errors) {
      Object.keys(errors).forEach((key) => {
        control.errors[key] = errors[key];
      });
    } else {
      control.setErrors(errors);
    }
    control.markAsTouched();
  }

  static clearFormControlValidationErrors(control: AbstractControl, errors: ValidationErrors): void {
    if (control.errors) {
      let filtered: ValidationErrors = Object.keys(control.errors)
        .filter((key) => {
          return !(key in errors); // only keep keys that are not in the list of errors to clear
        })
        .reduce((obj, key) => {
          obj[key] = control.errors[key];
          return obj;
        }, {});
      if (Object.keys(filtered).length === 0) {
        filtered = null; // if no validation errors, object should be null to make sure it's considered as valid!
      }
      control.setErrors(filtered);
    }
    control.markAsTouched();
  }

  static scrollToTop(): void {
    $('html,body').animate({ scrollTop: 0 }, 'smooth');
  }

  static scrollToFirstInvalidField(formGroup: UntypedFormGroup): void {
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
