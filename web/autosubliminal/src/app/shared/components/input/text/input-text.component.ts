import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
  }]
})
export class InputTextComponent extends InputComponent {

  @Input()
  type = 'text';

  @Input()
  placeholder = '';

  @Input()
  mask = '';

  @Input()
  dropSpecialCharacters = true;

  constructor(protected controlContainer: ControlContainer, protected changeDetectorRef: ChangeDetectorRef) {
    super(controlContainer, changeDetectorRef);
  }
}
