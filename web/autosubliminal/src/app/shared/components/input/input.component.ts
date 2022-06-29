import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, ControlValueAccessor, UntypedFormControl } from '@angular/forms';

// Abstract input component to be used as base class for all our input components!
@Component({
  template: ''
})
export abstract class InputComponent implements ControlValueAccessor {

  @Input()
  formControl: UntypedFormControl;

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

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-native
  keyup: EventEmitter<any> = new EventEmitter(); // allows custom onKeyup functionality (keyup)="..." when component is created

  value: any; // value of input component

  onChange: (_: any) => {};

  onTouched: () => {};

  constructor(protected controlContainer: ControlContainer, protected changeDetectorRef: ChangeDetectorRef) { }

  get control(): UntypedFormControl {
    return this.formControl || this.controlContainer.control.get(this.formControlName) as UntypedFormControl;
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

  writeValue(obj: any): void {
    this.value = obj;
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  clearInput(): void {
    this.control.setValue('');
  }

  onKeyup(event: KeyboardEvent): void {
    this.keyup.emit(event);
  }
}
