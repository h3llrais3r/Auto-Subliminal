import { UntypedFormControl, ValidationErrors } from '@angular/forms';

const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Format: test@test[.com]

// Copied from angular validators
function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

function pattern(control: UntypedFormControl, regex: RegExp): ValidationErrors | null {
  if (isEmptyInputValue(control.value)) {
    return null; // don't validate empty values to allow optional controls
  }
  const value: string = control.value;
  return regex.test(value) ? null : { pattern: { requiredPattern: regex, actualValue: value } };
}

export class FormValidators {

  // Not blank validator
  static notBlank(control: UntypedFormControl): ValidationErrors | null {
    if (isEmptyInputValue(control.value)) {
      return null; // don't validate empty values to allow optional controls
    }
    const value = control.value || '';
    return value.length > 0 && value.trim().length === 0 ? { blank: true } : null;
  }

  static notEmpty(control: UntypedFormControl): ValidationErrors | null {
    return isEmptyInputValue(control.value) ? { empty: true } : null;
  }

  // Email validator
  static email(control: UntypedFormControl): ValidationErrors | null {
    return pattern(control, REGEX_EMAIL);
  }
}
