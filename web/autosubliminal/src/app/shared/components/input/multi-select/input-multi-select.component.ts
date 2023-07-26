import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MultiSelectBlurEvent, MultiSelectChangeEvent, MultiSelectFocusEvent } from 'primeng/multiselect';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-multi-select',
  templateUrl: './input-multi-select.component.html',
  styleUrls: ['./input-multi-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputMultiSelectComponent),
    multi: true
  }]
})
export class InputMultiSelectComponent extends InputComponent {

  @Input()
  options: SelectItem[];

  @Input()
  placeholder = 'Select items';

  removeItem(item: any): void {
    // Filter out removed item
    this.control.setValue((this.control.value as any[]).filter((val) => val !== item));
  }

  onMultiSelectFocus(event: MultiSelectFocusEvent): void {
    this.focusEvent.emit(event);
  }

  onMultiSelectChange(event: MultiSelectChangeEvent): void {
    this.changeEvent.emit(event);
  }

  onMultiSelectBlur(event: MultiSelectBlurEvent): void {
    this.blurEvent.emit(event);
  }
}
