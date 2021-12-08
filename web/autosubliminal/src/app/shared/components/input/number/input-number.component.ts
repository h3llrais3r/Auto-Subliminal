import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputNumberComponent),
    multi: true
  }]
})
export class InputNumberComponent extends InputComponent {

  @Input()
  mode = 'decimal'; // default decimal

  @Input()
  useGrouping = false; // default no grouping

  @Input()
  showButtons = true; // default show buttons

  @Input()
  step = 1; // default 1

  @Input()
  min: number;

  @Input()
  max: number;

  @Input()
  suffix: string;

  constructor(protected controlContainer: ControlContainer, protected changeDetectorRef: ChangeDetectorRef) {
    super(controlContainer, changeDetectorRef);
  }
}
