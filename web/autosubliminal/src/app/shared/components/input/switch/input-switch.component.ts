import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSwitchComponent),
    multi: true
  }]
})
export class InputSwitchComponent extends InputComponent {

  @Input()
  label: string;

  constructor(protected controlContainer: ControlContainer, protected changeDetectorRef: ChangeDetectorRef) {
    super(controlContainer, changeDetectorRef);
  }
}
