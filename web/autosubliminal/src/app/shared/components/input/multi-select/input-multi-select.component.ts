import { NgFor, NgIf } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { SelectItem, SharedModule } from 'primeng/api';
import { MultiSelectBlurEvent, MultiSelectChangeEvent, MultiSelectFocusEvent, MultiSelectModule } from 'primeng/multiselect';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-multi-select',
  templateUrl: './input-multi-select.component.html',
  styleUrls: ['./input-multi-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputMultiSelectComponent),
    multi: true
  }],
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, ReactiveFormsModule, MultiSelectModule, SharedModule]
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
