import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItem } from 'primeng/api';
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

  constructor(protected controlContainer: ControlContainer, protected changeDetectorRef: ChangeDetectorRef) {
    super(controlContainer, changeDetectorRef);
  }

  removeItem(item: any): void {
    // Filter out removed item
    this.control.setValue((this.control.value as any[]).filter((val) => val !== item));
  }
}
