import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';
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

  onInputSwitchChange(event: InputSwitchOnChangeEvent): void {
    this.changeEvent.emit(event);
  }
}
