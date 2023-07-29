import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControlDirective, UntypedFormControl } from '@angular/forms';

// Abstract input component to be used as base class for all our input components!
@Component({
  template: ''
})
export abstract class InputComponent implements ControlValueAccessor {

  @ViewChild(FormControlDirective, { static: true }) // must be true to get it working!
  formControlDirective: FormControlDirective;

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
  focusEvent = new EventEmitter<any>(); // allows custom onFocus functionality (focusEvent)="..." when component is created

  @Output()
  keyDownEvent = new EventEmitter<any>(); // allows custom onKeyDown functionality (keyDownEvent)="..." when component is created

  @Output()
  keyUpEvent = new EventEmitter<any>(); // allows custom onKeyUp functionality (keyUpEvent)="..." when component is created

  @Output()
  changeEvent = new EventEmitter<any>(); // allows custom onChange functionality (changeEvent)="..." when component is created

  @Output()
  blurEvent = new EventEmitter<any>(); // allows custom onBlur functionality (blurEvent)="..." when component is created

  protected controlContainer = inject(ControlContainer);
  protected changeDetectorRef = inject(ChangeDetectorRef);

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
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState?.(isDisabled);
  }

  onFocus(event: Event): void {
    this.focusEvent.emit(event);
  }

  onKeyDown(event: KeyboardEvent): void {
    this.keyDownEvent.emit(event);
  }

  onKeyUp(event: KeyboardEvent): void {
    this.keyUpEvent.emit(event);
  }

  onChange(event: Event): void {
    this.changeEvent.emit(event);
  }

  onBlur(event: Event): void {
    this.blurEvent.emit(event);
  }
}
