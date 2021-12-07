import { Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-multi-text',
  templateUrl: './input-multi-text.component.html',
  styleUrls: ['./input-multi-text.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputMultiTextComponent),
    multi: true
  }]
})
export class InputMultiTextComponent extends InputComponent {

  @Input()
  options: SelectItem[]; // optional list of options to select from

  newValue: string;
  addButtonDisabled = true;

  constructor(protected controlContainer: ControlContainer) {
    super(controlContainer);
  }

  get values(): string[] {
    return this.control ? this.control.value : [];
  }

  onValueChange(event: { event: MouseEvent, value: string }, originalValue: string): void { // event model exposed by p-dropdown onchange
    // Replace original value with change value
    const changedValue = event.value;
    if (changedValue) {
      this.control.setValue(this.values.map((val) => val === originalValue ? changedValue.trim() : val));
    }
  }

  onValueKeyup(event: KeyboardEvent, originalValue: string): void {
    // Replace original value with change value
    const changedValue = (event.target as HTMLInputElement).value;
    if (changedValue && changedValue.trim()) {
      this.control.setValue(this.values.map((val) => val === originalValue ? changedValue.trim() : val));
    }
  }

  removeValue(value: string): void {
    // Remove value
    this.control.setValue(this.values.filter((val) => val !== value));
  }

  onNewValueChange(event: { event: MouseEvent, value: string }): void { // event model exposed by p-dropdown onchange
    if (event.value) {
      this.addButtonDisabled = false;
    } else {
      this.addButtonDisabled = true;
    }
  }

  onNewValueKeyup(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    if (value && value.trim()) {
      this.addButtonDisabled = false;
    } else {
      this.addButtonDisabled = true;
    }
  }

  addNewValue(): void {
    // Add new value
    if (this.newValue) {
      if (!this.values.includes(this.newValue.trim())) {
        this.control.setValue(this.values.concat(this.newValue.trim()));
      }
      this.newValue = ''; // clear new value
      this.addButtonDisabled = true;
    }
  }
}
