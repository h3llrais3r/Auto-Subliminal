import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';

// Abstract input component to be used as base class for all our input components!
@Component({
  template: ''
})
export abstract class InputComponent implements ControlValueAccessor {

  @ViewChild(FormControlDirective, { static: true }) // must be true to get it working!
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  @Input()
  id: string;

  @Input()
  validationFeedback = true; // controls when the validation feedback is visible (default true)

  @Input()
  mandatory = false;

  @Input()
  disabled = false;

  // tslint:disable-next-line: no-output-native
  @Output()
  keyup: EventEmitter<any> = new EventEmitter(); // allows custom onKeyup functionality (keyup)="..." when component is created

  get control(): FormControl {
    return this.formControl || this.controlContainer.control.get(this.formControlName) as FormControl;
  }

  constructor(protected controlContainer: ControlContainer) { }

  clearInput(): void {
    this.control.setValue('');
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }

  get validationClass(): string {
    // Validation is shown on submit
    let validationClass = '';
    if (this.validationFeedback) {
      if (this.control.invalid) {
        validationClass = 'invalid';
      } else if (this.control.value !== '') {
        validationClass = 'valid';
      }
    }
    return validationClass;
  }

  onKeyup(event: KeyboardEvent): void {
    this.keyup.emit(event);
  }
}
