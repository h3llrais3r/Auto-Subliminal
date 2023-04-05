import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputDropdownComponent),
    multi: true
  }]
})
export class InputDropdownComponent extends InputComponent {

  @Input()
  options: SelectItem[];

  constructor(protected override controlContainer: ControlContainer, protected override changeDetectorRef: ChangeDetectorRef) {
    super(controlContainer, changeDetectorRef);
  }
}
